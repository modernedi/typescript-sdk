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
import type { OutboundBusinessKeyValue } from './OutboundBusinessKeyValue.js';
import {
    OutboundBusinessKeyValueFromJSON,
    OutboundBusinessKeyValueFromJSONTyped,
    OutboundBusinessKeyValueToJSON,
    OutboundBusinessKeyValueToJSONTyped,
} from './OutboundBusinessKeyValue.js';

/**
 *
 * @export
 * @interface OutboundBusinessKey
 */
export interface OutboundBusinessKey {
    /**
     * Stable business-key name, for example `invoiceNumber`, `shipmentId`, or `bolNumber`.
     * @type {string}
     * @memberof OutboundBusinessKey
     */
    name: string;
    /**
     *
     * @type {OutboundBusinessKeyValue}
     * @memberof OutboundBusinessKey
     */
    value: OutboundBusinessKeyValue;
}

/**
 * Check if a given object implements the OutboundBusinessKey interface.
 */
export function instanceOfOutboundBusinessKey(value: object): value is OutboundBusinessKey {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function OutboundBusinessKeyFromJSON(json: any): OutboundBusinessKey {
    return OutboundBusinessKeyFromJSONTyped(json, false);
}

export function OutboundBusinessKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutboundBusinessKey {
    if (json == null) {
        return json;
    }
    return {

        'name': json['name'],
        'value': OutboundBusinessKeyValueFromJSON(json['value']),
    };
}

export function OutboundBusinessKeyToJSON(json: any): OutboundBusinessKey {
    return OutboundBusinessKeyToJSONTyped(json, false);
}

export function OutboundBusinessKeyToJSONTyped(value?: OutboundBusinessKey | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'name': value['name'],
        'value': OutboundBusinessKeyValueToJSON(value['value']),
    };
}
