import {
  type MappedOutputMessage,
  type ModernEdiClient,
  verifyMappedOutputWebhook,
} from "@modernedi/sdk";

type ClaimDeliveryId = (deliveryId: string) => Promise<boolean>;
type ProcessMappedOutput = (messageId: string, message: MappedOutputMessage) => Promise<void>;

export async function receiveMappedOutputWebhook(
  rawBody: Uint8Array,
  headers: Headers,
  signingSecret: string,
  claimDeliveryId: ClaimDeliveryId,
  processMappedOutput: ProcessMappedOutput,
): Promise<"duplicate" | "test" | "processed"> {
  const event = verifyMappedOutputWebhook({ rawBody, headers, signingSecret });

  // Implement this as an atomic, durable insert with a uniqueness constraint.
  if (!await claimDeliveryId(event.deliveryId)) {
    return "duplicate";
  }
  if (event.event === "mapped_output.test") {
    return "test";
  }

  // Also make business processing idempotent on message.id across legitimate redeliveries.
  await processMappedOutput(event.message.id, event.message);
  return "processed";
}

export async function testMappedOutputWebhook(
  modernEdi: ModernEdiClient,
  partnerId: number,
) {
  const result = await modernEdi.mappedOutputs.testMappedOutputWebhook({ partnerId });
  return {
    requestId: result.requestId,
    delivered: result.delivered,
    destinationStatusCode: result.statusCode,
    error: result.error,
  };
}
