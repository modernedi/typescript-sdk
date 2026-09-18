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
 * X12 implementation versions available to validation and mapping tools.
 * @export
 * @interface X12VersionsResponse
 */
export interface X12VersionsResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof X12VersionsResponse
     */
    success: boolean;
    /**
     * Supported numeric X12 version identifiers accepted by reference endpoints.
     * @type {Array<string>}
     * @memberof X12VersionsResponse
     */
    versions: Array<string>;
}

/**
 * Check if a given object implements the X12VersionsResponse interface.
 */
export function instanceOfX12VersionsResponse(value: object): value is X12VersionsResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('versions' in value) || value['versions'] === undefined) return false;
    return true;
}

export function X12VersionsResponseFromJSON(json: any): X12VersionsResponse {
    return X12VersionsResponseFromJSONTyped(json, false);
}

export function X12VersionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12VersionsResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'versions': json['versions'],
    };
}

export function X12VersionsResponseToJSON(json: any): X12VersionsResponse {
    return X12VersionsResponseToJSONTyped(json, false);
}

export function X12VersionsResponseToJSONTyped(value?: X12VersionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'versions': value['versions'],
    };
}
