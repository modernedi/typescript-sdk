import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { ConfigurationVerificationResponseFromJSON, ConfigurationVerificationResponseToJSON,
  ConfigurationApplyRequestFromJSON, ConfigurationApplyRequestToJSON, ConfigurationAsCodeApi, Configuration } from '../dist/index.js';

test('the generated verification response preserves the complete server evidence contract', () => {
  const example = JSON.parse(readFileSync(new URL('./fixtures/integration-api/examples/configuration-verification-response.json', import.meta.url), 'utf8'));
  assert.deepEqual(JSON.parse(JSON.stringify(ConfigurationVerificationResponseToJSON(ConfigurationVerificationResponseFromJSON(example)))), example);
  const apply = { planSha256: 'a'.repeat(64), files: [], verificationRunId: example.run.runId };
  assert.deepEqual(JSON.parse(JSON.stringify(ConfigurationApplyRequestToJSON(ConfigurationApplyRequestFromJSON(apply)))), apply);
});

test('the SDK uses the scoped verification routes and preserves refresh intent', async () => {
  const api = new ConfigurationAsCodeApi(new Configuration({ basePath: 'https://example.invalid' }));
  const request = { requestId: '11111111-1111-4111-8111-111111111111', planSha256: 'a'.repeat(64), files: [],
    refreshScenarioBindings: ['22222222-2222-4222-8222-222222222222'] };
  const start = await api.verifyIntegrationConfigurationRequestOpts({ configurationVerificationRequest: request });
  assert.equal(start.path, '/v1/configuration/verification-runs');
  assert.equal(start.method, 'POST');
  assert.deepEqual(JSON.parse(JSON.stringify(start.body)), request);
  const get = await api.getIntegrationConfigurationVerificationRequestOpts({ runId: 'verify-one' });
  assert.equal(get.path, '/v1/configuration/verification-runs/verify-one');
  const cancel = await api.cancelIntegrationConfigurationVerificationRequestOpts({ runId: 'verify-one' });
  assert.equal(cancel.path, '/v1/configuration/verification-runs/verify-one/cancel');
});
