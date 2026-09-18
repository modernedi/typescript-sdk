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
import type { ConfigurationScenarioDefinitionAssuranceRequirement } from './ConfigurationScenarioDefinitionAssuranceRequirement.js';
import {
    ConfigurationScenarioDefinitionAssuranceRequirementFromJSON,
    ConfigurationScenarioDefinitionAssuranceRequirementFromJSONTyped,
    ConfigurationScenarioDefinitionAssuranceRequirementToJSON,
    ConfigurationScenarioDefinitionAssuranceRequirementToJSONTyped,
} from './ConfigurationScenarioDefinitionAssuranceRequirement.js';

/**
 * Operational evidence required for each occurrence of this step. Duplicate requirement types are rejected by the server.
 * @export
 * @interface ConfigurationScenarioDefinitionAssurance
 */
export interface ConfigurationScenarioDefinitionAssurance {
    /**
     *
     * @type {Array<ConfigurationScenarioDefinitionAssuranceRequirement>}
     * @memberof ConfigurationScenarioDefinitionAssurance
     */
    requirements: Array<ConfigurationScenarioDefinitionAssuranceRequirement>;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionAssurance interface.
 */
export function instanceOfConfigurationScenarioDefinitionAssurance(value: object): value is ConfigurationScenarioDefinitionAssurance {
    if (!('requirements' in value) || value['requirements'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionAssuranceFromJSON(json: any): ConfigurationScenarioDefinitionAssurance {
    return ConfigurationScenarioDefinitionAssuranceFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionAssuranceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionAssurance {
    if (json == null) {
        return json;
    }
    return {

        'requirements': ((json['requirements'] as Array<any>).map(ConfigurationScenarioDefinitionAssuranceRequirementFromJSON)),
    };
}

export function ConfigurationScenarioDefinitionAssuranceToJSON(json: any): ConfigurationScenarioDefinitionAssurance {
    return ConfigurationScenarioDefinitionAssuranceToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionAssuranceToJSONTyped(value?: ConfigurationScenarioDefinitionAssurance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'requirements': ((value['requirements'] as Array<any>).map(ConfigurationScenarioDefinitionAssuranceRequirementToJSON)),
    };
}
