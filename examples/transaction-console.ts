import {
  ModernEdiApiError,
  ModernEdiClient,
  paginateCursor,
} from "@modernedi/sdk";

const apiKey = process.env.MODERNEDI_API_KEY;
if (!apiKey) {
  throw new Error("Set MODERNEDI_API_KEY before running this example");
}

const modernEdi = new ModernEdiClient({
  apiKey,
  retry: { maxAttempts: 3 },
});

try {
  for await (const transaction of paginateCursor(
    (cursor) =>
      modernEdi.transactions.listIntegrationTransactions({
        environment: "production",
        needsAttention: true,
        mappingStatus: ["FAILED", "COMPLETED_WITH_ERRORS"],
        cursor,
        limit: 100,
      }),
    (page) => ({
      items: page.transactions,
      nextCursor: page.nextCursor,
    }),
  )) {
    console.log(
      transaction.messageId,
      transaction.transactionKey,
      transaction.mappingStatus.status,
      transaction.attentionReasons,
    );
  }
} catch (error) {
  if (error instanceof ModernEdiApiError) {
    console.error(
      `ModernEDI request failed: ${error.code} (${error.requestId ?? "no request id"})`,
    );
  }
  throw error;
}
