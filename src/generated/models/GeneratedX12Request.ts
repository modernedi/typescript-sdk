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
import type { OutboundBusinessKey } from './OutboundBusinessKey.js';
import {
    OutboundBusinessKeyFromJSON,
    OutboundBusinessKeyFromJSONTyped,
    OutboundBusinessKeyToJSON,
    OutboundBusinessKeyToJSONTyped,
} from './OutboundBusinessKey.js';

/**
 *
 * @export
 * @interface GeneratedX12Request
 */
export interface GeneratedX12Request {
    /**
     * Complete X12 interchange to validate and send without mapping.
     * @type {string}
     * @memberof GeneratedX12Request
     */
    x12: string;
    /**
     * Optional business identifier stored for transaction search and reconciliation.
     * @type {OutboundBusinessKey}
     * @memberof GeneratedX12Request
     */
    businessKey?: OutboundBusinessKey;
}

/**
 * Check if a given object implements the GeneratedX12Request interface.
 */
export function instanceOfGeneratedX12Request(value: object): value is GeneratedX12Request {
    if (!('x12' in value) || value['x12'] === undefined) return false;
    return true;
}

export function GeneratedX12RequestFromJSON(json: any): GeneratedX12Request {
    return GeneratedX12RequestFromJSONTyped(json, false);
}

export function GeneratedX12RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneratedX12Request {
    if (json == null) {
        return json;
    }
    return {

        'x12': json['x12'],
        'businessKey': json['businessKey'] == null ? undefined : OutboundBusinessKeyFromJSON(json['businessKey']),
    };
}

export function GeneratedX12RequestToJSON(json: any): GeneratedX12Request {
    return GeneratedX12RequestToJSONTyped(json, false);
}

export function GeneratedX12RequestToJSONTyped(value?: GeneratedX12Request | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'x12': value['x12'],
        'businessKey': OutboundBusinessKeyToJSON(value['businessKey']),
    };
}
