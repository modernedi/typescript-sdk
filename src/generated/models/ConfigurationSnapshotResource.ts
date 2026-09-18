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
 * @interface ConfigurationSnapshotResource
 */
export interface ConfigurationSnapshotResource {
    /**
     *
     * @type {ConfigurationResourceKind}
     * @memberof ConfigurationSnapshotResource
     */
    kind: ConfigurationResourceKind;
    /**
     * Stable portable identity from the corresponding resource document.
     * @type {string}
     * @memberof ConfigurationSnapshotResource
     */
    key: string;
    /**
     * Current workspace-scoped database id used by the existing per-resource Integration API endpoints.
     * @type {number}
     * @memberof ConfigurationSnapshotResource
     */
    resourceId: number;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationSnapshotResource
     */
    contentSha256: string;
    /**
     * Current quoted ETag from the corresponding partner, AS2 connection, or mapping API representation.
     * @type {string}
     * @memberof ConfigurationSnapshotResource
     */
    apiEtag: string;
}



/**
 * Check if a given object implements the ConfigurationSnapshotResource interface.
 */
export function instanceOfConfigurationSnapshotResource(value: object): value is ConfigurationSnapshotResource {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('resourceId' in value) || value['resourceId'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    if (!('apiEtag' in value) || value['apiEtag'] === undefined) return false;
    return true;
}

export function ConfigurationSnapshotResourceFromJSON(json: any): ConfigurationSnapshotResource {
    return ConfigurationSnapshotResourceFromJSONTyped(json, false);
}

export function ConfigurationSnapshotResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationSnapshotResource {
    if (json == null) {
        return json;
    }
    return {

        'kind': ConfigurationResourceKindFromJSON(json['kind']),
        'key': json['key'],
        'resourceId': json['resourceId'],
        'contentSha256': json['contentSha256'],
        'apiEtag': json['apiEtag'],
    };
}

export function ConfigurationSnapshotResourceToJSON(json: any): ConfigurationSnapshotResource {
    return ConfigurationSnapshotResourceToJSONTyped(json, false);
}

export function ConfigurationSnapshotResourceToJSONTyped(value?: ConfigurationSnapshotResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': ConfigurationResourceKindToJSON(value['kind']),
        'key': value['key'],
        'resourceId': value['resourceId'],
        'contentSha256': value['contentSha256'],
        'apiEtag': value['apiEtag'],
    };
}
