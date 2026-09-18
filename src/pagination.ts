export interface CursorPage<T> {
  items: readonly T[];
  nextCursor?: string | null;
}

export interface CursorPaginationOptions {
  cursor?: string;
  maxPages?: number;
}

/**
 * Converts any ModernEDI cursor endpoint into an async iterable without imposing endpoint-specific
 * response names. Cursors are opaque and are returned to the loader unchanged.
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
