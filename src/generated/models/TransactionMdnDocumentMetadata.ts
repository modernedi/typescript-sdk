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
 * Full receipt-assurance metadata for the original transaction's MDN report.
 * @export
 * @interface TransactionMdnDocumentMetadata
 */
export interface TransactionMdnDocumentMetadata {
    /**
     * Message-ID of the MDN itself, or `null` while an asynchronous receipt is pending.
     * @type {string}
     * @memberof TransactionMdnDocumentMetadata
     */
    messageId: string | null;
    /**
     * Raw AS2 Disposition value returned by the partner.
     * @type {string}
     * @memberof TransactionMdnDocumentMetadata
     */
    disposition: string | null;
    /**
     * Normalized receipt-assurance outcome; only `processed` is a clean final success.
     * @type {TransactionMdnDocumentMetadataStatusEnum}
     * @memberof TransactionMdnDocumentMetadata
     */
    status: TransactionMdnDocumentMetadataStatusEnum;
    /**
     * Whether the receipt used the asynchronous Receipt-Delivery-Option callback.
     * @type {boolean}
     * @memberof TransactionMdnDocumentMetadata
     */
    asynchronous: boolean | null;
    /**
     * Whether the returned MIC matched the canonical content ModernEDI sent.
     * @type {boolean}
     * @memberof TransactionMdnDocumentMetadata
     */
    micMatched: boolean | null;
    /**
     * Partner-supplied Received-content-MIC value.
     * @type {string}
     * @memberof TransactionMdnDocumentMetadata
     */
    receivedContentMic: string | null;
    /**
     * Digest ModernEDI calculated over the sent canonical MIME content.
     * @type {string}
     * @memberof TransactionMdnDocumentMetadata
     */
    expectedContentMic: string | null;
    /**
     * MIC algorithm ModernEDI requested.
     * @type {string}
     * @memberof TransactionMdnDocumentMetadata
     */
    expectedMicAlgorithm: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMdnDocumentMetadata
     */
    expectedBy: string | null;
    /**
     * Specific receipt validation or disposition problem, or `null`.
     * @type {string}
     * @memberof TransactionMdnDocumentMetadata
     */
    validationError: string | null;
}


/**
 * @export
 */
export const TransactionMdnDocumentMetadataStatusEnum = {
    Pending: 'pending',
    Processed: 'processed',
    Warning: 'warning',
    Rejected: 'rejected',
    Invalid: 'invalid',
    MicMismatch: 'mic_mismatch',
    Overdue: 'overdue',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMdnDocumentMetadataStatusEnum = typeof TransactionMdnDocumentMetadataStatusEnum[keyof typeof TransactionMdnDocumentMetadataStatusEnum];


/**
 * Check if a given object implements the TransactionMdnDocumentMetadata interface.
 */
export function instanceOfTransactionMdnDocumentMetadata(value: object): value is TransactionMdnDocumentMetadata {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('disposition' in value) || value['disposition'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('asynchronous' in value) || value['asynchronous'] === undefined) return false;
    if (!('micMatched' in value) || value['micMatched'] === undefined) return false;
    if (!('receivedContentMic' in value) || value['receivedContentMic'] === undefined) return false;
    if (!('expectedContentMic' in value) || value['expectedContentMic'] === undefined) return false;
    if (!('expectedMicAlgorithm' in value) || value['expectedMicAlgorithm'] === undefined) return false;
    if (!('expectedBy' in value) || value['expectedBy'] === undefined) return false;
    if (!('validationError' in value) || value['validationError'] === undefined) return false;
    return true;
}

export function TransactionMdnDocumentMetadataFromJSON(json: any): TransactionMdnDocumentMetadata {
    return TransactionMdnDocumentMetadataFromJSONTyped(json, false);
}

export function TransactionMdnDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMdnDocumentMetadata {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'disposition': json['disposition'],
        'status': json['status'],
        'asynchronous': json['asynchronous'],
        'micMatched': json['micMatched'],
        'receivedContentMic': json['receivedContentMic'],
        'expectedContentMic': json['expectedContentMic'],
        'expectedMicAlgorithm': json['expectedMicAlgorithm'],
        'expectedBy': json['expectedBy'],
        'validationError': json['validationError'],
    };
}

export function TransactionMdnDocumentMetadataToJSON(json: any): TransactionMdnDocumentMetadata {
    return TransactionMdnDocumentMetadataToJSONTyped(json, false);
}

export function TransactionMdnDocumentMetadataToJSONTyped(value?: TransactionMdnDocumentMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'disposition': value['disposition'],
        'status': value['status'],
        'asynchronous': value['asynchronous'],
        'micMatched': value['micMatched'],
        'receivedContentMic': value['receivedContentMic'],
        'expectedContentMic': value['expectedContentMic'],
        'expectedMicAlgorithm': value['expectedMicAlgorithm'],
        'expectedBy': value['expectedBy'],
        'validationError': value['validationError'],
    };
}
