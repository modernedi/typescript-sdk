import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import test from "node:test";

import {
  DEFAULT_WEBHOOK_TOLERANCE_SECONDS,
  MappedOutputWebhookVerificationError,
  verifyMappedOutputWebhook,
} from "../dist/index.js";

const SECRET = "medo_whsec_sdk_test_secret";
const NOW_SECONDS = 1_785_600_000;
const AVAILABLE_EVENT = {
  event: "mapped_output.available",
  deliveryId: "delivery-available-1",
  createdAt: "2026-08-01T00:00:00.000000000Z",
  tenantId: 42,
  partnerId: 17,
  message: {
    id: "mapped-output-1",
    receiptHandle: "receipt-1",
    deliveryCount: 1,
    environment: "production",
    messageId: "message-1",
    transactionKey: "17#0001",
    mappedOutputKey: "17#0001#00001",
    sequenceNumber: 0,
    purpose: "PROCESSING",
    contentType: "application/json",
    payload: "{\"purchaseOrderNumber\":\"PO-1\"}",
  },
};
const TEST_EVENT = {
  event: "mapped_output.test",
  deliveryId: "test-delivery-1",
  createdAt: "2026-08-01T00:00:00.000000000Z",
  tenantId: 42,
  partnerId: 17,
  test: true,
  requestId: "request-1",
  description: "Synthetic ModernEDI webhook connectivity test.",
};

function signature(timestamp, rawBody, secret = SECRET) {
  return `sha256=${createHmac("sha256", secret)
    .update(String(timestamp), "ascii")
    .update(".", "ascii")
    .update(rawBody)
    .digest("hex")}`;
}

function headersFor(event, rawBody, timestamp = NOW_SECONDS) {
  return {
    "x-modernedi-event": event.event,
    "x-modernedi-delivery-id": event.deliveryId,
    "x-modernedi-timestamp": String(timestamp),
    "x-modernedi-signature": signature(timestamp, rawBody),
  };
}

function verify(event, rawBody, overrides = {}) {
  return verifyMappedOutputWebhook({
    rawBody,
    headers: headersFor(event, rawBody),
    signingSecret: SECRET,
    now: NOW_SECONDS * 1000,
    ...overrides,
  });
}

function assertVerificationError(action, code) {
  assert.throws(action, (error) => {
    assert.ok(error instanceof MappedOutputWebhookVerificationError);
    assert.equal(error.code, code);
    return true;
  });
}

test("verifies an available event from exact string bytes", () => {
  const rawBody = JSON.stringify(AVAILABLE_EVENT);
  const event = verify(AVAILABLE_EVENT, rawBody);

  assert.equal(event.event, "mapped_output.available");
  assert.equal(event.deliveryId, AVAILABLE_EVENT.deliveryId);
  assert.equal(event.message.id, AVAILABLE_EVENT.message.id);
  assert.equal(DEFAULT_WEBHOOK_TOLERANCE_SECONDS, 300);
});

test("verifies a synthetic test event from Uint8Array bytes", () => {
  const rawBody = new TextEncoder().encode(JSON.stringify(TEST_EVENT));
  const event = verify(TEST_EVENT, rawBody);

  assert.equal(event.event, "mapped_output.test");
  assert.equal(event.test, true);
  assert.equal(event.requestId, TEST_EVENT.requestId);
  assert.equal("message" in event, false);
});

test("accepts singleton array headers and rejects duplicate or folded headers", () => {
  const rawBody = JSON.stringify(AVAILABLE_EVENT);
  const singletonHeaders = Object.fromEntries(
    Object.entries(headersFor(AVAILABLE_EVENT, rawBody)).map(([name, value]) => [name, [value]]),
  );
  assert.equal(verify(AVAILABLE_EVENT, rawBody, { headers: singletonHeaders }).deliveryId,
    AVAILABLE_EVENT.deliveryId);

  assertVerificationError(
    () => verify(AVAILABLE_EVENT, rawBody, {
      headers: {
        ...headersFor(AVAILABLE_EVENT, rawBody),
        "x-modernedi-timestamp": [String(NOW_SECONDS), String(NOW_SECONDS)],
      },
    }),
    "duplicate_header",
  );
  assertVerificationError(
    () => verify(AVAILABLE_EVENT, rawBody, {
      headers: new Headers({
        ...headersFor(AVAILABLE_EVENT, rawBody),
        "x-modernedi-event": "mapped_output.available, mapped_output.available",
      }),
    }),
    "duplicate_header",
  );
  assertVerificationError(
    () => verify(AVAILABLE_EVENT, rawBody, {
      headers: {
        ...headersFor(AVAILABLE_EVENT, rawBody),
        "X-ModernEDI-Event": AVAILABLE_EVENT.event,
      },
    }),
    "duplicate_header",
  );
});

test("rejects stale and future timestamps outside the tolerance", () => {
  const rawBody = JSON.stringify(AVAILABLE_EVENT);
  for (const timestamp of [NOW_SECONDS - 301, NOW_SECONDS + 301]) {
    assertVerificationError(
      () => verify(AVAILABLE_EVENT, rawBody, {
        headers: headersFor(AVAILABLE_EVENT, rawBody, timestamp),
      }),
      "timestamp_outside_tolerance",
    );
  }
});

test("requires strict lowercase sha256 signature syntax", () => {
  const rawBody = JSON.stringify(AVAILABLE_EVENT);
  const validHeaders = headersFor(AVAILABLE_EVENT, rawBody);
  for (const invalidSignature of [
    validHeaders["x-modernedi-signature"].toUpperCase(),
    validHeaders["x-modernedi-signature"].slice("sha256=".length),
    "sha256=abcd",
  ]) {
    assertVerificationError(
      () => verify(AVAILABLE_EVENT, rawBody, {
        headers: { ...validHeaders, "x-modernedi-signature": invalidSignature },
      }),
      "invalid_signature_format",
    );
  }
});

test("rejects a signature mismatch without disclosing sensitive inputs", () => {
  const rawBody = `${JSON.stringify(AVAILABLE_EVENT)} sensitive-body-marker`;
  let thrown;
  try {
    verify(AVAILABLE_EVENT, rawBody, {
      headers: headersFor(AVAILABLE_EVENT, JSON.stringify(AVAILABLE_EVENT)),
    });
  } catch (error) {
    thrown = error;
  }
  assert.ok(thrown instanceof MappedOutputWebhookVerificationError);
  assert.equal(thrown.code, "signature_mismatch");
  assert.doesNotMatch(thrown.message, /sensitive-body-marker|medo_whsec|sha256=/u);
});

test("rejects event and delivery header/body mismatches", () => {
  const rawBody = JSON.stringify(AVAILABLE_EVENT);
  const validHeaders = headersFor(AVAILABLE_EVENT, rawBody);
  for (const headers of [
    { ...validHeaders, "x-modernedi-event": "mapped_output.test" },
    { ...validHeaders, "x-modernedi-delivery-id": "different-delivery" },
  ]) {
    assertVerificationError(
      () => verify(AVAILABLE_EVENT, rawBody, { headers }),
      "invalid_event",
    );
  }
});

test("rejects invalid signing secret and tolerance inputs", () => {
  const rawBody = JSON.stringify(AVAILABLE_EVENT);
  assert.throws(
    () => verify(AVAILABLE_EVENT, rawBody, { signingSecret: "" }),
    /signingSecret must be a non-empty string/u,
  );
  for (const toleranceSeconds of [-1, 1.5, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(
      () => verify(AVAILABLE_EVENT, rawBody, { toleranceSeconds }),
      /toleranceSeconds must be a non-negative safe integer/u,
    );
  }
});

test("reports safe errors for signed invalid JSON and malformed event bodies", () => {
  const invalidJson = "{not-json";
  assertVerificationError(
    () => verifyMappedOutputWebhook({
      rawBody: invalidJson,
      headers: headersFor(AVAILABLE_EVENT, invalidJson),
      signingSecret: SECRET,
      now: NOW_SECONDS * 1000,
    }),
    "invalid_json",
  );

  const invalidMessageEvent = {
    ...AVAILABLE_EVENT,
    message: { ...AVAILABLE_EVENT.message, deliveryCount: -1 },
  };
  const invalidMessageBody = JSON.stringify(invalidMessageEvent);
  assertVerificationError(
    () => verify(invalidMessageEvent, invalidMessageBody),
    "invalid_event",
  );

  const testWithMessage = { ...TEST_EVENT, message: AVAILABLE_EVENT.message };
  const testWithMessageBody = JSON.stringify(testWithMessage);
  assertVerificationError(
    () => verify(testWithMessage, testWithMessageBody),
    "invalid_event",
  );
});
