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
 * Validation finding associated with one ST/SE transaction set.
 * @export
 * @interface X12TransactionValidationError
 */
export interface X12TransactionValidationError {
    /**
     * Zero-based functional-group index within the parsed interchange.
     * @type {number}
     * @memberof X12TransactionValidationError
     */
    functionalGroupIndex: number;
    /**
     * Zero-based transaction index within the containing functional group.
     * @type {number}
     * @memberof X12TransactionValidationError
     */
    transactionIndex: number;
    /**
     * ST01 transaction-set identifier, such as `850` or `810`.
     * @type {string}
     * @memberof X12TransactionValidationError
     */
    transactionSetIdentifierCode: string;
    /**
     * Human-readable ST01 meaning, or `null` when the code is not in ModernEDI's reference catalog.
     * @type {string}
     * @memberof X12TransactionValidationError
     */
    transactionSetDescription: string | null;
    /**
     * ST02 transaction control number used to correlate the finding with source X12.
     * @type {string}
     * @memberof X12TransactionValidationError
     */
    controlNumber: string;
    /**
     * X12 validator code for the transaction-level finding.
     * @type {string}
     * @memberof X12TransactionValidationError
     */
    code: string;
    /**
     * Human-readable explanation of the transaction-level finding.
     * @type {string}
     * @memberof X12TransactionValidationError
     */
    description: string;
}

/**
 * Check if a given object implements the X12TransactionValidationError interface.
 */
export function instanceOfX12TransactionValidationError(value: object): value is X12TransactionValidationError {
    if (!('functionalGroupIndex' in value) || value['functionalGroupIndex'] === undefined) return false;
    if (!('transactionIndex' in value) || value['transactionIndex'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transactionSetDescription' in value) || value['transactionSetDescription'] === undefined) return false;
    if (!('controlNumber' in value) || value['controlNumber'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function X12TransactionValidationErrorFromJSON(json: any): X12TransactionValidationError {
    return X12TransactionValidationErrorFromJSONTyped(json, false);
}

export function X12TransactionValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12TransactionValidationError {
    if (json == null) {
        return json;
    }
    return {

        'functionalGroupIndex': json['functionalGroupIndex'],
        'transactionIndex': json['transactionIndex'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'transactionSetDescription': json['transactionSetDescription'],
        'controlNumber': json['controlNumber'],
        'code': json['code'],
        'description': json['description'],
    };
}

export function X12TransactionValidationErrorToJSON(json: any): X12TransactionValidationError {
    return X12TransactionValidationErrorToJSONTyped(json, false);
}

export function X12TransactionValidationErrorToJSONTyped(value?: X12TransactionValidationError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalGroupIndex': value['functionalGroupIndex'],
        'transactionIndex': value['transactionIndex'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'transactionSetDescription': value['transactionSetDescription'],
        'controlNumber': value['controlNumber'],
        'code': value['code'],
        'description': value['description'],
    };
}
