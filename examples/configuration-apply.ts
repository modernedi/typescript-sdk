import { readFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";

import {
  ConfigurationPlanRequestFromJSON,
  ModernEdiApiError,
  ModernEdiClient,
  getModernEdiResponseMetadata,
} from "@modernedi/sdk";

const apiKey = process.env.MODERNEDI_API_KEY;
const idempotencyKey = process.env.MODERNEDI_IDEMPOTENCY_KEY;
if (!apiKey || !idempotencyKey) {
  throw new Error("Set MODERNEDI_API_KEY and a persisted MODERNEDI_IDEMPOTENCY_KEY");
}

const requestPath = process.argv[2] ?? "configuration-plan-request.json";
const requestJson: unknown = JSON.parse(await readFile(requestPath, "utf8"));
const desired = ConfigurationPlanRequestFromJSON(requestJson);
const modernEdi = new ModernEdiClient({
  apiKey,
  retry: { maxAttempts: 3 },
});

try {
  const plan = await modernEdi.configurationAsCode.planIntegrationConfiguration({
    configurationPlanRequest: desired,
  });
  if (!plan.applicable || plan.planSha256 === null) {
    for (const diagnostic of plan.diagnostics) {
      console.error(diagnostic.severity, diagnostic.code, diagnostic.pointer, diagnostic.message);
    }
    throw new Error("Configuration plan is not applicable");
  }

  const submitted = await modernEdi.configurationAsCode.applyIntegrationConfigurationRaw({
    idempotencyKey,
    ifMatch: plan.currentSnapshotEtag,
    configurationApplyRequest: {
      planSha256: plan.planSha256,
      files: desired.files,
    },
  });
  const metadata = getModernEdiResponseMetadata(submitted.raw);
  let result = await submitted.value();
  console.log(
    result.operation.operationId,
    result.operation.status,
    metadata.idempotencyReplayed ?? false,
  );

  while (result.operation.status === "PENDING") {
    const retryAfterSeconds = Number(metadata.retryAfter ?? "1");
    await delay(Number.isFinite(retryAfterSeconds) ? retryAfterSeconds * 1_000 : 1_000);
    result = await modernEdi.configurationAsCode.getIntegrationConfigurationApplyOperation({
      operationId: result.operation.operationId,
    });
  }

  console.log(
    "Configuration applied",
    result.operation.appliedSnapshotEtag,
    result.operation.runtimeConfigurationRevision,
  );
} catch (error) {
  if (error instanceof ModernEdiApiError) {
    console.error(error.status, error.code, error.requestId, error.details);
  }
  throw error;
}
