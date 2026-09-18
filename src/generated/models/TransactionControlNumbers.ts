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
 *
 * @export
 * @interface TransactionControlNumbers
 */
export interface TransactionControlNumbers {
    /**
     * ST02 transaction control number.
     * @type {string}
     * @memberof TransactionControlNumbers
     */
    transaction?: string | null;
    /**
     * GS06 functional group control number.
     * @type {string}
     * @memberof TransactionControlNumbers
     */
    functionalGroup?: string | null;
}

/**
 * Check if a given object implements the TransactionControlNumbers interface.
 */
export function instanceOfTransactionControlNumbers(value: object): value is TransactionControlNumbers {
    return true;
}

export function TransactionControlNumbersFromJSON(json: any): TransactionControlNumbers {
    return TransactionControlNumbersFromJSONTyped(json, false);
}

export function TransactionControlNumbersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionControlNumbers {
    if (json == null) {
        return json;
    }
    return {

        'transaction': json['transaction'] === undefined ? undefined : json['transaction'] === null ? null : json['transaction'],
        'functionalGroup': json['functionalGroup'] === undefined ? undefined : json['functionalGroup'] === null ? null : json['functionalGroup'],
    };
}

export function TransactionControlNumbersToJSON(json: any): TransactionControlNumbers {
    return TransactionControlNumbersToJSONTyped(json, false);
}

export function TransactionControlNumbersToJSONTyped(value?: TransactionControlNumbers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'transaction': value['transaction'],
        'functionalGroup': value['functionalGroup'],
    };
}
