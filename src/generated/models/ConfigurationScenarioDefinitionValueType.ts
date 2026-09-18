/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */


/**
 * Closed evaluator value type. list and set contain scalar values only and require elementType.
 * @export
 */
export const ConfigurationScenarioDefinitionValueType = {
    String: 'string',
    Decimal: 'decimal',
    Date: 'date',
    Time: 'time',
    Timestamp: 'timestamp',
    Boolean: 'boolean',
    List: 'list',
    Set: 'set',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionValueType = typeof ConfigurationScenarioDefinitionValueType[keyof typeof ConfigurationScenarioDefinitionValueType];


export function instanceOfConfigurationScenarioDefinitionValueType(value: any): boolean {
    for (const key in ConfigurationScenarioDefinitionValueType) {
        if (Object.prototype.hasOwnProperty.call(ConfigurationScenarioDefinitionValueType, key)) {
            if (ConfigurationScenarioDefinitionValueType[key as keyof typeof ConfigurationScenarioDefinitionValueType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConfigurationScenarioDefinitionValueTypeFromJSON(json: any): ConfigurationScenarioDefinitionValueType {
    return ConfigurationScenarioDefinitionValueTypeFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionValueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionValueType {
    return json as ConfigurationScenarioDefinitionValueType;
}

export function ConfigurationScenarioDefinitionValueTypeToJSON(value?: ConfigurationScenarioDefinitionValueType | null): any {
    return value as any;
}

export function ConfigurationScenarioDefinitionValueTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionValueType {
    return value as ConfigurationScenarioDefinitionValueType;
}
