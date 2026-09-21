import type { FetchAPI } from "./generated/runtime.js";
import { IDEMPOTENCY_KEY_OPERATIONS } from "./generated/buildMetadata.js";

const DEFAULT_RETRYABLE_STATUSES = [429, 502, 503, 504] as const;
const idempotencyKeyOperations = IDEMPOTENCY_KEY_OPERATIONS.map(({ method, path }) => ({
  method,
  path: new RegExp(`^${path.split("/").map(segment =>
    /^\{[^}]+\}$/.test(segment) ? "[^/]+" : segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  ).join("/")}/?$`),
}));

export interface ModernEdiRetryOptions {
  /**
   * Total request attempts, including the first call. Must be between 1 and 10.
   */
  maxAttempts?: number;
  baseDelayMs?: number;
  maxDelayMs?: number;
  retryableStatuses?: readonly number[];
}

interface NormalizedRetryOptions {
  maxAttempts: number;
  baseDelayMs: number;
  maxDelayMs: number;
  retryableStatuses: ReadonlySet<number>;
}

function normalizeNonNegativeNumber(value: number | undefined, fallback: number, name: string) {
  const normalized = value ?? fallback;
  if (!Number.isFinite(normalized) || normalized < 0) {
    throw new TypeError(`${name} must be a non-negative finite number`);
  }
  return normalized;
}

function normalizeRetryOptions(options: ModernEdiRetryOptions): NormalizedRetryOptions {
  const maxAttempts = options.maxAttempts ?? 3;
  if (!Number.isInteger(maxAttempts) || maxAttempts < 1 || maxAttempts > 10) {
    throw new TypeError("maxAttempts must be an integer between 1 and 10");
  }
  return {
    maxAttempts,
    baseDelayMs: normalizeNonNegativeNumber(options.baseDelayMs, 250, "baseDelayMs"),
    maxDelayMs: normalizeNonNegativeNumber(options.maxDelayMs, 10_000, "maxDelayMs"),
    retryableStatuses: new Set(options.retryableStatuses ?? DEFAULT_RETRYABLE_STATUSES),
  };
}

function requestMethod(input: RequestInfo | URL, init: RequestInit | undefined): string {
  if (init?.method) {
    return init.method.toUpperCase();
  }
  if (typeof input !== "string" && !(input instanceof URL) && input.method) {
    return input.method.toUpperCase();
  }
  return "GET";
}

function requestPath(input: RequestInfo | URL, basePath: string): string | undefined {
  const value =
    typeof input === "string"
      ? input
      : input instanceof URL
        ? input.href
        : input.url;
  try {
    const path = new URL(value, "https://sdk.invalid").pathname;
    return path.startsWith(`${basePath}/`) ? path.slice(basePath.length) : undefined;
  } catch {
    return undefined;
  }
}

function isTransactionWatchOperation(path: string, method: string): boolean {
  if (method !== "PUT" && method !== "DELETE") {
    return false;
  }
  return /^\/v1\/integration\/transactions\/[^/]+\/[^/]+\/watch\/?$/.test(path);
}

function isConfigurationPlanOperation(path: string, method: string): boolean {
  if (method !== "POST") {
    return false;
  }
  return /^\/v1\/configuration\/plan\/?$/.test(path);
}

function requestCanBeRetried(input: RequestInfo | URL, init: RequestInit | undefined, basePath: string): boolean {
  const method = requestMethod(input, init);
  const path = requestPath(input, basePath);
  // Polling commits visibility leases even though the HTTP method is GET. A lost
  // response must reach the caller, not silently lease a different batch on retry.
  if (path === undefined || (method === "GET" && /^\/v1\/mapped-outputs\/?$/.test(path))) {
    return false;
  }
  if (method === "GET" || method === "HEAD" || method === "OPTIONS") {
    return true;
  }
  if (isTransactionWatchOperation(path, method)) {
    return true;
  }
  if (isConfigurationPlanOperation(path, method)) {
    return true;
  }
  const requestHeaders =
    init?.headers
    ?? (typeof input !== "string" && !(input instanceof URL) ? input.headers : undefined);
  return Boolean(new Headers(requestHeaders).get("Idempotency-Key")?.trim())
    && idempotencyKeyOperations.some(operation => operation.method === method && operation.path.test(path));
}

function retryAfterMilliseconds(response: Response): number | undefined {
  const value = response.headers.get("Retry-After")?.trim();
  if (!value) {
    return undefined;
  }
  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) {
    return seconds * 1_000;
  }
  const date = Date.parse(value);
  if (Number.isNaN(date)) {
    return undefined;
  }
  return Math.max(0, date - Date.now());
}

function abortError(): DOMException {
  return new DOMException("The operation was aborted", "AbortError");
}

async function delay(milliseconds: number, signal: AbortSignal | null | undefined): Promise<void> {
  if (signal?.aborted) {
    throw signal.reason ?? abortError();
  }
  if (milliseconds <= 0) {
    return;
  }
  await new Promise<void>((resolve, reject) => {
    let settled = false;
    const cleanup = () => signal?.removeEventListener("abort", onAbort);
    const timeout = setTimeout(() => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve();
    }, milliseconds);
    const onAbort = () => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(timeout);
      cleanup();
      reject(signal?.reason ?? abortError());
    };
    signal?.addEventListener("abort", onAbort, { once: true });
    if (signal?.aborted) {
      onAbort();
    }
  });
}

function exponentialDelay(attempt: number, options: NormalizedRetryOptions): number {
  return Math.min(options.baseDelayMs * 2 ** Math.max(0, attempt - 1), options.maxDelayMs);
}

/**
 * Adds conservative opt-in retries. Read-only GET/HEAD/OPTIONS, configuration
 * plans, and idempotent transaction watch/unwatch requests are safe to retry
 * without an `Idempotency-Key`; other mutating requests require a nonblank key
 * and an operation that declares idempotency support in the API contract.
 * Mapped-output polling acquires leases and is never automatically retried.
 */
export function createRetryingFetch(
  fetchApi: FetchAPI,
  retryOptions: ModernEdiRetryOptions = {},
  baseUrl: string = "https://api.modernedi.com",
): FetchAPI {
  const options = normalizeRetryOptions(retryOptions);
  const basePath = new URL(baseUrl).pathname.replace(/\/+$/, "");
  return async (input, init) => {
    const retryableRequest = requestCanBeRetried(input, init, basePath);
    if (!retryableRequest || options.maxAttempts === 1) {
      return fetchApi(input, init);
    }
    // Merge RequestInit once (including signal overrides), and retain an unread
    // body for retries. Fetch consumes each clone, not the retry template.
    const isRequest = typeof input !== "string" && !(input instanceof URL);
    const request = isRequest || init?.body instanceof ReadableStream ? new Request(input, init) : null;
    const signal = request?.signal ?? init?.signal;
    try {
      for (let attempt = 1; attempt <= options.maxAttempts; attempt += 1) {
        if (signal?.aborted) {
          throw signal.reason ?? abortError();
        }
        try {
          const requestAttempt = request?.clone();
          // Keep URL inputs and their original RequestInit options (including fetch extensions),
          // replacing only the single-use body with a fresh clone.
          const attemptInit = requestAttempt && !isRequest ? { ...init, body: requestAttempt.body } : init;
          const response = await fetchApi(isRequest ? requestAttempt! : input, isRequest ? undefined : attemptInit);
          const shouldRetry = attempt < options.maxAttempts && options.retryableStatuses.has(response.status);
          if (!shouldRetry) {
            return response;
          }
          const retryAfter = retryAfterMilliseconds(response);
          if (retryAfter !== undefined && retryAfter > options.maxDelayMs) {
            // Never retry earlier than the server requested. Return the response so the normal
            // structured error exposes Retry-After and the caller can schedule a later attempt.
            return response;
          }
          const waitFor = retryAfter ?? exponentialDelay(attempt, options);
          await response.body?.cancel();
          await delay(waitFor, signal);
        } catch (error) {
          if (attempt >= options.maxAttempts || signal?.aborted) {
            throw error;
          }
          await delay(exponentialDelay(attempt, options), signal);
        }
      }
      throw new Error("Retry loop exhausted without returning or throwing");
    } finally {
      // A cloned stream's cancellation may await its sibling; do not delay the
      // response while releasing the unused retry branch.
      void request?.body?.cancel().catch(() => {});
    }
  };
}
