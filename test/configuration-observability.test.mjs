import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { ModernEdiClient, ConfigurationContextResponseToJSON, ConfigurationExternalRepositoryResponseToJSON,
  ConfigurationImportVerificationResponseToJSON, ConfigurationApplyOperationHistoryResponseToJSON } from '../dist/index.js';

test('configuration observation uses one scoped key and preserves exact wire identities and optional evidence', async () => {
  const context = { success: true, workspace: { id: 12 }, apiKey: { id: 9, label: 'CI', scopes: ['configuration:read'] } };
  const connection = { success: true, connected: true, connection: {
    repositoryUrl: 'https://git.example.test/config.git', branch: 'main', directory: 'modernedi', status: 'held', automatic: true,
    verifyBeforeImport: true, revision: 4, createdAt: '2026-09-16T12:34:56.123456789Z', updatedAt: '2026-09-16T12:35:01.123456Z',
    nextAttemptAt: '2026-09-16T12:35:31Z', lastSyncedAt: null, workspaceCommitSha: null, repositoryCommitSha: null,
    importVerification: { runId: 'verify-11111111-1111-4111-8111-111111111111', repositoryCommitSha: 'a'.repeat(40) },
    lastError: { code: 'verification_failed', message: 'The import is held.' },
  } };
  const { operations: ignored, ...entry } = JSON.parse(readFileSync(new URL('./fixtures/integration-api/examples/configuration-apply-response.json', import.meta.url))).operation;
  assert.ok(ignored);
  const history = { success: true, operations: [entry], nextCursor: 'opaque+/=' };
  const evidence = JSON.parse(readFileSync(new URL('./fixtures/integration-api/examples/configuration-verification-response.json', import.meta.url)));
  const responses = [context, connection, { success: true, connected: false }, history, { success: true, operations: [], nextCursor: null },
    evidence, { success: true, run: null }];
  const requests = [];
  const api = new ModernEdiClient({ apiKey: 'synthetic-read-only', fetch: async (url, init) => {
    requests.push(new URL(url));
    assert.equal(init.method, 'GET');
    assert.equal(new Headers(init.headers).get('x-api-key'), 'synthetic-read-only');
    assert.equal(new Headers(init.headers).has('authorization'), false);
    return Response.json(responses.shift());
  } }).configurationAsCode;
  const wire = value => JSON.parse(JSON.stringify(value));
  assert.deepEqual(wire(ConfigurationContextResponseToJSON(await api.getIntegrationConfigurationContext())), context);
  assert.deepEqual(wire(ConfigurationExternalRepositoryResponseToJSON(await api.getIntegrationConfigurationExternalRepository())), connection);
  assert.deepEqual(wire(ConfigurationExternalRepositoryResponseToJSON(await api.getIntegrationConfigurationExternalRepository())), { success: true, connected: false });
  const first = await api.listIntegrationConfigurationApplyOperations({ limit: 1 });
  assert.deepEqual(wire(ConfigurationApplyOperationHistoryResponseToJSON(first)), history);
  assert.deepEqual(wire(ConfigurationApplyOperationHistoryResponseToJSON(await api.listIntegrationConfigurationApplyOperations({ limit: 1, cursor: first.nextCursor }))), { success: true, operations: [], nextCursor: null });
  assert.equal(requests[4].searchParams.get('cursor'), history.nextCursor);
  assert.deepEqual(wire(ConfigurationImportVerificationResponseToJSON(await api.getIntegrationConfigurationImportVerification({ runId: evidence.run.runId }))), evidence);
  assert.deepEqual(wire(ConfigurationImportVerificationResponseToJSON(await api.getIntegrationConfigurationImportVerification({ runId: evidence.run.runId }))), { success: true, run: null });
  assert.equal(responses.length, 0);
  assert.deepEqual(requests.map(url => url.pathname), ['/v1/configuration/context', '/v1/configuration/external-repository',
    '/v1/configuration/external-repository', '/v1/configuration/apply-operations', '/v1/configuration/apply-operations',
    `/v1/configuration/external-repository/verification/${evidence.run.runId}`, `/v1/configuration/external-repository/verification/${evidence.run.runId}`]);
});
