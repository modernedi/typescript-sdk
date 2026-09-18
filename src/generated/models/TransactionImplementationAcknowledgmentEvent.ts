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
import type { TransactionImplementationAcknowledgmentEventDetails } from './TransactionImplementationAcknowledgmentEventDetails.js';
import {
    TransactionImplementationAcknowledgmentEventDetailsFromJSON,
    TransactionImplementationAcknowledgmentEventDetailsFromJSONTyped,
    TransactionImplementationAcknowledgmentEventDetailsToJSON,
    TransactionImplementationAcknowledgmentEventDetailsToJSONTyped,
} from './TransactionImplementationAcknowledgmentEventDetails.js';

/**
 * X12 999 sent or received with the exact outcome selected for this transaction.
 * @export
 * @interface TransactionImplementationAcknowledgmentEvent
 */
export interface TransactionImplementationAcknowledgmentEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentEvent
     */
    id: string;
    /**
     * Indicates whether ModernEDI sent or received the X12 999.
     * @type {TransactionImplementationAcknowledgmentEventTypeEnum}
     * @memberof TransactionImplementationAcknowledgmentEvent
     */
    type: TransactionImplementationAcknowledgmentEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionImplementationAcknowledgmentEventDetails}
     * @memberof TransactionImplementationAcknowledgmentEvent
     */
    details: TransactionImplementationAcknowledgmentEventDetails;
}


/**
 * @export
 */
export const TransactionImplementationAcknowledgmentEventTypeEnum = {
    ImplementationAckSent: 'implementation_ack.sent',
    ImplementationAckReceived: 'implementation_ack.received',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentEventTypeEnum = typeof TransactionImplementationAcknowledgmentEventTypeEnum[keyof typeof TransactionImplementationAcknowledgmentEventTypeEnum];


/**
 * Check if a given object implements the TransactionImplementationAcknowledgmentEvent interface.
 */
export function instanceOfTransactionImplementationAcknowledgmentEvent(value: object): value is TransactionImplementationAcknowledgmentEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionImplementationAcknowledgmentEventFromJSON(json: any): TransactionImplementationAcknowledgmentEvent {
    return TransactionImplementationAcknowledgmentEventFromJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionImplementationAcknowledgmentEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': TransactionImplementationAcknowledgmentEventDetailsFromJSON(json['details']),
    };
}

export function TransactionImplementationAcknowledgmentEventToJSON(json: any): TransactionImplementationAcknowledgmentEvent {
    return TransactionImplementationAcknowledgmentEventToJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentEventToJSONTyped(value?: TransactionImplementationAcknowledgmentEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': TransactionImplementationAcknowledgmentEventDetailsToJSON(value['details']),
    };
}
