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
 * Closed scalar type used directly or as the element type of list and set values.
 * @export
 */
export const ConfigurationScenarioDefinitionScalarType = {
    String: 'string',
    Decimal: 'decimal',
    Date: 'date',
    Time: 'time',
    Timestamp: 'timestamp',
    Boolean: 'boolean',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionScalarType = typeof ConfigurationScenarioDefinitionScalarType[keyof typeof ConfigurationScenarioDefinitionScalarType];


export function instanceOfConfigurationScenarioDefinitionScalarType(value: any): boolean {
    for (const key in ConfigurationScenarioDefinitionScalarType) {
        if (Object.prototype.hasOwnProperty.call(ConfigurationScenarioDefinitionScalarType, key)) {
            if (ConfigurationScenarioDefinitionScalarType[key as keyof typeof ConfigurationScenarioDefinitionScalarType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConfigurationScenarioDefinitionScalarTypeFromJSON(json: any): ConfigurationScenarioDefinitionScalarType {
    return ConfigurationScenarioDefinitionScalarTypeFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionScalarTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionScalarType {
    return json as ConfigurationScenarioDefinitionScalarType;
}

export function ConfigurationScenarioDefinitionScalarTypeToJSON(value?: ConfigurationScenarioDefinitionScalarType | null): any {
    return value as any;
}

export function ConfigurationScenarioDefinitionScalarTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionScalarType {
    return value as ConfigurationScenarioDefinitionScalarType;
}
