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
 * Immutable identity of a published definition. The identity tuple is namespace, key, and version; contentSha256 is computed when the definition is published.
 * @export
 * @interface ConfigurationScenarioDefinitionMetadata
 */
export interface ConfigurationScenarioDefinitionMetadata {
    /**
     * A lowercase, DNS-like ownership namespace.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionMetadata
     */
    namespace: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionMetadata
     */
    key: string;
    /**
     * A trim-exact artifact version with no control characters. This versions a published definition; it is separate from apiVersion.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionMetadata
     */
    version: string;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionMetadata interface.
 */
export function instanceOfConfigurationScenarioDefinitionMetadata(value: object): value is ConfigurationScenarioDefinitionMetadata {
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionMetadataFromJSON(json: any): ConfigurationScenarioDefinitionMetadata {
    return ConfigurationScenarioDefinitionMetadataFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionMetadata {
    if (json == null) {
        return json;
    }
    return {

        'namespace': json['namespace'],
        'key': json['key'],
        'version': json['version'],
    };
}

export function ConfigurationScenarioDefinitionMetadataToJSON(json: any): ConfigurationScenarioDefinitionMetadata {
    return ConfigurationScenarioDefinitionMetadataToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionMetadataToJSONTyped(value?: ConfigurationScenarioDefinitionMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'namespace': value['namespace'],
        'key': value['key'],
        'version': value['version'],
    };
}
