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
 * Select one declared per-occurrence fact value, aggregate values across occurrences as a list or set, or select the first/latest observed occurrence. Correlations require value.
 * @export
 */
export const ConfigurationScenarioDefinitionFactProjection = {
    Value: 'value',
    List: 'list',
    Set: 'set',
    First: 'first',
    Latest: 'latest',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionFactProjection = typeof ConfigurationScenarioDefinitionFactProjection[keyof typeof ConfigurationScenarioDefinitionFactProjection];


export function instanceOfConfigurationScenarioDefinitionFactProjection(value: any): boolean {
    for (const key in ConfigurationScenarioDefinitionFactProjection) {
        if (Object.prototype.hasOwnProperty.call(ConfigurationScenarioDefinitionFactProjection, key)) {
            if (ConfigurationScenarioDefinitionFactProjection[key as keyof typeof ConfigurationScenarioDefinitionFactProjection] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConfigurationScenarioDefinitionFactProjectionFromJSON(json: any): ConfigurationScenarioDefinitionFactProjection {
    return ConfigurationScenarioDefinitionFactProjectionFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionFactProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionFactProjection {
    return json as ConfigurationScenarioDefinitionFactProjection;
}

export function ConfigurationScenarioDefinitionFactProjectionToJSON(value?: ConfigurationScenarioDefinitionFactProjection | null): any {
    return value as any;
}

export function ConfigurationScenarioDefinitionFactProjectionToJSONTyped(value: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionFactProjection {
    return value as ConfigurationScenarioDefinitionFactProjection;
}
