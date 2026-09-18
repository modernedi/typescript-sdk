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
 * Editable identity and display name for this binding draft. Apply creates an immutable binding revision.
 * @export
 * @interface ConfigurationScenarioBindingMetadata
 */
export interface ConfigurationScenarioBindingMetadata {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioBindingMetadata
     */
    id: string;
    /**
     * Human-readable binding name. The server trims leading and trailing whitespace when canonicalizing.
     * @type {string}
     * @memberof ConfigurationScenarioBindingMetadata
     */
    name: string;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingMetadata interface.
 */
export function instanceOfConfigurationScenarioBindingMetadata(value: object): value is ConfigurationScenarioBindingMetadata {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingMetadataFromJSON(json: any): ConfigurationScenarioBindingMetadata {
    return ConfigurationScenarioBindingMetadataFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingMetadata {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'name': json['name'],
    };
}

export function ConfigurationScenarioBindingMetadataToJSON(json: any): ConfigurationScenarioBindingMetadata {
    return ConfigurationScenarioBindingMetadataToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingMetadataToJSONTyped(value?: ConfigurationScenarioBindingMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'name': value['name'],
    };
}
