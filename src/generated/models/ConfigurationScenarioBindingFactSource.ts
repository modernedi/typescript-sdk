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
 * One ordinary X12 Mapper expression fact source. It uses the same language and execution engine as an incoming map's primaryKeyExtractor; v1 does not define a second scenario-specific selector language. The expression must read the bound X12 document so its value has concrete provenance.
 * @export
 * @interface ConfigurationScenarioBindingFactSource
 */
export interface ConfigurationScenarioBindingFactSource {
    /**
     * Uses ModernEDI's existing X12 Mapper expression language and engine, shared with primaryKeyExtractor.
     * @type {ConfigurationScenarioBindingFactSourceKindEnum}
     * @memberof ConfigurationScenarioBindingFactSource
     */
    kind: ConfigurationScenarioBindingFactSourceKindEnum;
    /**
     * One value-returning X12 Mapper expression that reads at least one X12 segment or element. A constant-only expression cannot provide authoritative document evidence. Scalars, lists, and sets are interpreted according to the matching fact declaration; secrets and credentials must never appear here.
     * @type {string}
     * @memberof ConfigurationScenarioBindingFactSource
     */
    expression: string;
}


/**
 * @export
 */
export const ConfigurationScenarioBindingFactSourceKindEnum = {
    X12MapperExpression: 'x12-mapper-expression',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioBindingFactSourceKindEnum = typeof ConfigurationScenarioBindingFactSourceKindEnum[keyof typeof ConfigurationScenarioBindingFactSourceKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioBindingFactSource interface.
 */
export function instanceOfConfigurationScenarioBindingFactSource(value: object): value is ConfigurationScenarioBindingFactSource {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'x12-mapper-expression') return false;

    if (!('expression' in value) || value['expression'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingFactSourceFromJSON(json: any): ConfigurationScenarioBindingFactSource {
    return ConfigurationScenarioBindingFactSourceFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingFactSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingFactSource {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'expression': json['expression'],
    };
}

export function ConfigurationScenarioBindingFactSourceToJSON(json: any): ConfigurationScenarioBindingFactSource {
    return ConfigurationScenarioBindingFactSourceToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingFactSourceToJSONTyped(value?: ConfigurationScenarioBindingFactSource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'expression': value['expression'],
    };
}
