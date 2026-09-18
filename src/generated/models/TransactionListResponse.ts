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
import type { TransactionAttentionSummary } from './TransactionAttentionSummary.js';
import {
    TransactionAttentionSummaryFromJSON,
    TransactionAttentionSummaryFromJSONTyped,
    TransactionAttentionSummaryToJSON,
    TransactionAttentionSummaryToJSONTyped,
} from './TransactionAttentionSummary.js';
import type { TransactionWindow } from './TransactionWindow.js';
import {
    TransactionWindowFromJSON,
    TransactionWindowFromJSONTyped,
    TransactionWindowToJSON,
    TransactionWindowToJSONTyped,
} from './TransactionWindow.js';
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
 * Paginated transaction summaries plus an environment-wide operator-attention count and freshness state.
 * @export
 * @interface TransactionListResponse
 */
export interface TransactionListResponse {
    /**
     * Always `true`; query or authorization failures use the documented error response instead.
     * @type {boolean}
     * @memberof TransactionListResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionListResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * Transactions matching the requested filters and cursor page, ordered newest first.
     * @type {Array<TransactionSummary>}
     * @memberof TransactionListResponse
     */
    transactions: Array<TransactionSummary>;
    /**
     * Opaque cursor for the next page, or `null` when no further matching transactions remain.
     * @type {string}
     * @memberof TransactionListResponse
     */
    nextCursor?: string | null;
    /**
     * True when `nextCursor` should be sent unchanged to retrieve another page.
     * @type {boolean}
     * @memberof TransactionListResponse
     */
    hasMore: boolean;
    /**
     *
     * @type {TransactionWindow}
     * @memberof TransactionListResponse
     */
    window: TransactionWindow;
    /**
     *
     * @type {TransactionAttentionSummary}
     * @memberof TransactionListResponse
     */
    attentionSummary: TransactionAttentionSummary;
}



/**
 * Check if a given object implements the TransactionListResponse interface.
 */
export function instanceOfTransactionListResponse(value: object): value is TransactionListResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('transactions' in value) || value['transactions'] === undefined) return false;
    if (!('hasMore' in value) || value['hasMore'] === undefined) return false;
    if (!('window' in value) || value['window'] === undefined) return false;
    if (!('attentionSummary' in value) || value['attentionSummary'] === undefined) return false;
    return true;
}

export function TransactionListResponseFromJSON(json: any): TransactionListResponse {
    return TransactionListResponseFromJSONTyped(json, false);
}

export function TransactionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionListResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'transactions': ((json['transactions'] as Array<any>).map(TransactionSummaryFromJSON)),
        'nextCursor': json['nextCursor'] === undefined ? undefined : json['nextCursor'] === null ? null : json['nextCursor'],
        'hasMore': json['hasMore'],
        'window': TransactionWindowFromJSON(json['window']),
        'attentionSummary': TransactionAttentionSummaryFromJSON(json['attentionSummary']),
    };
}

export function TransactionListResponseToJSON(json: any): TransactionListResponse {
    return TransactionListResponseToJSONTyped(json, false);
}

export function TransactionListResponseToJSONTyped(value?: TransactionListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'transactions': ((value['transactions'] as Array<any>).map(TransactionSummaryToJSON)),
        'nextCursor': value['nextCursor'],
        'hasMore': value['hasMore'],
        'window': TransactionWindowToJSON(value['window']),
        'attentionSummary': TransactionAttentionSummaryToJSON(value['attentionSummary']),
    };
}
