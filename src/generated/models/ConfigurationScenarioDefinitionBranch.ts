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
import type { ConfigurationScenarioDefinitionBranchAlternative } from './ConfigurationScenarioDefinitionBranchAlternative.js';
import {
    ConfigurationScenarioDefinitionBranchAlternativeFromJSON,
    ConfigurationScenarioDefinitionBranchAlternativeFromJSONTyped,
    ConfigurationScenarioDefinitionBranchAlternativeToJSON,
    ConfigurationScenarioDefinitionBranchAlternativeToJSONTyped,
} from './ConfigurationScenarioDefinitionBranchAlternative.js';

/**
 * A choice between mutually exclusive next-document paths after a named checkpoint. The checkpoint must be emitted by the alternatives' shared source step, so the decision precedes every controlled destination. The emitter must also necessarily observe at least one document; expected_count closure with occurrence min 0 cannot emit a branch checkpoint. All alternatives leave the same source step. Example: after a 301 booking confirmation emits bookingDisposition, choose the 303 cancellation path when cancelRequested=true; otherwise choose 304 shipping instructions. exactly_one must choose one path and therefore requires an otherwise fallback. at_most_one may choose no path. A round evaluates only evidence already available when that round began; its selection can make later steps available in the next round.
 * @export
 * @interface ConfigurationScenarioDefinitionBranch
 */
export interface ConfigurationScenarioDefinitionBranch {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionBranch
     */
    id: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionBranchModeEnum}
     * @memberof ConfigurationScenarioDefinitionBranch
     */
    mode: ConfigurationScenarioDefinitionBranchModeEnum;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionBranch
     */
    checkpoint: string;
    /**
     * at_most_one accepts one or more when alternatives; exactly_one requires at least two alternatives and exactly one otherwise.
     * @type {Array<ConfigurationScenarioDefinitionBranchAlternative>}
     * @memberof ConfigurationScenarioDefinitionBranch
     */
    alternatives: Array<ConfigurationScenarioDefinitionBranchAlternative>;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionBranchModeEnum = {
    ExactlyOne: 'exactly_one',
    AtMostOne: 'at_most_one',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionBranchModeEnum = typeof ConfigurationScenarioDefinitionBranchModeEnum[keyof typeof ConfigurationScenarioDefinitionBranchModeEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionBranch interface.
 */
export function instanceOfConfigurationScenarioDefinitionBranch(value: object): value is ConfigurationScenarioDefinitionBranch {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('mode' in value) || value['mode'] === undefined) return false;
    if (!('checkpoint' in value) || value['checkpoint'] === undefined) return false;
    if (!('alternatives' in value) || value['alternatives'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionBranchFromJSON(json: any): ConfigurationScenarioDefinitionBranch {
    return ConfigurationScenarioDefinitionBranchFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionBranchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionBranch {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'mode': json['mode'],
        'checkpoint': json['checkpoint'],
        'alternatives': ((json['alternatives'] as Array<any>).map(ConfigurationScenarioDefinitionBranchAlternativeFromJSON)),
    };
}

export function ConfigurationScenarioDefinitionBranchToJSON(json: any): ConfigurationScenarioDefinitionBranch {
    return ConfigurationScenarioDefinitionBranchToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionBranchToJSONTyped(value?: ConfigurationScenarioDefinitionBranch | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'mode': value['mode'],
        'checkpoint': value['checkpoint'],
        'alternatives': ((value['alternatives'] as Array<any>).map(ConfigurationScenarioDefinitionBranchAlternativeToJSON)),
    };
}
