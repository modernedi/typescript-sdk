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
import type { TransactionTechnicalAcknowledgmentEventDetails } from './TransactionTechnicalAcknowledgmentEventDetails.js';
import {
    TransactionTechnicalAcknowledgmentEventDetailsFromJSON,
    TransactionTechnicalAcknowledgmentEventDetailsFromJSONTyped,
    TransactionTechnicalAcknowledgmentEventDetailsToJSON,
    TransactionTechnicalAcknowledgmentEventDetailsToJSONTyped,
} from './TransactionTechnicalAcknowledgmentEventDetails.js';

/**
 * X12 technical acknowledgment sent or received.
 * @export
 * @interface TransactionTechnicalAcknowledgmentEvent
 */
export interface TransactionTechnicalAcknowledgmentEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionTechnicalAcknowledgmentEvent
     */
    id: string;
    /**
     * Indicates whether ModernEDI sent or received the X12 technical acknowledgment.
     * @type {TransactionTechnicalAcknowledgmentEventTypeEnum}
     * @memberof TransactionTechnicalAcknowledgmentEvent
     */
    type: TransactionTechnicalAcknowledgmentEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionTechnicalAcknowledgmentEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionTechnicalAcknowledgmentEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionTechnicalAcknowledgmentEventDetails}
     * @memberof TransactionTechnicalAcknowledgmentEvent
     */
    details: TransactionTechnicalAcknowledgmentEventDetails;
}


/**
 * @export
 */
export const TransactionTechnicalAcknowledgmentEventTypeEnum = {
    TechnicalAckSent: 'technical_ack.sent',
    TechnicalAckReceived: 'technical_ack.received',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionTechnicalAcknowledgmentEventTypeEnum = typeof TransactionTechnicalAcknowledgmentEventTypeEnum[keyof typeof TransactionTechnicalAcknowledgmentEventTypeEnum];


/**
 * Check if a given object implements the TransactionTechnicalAcknowledgmentEvent interface.
 */
export function instanceOfTransactionTechnicalAcknowledgmentEvent(value: object): value is TransactionTechnicalAcknowledgmentEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionTechnicalAcknowledgmentEventFromJSON(json: any): TransactionTechnicalAcknowledgmentEvent {
    return TransactionTechnicalAcknowledgmentEventFromJSONTyped(json, false);
}

export function TransactionTechnicalAcknowledgmentEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionTechnicalAcknowledgmentEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': TransactionTechnicalAcknowledgmentEventDetailsFromJSON(json['details']),
    };
}

export function TransactionTechnicalAcknowledgmentEventToJSON(json: any): TransactionTechnicalAcknowledgmentEvent {
    return TransactionTechnicalAcknowledgmentEventToJSONTyped(json, false);
}

export function TransactionTechnicalAcknowledgmentEventToJSONTyped(value?: TransactionTechnicalAcknowledgmentEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': TransactionTechnicalAcknowledgmentEventDetailsToJSON(value['details']),
    };
}
