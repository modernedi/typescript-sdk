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
import type { TransactionImplementationAcknowledgmentMdnMetadata } from './TransactionImplementationAcknowledgmentMdnMetadata.js';
import {
    TransactionImplementationAcknowledgmentMdnMetadataFromJSON,
    TransactionImplementationAcknowledgmentMdnMetadataFromJSONTyped,
    TransactionImplementationAcknowledgmentMdnMetadataToJSON,
    TransactionImplementationAcknowledgmentMdnMetadataToJSONTyped,
} from './TransactionImplementationAcknowledgmentMdnMetadata.js';

/**
 * MDN sent or received for the X12 999 itself.
 * @export
 * @interface TransactionImplementationAcknowledgmentMdnEvent
 */
export interface TransactionImplementationAcknowledgmentMdnEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentMdnEvent
     */
    id: string;
    /**
     * Indicates whether ModernEDI sent or received the MDN for the X12 999.
     * @type {TransactionImplementationAcknowledgmentMdnEventTypeEnum}
     * @memberof TransactionImplementationAcknowledgmentMdnEvent
     */
    type: TransactionImplementationAcknowledgmentMdnEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentMdnEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentMdnEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionImplementationAcknowledgmentMdnMetadata}
     * @memberof TransactionImplementationAcknowledgmentMdnEvent
     */
    details: TransactionImplementationAcknowledgmentMdnMetadata;
}


/**
 * @export
 */
export const TransactionImplementationAcknowledgmentMdnEventTypeEnum = {
    ImplementationAckMdnSent: 'implementation_ack.mdn_sent',
    ImplementationAckMdnReceived: 'implementation_ack.mdn_received',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentMdnEventTypeEnum = typeof TransactionImplementationAcknowledgmentMdnEventTypeEnum[keyof typeof TransactionImplementationAcknowledgmentMdnEventTypeEnum];


/**
 * Check if a given object implements the TransactionImplementationAcknowledgmentMdnEvent interface.
 */
export function instanceOfTransactionImplementationAcknowledgmentMdnEvent(value: object): value is TransactionImplementationAcknowledgmentMdnEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionImplementationAcknowledgmentMdnEventFromJSON(json: any): TransactionImplementationAcknowledgmentMdnEvent {
    return TransactionImplementationAcknowledgmentMdnEventFromJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentMdnEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionImplementationAcknowledgmentMdnEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': TransactionImplementationAcknowledgmentMdnMetadataFromJSON(json['details']),
    };
}

export function TransactionImplementationAcknowledgmentMdnEventToJSON(json: any): TransactionImplementationAcknowledgmentMdnEvent {
    return TransactionImplementationAcknowledgmentMdnEventToJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentMdnEventToJSONTyped(value?: TransactionImplementationAcknowledgmentMdnEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': TransactionImplementationAcknowledgmentMdnMetadataToJSON(value['details']),
    };
}
