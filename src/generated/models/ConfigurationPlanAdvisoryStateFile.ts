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
import type { ConfigurationSnapshotState } from './ConfigurationSnapshotState.js';
import {
    ConfigurationSnapshotStateFromJSON,
    ConfigurationSnapshotStateFromJSONTyped,
    ConfigurationSnapshotStateToJSON,
    ConfigurationSnapshotStateToJSONTyped,
} from './ConfigurationSnapshotState.js';

/**
 * Optional untrusted snapshot copied from configuration export. It is accepted only with the canonical path, role, and JSON representation. ModernEDI compares its digest with current state to report `BASE_SNAPSHOT_STALE`, but never trusts its database ids, ETags, revision, or resource inventory as mutation authority.
 * @export
 * @interface ConfigurationPlanAdvisoryStateFile
 */
export interface ConfigurationPlanAdvisoryStateFile {
    /**
     *
     * @type {ConfigurationPlanAdvisoryStateFilePathEnum}
     * @memberof ConfigurationPlanAdvisoryStateFile
     */
    path: ConfigurationPlanAdvisoryStateFilePathEnum;
    /**
     *
     * @type {ConfigurationPlanAdvisoryStateFileRoleEnum}
     * @memberof ConfigurationPlanAdvisoryStateFile
     */
    role: ConfigurationPlanAdvisoryStateFileRoleEnum;
    /**
     *
     * @type {ConfigurationPlanAdvisoryStateFileFormatEnum}
     * @memberof ConfigurationPlanAdvisoryStateFile
     */
    format: ConfigurationPlanAdvisoryStateFileFormatEnum;
    /**
     *
     * @type {ConfigurationPlanAdvisoryStateFileMediaTypeEnum}
     * @memberof ConfigurationPlanAdvisoryStateFile
     */
    mediaType: ConfigurationPlanAdvisoryStateFileMediaTypeEnum;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationPlanAdvisoryStateFile
     */
    contentSha256: string;
    /**
     *
     * @type {ConfigurationSnapshotState}
     * @memberof ConfigurationPlanAdvisoryStateFile
     */
    content: ConfigurationSnapshotState;
}


/**
 * @export
 */
export const ConfigurationPlanAdvisoryStateFilePathEnum = {
    StateSnapshotJson: '_state/snapshot.json',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanAdvisoryStateFilePathEnum = typeof ConfigurationPlanAdvisoryStateFilePathEnum[keyof typeof ConfigurationPlanAdvisoryStateFilePathEnum];

/**
 * @export
 */
export const ConfigurationPlanAdvisoryStateFileRoleEnum = {
    State: 'STATE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanAdvisoryStateFileRoleEnum = typeof ConfigurationPlanAdvisoryStateFileRoleEnum[keyof typeof ConfigurationPlanAdvisoryStateFileRoleEnum];

/**
 * @export
 */
export const ConfigurationPlanAdvisoryStateFileFormatEnum = {
    Json: 'JSON',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanAdvisoryStateFileFormatEnum = typeof ConfigurationPlanAdvisoryStateFileFormatEnum[keyof typeof ConfigurationPlanAdvisoryStateFileFormatEnum];

/**
 * @export
 */
export const ConfigurationPlanAdvisoryStateFileMediaTypeEnum = {
    ApplicationJson: 'application/json',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanAdvisoryStateFileMediaTypeEnum = typeof ConfigurationPlanAdvisoryStateFileMediaTypeEnum[keyof typeof ConfigurationPlanAdvisoryStateFileMediaTypeEnum];


/**
 * Check if a given object implements the ConfigurationPlanAdvisoryStateFile interface.
 */
export function instanceOfConfigurationPlanAdvisoryStateFile(value: object): value is ConfigurationPlanAdvisoryStateFile {
    if (!('path' in value) || value['path'] === undefined) return false;
    if (value['path'] !== '_state/snapshot.json') return false;

    if (!('role' in value) || value['role'] === undefined) return false;
    if (value['role'] !== 'STATE') return false;

    if (!('format' in value) || value['format'] === undefined) return false;
    if (value['format'] !== 'JSON') return false;

    if (!('mediaType' in value) || value['mediaType'] === undefined) return false;
    if (value['mediaType'] !== 'application/json') return false;

    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function ConfigurationPlanAdvisoryStateFileFromJSON(json: any): ConfigurationPlanAdvisoryStateFile {
    return ConfigurationPlanAdvisoryStateFileFromJSONTyped(json, false);
}

export function ConfigurationPlanAdvisoryStateFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanAdvisoryStateFile {
    if (json == null) {
        return json;
    }
    return {

        'path': json['path'],
        'role': json['role'],
        'format': json['format'],
        'mediaType': json['mediaType'],
        'contentSha256': json['contentSha256'],
        'content': ConfigurationSnapshotStateFromJSON(json['content']),
    };
}

export function ConfigurationPlanAdvisoryStateFileToJSON(json: any): ConfigurationPlanAdvisoryStateFile {
    return ConfigurationPlanAdvisoryStateFileToJSONTyped(json, false);
}

export function ConfigurationPlanAdvisoryStateFileToJSONTyped(value?: ConfigurationPlanAdvisoryStateFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'path': value['path'],
        'role': value['role'],
        'format': value['format'],
        'mediaType': value['mediaType'],
        'contentSha256': value['contentSha256'],
        'content': ConfigurationSnapshotStateToJSON(value['content']),
    };
}
