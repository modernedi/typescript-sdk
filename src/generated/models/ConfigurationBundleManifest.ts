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
import type { ConfigurationManifestResource } from './ConfigurationManifestResource.js';
import {
    ConfigurationManifestResourceFromJSON,
    ConfigurationManifestResourceFromJSONTyped,
    ConfigurationManifestResourceToJSON,
    ConfigurationManifestResourceToJSONTyped,
} from './ConfigurationManifestResource.js';
import type { ConfigurationManifestFile } from './ConfigurationManifestFile.js';
import {
    ConfigurationManifestFileFromJSON,
    ConfigurationManifestFileFromJSONTyped,
    ConfigurationManifestFileToJSON,
    ConfigurationManifestFileToJSONTyped,
} from './ConfigurationManifestFile.js';

/**
 * Portable desired-state manifest stored at `modernedi.json`. It inventories resources and all desired files but intentionally excludes the manifest itself and `_state/snapshot.json`.
 * @export
 * @interface ConfigurationBundleManifest
 */
export interface ConfigurationBundleManifest {
    /**
     *
     * @type {ConfigurationDocumentApiVersion}
     * @memberof ConfigurationBundleManifest
     */
    apiVersion: ConfigurationDocumentApiVersion;
    /**
     *
     * @type {ConfigurationBundleManifestKindEnum}
     * @memberof ConfigurationBundleManifest
     */
    kind: ConfigurationBundleManifestKindEnum;
    /**
     * Exported resources sorted lexicographically by their resource-document path.
     * @type {Array<ConfigurationManifestResource>}
     * @memberof ConfigurationBundleManifest
     */
    resources: Array<ConfigurationManifestResource>;
    /**
     * Resource and mapping-source files sorted lexicographically by path. Manifest and state files are excluded.
     * @type {Array<ConfigurationManifestFile>}
     * @memberof ConfigurationBundleManifest
     */
    files: Array<ConfigurationManifestFile>;
}


/**
 * @export
 */
export const ConfigurationBundleManifestKindEnum = {
    IntegrationConfiguration: 'IntegrationConfiguration',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationBundleManifestKindEnum = typeof ConfigurationBundleManifestKindEnum[keyof typeof ConfigurationBundleManifestKindEnum];


/**
 * Check if a given object implements the ConfigurationBundleManifest interface.
 */
export function instanceOfConfigurationBundleManifest(value: object): value is ConfigurationBundleManifest {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'IntegrationConfiguration') return false;

    if (!('resources' in value) || value['resources'] === undefined) return false;
    if (!('files' in value) || value['files'] === undefined) return false;
    return true;
}

export function ConfigurationBundleManifestFromJSON(json: any): ConfigurationBundleManifest {
    return ConfigurationBundleManifestFromJSONTyped(json, false);
}

export function ConfigurationBundleManifestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationBundleManifest {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': ConfigurationDocumentApiVersionFromJSON(json['apiVersion']),
        'kind': json['kind'],
        'resources': ((json['resources'] as Array<any>).map(ConfigurationManifestResourceFromJSON)),
        'files': ((json['files'] as Array<any>).map(ConfigurationManifestFileFromJSON)),
    };
}

export function ConfigurationBundleManifestToJSON(json: any): ConfigurationBundleManifest {
    return ConfigurationBundleManifestToJSONTyped(json, false);
}

export function ConfigurationBundleManifestToJSONTyped(value?: ConfigurationBundleManifest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': ConfigurationDocumentApiVersionToJSON(value['apiVersion']),
        'kind': value['kind'],
        'resources': ((value['resources'] as Array<any>).map(ConfigurationManifestResourceToJSON)),
        'files': ((value['files'] as Array<any>).map(ConfigurationManifestFileToJSON)),
    };
}
