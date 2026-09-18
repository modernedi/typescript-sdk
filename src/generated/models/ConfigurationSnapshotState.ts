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
import type { ConfigurationDocumentApiVersion } from './ConfigurationDocumentApiVersion.js';
import {
    ConfigurationDocumentApiVersionFromJSON,
    ConfigurationDocumentApiVersionFromJSONTyped,
    ConfigurationDocumentApiVersionToJSON,
    ConfigurationDocumentApiVersionToJSONTyped,
} from './ConfigurationDocumentApiVersion.js';
import type { ConfigurationSnapshotResource } from './ConfigurationSnapshotResource.js';
import {
    ConfigurationSnapshotResourceFromJSON,
    ConfigurationSnapshotResourceFromJSONTyped,
    ConfigurationSnapshotResourceToJSON,
    ConfigurationSnapshotResourceToJSONTyped,
} from './ConfigurationSnapshotResource.js';

/**
 * Observed server state stored at `_state/snapshot.json`. It relates portable resource keys to current workspace ids, API ETags, and exported resource hashes.
 * @export
 * @interface ConfigurationSnapshotState
 */
export interface ConfigurationSnapshotState {
    /**
     *
     * @type {ConfigurationDocumentApiVersion}
     * @memberof ConfigurationSnapshotState
     */
    apiVersion: ConfigurationDocumentApiVersion;
    /**
     *
     * @type {ConfigurationSnapshotStateKindEnum}
     * @memberof ConfigurationSnapshotState
     */
    kind: ConfigurationSnapshotStateKindEnum;
    /**
     * Monotonic workspace runtime-configuration revision observed by this export transaction.
     * @type {number}
     * @memberof ConfigurationSnapshotState
     */
    runtimeConfigurationRevision: number;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationSnapshotState
     */
    bundleSha256: string;
    /**
     * Observed resource state sorted by kind and portable key.
     * @type {Array<ConfigurationSnapshotResource>}
     * @memberof ConfigurationSnapshotState
     */
    resources: Array<ConfigurationSnapshotResource>;
}


/**
 * @export
 */
export const ConfigurationSnapshotStateKindEnum = {
    IntegrationConfigurationSnapshot: 'IntegrationConfigurationSnapshot',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationSnapshotStateKindEnum = typeof ConfigurationSnapshotStateKindEnum[keyof typeof ConfigurationSnapshotStateKindEnum];


/**
 * Check if a given object implements the ConfigurationSnapshotState interface.
 */
export function instanceOfConfigurationSnapshotState(value: object): value is ConfigurationSnapshotState {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'IntegrationConfigurationSnapshot') return false;

    if (!('runtimeConfigurationRevision' in value) || value['runtimeConfigurationRevision'] === undefined) return false;
    if (!('bundleSha256' in value) || value['bundleSha256'] === undefined) return false;
    if (!('resources' in value) || value['resources'] === undefined) return false;
    return true;
}

export function ConfigurationSnapshotStateFromJSON(json: any): ConfigurationSnapshotState {
    return ConfigurationSnapshotStateFromJSONTyped(json, false);
}

export function ConfigurationSnapshotStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationSnapshotState {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': ConfigurationDocumentApiVersionFromJSON(json['apiVersion']),
        'kind': json['kind'],
        'runtimeConfigurationRevision': json['runtimeConfigurationRevision'],
        'bundleSha256': json['bundleSha256'],
        'resources': ((json['resources'] as Array<any>).map(ConfigurationSnapshotResourceFromJSON)),
    };
}

export function ConfigurationSnapshotStateToJSON(json: any): ConfigurationSnapshotState {
    return ConfigurationSnapshotStateToJSONTyped(json, false);
}

export function ConfigurationSnapshotStateToJSONTyped(value?: ConfigurationSnapshotState | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': ConfigurationDocumentApiVersionToJSON(value['apiVersion']),
        'kind': value['kind'],
        'runtimeConfigurationRevision': value['runtimeConfigurationRevision'],
        'bundleSha256': value['bundleSha256'],
        'resources': ((value['resources'] as Array<any>).map(ConfigurationSnapshotResourceToJSON)),
    };
}
