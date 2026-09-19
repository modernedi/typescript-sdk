import type { Middleware } from "./generated/runtime.js";

export interface ModernEdiErrorBody {
  code?: string;
  message?: string;
  retryable?: boolean;
  requestId?: string;
  details?: unknown;
}

export interface ModernEdiErrorEnvelope {
  success?: boolean;
  error?: ModernEdiErrorBody;
}

export class ModernEdiApiError extends Error {
  override readonly name = "ModernEdiApiError";

  constructor(
    message: string,
    readonly status: number,
    readonly code: string,
    readonly retryable: boolean,
    readonly requestId: string | undefined,
    readonly details: unknown,
    readonly retryAfter: string | undefined,
    readonly responseBody: unknown,
    readonly response: Response,
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function parseErrorEnvelope(value: unknown): ModernEdiErrorBody | undefined {
  if (!isRecord(value) || !isRecord(value.error)) {
    return undefined;
  }
  const error = value.error;
  return {
    ...(asString(error.code) === undefined ? {} : { code: asString(error.code) }),
    ...(asString(error.message) === undefined ? {} : { message: asString(error.message) }),
    ...(typeof error.retryable === "boolean" ? { retryable: error.retryable } : {}),
    ...(asString(error.requestId) === undefined
      ? {}
      : { requestId: asString(error.requestId) }),
    ...("details" in error ? { details: error.details } : {}),
  };
}

async function parseResponseBody(response: Response): Promise<unknown> {
  const text = await response.clone().text();
  if (text.length === 0) {
    return undefined;
  }
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

export async function modernEdiApiErrorFromResponse(
  response: Response,
): Promise<ModernEdiApiError> {
  const responseBody = await parseResponseBody(response);
  const platformError = parseErrorEnvelope(responseBody);
  const requestId =
    platformError?.requestId ?? response.headers.get("X-Request-Id") ?? undefined;
  const retryAfter = response.headers.get("Retry-After") ?? undefined;
  const message =
    platformError?.message ??
    (response.statusText.length > 0
      ? `ModernEDI API request failed: ${response.status} ${response.statusText}`
      : `ModernEDI API request failed with HTTP ${response.status}`);

  return new ModernEdiApiError(
    message,
    response.status,
    platformError?.code ?? "http_error",
    platformError?.retryable ?? false,
    requestId,
    platformError?.details,
    retryAfter,
    responseBody,
    response,
  );
}

export function createModernEdiErrorMiddleware(): Middleware {
  return {
    async post({ response }) {
      // The generated operation still enforces which statuses its contract accepts.
      if (!response.ok && response.status !== 304) {
        throw await modernEdiApiErrorFromResponse(response);
      }
      return response;
    },
  };
}
