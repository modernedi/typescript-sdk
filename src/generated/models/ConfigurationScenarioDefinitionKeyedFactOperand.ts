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
/**
 * Conversation assertion input: align the required string-list keyFact and required decimal-list fact by index within each effective occurrence of stepId. List lengths must agree. Keys must be nonblank and unique within each occurrence; the same key may recur in later documents. Both the keys and values retain source evidence. No projection or parameter is accepted. This does not combine quantities in different units: include unit in your Mapper-produced key. Keyed operators are not available in branch predicates, correlations, or revision timestamps.
 * @export
 * @interface ConfigurationScenarioDefinitionKeyedFactOperand
 */
export interface ConfigurationScenarioDefinitionKeyedFactOperand {
    /**
     *
     * @type {ConfigurationScenarioDefinitionKeyedFactOperandKindEnum}
     * @memberof ConfigurationScenarioDefinitionKeyedFactOperand
     */
    kind: ConfigurationScenarioDefinitionKeyedFactOperandKindEnum;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionKeyedFactOperand
     */
    stepId: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionKeyedFactOperand
     */
    keyFact: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionKeyedFactOperand
     */
    fact: string;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionKeyedFactOperandKindEnum = {
    KeyedFacts: 'keyed_facts',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionKeyedFactOperandKindEnum = typeof ConfigurationScenarioDefinitionKeyedFactOperandKindEnum[keyof typeof ConfigurationScenarioDefinitionKeyedFactOperandKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionKeyedFactOperand interface.
 */
export function instanceOfConfigurationScenarioDefinitionKeyedFactOperand(value: object): value is ConfigurationScenarioDefinitionKeyedFactOperand {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'keyed_facts') return false;

    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('keyFact' in value) || value['keyFact'] === undefined) return false;
    if (!('fact' in value) || value['fact'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionKeyedFactOperandFromJSON(json: any): ConfigurationScenarioDefinitionKeyedFactOperand {
    return ConfigurationScenarioDefinitionKeyedFactOperandFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionKeyedFactOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionKeyedFactOperand {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'stepId': json['stepId'],
        'keyFact': json['keyFact'],
        'fact': json['fact'],
    };
}

export function ConfigurationScenarioDefinitionKeyedFactOperandToJSON(json: any): ConfigurationScenarioDefinitionKeyedFactOperand {
    return ConfigurationScenarioDefinitionKeyedFactOperandToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionKeyedFactOperandToJSONTyped(value?: ConfigurationScenarioDefinitionKeyedFactOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'stepId': value['stepId'],
        'keyFact': value['keyFact'],
        'fact': value['fact'],
    };
}
