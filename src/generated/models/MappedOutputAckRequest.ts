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
 * @interface MappedOutputAckRequest
 */
export interface MappedOutputAckRequest {
    /**
     * Token from the latest poll response for this mapped output id.
     * @type {string}
     * @memberof MappedOutputAckRequest
     */
    receiptHandle: string;
}

/**
 * Check if a given object implements the MappedOutputAckRequest interface.
 */
export function instanceOfMappedOutputAckRequest(value: object): value is MappedOutputAckRequest {
    if (!('receiptHandle' in value) || value['receiptHandle'] === undefined) return false;
    return true;
}

export function MappedOutputAckRequestFromJSON(json: any): MappedOutputAckRequest {
    return MappedOutputAckRequestFromJSONTyped(json, false);
}

export function MappedOutputAckRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputAckRequest {
    if (json == null) {
        return json;
    }
    return {

        'receiptHandle': json['receiptHandle'],
    };
}

export function MappedOutputAckRequestToJSON(json: any): MappedOutputAckRequest {
    return MappedOutputAckRequestToJSONTyped(json, false);
}

export function MappedOutputAckRequestToJSONTyped(value?: MappedOutputAckRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'receiptHandle': value['receiptHandle'],
    };
}
