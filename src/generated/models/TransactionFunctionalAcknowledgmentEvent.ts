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
import type { TransactionFunctionalAcknowledgmentEventDetails } from './TransactionFunctionalAcknowledgmentEventDetails.js';
import {
    TransactionFunctionalAcknowledgmentEventDetailsFromJSON,
    TransactionFunctionalAcknowledgmentEventDetailsFromJSONTyped,
    TransactionFunctionalAcknowledgmentEventDetailsToJSON,
    TransactionFunctionalAcknowledgmentEventDetailsToJSONTyped,
} from './TransactionFunctionalAcknowledgmentEventDetails.js';

/**
 * X12 997 sent or received with the exact outcome selected for this transaction.
 * @export
 * @interface TransactionFunctionalAcknowledgmentEvent
 */
export interface TransactionFunctionalAcknowledgmentEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentEvent
     */
    id: string;
    /**
     * Indicates whether ModernEDI sent or received the X12 997.
     * @type {TransactionFunctionalAcknowledgmentEventTypeEnum}
     * @memberof TransactionFunctionalAcknowledgmentEvent
     */
    type: TransactionFunctionalAcknowledgmentEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionFunctionalAcknowledgmentEventDetails}
     * @memberof TransactionFunctionalAcknowledgmentEvent
     */
    details: TransactionFunctionalAcknowledgmentEventDetails;
}


/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentEventTypeEnum = {
    FunctionalAckSent: 'functional_ack.sent',
    FunctionalAckReceived: 'functional_ack.received',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentEventTypeEnum = typeof TransactionFunctionalAcknowledgmentEventTypeEnum[keyof typeof TransactionFunctionalAcknowledgmentEventTypeEnum];


/**
 * Check if a given object implements the TransactionFunctionalAcknowledgmentEvent interface.
 */
export function instanceOfTransactionFunctionalAcknowledgmentEvent(value: object): value is TransactionFunctionalAcknowledgmentEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionFunctionalAcknowledgmentEventFromJSON(json: any): TransactionFunctionalAcknowledgmentEvent {
    return TransactionFunctionalAcknowledgmentEventFromJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFunctionalAcknowledgmentEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': TransactionFunctionalAcknowledgmentEventDetailsFromJSON(json['details']),
    };
}

export function TransactionFunctionalAcknowledgmentEventToJSON(json: any): TransactionFunctionalAcknowledgmentEvent {
    return TransactionFunctionalAcknowledgmentEventToJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentEventToJSONTyped(value?: TransactionFunctionalAcknowledgmentEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': TransactionFunctionalAcknowledgmentEventDetailsToJSON(value['details']),
    };
}
