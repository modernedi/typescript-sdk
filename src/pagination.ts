import type { MappedOutputMessage, MappedOutputQueueResponse } from "./generated/models/index.js";

export interface CursorPage<T> {
  items: readonly T[];
  nextCursor?: string | null;
}

export interface CursorPaginationOptions {
  cursor?: string;
  maxPages?: number;
}

/**
 * Converts a read-only ModernEDI list endpoint into an async iterable without imposing endpoint-specific
 * response names. Cursors are opaque and are returned to the loader unchanged.
 * Use iterateMappedOutputs for the lease-acquiring mapped-output queue.
 */
export async function* paginateCursor<T, Page>(
  loadPage: (cursor: string | undefined) => Promise<Page>,
  selectPage: (page: Page) => CursorPage<T>,
  options: CursorPaginationOptions = {},
): AsyncGenerator<T, void, undefined> {
  const maxPages = options.maxPages ?? Number.POSITIVE_INFINITY;
  if (
    maxPages !== Number.POSITIVE_INFINITY &&
    (!Number.isInteger(maxPages) || maxPages <= 0)
  ) {
    throw new TypeError("maxPages must be a positive integer or Infinity");
  }

  let cursor = options.cursor;
  let pages = 0;
  const seenCursors = new Set<string>(cursor === undefined ? [] : [cursor]);

  while (pages < maxPages) {
    const page = selectPage(await loadPage(cursor));
    pages += 1;
    for (const item of page.items) {
      yield item;
    }

    const nextCursor = page.nextCursor ?? undefined;
    if (nextCursor === undefined) {
      return;
    }
    if (seenCursors.has(nextCursor) || nextCursor === cursor) {
      throw new Error("ModernEDI cursor pagination returned a repeated cursor");
    }
    seenCursors.add(nextCursor);
    cursor = nextCursor;
  }
}

export interface MappedOutputIterationOptions {
  cursor?: string;
  /** Maximum polls in this invocation, including empty scan pages. Defaults to 1000. */
  maxPolls?: number;
}

/**
 * Polls a bounded queue scan. Repeated cursors are valid: leases advance the queue.
 * Persist each output and acknowledge its receipt handle yourself. This helper does
 * not acknowledge, retry failed polls, deduplicate redeliveries, or continuously watch.
 */
export async function* iterateMappedOutputs(
  loadPage: (cursor: string | undefined) => Promise<MappedOutputQueueResponse>,
  options: MappedOutputIterationOptions = {},
): AsyncGenerator<MappedOutputMessage, void, undefined> {
  const maxPolls = options.maxPolls ?? 1000;
  if (!Number.isInteger(maxPolls) || maxPolls <= 0) {
    throw new TypeError("maxPolls must be a positive integer");
  }
  let cursor = options.cursor;
  for (let poll = 0; poll < maxPolls; poll += 1) {
    const page = await loadPage(cursor);
    yield* page.messages;
    cursor = page.nextCursor ?? undefined;
    if (cursor === undefined) return;
  }
}
