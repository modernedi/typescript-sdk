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
 * Safe normalized AS2 receipt diagnostics used by MDN timeline events.
 * @export
 * @interface TransactionMdnEventDetails
 */
export interface TransactionMdnEventDetails {
    /**
     * Message-ID of the MDN itself.
     * @type {string}
     * @memberof TransactionMdnEventDetails
     */
    messageId: string | null;
    /**
     * Raw AS2 Disposition value.
     * @type {string}
     * @memberof TransactionMdnEventDetails
     */
    disposition: string | null;
    /**
     * Normalized receipt-assurance state that determines the event type.
     * @type {TransactionMdnEventDetailsStatusEnum}
     * @memberof TransactionMdnEventDetails
     */
    status: TransactionMdnEventDetailsStatusEnum;
    /**
     * Whether the receipt used the asynchronous Receipt-Delivery-Option callback.
     * @type {boolean}
     * @memberof TransactionMdnEventDetails
     */
    asynchronous: boolean | null;
    /**
     * Whether the returned MIC matched the sent canonical content.
     * @type {boolean}
     * @memberof TransactionMdnEventDetails
     */
    micMatched: boolean | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMdnEventDetails
     */
    expectedBy: string | null;
    /**
     * Receipt validation or disposition problem, or `null`.
     * @type {string}
     * @memberof TransactionMdnEventDetails
     */
    validationError: string | null;
}


/**
 * @export
 */
export const TransactionMdnEventDetailsStatusEnum = {
    Pending: 'pending',
    Processed: 'processed',
    Warning: 'warning',
    Rejected: 'rejected',
    Invalid: 'invalid',
    MicMismatch: 'mic_mismatch',
    Overdue: 'overdue',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMdnEventDetailsStatusEnum = typeof TransactionMdnEventDetailsStatusEnum[keyof typeof TransactionMdnEventDetailsStatusEnum];


/**
 * Check if a given object implements the TransactionMdnEventDetails interface.
 */
export function instanceOfTransactionMdnEventDetails(value: object): value is TransactionMdnEventDetails {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('disposition' in value) || value['disposition'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('asynchronous' in value) || value['asynchronous'] === undefined) return false;
    if (!('micMatched' in value) || value['micMatched'] === undefined) return false;
    if (!('expectedBy' in value) || value['expectedBy'] === undefined) return false;
    if (!('validationError' in value) || value['validationError'] === undefined) return false;
    return true;
}

export function TransactionMdnEventDetailsFromJSON(json: any): TransactionMdnEventDetails {
    return TransactionMdnEventDetailsFromJSONTyped(json, false);
}

export function TransactionMdnEventDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMdnEventDetails {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'disposition': json['disposition'],
        'status': json['status'],
        'asynchronous': json['asynchronous'],
        'micMatched': json['micMatched'],
        'expectedBy': json['expectedBy'],
        'validationError': json['validationError'],
    };
}

export function TransactionMdnEventDetailsToJSON(json: any): TransactionMdnEventDetails {
    return TransactionMdnEventDetailsToJSONTyped(json, false);
}

export function TransactionMdnEventDetailsToJSONTyped(value?: TransactionMdnEventDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'disposition': value['disposition'],
        'status': value['status'],
        'asynchronous': value['asynchronous'],
        'micMatched': value['micMatched'],
        'expectedBy': value['expectedBy'],
        'validationError': value['validationError'],
    };
}
