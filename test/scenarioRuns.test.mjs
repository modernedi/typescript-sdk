import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import * as sdk from '../dist/index.js';
import {
  ModernEdiClient, ModernEdiApiError, getModernEdiResponseMetadata,
  StartScenarioRunRequestToJSON, StartScenarioRunRequestFromJSON,
  StartScenarioRunRequestEnvironmentEnum, ScenarioRunTimelineResponseFromJSON,
} from '../dist/index.js';

const contract = JSON.parse(readFileSync(new URL('./fixtures/scenarios/workspace-api.openapi.json', import.meta.url), 'utf8'));
const operation = (path, method) => contract.paths[`/tenant/scenario-runs${path}`][method];
const example = (path, method, status) => structuredClone(operation(path, method).responses[status].content['application/json'].example);

test('an apply-bound discovery response becomes the exact run-start request without calculated hashes', async () => {
  const selected = JSON.parse(readFileSync(new URL('./fixtures/integration-api/examples/configuration-scenario-run-selection-response.json', import.meta.url), 'utf8'));
  assert.deepEqual(sdk.ConfigurationScenarioRunSelectionResponseToJSON(sdk.ConfigurationScenarioRunSelectionResponseFromJSON(selected)), selected);
  const captured = [];
  const client = new ModernEdiClient({ apiKey: 'test-only-secret', fetch: async (url, init) => {
    captured.push({ url: String(url), ...init });
    return Response.json(captured.length === 2 ? example('', 'post', '201') : selected,
      { status: captured.length === 2 ? 201 : 200, headers: { 'Cache-Control': 'private, no-store' } });
  } });
  const response = await client.configurationAsCode.getConfigurationScenarioRunSelection({
    operationId: selected.configurationApplyOperationId, bindingId: selected.selection.binding.id,
  });
  const parameters = { total: '123456789.001', enabled: true, locations: ['PHX', 'LAX'] };
  await client.scenarioRuns.startScenarioRun({ idempotencyKey: 'persisted-run-key',
    startScenarioRunRequest: { ...response.selection, parameters } });
  assert.equal(captured[0].method, 'GET');
  assert.ok(captured[0].url.endsWith(`/v1/configuration/apply-operations/${selected.configurationApplyOperationId}/scenario-run-selections/order-invoice-test`));
  assert.equal(new Headers(captured[1].headers).get('Idempotency-Key'), 'persisted-run-key');
  assert.deepEqual(JSON.parse(captured[1].body), { ...selected.selection, parameters });
  assert.equal(response.appliedSnapshotEtag, selected.appliedSnapshotEtag);
  await client.configurationAsCode.getConfigurationScenarioRunSelection({ operationId: 'apply/unsafe#part', bindingId: 'binding/unsafe#part' });
  assert.match(captured[2].url, /\/apply-operations\/apply%2Funsafe%23part\/scenario-run-selections\/binding%2Funsafe%23part$/);
  for (const request of captured) assert.equal(new Headers(request.headers).get('x-api-key'), 'test-only-secret');
});

test('discovery distinguishes pending publication from snapshot drift without silently retrying conflicts', async () => {
  for (const [code, retryable] of [['configuration_apply_pending', true], ['configuration_snapshot_changed', false]]) {
    let calls = 0;
    const client = new ModernEdiClient({ apiKey: 'test-only-key', retry: { maxAttempts: 3 }, fetch: async () => {
      calls++;
      return Response.json({ success: false, error: { code, retryable, message: 'Selection unavailable', requestId: 'selection-test', details: {} } },
        { status: 409, headers: retryable ? { 'Retry-After': '15' } : {} });
    } });
    await assert.rejects(client.configurationAsCode.getConfigurationScenarioRunSelection({ operationId: 'apply-test', bindingId: 'order-invoice-test' }),
      (error) => error instanceof ModernEdiApiError && error.code === code && error.retryable === retryable
        && error.retryAfter === (retryable ? '15' : undefined));
    assert.equal(calls, 1);
  }
});

test('all published scenario response examples survive SDK decoding and encoding unchanged', () => {
  let checked = 0;
  for (const [path, methods] of Object.entries(contract.paths)) {
    if (!path.startsWith('/tenant/scenario-runs')) continue;
    for (const method of Object.values(methods)) {
      for (const [status, response] of Object.entries(method.responses)) {
        if (!status.startsWith('2')) continue;
        const content = response.content?.['application/json'];
        if (!content?.schema?.$ref) continue;
        const examples = content.example ? [content.example] : Object.values(content.examples ?? {}).map((item) => item.value);
        if (!examples.length) continue;
        const model = content.schema.$ref.split('/').at(-1);
        assert.equal(typeof sdk[`${model}FromJSON`], 'function', model);
        for (const value of examples) {
          const input = structuredClone(value);
          // Optional generated properties may be undefined; compare the actual serialized JSON wire value.
          const wire = JSON.parse(JSON.stringify(sdk[`${model}ToJSON`](sdk[`${model}FromJSON`](input))));
          assert.deepEqual(wire, input, `${path}: ${status}`);
          checked++;
        }
      }
    }
  }
  assert.equal(checked, 8);
});

test('scenario start parameters preserve booleans, numbers, exact decimals, and scalar arrays', () => {
  const request = structuredClone(operation('', 'post').requestBody.content['application/json'].example);
  request.environment = 'test';
  request.parameters = { count: 2, total: '123456789.001', enabled: true, ids: ['PHX', 'LAX'], counts: [0, 1], flags: [true, false] };
  assert.equal(StartScenarioRunRequestEnvironmentEnum.Test, 'test');
  assert.deepEqual(StartScenarioRunRequestToJSON(StartScenarioRunRequestFromJSON(request)), request);
});

test('scenario lifecycle carries one credential, exact revisions, encoded paths, and raw evidence bytes', async () => {
  const captured = [];
  const start = example('', 'post', '201');
  start.run.environment = 'test';
  const report = example('/{runId}/evidence-report', 'get', '200');
  report.run.startedBy = { apiKeyId: 91, label: 'Order checks' };
  const bytes = JSON.stringify(report);
  const digest = createHash('sha256').update(bytes).digest('hex');
  const client = new ModernEdiClient({ apiKey: 'test-only-secret', fetch: async (url, init) => {
    captured.push({ url: String(url), ...init });
    return String(url).endsWith('/evidence-report')
      ? new Response(bytes, { headers: { 'Content-Type': 'application/json', 'X-Content-Sha256': digest } })
      : Response.json(start, { status: 201, headers: { ETag: start.run.etag, 'Idempotency-Replayed': 'false', Location: `/v1/scenario-runs/${start.run.id}` } });
  } });
  const selection = { ...operation('', 'post').requestBody.content['application/json'].example, environment: 'test' };
  const raw = await client.scenarioRuns.startScenarioRunRaw({ idempotencyKey: 'start-exact', startScenarioRunRequest: selection });
  assert.equal(getModernEdiResponseMetadata(raw.raw).location, `/v1/scenario-runs/${start.run.id}`);
  assert.equal((await raw.value()).run.environment, 'test');
  await client.scenarioRuns.advanceScenarioRun({ runId: 'id/with#reserved', idempotencyKey: 'advance-exact', ifMatch: start.run.etag, body: {} });
  await client.scenarioRuns.attachScenarioRunObservation({ runId: start.run.id, idempotencyKey: 'attach-exact', ifMatch: start.run.etag,
    scenarioRunObservationRequest: { stepId: 'purchaseOrder', occurrence: 1, messageId: '<order@example>', transactionKey: '1#0001' } });
  await client.scenarioRuns.cancelScenarioRun({ runId: start.run.id, idempotencyKey: 'cancel-exact', ifMatch: start.run.etag, body: {} });
  const downloaded = await client.scenarioRuns.downloadScenarioEvidenceReportRaw({ runId: start.run.id });
  assert.equal(getModernEdiResponseMetadata(downloaded.raw).contentSha256, digest);
  assert.equal(createHash('sha256').update(await downloaded.raw.clone().text()).digest('hex'), digest);
  assert.deepEqual((await downloaded.value()).run.startedBy, report.run.startedBy);
  assert.match(captured[1].url, /\/v1\/scenario-runs\/id%2Fwith%23reserved\/advance$/);
  assert.equal(new Headers(captured[1].headers).get('If-Match'), start.run.etag);
  for (const request of captured) {
    assert.equal(new Headers(request.headers).get('x-api-key'), 'test-only-secret');
    assert.ok(!String(request.body).includes('test-only-secret'));
  }
  assert.deepEqual(JSON.parse(captured[0].body), selection);
  assert.deepEqual(JSON.parse(captured[1].body), {});
});

test('timeline preserves member and API attribution and exposes the standard scope-denial envelope', async () => {
  const timeline = example('/{runId}/timeline', 'get', '200');
  for (const actor of [{ memberId: 17, email: 'member@example.com', role: 'OWNER' }, { apiKeyId: 91, label: 'Order checks' }]) {
    timeline.operations[0].actor = actor;
    assert.deepEqual(ScenarioRunTimelineResponseFromJSON(timeline).operations[0].actor, actor);
  }
  const client = new ModernEdiClient({ bearerToken: 'test-only-key', fetch: async () => Response.json({ success: false,
    error: { code: 'insufficient_scope', message: 'Sending requires messages:write.', retryable: false, requestId: 'ci-test', details: {} },
  }, { status: 403, headers: { 'X-Request-Id': 'ci-test' } }) });
  await assert.rejects(client.scenarioRuns.advanceScenarioRun({ runId: 'run-test', idempotencyKey: 'request', ifMatch: '"etag"', body: {} }),
    (error) => error instanceof ModernEdiApiError && error.code === 'insufficient_scope');
});
