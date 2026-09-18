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
import type { ConfigurationResourceKind } from './ConfigurationResourceKind.js';
import {
    ConfigurationResourceKindFromJSON,
    ConfigurationResourceKindFromJSONTyped,
    ConfigurationResourceKindToJSON,
    ConfigurationResourceKindToJSONTyped,
} from './ConfigurationResourceKind.js';

/**
 *
 * @export
 * @interface ConfigurationManifestResource
 */
export interface ConfigurationManifestResource {
    /**
     *
     * @type {ConfigurationResourceKind}
     * @memberof ConfigurationManifestResource
     */
    kind: ConfigurationResourceKind;
    /**
     * Stable portable resource key used by other exported resources.
     * @type {string}
     * @memberof ConfigurationManifestResource
     */
    key: string;
    /**
     * Path of the resource document in this bundle.
     * @type {string}
     * @memberof ConfigurationManifestResource
     */
    path: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationManifestResource
     */
    contentSha256: string;
}



/**
 * Check if a given object implements the ConfigurationManifestResource interface.
 */
export function instanceOfConfigurationManifestResource(value: object): value is ConfigurationManifestResource {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    return true;
}

export function ConfigurationManifestResourceFromJSON(json: any): ConfigurationManifestResource {
    return ConfigurationManifestResourceFromJSONTyped(json, false);
}

export function ConfigurationManifestResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationManifestResource {
    if (json == null) {
        return json;
    }
    return {

        'kind': ConfigurationResourceKindFromJSON(json['kind']),
        'key': json['key'],
        'path': json['path'],
        'contentSha256': json['contentSha256'],
    };
}

export function ConfigurationManifestResourceToJSON(json: any): ConfigurationManifestResource {
    return ConfigurationManifestResourceToJSONTyped(json, false);
}

export function ConfigurationManifestResourceToJSONTyped(value?: ConfigurationManifestResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': ConfigurationResourceKindToJSON(value['kind']),
        'key': value['key'],
        'path': value['path'],
        'contentSha256': value['contentSha256'],
    };
}
