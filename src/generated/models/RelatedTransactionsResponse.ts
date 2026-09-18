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
import type { TransactionSummary } from './TransactionSummary.js';
import {
    TransactionSummaryFromJSON,
    TransactionSummaryFromJSONTyped,
    TransactionSummaryToJSON,
    TransactionSummaryToJSONTyped,
} from './TransactionSummary.js';

/**
 * Selected transaction plus outbound replies linked to its inbound AS2 message id.
 * @export
 * @interface RelatedTransactionsResponse
 */
export interface RelatedTransactionsResponse {
    /**
     * Always `true`; unknown transactions or authorization failures use an error response.
     * @type {boolean}
     * @memberof RelatedTransactionsResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof RelatedTransactionsResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     *
     * @type {TransactionSummary}
     * @memberof RelatedTransactionsResponse
     */
    transaction: TransactionSummary;
    /**
     * Compact summaries of linked outbound reply transactions; empty when no replies are recorded. Fetch a selected reply's detail for its acknowledgment and document index.
     * @type {Array<TransactionSummary>}
     * @memberof RelatedTransactionsResponse
     */
    relatedTransactions: Array<TransactionSummary>;
}



/**
 * Check if a given object implements the RelatedTransactionsResponse interface.
 */
export function instanceOfRelatedTransactionsResponse(value: object): value is RelatedTransactionsResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    if (!('relatedTransactions' in value) || value['relatedTransactions'] === undefined) return false;
    return true;
}

export function RelatedTransactionsResponseFromJSON(json: any): RelatedTransactionsResponse {
    return RelatedTransactionsResponseFromJSONTyped(json, false);
}

export function RelatedTransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelatedTransactionsResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'transaction': TransactionSummaryFromJSON(json['transaction']),
        'relatedTransactions': ((json['relatedTransactions'] as Array<any>).map(TransactionSummaryFromJSON)),
    };
}

export function RelatedTransactionsResponseToJSON(json: any): RelatedTransactionsResponse {
    return RelatedTransactionsResponseToJSONTyped(json, false);
}

export function RelatedTransactionsResponseToJSONTyped(value?: RelatedTransactionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'transaction': TransactionSummaryToJSON(value['transaction']),
        'relatedTransactions': ((value['relatedTransactions'] as Array<any>).map(TransactionSummaryToJSON)),
    };
}
