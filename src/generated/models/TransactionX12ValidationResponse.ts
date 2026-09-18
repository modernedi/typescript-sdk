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
import type { X12ValidationResult } from './X12ValidationResult.js';
import {
    X12ValidationResultFromJSON,
    X12ValidationResultFromJSONTyped,
    X12ValidationResultToJSON,
    X12ValidationResultToJSONTyped,
} from './X12ValidationResult.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Structured validation of the X12 content retained for one visible transaction.
 * @export
 * @interface TransactionX12ValidationResponse
 */
export interface TransactionX12ValidationResponse {
    /**
     * Always `true`; invalid retained X12 is represented by `validation.valid=false`.
     * @type {boolean}
     * @memberof TransactionX12ValidationResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionX12ValidationResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * Message id from the requested transaction reference.
     * @type {string}
     * @memberof TransactionX12ValidationResponse
     */
    messageId: string;
    /**
     * Transaction key from the requested transaction reference.
     * @type {string}
     * @memberof TransactionX12ValidationResponse
     */
    transactionKey: string;
    /**
     *
     * @type {X12ValidationResult}
     * @memberof TransactionX12ValidationResponse
     */
    validation: X12ValidationResult;
}



/**
 * Check if a given object implements the TransactionX12ValidationResponse interface.
 */
export function instanceOfTransactionX12ValidationResponse(value: object): value is TransactionX12ValidationResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('validation' in value) || value['validation'] === undefined) return false;
    return true;
}

export function TransactionX12ValidationResponseFromJSON(json: any): TransactionX12ValidationResponse {
    return TransactionX12ValidationResponseFromJSONTyped(json, false);
}

export function TransactionX12ValidationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionX12ValidationResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'validation': X12ValidationResultFromJSON(json['validation']),
    };
}

export function TransactionX12ValidationResponseToJSON(json: any): TransactionX12ValidationResponse {
    return TransactionX12ValidationResponseToJSONTyped(json, false);
}

export function TransactionX12ValidationResponseToJSONTyped(value?: TransactionX12ValidationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'validation': X12ValidationResultToJSON(value['validation']),
    };
}
