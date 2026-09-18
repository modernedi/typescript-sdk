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
import type { ConfigurationPlanScenarioResource } from './ConfigurationPlanScenarioResource.js';
import {
    ConfigurationPlanScenarioResourceFromJSON,
    ConfigurationPlanScenarioResourceFromJSONTyped,
    ConfigurationPlanScenarioResourceToJSON,
    ConfigurationPlanScenarioResourceToJSONTyped,
} from './ConfigurationPlanScenarioResource.js';
import type { ConfigurationPlanScenarioDefinition } from './ConfigurationPlanScenarioDefinition.js';
import {
    ConfigurationPlanScenarioDefinitionFromJSON,
    ConfigurationPlanScenarioDefinitionFromJSONTyped,
    ConfigurationPlanScenarioDefinitionToJSON,
    ConfigurationPlanScenarioDefinitionToJSONTyped,
} from './ConfigurationPlanScenarioDefinition.js';

/**
 * One applied scenario binding whose executable authority depends on a changed resource.
 * @export
 * @interface ConfigurationPlanAffectedScenario
 */
export interface ConfigurationPlanAffectedScenario {
    /**
     * Stable scenario binding identifier.
     * @type {string}
     * @memberof ConfigurationPlanAffectedScenario
     */
    bindingId: string;
    /**
     * Applied immutable binding revision.
     * @type {number}
     * @memberof ConfigurationPlanAffectedScenario
     */
    revision: number;
    /**
     * Customer-facing binding name.
     * @type {string}
     * @memberof ConfigurationPlanAffectedScenario
     */
    name: string;
    /**
     *
     * @type {ConfigurationPlanAffectedScenarioEnvironmentEnum}
     * @memberof ConfigurationPlanAffectedScenario
     */
    environment: ConfigurationPlanAffectedScenarioEnvironmentEnum;
    /**
     *
     * @type {ConfigurationPlanScenarioDefinition}
     * @memberof ConfigurationPlanAffectedScenario
     */
    definition: ConfigurationPlanScenarioDefinition;
    /**
     * REAPPLIED_BY_APPLY refreshes the binding's frozen authority in this aggregate apply; RETIRED_BY_APPLY removes it from current configuration while preserving its history; REAPPLY_REQUIRED identifies a binding outside the desired configuration that needs a separate refresh.
     * @type {ConfigurationPlanAffectedScenarioEffectEnum}
     * @memberof ConfigurationPlanAffectedScenario
     */
    effect: ConfigurationPlanAffectedScenarioEffectEnum;
    /**
     * Planned changes responsible for this scenario effect.
     * @type {Array<ConfigurationPlanScenarioResource>}
     * @memberof ConfigurationPlanAffectedScenario
     */
    resources: Array<ConfigurationPlanScenarioResource>;
}


/**
 * @export
 */
export const ConfigurationPlanAffectedScenarioEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanAffectedScenarioEnvironmentEnum = typeof ConfigurationPlanAffectedScenarioEnvironmentEnum[keyof typeof ConfigurationPlanAffectedScenarioEnvironmentEnum];

/**
 * @export
 */
export const ConfigurationPlanAffectedScenarioEffectEnum = {
    ReapplyRequired: 'REAPPLY_REQUIRED',
    ReappliedByApply: 'REAPPLIED_BY_APPLY',
    RetiredByApply: 'RETIRED_BY_APPLY',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanAffectedScenarioEffectEnum = typeof ConfigurationPlanAffectedScenarioEffectEnum[keyof typeof ConfigurationPlanAffectedScenarioEffectEnum];


/**
 * Check if a given object implements the ConfigurationPlanAffectedScenario interface.
 */
export function instanceOfConfigurationPlanAffectedScenario(value: object): value is ConfigurationPlanAffectedScenario {
    if (!('bindingId' in value) || value['bindingId'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('definition' in value) || value['definition'] === undefined) return false;
    if (!('effect' in value) || value['effect'] === undefined) return false;
    if (!('resources' in value) || value['resources'] === undefined) return false;
    return true;
}

export function ConfigurationPlanAffectedScenarioFromJSON(json: any): ConfigurationPlanAffectedScenario {
    return ConfigurationPlanAffectedScenarioFromJSONTyped(json, false);
}

export function ConfigurationPlanAffectedScenarioFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanAffectedScenario {
    if (json == null) {
        return json;
    }
    return {

        'bindingId': json['bindingId'],
        'revision': json['revision'],
        'name': json['name'],
        'environment': json['environment'],
        'definition': ConfigurationPlanScenarioDefinitionFromJSON(json['definition']),
        'effect': json['effect'],
        'resources': ((json['resources'] as Array<any>).map(ConfigurationPlanScenarioResourceFromJSON)),
    };
}

export function ConfigurationPlanAffectedScenarioToJSON(json: any): ConfigurationPlanAffectedScenario {
    return ConfigurationPlanAffectedScenarioToJSONTyped(json, false);
}

export function ConfigurationPlanAffectedScenarioToJSONTyped(value?: ConfigurationPlanAffectedScenario | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'bindingId': value['bindingId'],
        'revision': value['revision'],
        'name': value['name'],
        'environment': value['environment'],
        'definition': ConfigurationPlanScenarioDefinitionToJSON(value['definition']),
        'effect': value['effect'],
        'resources': ((value['resources'] as Array<any>).map(ConfigurationPlanScenarioResourceToJSON)),
    };
}
