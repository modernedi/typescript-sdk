import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  Configuration,
  ConfigurationAsCodeApi,
  ConfigurationExportResponseFromJSON,
  ConfigurationExportResponseToJSON,
  ConfigurationPlanFileFromJSON,
  ConfigurationPlanFileToJSON,
  ConfigurationPlanRequestFromJSON,
  ConfigurationPlanRequestToJSON,
  instanceOfConfigurationDesiredFile,
  instanceOfConfigurationPlanAdvisoryStateFile,
} from '../dist/index.js';

const json = value => JSON.parse(JSON.stringify(value));
const example = name => JSON.parse(readFileSync(
  new URL(`./fixtures/integration-api/examples/${name}.json`, import.meta.url), 'utf8'));
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value !== null && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const fileHash = file => createHash('sha256')
  .update(file.format === 'TEXT' ? file.content : JSON.stringify(canonical(file.content)), 'utf8')
  .digest('hex');

function assertFilesUnchanged(actual, expected) {
  assert.deepEqual(actual, expected);
  for (const file of actual) {
    assert.equal(fileHash(file), file.contentSha256, `Exact logical bytes for ${file.path}`);
  }
}

test('advisory snapshots never match the desired-file union member', () => {
  const { files } = example('configuration-export-response');
  const snapshot = files.find(file => file.role === 'STATE');
  assert.equal(instanceOfConfigurationDesiredFile(snapshot), false);
  assert.equal(instanceOfConfigurationPlanAdvisoryStateFile(snapshot), true);
  for (const file of files.filter(file => file.role !== 'STATE')) {
    assert.equal(instanceOfConfigurationDesiredFile(file), true, file.role);
    assert.equal(instanceOfConfigurationPlanAdvisoryStateFile(file), false, file.role);
  }
  for (const role of ['UNKNOWN', '11184809', '', undefined, null]) {
    assert.equal(instanceOfConfigurationDesiredFile({ ...snapshot, role }), false);
  }
  assert.deepEqual(json(ConfigurationPlanFileToJSON(snapshot)), snapshot);
  assert.deepEqual(json(ConfigurationPlanFileToJSON(ConfigurationPlanFileFromJSON(snapshot))), snapshot);
});

for (const parsed of [false, true]) {
  test(`complete export-to-plan preserves the snapshot and all desired hashes (${parsed ? 'parsed SDK response' : 'raw JSON'})`, async () => {
    const exported = example('configuration-export-response');
    assert.deepEqual(json(ConfigurationExportResponseToJSON(ConfigurationExportResponseFromJSON(exported))), exported);
    assert.deepEqual([...new Set(exported.files.map(file => file.role))].sort(), ['MANIFEST', 'RESOURCE', 'SOURCE', 'STATE']);
    const received = parsed ? ConfigurationExportResponseFromJSON(exported) : exported;
    const request = { files: received.files };
    assertFilesUnchanged(json(ConfigurationPlanRequestToJSON(request)).files, exported.files);
    const restoredRequest = ConfigurationPlanRequestFromJSON(request);
    assertFilesUnchanged(json(ConfigurationPlanRequestToJSON(restoredRequest)).files, exported.files);
    const api = new ConfigurationAsCodeApi(new Configuration({ basePath: 'https://example.invalid' }));
    const options = await api.planIntegrationConfigurationRequestOpts({ configurationPlanRequest: restoredRequest });
    assert.equal(options.path, '/v1/configuration/plan');
    assert.equal(options.method, 'POST');
    assertFilesUnchanged(json(options.body).files, exported.files);
  });
}

test('the documented advisory plan request preserves its distinct base snapshot', async () => {
  const request = example('configuration-plan-request');
  const state = request.files.find(file => file.role === 'STATE');
  const manifest = request.files.find(file => file.role === 'MANIFEST');
  assert.notEqual(state.content.bundleSha256, manifest.contentSha256);
  const api = new ConfigurationAsCodeApi(new Configuration({ basePath: 'https://example.invalid' }));
  const options = await api.planIntegrationConfigurationRequestOpts({ configurationPlanRequest: request });
  assertFilesUnchanged(json(options.body).files, request.files);
});

test('planning without advisory state still preserves every desired file', async () => {
  const files = example('configuration-export-response').files.filter(file => file.role !== 'STATE');
  const api = new ConfigurationAsCodeApi(new Configuration({ basePath: 'https://example.invalid' }));
  const options = await api.planIntegrationConfigurationRequestOpts({ configurationPlanRequest: { files } });
  assertFilesUnchanged(json(options.body).files, files);
});
