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
 * @interface X12ValidationRequest
 */
export interface X12ValidationRequest {
    /**
     * Complete X12 interchange to parse and validate.
     * @type {string}
     * @memberof X12ValidationRequest
     */
    x12: string;
}

/**
 * Check if a given object implements the X12ValidationRequest interface.
 */
export function instanceOfX12ValidationRequest(value: object): value is X12ValidationRequest {
    if (!('x12' in value) || value['x12'] === undefined) return false;
    return true;
}

export function X12ValidationRequestFromJSON(json: any): X12ValidationRequest {
    return X12ValidationRequestFromJSONTyped(json, false);
}

export function X12ValidationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12ValidationRequest {
    if (json == null) {
        return json;
    }
    return {

        'x12': json['x12'],
    };
}

export function X12ValidationRequestToJSON(json: any): X12ValidationRequest {
    return X12ValidationRequestToJSONTyped(json, false);
}

export function X12ValidationRequestToJSONTyped(value?: X12ValidationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'x12': value['x12'],
    };
}
