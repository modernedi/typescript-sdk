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
import type { TransactionTimelineSummary } from './TransactionTimelineSummary.js';
import {
    TransactionTimelineSummaryFromJSON,
    TransactionTimelineSummaryFromJSONTyped,
    TransactionTimelineSummaryToJSON,
    TransactionTimelineSummaryToJSONTyped,
} from './TransactionTimelineSummary.js';

/**
 * Initial transaction activity or an outbound reply linked to the selected transaction.
 * @export
 * @interface TransactionLifecycleEvent
 */
export interface TransactionLifecycleEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionLifecycleEvent
     */
    id: string;
    /**
     * Distinguishes the original inbound/outbound transaction from a linked outbound reply.
     * @type {TransactionLifecycleEventTypeEnum}
     * @memberof TransactionLifecycleEvent
     */
    type: TransactionLifecycleEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionLifecycleEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionLifecycleEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionTimelineSummary}
     * @memberof TransactionLifecycleEvent
     */
    details: TransactionTimelineSummary;
}


/**
 * @export
 */
export const TransactionLifecycleEventTypeEnum = {
    TransactionReceived: 'transaction.received',
    TransactionSent: 'transaction.sent',
    ReplySent: 'reply.sent',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionLifecycleEventTypeEnum = typeof TransactionLifecycleEventTypeEnum[keyof typeof TransactionLifecycleEventTypeEnum];


/**
 * Check if a given object implements the TransactionLifecycleEvent interface.
 */
export function instanceOfTransactionLifecycleEvent(value: object): value is TransactionLifecycleEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionLifecycleEventFromJSON(json: any): TransactionLifecycleEvent {
    return TransactionLifecycleEventFromJSONTyped(json, false);
}

export function TransactionLifecycleEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionLifecycleEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': TransactionTimelineSummaryFromJSON(json['details']),
    };
}

export function TransactionLifecycleEventToJSON(json: any): TransactionLifecycleEvent {
    return TransactionLifecycleEventToJSONTyped(json, false);
}

export function TransactionLifecycleEventToJSONTyped(value?: TransactionLifecycleEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': TransactionTimelineSummaryToJSON(value['details']),
    };
}
