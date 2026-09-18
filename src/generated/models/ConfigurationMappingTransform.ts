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
 *
 * @export
 * @interface ConfigurationMappingTransform
 */
export interface ConfigurationMappingTransform {
    /**
     * Executable mapping language.
     * @type {ConfigurationMappingTransformTypeEnum}
     * @memberof ConfigurationMappingTransform
     */
    type: ConfigurationMappingTransformTypeEnum;
    /**
     * Source-controlled transform filename shown in workspace and transaction provenance.
     * @type {string}
     * @memberof ConfigurationMappingTransform
     */
    fileName: string;
    /**
     * Relative path of the corresponding `SOURCE` file in this bundle.
     * @type {string}
     * @memberof ConfigurationMappingTransform
     */
    sourcePath: string;
    /**
     * SHA-256 of the exact UTF-8 mapping source bytes at `sourcePath`.
     * @type {string}
     * @memberof ConfigurationMappingTransform
     */
    sourceSha256: string;
}


/**
 * @export
 */
export const ConfigurationMappingTransformTypeEnum = {
    X12Mapper: 'X12_MAPPER',
    Xslt: 'XSLT',
    Jslt: 'JSLT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationMappingTransformTypeEnum = typeof ConfigurationMappingTransformTypeEnum[keyof typeof ConfigurationMappingTransformTypeEnum];


/**
 * Check if a given object implements the ConfigurationMappingTransform interface.
 */
export function instanceOfConfigurationMappingTransform(value: object): value is ConfigurationMappingTransform {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fileName' in value) || value['fileName'] === undefined) return false;
    if (!('sourcePath' in value) || value['sourcePath'] === undefined) return false;
    if (!('sourceSha256' in value) || value['sourceSha256'] === undefined) return false;
    return true;
}

export function ConfigurationMappingTransformFromJSON(json: any): ConfigurationMappingTransform {
    return ConfigurationMappingTransformFromJSONTyped(json, false);
}

export function ConfigurationMappingTransformFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationMappingTransform {
    if (json == null) {
        return json;
    }
    return {

        'type': json['type'],
        'fileName': json['fileName'],
        'sourcePath': json['sourcePath'],
        'sourceSha256': json['sourceSha256'],
    };
}

export function ConfigurationMappingTransformToJSON(json: any): ConfigurationMappingTransform {
    return ConfigurationMappingTransformToJSONTyped(json, false);
}

export function ConfigurationMappingTransformToJSONTyped(value?: ConfigurationMappingTransform | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'type': value['type'],
        'fileName': value['fileName'],
        'sourcePath': value['sourcePath'],
        'sourceSha256': value['sourceSha256'],
    };
}
