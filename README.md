# ModernEDI TypeScript SDK

Official server-side TypeScript client for the
[ModernEDI Integration API](https://www.modernedi.com/integration-api/).

The SDK is generated from ModernEDI's canonical OpenAPI specification and includes every public
operation and schema. A small reviewed runtime adds:

- API-key header and bearer authentication
- structured `ModernEdiApiError` values
- response metadata for request correlation, retries, ETags, and idempotency replays
- conservative, opt-in retries
- a generic cursor-pagination helper
- raw-body mapped-output webhook verification

The package is licensed under Apache-2.0. That license covers the SDK code; use of the hosted
ModernEDI service remains governed by the applicable ModernEDI terms.

## Install

```sh
npm install @modernedi/sdk
```

## Requirements

- Node.js 20 or newer
- ECMAScript modules (`import`); this first release does not expose a CommonJS `require` entry
- A scoped ModernEDI Integration API key

Integration API keys are server-side credentials. Do not put one in browser JavaScript, a mobile
app, a desktop binary, or any other distribution that an end user can inspect. Browser-based
operator consoles should call a customer-controlled backend or BFF, and that server should use this
SDK.

## Create a client

```ts
import { ModernEdiClient } from "@modernedi/sdk";

const modernEdi = new ModernEdiClient({
  apiKey: process.env.MODERNEDI_API_KEY!,
});

const result = await modernEdi.transactions.listIntegrationTransactions({
  environment: "production",
  needsAttention: true,
  limit: 50,
});
```

Bearer authentication is an alternative representation of the same Integration API key:

```ts
const modernEdi = new ModernEdiClient({
  bearerToken: process.env.MODERNEDI_API_KEY!,
});
```

Use only one authentication form on a client.

## Observe configuration and Git synchronization

A key with `configuration:read` can confirm its own workspace and permissions, inspect the
existing Git connection, and page through the same configuration change history shown in the browser.
No signed-in browser session or Git-provider credential is needed for these reads.

```ts
const api = modernEdi.configurationAsCode;
const context = await api.getIntegrationConfigurationContext();
// Compare stable IDs with your approved target before making changes; labels can change.
if (context.workspace.id !== expectedWorkspaceId || context.apiKey.id !== expectedKeyId) {
  throw new Error("Unexpected configuration target");
}
const repository = await api.getIntegrationConfigurationExternalRepository();
const page = await api.listIntegrationConfigurationApplyOperations({ limit: 25 });
// Pass page.nextCursor unchanged to the next call; stop when it is null.
const pendingImport = repository.connection?.importVerification;
if (pendingImport) {
  const evidence = await api.getIntegrationConfigurationImportVerification({ runId: pendingImport.runId });
  // A null run means no retained result is available, never a passing check.
  console.log(evidence.run?.status ?? "No result available");
}
```

Connection status describes the latest server observation, not a fresh remote Git fetch.
If an import attempt changes during a read, re-read the connection before requesting its evidence.
These methods do not connect repositories, change import-test policy, retry synchronization, apply
configuration, or send EDI. Connection management remains a workspace-owner action in the browser.

## Export workspace configuration

Use a key with `configuration:read` to retrieve one deterministic logical file bundle containing
the current AS2 connections, active partners, mapping resources, exact mapping source, optional
scenario definitions and bindings, and observed snapshot state. The SDK returns parsed JSON objects for JSON files and strings for source files;
it does not create directories or a ZIP archive.

```ts
const exported = await modernEdi.configurationAsCode.exportIntegrationConfiguration({});

console.log(exported.bundleSha256, exported.snapshotEtag);
for (const file of exported.files) {
  console.log(file.role, file.path, file.contentSha256);
}
```

Call the generated `exportIntegrationConfigurationRaw(...)` helper when you need the HTTP `ETag`
header. The generated request accepts `ifNoneMatch`; because `304` has no response body, the common
SDK error boundary reports that status as a `ModernEdiApiError` with `status === 304`. Treat that one
status as an unchanged snapshot and continue handling every other error normally.

## Plan workspace configuration

Use the same `configuration:read` key to compare a portable desired bundle with current workspace
configuration without changing either one:

```ts
const plan = await modernEdi.configurationAsCode.planIntegrationConfiguration({
  configurationPlanRequest: desired,
});

if (!plan.applicable) {
  for (const diagnostic of plan.diagnostics) {
    console.error(diagnostic.severity, diagnostic.code, diagnostic.pointer, diagnostic.message);
  }
}
```

Planning is safe to retry without an idempotency key. A structurally valid bundle returns HTTP 200;
inspect `applicable`, `diagnostics`, `affectedScenarios`, and `affectedRuns` before treating it as an
apply candidate. A complete compile-checked example is in `examples/configuration-plan.ts`.

## Optionally verify saved mapping cases

Mappings may include `spec.regressionCases`, using the same fixtures authored in the browser and
stored in configuration/Git. Outgoing JSLT/XSLT cases can set `validateX12: true` to require generated-X12
validation as well as exact output. Omit it for exact comparison only, including intentional document
fragments. The SDK preserves this option and the server's separate `x12ValidationStatus` result.

Server verification checks the exact reviewed plan with its frozen mapping syntax trees. A matching
output can still fail X12 validation; neither check sends EDI or proves partner acceptance. A partner
and mappings remain sufficient without tests, scenarios, or Git. See the
[saved mapping test guide](https://www.modernedi.com/docs/test-a-mapping) and the generated
configuration verification operations. An explicitly selected `verificationRunId` must refer to a
current passing result for the exact apply; omitting it keeps tests optional.

## Apply workspace configuration

Use a `configuration:write` key to apply the exact files represented by an applicable plan. Persist
one stable idempotency key with the intended change and reuse it through the same API key; each
API key has a separate idempotency namespace within the workspace. Do not generate a new key because a
request timed out or returned `202`.

```ts
if (!plan.applicable || plan.planSha256 === null) {
  throw new Error("Resolve plan diagnostics before apply");
}

const applied = await modernEdi.configurationAsCode.applyIntegrationConfiguration({
  idempotencyKey: deploymentId,
  ifMatch: plan.currentSnapshotEtag,
  configurationApplyRequest: {
    planSha256: plan.planSha256,
    files: desired.files,
  },
});

if (applied.operation.status === "PENDING") {
  const current = await modernEdi.configurationAsCode.getIntegrationConfigurationApplyOperation({
    operationId: applied.operation.operationId,
  });
  console.log(current.operation.status, current.operation.runtimePublication);
}
```

Both POST response statuses use the same typed envelope. `200/SUCCEEDED` is terminal.
`202/PENDING` means the aggregate database change already committed and only the single runtime
publication is retrying; poll the operation instead of submitting a new apply. Use
`applyIntegrationConfigurationRaw(...)` with `getModernEdiResponseMetadata(raw.raw)` when you need
the `Idempotency-Replayed` or `Retry-After` response headers. A complete plan/apply/poll example is
in `examples/configuration-apply.ts`.

## Automate scenario runs

Scenario runs use the same applied bindings, evaluator, and evidence as the browser. They are optional:
mappings alone remain sufficient to exchange EDI. Use `client.scenarioRuns` to start a conversation,
attach persisted transaction IDs, advance evaluation, cancel, read its timeline, and download a report.

Grant `scenario-runs:read` for reads and reports, and `scenario-runs:write` for run operations. Neither
implies the other. Every advance that actually sends EDI also needs `messages:write`, even when a
ModernEDI test partner sends into the workspace. The client reuses its authenticated key automatically.
Configuration and transaction-discovery permissions are separate. These scopes cover both Test and
Production traffic; they do not make a credential Test-only.

See [examples/scenario-runs.ts](./examples/scenario-runs.ts) and the
[scenario automation guide](https://www.modernedi.com/docs/scenarios/automation). Give automation an
exact, already-applied definition and binding selection, not unreviewed JSON source. After a lost
response, retry with the same API-key identity, body, original ETag, and idempotency key. A retryable
*recorded failure* instead requires the current ETag and a fresh key to make another attempt.

In the browser, select an applied binding and its parameters, then use **Automate this run → Copy API
start request**. This exports the exact selectors without starting a run or including credentials.
Copy a fresh selection after applying a new binding revision.

For a headless workflow, wait for your exact configuration apply operation to reach `SUCCEEDED`,
then resolve the binding's authored `metadata.id` with a `configuration:read` key:

```ts
const selected = await modernEdi.configurationAsCode.getConfigurationScenarioRunSelection({
  operationId: applied.operation.operationId,
  bindingId: "order-invoice-test",
});
// Add declared parameters, then persist this body and a new run idempotency key before starting.
const startRequest = { ...selected.selection, parameters: {} };
```

The complete workspace snapshot must still match that apply, including mapping test cases.
`409 configuration_apply_pending` asks you to wait; `409 configuration_snapshot_changed` asks
you to review the change, not silently substitute the latest apply. A no-op apply can select an
unchanged binding too. Discovery is read-only and does not reserve configuration or attest runtime
readiness. Run start rechecks the binding and its referenced inputs; unrelated later edits need not
block start. See [examples/configuration-scenario-run.ts](./examples/configuration-scenario-run.ts)
for bounded polling and the apply-result-to-run handoff. Never infer runtime hashes from source files.

Use `downloadScenarioEvidenceReportRaw()` to retain the original response bytes and
`getModernEdiResponseMetadata(response.raw).contentSha256` to read their SHA-256. Parsing and
reserializing the report can change its bytes. A pass concerns only the recorded run and its frozen
binding; it does not transfer to a later configuration revision.

## Verify mapped-output webhooks

Use the raw request bytes, before JSON parsing or character-set normalization. The helper enforces
the four ModernEDI delivery headers, strict lowercase `sha256=` syntax, constant-time HMAC
comparison, header/body correlation, and a five-minute timestamp tolerance by default:

```ts
import { verifyMappedOutputWebhook } from "@modernedi/sdk";

const event = verifyMappedOutputWebhook({
  rawBody,
  headers: request.headers,
  signingSecret: process.env.MODERNEDI_WEBHOOK_SECRET!,
});

if (event.event === "mapped_output.test") {
  console.log("Synthetic connectivity test", event.requestId);
} else {
  console.log("Mapped output ready", event.message.id, event.message.payload);
}
```

`X-ModernEDI-Timestamp` is whole Unix epoch seconds. `toleranceSeconds` can override the default;
`now`, when supplied for deterministic testing, is a `Date` or Unix epoch milliseconds.

A freshness check does not prevent replay inside the accepted window. After verification,
atomically claim `deliveryId` in durable storage and ignore a value already claimed. ModernEDI gives
a legitimate redelivery attempt a new `deliveryId`, so production business processing should also
be idempotent on `event.message.id`. Never log the signing secret, signature, or raw body when
verification fails. A compile-checked framework-neutral receiver is in
`examples/verify-webhook.ts`.

Test a saved endpoint without creating, leasing, or acknowledging a mapped output:

```ts
const result = await modernEdi.mappedOutputs.testMappedOutputWebhook({ partnerId: 17 });

if (!result.delivered) {
  console.error(result.requestId, result.statusCode, result.error);
}
```

The API call returns HTTP 200 when the synthetic attempt completes. That does not imply delivery;
inspect `delivered`, `statusCode`, and `error`. The signed test event is marked
`event: "mapped_output.test"` and `test: true`, and never contains a mapped-output `message`.

## Build an operator inbox

Transaction status filters accept arrays. Values within one filter are ORed,
while different filter categories are ANDed:

```ts
const page = await modernEdi.transactions.listIntegrationTransactions({
  environment: "production",
  mappingStatus: ["FAILED", "COMPLETED_WITH_ERRORS"],
  functionalAckStatus: ["rejected", "partially_accepted"],
  implementationAckStatus: ["rejected", "partially_accepted"],
  mdnStatus: ["rejected", "invalid", "mic_mismatch", "overdue"],
  limit: 100,
});

if (!page.attentionSummary.freshness.complete) {
  console.warn("ModernEDI is still indexing operator status; an empty page is not conclusive");
}

for (const transaction of page.transactions) {
  console.log({
    messageId: transaction.messageId,
    transactionKey: transaction.transactionKey,
    mappingStatus: transaction.mappingStatus.status,
    functionalAckStatus: transaction.functionalAckStatus,
    implementationAckStatus: transaction.implementationAckStatus,
    mdnStatus: transaction.mdnStatus,
    onWatchlist: transaction.onWatchlist,
  });
}
```

The generated filter types are closed to the values the API accepts, and the SDK
rejects unknown filter values before sending a request. Response status enums
remain forward-compatible with values introduced by newer API versions.

The 997 and 999 filters are distinct and different filter categories are ANDed. A normal partner flow expects one
acknowledgment type, so supply `functionalAckStatus` or `implementationAckStatus` unless you intentionally need rows that
have both. Partner create and patch requests can opt into 999s with
`implementationAcknowledgmentEnabled: true`; ModernEDI uses 999 only for 005010-and-later documents and continues to
send 997 for earlier versions. A 999 reports X12 syntax and relational validation. It does not indicate semantic or
business acceptance, and it is not HIPAA implementation-guide certification.

An Integration API key with `transactions:write` can idempotently add or remove
a transaction from the operator watchlist. Public API watch entries remain active
until they are removed:

```ts
const identity = {
  environment: "production" as const,
  messageId: "msg-850-api",
  transactionKey: "17#0001",
};

await modernEdi.transactions.watchIntegrationTransaction(identity);
await modernEdi.transactions.unwatchIntegrationTransaction(identity);
```

## Send mapped or already-generated X12

Every operation that accepts more than one request media type uses a discriminated
`contentType`/`body` pair. TypeScript checks that the body matches the selected media type.

Send a JSON business document through a ModernEDI outgoing map:

```ts
await modernEdi.outboundAs2.sendAs2Message({
  partnerId: 17,
  x12Version: "005010",
  functionalGroupType: "IN",
  transactionGroupType: 810,
  idempotencyKey: crypto.randomUUID(),
  contentType: "application/json",
  body: {
    invoiceNumber: "INV-1001",
    total: 240.0,
  },
});
```

Send X12 your system generated:

```ts
await modernEdi.outboundAs2.sendGeneratedX12Message({
  partnerId: 17,
  x12Version: "005010",
  functionalGroupType: "IN",
  transactionGroupType: 810,
  idempotencyKey: crypto.randomUUID(),
  contentType: "application/edi-x12",
  body: x12,
});
```

Mapped send, reply, carbon-copy, and preview operations support XML, JSON, text, and the explicit
ModernEDI outbound envelope. Raw-X12 send, reply, and carbon-copy operations support
`application/edi-x12`, `text/plain`, and the documented JSON envelope with a business key.
Complete compile-checked examples live in `examples/send-documents.ts`.

## Structured errors

```ts
import { ModernEdiApiError } from "@modernedi/sdk";

try {
  await modernEdi.transactions.getIntegrationTransaction({
    messageId: "<message-id>",
    transactionKey: "17#0001",
    environment: "production",
  });
} catch (error) {
  if (error instanceof ModernEdiApiError) {
    console.error({
      status: error.status,
      code: error.code,
      retryable: error.retryable,
      requestId: error.requestId,
      retryAfter: error.retryAfter,
      details: error.details,
    });
  }
  throw error;
}
```

Always log `requestId`; ModernEDI support can use it to correlate the request with platform logs.

## Response headers

Normal generated methods return the parsed value. Use a generated `*Raw()` method when response
headers matter:

```ts
import { getModernEdiResponseMetadata } from "@modernedi/sdk";

const response = await modernEdi.partners.getIntegrationPartnerRaw({
  partnerId: 17,
});

const partner = await response.value();
const metadata = getModernEdiResponseMetadata(response.raw);

console.log(metadata.requestId);
console.log(metadata.etag);
```

Mutation responses can additionally expose `idempotencyReplayed`.
The complete compile-checked example is `examples/response-metadata.ts`.

## Retries

Retries are opt-in:

```ts
const modernEdi = new ModernEdiClient({
  apiKey: process.env.MODERNEDI_API_KEY!,
  retry: {
    maxAttempts: 3,
    baseDelayMs: 250,
    maxDelayMs: 10_000,
  },
});
```

The SDK retries GET, HEAD, and OPTIONS requests, read-only configuration plans, idempotent
transaction watch/unwatch requests, and requests carrying an `Idempotency-Key`.
It retries only `429`, `502`, `503`, and `504` by default. It never retries before `Retry-After`;
when the server requests a delay longer than `maxDelayMs`, the SDK returns that response to the
normal error path instead of waiting indefinitely or retrying early. Apart from watch/unwatch, a
mutation without an idempotency key is never automatically retried, because the SDK cannot rule
out a duplicate side effect.

## Cursor pagination

ModernEDI cursors are opaque. Return them to the same endpoint and environment unchanged:

```ts
import { paginateCursor } from "@modernedi/sdk";

for await (const transaction of paginateCursor(
  (cursor) =>
    modernEdi.transactions.listIntegrationTransactions({
      environment: "production",
      cursor,
      limit: 100,
    }),
  (page) => ({
    items: page.transactions,
    nextCursor: page.nextCursor,
  }),
)) {
  console.log(transaction);
}
```

## Generated API groups

`ModernEdiClient` exposes:

- `scenarioRuns` — optional conversation lifecycle, timeline, and immutable evidence reports

- `account`
- `as2Connections`
- `configurationAsCode`
- `integrationEvents`
- `mappedOutputs`
- `mappingRuntime`
- `mappings`
- `outboundAs2`
- `partners`
- `transactions`
- `x12`

The generated classes, request types, response types, conversion functions, and raw response
helpers are also exported directly.

All documented date-time values remain strings. This preserves ModernEDI's exact nine fractional
UTC digits instead of truncating them through JavaScript `Date`.

## Support

- [Integration API documentation](https://www.modernedi.com/integration-api/)
- Support email: [contact@modernedi.com](mailto:contact@modernedi.com)
- [Contact ModernEDI](https://www.modernedi.com/contact)

When requesting help with an API call, include the response `requestId` but never include your API
key or another secret.

## Build and test this repository

This repository contains the complete public package source, runtime helpers,
examples or schemas, and offline tests. No ModernEDI account, API key, private
repository, code generator, or Java installation is needed to build it.

```sh
npm ci
npm run verify
```

Generated API files are produced from ModernEDI's canonical API contract. Report
issues here; generated files should be corrected in the upstream contract/tooling
and regenerated. The public source is exported as a reviewed snapshot, without
private application code, generators, deployment credentials, or Git history.
PUBLIC_SOURCE.json records the source revision and exported file hashes.

Publishing npm packages is a separate, protected maintainer operation. The CI
workflow in this repository only builds, tests, and checks package contents.
