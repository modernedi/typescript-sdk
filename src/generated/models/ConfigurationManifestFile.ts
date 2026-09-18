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
 * @interface ConfigurationManifestFile
 */
export interface ConfigurationManifestFile {
    /**
     * Desired resource or source path in this bundle.
     * @type {string}
     * @memberof ConfigurationManifestFile
     */
    path: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationManifestFile
     */
    contentSha256: string;
}

/**
 * Check if a given object implements the ConfigurationManifestFile interface.
 */
export function instanceOfConfigurationManifestFile(value: object): value is ConfigurationManifestFile {
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    return true;
}

export function ConfigurationManifestFileFromJSON(json: any): ConfigurationManifestFile {
    return ConfigurationManifestFileFromJSONTyped(json, false);
}

export function ConfigurationManifestFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationManifestFile {
    if (json == null) {
        return json;
    }
    return {

        'path': json['path'],
        'contentSha256': json['contentSha256'],
    };
}

export function ConfigurationManifestFileToJSON(json: any): ConfigurationManifestFile {
    return ConfigurationManifestFileToJSONTyped(json, false);
}

export function ConfigurationManifestFileToJSONTyped(value?: ConfigurationManifestFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'path': value['path'],
        'contentSha256': value['contentSha256'],
    };
}
