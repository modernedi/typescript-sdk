import assert from "node:assert/strict";
import test from "node:test";

import {
  As2PublicCertificateFromJSON,
  FilterableFunctionalAcknowledgmentStatus,
  FilterableImplementationAcknowledgmentStatus,
  FilterableTransactionMappingStatus,
  FilterableTransactionMdnStatus,
  FunctionalAcknowledgmentStatus,
  GENERATED_OPERATION_IDS,
  MODERNEDI_API_VERSION,
  ModernEdiApiError,
  ModernEdiClient,
  ImplementationAcknowledgmentStatus,
  OPENAPI_GENERATOR_VERSION,
  OutboundTransformEnvelopeInputFromJSON,
  OutboundTransformEnvelopeInputToJSON,
  TransactionDocumentFromJSON,
  TransactionDocumentToJSON,
  TransactionEventFromJSON,
  TransactionEventToJSON,
  TransactionMappingStatusSummaryStatusEnum,
  TransactionMdnStatus,
  createRetryingFetch,
  getModernEdiResponseMetadata,
  paginateCursor,
} from "../dist/index.js";

const implementationAckTransactionOutcome = {
  functionalIdentifierCode: "PO",
  functionalGroupControlNumber: "0001",
  transactionSetIdentifierCode: "850",
  transactionSetControlNumber: "0001",
  implementationConventionReference: "005010X222A1",
  status: "accepted_with_errors",
  acknowledgmentCode: "E",
  errorCodes: ["5"],
};

const implementationAckOutcome = {
  status: "accepted_with_errors",
  acknowledgmentCode: "E",
  summary: "Implementation group accepted with errors",
  parsed: true,
  unknownReason: null,
  includedTransactionSets: 1,
  receivedTransactionSets: 1,
  acceptedTransactionSets: 1,
  errorCodes: ["5"],
  groups: [
    {
      functionalIdentifierCode: "PO",
      functionalGroupControlNumber: "0001",
      functionalGroupVersion: "005010X222A1",
      status: "accepted_with_errors",
      acknowledgmentCode: "E",
      includedTransactionSets: 1,
      receivedTransactionSets: 1,
      acceptedTransactionSets: 1,
      errorCodes: ["5"],
      transactionSets: [implementationAckTransactionOutcome],
    },
  ],
  transactionSets: [implementationAckTransactionOutcome],
};

test("generated SDK includes every current public operation", () => {
  assert.equal(MODERNEDI_API_VERSION, "1.35.0");
  assert.equal(OPENAPI_GENERATOR_VERSION, "7.24.0");
  assert.equal(GENERATED_OPERATION_IDS.length, 58);
  assert.equal(new Set(GENERATED_OPERATION_IDS).size, GENERATED_OPERATION_IDS.length);
  for (const operation of [
    "listIntegrationPartners",
    "exportIntegrationConfiguration",
    "planIntegrationConfiguration",
    "applyIntegrationConfiguration",
    "getIntegrationConfigurationApplyOperation",
    "getIntegrationConfigurationContext",
    "getIntegrationConfigurationExternalRepository",
    "getIntegrationConfigurationImportVerification",
    "listIntegrationConfigurationApplyOperations",
    "getConfigurationScenarioRunSelection",
    "sendGeneratedX12Message",
    "replayIntegrationTransaction",
    "listIntegrationChangeEvents",
    "getIntegrationTransactionDocument",
    "watchIntegrationTransaction",
    "unwatchIntegrationTransaction",
    "testMappedOutputWebhook",
    "listScenarioRuns", "startScenarioRun", "getScenarioRun", "getScenarioRunTimeline",
    "downloadScenarioEvidenceReport", "attachScenarioRunObservation", "advanceScenarioRun", "cancelScenarioRun",
  ]) {
    assert.ok(GENERATED_OPERATION_IDS.includes(operation), operation);
  }
  for (const removedOperation of [
    "createIntegrationPartner",
    "patchIntegrationPartner",
    "deleteIntegrationPartner",
    "createIntegrationAs2Connection",
    "patchIntegrationAs2Connection",
    "deleteIntegrationAs2Connection",
    "createIntegrationMapping",
    "patchIntegrationMapping",
    "deleteIntegrationMapping",
  ]) {
    assert.ok(!GENERATED_OPERATION_IDS.includes(removedOperation), removedOperation);
  }
});

test("client exposes deterministic configuration-as-code export without a legacy alias", async () => {
  let observed;
  const responseBody = {
    success: true,
    bundleSha256: "1".repeat(64),
    snapshotSha256: "2".repeat(64),
    snapshotEtag: `"${"2".repeat(64)}"`,
    files: [],
  };
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test/",
    fetch: async (input, init) => {
      observed = { input, init };
      return new Response(JSON.stringify(responseBody), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ETag: responseBody.snapshotEtag,
        },
      });
    },
  });

  const result = await client.configurationAsCode.exportIntegrationConfiguration({
    ifNoneMatch: `"${"0".repeat(64)}"`,
  });
  assert.deepEqual(result, responseBody);
  assert.equal(String(observed.input), "https://example.test/v1/configuration/export");
  assert.equal(new Headers(observed.init.headers).get("x-api-key"), "test-api-key");
  assert.equal(
    new Headers(observed.init.headers).get("If-None-Match"),
    `"${"0".repeat(64)}"`,
  );
  assert.equal("configurationExport" in client, false);
});

test("configuration-as-code client submits a typed read-only plan", async () => {
  let observed;
  const desired = {
    files: [
      {
        path: "modernedi.json",
        role: "MANIFEST",
        format: "JSON",
        mediaType: "application/json",
        contentSha256: "1".repeat(64),
        content: {
          apiVersion: "modernedi.com/v1",
          kind: "IntegrationConfiguration",
          resources: [],
          files: [],
        },
      },
    ],
  };
  const responseBody = {
    success: true,
    applicable: true,
    desiredBundleSha256: "1".repeat(64),
    currentSnapshotEtag: `"${"2".repeat(64)}"`,
    runtimeConfigurationRevision: 7,
    validationContext: {
      syntaxTreeCatalogRevision: null,
      syntaxTreeCatalogManifestSha256: null,
      scenarioAuthorityEtag: `"${"4".repeat(64)}"`,
    },
    planSha256: "3".repeat(64),
    summary: { create: 0, update: 0, delete: 0, unchanged: 0 },
    operations: [],
    diagnostics: [],
    scenarioImpactComplete: true,
    affectedScenarios: [],
    affectedRuns: [],
  };
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test/",
    fetch: async (input, init) => {
      observed = { input, init };
      return new Response(JSON.stringify(responseBody), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  const result = await client.configurationAsCode.planIntegrationConfiguration({
    configurationPlanRequest: desired,
    xRequestId: "configuration-plan-test",
  });

  assert.deepEqual(result, {
    ...responseBody,
    summary: { create: 0, update: 0, _delete: 0, unchanged: 0 },
  });
  assert.equal(String(observed.input), "https://example.test/v1/configuration/plan");
  assert.equal(observed.init.method, "POST");
  assert.equal(new Headers(observed.init.headers).get("x-api-key"), "test-api-key");
  assert.equal(new Headers(observed.init.headers).get("X-Request-Id"), "configuration-plan-test");
  assert.deepEqual(JSON.parse(observed.init.body), desired);
});

test("configuration-as-code client submits a plan-bound idempotent aggregate apply", async () => {
  let observed;
  const files = [
    {
      path: "modernedi.json",
      role: "MANIFEST",
      format: "JSON",
      mediaType: "application/json",
      contentSha256: "1".repeat(64),
      content: {
        apiVersion: "modernedi.com/v1",
        kind: "IntegrationConfiguration",
        resources: [],
        files: [],
      },
    },
  ];
  const requestBody = { planSha256: "3".repeat(64), files };
  const responseBody = {
    success: true,
    operation: {
      operationId: "apply-3ee360bd-7e41-4c55-80f8-3f1e5839804d",
      status: "SUCCEEDED",
      desiredBundleSha256: "1".repeat(64),
      planSha256: "3".repeat(64),
      baseSnapshotEtag: `"${"2".repeat(64)}"`,
      appliedSnapshotEtag: `"${"4".repeat(64)}"`,
      runtimeConfigurationRevision: 8,
      summary: { create: 0, update: 0, delete: 0, unchanged: 0 },
      operations: [],
      runtimePublication: { state: "published", retrying: false },
      requestedAt: "2026-08-30T17:24:00.000000000Z",
      committedAt: "2026-08-30T17:24:00.100000000Z",
      completedAt: "2026-08-30T17:24:00.200000000Z",
    },
  };
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test/",
    fetch: async (input, init) => {
      observed = { input, init };
      return new Response(JSON.stringify(responseBody), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Replayed": "false",
        },
      });
    },
  });

  const result = await client.configurationAsCode.applyIntegrationConfiguration({
    configurationApplyRequest: requestBody,
    idempotencyKey: "deployment-2026-08-30-01",
    ifMatch: `"${"2".repeat(64)}"`,
    xRequestId: "configuration-apply-test",
  });

  assert.equal(result.operation.operationId, responseBody.operation.operationId);
  assert.equal(result.operation.status, "SUCCEEDED");
  assert.deepEqual(result.operation.summary, {
    create: 0,
    update: 0,
    _delete: 0,
    unchanged: 0,
  });
  assert.equal(String(observed.input), "https://example.test/v1/configuration/apply");
  assert.equal(observed.init.method, "POST");
  assert.equal(new Headers(observed.init.headers).get("Idempotency-Key"), "deployment-2026-08-30-01");
  assert.equal(new Headers(observed.init.headers).get("If-Match"), `"${"2".repeat(64)}"`);
  assert.equal(new Headers(observed.init.headers).get("X-Request-Id"), "configuration-apply-test");
  assert.deepEqual(JSON.parse(observed.init.body), requestBody);
});

test("configuration-as-code client retrieves a pending aggregate apply operation", async () => {
  let observed;
  const responseBody = {
    success: true,
    operation: {
      operationId: "apply-d845bc0e-7b71-4f1a-8071-b4a9a4468755",
      status: "PENDING",
      desiredBundleSha256: "1".repeat(64),
      planSha256: "3".repeat(64),
      baseSnapshotEtag: `"${"2".repeat(64)}"`,
      appliedSnapshotEtag: `"${"4".repeat(64)}"`,
      runtimeConfigurationRevision: 8,
      summary: { create: 0, update: 0, delete: 0, unchanged: 0 },
      operations: [],
      runtimePublication: {
        state: "pending",
        retrying: true,
        message: "Runtime publication is pending automatic retry.",
      },
      requestedAt: "2026-08-30T17:24:00.000000000Z",
      committedAt: "2026-08-30T17:24:00.100000000Z",
      completedAt: null,
    },
  };
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test/",
    fetch: async (input, init) => {
      observed = { input, init };
      return new Response(JSON.stringify(responseBody), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  const result = await client.configurationAsCode.getIntegrationConfigurationApplyOperation({
    operationId: responseBody.operation.operationId,
  });

  assert.equal(result.operation.status, "PENDING");
  assert.equal(result.operation.completedAt, null);
  assert.equal(result.operation.runtimePublication.retrying, true);
  assert.equal(
    String(observed.input),
    `https://example.test/v1/configuration/apply-operations/${responseBody.operation.operationId}`,
  );
  assert.equal(observed.init.method, "GET");
});

test("client applies API-key authentication and parses a successful response", async () => {
  let observed;
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test/",
    fetch: async (input, init) => {
      observed = { input, init };
      return new Response(JSON.stringify({ success: true, partners: [] }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "X-Request-Id": "req-success",
        },
      });
    },
  });

  const result = await client.partners.listIntegrationPartners({});
  assert.deepEqual(result, { success: true, partners: [] });
  assert.equal(String(observed.input), "https://example.test/v1/partners");
  assert.equal(new Headers(observed.init.headers).get("x-api-key"), "test-api-key");
  assert.equal(new Headers(observed.init.headers).has("Authorization"), false);
});

test("client supports bearer authentication", async () => {
  let authorization;
  const client = new ModernEdiClient({
    bearerToken: "test-bearer-key",
    baseUrl: "https://example.test",
    fetch: async (_input, init) => {
      authorization = new Headers(init.headers).get("Authorization");
      return new Response(JSON.stringify({ success: true, partners: [] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  await client.partners.listIntegrationPartners({});
  assert.equal(authorization, "Bearer test-bearer-key");
});

test("transaction operator filters serialize repeated values and combine with other categories", async () => {
  let observed;
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    fetch: async (input, init) => {
      observed = { input, init };
      return new Response(
        JSON.stringify({
          success: true,
          environment: "production",
          transactions: [],
          hasMore: false,
          window: null,
          attentionSummary: null,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    },
  });

  await client.transactions.listIntegrationTransactions({
    environment: "production",
    mappingStatus: ["FAILED", "COMPLETED_WITH_ERRORS"],
    functionalAckStatus: ["rejected", "unknown"],
    implementationAckStatus: ["rejected", "accepted_with_errors"],
    mdnStatus: ["invalid", "overdue"],
  });

  const url = new URL(String(observed.input));
  assert.equal(url.pathname, "/v1/integration/transactions");
  assert.deepEqual(url.searchParams.getAll("mappingStatus"), [
    "FAILED",
    "COMPLETED_WITH_ERRORS",
  ]);
  assert.deepEqual(url.searchParams.getAll("functionalAckStatus"), ["rejected", "unknown"]);
  assert.deepEqual(url.searchParams.getAll("implementationAckStatus"), [
    "rejected",
    "accepted_with_errors",
  ]);
  assert.deepEqual(url.searchParams.getAll("mdnStatus"), ["invalid", "overdue"]);
  assert.equal(observed.init.method, "GET");
});

test("transaction watch and unwatch use the same encoded identity and report resulting state", async () => {
  const observed = [];
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    fetch: async (input, init) => {
      observed.push({ input, init });
      const onWatchlist = init.method === "PUT";
      return new Response(
        JSON.stringify({
          success: true,
          environment: "test",
          messageId: "message/id",
          transactionKey: "17#0001",
          onWatchlist,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    },
  });

  const identity = {
    messageId: "message/id",
    transactionKey: "17#0001",
    environment: "test",
  };
  const watched = await client.transactions.watchIntegrationTransaction(identity);
  const unwatched = await client.transactions.unwatchIntegrationTransaction(identity);

  assert.equal(watched.onWatchlist, true);
  assert.equal(unwatched.onWatchlist, false);
  assert.equal(
    String(observed[0].input),
    "https://example.test/v1/integration/transactions/message%2Fid/17%230001/watch?environment=test",
  );
  assert.equal(String(observed[1].input), String(observed[0].input));
  assert.equal(observed[0].init.method, "PUT");
  assert.equal(observed[1].init.method, "DELETE");
});

test("client rejects missing or ambiguous authentication at runtime", () => {
  assert.throws(
    () => new ModernEdiClient({}),
    /requires exactly one of apiKey or bearerToken/,
  );
  assert.throws(
    () =>
      new ModernEdiClient({
        apiKey: "test-api-key",
        bearerToken: "test-bearer-key",
      }),
    /requires exactly one of apiKey or bearerToken/,
  );
});

test("structured API errors preserve platform diagnostics and response metadata", async () => {
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    fetch: async () =>
      new Response(
        JSON.stringify({
          success: false,
          error: {
            code: "insufficient_scope",
            message: "This key cannot read transactions.",
            retryable: false,
            requestId: "req-body",
            details: {
              requiredScopes: ["transactions:read"],
            },
          },
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "X-Request-Id": "req-header",
            "Retry-After": "12",
          },
        },
      ),
  });

  await assert.rejects(
    client.transactions.listIntegrationTransactions({ environment: "production" }),
    (error) => {
      assert.ok(error instanceof ModernEdiApiError);
      assert.equal(error.status, 403);
      assert.equal(error.code, "insufficient_scope");
      assert.equal(error.message, "This key cannot read transactions.");
      assert.equal(error.retryable, false);
      assert.equal(error.requestId, "req-body");
      assert.equal(error.retryAfter, "12");
      assert.deepEqual(error.details, {
        requiredScopes: ["transactions:read"],
      });
      return true;
    },
  );
});

test("opt-in retries retry safe reads and honor retryable status codes", async () => {
  let attempts = 0;
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    retry: { maxAttempts: 2, baseDelayMs: 0, maxDelayMs: 0 },
    fetch: async () => {
      attempts += 1;
      if (attempts === 1) {
        return new Response("temporarily unavailable", {
          status: 503,
          headers: { "Retry-After": "0" },
        });
      }
      return new Response(JSON.stringify({ success: true, partners: [] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  await client.partners.listIntegrationPartners({});
  assert.equal(attempts, 2);
});

test("retry wrapper does not retry a mutation without an idempotency key", async () => {
  let attempts = 0;
  const retryingFetch = createRetryingFetch(
    async () => {
      attempts += 1;
      return new Response("temporarily unavailable", { status: 503 });
    },
    { maxAttempts: 3, baseDelayMs: 0 },
  );

  const response = await retryingFetch("https://example.test/resource", {
    method: "POST",
  });
  assert.equal(response.status, 503);
  assert.equal(attempts, 1);
});

test("retry wrapper can retry an idempotent mutation", async () => {
  let attempts = 0;
  const retryingFetch = createRetryingFetch(
    async () => {
      attempts += 1;
      return new Response(attempts === 1 ? "temporarily unavailable" : "ok", {
        status: attempts === 1 ? 503 : 200,
      });
    },
    { maxAttempts: 2, baseDelayMs: 0 },
  );

  const response = await retryingFetch("https://example.test/resource", {
    method: "POST",
    headers: { "Idempotency-Key": "stable-operation-id" },
  });
  assert.equal(response.status, 200);
  assert.equal(attempts, 2);
});

test("retry wrapper retries the exact read-only configuration plan operation under a base path", async () => {
  let planAttempts = 0;
  const retryingFetch = createRetryingFetch(
    async () => {
      planAttempts += 1;
      return new Response(planAttempts === 1 ? "temporarily unavailable" : "ok", {
        status: planAttempts === 1 ? 503 : 200,
      });
    },
    { maxAttempts: 2, baseDelayMs: 0 },
  );

  const response = await retryingFetch("https://example.test/edi/v1/configuration/plan", {
    method: "POST",
  });
  assert.equal(response.status, 200);
  assert.equal(planAttempts, 2);

  let adjacentAttempts = 0;
  const adjacentResponse = await createRetryingFetch(
    async () => {
      adjacentAttempts += 1;
      return new Response("temporarily unavailable", { status: 503 });
    },
    { maxAttempts: 2, baseDelayMs: 0 },
  )("https://example.test/v1/configuration/planner", { method: "POST" });
  assert.equal(adjacentResponse.status, 503);
  assert.equal(adjacentAttempts, 1);

  let wrongMethodAttempts = 0;
  const wrongMethodResponse = await createRetryingFetch(
    async () => {
      wrongMethodAttempts += 1;
      return new Response("temporarily unavailable", { status: 503 });
    },
    { maxAttempts: 2, baseDelayMs: 0 },
  )("https://example.test/v1/configuration/plan", { method: "PATCH" });
  assert.equal(wrongMethodResponse.status, 503);
  assert.equal(wrongMethodAttempts, 1);
});

test("retry delay removes its abort listener after the timeout completes", async () => {
  const listeners = new Set();
  let added = 0;
  let removed = 0;
  const signal = {
    aborted: false,
    reason: undefined,
    addEventListener(type, listener) {
      assert.equal(type, "abort");
      added += 1;
      listeners.add(listener);
    },
    removeEventListener(type, listener) {
      assert.equal(type, "abort");
      removed += 1;
      listeners.delete(listener);
    },
  };
  let attempts = 0;
  const response = await createRetryingFetch(
    async () => {
      attempts += 1;
      return new Response(attempts === 1 ? "temporarily unavailable" : "ok", {
        status: attempts === 1 ? 503 : 200,
      });
    },
    { maxAttempts: 2, baseDelayMs: 1, maxDelayMs: 1 },
  )("https://example.test/resource", { method: "GET", signal });

  assert.equal(response.status, 200);
  assert.equal(added, 1);
  assert.equal(removed, 1);
  assert.equal(listeners.size, 0);
});

test("opt-in retries retry idempotent transaction watch and unwatch operations", async () => {
  const attempts = new Map();
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    retry: { maxAttempts: 2, baseDelayMs: 0, maxDelayMs: 0 },
    fetch: async (input, init) => {
      const method = init.method;
      const key = `${method} ${String(input)}`;
      const attempt = (attempts.get(key) ?? 0) + 1;
      attempts.set(key, attempt);
      if (attempt === 1) {
        return new Response("temporarily unavailable", { status: 503 });
      }
      return new Response(
        JSON.stringify({
          success: true,
          environment: "production",
          messageId: "message/id",
          transactionKey: "17#0001",
          onWatchlist: method === "PUT",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    },
  });
  const identity = {
    environment: "production",
    messageId: "message/id",
    transactionKey: "17#0001",
  };

  const watched = await client.transactions.watchIntegrationTransaction(identity);
  const unwatched = await client.transactions.unwatchIntegrationTransaction(identity);

  assert.equal(watched.onWatchlist, true);
  assert.equal(unwatched.onWatchlist, false);
  assert.deepEqual(
    [...attempts.entries()].map(([key, attempt]) => [key.replace("https://example.test", ""), attempt]),
    [
      ["PUT /v1/integration/transactions/message%2Fid/17%230001/watch?environment=production", 2],
      ["DELETE /v1/integration/transactions/message%2Fid/17%230001/watch?environment=production", 2],
    ],
  );
});

test("transaction list rejects unknown request-filter values before serialization", async () => {
  let fetchCalls = 0;
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    fetch: async () => {
      fetchCalls += 1;
      return new Response(
        JSON.stringify({
          success: true,
          transactions: [],
          hasMore: false,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    },
  });
  const invalidFilters = [
    ["mappingStatus", TransactionMappingStatusSummaryStatusEnum.UnknownDefaultOpenApi],
    ["functionalAckStatus", FunctionalAcknowledgmentStatus.UnknownDefaultOpenApi],
    ["implementationAckStatus", ImplementationAcknowledgmentStatus.UnknownDefaultOpenApi],
    ["mdnStatus", TransactionMdnStatus.UnknownDefaultOpenApi],
  ];

  for (const [parameterName, invalidValue] of invalidFilters) {
    await assert.rejects(
      client.transactions.listIntegrationTransactions({
        [parameterName]: [invalidValue],
      }),
      new RegExp(`${parameterName} contains unsupported value`),
    );
  }

  assert.equal(fetchCalls, 0);
  assert.equal("UnknownDefaultOpenApi" in FilterableTransactionMappingStatus, false);
  assert.equal("UnknownDefaultOpenApi" in FilterableFunctionalAcknowledgmentStatus, false);
  assert.equal("UnknownDefaultOpenApi" in FilterableImplementationAcknowledgmentStatus, false);
  assert.equal("UnknownDefaultOpenApi" in FilterableTransactionMdnStatus, false);
  assert.equal(TransactionMappingStatusSummaryStatusEnum.UnknownDefaultOpenApi, "11184809");
  assert.equal(FunctionalAcknowledgmentStatus.UnknownDefaultOpenApi, "11184809");
  assert.equal(ImplementationAcknowledgmentStatus.UnknownDefaultOpenApi, "11184809");
  assert.equal(TransactionMdnStatus.UnknownDefaultOpenApi, "11184809");
});

test("retry wrapper never retries before a Retry-After value beyond the configured cap", async () => {
  let attempts = 0;
  const retryingFetch = createRetryingFetch(
    async () => {
      attempts += 1;
      return new Response("try later", {
        status: 429,
        headers: { "Retry-After": "120" },
      });
    },
    { maxAttempts: 3, baseDelayMs: 0, maxDelayMs: 1_000 },
  );

  const response = await retryingFetch("https://example.test/resource", { method: "GET" });
  assert.equal(response.status, 429);
  assert.equal(attempts, 1);
});

test("raw response metadata exposes correlation and replay headers", () => {
  const metadata = getModernEdiResponseMetadata(
    new Response(null, {
      headers: {
        "X-Request-Id": "req-123",
        "Retry-After": "5",
        "Idempotency-Replayed": "true",
        ETag: '"mapping-7"',
      },
    }),
  );
  assert.deepEqual(metadata, {
    requestId: "req-123",
    retryAfter: "5",
    idempotencyReplayed: true,
    etag: '"mapping-7"',
  });
});

test("cursor helper returns opaque cursors unchanged and detects loops", async () => {
  const seen = [];
  const values = [];
  for await (const value of paginateCursor(
    async (cursor) => {
      seen.push(cursor);
      return cursor === undefined
        ? { values: [1, 2], nextCursor: "opaque.cursor/1" }
        : { values: [3] };
    },
    (page) => ({ items: page.values, nextCursor: page.nextCursor }),
  )) {
    values.push(value);
  }
  assert.deepEqual(seen, [undefined, "opaque.cursor/1"]);
  assert.deepEqual(values, [1, 2, 3]);

  const iterator = paginateCursor(
    async () => ({ values: [], nextCursor: "same" }),
    (page) => ({ items: page.values, nextCursor: page.nextCursor }),
    { cursor: "same" },
  );
  await assert.rejects(iterator.next(), /repeated cursor/);
});

test("cursor helper rejects fractional page limits and detects cycles before reloading a page", async () => {
  const invalid = paginateCursor(
    async () => ({ values: [] }),
    (page) => ({ items: page.values }),
    { maxPages: 1.5 },
  );
  await assert.rejects(invalid.next(), /positive integer or Infinity/);

  const seen = [];
  const iterator = paginateCursor(
    async (cursor) => {
      seen.push(cursor);
      return cursor === "A"
        ? { values: ["page-a"], nextCursor: "B" }
        : { values: ["page-b"], nextCursor: "A" };
    },
    (page) => ({ items: page.values, nextCursor: page.nextCursor }),
    { cursor: "A" },
  );
  assert.deepEqual(await iterator.next(), { value: "page-a", done: false });
  assert.deepEqual(await iterator.next(), { value: "page-b", done: false });
  await assert.rejects(iterator.next(), /repeated cursor/);
  assert.deepEqual(seen, ["A", "B"]);
});

test("date-time conversion preserves all nine fractional digits", () => {
  const certificate = As2PublicCertificateFromJSON({
    slot: "active",
    notBefore: "2026-07-15T18:30:00.123456789Z",
    notAfter: "2027-07-15T18:30:00.987654321Z",
    publicCertPem: "-----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----",
  });
  assert.equal(certificate.notBefore, "2026-07-15T18:30:00.123456789Z");
  assert.equal(certificate.notAfter, "2027-07-15T18:30:00.987654321Z");
});

test("outbound JSON input conversion preserves every supported JSON shape", () => {
  const values = [
    { invoice: { number: "INV-1001" }, lines: [{ sku: "SKU-1", quantity: 2 }] },
    [{ sku: "SKU-1" }, { sku: "SKU-2" }],
    "plain text",
    42.5,
    true,
    null,
  ];
  for (const value of values) {
    assert.deepEqual(OutboundTransformEnvelopeInputFromJSON(value), value);
    assert.deepEqual(OutboundTransformEnvelopeInputToJSON(value), value);
  }
});

test("generated preview request sends object and array source inputs without corruption", async () => {
  const observedBodies = [];
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    fetch: async (_input, init) => {
      observedBodies.push(JSON.parse(String(init.body)));
      return new Response(
        JSON.stringify({
          success: true,
          generatedX12: "ISA*...",
          validation: { valid: true, errors: [] },
          mapping: {},
          partner: {},
          businessKey: null,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    },
  });

  for (const input of [{ invoice: { number: "INV-1001" } }, [{ line: 1 }, { line: 2 }]]) {
    await client.outboundAs2.previewOutboundX12Raw({
      x12Version: "005010",
      functionalGroupType: "IN",
      transactionGroupType: 810,
      partnerId: 7,
      contentType: "application/json",
      body: input,
    });
  }

  assert.deepEqual(observedBodies, [
    { invoice: { number: "INV-1001" } },
    [{ line: 1 }, { line: 2 }],
  ]);
});

test("all multi-content operations preserve the caller-selected media type and body", async () => {
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    fetch: async () => new Response(null, { status: 204 }),
  });
  const mappedBody = { invoice: { number: "INV-1001" } };
  const generatedBody = {
    x12: "ISA*...~",
    businessKey: { name: "invoiceNumber", value: "INV-1001" },
  };
  const requests = [
    client.outboundAs2.previewOutboundX12RequestOpts({
      x12Version: "005010",
      functionalGroupType: "IN",
      transactionGroupType: 810,
      partnerId: 7,
      contentType: "application/json",
      body: mappedBody,
    }),
    client.outboundAs2.sendAs2MessageRequestOpts({
      x12Version: "005010",
      functionalGroupType: "IN",
      transactionGroupType: 810,
      partnerId: 7,
      contentType: "application/json",
      body: mappedBody,
    }),
    client.outboundAs2.replyToInboundAs2MessageRequestOpts({
      originalMessageId: "<inbound@example>",
      contentType: "application/json",
      body: mappedBody,
    }),
    client.outboundAs2.sendAs2CarbonCopyRequestOpts({
      x12Version: "005010",
      functionalGroupType: "SH",
      transactionGroupType: 856,
      originalMessageId: "<inbound@example>",
      partnerId: 7,
      copyToPartnerId: 8,
      contentType: "application/json",
      body: mappedBody,
    }),
    client.outboundAs2.sendGeneratedX12MessageRequestOpts({
      x12Version: "005010",
      functionalGroupType: "IN",
      transactionGroupType: 810,
      partnerId: 7,
      contentType: "application/json",
      body: generatedBody,
    }),
    client.outboundAs2.replyWithGeneratedX12RequestOpts({
      functionalGroupType: "IN",
      transactionGroupType: 810,
      originalMessageId: "<inbound@example>",
      contentType: "application/json",
      body: generatedBody,
    }),
    client.outboundAs2.carbonCopyGeneratedX12RequestOpts({
      x12Version: "005010",
      functionalGroupType: "SH",
      transactionGroupType: 856,
      originalMessageId: "<inbound@example>",
      partnerId: 7,
      copyToPartnerId: 8,
      contentType: "application/json",
      body: generatedBody,
    }),
    client.x12.validateX12RequestOpts({
      contentType: "application/json",
      body: { x12: "ISA*...~" },
    }),
  ];

  const options = await Promise.all(requests);
  for (const request of options) {
    assert.equal(request.headers["Content-Type"], "application/json");
  }
  assert.deepEqual(options.slice(0, 4).map((request) => request.body), [
    mappedBody,
    mappedBody,
    mappedBody,
    mappedBody,
  ]);
  assert.deepEqual(options.slice(4, 7).map((request) => request.body), [
    generatedBody,
    generatedBody,
    generatedBody,
  ]);
  assert.deepEqual(options[7].body, { x12: "ISA*...~" });
});

test("multi-content body unions cover direct text, X12, JSON, and explicit envelopes", async () => {
  const client = new ModernEdiClient({
    apiKey: "test-api-key",
    baseUrl: "https://example.test",
    fetch: async () => new Response(null, { status: 204 }),
  });
  const mappedCases = [
    { contentType: "application/xml", body: "<Invoice/>" },
    { contentType: "text/plain", body: "invoice text" },
    { contentType: "application/json", body: { invoiceNumber: "INV-1001" } },
    {
      contentType: "application/vnd.modernedi.outbound+json",
      body: {
        contentType: "application/json",
        input: { invoiceNumber: "INV-1001" },
        params: { controlNumber: "0001" },
      },
    },
  ];
  for (const requestBody of mappedCases) {
    const options = await client.outboundAs2.sendAs2MessageRequestOpts({
      x12Version: "005010",
      functionalGroupType: "IN",
      transactionGroupType: 810,
      partnerId: 7,
      ...requestBody,
    });
    assert.equal(options.headers["Content-Type"], requestBody.contentType);
    assert.deepEqual(options.body, requestBody.body);
  }

  const rawCases = [
    { contentType: "application/edi-x12", body: "ISA*...~" },
    { contentType: "text/plain", body: "ISA*...~" },
    {
      contentType: "application/json",
      body: {
        x12: "ISA*...~",
        businessKey: { name: "invoiceNumber", value: "INV-1001" },
      },
    },
  ];
  for (const requestBody of rawCases) {
    const options = await client.outboundAs2.sendGeneratedX12MessageRequestOpts({
      x12Version: "005010",
      functionalGroupType: "IN",
      transactionGroupType: 810,
      partnerId: 7,
      ...requestBody,
    });
    assert.equal(options.headers["Content-Type"], requestBody.contentType);
    assert.deepEqual(options.body, requestBody.body);
  }

  for (const requestBody of [
    { contentType: "application/edi-x12", body: "ISA*...~" },
    { contentType: "text/plain", body: "ISA*...~" },
    { contentType: "application/json", body: { x12: "ISA*...~" } },
  ]) {
    const options = await client.x12.validateX12RequestOpts(requestBody);
    assert.equal(options.headers["Content-Type"], requestBody.contentType);
    assert.deepEqual(options.body, requestBody.body);
  }
});

test("full transaction document conversion keeps the metadata discriminator and content", () => {
  const document = TransactionDocumentFromJSON({
    id: "raw-x12",
    type: "x12",
    label: "Inbound X12",
    contentType: "application/edi-x12",
    encoding: "text",
    timestamp: "2026-07-15T18:30:00.123456789Z",
    contentLength: 8,
    metadata: {},
    content: "ISA*...~",
  });

  assert.equal(document.type, "x12");
  assert.equal(document.id, "raw-x12");
  assert.equal(document.timestamp, "2026-07-15T18:30:00.123456789Z");
  assert.equal(document.content, "ISA*...~");
});

test("every transaction document variant keeps its discriminator, metadata, and body", () => {
  const common = {
    label: "Artifact",
    encoding: "text",
    timestamp: "2026-07-15T18:30:00.123456789Z",
    contentLength: 8,
    content: "content",
  };
  const fixtures = [
    {
      ...common,
      id: "raw-x12",
      type: "x12",
      contentType: "application/edi-x12",
      metadata: {},
    },
    {
      ...common,
      id: "mapped-output-1",
      type: "mapped_output",
      contentType: "application/json",
      metadata: {
        id: "mapped-output-1",
        sequenceNumber: 1,
        purpose: "processing",
        contentType: "application/json",
        createdAt: "2026-07-15T18:30:00.123456789Z",
        businessKey: null,
        mapping: {},
        extraFields: {},
      },
    },
    {
      ...common,
      id: "mdn-report",
      type: "mdn",
      contentType: "multipart/report",
      metadata: {
        messageId: "<mdn@example>",
        disposition: "automatic-action/MDN-sent-automatically; processed",
        status: "processed",
        asynchronous: false,
        micMatched: true,
        receivedContentMic: "digest, sha-256",
        expectedContentMic: "digest, sha-256",
        expectedMicAlgorithm: "sha-256",
        expectedBy: null,
        validationError: null,
      },
    },
    {
      ...common,
      id: "functional-ack-mdn-report",
      type: "mdn",
      contentType: "multipart/report",
      metadata: {
        messageId: "<997-mdn@example>",
        disposition: "automatic-action/MDN-sent-automatically; processed",
      },
    },
    {
      ...common,
      id: "implementation-ack-mdn-report",
      type: "mdn",
      contentType: "multipart/report",
      metadata: {
        messageId: "<999-mdn@example>",
        disposition: "automatic-action/MDN-sent-automatically; processed",
      },
    },
    {
      ...common,
      id: "functional-ack-x12",
      type: "functional_ack",
      contentType: "application/edi-x12",
      metadata: {
        messageId: "<997@example>",
        sent: false,
        outcome: {
          status: "rejected",
          acknowledgmentCode: null,
          summary: "One functional group was accepted and one was rejected",
          parsed: true,
          unknownReason: null,
          includedTransactionSets: 2,
          receivedTransactionSets: 2,
          acceptedTransactionSets: 1,
          errorCodes: [],
          groups: [
            {
              functionalIdentifierCode: "PO",
              functionalGroupControlNumber: "17",
              functionalGroupVersion: "005010",
              status: "accepted",
              acknowledgmentCode: "A",
              includedTransactionSets: 1,
              receivedTransactionSets: 1,
              acceptedTransactionSets: 1,
              errorCodes: [],
              transactionSets: [
                {
                  functionalIdentifierCode: "PO",
                  functionalGroupControlNumber: "17",
                  transactionSetIdentifierCode: "850",
                  transactionSetControlNumber: "0001",
                  implementationConventionReference: "005010X222A1",
                  status: "accepted",
                  acknowledgmentCode: "A",
                  errorCodes: [],
                },
              ],
            },
            {
              functionalIdentifierCode: "IN",
              functionalGroupControlNumber: "18",
              functionalGroupVersion: null,
              status: "rejected",
              acknowledgmentCode: "R",
              includedTransactionSets: 1,
              receivedTransactionSets: 1,
              acceptedTransactionSets: 0,
              errorCodes: ["1"],
              transactionSets: [],
            },
          ],
          transactionSets: [
            {
              functionalIdentifierCode: "PO",
              functionalGroupControlNumber: "17",
              transactionSetIdentifierCode: "850",
              transactionSetControlNumber: "0001",
              implementationConventionReference: "005010X222A1",
              status: "accepted",
              acknowledgmentCode: "A",
              errorCodes: [],
            },
          ],
        },
        evaluationScope: "transaction_set",
        groupOutcome: {
          functionalIdentifierCode: "PO",
          functionalGroupControlNumber: "17",
          functionalGroupVersion: "005010",
          status: "accepted",
          acknowledgmentCode: "A",
          includedTransactionSets: 1,
          receivedTransactionSets: 1,
          acceptedTransactionSets: 1,
          errorCodes: [],
          transactionSets: [
            {
              functionalIdentifierCode: "PO",
              functionalGroupControlNumber: "17",
              transactionSetIdentifierCode: "850",
              transactionSetControlNumber: "0001",
              implementationConventionReference: "005010X222A1",
              status: "accepted",
              acknowledgmentCode: "A",
              errorCodes: [],
            },
          ],
        },
        transactionOutcome: {
          functionalIdentifierCode: "PO",
          functionalGroupControlNumber: "17",
          transactionSetIdentifierCode: "850",
          transactionSetControlNumber: "0001",
          implementationConventionReference: "005010X222A1",
          status: "accepted",
          acknowledgmentCode: "A",
          errorCodes: [],
        },
        evaluatedStatus: "accepted",
      },
    },
    {
      ...common,
      id: "implementation-ack-x12",
      type: "implementation_ack",
      contentType: "application/edi-x12",
      metadata: {
        messageId: "<999@example>",
        sent: true,
        outcome: implementationAckOutcome,
        evaluationScope: "transaction_set",
        transactionOutcome: implementationAckTransactionOutcome,
        evaluatedStatus: "accepted_with_errors",
      },
    },
    {
      ...common,
      id: "technical-ack-x12",
      type: "technical_ack",
      contentType: "application/edi-x12",
      metadata: { sent: true, responseStatusCode: null },
    },
    {
      ...common,
      id: "technical-ack-response",
      type: "http_response",
      contentType: "text/plain",
      metadata: { sent: true, responseStatusCode: 200 },
    },
  ];

  for (const fixture of fixtures) {
    const parsed = TransactionDocumentFromJSON(fixture);
    const serialized = TransactionDocumentToJSON(parsed);
    assert.equal(parsed.id, fixture.id);
    assert.equal(parsed.type, fixture.type);
    assert.equal(parsed.content, fixture.content);
    assert.equal(serialized.id, fixture.id);
    assert.equal(serialized.type, fixture.type);
    assert.equal(serialized.content, fixture.content);
  }

  const primaryMdn = TransactionDocumentFromJSON(fixtures[2]);
  const functionalAckMdn = TransactionDocumentFromJSON(fixtures[3]);
  const implementationAckMdn = TransactionDocumentFromJSON(fixtures[4]);
  const functionalAck = TransactionDocumentFromJSON(fixtures[5]);
  const implementationAck = TransactionDocumentFromJSON(fixtures[6]);
  assert.equal(primaryMdn.metadata.status, "processed");
  assert.equal(functionalAckMdn.metadata.messageId, "<997-mdn@example>");
  assert.equal(implementationAckMdn.metadata.messageId, "<999-mdn@example>");
  assert.equal(functionalAck.metadata.outcome.groups.length, 2);
  assert.equal(functionalAck.metadata.outcome.status, "rejected");
  assert.equal(functionalAck.metadata.groupOutcome.status, "accepted");
  assert.equal(functionalAck.metadata.groupOutcome.functionalGroupVersion, "005010");
  assert.equal(functionalAck.metadata.transactionOutcome.status, "accepted");
  assert.equal(
    functionalAck.metadata.transactionOutcome.implementationConventionReference,
    "005010X222A1",
  );
  assert.equal(
    implementationAck.metadata.outcome.groups[0].functionalGroupVersion,
    "005010X222A1",
  );
  assert.equal(
    implementationAck.metadata.transactionOutcome.implementationConventionReference,
    "005010X222A1",
  );
});

test("every implementation-acknowledgment timeline variant keeps its discriminator and payload", () => {
  const fixtures = [
    {
      id: "implementation-ack-sent",
      type: "implementation_ack.sent",
      label: "999 sent",
      timestamp: "2026-07-15T18:30:00.123456789Z",
      details: {
        messageId: "<999@example>",
        sent: true,
        outcome: implementationAckOutcome,
        evaluationScope: "implementation_group",
        transactionOutcome: null,
        evaluatedStatus: "accepted_with_errors",
      },
    },
    {
      id: "implementation-ack-received",
      type: "implementation_ack.received",
      label: "999 received",
      timestamp: "2026-07-15T18:30:01.123456789Z",
      details: {
        messageId: "<999@example>",
        sent: true,
        outcome: implementationAckOutcome,
        evaluationScope: "implementation_acknowledgment",
        transactionOutcome: null,
        evaluatedStatus: "accepted_with_errors",
      },
    },
    {
      id: "implementation-ack-mdn-sent",
      type: "implementation_ack.mdn_sent",
      label: "999 MDN sent",
      timestamp: "2026-07-15T18:30:02.123456789Z",
      details: {
        messageId: "<999-mdn@example>",
        disposition: "automatic-action/MDN-sent-automatically; processed",
      },
    },
    {
      id: "implementation-ack-mdn-received",
      type: "implementation_ack.mdn_received",
      label: "999 MDN received",
      timestamp: "2026-07-15T18:30:03.123456789Z",
      details: {
        messageId: "<999-mdn@example>",
        disposition: "automatic-action/MDN-sent-automatically; processed",
      },
    },
  ];

  for (const fixture of fixtures) {
    const parsed = TransactionEventFromJSON(fixture);
    const serialized = TransactionEventToJSON(parsed);
    assert.equal(parsed.type, fixture.type);
    assert.equal(parsed.details.messageId, fixture.details.messageId);
    assert.equal(serialized.type, fixture.type);
    assert.equal(serialized.details.messageId, fixture.details.messageId);
  }
});
