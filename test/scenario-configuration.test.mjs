import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import { ConfigurationResourceDocumentFromJSON, ConfigurationResourceDocumentToJSON } from '../dist/index.js';

const root = new URL('./fixtures/scenarios/examples/', import.meta.url);
function document(kind, source) {
  return { apiVersion: 'modernedi.com/v1', kind,
    metadata: { key: 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb' }, spec: { source } };
}
function roundTrip(value) {
  return JSON.parse(JSON.stringify(ConfigurationResourceDocumentToJSON(ConfigurationResourceDocumentFromJSON(value))));
}

test('every published business-cycle example survives the generated configuration SDK unchanged', () => {
  const cycles = new URL('business-cycles/', root);
  for (const name of readdirSync(cycles)) {
    const value = document('ScenarioDefinition', JSON.parse(readFileSync(new URL(name, cycles), 'utf8')));
    assert.deepEqual(roundTrip(value), value, name);
  }
});

test('portable binding environments, references, optional pins and mapper expressions survive SDK serialization', () => {
  const source = JSON.parse(readFileSync(new URL('order-invoice.binding.json', root), 'utf8'));
  for (const actor of source.spec.actors) {
    if (actor.endpoint.partnerId != null) {
      delete actor.endpoint.partnerId;
      actor.endpoint.partnerKey = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
    }
  }
  for (const step of source.spec.steps) {
    delete step.syntaxTree;
    if (step.target.runtimeMappingId != null) {
      delete step.target.runtimeMappingId;
      step.target.mappingKey = 'cccccccc-cccc-4ccc-8ccc-cccccccccccc';
    }
  }
  for (const environment of ['production', 'test']) {
    source.spec.environment = environment;
    const value = document('ScenarioBinding', source);
    assert.deepEqual(roundTrip(value), value, environment);
  }
});
