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

/**
 * One ACTIVE scenario run whose pinned binding authority depends on a changed resource.
 * @export
 * @interface ConfigurationPlanAffectedRun
 */
export interface ConfigurationPlanAffectedRun {
    /**
     * Stable scenario run identifier.
     * @type {string}
     * @memberof ConfigurationPlanAffectedRun
     */
    runId: string;
    /**
     * Stable scenario binding identifier pinned by the run.
     * @type {string}
     * @memberof ConfigurationPlanAffectedRun
     */
    bindingId: string;
    /**
     * Immutable binding revision pinned by the active run.
     * @type {number}
     * @memberof ConfigurationPlanAffectedRun
     */
    bindingRevision: number;
    /**
     * The run must leave ACTIVE state before this desired configuration can be applied.
     * @type {ConfigurationPlanAffectedRunEffectEnum}
     * @memberof ConfigurationPlanAffectedRun
     */
    effect: ConfigurationPlanAffectedRunEffectEnum;
    /**
     * Planned resource changes that intersect the run's pinned binding authority.
     * @type {Array<ConfigurationPlanScenarioResource>}
     * @memberof ConfigurationPlanAffectedRun
     */
    resources: Array<ConfigurationPlanScenarioResource>;
}


/**
 * @export
 */
export const ConfigurationPlanAffectedRunEffectEnum = {
    CancelOrCompleteRequired: 'CANCEL_OR_COMPLETE_REQUIRED',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanAffectedRunEffectEnum = typeof ConfigurationPlanAffectedRunEffectEnum[keyof typeof ConfigurationPlanAffectedRunEffectEnum];


/**
 * Check if a given object implements the ConfigurationPlanAffectedRun interface.
 */
export function instanceOfConfigurationPlanAffectedRun(value: object): value is ConfigurationPlanAffectedRun {
    if (!('runId' in value) || value['runId'] === undefined) return false;
    if (!('bindingId' in value) || value['bindingId'] === undefined) return false;
    if (!('bindingRevision' in value) || value['bindingRevision'] === undefined) return false;
    if (!('effect' in value) || value['effect'] === undefined) return false;
    if (value['effect'] !== 'CANCEL_OR_COMPLETE_REQUIRED') return false;

    if (!('resources' in value) || value['resources'] === undefined) return false;
    return true;
}

export function ConfigurationPlanAffectedRunFromJSON(json: any): ConfigurationPlanAffectedRun {
    return ConfigurationPlanAffectedRunFromJSONTyped(json, false);
}

export function ConfigurationPlanAffectedRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanAffectedRun {
    if (json == null) {
        return json;
    }
    return {

        'runId': json['runId'],
        'bindingId': json['bindingId'],
        'bindingRevision': json['bindingRevision'],
        'effect': json['effect'],
        'resources': ((json['resources'] as Array<any>).map(ConfigurationPlanScenarioResourceFromJSON)),
    };
}

export function ConfigurationPlanAffectedRunToJSON(json: any): ConfigurationPlanAffectedRun {
    return ConfigurationPlanAffectedRunToJSONTyped(json, false);
}

export function ConfigurationPlanAffectedRunToJSONTyped(value?: ConfigurationPlanAffectedRun | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'runId': value['runId'],
        'bindingId': value['bindingId'],
        'bindingRevision': value['bindingRevision'],
        'effect': value['effect'],
        'resources': ((value['resources'] as Array<any>).map(ConfigurationPlanScenarioResourceToJSON)),
    };
}
