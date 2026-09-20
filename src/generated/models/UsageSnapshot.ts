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
import type { UsagePartnerBreakdown } from './UsagePartnerBreakdown.js';
import {
    UsagePartnerBreakdownFromJSON,
    UsagePartnerBreakdownFromJSONTyped,
    UsagePartnerBreakdownToJSON,
    UsagePartnerBreakdownToJSONTyped,
} from './UsagePartnerBreakdown.js';
import type { UsageHour } from './UsageHour.js';
import {
    UsageHourFromJSON,
    UsageHourFromJSONTyped,
    UsageHourToJSON,
    UsageHourToJSONTyped,
} from './UsageHour.js';
import type { UsageSignals } from './UsageSignals.js';
import {
    UsageSignalsFromJSON,
    UsageSignalsFromJSONTyped,
    UsageSignalsToJSON,
    UsageSignalsToJSONTyped,
} from './UsageSignals.js';
import type { UsageDay } from './UsageDay.js';
import {
    UsageDayFromJSON,
    UsageDayFromJSONTyped,
    UsageDayToJSON,
    UsageDayToJSONTyped,
} from './UsageDay.js';

/**
 * Workspace AS2-message usage across Production and Test traffic and self-service plan enforcement state, measured in UTC. Both traffic environments share one daily quota. Transaction-based breakdowns count a message ID once per traffic environment, even if the same ID exists in both.
 * @export
 * @interface UsageSnapshot
 */
export interface UsageSnapshot {
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof UsageSnapshot
     */
    asOf: string;
    /**
     * Time zone defining daily and hourly buckets; currently always `UTC`.
     * @type {string}
     * @memberof UsageSnapshot
     */
    timeZone: string;
    /**
     * Current billing plan code, or `null` when billing metadata is unavailable.
     * @type {string}
     * @memberof UsageSnapshot
     */
    planCode?: string | null;
    /**
     * Included AS2 messages per UTC day, or `null` for an unlimited plan.
     * @type {number}
     * @memberof UsageSnapshot
     */
    dailyLimit?: number | null;
    /**
     * Attempted-message count that changes `status` to `approaching_limit`, or `null` for unlimited plans.
     * @type {number}
     * @memberof UsageSnapshot
     */
    warningThreshold?: number | null;
    /**
     * Attempted-message count after which new AS2 messages are rejected, or `null` for unlimited plans.
     * @type {number}
     * @memberof UsageSnapshot
     */
    rejectionThreshold?: number | null;
    /**
     * AS2 messages attempted across Production and Test traffic since 00:00 UTC, including accepted and rejected messages. Quota status and usage notifications use this count.
     * @type {number}
     * @memberof UsageSnapshot
     */
    attemptedMessagesToday: number;
    /**
     * AS2 messages accepted for processing since 00:00 UTC.
     * @type {number}
     * @memberof UsageSnapshot
     */
    acceptedMessagesToday: number;
    /**
     * AS2 messages rejected by quota enforcement since 00:00 UTC.
     * @type {number}
     * @memberof UsageSnapshot
     */
    rejectedMessagesToday: number;
    /**
     * Days quota-rejected payloads are retained for support recovery, or `null` when enforcement is not configured.
     * @type {number}
     * @memberof UsageSnapshot
     */
    quarantineRetentionDays?: number | null;
    /**
     * True when attempted usage has crossed the rejection threshold and new messages are being rejected.
     * @type {boolean}
     * @memberof UsageSnapshot
     */
    rejectionActive: boolean;
    /**
     * True when this workspace has no configured daily AS2 message limit.
     * @type {boolean}
     * @memberof UsageSnapshot
     */
    unlimited: boolean;
    /**
     * Stable state: `ok`, `approaching_limit`, `over_limit`, `rejection_active`, or `unlimited`.
     * @type {string}
     * @memberof UsageSnapshot
     */
    status: string;
    /**
     * Machine-readable quota behavior, currently `reject_after_safety_threshold` or `not_configured`.
     * @type {string}
     * @memberof UsageSnapshot
     */
    enforcementMode: string;
    /**
     * Customer-readable explanation of the workspace's current quota and safety-threshold policy.
     * @type {string}
     * @memberof UsageSnapshot
     */
    policy: string;
    /**
     *
     * @type {UsageDay}
     * @memberof UsageSnapshot
     */
    today: UsageDay;
    /**
     * Daily accepted-message totals for the retained usage window, ordered by date.
     * @type {Array<UsageDay>}
     * @memberof UsageSnapshot
     */
    dailyUsage: Array<UsageDay>;
    /**
     * Current UTC-day accepted messages and transaction rows grouped by partner.
     * @type {Array<UsagePartnerBreakdown>}
     * @memberof UsageSnapshot
     */
    todayByPartner: Array<UsagePartnerBreakdown>;
    /**
     * Current UTC-day accepted messages and transaction rows grouped into UTC hour buckets.
     * @type {Array<UsageHour>}
     * @memberof UsageSnapshot
     */
    todayByHour: Array<UsageHour>;
    /**
     *
     * @type {UsageSignals}
     * @memberof UsageSnapshot
     */
    signals: UsageSignals;
}

/**
 * Check if a given object implements the UsageSnapshot interface.
 */
export function instanceOfUsageSnapshot(value: object): value is UsageSnapshot {
    if (!('asOf' in value) || value['asOf'] === undefined) return false;
    if (!('timeZone' in value) || value['timeZone'] === undefined) return false;
    if (!('attemptedMessagesToday' in value) || value['attemptedMessagesToday'] === undefined) return false;
    if (!('acceptedMessagesToday' in value) || value['acceptedMessagesToday'] === undefined) return false;
    if (!('rejectedMessagesToday' in value) || value['rejectedMessagesToday'] === undefined) return false;
    if (!('rejectionActive' in value) || value['rejectionActive'] === undefined) return false;
    if (!('unlimited' in value) || value['unlimited'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('enforcementMode' in value) || value['enforcementMode'] === undefined) return false;
    if (!('policy' in value) || value['policy'] === undefined) return false;
    if (!('today' in value) || value['today'] === undefined) return false;
    if (!('dailyUsage' in value) || value['dailyUsage'] === undefined) return false;
    if (!('todayByPartner' in value) || value['todayByPartner'] === undefined) return false;
    if (!('todayByHour' in value) || value['todayByHour'] === undefined) return false;
    if (!('signals' in value) || value['signals'] === undefined) return false;
    return true;
}

export function UsageSnapshotFromJSON(json: any): UsageSnapshot {
    return UsageSnapshotFromJSONTyped(json, false);
}

export function UsageSnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsageSnapshot {
    if (json == null) {
        return json;
    }
    return {

        'asOf': json['asOf'],
        'timeZone': json['timeZone'],
        'planCode': json['planCode'] === undefined ? undefined : json['planCode'] === null ? null : json['planCode'],
        'dailyLimit': json['dailyLimit'] === undefined ? undefined : json['dailyLimit'] === null ? null : json['dailyLimit'],
        'warningThreshold': json['warningThreshold'] === undefined ? undefined : json['warningThreshold'] === null ? null : json['warningThreshold'],
        'rejectionThreshold': json['rejectionThreshold'] === undefined ? undefined : json['rejectionThreshold'] === null ? null : json['rejectionThreshold'],
        'attemptedMessagesToday': json['attemptedMessagesToday'],
        'acceptedMessagesToday': json['acceptedMessagesToday'],
        'rejectedMessagesToday': json['rejectedMessagesToday'],
        'quarantineRetentionDays': json['quarantineRetentionDays'] === undefined ? undefined : json['quarantineRetentionDays'] === null ? null : json['quarantineRetentionDays'],
        'rejectionActive': json['rejectionActive'],
        'unlimited': json['unlimited'],
        'status': json['status'],
        'enforcementMode': json['enforcementMode'],
        'policy': json['policy'],
        'today': UsageDayFromJSON(json['today']),
        'dailyUsage': ((json['dailyUsage'] as Array<any>).map(UsageDayFromJSON)),
        'todayByPartner': ((json['todayByPartner'] as Array<any>).map(UsagePartnerBreakdownFromJSON)),
        'todayByHour': ((json['todayByHour'] as Array<any>).map(UsageHourFromJSON)),
        'signals': UsageSignalsFromJSON(json['signals']),
    };
}

export function UsageSnapshotToJSON(json: any): UsageSnapshot {
    return UsageSnapshotToJSONTyped(json, false);
}

export function UsageSnapshotToJSONTyped(value?: UsageSnapshot | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'asOf': value['asOf'],
        'timeZone': value['timeZone'],
        'planCode': value['planCode'],
        'dailyLimit': value['dailyLimit'],
        'warningThreshold': value['warningThreshold'],
        'rejectionThreshold': value['rejectionThreshold'],
        'attemptedMessagesToday': value['attemptedMessagesToday'],
        'acceptedMessagesToday': value['acceptedMessagesToday'],
        'rejectedMessagesToday': value['rejectedMessagesToday'],
        'quarantineRetentionDays': value['quarantineRetentionDays'],
        'rejectionActive': value['rejectionActive'],
        'unlimited': value['unlimited'],
        'status': value['status'],
        'enforcementMode': value['enforcementMode'],
        'policy': value['policy'],
        'today': UsageDayToJSON(value['today']),
        'dailyUsage': ((value['dailyUsage'] as Array<any>).map(UsageDayToJSON)),
        'todayByPartner': ((value['todayByPartner'] as Array<any>).map(UsagePartnerBreakdownToJSON)),
        'todayByHour': ((value['todayByHour'] as Array<any>).map(UsageHourToJSON)),
        'signals': UsageSignalsToJSON(value['signals']),
    };
}
