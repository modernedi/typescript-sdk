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
import type { MappingConfiguration } from './MappingConfiguration.js';
import {
    MappingConfigurationFromJSON,
    MappingConfigurationFromJSONTyped,
    MappingConfigurationToJSON,
    MappingConfigurationToJSONTyped,
} from './MappingConfiguration.js';

/**
 * Successful response containing the workspace's current published mapping configurations.
 * @export
 * @interface MappingListResponse
 */
export interface MappingListResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof MappingListResponse
     */
    success: boolean;
    /**
     * Current published mapping configurations, including source text, output contract, and ETags.
     * @type {Array<MappingConfiguration>}
     * @memberof MappingListResponse
     */
    mappings: Array<MappingConfiguration>;
}

/**
 * Check if a given object implements the MappingListResponse interface.
 */
export function instanceOfMappingListResponse(value: object): value is MappingListResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('mappings' in value) || value['mappings'] === undefined) return false;
    return true;
}

export function MappingListResponseFromJSON(json: any): MappingListResponse {
    return MappingListResponseFromJSONTyped(json, false);
}

export function MappingListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingListResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'mappings': ((json['mappings'] as Array<any>).map(MappingConfigurationFromJSON)),
    };
}

export function MappingListResponseToJSON(json: any): MappingListResponse {
    return MappingListResponseToJSONTyped(json, false);
}

export function MappingListResponseToJSONTyped(value?: MappingListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'mappings': ((value['mappings'] as Array<any>).map(MappingConfigurationToJSON)),
    };
}
