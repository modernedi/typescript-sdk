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
import type { StoredTransactionMappedOutput } from './StoredTransactionMappedOutput.js';
import {
    StoredTransactionMappedOutputFromJSON,
    StoredTransactionMappedOutputFromJSONTyped,
    StoredTransactionMappedOutputToJSON,
    StoredTransactionMappedOutputToJSONTyped,
} from './StoredTransactionMappedOutput.js';

/**
 * Creation or managed-delivery lifecycle of one mapped output.
 * @export
 * @interface TransactionMappedOutputEvent
 */
export interface TransactionMappedOutputEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionMappedOutputEvent
     */
    id: string;
    /**
     * Identifies the exact creation or managed-delivery transition represented by this event.
     * @type {TransactionMappedOutputEventTypeEnum}
     * @memberof TransactionMappedOutputEvent
     */
    type: TransactionMappedOutputEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionMappedOutputEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMappedOutputEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {StoredTransactionMappedOutput}
     * @memberof TransactionMappedOutputEvent
     */
    details: StoredTransactionMappedOutput;
}


/**
 * @export
 */
export const TransactionMappedOutputEventTypeEnum = {
    MappedOutputCreated: 'mapped_output.created',
    MappedOutputAvailable: 'mapped_output.available',
    MappedOutputDelivered: 'mapped_output.delivered',
    MappedOutputRedelivered: 'mapped_output.redelivered',
    MappedOutputAttentionRequired: 'mapped_output.attention_required',
    MappedOutputAcknowledged: 'mapped_output.acknowledged',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappedOutputEventTypeEnum = typeof TransactionMappedOutputEventTypeEnum[keyof typeof TransactionMappedOutputEventTypeEnum];


/**
 * Check if a given object implements the TransactionMappedOutputEvent interface.
 */
export function instanceOfTransactionMappedOutputEvent(value: object): value is TransactionMappedOutputEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionMappedOutputEventFromJSON(json: any): TransactionMappedOutputEvent {
    return TransactionMappedOutputEventFromJSONTyped(json, false);
}

export function TransactionMappedOutputEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappedOutputEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': StoredTransactionMappedOutputFromJSON(json['details']),
    };
}

export function TransactionMappedOutputEventToJSON(json: any): TransactionMappedOutputEvent {
    return TransactionMappedOutputEventToJSONTyped(json, false);
}

export function TransactionMappedOutputEventToJSONTyped(value?: TransactionMappedOutputEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': StoredTransactionMappedOutputToJSON(value['details']),
    };
}
