import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { ModernEdiClient, iterateMappedOutputs, paginateCursor, Configuration, ConfigurationAsCodeApi } from '../dist/index.js';

const corpus = JSON.parse(readFileSync(new URL('./fixtures/queue-iteration.json', import.meta.url), 'utf8'));
for (const row of corpus.cases) test(`shared queue iteration: ${row.id}`, async () => {
  let polls = 0, expectedCursor = row.cursor;
  const client = new ModernEdiClient({ apiKey: 'synthetic', fetch: async (url) => {
    assert.equal(new URL(url).searchParams.get('cursor') ?? undefined, expectedCursor);
    const page = row.pages[Math.min(polls++, row.pages.length - 1)];
    expectedCursor = page.nextCursor ?? undefined;
    return Response.json({ success: true, environment: 'test', limit: 1, visibilityTimeoutSeconds: 120,
      messages: page.items.map(id => ({ ...corpus.message, id })), nextCursor: page.nextCursor, hasMore: page.nextCursor !== null });
  } });
  const items = [];
  for await (const item of iterateMappedOutputs(cursor => client.mappedOutputs.pollMappedOutputs({ cursor, environment: 'test' }), row)) items.push(item.id);
  assert.deepEqual(items, row.expected);
  assert.equal(polls, row.polls);
});

test('queue iteration rejects invalid bounds before making requests and propagates poll failure', async () => {
  for (const maxPolls of [0, -1, 1.5, Infinity, NaN]) {
    await assert.rejects(async () => { for await (const _ of iterateMappedOutputs(() => assert.fail('unexpected poll'), { maxPolls })) {} }, TypeError);
  }
  const failure = new Error('lost poll response');
  await assert.rejects(async () => { for await (const _ of iterateMappedOutputs(async () => { throw failure; })) {} }, error => error === failure);
});

test('read-only pagination still rejects cycles', async () => {
  await assert.rejects(async () => {
    for await (const _ of paginateCursor(async () => ({ items: [], nextCursor: 'same' }), page => page)) {}
  }, /repeated cursor/);
});

test('normal and raw conditional exports accept bodyless 304 in both public and generated clients', async () => {
  const fetch = async () => new Response(null, { status: 304, headers: { ETag: '"snapshot"' } });
  for (const api of [new ModernEdiClient({ apiKey: 'synthetic', fetch }).configurationAsCode,
    new ConfigurationAsCodeApi(new Configuration({ fetchApi: fetch }))]) {
    const response = await api.exportIntegrationConfigurationRaw({ ifNoneMatch: '"snapshot"' });
    assert.equal(response.raw.status, 304);
    assert.equal(await response.value(), undefined);
    assert.equal(await api.exportIntegrationConfiguration({ ifNoneMatch: '"snapshot"' }), undefined);
  }
});

test('unexpected redirects and undeclared 304 responses remain errors', async () => {
  for (const status of [301, 302, 304, 307]) {
    const client = new ModernEdiClient({ apiKey: 'synthetic', fetch: async () => new Response(null, { status }) });
    await assert.rejects(client.account.getIntegrationUsageRaw({}));
  }
});
