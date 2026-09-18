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
 * Current-day workload-shape indicators derived from accepted transaction rows and message ids.
 * @export
 * @interface UsageSignals
 */
export interface UsageSignals {
    /**
     * Total transaction-set rows recorded today; may exceed message count when interchanges are batched.
     * @type {number}
     * @memberof UsageSignals
     */
    transactionRowsToday: number;
    /**
     * Distinct AS2 message ids that contained more than one transaction row today.
     * @type {number}
     * @memberof UsageSignals
     */
    multiTransactionMessageIdsToday: number;
    /**
     * UTC `HH:00` bucket with the most messages today, or `null` when no messages were recorded.
     * @type {string}
     * @memberof UsageSignals
     */
    busiestHour?: string | null;
    /**
     * Distinct AS2 message count in `busiestHour`, or zero when there is no busiest hour.
     * @type {number}
     * @memberof UsageSignals
     */
    busiestHourMessages: number;
    /**
     * Partner with the most messages today, or `null` when no partner-attributed messages were recorded.
     * @type {string}
     * @memberof UsageSignals
     */
    topPartnerName?: string | null;
    /**
     * Distinct AS2 message count for `topPartnerName`, or zero when no top partner exists.
     * @type {number}
     * @memberof UsageSignals
     */
    topPartnerMessages: number;
}

/**
 * Check if a given object implements the UsageSignals interface.
 */
export function instanceOfUsageSignals(value: object): value is UsageSignals {
    if (!('transactionRowsToday' in value) || value['transactionRowsToday'] === undefined) return false;
    if (!('multiTransactionMessageIdsToday' in value) || value['multiTransactionMessageIdsToday'] === undefined) return false;
    if (!('busiestHourMessages' in value) || value['busiestHourMessages'] === undefined) return false;
    if (!('topPartnerMessages' in value) || value['topPartnerMessages'] === undefined) return false;
    return true;
}

export function UsageSignalsFromJSON(json: any): UsageSignals {
    return UsageSignalsFromJSONTyped(json, false);
}

export function UsageSignalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsageSignals {
    if (json == null) {
        return json;
    }
    return {

        'transactionRowsToday': json['transactionRowsToday'],
        'multiTransactionMessageIdsToday': json['multiTransactionMessageIdsToday'],
        'busiestHour': json['busiestHour'] === undefined ? undefined : json['busiestHour'] === null ? null : json['busiestHour'],
        'busiestHourMessages': json['busiestHourMessages'],
        'topPartnerName': json['topPartnerName'] === undefined ? undefined : json['topPartnerName'] === null ? null : json['topPartnerName'],
        'topPartnerMessages': json['topPartnerMessages'],
    };
}

export function UsageSignalsToJSON(json: any): UsageSignals {
    return UsageSignalsToJSONTyped(json, false);
}

export function UsageSignalsToJSONTyped(value?: UsageSignals | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'transactionRowsToday': value['transactionRowsToday'],
        'multiTransactionMessageIdsToday': value['multiTransactionMessageIdsToday'],
        'busiestHour': value['busiestHour'],
        'busiestHourMessages': value['busiestHourMessages'],
        'topPartnerName': value['topPartnerName'],
        'topPartnerMessages': value['topPartnerMessages'],
    };
}
