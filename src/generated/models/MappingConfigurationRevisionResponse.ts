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
import type { MappingConfigurationSnapshot } from './MappingConfigurationSnapshot.js';
import {
    MappingConfigurationSnapshotFromJSON,
    MappingConfigurationSnapshotFromJSONTyped,
    MappingConfigurationSnapshotToJSON,
    MappingConfigurationSnapshotToJSONTyped,
} from './MappingConfigurationSnapshot.js';
import type { MappingConfigurationRevisionDetail } from './MappingConfigurationRevisionDetail.js';
import {
    MappingConfigurationRevisionDetailFromJSON,
    MappingConfigurationRevisionDetailFromJSONTyped,
    MappingConfigurationRevisionDetailToJSON,
    MappingConfigurationRevisionDetailToJSONTyped,
} from './MappingConfigurationRevisionDetail.js';

/**
 * Successful response containing one immutable historical mapping-configuration revision and its complete stored configuration.
 * @export
 * @interface MappingConfigurationRevisionResponse
 */
export interface MappingConfigurationRevisionResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof MappingConfigurationRevisionResponse
     */
    success: boolean;
    /**
     *
     * @type {MappingConfigurationRevisionDetail}
     * @memberof MappingConfigurationRevisionResponse
     */
    revision: MappingConfigurationRevisionDetail;
    /**
     *
     * @type {MappingConfigurationSnapshot}
     * @memberof MappingConfigurationRevisionResponse
     */
    mappingConfiguration: MappingConfigurationSnapshot;
}

/**
 * Check if a given object implements the MappingConfigurationRevisionResponse interface.
 */
export function instanceOfMappingConfigurationRevisionResponse(value: object): value is MappingConfigurationRevisionResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('mappingConfiguration' in value) || value['mappingConfiguration'] === undefined) return false;
    return true;
}

export function MappingConfigurationRevisionResponseFromJSON(json: any): MappingConfigurationRevisionResponse {
    return MappingConfigurationRevisionResponseFromJSONTyped(json, false);
}

export function MappingConfigurationRevisionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingConfigurationRevisionResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'revision': MappingConfigurationRevisionDetailFromJSON(json['revision']),
        'mappingConfiguration': MappingConfigurationSnapshotFromJSON(json['mappingConfiguration']),
    };
}

export function MappingConfigurationRevisionResponseToJSON(json: any): MappingConfigurationRevisionResponse {
    return MappingConfigurationRevisionResponseToJSONTyped(json, false);
}

export function MappingConfigurationRevisionResponseToJSONTyped(value?: MappingConfigurationRevisionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'revision': MappingConfigurationRevisionDetailToJSON(value['revision']),
        'mappingConfiguration': MappingConfigurationSnapshotToJSON(value['mappingConfiguration']),
    };
}
