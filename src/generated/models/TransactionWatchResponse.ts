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
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Resulting operator-watchlist state after an idempotent watch or unwatch operation.
 * @export
 * @interface TransactionWatchResponse
 */
export interface TransactionWatchResponse {
    /**
     * Always `true`; unknown transactions or authorization failures use an error response.
     * @type {boolean}
     * @memberof TransactionWatchResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionWatchResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * AS2 message id of the transaction whose watch state changed.
     * @type {string}
     * @memberof TransactionWatchResponse
     */
    messageId: string;
    /**
     * Transaction identifier within the AS2 message, usually `GS06#ST02`.
     * @type {string}
     * @memberof TransactionWatchResponse
     */
    transactionKey: string;
    /**
     * Resulting watchlist state after the operation.
     * @type {boolean}
     * @memberof TransactionWatchResponse
     */
    onWatchlist: boolean;
}



/**
 * Check if a given object implements the TransactionWatchResponse interface.
 */
export function instanceOfTransactionWatchResponse(value: object): value is TransactionWatchResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('onWatchlist' in value) || value['onWatchlist'] === undefined) return false;
    return true;
}

export function TransactionWatchResponseFromJSON(json: any): TransactionWatchResponse {
    return TransactionWatchResponseFromJSONTyped(json, false);
}

export function TransactionWatchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionWatchResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'onWatchlist': json['onWatchlist'],
    };
}

export function TransactionWatchResponseToJSON(json: any): TransactionWatchResponse {
    return TransactionWatchResponseToJSONTyped(json, false);
}

export function TransactionWatchResponseToJSONTyped(value?: TransactionWatchResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'onWatchlist': value['onWatchlist'],
    };
}
