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
import type { TransactionMdnEventDetails } from './TransactionMdnEventDetails.js';
import {
    TransactionMdnEventDetailsFromJSON,
    TransactionMdnEventDetailsFromJSONTyped,
    TransactionMdnEventDetailsToJSON,
    TransactionMdnEventDetailsToJSONTyped,
} from './TransactionMdnEventDetails.js';

/**
 * AS2 receipt waiting, overdue, sent, or received state.
 * @export
 * @interface TransactionMdnEvent
 */
export interface TransactionMdnEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionMdnEvent
     */
    id: string;
    /**
     * Identifies the waiting, overdue, sent, or received AS2 receipt transition.
     * @type {TransactionMdnEventTypeEnum}
     * @memberof TransactionMdnEvent
     */
    type: TransactionMdnEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionMdnEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMdnEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionMdnEventDetails}
     * @memberof TransactionMdnEvent
     */
    details: TransactionMdnEventDetails;
}


/**
 * @export
 */
export const TransactionMdnEventTypeEnum = {
    MdnPending: 'mdn.pending',
    MdnOverdue: 'mdn.overdue',
    MdnSent: 'mdn.sent',
    MdnReceived: 'mdn.received',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMdnEventTypeEnum = typeof TransactionMdnEventTypeEnum[keyof typeof TransactionMdnEventTypeEnum];


/**
 * Check if a given object implements the TransactionMdnEvent interface.
 */
export function instanceOfTransactionMdnEvent(value: object): value is TransactionMdnEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionMdnEventFromJSON(json: any): TransactionMdnEvent {
    return TransactionMdnEventFromJSONTyped(json, false);
}

export function TransactionMdnEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMdnEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': TransactionMdnEventDetailsFromJSON(json['details']),
    };
}

export function TransactionMdnEventToJSON(json: any): TransactionMdnEvent {
    return TransactionMdnEventToJSONTyped(json, false);
}

export function TransactionMdnEventToJSONTyped(value?: TransactionMdnEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': TransactionMdnEventDetailsToJSON(value['details']),
    };
}
