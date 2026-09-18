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
import type { ConfigurationDesiredFileContent } from './ConfigurationDesiredFileContent.js';
import {
    ConfigurationDesiredFileContentFromJSON,
    ConfigurationDesiredFileContentFromJSONTyped,
    ConfigurationDesiredFileContentToJSON,
    ConfigurationDesiredFileContentToJSONTyped,
} from './ConfigurationDesiredFileContent.js';

/**
 * One portable desired-state file accepted by configuration planning. JSON content is an object; SOURCE and CERTIFICATE content are exact UTF-8 text strings. A CERTIFICATE must contain exactly one public X.509 certificate in canonical PEM and use as2-connections/<key>/certificates/<name>.pem. Names have 1-64 lowercase letters, digits, hyphens or underscores and start with a letter or digit. Production and Test may reference the same file within their connection.
 * @export
 * @interface ConfigurationDesiredFile
 */
export interface ConfigurationDesiredFile {
    /**
     * Safe relative POSIX-style path outside `_state`. The sole MANIFEST path is exactly `modernedi.json`.
     * @type {string}
     * @memberof ConfigurationDesiredFile
     */
    path: string;
    /**
     * Desired-file purpose. STATE is deliberately excluded because observed server identity is not portable desired configuration.
     * @type {ConfigurationDesiredFileRoleEnum}
     * @memberof ConfigurationDesiredFile
     */
    role: ConfigurationDesiredFileRoleEnum;
    /**
     * MANIFEST and RESOURCE files use JSON; SOURCE and CERTIFICATE files use TEXT.
     * @type {ConfigurationDesiredFileFormatEnum}
     * @memberof ConfigurationDesiredFile
     */
    format: ConfigurationDesiredFileFormatEnum;
    /**
     * MANIFEST and RESOURCE files use `application/json`; SOURCE and CERTIFICATE files use exact UTF-8 text.
     * @type {ConfigurationDesiredFileMediaTypeEnum}
     * @memberof ConfigurationDesiredFile
     */
    mediaType: ConfigurationDesiredFileMediaTypeEnum;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationDesiredFile
     */
    contentSha256: string;
    /**
     *
     * @type {ConfigurationDesiredFileContent}
     * @memberof ConfigurationDesiredFile
     */
    content: ConfigurationDesiredFileContent;
}


/**
 * @export
 */
export const ConfigurationDesiredFileRoleEnum = {
    Manifest: 'MANIFEST',
    Resource: 'RESOURCE',
    Source: 'SOURCE',
    Certificate: 'CERTIFICATE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationDesiredFileRoleEnum = typeof ConfigurationDesiredFileRoleEnum[keyof typeof ConfigurationDesiredFileRoleEnum];

/**
 * @export
 */
export const ConfigurationDesiredFileFormatEnum = {
    Json: 'JSON',
    Text: 'TEXT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationDesiredFileFormatEnum = typeof ConfigurationDesiredFileFormatEnum[keyof typeof ConfigurationDesiredFileFormatEnum];

/**
 * @export
 */
export const ConfigurationDesiredFileMediaTypeEnum = {
    ApplicationJson: 'application/json',
    TextPlainCharsetutf8: 'text/plain; charset=utf-8',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationDesiredFileMediaTypeEnum = typeof ConfigurationDesiredFileMediaTypeEnum[keyof typeof ConfigurationDesiredFileMediaTypeEnum];


/**
 * Check if a given object implements the ConfigurationDesiredFile interface.
 */
export function instanceOfConfigurationDesiredFile(value: object): value is ConfigurationDesiredFile {
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (value['role'] !== 'MANIFEST' && value['role'] !== 'RESOURCE' && value['role'] !== 'SOURCE' && value['role'] !== 'CERTIFICATE') return false;
    if (!('format' in value) || value['format'] === undefined) return false;
    if (!('mediaType' in value) || value['mediaType'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function ConfigurationDesiredFileFromJSON(json: any): ConfigurationDesiredFile {
    return ConfigurationDesiredFileFromJSONTyped(json, false);
}

export function ConfigurationDesiredFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationDesiredFile {
    if (json == null) {
        return json;
    }
    return {

        'path': json['path'],
        'role': json['role'],
        'format': json['format'],
        'mediaType': json['mediaType'],
        'contentSha256': json['contentSha256'],
        'content': ConfigurationDesiredFileContentFromJSON(json['content']),
    };
}

export function ConfigurationDesiredFileToJSON(json: any): ConfigurationDesiredFile {
    return ConfigurationDesiredFileToJSONTyped(json, false);
}

export function ConfigurationDesiredFileToJSONTyped(value?: ConfigurationDesiredFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'path': value['path'],
        'role': value['role'],
        'format': value['format'],
        'mediaType': value['mediaType'],
        'contentSha256': value['contentSha256'],
        'content': ConfigurationDesiredFileContentToJSON(value['content']),
    };
}
