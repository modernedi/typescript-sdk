import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { once } from 'node:events';
import test from 'node:test';
import { ModernEdiClient, ModernEdiApiError, FetchError, createRetryingFetch } from '../dist/index.js';

const corpus = JSON.parse(readFileSync(new URL('./fixtures/retry-behavior.json', import.meta.url), 'utf8'));
const groups = { getIntegrationUsage: 'account', planIntegrationConfiguration: 'configurationAsCode',
  exportIntegrationConfiguration: 'configurationAsCode', pollMappedOutputs: 'mappedOutputs',
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
  } else {
    assert.equal(failure, undefined);
    assert.equal(result.raw.status, row.status);
    if (row.emptyBody) assert.equal(await result.value(), undefined);
    if (row.etag) assert.equal(result.raw.headers.get('ETag'), row.etag);
  }
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

test('Request POST retries send identical bodies through real fetch', async (t) => {
  const calls = [];
  const server = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    calls.push({ body: Buffer.concat(chunks).toString(), method: request.method,
      contentType: request.headers['content-type'], idempotencyKey: request.headers['idempotency-key'] });
    response.writeHead(calls.length === 1 ? 503 : 200).end('done');
  });
  t.after(() => { server.closeAllConnections(); server.close(); });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const retryingFetch = createRetryingFetch(fetch, { maxAttempts: 3, baseDelayMs: 0 }, baseUrl);
  const body = JSON.stringify({ synthetic: 'mapping \u2192 configuration' });
  const response = await retryingFetch(new Request(`${baseUrl}/v1/configuration/plan`, {
    method: 'POST', body, headers: { 'Content-Type': 'application/json', 'Idempotency-Key': 'synthetic' },
  }));
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'done');
  assert.deepEqual(calls, Array.from({ length: 2 }, () => ({ body, method: 'POST',
    contentType: 'application/json', idempotencyKey: 'synthetic' })));
});

test('Request retries preserve the merged body, method, headers, and signal overrides', async () => {
  const controller = new AbortController();
  controller.abort();
  const request = new Request('https://sdk.example.test/v1/configuration/plan', {
    signal: controller.signal, headers: { 'X-Old': 'removed' },
  });
  const calls = [];
  const retryingFetch = createRetryingFetch(async (input, init) => {
    assert.equal(init, undefined);
    calls.push({ body: await input.text(), method: input.method,
      headers: [...input.headers], aborted: input.signal.aborted });
    return new Response(null, { status: calls.length === 1 ? 503 : 200 });
  }, { maxAttempts: 3, baseDelayMs: 0 });
  const response = await retryingFetch(request, { method: 'POST', body: 'replacement', signal: null,
    headers: { 'Content-Type': 'text/plain', 'X-New': 'replacement' } });
  assert.equal(response.status, 200);
  assert.deepEqual(calls, Array.from({ length: 2 }, () => ({ body: 'replacement', method: 'POST',
    headers: [['content-type', 'text/plain'], ['x-new', 'replacement']], aborted: false })));
});

test('an already consumed Request fails before making retry attempts', async () => {
  const request = new Request('https://sdk.example.test/v1/configuration/plan', { method: 'POST', body: '{}' });
  await request.text();
  let calls = 0;
  const retryingFetch = createRetryingFetch(async () => { calls++; return new Response(); }, { baseDelayMs: 0 });
  await assert.rejects(retryingFetch(request), TypeError);
  assert.equal(calls, 0);
});

test('an already aborted Request is not retried', async () => {
  const controller = new AbortController();
  const reason = new Error('Synthetic cancellation');
  controller.abort(reason);
  let calls = 0;
  const retryingFetch = createRetryingFetch(async () => { calls++; throw reason; }, { baseDelayMs: 0 });
  await assert.rejects(retryingFetch(new Request('https://sdk.example.test/v1/integration/usage', {
    signal: controller.signal,
  })), error => error === reason);
  assert.equal(calls, 0);
});

for (const failure of ['status', 'network']) {
  test(`Request cancellation interrupts ${failure} retry backoff`, { timeout: 2000 }, async () => {
    const controller = new AbortController();
    const reason = new Error('Synthetic cancellation during backoff');
    let calls = 0;
    const retryingFetch = createRetryingFetch(async () => {
      calls++;
      setImmediate(() => controller.abort(reason));
      if (failure === 'network') throw new TypeError('Synthetic connection failure');
      return new Response(null, { status: 503 });
    }, { maxAttempts: 3, baseDelayMs: 10_000 });
    await assert.rejects(retryingFetch(new Request('https://sdk.example.test/v1/integration/usage', {
      signal: controller.signal,
    })), error => error === reason);
    assert.equal(calls, 1);
  });
}

test('RequestInit cancellation overrides the Request signal', async () => {
  const controller = new AbortController();
  const reason = new Error('Synthetic RequestInit cancellation');
  controller.abort(reason);
  let calls = 0;
  const retryingFetch = createRetryingFetch(async () => { calls++; return new Response(); }, { baseDelayMs: 0 });
  await assert.rejects(retryingFetch(new Request('https://sdk.example.test/v1/integration/usage'), {
    signal: controller.signal,
  }), error => error === reason);
  assert.equal(calls, 0);
});

for (const path of ['/v1/mapped-outputs', '/v1/as2/send']) {
  test(`Request input does not bypass retry restrictions for ${path}`, async () => {
    let calls = 0;
    const request = new Request(`https://sdk.example.test${path}`, path.endsWith('send')
      ? { method: 'POST', body: 'synthetic EDI' } : {});
    const retryingFetch = createRetryingFetch(async input => {
      assert.equal(input, request);
      calls++;
      return new Response(null, { status: 503 });
    }, { baseDelayMs: 0 });
    assert.equal((await retryingFetch(request)).status, 503);
    assert.equal(calls, 1);
  });
}
