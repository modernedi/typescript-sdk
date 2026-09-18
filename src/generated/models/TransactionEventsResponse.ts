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
import type { TransactionEvent } from './TransactionEvent.js';
import {
    TransactionEventFromJSON,
    TransactionEventFromJSONTyped,
    TransactionEventToJSON,
    TransactionEventToJSONTyped,
} from './TransactionEvent.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Chronological operational timeline for one transaction and its acknowledgments.
 * @export
 * @interface TransactionEventsResponse
 */
export interface TransactionEventsResponse {
    /**
     * Always `true`; unknown transactions or authorization failures use an error response.
     * @type {boolean}
     * @memberof TransactionEventsResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionEventsResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * Derived transaction, mapping, delivery, MDN, and acknowledgment events in chronological order.
     * @type {Array<TransactionEvent>}
     * @memberof TransactionEventsResponse
     */
    events: Array<TransactionEvent>;
}



/**
 * Check if a given object implements the TransactionEventsResponse interface.
 */
export function instanceOfTransactionEventsResponse(value: object): value is TransactionEventsResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('events' in value) || value['events'] === undefined) return false;
    return true;
}

export function TransactionEventsResponseFromJSON(json: any): TransactionEventsResponse {
    return TransactionEventsResponseFromJSONTyped(json, false);
}

export function TransactionEventsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionEventsResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'events': ((json['events'] as Array<any>).map(TransactionEventFromJSON)),
    };
}

export function TransactionEventsResponseToJSON(json: any): TransactionEventsResponse {
    return TransactionEventsResponseToJSONTyped(json, false);
}

export function TransactionEventsResponseToJSONTyped(value?: TransactionEventsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'events': ((value['events'] as Array<any>).map(TransactionEventToJSON)),
    };
}
