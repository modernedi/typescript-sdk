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
import type { ConfigurationScenarioDefinitionPredicate } from './ConfigurationScenarioDefinitionPredicate.js';
import {
    ConfigurationScenarioDefinitionPredicateFromJSON,
    ConfigurationScenarioDefinitionPredicateFromJSONTyped,
    ConfigurationScenarioDefinitionPredicateToJSON,
    ConfigurationScenarioDefinitionPredicateToJSONTyped,
} from './ConfigurationScenarioDefinitionPredicate.js';

/**
 * One ordinary follows transition that a branch may select, either when its conditions pass or as the explicit otherwise fallback. For example, cancelRequested=true selects the 301-to-303 follows transition; otherwise selects 301-to-304. supersedes and cancels transitions are revision records, not branch alternatives.
 * @export
 * @interface ConfigurationScenarioDefinitionBranchAlternative
 */
export interface ConfigurationScenarioDefinitionBranchAlternative {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionBranchAlternative
     */
    id: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionBranchAlternativeKindEnum}
     * @memberof ConfigurationScenarioDefinitionBranchAlternative
     */
    kind: ConfigurationScenarioDefinitionBranchAlternativeKindEnum;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionBranchAlternative
     */
    transitionId: string;
    /**
     * Conditions may use parameters, literals, or facts from the alternatives' shared fromStep. They cannot read a destination step to select that destination.
     * @type {Array<ConfigurationScenarioDefinitionPredicate>}
     * @memberof ConfigurationScenarioDefinitionBranchAlternative
     */
    conditions: Array<ConfigurationScenarioDefinitionPredicate>;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionBranchAlternativeKindEnum = {
    When: 'when',
    Otherwise: 'otherwise',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionBranchAlternativeKindEnum = typeof ConfigurationScenarioDefinitionBranchAlternativeKindEnum[keyof typeof ConfigurationScenarioDefinitionBranchAlternativeKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionBranchAlternative interface.
 */
export function instanceOfConfigurationScenarioDefinitionBranchAlternative(value: object): value is ConfigurationScenarioDefinitionBranchAlternative {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('transitionId' in value) || value['transitionId'] === undefined) return false;
    if (!('conditions' in value) || value['conditions'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionBranchAlternativeFromJSON(json: any): ConfigurationScenarioDefinitionBranchAlternative {
    return ConfigurationScenarioDefinitionBranchAlternativeFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionBranchAlternativeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionBranchAlternative {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
        'transitionId': json['transitionId'],
        'conditions': ((json['conditions'] as Array<any>).map(ConfigurationScenarioDefinitionPredicateFromJSON)),
    };
}

export function ConfigurationScenarioDefinitionBranchAlternativeToJSON(json: any): ConfigurationScenarioDefinitionBranchAlternative {
    return ConfigurationScenarioDefinitionBranchAlternativeToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionBranchAlternativeToJSONTyped(value?: ConfigurationScenarioDefinitionBranchAlternative | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
        'transitionId': value['transitionId'],
        'conditions': ((value['conditions'] as Array<any>).map(ConfigurationScenarioDefinitionPredicateToJSON)),
    };
}
