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
import type { X12TransactionSetReference } from './X12TransactionSetReference.js';
import {
    X12TransactionSetReferenceFromJSON,
    X12TransactionSetReferenceFromJSONTyped,
    X12TransactionSetReferenceToJSON,
    X12TransactionSetReferenceToJSONTyped,
} from './X12TransactionSetReference.js';

/**
 * Transaction-set reference catalog for one supported X12 version.
 * @export
 * @interface X12TransactionSetsResponse
 */
export interface X12TransactionSetsResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof X12TransactionSetsResponse
     */
    success: boolean;
    /**
     * Requested numeric X12 version whose catalog is returned.
     * @type {string}
     * @memberof X12TransactionSetsResponse
     */
    x12Version: string;
    /**
     * Supported transaction-set identifiers and their customer-readable names.
     * @type {Array<X12TransactionSetReference>}
     * @memberof X12TransactionSetsResponse
     */
    transactionSets: Array<X12TransactionSetReference>;
}

/**
 * Check if a given object implements the X12TransactionSetsResponse interface.
 */
export function instanceOfX12TransactionSetsResponse(value: object): value is X12TransactionSetsResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('transactionSets' in value) || value['transactionSets'] === undefined) return false;
    return true;
}

export function X12TransactionSetsResponseFromJSON(json: any): X12TransactionSetsResponse {
    return X12TransactionSetsResponseFromJSONTyped(json, false);
}

export function X12TransactionSetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12TransactionSetsResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'x12Version': json['x12Version'],
        'transactionSets': ((json['transactionSets'] as Array<any>).map(X12TransactionSetReferenceFromJSON)),
    };
}

export function X12TransactionSetsResponseToJSON(json: any): X12TransactionSetsResponse {
    return X12TransactionSetsResponseToJSONTyped(json, false);
}

export function X12TransactionSetsResponseToJSONTyped(value?: X12TransactionSetsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'x12Version': value['x12Version'],
        'transactionSets': ((value['transactionSets'] as Array<any>).map(X12TransactionSetReferenceToJSON)),
    };
}
