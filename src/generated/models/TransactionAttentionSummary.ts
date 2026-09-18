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
import type { TransactionAttentionFreshness } from './TransactionAttentionFreshness.js';
import {
    TransactionAttentionFreshnessFromJSON,
    TransactionAttentionFreshnessFromJSONTyped,
    TransactionAttentionFreshnessToJSON,
    TransactionAttentionFreshnessToJSONTyped,
} from './TransactionAttentionFreshness.js';
import type { TransactionAttentionSummaryReasonCounts } from './TransactionAttentionSummaryReasonCounts.js';
import {
    TransactionAttentionSummaryReasonCountsFromJSON,
    TransactionAttentionSummaryReasonCountsFromJSONTyped,
    TransactionAttentionSummaryReasonCountsToJSON,
    TransactionAttentionSummaryReasonCountsToJSONTyped,
} from './TransactionAttentionSummaryReasonCounts.js';

/**
 * Environment-wide operator-inbox summary. Counts are independent of the transaction list's date window, row limit, cursor, and other filters. A transaction with more than one reason is counted once in `needsAttentionCount` and once in each applicable reason count. Its `freshness` also applies to `mappingStatus`, `functionalAckStatus`, `implementationAckStatus`, and `mdnStatus` list filtering and to list-level projected MDN status.
 *
 * @export
 * @interface TransactionAttentionSummary
 */
export interface TransactionAttentionSummary {
    /**
     * Distinct transactions currently projected as needing attention.
     * @type {number}
     * @memberof TransactionAttentionSummary
     */
    needsAttentionCount: number;
    /**
     *
     * @type {TransactionAttentionSummaryReasonCounts}
     * @memberof TransactionAttentionSummary
     */
    reasonCounts: TransactionAttentionSummaryReasonCounts;
    /**
     *
     * @type {TransactionAttentionFreshness}
     * @memberof TransactionAttentionSummary
     */
    freshness: TransactionAttentionFreshness;
}

/**
 * Check if a given object implements the TransactionAttentionSummary interface.
 */
export function instanceOfTransactionAttentionSummary(value: object): value is TransactionAttentionSummary {
    if (!('needsAttentionCount' in value) || value['needsAttentionCount'] === undefined) return false;
    if (!('reasonCounts' in value) || value['reasonCounts'] === undefined) return false;
    if (!('freshness' in value) || value['freshness'] === undefined) return false;
    return true;
}

export function TransactionAttentionSummaryFromJSON(json: any): TransactionAttentionSummary {
    return TransactionAttentionSummaryFromJSONTyped(json, false);
}

export function TransactionAttentionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAttentionSummary {
    if (json == null) {
        return json;
    }
    return {

        'needsAttentionCount': json['needsAttentionCount'],
        'reasonCounts': TransactionAttentionSummaryReasonCountsFromJSON(json['reasonCounts']),
        'freshness': TransactionAttentionFreshnessFromJSON(json['freshness']),
    };
}

export function TransactionAttentionSummaryToJSON(json: any): TransactionAttentionSummary {
    return TransactionAttentionSummaryToJSONTyped(json, false);
}

export function TransactionAttentionSummaryToJSONTyped(value?: TransactionAttentionSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'needsAttentionCount': value['needsAttentionCount'],
        'reasonCounts': TransactionAttentionSummaryReasonCountsToJSON(value['reasonCounts']),
        'freshness': TransactionAttentionFreshnessToJSON(value['freshness']),
    };
}
