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
 * Safe terminal replay failure details, or `null` when no execution failure was recorded.
 * @export
 * @interface TransactionReplayError
 */
export interface TransactionReplayError {
    /**
     * Stable replay failure code, or `null` when no specific code was captured.
     * @type {string}
     * @memberof TransactionReplayError
     */
    code?: string | null;
    /**
     * Safe operator-facing replay failure explanation, or `null` when unavailable.
     * @type {string}
     * @memberof TransactionReplayError
     */
    message?: string | null;
}

/**
 * Check if a given object implements the TransactionReplayError interface.
 */
export function instanceOfTransactionReplayError(value: object): value is TransactionReplayError {
    return true;
}

export function TransactionReplayErrorFromJSON(json: any): TransactionReplayError {
    return TransactionReplayErrorFromJSONTyped(json, false);
}

export function TransactionReplayErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionReplayError {
    if (json == null) {
        return json;
    }
    return {

        'code': json['code'] === undefined ? undefined : json['code'] === null ? null : json['code'],
        'message': json['message'] === undefined ? undefined : json['message'] === null ? null : json['message'],
    };
}

export function TransactionReplayErrorToJSON(json: any): TransactionReplayError {
    return TransactionReplayErrorToJSONTyped(json, false);
}

export function TransactionReplayErrorToJSONTyped(value?: TransactionReplayError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'code': value['code'],
        'message': value['message'],
    };
}
