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
import type { ConfigurationExportFileContent } from './ConfigurationExportFileContent.js';
import {
    ConfigurationExportFileContentFromJSON,
    ConfigurationExportFileContentFromJSONTyped,
    ConfigurationExportFileContentToJSON,
    ConfigurationExportFileContentToJSONTyped,
} from './ConfigurationExportFileContent.js';

/**
 * One logical file in the configuration export. JSON content is an object; mapping sources and public PEM certificates are exact text strings. Private keys are never included.
 * @export
 * @interface ConfigurationExportFile
 */
export interface ConfigurationExportFile {
    /**
     * Safe relative POSIX-style path. Paths never start with `/`, contain `\\`, contain an empty component, or contain a `..` component.
     * @type {string}
     * @memberof ConfigurationExportFile
     */
    path: string;
    /**
     * Purpose of the file. `STATE` records observed server identity and is not portable desired configuration.
     * @type {ConfigurationExportFileRoleEnum}
     * @memberof ConfigurationExportFile
     */
    role: ConfigurationExportFileRoleEnum;
    /**
     * How to interpret `content` and calculate its logical bytes. `JSON` uses canonical JSON; `TEXT` uses exact UTF-8 text.
     * @type {ConfigurationExportFileFormatEnum}
     * @memberof ConfigurationExportFile
     */
    format: ConfigurationExportFileFormatEnum;
    /**
     * Media type to use if the logical file is materialized.
     * @type {ConfigurationExportFileMediaTypeEnum}
     * @memberof ConfigurationExportFile
     */
    mediaType: ConfigurationExportFileMediaTypeEnum;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationExportFile
     */
    contentSha256: string;
    /**
     *
     * @type {ConfigurationExportFileContent}
     * @memberof ConfigurationExportFile
     */
    content: ConfigurationExportFileContent;
}


/**
 * @export
 */
export const ConfigurationExportFileRoleEnum = {
    Manifest: 'MANIFEST',
    Resource: 'RESOURCE',
    Source: 'SOURCE',
    Certificate: 'CERTIFICATE',
    State: 'STATE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationExportFileRoleEnum = typeof ConfigurationExportFileRoleEnum[keyof typeof ConfigurationExportFileRoleEnum];

/**
 * @export
 */
export const ConfigurationExportFileFormatEnum = {
    Json: 'JSON',
    Text: 'TEXT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationExportFileFormatEnum = typeof ConfigurationExportFileFormatEnum[keyof typeof ConfigurationExportFileFormatEnum];

/**
 * @export
 */
export const ConfigurationExportFileMediaTypeEnum = {
    ApplicationJson: 'application/json',
    TextPlainCharsetutf8: 'text/plain; charset=utf-8',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationExportFileMediaTypeEnum = typeof ConfigurationExportFileMediaTypeEnum[keyof typeof ConfigurationExportFileMediaTypeEnum];


/**
 * Check if a given object implements the ConfigurationExportFile interface.
 */
export function instanceOfConfigurationExportFile(value: object): value is ConfigurationExportFile {
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('format' in value) || value['format'] === undefined) return false;
    if (!('mediaType' in value) || value['mediaType'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function ConfigurationExportFileFromJSON(json: any): ConfigurationExportFile {
    return ConfigurationExportFileFromJSONTyped(json, false);
}

export function ConfigurationExportFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationExportFile {
    if (json == null) {
        return json;
    }
    return {

        'path': json['path'],
        'role': json['role'],
        'format': json['format'],
        'mediaType': json['mediaType'],
        'contentSha256': json['contentSha256'],
        'content': ConfigurationExportFileContentFromJSON(json['content']),
    };
}

export function ConfigurationExportFileToJSON(json: any): ConfigurationExportFile {
    return ConfigurationExportFileToJSONTyped(json, false);
}

export function ConfigurationExportFileToJSONTyped(value?: ConfigurationExportFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'path': value['path'],
        'role': value['role'],
        'format': value['format'],
        'mediaType': value['mediaType'],
        'contentSha256': value['contentSha256'],
        'content': ConfigurationExportFileContentToJSON(value['content']),
    };
}
