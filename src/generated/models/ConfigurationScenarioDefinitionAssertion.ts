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
import type { ConfigurationScenarioDefinitionAssertionOperand } from './ConfigurationScenarioDefinitionAssertionOperand.js';
import {
    ConfigurationScenarioDefinitionAssertionOperandFromJSON,
    ConfigurationScenarioDefinitionAssertionOperandFromJSONTyped,
    ConfigurationScenarioDefinitionAssertionOperandToJSON,
    ConfigurationScenarioDefinitionAssertionOperandToJSONTyped,
} from './ConfigurationScenarioDefinitionAssertionOperand.js';

/**
 * A fact rule that must hold for the run to pass. sum_equal compares overall totals. keyed_sum_equal instead sums decimal amounts per item key across occurrences, then requires identical keys and per-key totals on both sides. keyed_equal requires identical keys and consistent decimal values per key, including across repeated occurrences (useful for unit prices). Keyed comparisons wait for both steps to close before passing and require keyed_facts operands. Binary operators require right; unary operators reject it.
 * @export
 * @interface ConfigurationScenarioDefinitionAssertion
 */
export interface ConfigurationScenarioDefinitionAssertion {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionAssertion
     */
    id: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionAssertionOperatorEnum}
     * @memberof ConfigurationScenarioDefinitionAssertion
     */
    operator: ConfigurationScenarioDefinitionAssertionOperatorEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionAssertionOperand}
     * @memberof ConfigurationScenarioDefinitionAssertion
     */
    left: ConfigurationScenarioDefinitionAssertionOperand;
    /**
     *
     * @type {ConfigurationScenarioDefinitionAssertionOperand}
     * @memberof ConfigurationScenarioDefinitionAssertion
     */
    right?: ConfigurationScenarioDefinitionAssertionOperand;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionAssertionOperatorEnum = {
    Equal: 'equal',
    NotEqual: 'not_equal',
    Exists: 'exists',
    Unique: 'unique',
    SameSet: 'same_set',
    Subset: 'subset',
    SumEqual: 'sum_equal',
    KeyedSumEqual: 'keyed_sum_equal',
    KeyedEqual: 'keyed_equal',
    LessThanOrEqual: 'less_than_or_equal',
    GreaterThanOrEqual: 'greater_than_or_equal',
    Monotonic: 'monotonic',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionAssertionOperatorEnum = typeof ConfigurationScenarioDefinitionAssertionOperatorEnum[keyof typeof ConfigurationScenarioDefinitionAssertionOperatorEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionAssertion interface.
 */
export function instanceOfConfigurationScenarioDefinitionAssertion(value: object): value is ConfigurationScenarioDefinitionAssertion {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('operator' in value) || value['operator'] === undefined) return false;
    if (!('left' in value) || value['left'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionAssertionFromJSON(json: any): ConfigurationScenarioDefinitionAssertion {
    return ConfigurationScenarioDefinitionAssertionFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionAssertionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionAssertion {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'operator': json['operator'],
        'left': ConfigurationScenarioDefinitionAssertionOperandFromJSON(json['left']),
        'right': json['right'] == null ? undefined : ConfigurationScenarioDefinitionAssertionOperandFromJSON(json['right']),
    };
}

export function ConfigurationScenarioDefinitionAssertionToJSON(json: any): ConfigurationScenarioDefinitionAssertion {
    return ConfigurationScenarioDefinitionAssertionToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionAssertionToJSONTyped(value?: ConfigurationScenarioDefinitionAssertion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'operator': value['operator'],
        'left': ConfigurationScenarioDefinitionAssertionOperandToJSON(value['left']),
        'right': ConfigurationScenarioDefinitionAssertionOperandToJSON(value['right']),
    };
}
