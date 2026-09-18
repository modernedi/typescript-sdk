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
import type { ConfigurationScenarioDefinitionValueOperand } from './ConfigurationScenarioDefinitionValueOperand.js';
import {
    ConfigurationScenarioDefinitionValueOperandFromJSON,
    ConfigurationScenarioDefinitionValueOperandFromJSONTyped,
    ConfigurationScenarioDefinitionValueOperandToJSON,
    ConfigurationScenarioDefinitionValueOperandToJSONTyped,
} from './ConfigurationScenarioDefinitionValueOperand.js';

/**
 * A yes/no condition evaluated after the branch's named checkpoint is emitted. For example, after an X12 301 emits bookingDisposition, compare the cancelRequested run parameter with true to select the X12 303 path. A fact condition must read the common source step of every alternative and that fact's extract stage must precede the checkpoint; it cannot read a destination document or later pipeline evidence to make that destination eligible. Every condition sees the conversation view from the start of the decision round, so one branch cannot use evidence made available by itself or a sibling branch in that round.
 * @export
 * @interface ConfigurationScenarioDefinitionPredicate
 */
export interface ConfigurationScenarioDefinitionPredicate {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionPredicate
     */
    id: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionPredicateOperatorEnum}
     * @memberof ConfigurationScenarioDefinitionPredicate
     */
    operator: ConfigurationScenarioDefinitionPredicateOperatorEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionValueOperand}
     * @memberof ConfigurationScenarioDefinitionPredicate
     */
    left: ConfigurationScenarioDefinitionValueOperand;
    /**
     *
     * @type {ConfigurationScenarioDefinitionValueOperand}
     * @memberof ConfigurationScenarioDefinitionPredicate
     */
    right?: ConfigurationScenarioDefinitionValueOperand;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionPredicateOperatorEnum = {
    Equal: 'equal',
    NotEqual: 'not_equal',
    Exists: 'exists',
    Unique: 'unique',
    SameSet: 'same_set',
    Subset: 'subset',
    SumEqual: 'sum_equal',
    LessThanOrEqual: 'less_than_or_equal',
    GreaterThanOrEqual: 'greater_than_or_equal',
    Monotonic: 'monotonic',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionPredicateOperatorEnum = typeof ConfigurationScenarioDefinitionPredicateOperatorEnum[keyof typeof ConfigurationScenarioDefinitionPredicateOperatorEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionPredicate interface.
 */
export function instanceOfConfigurationScenarioDefinitionPredicate(value: object): value is ConfigurationScenarioDefinitionPredicate {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('operator' in value) || value['operator'] === undefined) return false;
    if (!('left' in value) || value['left'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionPredicateFromJSON(json: any): ConfigurationScenarioDefinitionPredicate {
    return ConfigurationScenarioDefinitionPredicateFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionPredicateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionPredicate {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'operator': json['operator'],
        'left': ConfigurationScenarioDefinitionValueOperandFromJSON(json['left']),
        'right': json['right'] == null ? undefined : ConfigurationScenarioDefinitionValueOperandFromJSON(json['right']),
    };
}

export function ConfigurationScenarioDefinitionPredicateToJSON(json: any): ConfigurationScenarioDefinitionPredicate {
    return ConfigurationScenarioDefinitionPredicateToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionPredicateToJSONTyped(value?: ConfigurationScenarioDefinitionPredicate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'operator': value['operator'],
        'left': ConfigurationScenarioDefinitionValueOperandToJSON(value['left']),
        'right': ConfigurationScenarioDefinitionValueOperandToJSON(value['right']),
    };
}
