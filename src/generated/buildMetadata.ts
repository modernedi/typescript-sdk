/**
 * Generated SDK build metadata.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */
export const MODERNEDI_API_VERSION = "1.35.0";
export const OPENAPI_GENERATOR_VERSION = "7.24.0";
export const OPENAPI_SPECIFICATION_SHA256 = "95eddba29705eee47a39de328b4f72ef9915722211cd392cbe2e5c789ab54d79";
export const GENERATED_OPERATION_IDS = [
  "listScenarioRuns",
  "startScenarioRun",
  "getScenarioRun",
  "advanceScenarioRun",
  "cancelScenarioRun",
  "downloadScenarioEvidenceReport",
  "attachScenarioRunObservation",
  "getScenarioRunTimeline",
  "getIntegrationConfigurationContext",
  "getIntegrationConfigurationExternalRepository",
  "getIntegrationConfigurationImportVerification",
  "listIntegrationConfigurationApplyOperations",
  "exportIntegrationConfiguration",
  "planIntegrationConfiguration",
  "applyIntegrationConfiguration",
  "getIntegrationConfigurationApplyOperation",
  "getConfigurationScenarioRunSelection",
  "listIntegrationPartners",
  "getIntegrationPartner",
  "getIntegrationPartnerCapabilities",
  "getIntegrationAs2Profile",
  "listIntegrationAs2Connections",
  "getIntegrationAs2Connection",
  "previewOutboundX12",
  "sendAs2Message",
  "replyToInboundAs2Message",
  "sendAs2CarbonCopy",
  "sendGeneratedX12Message",
  "replyWithGeneratedX12",
  "carbonCopyGeneratedX12",
  "listIntegrationMappings",
  "getIntegrationMapping",
  "listIntegrationMappingConfigurationRevisions",
  "getIntegrationMappingConfigurationRevision",
  "pollMappedOutputs",
  "acknowledgeMappedOutput",
  "acknowledgeMappedOutputs",
  "getIntegrationMappingRuntimeHealth",
  "listIntegrationMappingRuntimeFailures",
  "getIntegrationMappingRuntimeFailure",
  "listIntegrationChangeEvents",
  "listIntegrationTransactions",
  "getIntegrationTransaction",
  "watchIntegrationTransaction",
  "unwatchIntegrationTransaction",
  "getIntegrationTransactionDocuments",
  "getIntegrationTransactionDocument",
  "validateIntegrationTransactionX12",
  "getIntegrationTransactionEvents",
  "getRelatedIntegrationTransactions",
  "replayIntegrationTransaction",
  "getMappedOutputWebhookStatus",
  "updateMappedOutputWebhook",
  "testMappedOutputWebhook",
  "getIntegrationUsage",
  "validateX12",
  "listX12Versions",
  "listX12TransactionSets"
] as const;
export const IDEMPOTENCY_KEY_OPERATIONS = [
  {
    "method": "POST",
    "path": "/v1/scenario-runs/{runId}/advance"
  },
  {
    "method": "POST",
    "path": "/v1/configuration/apply"
  },
  {
    "method": "POST",
    "path": "/v1/scenario-runs/{runId}/observations"
  },
  {
    "method": "POST",
    "path": "/v1/scenario-runs/{runId}/cancel"
  },
  {
    "method": "POST",
    "path": "/v1/as2/x12/carbonCopy"
  },
  {
    "method": "POST",
    "path": "/v1/integration/transactions/{messageId}/{transactionKey}/replays"
  },
  {
    "method": "POST",
    "path": "/v1/as2/reply"
  },
  {
    "method": "POST",
    "path": "/v1/as2/x12/reply"
  },
  {
    "method": "POST",
    "path": "/v1/as2/carbonCopy"
  },
  {
    "method": "POST",
    "path": "/v1/as2/send"
  },
  {
    "method": "POST",
    "path": "/v1/as2/x12/send"
  },
  {
    "method": "POST",
    "path": "/v1/scenario-runs"
  }
] as const;
