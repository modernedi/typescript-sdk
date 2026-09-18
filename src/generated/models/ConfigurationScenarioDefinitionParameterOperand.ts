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
 * A prepared run parameter usable in assertions, branch predicates, and effective-time expressions.
 * @export
 * @interface ConfigurationScenarioDefinitionParameterOperand
 */
export interface ConfigurationScenarioDefinitionParameterOperand {
    /**
     *
     * @type {ConfigurationScenarioDefinitionParameterOperandKindEnum}
     * @memberof ConfigurationScenarioDefinitionParameterOperand
     */
    kind: ConfigurationScenarioDefinitionParameterOperandKindEnum;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionParameterOperand
     */
    parameter: string;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionParameterOperandKindEnum = {
    Parameter: 'parameter',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionParameterOperandKindEnum = typeof ConfigurationScenarioDefinitionParameterOperandKindEnum[keyof typeof ConfigurationScenarioDefinitionParameterOperandKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionParameterOperand interface.
 */
export function instanceOfConfigurationScenarioDefinitionParameterOperand(value: object): value is ConfigurationScenarioDefinitionParameterOperand {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'parameter') return false;

    if (!('parameter' in value) || value['parameter'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionParameterOperandFromJSON(json: any): ConfigurationScenarioDefinitionParameterOperand {
    return ConfigurationScenarioDefinitionParameterOperandFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionParameterOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionParameterOperand {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'parameter': json['parameter'],
    };
}

export function ConfigurationScenarioDefinitionParameterOperandToJSON(json: any): ConfigurationScenarioDefinitionParameterOperand {
    return ConfigurationScenarioDefinitionParameterOperandToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionParameterOperandToJSONTyped(value?: ConfigurationScenarioDefinitionParameterOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'parameter': value['parameter'],
    };
}
