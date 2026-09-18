/**
 * Generated request-body media-type unions that OpenAPI Generator 7.24.0 does not emit for
 * operations accepting multiple content types.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */
import type { GeneratedX12Request } from "./models/GeneratedX12Request.js";
import type { OutboundTransformEnvelope } from "./models/OutboundTransformEnvelope.js";
import type { X12ValidationRequest } from "./models/X12ValidationRequest.js";

export type ModernEdiJsonObject = { [key: string]: ModernEdiJsonValue };
export type ModernEdiJsonValue =
  | null
  | boolean
  | number
  | string
  | ModernEdiJsonValue[]
  | ModernEdiJsonObject;

export type OutboundMappedSourceBody =
  | {
      contentType: "application/vnd.modernedi.outbound+json";
      body: OutboundTransformEnvelope;
    }
  | {
      contentType: "application/json";
      body: ModernEdiJsonValue;
    }
  | {
      contentType: "application/xml" | "text/plain";
      body: string;
    };

export type GeneratedX12SourceBody =
  | {
      contentType: "application/edi-x12" | "text/plain";
      body: string;
    }
  | {
      contentType: "application/json";
      body: GeneratedX12Request;
    };

export type X12ValidationSourceBody =
  | {
      contentType: "application/edi-x12" | "text/plain";
      body: string;
    }
  | {
      contentType: "application/json";
      body: X12ValidationRequest;
    };
