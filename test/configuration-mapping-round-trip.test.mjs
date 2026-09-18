import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { Configuration, ConfigurationAsCodeApi, ConfigurationResourceDocumentFromJSON,
  ConfigurationResourceDocumentToJSON, MappingOutputConfigurationToJSON } from '../dist/index.js';

const json = value => JSON.parse(JSON.stringify(value));
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value !== null && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const hash = value => createHash('sha256').update(JSON.stringify(canonical(value))).digest('hex');

for (const [direction, purpose, delivery] of [
  ['INCOMING', 'PROCESSING', 'MAPPED_OUTPUTS'],
  ['INCOMING', 'PROCESSING', 'TRANSACTION_RECORD'],
  ['INCOMING', 'ACKNOWLEDGMENT', 'TRANSACTION_RECORD'],
  ['OUTGOING', 'PROCESSING', 'OUTBOUND_AS2'],
]) {
  test(`portable ${direction}/${purpose}/${delivery} mapping survives all request serializers`, async () => {
    const key = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
    const output = { contentType: 'application/json', purpose, delivery };
    const content = { apiVersion: 'modernedi.com/v1', kind: 'Mapping', metadata: { key }, spec: {
      partnerKey: 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', direction, x12Version: '4010',
      functionalIdentifierCode: 'PO', transactionSetIdentifierCode: '850',
      transform: { type: direction === 'INCOMING' ? 'X12_MAPPER' : 'JSLT', fileName: 'folder/order.x12mapper',
        sourcePath: `mappings/${key}/source.x12mapper`, sourceSha256: 'c'.repeat(64) }, output,
      ...(direction === 'INCOMING' ? { businessKey: { name: 'purchaseOrderNumber', extractor: 'ST->BEG(03)' } } : {}),
      deliveredMetadata: { partner: false, transactionTimestamp: true, transactionSet: false,
        transactionControlNumber: true, functionalGroupControlNumber: false, x12Version: true,
        functionalIdentifierCode: false, segmentTerminator: true, mappingSourceHash: false },
      runtime: direction === 'INCOMING' ? { activeAttributes: { customLegacyAttribute: true } }
        : { extraFields: { customLegacyField: 'preserved' } },
      regressionCases: [{ id: 'order', name: 'Order', comparison: 'EXACT_TEXT', input: 'sample\r\n',
        contentType: direction === 'INCOMING' ? 'application/edi-x12' : 'application/json', params: null,
        functionalGroupIndex: null, transactionIndex: null, expectedOutput: 'exact\n' }],
    } };
    const restored = json(ConfigurationResourceDocumentToJSON(ConfigurationResourceDocumentFromJSON(content)));
    assert.deepEqual(restored, content);
    const files = [{ path: `mappings/${key}/mapping.json`, role: 'RESOURCE', format: 'JSON',
      mediaType: 'application/json', contentSha256: hash(content), content }];
    const api = new ConfigurationAsCodeApi(new Configuration({ basePath: 'https://example.invalid' }));
    const requests = [
      await api.planIntegrationConfigurationRequestOpts({ configurationPlanRequest: { files } }),
      await api.verifyIntegrationConfigurationRequestOpts({ configurationVerificationRequest: {
        files, requestId: key, planSha256: 'd'.repeat(64) } }),
      await api.applyIntegrationConfigurationRequestOpts({ configurationApplyRequest: {
        files, planSha256: 'd'.repeat(64), verificationRunId: 'verify-exact' },
        ifMatch: '"snapshot"', idempotencyKey: key }),
    ];
    for (const request of requests) {
      const sent = json(request.body).files[0];
      assert.deepEqual(sent.content, content, request.path);
      assert.equal(hash(sent.content), sent.contentSha256, request.path);
    }
    // The ordinary mapping response still does not turn server-selected delivery into a writable field.
    assert.deepEqual(json(MappingOutputConfigurationToJSON(output)), { contentType: output.contentType, purpose });
  });
}
