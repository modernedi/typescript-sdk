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
 * Send or receive direction and retained HTTP status for a technical acknowledgment.
 * @export
 * @interface TransactionTechnicalAcknowledgmentDocumentMetadata
 */
export interface TransactionTechnicalAcknowledgmentDocumentMetadata {
    /**
     * True when ModernEDI sent the technical acknowledgment; false when it received one.
     * @type {boolean}
     * @memberof TransactionTechnicalAcknowledgmentDocumentMetadata
     */
    sent: boolean | null;
    /**
     * Retained downstream HTTP status, or `null`.
     * @type {number}
     * @memberof TransactionTechnicalAcknowledgmentDocumentMetadata
     */
    responseStatusCode: number | null;
    /**
     * Parsed TA1 result, or `null` when this artifact is only a retained HTTP response without TA1 X12.
     * @type {TechnicalAcknowledgmentOutcome}
     * @memberof TransactionTechnicalAcknowledgmentDocumentMetadata
     */
    outcome: TechnicalAcknowledgmentOutcome | null;
}

/**
 * Check if a given object implements the TransactionTechnicalAcknowledgmentDocumentMetadata interface.
 */
export function instanceOfTransactionTechnicalAcknowledgmentDocumentMetadata(value: object): value is TransactionTechnicalAcknowledgmentDocumentMetadata {
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('responseStatusCode' in value) || value['responseStatusCode'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    return true;
}

export function TransactionTechnicalAcknowledgmentDocumentMetadataFromJSON(json: any): TransactionTechnicalAcknowledgmentDocumentMetadata {
    return TransactionTechnicalAcknowledgmentDocumentMetadataFromJSONTyped(json, false);
}

export function TransactionTechnicalAcknowledgmentDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionTechnicalAcknowledgmentDocumentMetadata {
    if (json == null) {
        return json;
    }
    return {

        'sent': json['sent'],
        'responseStatusCode': json['responseStatusCode'],
        'outcome': TechnicalAcknowledgmentOutcomeFromJSON(json['outcome']),
    };
}

export function TransactionTechnicalAcknowledgmentDocumentMetadataToJSON(json: any): TransactionTechnicalAcknowledgmentDocumentMetadata {
    return TransactionTechnicalAcknowledgmentDocumentMetadataToJSONTyped(json, false);
}

export function TransactionTechnicalAcknowledgmentDocumentMetadataToJSONTyped(value?: TransactionTechnicalAcknowledgmentDocumentMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'sent': value['sent'],
        'responseStatusCode': value['responseStatusCode'],
        'outcome': TechnicalAcknowledgmentOutcomeToJSON(value['outcome']),
    };
}
