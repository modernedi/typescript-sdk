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
import type { TransactionFunctionalAcknowledgmentMdnMetadata } from './TransactionFunctionalAcknowledgmentMdnMetadata.js';
import {
    TransactionFunctionalAcknowledgmentMdnMetadataFromJSON,
    TransactionFunctionalAcknowledgmentMdnMetadataFromJSONTyped,
    TransactionFunctionalAcknowledgmentMdnMetadataToJSON,
    TransactionFunctionalAcknowledgmentMdnMetadataToJSONTyped,
} from './TransactionFunctionalAcknowledgmentMdnMetadata.js';

/**
 * MDN sent or received for the X12 997 itself.
 * @export
 * @interface TransactionFunctionalAcknowledgmentMdnEvent
 */
export interface TransactionFunctionalAcknowledgmentMdnEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentMdnEvent
     */
    id: string;
    /**
     * Indicates whether ModernEDI sent or received the MDN for the X12 997.
     * @type {TransactionFunctionalAcknowledgmentMdnEventTypeEnum}
     * @memberof TransactionFunctionalAcknowledgmentMdnEvent
     */
    type: TransactionFunctionalAcknowledgmentMdnEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentMdnEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentMdnEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionFunctionalAcknowledgmentMdnMetadata}
     * @memberof TransactionFunctionalAcknowledgmentMdnEvent
     */
    details: TransactionFunctionalAcknowledgmentMdnMetadata;
}


/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentMdnEventTypeEnum = {
    FunctionalAckMdnSent: 'functional_ack.mdn_sent',
    FunctionalAckMdnReceived: 'functional_ack.mdn_received',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentMdnEventTypeEnum = typeof TransactionFunctionalAcknowledgmentMdnEventTypeEnum[keyof typeof TransactionFunctionalAcknowledgmentMdnEventTypeEnum];


/**
 * Check if a given object implements the TransactionFunctionalAcknowledgmentMdnEvent interface.
 */
export function instanceOfTransactionFunctionalAcknowledgmentMdnEvent(value: object): value is TransactionFunctionalAcknowledgmentMdnEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionFunctionalAcknowledgmentMdnEventFromJSON(json: any): TransactionFunctionalAcknowledgmentMdnEvent {
    return TransactionFunctionalAcknowledgmentMdnEventFromJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentMdnEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFunctionalAcknowledgmentMdnEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': TransactionFunctionalAcknowledgmentMdnMetadataFromJSON(json['details']),
    };
}

export function TransactionFunctionalAcknowledgmentMdnEventToJSON(json: any): TransactionFunctionalAcknowledgmentMdnEvent {
    return TransactionFunctionalAcknowledgmentMdnEventToJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentMdnEventToJSONTyped(value?: TransactionFunctionalAcknowledgmentMdnEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': TransactionFunctionalAcknowledgmentMdnMetadataToJSON(value['details']),
    };
}
