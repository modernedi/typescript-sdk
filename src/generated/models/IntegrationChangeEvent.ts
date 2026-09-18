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
import type { IntegrationChangeField } from './IntegrationChangeField.js';
import {
    IntegrationChangeFieldFromJSON,
    IntegrationChangeFieldFromJSONTyped,
    IntegrationChangeFieldToJSON,
    IntegrationChangeFieldToJSONTyped,
} from './IntegrationChangeField.js';
import type { IntegrationChangeTransactionReference } from './IntegrationChangeTransactionReference.js';
import {
    IntegrationChangeTransactionReferenceFromJSON,
    IntegrationChangeTransactionReferenceFromJSONTyped,
    IntegrationChangeTransactionReferenceToJSON,
    IntegrationChangeTransactionReferenceToJSONTyped,
} from './IntegrationChangeTransactionReference.js';

/**
 *
 * @export
 * @interface IntegrationChangeEvent
 */
export interface IntegrationChangeEvent {
    /**
     * Opaque event identifier for logging and deduplication; ordering comes from the cursor.
     * @type {string}
     * @memberof IntegrationChangeEvent
     */
    eventId: string;
    /**
     * Whether reconciliation first observed the transaction or detected a later state change.
     * @type {IntegrationChangeEventTypeEnum}
     * @memberof IntegrationChangeEvent
     */
    type: IntegrationChangeEventTypeEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof IntegrationChangeEvent
     */
    observedAt: string;
    /**
     *
     * @type {IntegrationChangeTransactionReference}
     * @memberof IntegrationChangeEvent
     */
    transaction: IntegrationChangeTransactionReference;
    /**
     * Public state components that changed; refetch transaction detail for their current values.
     * @type {Set<IntegrationChangeField>}
     * @memberof IntegrationChangeEvent
     */
    changedFields: Set<IntegrationChangeField>;
}


/**
 * @export
 */
export const IntegrationChangeEventTypeEnum = {
    TransactionCreated: 'transaction.created',
    TransactionChanged: 'transaction.changed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type IntegrationChangeEventTypeEnum = typeof IntegrationChangeEventTypeEnum[keyof typeof IntegrationChangeEventTypeEnum];


/**
 * Check if a given object implements the IntegrationChangeEvent interface.
 */
export function instanceOfIntegrationChangeEvent(value: object): value is IntegrationChangeEvent {
    if (!('eventId' in value) || value['eventId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('observedAt' in value) || value['observedAt'] === undefined) return false;
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    if (!('changedFields' in value) || value['changedFields'] === undefined) return false;
    return true;
}

export function IntegrationChangeEventFromJSON(json: any): IntegrationChangeEvent {
    return IntegrationChangeEventFromJSONTyped(json, false);
}

export function IntegrationChangeEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationChangeEvent {
    if (json == null) {
        return json;
    }
    return {

        'eventId': json['eventId'],
        'type': json['type'],
        'observedAt': json['observedAt'],
        'transaction': IntegrationChangeTransactionReferenceFromJSON(json['transaction']),
        'changedFields': (new Set((json['changedFields'] as Array<any>).map(IntegrationChangeFieldFromJSON))),
    };
}

export function IntegrationChangeEventToJSON(json: any): IntegrationChangeEvent {
    return IntegrationChangeEventToJSONTyped(json, false);
}

export function IntegrationChangeEventToJSONTyped(value?: IntegrationChangeEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'eventId': value['eventId'],
        'type': value['type'],
        'observedAt': value['observedAt'],
        'transaction': IntegrationChangeTransactionReferenceToJSON(value['transaction']),
        'changedFields': (Array.from(value['changedFields'] as Set<any>).map(IntegrationChangeFieldToJSON)),
    };
}
