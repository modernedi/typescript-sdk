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
 * @interface ConfigurationResourceMetadata
 */
export interface ConfigurationResourceMetadata {
    /**
     * Stable portable identity for this resource.
     * @type {string}
     * @memberof ConfigurationResourceMetadata
     */
    key: string;
}

/**
 * Check if a given object implements the ConfigurationResourceMetadata interface.
 */
export function instanceOfConfigurationResourceMetadata(value: object): value is ConfigurationResourceMetadata {
    if (!('key' in value) || value['key'] === undefined) return false;
    return true;
}

export function ConfigurationResourceMetadataFromJSON(json: any): ConfigurationResourceMetadata {
    return ConfigurationResourceMetadataFromJSONTyped(json, false);
}

export function ConfigurationResourceMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationResourceMetadata {
    if (json == null) {
        return json;
    }
    return {

        'key': json['key'],
    };
}

export function ConfigurationResourceMetadataToJSON(json: any): ConfigurationResourceMetadata {
    return ConfigurationResourceMetadataToJSONTyped(json, false);
}

export function ConfigurationResourceMetadataToJSONTyped(value?: ConfigurationResourceMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'key': value['key'],
    };
}
