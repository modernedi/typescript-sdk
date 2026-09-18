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
 * Direction and normalized outcome fields for one sent or received TA1 timeline event.
 * @export
 * @interface TransactionTechnicalAcknowledgmentEventDetails
 */
export interface TransactionTechnicalAcknowledgmentEventDetails {
    /**
     * True when ModernEDI sent the TA1; false when it received one.
     * @type {boolean}
     * @memberof TransactionTechnicalAcknowledgmentEventDetails
     */
    sent: boolean | null;
    /**
     * Retained downstream HTTP status, or `null`.
     * @type {number}
     * @memberof TransactionTechnicalAcknowledgmentEventDetails
     */
    responseStatusCode: number | null;
    /**
     * Normalized TA104 outcome, or `null` when no TA1 payload was available to parse.
     * @type {TransactionTechnicalAcknowledgmentEventDetailsStatusEnum}
     * @memberof TransactionTechnicalAcknowledgmentEventDetails
     */
    status: TransactionTechnicalAcknowledgmentEventDetailsStatusEnum | null;
    /**
     * Raw TA104 code, or `null`.
     * @type {string}
     * @memberof TransactionTechnicalAcknowledgmentEventDetails
     */
    acknowledgmentCode: string | null;
    /**
     * Raw TA105 code, or `null`.
     * @type {string}
     * @memberof TransactionTechnicalAcknowledgmentEventDetails
     */
    errorCode: string | null;
}


/**
 * @export
 */
export const TransactionTechnicalAcknowledgmentEventDetailsStatusEnum = {
    Received: 'received',
    ReceivedWithErrors: 'received_with_errors',
    Rejected: 'rejected',
    Unknown: 'unknown',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionTechnicalAcknowledgmentEventDetailsStatusEnum = typeof TransactionTechnicalAcknowledgmentEventDetailsStatusEnum[keyof typeof TransactionTechnicalAcknowledgmentEventDetailsStatusEnum];


/**
 * Check if a given object implements the TransactionTechnicalAcknowledgmentEventDetails interface.
 */
export function instanceOfTransactionTechnicalAcknowledgmentEventDetails(value: object): value is TransactionTechnicalAcknowledgmentEventDetails {
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('responseStatusCode' in value) || value['responseStatusCode'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('acknowledgmentCode' in value) || value['acknowledgmentCode'] === undefined) return false;
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    return true;
}

export function TransactionTechnicalAcknowledgmentEventDetailsFromJSON(json: any): TransactionTechnicalAcknowledgmentEventDetails {
    return TransactionTechnicalAcknowledgmentEventDetailsFromJSONTyped(json, false);
}

export function TransactionTechnicalAcknowledgmentEventDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionTechnicalAcknowledgmentEventDetails {
    if (json == null) {
        return json;
    }
    return {

        'sent': json['sent'],
        'responseStatusCode': json['responseStatusCode'],
        'status': json['status'],
        'acknowledgmentCode': json['acknowledgmentCode'],
        'errorCode': json['errorCode'],
    };
}

export function TransactionTechnicalAcknowledgmentEventDetailsToJSON(json: any): TransactionTechnicalAcknowledgmentEventDetails {
    return TransactionTechnicalAcknowledgmentEventDetailsToJSONTyped(json, false);
}

export function TransactionTechnicalAcknowledgmentEventDetailsToJSONTyped(value?: TransactionTechnicalAcknowledgmentEventDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'sent': value['sent'],
        'responseStatusCode': value['responseStatusCode'],
        'status': value['status'],
        'acknowledgmentCode': value['acknowledgmentCode'],
        'errorCode': value['errorCode'],
    };
}
