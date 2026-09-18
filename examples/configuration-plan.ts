import { readFile } from "node:fs/promises";

import {
  ConfigurationPlanRequestFromJSON,
  ModernEdiApiError,
  ModernEdiClient,
} from "@modernedi/sdk";

const apiKey = process.env.MODERNEDI_API_KEY;
if (!apiKey) {
  throw new Error("Set MODERNEDI_API_KEY before running this example");
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

  console.log(plan.summary);
  for (const operation of plan.operations) {
    console.log(operation.action, operation.kind, operation.key, operation.path);
  }
  for (const diagnostic of plan.diagnostics) {
    console.error(
      diagnostic.severity,
      diagnostic.code,
      diagnostic.pointer,
      diagnostic.message,
    );
  }
  for (const scenario of plan.affectedScenarios) {
    console.warn("Scenario binding requires reapplication", scenario.bindingId, scenario.revision);
  }
  for (const run of plan.affectedRuns) {
    console.warn("Active scenario run blocks apply", run.runId, run.bindingId, run.bindingRevision);
  }

  if (!plan.applicable) {
    process.exitCode = 2;
  } else {
    console.log("Plan identity", plan.planSha256);
  }
} catch (error) {
  if (error instanceof ModernEdiApiError) {
    console.error(error.status, error.code, error.requestId, error.details);
  }
  throw error;
}
