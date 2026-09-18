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
 * Exportable ModernEDI configuration resource type.
 * @export
 */
export const ConfigurationResourceKind = {
    As2Connection: 'As2Connection',
    Partner: 'Partner',
    Mapping: 'Mapping',
    ScenarioDefinition: 'ScenarioDefinition',
    ScenarioBinding: 'ScenarioBinding',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationResourceKind = typeof ConfigurationResourceKind[keyof typeof ConfigurationResourceKind];


export function instanceOfConfigurationResourceKind(value: any): boolean {
    for (const key in ConfigurationResourceKind) {
        if (Object.prototype.hasOwnProperty.call(ConfigurationResourceKind, key)) {
            if (ConfigurationResourceKind[key as keyof typeof ConfigurationResourceKind] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConfigurationResourceKindFromJSON(json: any): ConfigurationResourceKind {
    return ConfigurationResourceKindFromJSONTyped(json, false);
}

export function ConfigurationResourceKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationResourceKind {
    return json as ConfigurationResourceKind;
}

export function ConfigurationResourceKindToJSON(value?: ConfigurationResourceKind | null): any {
    return value as any;
}

export function ConfigurationResourceKindToJSONTyped(value: any, ignoreDiscriminator: boolean): ConfigurationResourceKind {
    return value as ConfigurationResourceKind;
}
