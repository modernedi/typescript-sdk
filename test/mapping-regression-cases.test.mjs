import assert from 'node:assert/strict'
import test from 'node:test'
import { MappingRegressionCaseFromJSON, MappingRegressionCaseToJSON, ConfigurationMappingSpecFromJSON, ConfigurationMappingSpecToJSON,
  ConfigurationVerificationCaseResultFromJSON, ConfigurationVerificationCaseResultToJSON } from '../dist/index.js'

test('generated SDK retains every fixture byte and required nullable option', () => {
  const fixture = { id: 'po', name: 'Purchase order', comparison: 'EXACT_TEXT', input: 'sample\r\n', contentType: 'application/edi-x12', params: null, functionalGroupIndex: 0, transactionIndex: 0, expectedOutput: 'PO-1\n' }
  assert.deepEqual(wire(MappingRegressionCaseToJSON(MappingRegressionCaseFromJSON(fixture))), fixture)
  const parsed = ConfigurationMappingSpecFromJSON({ regressionCases: [fixture], transform: {}, output: {}, runtime: {} })
  assert.deepEqual(wire(ConfigurationMappingSpecToJSON(parsed)).regressionCases, [fixture])
  const outgoing = { ...fixture, contentType: 'application/json', params: { suffix: '-A' }, functionalGroupIndex: null, transactionIndex: null }
  assert.deepEqual(wire(MappingRegressionCaseToJSON(MappingRegressionCaseFromJSON(outgoing))), outgoing)
  for (const validateX12 of [true, false]) {
    const opted = { ...outgoing, validateX12 }
    assert.deepEqual(MappingRegressionCaseToJSON(MappingRegressionCaseFromJSON(opted)), opted)
    assert.deepEqual(ConfigurationMappingSpecToJSON(ConfigurationMappingSpecFromJSON({ regressionCases: [opted], transform: {}, output: {}, runtime: {} })).regressionCases, [opted])
  }
})

// The generated model may own undefined optional fields; HTTP JSON must omit them.
function wire(value) { return JSON.parse(JSON.stringify(value)) }

test('SDK preserves a failed X12 check even when exact-output hashes match', () => {
  const sha = 'a'.repeat(64)
  const value = { mappingResourceKey: '11111111-1111-4111-8111-111111111111', id: 'invoice', name: 'Invoice', status: 'FAILED',
    caseSha256: sha, expectedOutputSha256: sha, actualOutputSha256: sha, x12ValidationStatus: 'FAILED' }
  assert.deepEqual(ConfigurationVerificationCaseResultToJSON(ConfigurationVerificationCaseResultFromJSON(value)), value)
})
