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
 * X12 transaction-set identity captured from ST01 and the reference catalog.
 * @export
 * @interface TransactionSet
 */
export interface TransactionSet {
    /**
     * ST01 transaction-set identifier, or `null` when the runtime did not record one.
     * @type {string}
     * @memberof TransactionSet
     */
    code?: string | null;
    /**
     * Human-readable ST01 document name, or `null` when the code is unavailable or unknown.
     * @type {string}
     * @memberof TransactionSet
     */
    description?: string | null;
}

/**
 * Check if a given object implements the TransactionSet interface.
 */
export function instanceOfTransactionSet(value: object): value is TransactionSet {
    return true;
}

export function TransactionSetFromJSON(json: any): TransactionSet {
    return TransactionSetFromJSONTyped(json, false);
}

export function TransactionSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSet {
    if (json == null) {
        return json;
    }
    return {

        'code': json['code'] === undefined ? undefined : json['code'] === null ? null : json['code'],
        'description': json['description'] === undefined ? undefined : json['description'] === null ? null : json['description'],
    };
}

export function TransactionSetToJSON(json: any): TransactionSet {
    return TransactionSetToJSONTyped(json, false);
}

export function TransactionSetToJSONTyped(value?: TransactionSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'code': value['code'],
        'description': value['description'],
    };
}
