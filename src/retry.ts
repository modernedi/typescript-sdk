import type { FetchAPI } from "./generated/runtime.js";

const DEFAULT_RETRYABLE_STATUSES = [429, 502, 503, 504] as const;

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

function requestPath(input: RequestInfo | URL): string | undefined {
  const value =
    typeof input === "string"
      ? input
      : input instanceof URL
        ? input.href
        : input.url;
  try {
    return new URL(value, "https://sdk.invalid").pathname;
  } catch {
    return undefined;
  }
}

function isTransactionWatchOperation(input: RequestInfo | URL, method: string): boolean {
  if (method !== "PUT" && method !== "DELETE") {
    return false;
  }
  const path = requestPath(input);
  return path !== undefined
    && /\/v1\/integration\/transactions\/[^/]+\/[^/]+\/watch\/?$/.test(path);
}

function isConfigurationPlanOperation(input: RequestInfo | URL, method: string): boolean {
  if (method !== "POST") {
    return false;
  }
  const path = requestPath(input);
  return path !== undefined && /\/v1\/configuration\/plan\/?$/.test(path);
}

function requestCanBeRetried(input: RequestInfo | URL, init: RequestInit | undefined): boolean {
  const method = requestMethod(input, init);
  if (method === "GET" || method === "HEAD" || method === "OPTIONS") {
    return true;
  }
  if (isTransactionWatchOperation(input, method)) {
    return true;
  }
  if (isConfigurationPlanOperation(input, method)) {
    return true;
  }
  const requestHeaders =
    init?.headers
    ?? (typeof input !== "string" && !(input instanceof URL) ? input.headers : undefined);
  return new Headers(requestHeaders).has("Idempotency-Key");
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
 * Adds conservative opt-in retries. GET/HEAD/OPTIONS, read-only configuration
 * plans, and idempotent transaction watch/unwatch requests are safe to retry
 * without an `Idempotency-Key`; other mutating requests require one.
 */
export function createRetryingFetch(
  fetchApi: FetchAPI,
  retryOptions: ModernEdiRetryOptions = {},
): FetchAPI {
  const options = normalizeRetryOptions(retryOptions);
  return async (input, init) => {
    const retryableRequest = requestCanBeRetried(input, init);
    for (let attempt = 1; attempt <= options.maxAttempts; attempt += 1) {
      try {
        const response = await fetchApi(input, init);
        const shouldRetry =
          retryableRequest &&
          attempt < options.maxAttempts &&
          options.retryableStatuses.has(response.status);
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
        await delay(waitFor, init?.signal);
      } catch (error) {
        if (!retryableRequest || attempt >= options.maxAttempts || init?.signal?.aborted) {
          throw error;
        }
        await delay(exponentialDelay(attempt, options), init?.signal);
      }
    }
    throw new Error("Retry loop exhausted without returning or throwing");
  };
}
