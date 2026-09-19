import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { ModernEdiClient, ModernEdiApiError, FetchError, createRetryingFetch } from '../dist/index.js';

const corpus = JSON.parse(readFileSync(new URL('./fixtures/retry-behavior.json', import.meta.url), 'utf8'));
const groups = { getIntegrationUsage: 'account', planIntegrationConfiguration: 'configurationAsCode',
  testMappedOutputWebhook: 'mappedOutputs', sendGeneratedX12Message: 'outboundAs2',
  watchIntegrationTransaction: 'transactions', unwatchIntegrationTransaction: 'transactions' };

for (const row of corpus.cases) test(`shared retry behavior: ${row.id}`, async () => {
  const request = corpus.requests[row.operationId];
  const calls = [];
  const client = new ModernEdiClient({ apiKey: corpus.apiKey, baseUrl: corpus.baseUrl, headers: row.headers,
    ...(row.retry === false ? {} : { retry: { maxAttempts: 3, baseDelayMs: 0, maxDelayMs: 10_000 } }),
    fetch: async (url, init) => {
      calls.push({ url: String(url), method: init.method, headers: new Headers(init.headers), body: init.body });
      const response = row.responses[Math.min(calls.length - 1, row.responses.length - 1)];
      if (response.networkError) throw new TypeError('Synthetic network failure');
      return new Response(null, { status: response.status, headers: response.headers });
    } });
  const parameters = { ...request.parameters, ...(row.idempotencyKey === undefined ? {} : { idempotencyKey: row.idempotencyKey }) };
  if (row.operationId === 'planIntegrationConfiguration') parameters.configurationPlanRequest = request.body;
  if (request.contentType) Object.assign(parameters, { body: request.body, contentType: request.contentType });
  let result, failure;
  try { result = await client[groups[row.operationId]][`${row.operationId}Raw`](parameters); }
  catch (error) { failure = error; }

  assert.equal(calls.length, row.attempts);
  for (const call of calls) {
    assert.equal(call.method, request.method);
    assert.equal(new URL(call.url).pathname, new URL(corpus.baseUrl).pathname + request.path);
    assert.equal(call.headers.get('x-api-key'), corpus.apiKey);
    assert.equal(call.headers.has('Authorization'), false);
    assert.equal(call.headers.get('Idempotency-Key')?.trim() ?? null,
      (row.idempotencyKey ?? Object.values(row.headers ?? {})[0])?.trim() ?? null);
    assert.equal(call.url, calls[0].url);
    assert.equal(call.body, calls[0].body, 'Retries must resend the exact body');
    if (request.contentType) assert.equal(call.body, request.body);
    else if (request.body) assert.deepEqual(JSON.parse(call.body), request.body);
  }
  if (row.networkError) assert.ok(failure instanceof FetchError);
  else if (row.status >= 400) {
    assert.ok(failure instanceof ModernEdiApiError);
    assert.equal(failure.status, row.status);
    assert.equal(failure.retryAfter, row.retryAfter);
  } else { assert.equal(failure, undefined); assert.equal(result.raw.status, row.status); }
});

test('retry allow-list does not match suffix lookalikes or the wrong method', async () => {
  for (const [path, method] of [['/other/v1/scenario-runs', 'POST'], ['/v1/scenario-runs/extra', 'POST'],
    ['/v1/scenario-runs', 'PATCH'], ['/other/v1/configuration/plan', 'POST']]) {
    let calls = 0;
    const fetch = createRetryingFetch(async () => { calls++; return new Response(null, { status: 503 }); },
      { maxAttempts: 3, baseDelayMs: 0 });
    await fetch(`https://sdk.example.test${path}`, { method, headers: { 'Idempotency-Key': 'synthetic' } });
    assert.equal(calls, 1, `${method} ${path}`);
  }
});
