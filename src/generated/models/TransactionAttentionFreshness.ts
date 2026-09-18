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
 * Reconciliation state for the selected environment. Until the first complete sweep, attention-filtered or exact-status-filtered rows and counts can be partial or empty; `complete: false` means an empty result is not proof of zero. An incomplete or failed sweep does not clear previously observed active attention items.
 *
 * @export
 * @interface TransactionAttentionFreshness
 */
export interface TransactionAttentionFreshness {
    /**
     * Reconciliation lifecycle: pending, actively reconciling, current, or stale.
     * @type {TransactionAttentionFreshnessStatusEnum}
     * @memberof TransactionAttentionFreshness
     */
    status: TransactionAttentionFreshnessStatusEnum;
    /**
     * Whether the currently reported projection is complete and current. This is false while the first sweep is pending, while a refresh is reconciling, or when reconciliation is stale; previously observed active items remain visible during those states.
     *
     * @type {boolean}
     * @memberof TransactionAttentionFreshness
     */
    complete: boolean;
    /**
     * UTC instant of the latest completed full attention sweep, or `null` before the first completion.
     * @type {string}
     * @memberof TransactionAttentionFreshness
     */
    lastCompletedAt: string | null;
    /**
     * UTC instant when the current reconciliation began, or `null` when no sweep is running.
     * @type {string}
     * @memberof TransactionAttentionFreshness
     */
    reconciliationStartedAt: string | null;
    /**
     * Safe operator-facing freshness or retry guidance; internal errors are not exposed.
     * @type {string}
     * @memberof TransactionAttentionFreshness
     */
    message: string | null;
}


/**
 * @export
 */
export const TransactionAttentionFreshnessStatusEnum = {
    Pending: 'pending',
    Reconciling: 'reconciling',
    Current: 'current',
    Stale: 'stale',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionAttentionFreshnessStatusEnum = typeof TransactionAttentionFreshnessStatusEnum[keyof typeof TransactionAttentionFreshnessStatusEnum];


/**
 * Check if a given object implements the TransactionAttentionFreshness interface.
 */
export function instanceOfTransactionAttentionFreshness(value: object): value is TransactionAttentionFreshness {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('complete' in value) || value['complete'] === undefined) return false;
    if (!('lastCompletedAt' in value) || value['lastCompletedAt'] === undefined) return false;
    if (!('reconciliationStartedAt' in value) || value['reconciliationStartedAt'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function TransactionAttentionFreshnessFromJSON(json: any): TransactionAttentionFreshness {
    return TransactionAttentionFreshnessFromJSONTyped(json, false);
}

export function TransactionAttentionFreshnessFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAttentionFreshness {
    if (json == null) {
        return json;
    }
    return {

        'status': json['status'],
        'complete': json['complete'],
        'lastCompletedAt': json['lastCompletedAt'],
        'reconciliationStartedAt': json['reconciliationStartedAt'],
        'message': json['message'],
    };
}

export function TransactionAttentionFreshnessToJSON(json: any): TransactionAttentionFreshness {
    return TransactionAttentionFreshnessToJSONTyped(json, false);
}

export function TransactionAttentionFreshnessToJSONTyped(value?: TransactionAttentionFreshness | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': value['status'],
        'complete': value['complete'],
        'lastCompletedAt': value['lastCompletedAt'],
        'reconciliationStartedAt': value['reconciliationStartedAt'],
        'message': value['message'],
    };
}
