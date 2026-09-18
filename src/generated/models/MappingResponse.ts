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
 * Successful response containing one current mapping configuration.
 * @export
 * @interface MappingResponse
 */
export interface MappingResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof MappingResponse
     */
    success: boolean;
    /**
     *
     * @type {MappingConfiguration}
     * @memberof MappingResponse
     */
    mapping: MappingConfiguration;
}

/**
 * Check if a given object implements the MappingResponse interface.
 */
export function instanceOfMappingResponse(value: object): value is MappingResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('mapping' in value) || value['mapping'] === undefined) return false;
    return true;
}

export function MappingResponseFromJSON(json: any): MappingResponse {
    return MappingResponseFromJSONTyped(json, false);
}

export function MappingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'mapping': MappingConfigurationFromJSON(json['mapping']),
    };
}

export function MappingResponseToJSON(json: any): MappingResponse {
    return MappingResponseToJSONTyped(json, false);
}

export function MappingResponseToJSONTyped(value?: MappingResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'mapping': MappingConfigurationToJSON(value['mapping']),
    };
}
