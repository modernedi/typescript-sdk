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
import type { MappedOutputBulkAckRequestAcksInner } from './MappedOutputBulkAckRequestAcksInner.js';
import {
    MappedOutputBulkAckRequestAcksInnerFromJSON,
    MappedOutputBulkAckRequestAcksInnerFromJSONTyped,
    MappedOutputBulkAckRequestAcksInnerToJSON,
    MappedOutputBulkAckRequestAcksInnerToJSONTyped,
} from './MappedOutputBulkAckRequestAcksInner.js';

/**
 *
 * @export
 * @interface MappedOutputBulkAckRequest
 */
export interface MappedOutputBulkAckRequest {
    /**
     * One to 100 mapped-output id and receipt-handle pairs from the selected environment. The batch is atomic; if any pair is invalid, none are acknowledged.
     * @type {Array<MappedOutputBulkAckRequestAcksInner>}
     * @memberof MappedOutputBulkAckRequest
     */
    acks: Array<MappedOutputBulkAckRequestAcksInner>;
}

/**
 * Check if a given object implements the MappedOutputBulkAckRequest interface.
 */
export function instanceOfMappedOutputBulkAckRequest(value: object): value is MappedOutputBulkAckRequest {
    if (!('acks' in value) || value['acks'] === undefined) return false;
    return true;
}

export function MappedOutputBulkAckRequestFromJSON(json: any): MappedOutputBulkAckRequest {
    return MappedOutputBulkAckRequestFromJSONTyped(json, false);
}

export function MappedOutputBulkAckRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputBulkAckRequest {
    if (json == null) {
        return json;
    }
    return {

        'acks': ((json['acks'] as Array<any>).map(MappedOutputBulkAckRequestAcksInnerFromJSON)),
    };
}

export function MappedOutputBulkAckRequestToJSON(json: any): MappedOutputBulkAckRequest {
    return MappedOutputBulkAckRequestToJSONTyped(json, false);
}

export function MappedOutputBulkAckRequestToJSONTyped(value?: MappedOutputBulkAckRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'acks': ((value['acks'] as Array<any>).map(MappedOutputBulkAckRequestAcksInnerToJSON)),
    };
}
