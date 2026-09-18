/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import { mapValues } from '../runtime.js';
/**
 * Parsed TA1 interchange-level result. Only `received` is a clean outcome; every other received status requires operator review.
 * @export
 * @interface TechnicalAcknowledgmentOutcome
 */
export interface TechnicalAcknowledgmentOutcome {
    /**
     * Normalized TA104 result. `A` becomes `received`, `E` becomes `received_with_errors`, and `R` becomes `rejected`.
     * @type {TechnicalAcknowledgmentOutcomeStatusEnum}
     * @memberof TechnicalAcknowledgmentOutcome
     */
    status: TechnicalAcknowledgmentOutcomeStatusEnum;
    /**
     * Raw TA104 interchange acknowledgment code (`A`, `E`, or `R`) when available.
     * @type {string}
     * @memberof TechnicalAcknowledgmentOutcome
     */
    acknowledgmentCode: string | null;
    /**
     * Raw TA105 interchange note/error code. Interpret it with the partner's X12 implementation guidance; `000` normally accompanies a clean acceptance.
     * @type {string}
     * @memberof TechnicalAcknowledgmentOutcome
     */
    errorCode: string | null;
    /**
     * TA101 control number identifying the original ISA13 interchange acknowledged by this TA1.
     * @type {string}
     * @memberof TechnicalAcknowledgmentOutcome
     */
    acknowledgedInterchangeControlNumber: string | null;
    /**
     * Customer-readable interpretation of the TA104 outcome.
     * @type {string}
     * @memberof TechnicalAcknowledgmentOutcome
     */
    summary: string;
    /**
     * True when ModernEDI found a structurally usable TA1 segment and recognized TA104.
     * @type {boolean}
     * @memberof TechnicalAcknowledgmentOutcome
     */
    parsed: boolean;
    /**
     * Stable reason `status` is `unknown`, or `null` for a recognized outcome.
     * @type {TechnicalAcknowledgmentOutcomeUnknownReasonEnum}
     * @memberof TechnicalAcknowledgmentOutcome
     */
    unknownReason: TechnicalAcknowledgmentOutcomeUnknownReasonEnum | null;
}


/**
 * @export
 */
export const TechnicalAcknowledgmentOutcomeStatusEnum = {
    Received: 'received',
    ReceivedWithErrors: 'received_with_errors',
    Rejected: 'rejected',
    Unknown: 'unknown',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TechnicalAcknowledgmentOutcomeStatusEnum = typeof TechnicalAcknowledgmentOutcomeStatusEnum[keyof typeof TechnicalAcknowledgmentOutcomeStatusEnum];

/**
 * @export
 */
export const TechnicalAcknowledgmentOutcomeUnknownReasonEnum = {
    MissingX12: 'missing_x12',
    InvalidStructure: 'invalid_structure',
    MissingTa1: 'missing_ta1',
    UnsupportedAcknowledgmentCode: 'unsupported_acknowledgment_code',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TechnicalAcknowledgmentOutcomeUnknownReasonEnum = typeof TechnicalAcknowledgmentOutcomeUnknownReasonEnum[keyof typeof TechnicalAcknowledgmentOutcomeUnknownReasonEnum];


/**
 * Check if a given object implements the TechnicalAcknowledgmentOutcome interface.
 */
export function instanceOfTechnicalAcknowledgmentOutcome(value: object): value is TechnicalAcknowledgmentOutcome {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('acknowledgmentCode' in value) || value['acknowledgmentCode'] === undefined) return false;
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    if (!('acknowledgedInterchangeControlNumber' in value) || value['acknowledgedInterchangeControlNumber'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('parsed' in value) || value['parsed'] === undefined) return false;
    if (!('unknownReason' in value) || value['unknownReason'] === undefined) return false;
    return true;
}

export function TechnicalAcknowledgmentOutcomeFromJSON(json: any): TechnicalAcknowledgmentOutcome {
    return TechnicalAcknowledgmentOutcomeFromJSONTyped(json, false);
}

export function TechnicalAcknowledgmentOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechnicalAcknowledgmentOutcome {
    if (json == null) {
        return json;
    }
    return {

        'status': json['status'],
        'acknowledgmentCode': json['acknowledgmentCode'],
        'errorCode': json['errorCode'],
        'acknowledgedInterchangeControlNumber': json['acknowledgedInterchangeControlNumber'],
        'summary': json['summary'],
        'parsed': json['parsed'],
        'unknownReason': json['unknownReason'],
    };
}

export function TechnicalAcknowledgmentOutcomeToJSON(json: any): TechnicalAcknowledgmentOutcome {
    return TechnicalAcknowledgmentOutcomeToJSONTyped(json, false);
}

export function TechnicalAcknowledgmentOutcomeToJSONTyped(value?: TechnicalAcknowledgmentOutcome | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': value['status'],
        'acknowledgmentCode': value['acknowledgmentCode'],
        'errorCode': value['errorCode'],
        'acknowledgedInterchangeControlNumber': value['acknowledgedInterchangeControlNumber'],
        'summary': value['summary'],
        'parsed': value['parsed'],
        'unknownReason': value['unknownReason'],
    };
}
