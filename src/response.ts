export interface ModernEdiResponseMetadata {
  requestId?: string;
  retryAfter?: string;
  idempotencyReplayed?: boolean;
  etag?: string;
  location?: string;
  contentSha256?: string;
}

function optionalHeader(response: Response, name: string): string | undefined {
  return response.headers.get(name) ?? undefined;
}

function optionalBooleanHeader(response: Response, name: string): boolean | undefined {
  const value = response.headers.get(name)?.trim().toLowerCase();
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  return undefined;
}

/**
 * Reads ModernEDI correlation, retry, idempotency, and optimistic-concurrency headers from a
 * generated operation's `*Raw()` response.
 */
export function getModernEdiResponseMetadata(response: Response): ModernEdiResponseMetadata {
  const requestId = optionalHeader(response, "X-Request-Id");
  const retryAfter = optionalHeader(response, "Retry-After");
  const idempotencyReplayed = optionalBooleanHeader(response, "Idempotency-Replayed");
  const etag = optionalHeader(response, "ETag");
  const location = optionalHeader(response, "Location");
  const contentSha256 = optionalHeader(response, "X-Content-Sha256");

  return {
    ...(requestId === undefined ? {} : { requestId }),
    ...(retryAfter === undefined ? {} : { retryAfter }),
    ...(idempotencyReplayed === undefined ? {} : { idempotencyReplayed }),
    ...(etag === undefined ? {} : { etag }),
    ...(location === undefined ? {} : { location }),
    ...(contentSha256 === undefined ? {} : { contentSha256 }),
  };
}
