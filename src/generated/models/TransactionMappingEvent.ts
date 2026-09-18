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
import type { TransactionMappingAttempt } from './TransactionMappingAttempt.js';
import {
    TransactionMappingAttemptFromJSON,
    TransactionMappingAttemptFromJSONTyped,
    TransactionMappingAttemptToJSON,
    TransactionMappingAttemptToJSONTyped,
} from './TransactionMappingAttempt.js';

/**
 * Failed, successful, or recovered mapping execution.
 * @export
 * @interface TransactionMappingEvent
 */
export interface TransactionMappingEvent {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionMappingEvent
     */
    id: string;
    /**
     * Identifies whether the attempt failed, succeeded, or resolved an earlier failure.
     * @type {TransactionMappingEventTypeEnum}
     * @memberof TransactionMappingEvent
     */
    type: TransactionMappingEventTypeEnum;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionMappingEvent
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMappingEvent
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionMappingAttempt}
     * @memberof TransactionMappingEvent
     */
    details: TransactionMappingAttempt;
}


/**
 * @export
 */
export const TransactionMappingEventTypeEnum = {
    MappingFailed: 'mapping.failed',
    MappingSucceeded: 'mapping.succeeded',
    MappingRecovered: 'mapping.recovered',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappingEventTypeEnum = typeof TransactionMappingEventTypeEnum[keyof typeof TransactionMappingEventTypeEnum];


/**
 * Check if a given object implements the TransactionMappingEvent interface.
 */
export function instanceOfTransactionMappingEvent(value: object): value is TransactionMappingEvent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionMappingEventFromJSON(json: any): TransactionMappingEvent {
    return TransactionMappingEventFromJSONTyped(json, false);
}

export function TransactionMappingEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappingEvent {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': TransactionMappingAttemptFromJSON(json['details']),
    };
}

export function TransactionMappingEventToJSON(json: any): TransactionMappingEvent {
    return TransactionMappingEventToJSONTyped(json, false);
}

export function TransactionMappingEventToJSONTyped(value?: TransactionMappingEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': TransactionMappingAttemptToJSON(value['details']),
    };
}
