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
import type { TransactionDetail } from './TransactionDetail.js';
import {
    TransactionDetailFromJSON,
    TransactionDetailFromJSONTyped,
    TransactionDetailToJSON,
    TransactionDetailToJSONTyped,
} from './TransactionDetail.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Metadata-first transaction record with a document index, mapping results, delivery state, acknowledgments, events, and compact linked-reply summaries.
 * @export
 * @interface TransactionDetailResponse
 */
export interface TransactionDetailResponse {
    /**
     * Always `true`; unknown transactions or authorization failures use an error response.
     * @type {boolean}
     * @memberof TransactionDetailResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionDetailResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     *
     * @type {TransactionDetail}
     * @memberof TransactionDetailResponse
     */
    transaction: TransactionDetail;
}



/**
 * Check if a given object implements the TransactionDetailResponse interface.
 */
export function instanceOfTransactionDetailResponse(value: object): value is TransactionDetailResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    return true;
}

export function TransactionDetailResponseFromJSON(json: any): TransactionDetailResponse {
    return TransactionDetailResponseFromJSONTyped(json, false);
}

export function TransactionDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'transaction': TransactionDetailFromJSON(json['transaction']),
    };
}

export function TransactionDetailResponseToJSON(json: any): TransactionDetailResponse {
    return TransactionDetailResponseToJSONTyped(json, false);
}

export function TransactionDetailResponseToJSONTyped(value?: TransactionDetailResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'transaction': TransactionDetailToJSON(value['transaction']),
    };
}
