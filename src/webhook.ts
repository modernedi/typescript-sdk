import { createHmac, timingSafeEqual } from "node:crypto";

import type { MappedOutputMessage } from "./generated/models/MappedOutputMessage.js";
import { MappedOutputMessageFromJSON } from "./generated/models/MappedOutputMessage.js";

export const DEFAULT_WEBHOOK_TOLERANCE_SECONDS = 300;

export type MappedOutputAvailableWebhookEvent = {
  event: "mapped_output.available";
  deliveryId: string;
  createdAt: string;
  tenantId: number;
  partnerId: number;
  message: MappedOutputMessage;
};

export type MappedOutputTestWebhookEvent = {
  event: "mapped_output.test";
  deliveryId: string;
  createdAt: string;
  tenantId: number;
  partnerId: number;
  test: true;
  requestId: string;
  description: string;
};

export type MappedOutputWebhookEvent =
  | MappedOutputAvailableWebhookEvent
  | MappedOutputTestWebhookEvent;

export type MappedOutputWebhookHeaders =
  | Headers
  | Readonly<Record<string, string | readonly string[] | undefined>>;

export interface VerifyMappedOutputWebhookOptions {
  rawBody: string | Uint8Array;
  headers: MappedOutputWebhookHeaders;
  signingSecret: string;
  toleranceSeconds?: number;
  now?: Date | number;
}

export type MappedOutputWebhookVerificationErrorCode =
  | "missing_header"
  | "duplicate_header"
  | "invalid_timestamp"
  | "timestamp_outside_tolerance"
  | "invalid_signature_format"
  | "signature_mismatch"
  | "invalid_json"
  | "invalid_event";

export class MappedOutputWebhookVerificationError extends Error {
  override readonly name = "MappedOutputWebhookVerificationError";

  constructor(
    readonly code: MappedOutputWebhookVerificationErrorCode,
    message: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export function verifyMappedOutputWebhook(
  options: VerifyMappedOutputWebhookOptions,
): MappedOutputWebhookEvent {
  const timestamp = requiredHeader(options.headers, "X-ModernEDI-Timestamp");
  const signature = requiredHeader(options.headers, "X-ModernEDI-Signature");
  const headerEvent = requiredHeader(options.headers, "X-ModernEDI-Event");
  const headerDeliveryId = requiredHeader(options.headers, "X-ModernEDI-Delivery-Id");
  const timestampSeconds = parseTimestamp(timestamp);
  const toleranceSeconds = parseTolerance(options.toleranceSeconds);
  const nowSeconds = resolveNowSeconds(options.now);
  if (Math.abs(nowSeconds - timestampSeconds) > toleranceSeconds) {
    throw verificationError(
      "timestamp_outside_tolerance",
      "Webhook timestamp is outside the accepted freshness window.",
    );
  }

  const signatureMatch = /^sha256=(?<digest>[0-9a-f]{64})$/u.exec(signature);
  if (signatureMatch?.groups?.digest === undefined) {
    throw verificationError(
      "invalid_signature_format",
      "Webhook signature must use sha256 followed by 64 lowercase hexadecimal characters.",
    );
  }
  const suppliedDigest = Buffer.from(signatureMatch.groups.digest, "hex");
  const rawBody = typeof options.rawBody === "string"
    ? Buffer.from(options.rawBody, "utf8")
    : Buffer.from(options.rawBody);
  const expectedDigest = createHmac("sha256", requireSigningSecret(options.signingSecret))
    .update(timestamp, "ascii")
    .update(".", "ascii")
    .update(rawBody)
    .digest();
  if (suppliedDigest.length !== expectedDigest.length
      || !timingSafeEqual(suppliedDigest, expectedDigest)) {
    throw verificationError("signature_mismatch", "Webhook signature verification failed.");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody.toString("utf8")) as unknown;
  } catch {
    throw verificationError("invalid_json", "Verified webhook body is not valid JSON.");
  }
  const event = parseEvent(parsed);
  if (event.event !== headerEvent || event.deliveryId !== headerDeliveryId) {
    throw verificationError(
      "invalid_event",
      "Verified webhook headers do not match the signed event body.",
    );
  }
  return event;
}

function parseEvent(value: unknown): MappedOutputWebhookEvent {
  if (!isRecord(value)) {
    throw verificationError("invalid_event", "Verified webhook body must be a JSON object.");
  }
  const common = {
    deliveryId: requiredString(value, "deliveryId"),
    createdAt: requiredString(value, "createdAt"),
    tenantId: requiredPositiveInteger(value, "tenantId"),
    partnerId: requiredPositiveInteger(value, "partnerId"),
  };
  if (value.event === "mapped_output.available") {
    if (!isRecord(value.message)) {
      throw verificationError(
        "invalid_event",
        "Mapped-output webhook event is missing its message object.",
      );
    }
    validateMappedOutputMessage(value.message);
    return {
      event: "mapped_output.available",
      ...common,
      message: MappedOutputMessageFromJSON(value.message),
    };
  }
  if (value.event === "mapped_output.test") {
    if (value.test !== true || "message" in value) {
      throw verificationError(
        "invalid_event",
        "Synthetic webhook event must be marked test and must not contain a mapped-output message.",
      );
    }
    return {
      event: "mapped_output.test",
      ...common,
      test: true,
      requestId: requiredString(value, "requestId"),
      description: requiredString(value, "description"),
    };
  }
  throw verificationError("invalid_event", "Webhook event type is not supported by this SDK version.");
}

function requiredHeader(headers: MappedOutputWebhookHeaders, name: string): string {
  let value: string | readonly string[] | undefined | null;
  if ("get" in headers && typeof headers.get === "function") {
    value = headers.get(name);
  } else {
    const entries = Object.entries(headers)
      .filter(([key]) => key.toLowerCase() === name.toLowerCase());
    if (entries.length > 1) {
      throw verificationError(
        "duplicate_header",
        `Webhook header ${name} must occur exactly once.`,
      );
    }
    value = entries[0]?.[1];
  }
  if (Array.isArray(value)) {
    if (value.length !== 1) {
      throw verificationError(
        "duplicate_header",
        `Webhook header ${name} must occur exactly once.`,
      );
    }
    value = value[0];
  }
  if (typeof value !== "string" || value.length === 0) {
    throw verificationError("missing_header", `Required webhook header ${name} is missing.`);
  }
  if (value.includes(",")) {
    throw verificationError(
      "duplicate_header",
      `Webhook header ${name} must occur exactly once.`,
    );
  }
  return value;
}

function parseTimestamp(value: string): number {
  if (!/^(?:0|[1-9][0-9]*)$/u.test(value)) {
    throw verificationError(
      "invalid_timestamp",
      "Webhook timestamp must be whole Unix epoch seconds.",
    );
  }
  const parsed = Number(value);
  if (!Number.isSafeInteger(parsed)) {
    throw verificationError(
      "invalid_timestamp",
      "Webhook timestamp must be whole Unix epoch seconds.",
    );
  }
  return parsed;
}

function parseTolerance(value: number | undefined): number {
  const resolved = value ?? DEFAULT_WEBHOOK_TOLERANCE_SECONDS;
  if (!Number.isSafeInteger(resolved) || resolved < 0) {
    throw new TypeError("toleranceSeconds must be a non-negative safe integer.");
  }
  return resolved;
}

function resolveNowSeconds(value: Date | number | undefined): number {
  const milliseconds = value instanceof Date ? value.getTime() : value ?? Date.now();
  if (!Number.isFinite(milliseconds)) {
    throw new TypeError("now must be a valid Date or Unix epoch milliseconds.");
  }
  return Math.floor(milliseconds / 1000);
}

function requireSigningSecret(value: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new TypeError("signingSecret must be a non-empty string.");
  }
  return value;
}

function requiredString(value: Record<string, unknown>, name: string): string {
  const field = value[name];
  if (typeof field !== "string" || field.length === 0) {
    throw verificationError("invalid_event", `Verified webhook field ${name} must be a string.`);
  }
  return field;
}

function requiredPositiveInteger(value: Record<string, unknown>, name: string): number {
  const field = value[name];
  if (typeof field !== "number" || !Number.isSafeInteger(field) || field < 1) {
    throw verificationError(
      "invalid_event",
      `Verified webhook field ${name} must be a positive integer.`,
    );
  }
  return field;
}

function validateMappedOutputMessage(value: Record<string, unknown>): void {
  for (const name of [
    "id",
    "receiptHandle",
    "messageId",
    "transactionKey",
    "environment",
    "mappedOutputKey",
    "purpose",
  ]) {
    requiredString(value, name);
  }
  for (const name of ["deliveryCount", "sequenceNumber"]) {
    const field = value[name];
    if (typeof field !== "number" || !Number.isSafeInteger(field) || field < 0) {
      throw verificationError(
        "invalid_event",
        `Verified webhook message field ${name} must be a non-negative integer.`,
      );
    }
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function verificationError(
  code: MappedOutputWebhookVerificationErrorCode,
  message: string,
): MappedOutputWebhookVerificationError {
  return new MappedOutputWebhookVerificationError(code, message);
}
