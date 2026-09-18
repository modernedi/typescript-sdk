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
 * Customer-defined searchable transaction identifier used for reconciliation.
 * @export
 * @interface TransactionBusinessKey
 */
export interface TransactionBusinessKey {
    /**
     * Stable customer-facing identifier label, or `null` for older records that stored only a value.
     * @type {string}
     * @memberof TransactionBusinessKey
     */
    name?: string | null;
    /**
     * Extracted or caller-supplied scalar identifier value stored as text.
     * @type {string}
     * @memberof TransactionBusinessKey
     */
    value?: string;
}

/**
 * Check if a given object implements the TransactionBusinessKey interface.
 */
export function instanceOfTransactionBusinessKey(value: object): value is TransactionBusinessKey {
    return true;
}

export function TransactionBusinessKeyFromJSON(json: any): TransactionBusinessKey {
    return TransactionBusinessKeyFromJSONTyped(json, false);
}

export function TransactionBusinessKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionBusinessKey {
    if (json == null) {
        return json;
    }
    return {

        'name': json['name'] === undefined ? undefined : json['name'] === null ? null : json['name'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function TransactionBusinessKeyToJSON(json: any): TransactionBusinessKey {
    return TransactionBusinessKeyToJSONTyped(json, false);
}

export function TransactionBusinessKeyToJSONTyped(value?: TransactionBusinessKey | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'name': value['name'],
        'value': value['value'],
    };
}
