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
 * Portable release identity of the scenario definition used by an affected binding.
 * @export
 * @interface ConfigurationPlanScenarioDefinition
 */
export interface ConfigurationPlanScenarioDefinition {
    /**
     *
     * @type {string}
     * @memberof ConfigurationPlanScenarioDefinition
     */
    namespace: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationPlanScenarioDefinition
     */
    key: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationPlanScenarioDefinition
     */
    version: string;
}

/**
 * Check if a given object implements the ConfigurationPlanScenarioDefinition interface.
 */
export function instanceOfConfigurationPlanScenarioDefinition(value: object): value is ConfigurationPlanScenarioDefinition {
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ConfigurationPlanScenarioDefinitionFromJSON(json: any): ConfigurationPlanScenarioDefinition {
    return ConfigurationPlanScenarioDefinitionFromJSONTyped(json, false);
}

export function ConfigurationPlanScenarioDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanScenarioDefinition {
    if (json == null) {
        return json;
    }
    return {

        'namespace': json['namespace'],
        'key': json['key'],
        'version': json['version'],
    };
}

export function ConfigurationPlanScenarioDefinitionToJSON(json: any): ConfigurationPlanScenarioDefinition {
    return ConfigurationPlanScenarioDefinitionToJSONTyped(json, false);
}

export function ConfigurationPlanScenarioDefinitionToJSONTyped(value?: ConfigurationPlanScenarioDefinition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'namespace': value['namespace'],
        'key': value['key'],
        'version': value['version'],
    };
}
