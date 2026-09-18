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
import type { ConfigurationExportFile } from './ConfigurationExportFile.js';
import {
    ConfigurationExportFileFromJSON,
    ConfigurationExportFileFromJSONTyped,
    ConfigurationExportFileToJSON,
    ConfigurationExportFileToJSONTyped,
} from './ConfigurationExportFile.js';

/**
 * Deterministic logical file bundle representing the workspace's current exportable configuration and its observed API state.
 * @export
 * @interface ConfigurationExportResponse
 */
export interface ConfigurationExportResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof ConfigurationExportResponse
     */
    success: boolean;
    /**
     * SHA-256 of the canonical `modernedi.json` manifest content. This identifies the portable desired-state bundle and excludes `_state/snapshot.json`.
     * @type {string}
     * @memberof ConfigurationExportResponse
     */
    bundleSha256: string;
    /**
     * SHA-256 of the canonical `_state/snapshot.json` content, including current database ids and public API ETags.
     * @type {string}
     * @memberof ConfigurationExportResponse
     */
    snapshotSha256: string;
    /**
     * Quoted `snapshotSha256`, also returned in the HTTP `ETag` header and accepted by `If-None-Match`.
     * @type {string}
     * @memberof ConfigurationExportResponse
     */
    snapshotEtag: string;
    /**
     * Complete export sorted lexicographically by `path`. It contains the desired resource and source files plus `modernedi.json` and `_state/snapshot.json`.
     * @type {Array<ConfigurationExportFile>}
     * @memberof ConfigurationExportResponse
     */
    files: Array<ConfigurationExportFile>;
}

/**
 * Check if a given object implements the ConfigurationExportResponse interface.
 */
export function instanceOfConfigurationExportResponse(value: object): value is ConfigurationExportResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('bundleSha256' in value) || value['bundleSha256'] === undefined) return false;
    if (!('snapshotSha256' in value) || value['snapshotSha256'] === undefined) return false;
    if (!('snapshotEtag' in value) || value['snapshotEtag'] === undefined) return false;
    if (!('files' in value) || value['files'] === undefined) return false;
    return true;
}

export function ConfigurationExportResponseFromJSON(json: any): ConfigurationExportResponse {
    return ConfigurationExportResponseFromJSONTyped(json, false);
}

export function ConfigurationExportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationExportResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'bundleSha256': json['bundleSha256'],
        'snapshotSha256': json['snapshotSha256'],
        'snapshotEtag': json['snapshotEtag'],
        'files': ((json['files'] as Array<any>).map(ConfigurationExportFileFromJSON)),
    };
}

export function ConfigurationExportResponseToJSON(json: any): ConfigurationExportResponse {
    return ConfigurationExportResponseToJSONTyped(json, false);
}

export function ConfigurationExportResponseToJSONTyped(value?: ConfigurationExportResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'bundleSha256': value['bundleSha256'],
        'snapshotSha256': value['snapshotSha256'],
        'snapshotEtag': value['snapshotEtag'],
        'files': ((value['files'] as Array<any>).map(ConfigurationExportFileToJSON)),
    };
}
