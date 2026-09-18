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
 * One transaction-set identifier in an X12 version's reference catalog.
 * @export
 * @interface X12TransactionSetReference
 */
export interface X12TransactionSetReference {
    /**
     * ST01 transaction-set identifier accepted for this X12 version.
     * @type {string}
     * @memberof X12TransactionSetReference
     */
    transactionSetIdentifierCode: string;
    /**
     * Human-readable business-document name associated with the ST01 code.
     * @type {string}
     * @memberof X12TransactionSetReference
     */
    transactionSetDescription: string;
}

/**
 * Check if a given object implements the X12TransactionSetReference interface.
 */
export function instanceOfX12TransactionSetReference(value: object): value is X12TransactionSetReference {
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transactionSetDescription' in value) || value['transactionSetDescription'] === undefined) return false;
    return true;
}

export function X12TransactionSetReferenceFromJSON(json: any): X12TransactionSetReference {
    return X12TransactionSetReferenceFromJSONTyped(json, false);
}

export function X12TransactionSetReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12TransactionSetReference {
    if (json == null) {
        return json;
    }
    return {

        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'transactionSetDescription': json['transactionSetDescription'],
    };
}

export function X12TransactionSetReferenceToJSON(json: any): X12TransactionSetReference {
    return X12TransactionSetReferenceToJSONTyped(json, false);
}

export function X12TransactionSetReferenceToJSONTyped(value?: X12TransactionSetReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'transactionSetDescription': value['transactionSetDescription'],
    };
}
