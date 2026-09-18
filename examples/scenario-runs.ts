import { ModernEdiClient, getModernEdiResponseMetadata, type StartScenarioRunRequest } from '../src/index.js';

/** Server-side example: supply selectors captured from an already applied binding. */
export async function startConversation(client: ModernEdiClient, selection: StartScenarioRunRequest,
  persistedIdempotencyKey: string) {
  // Persist this selection and key before calling. A lost-response retry must reuse both.
  const response = await client.scenarioRuns.startScenarioRunRaw({
    idempotencyKey: persistedIdempotencyKey,
    startScenarioRunRequest: selection,
  });
  const result = await response.value();
  return { run: result.run, metadata: getModernEdiResponseMetadata(response.raw) };
}

export async function attachOrder(client: ModernEdiClient, runId: string, etag: string,
  idempotencyKey: string, messageId: string, transactionKey: string) {
  // Match the applied definition's real step ID; this example assumes purchaseOrder.
  const response = await client.scenarioRuns.attachScenarioRunObservationRaw({
    runId, ifMatch: etag, idempotencyKey,
    scenarioRunObservationRequest: { stepId: 'purchaseOrder', occurrence: 1, messageId, transactionKey },
  });
  return { run: (await response.value()).run, metadata: getModernEdiResponseMetadata(response.raw) };
}

export async function downloadProof(client: ModernEdiClient, runId: string) {
  const response = await client.scenarioRuns.downloadScenarioEvidenceReportRaw({ runId });
  // Save these exact bytes, not JSON.stringify(await response.value()).
  const bytes = new Uint8Array(await response.raw.arrayBuffer());
  return { bytes, sha256: getModernEdiResponseMetadata(response.raw).contentSha256 };
}
