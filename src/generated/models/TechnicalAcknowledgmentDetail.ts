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
import type { TechnicalAcknowledgmentOutcome } from './TechnicalAcknowledgmentOutcome.js';
import {
    TechnicalAcknowledgmentOutcomeFromJSON,
    TechnicalAcknowledgmentOutcomeFromJSONTyped,
    TechnicalAcknowledgmentOutcomeToJSON,
    TechnicalAcknowledgmentOutcomeToJSONTyped,
} from './TechnicalAcknowledgmentOutcome.js';

/**
 * Metadata for a stored X12 technical acknowledgment or downstream HTTP response. Fetch the indexed document for the body.
 * @export
 * @interface TechnicalAcknowledgmentDetail
 */
export interface TechnicalAcknowledgmentDetail {
    /**
     * True when ModernEDI sent the technical acknowledgment; false when it received one; `null` when unknown.
     * @type {boolean}
     * @memberof TechnicalAcknowledgmentDetail
     */
    sent: boolean | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TechnicalAcknowledgmentDetail
     */
    timestamp: string | null;
    /**
     * Downstream HTTP response status code, or `null` when no raw transport response was retained.
     * @type {number}
     * @memberof TechnicalAcknowledgmentDetail
     */
    responseStatusCode: number | null;
    /**
     * Lowercase SHA-256 of the exact partner runtime configuration recorded for this transaction, receipt, or acknowledgment. It is `null` for legacy rows written before configuration stamping. Scenario verification accepts persisted evidence only when this value exactly matches the partner configuration frozen into the applied binding.
     *
     * @type {string}
     * @memberof TechnicalAcknowledgmentDetail
     */
    partnerConfigurationSha256: string | null;
    /**
     * Parsed TA1 result, or `null` when the retained technical-acknowledgment record has no TA1 X12 body.
     * @type {TechnicalAcknowledgmentOutcome}
     * @memberof TechnicalAcknowledgmentDetail
     */
    outcome: TechnicalAcknowledgmentOutcome | null;
}

/**
 * Check if a given object implements the TechnicalAcknowledgmentDetail interface.
 */
export function instanceOfTechnicalAcknowledgmentDetail(value: object): value is TechnicalAcknowledgmentDetail {
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('responseStatusCode' in value) || value['responseStatusCode'] === undefined) return false;
    if (!('partnerConfigurationSha256' in value) || value['partnerConfigurationSha256'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    return true;
}

export function TechnicalAcknowledgmentDetailFromJSON(json: any): TechnicalAcknowledgmentDetail {
    return TechnicalAcknowledgmentDetailFromJSONTyped(json, false);
}

export function TechnicalAcknowledgmentDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechnicalAcknowledgmentDetail {
    if (json == null) {
        return json;
    }
    return {

        'sent': json['sent'],
        'timestamp': json['timestamp'],
        'responseStatusCode': json['responseStatusCode'],
        'partnerConfigurationSha256': json['partnerConfigurationSha256'],
        'outcome': TechnicalAcknowledgmentOutcomeFromJSON(json['outcome']),
    };
}

export function TechnicalAcknowledgmentDetailToJSON(json: any): TechnicalAcknowledgmentDetail {
    return TechnicalAcknowledgmentDetailToJSONTyped(json, false);
}

export function TechnicalAcknowledgmentDetailToJSONTyped(value?: TechnicalAcknowledgmentDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'sent': value['sent'],
        'timestamp': value['timestamp'],
        'responseStatusCode': value['responseStatusCode'],
        'partnerConfigurationSha256': value['partnerConfigurationSha256'],
        'outcome': TechnicalAcknowledgmentOutcomeToJSON(value['outcome']),
    };
}
