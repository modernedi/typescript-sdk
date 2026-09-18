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
 * Evaluates one ordinary X12 Mapper expression against the step transaction. Validate and Apply use the same parser, semantic validator, function registry, budget mechanism, and syntax-tree-aware engine as runtime mappings and primaryKeyExtractor, with scenario-specific bounded limits. Validate and Apply reject an expression that is statically incapable of reading an X12 segment or element, and runtime fails closed when the executed path produces no concrete X12 read. Scenario evidence uses that engine's element-read tracing facility; this does not imply that existing primary-key persistence emits the same trace. The ScenarioDefinition remains authoritative for value type, cardinality, normalization, and sensitivity.
 * @export
 * @interface ConfigurationScenarioBindingX12MapperExpressionSource
 */
export interface ConfigurationScenarioBindingX12MapperExpressionSource {
    /**
     * Uses ModernEDI's existing X12 Mapper expression language and engine, shared with primaryKeyExtractor.
     * @type {ConfigurationScenarioBindingX12MapperExpressionSourceKindEnum}
     * @memberof ConfigurationScenarioBindingX12MapperExpressionSource
     */
    kind: ConfigurationScenarioBindingX12MapperExpressionSourceKindEnum;
    /**
     * One value-returning X12 Mapper expression that reads at least one X12 segment or element. A constant-only expression cannot provide authoritative document evidence. Scalars, lists, and sets are interpreted according to the matching fact declaration; secrets and credentials must never appear here.
     * @type {string}
     * @memberof ConfigurationScenarioBindingX12MapperExpressionSource
     */
    expression: string;
}


/**
 * @export
 */
export const ConfigurationScenarioBindingX12MapperExpressionSourceKindEnum = {
    X12MapperExpression: 'x12-mapper-expression',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioBindingX12MapperExpressionSourceKindEnum = typeof ConfigurationScenarioBindingX12MapperExpressionSourceKindEnum[keyof typeof ConfigurationScenarioBindingX12MapperExpressionSourceKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioBindingX12MapperExpressionSource interface.
 */
export function instanceOfConfigurationScenarioBindingX12MapperExpressionSource(value: object): value is ConfigurationScenarioBindingX12MapperExpressionSource {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'x12-mapper-expression') return false;

    if (!('expression' in value) || value['expression'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingX12MapperExpressionSourceFromJSON(json: any): ConfigurationScenarioBindingX12MapperExpressionSource {
    return ConfigurationScenarioBindingX12MapperExpressionSourceFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingX12MapperExpressionSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingX12MapperExpressionSource {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'expression': json['expression'],
    };
}

export function ConfigurationScenarioBindingX12MapperExpressionSourceToJSON(json: any): ConfigurationScenarioBindingX12MapperExpressionSource {
    return ConfigurationScenarioBindingX12MapperExpressionSourceToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingX12MapperExpressionSourceToJSONTyped(value?: ConfigurationScenarioBindingX12MapperExpressionSource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'expression': value['expression'],
    };
}
