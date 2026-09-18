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
 * Exact identity and canonical content hash returned by Publish or the scenario catalog. Apply fails closed if any part differs.
 * @export
 * @interface ConfigurationScenarioBindingDefinitionReference
 */
export interface ConfigurationScenarioBindingDefinitionReference {
    /**
     * Lowercase namespace of the published ScenarioDefinition.
     * @type {string}
     * @memberof ConfigurationScenarioBindingDefinitionReference
     */
    namespace: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioBindingDefinitionReference
     */
    key: string;
    /**
     * Exact published definition version.
     * @type {string}
     * @memberof ConfigurationScenarioBindingDefinitionReference
     */
    version: string;
    /**
     * Lowercase SHA-256 digest of the canonical published definition.
     * @type {string}
     * @memberof ConfigurationScenarioBindingDefinitionReference
     */
    contentSha256: string;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingDefinitionReference interface.
 */
export function instanceOfConfigurationScenarioBindingDefinitionReference(value: object): value is ConfigurationScenarioBindingDefinitionReference {
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingDefinitionReferenceFromJSON(json: any): ConfigurationScenarioBindingDefinitionReference {
    return ConfigurationScenarioBindingDefinitionReferenceFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingDefinitionReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingDefinitionReference {
    if (json == null) {
        return json;
    }
    return {

        'namespace': json['namespace'],
        'key': json['key'],
        'version': json['version'],
        'contentSha256': json['contentSha256'],
    };
}

export function ConfigurationScenarioBindingDefinitionReferenceToJSON(json: any): ConfigurationScenarioBindingDefinitionReference {
    return ConfigurationScenarioBindingDefinitionReferenceToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingDefinitionReferenceToJSONTyped(value?: ConfigurationScenarioBindingDefinitionReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'namespace': value['namespace'],
        'key': value['key'],
        'version': value['version'],
        'contentSha256': value['contentSha256'],
    };
}
