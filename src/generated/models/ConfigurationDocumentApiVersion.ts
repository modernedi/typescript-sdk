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
 * Version of the portable configuration document contract used by export, planning, and apply.
 * @export
 */
export const ConfigurationDocumentApiVersion = {
    ModernediComV1: 'modernedi.com/v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationDocumentApiVersion = typeof ConfigurationDocumentApiVersion[keyof typeof ConfigurationDocumentApiVersion];


export function instanceOfConfigurationDocumentApiVersion(value: any): boolean {
    for (const key in ConfigurationDocumentApiVersion) {
        if (Object.prototype.hasOwnProperty.call(ConfigurationDocumentApiVersion, key)) {
            if (ConfigurationDocumentApiVersion[key as keyof typeof ConfigurationDocumentApiVersion] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConfigurationDocumentApiVersionFromJSON(json: any): ConfigurationDocumentApiVersion {
    return ConfigurationDocumentApiVersionFromJSONTyped(json, false);
}

export function ConfigurationDocumentApiVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationDocumentApiVersion {
    return json as ConfigurationDocumentApiVersion;
}

export function ConfigurationDocumentApiVersionToJSON(value?: ConfigurationDocumentApiVersion | null): any {
    return value as any;
}

export function ConfigurationDocumentApiVersionToJSONTyped(value: any, ignoreDiscriminator: boolean): ConfigurationDocumentApiVersion {
    return value as ConfigurationDocumentApiVersion;
}
