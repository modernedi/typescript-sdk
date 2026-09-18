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
/**
 *
 * @export
 * @interface TransactionEventBase
 */
export interface TransactionEventBase {
    /**
     * Stable event identifier within this transaction timeline.
     * @type {string}
     * @memberof TransactionEventBase
     */
    id: string;
    /**
     * Machine-readable discriminator for the concrete `details` schema.
     * @type {string}
     * @memberof TransactionEventBase
     */
    type: string;
    /**
     * Customer-readable event title suitable for an operator timeline.
     * @type {string}
     * @memberof TransactionEventBase
     */
    label: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionEventBase
     */
    timestamp: string | null;
    /**
     * Event-specific structured context selected by `type`.
     * @type {object}
     * @memberof TransactionEventBase
     */
    details: object;
}

/**
 * Check if a given object implements the TransactionEventBase interface.
 */
export function instanceOfTransactionEventBase(value: object): value is TransactionEventBase {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionEventBaseFromJSON(json: any): TransactionEventBase {
    return TransactionEventBaseFromJSONTyped(json, false);
}

export function TransactionEventBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionEventBase {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'timestamp': json['timestamp'],
        'details': json['details'],
    };
}

export function TransactionEventBaseToJSON(json: any): TransactionEventBase {
    return TransactionEventBaseToJSONTyped(json, false);
}

export function TransactionEventBaseToJSONTyped(value?: TransactionEventBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'timestamp': value['timestamp'],
        'details': value['details'],
    };
}
