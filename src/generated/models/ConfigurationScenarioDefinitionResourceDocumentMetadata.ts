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
 * @interface ConfigurationScenarioDefinitionResourceDocumentMetadata
 */
export interface ConfigurationScenarioDefinitionResourceDocumentMetadata {
    /**
     * Stable resource key; retain it when copying configuration to another workspace.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionResourceDocumentMetadata
     */
    key: string;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionResourceDocumentMetadata interface.
 */
export function instanceOfConfigurationScenarioDefinitionResourceDocumentMetadata(value: object): value is ConfigurationScenarioDefinitionResourceDocumentMetadata {
    if (!('key' in value) || value['key'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionResourceDocumentMetadataFromJSON(json: any): ConfigurationScenarioDefinitionResourceDocumentMetadata {
    return ConfigurationScenarioDefinitionResourceDocumentMetadataFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionResourceDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionResourceDocumentMetadata {
    if (json == null) {
        return json;
    }
    return {

        'key': json['key'],
    };
}

export function ConfigurationScenarioDefinitionResourceDocumentMetadataToJSON(json: any): ConfigurationScenarioDefinitionResourceDocumentMetadata {
    return ConfigurationScenarioDefinitionResourceDocumentMetadataToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionResourceDocumentMetadataToJSONTyped(value?: ConfigurationScenarioDefinitionResourceDocumentMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'key': value['key'],
    };
}
