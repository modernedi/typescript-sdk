/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.36.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import { mapValues } from '../runtime.js';
import type { ConfigurationScenarioBindingDefinitionReference } from './ConfigurationScenarioBindingDefinitionReference.js';
import {
    ConfigurationScenarioBindingDefinitionReferenceFromJSON,
    ConfigurationScenarioBindingDefinitionReferenceFromJSONTyped,
    ConfigurationScenarioBindingDefinitionReferenceToJSON,
    ConfigurationScenarioBindingDefinitionReferenceToJSONTyped,
} from './ConfigurationScenarioBindingDefinitionReference.js';
import type { ConfigurationScenarioBindingActorBinding } from './ConfigurationScenarioBindingActorBinding.js';
import {
    ConfigurationScenarioBindingActorBindingFromJSON,
    ConfigurationScenarioBindingActorBindingFromJSONTyped,
    ConfigurationScenarioBindingActorBindingToJSON,
    ConfigurationScenarioBindingActorBindingToJSONTyped,
} from './ConfigurationScenarioBindingActorBinding.js';
import type { ConfigurationScenarioBindingStepBinding } from './ConfigurationScenarioBindingStepBinding.js';
import {
    ConfigurationScenarioBindingStepBindingFromJSON,
    ConfigurationScenarioBindingStepBindingFromJSONTyped,
    ConfigurationScenarioBindingStepBindingToJSON,
    ConfigurationScenarioBindingStepBindingToJSONTyped,
} from './ConfigurationScenarioBindingStepBinding.js';
import type { ConfigurationScenarioBindingRegressionCase } from './ConfigurationScenarioBindingRegressionCase.js';
import {
    ConfigurationScenarioBindingRegressionCaseFromJSON,
    ConfigurationScenarioBindingRegressionCaseFromJSONTyped,
    ConfigurationScenarioBindingRegressionCaseToJSON,
    ConfigurationScenarioBindingRegressionCaseToJSONTyped,
} from './ConfigurationScenarioBindingRegressionCase.js';

/**
 * References one exact published definition and binds all of its actors and steps. Apply resolves and freezes authoritative artifacts for runtime use.
 * @export
 * @interface ConfigurationScenarioBindingSpec
 */
export interface ConfigurationScenarioBindingSpec {
    /**
     * Optional offline tests for this binding. Each observation references a saved case on the step's bound runtime mapping. Tests execute proposed maps and the existing graph interpreter without sending EDI or creating live run evidence. Case order is canonicalized by ID; observation order is preserved. Up to 10 cases, 20 observations each, and 64 KiB total.
     * @type {Array<ConfigurationScenarioBindingRegressionCase>}
     * @memberof ConfigurationScenarioBindingSpec
     */
    regressionCases?: Array<ConfigurationScenarioBindingRegressionCase>;
    /**
     *
     * @type {ConfigurationScenarioBindingDefinitionReference}
     * @memberof ConfigurationScenarioBindingSpec
     */
    definition: ConfigurationScenarioBindingDefinitionReference;
    /**
     * Required workspace traffic selector, frozen into the applied binding. Production and test traffic use the same deployed mappings; this does not deploy unpublished mappings or create another workspace. Runs use the selected AS2/X12 profile and keep transaction lookup, acknowledgments, and evidence in that environment, without falling back to the other profile.
     * @type {ConfigurationScenarioBindingSpecEnvironmentEnum}
     * @memberof ConfigurationScenarioBindingSpec
     */
    environment: ConfigurationScenarioBindingSpecEnvironmentEnum;
    /**
     * Exactly one binding for every definition actor. IDs must be unique; exactly one endpoint must be this workspace and at least one must be a current external partner.
     * @type {Array<ConfigurationScenarioBindingActorBinding>}
     * @memberof ConfigurationScenarioBindingSpec
     */
    actors: Array<ConfigurationScenarioBindingActorBinding>;
    /**
     * Exactly one binding for every definition step. IDs must be unique.
     * @type {Array<ConfigurationScenarioBindingStepBinding>}
     * @memberof ConfigurationScenarioBindingSpec
     */
    steps: Array<ConfigurationScenarioBindingStepBinding>;
}


/**
 * @export
 */
export const ConfigurationScenarioBindingSpecEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioBindingSpecEnvironmentEnum = typeof ConfigurationScenarioBindingSpecEnvironmentEnum[keyof typeof ConfigurationScenarioBindingSpecEnvironmentEnum];


/**
 * Check if a given object implements the ConfigurationScenarioBindingSpec interface.
 */
export function instanceOfConfigurationScenarioBindingSpec(value: object): value is ConfigurationScenarioBindingSpec {
    if (!('definition' in value) || value['definition'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('actors' in value) || value['actors'] === undefined) return false;
    if (!('steps' in value) || value['steps'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingSpecFromJSON(json: any): ConfigurationScenarioBindingSpec {
    return ConfigurationScenarioBindingSpecFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingSpec {
    if (json == null) {
        return json;
    }
    return {

        'regressionCases': json['regressionCases'] == null ? undefined : ((json['regressionCases'] as Array<any>).map(ConfigurationScenarioBindingRegressionCaseFromJSON)),
        'definition': ConfigurationScenarioBindingDefinitionReferenceFromJSON(json['definition']),
        'environment': json['environment'],
        'actors': ((json['actors'] as Array<any>).map(ConfigurationScenarioBindingActorBindingFromJSON)),
        'steps': ((json['steps'] as Array<any>).map(ConfigurationScenarioBindingStepBindingFromJSON)),
    };
}

export function ConfigurationScenarioBindingSpecToJSON(json: any): ConfigurationScenarioBindingSpec {
    return ConfigurationScenarioBindingSpecToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingSpecToJSONTyped(value?: ConfigurationScenarioBindingSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'regressionCases': value['regressionCases'] == null ? undefined : ((value['regressionCases'] as Array<any>).map(ConfigurationScenarioBindingRegressionCaseToJSON)),
        'definition': ConfigurationScenarioBindingDefinitionReferenceToJSON(value['definition']),
        'environment': value['environment'],
        'actors': ((value['actors'] as Array<any>).map(ConfigurationScenarioBindingActorBindingToJSON)),
        'steps': ((value['steps'] as Array<any>).map(ConfigurationScenarioBindingStepBindingToJSON)),
    };
}
