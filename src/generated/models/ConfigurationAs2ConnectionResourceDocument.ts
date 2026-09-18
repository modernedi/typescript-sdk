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
import type { ConfigurationAs2ConnectionSpec } from './ConfigurationAs2ConnectionSpec.js';
import {
    ConfigurationAs2ConnectionSpecFromJSON,
    ConfigurationAs2ConnectionSpecFromJSONTyped,
    ConfigurationAs2ConnectionSpecToJSON,
    ConfigurationAs2ConnectionSpecToJSONTyped,
} from './ConfigurationAs2ConnectionSpec.js';
import type { ConfigurationResourceMetadata } from './ConfigurationResourceMetadata.js';
import {
    ConfigurationResourceMetadataFromJSON,
    ConfigurationResourceMetadataFromJSONTyped,
    ConfigurationResourceMetadataToJSON,
    ConfigurationResourceMetadataToJSONTyped,
} from './ConfigurationResourceMetadata.js';

/**
 * Portable desired state for one AS2 connection.
 * @export
 * @interface ConfigurationAs2ConnectionResourceDocument
 */
export interface ConfigurationAs2ConnectionResourceDocument {
    /**
     *
     * @type {ConfigurationDocumentApiVersion}
     * @memberof ConfigurationAs2ConnectionResourceDocument
     */
    apiVersion: ConfigurationDocumentApiVersion;
    /**
     *
     * @type {ConfigurationAs2ConnectionResourceDocumentKindEnum}
     * @memberof ConfigurationAs2ConnectionResourceDocument
     */
    kind: ConfigurationAs2ConnectionResourceDocumentKindEnum;
    /**
     *
     * @type {ConfigurationResourceMetadata}
     * @memberof ConfigurationAs2ConnectionResourceDocument
     */
    metadata: ConfigurationResourceMetadata;
    /**
     *
     * @type {ConfigurationAs2ConnectionSpec}
     * @memberof ConfigurationAs2ConnectionResourceDocument
     */
    spec: ConfigurationAs2ConnectionSpec;
}


/**
 * @export
 */
export const ConfigurationAs2ConnectionResourceDocumentKindEnum = {
    As2Connection: 'As2Connection',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationAs2ConnectionResourceDocumentKindEnum = typeof ConfigurationAs2ConnectionResourceDocumentKindEnum[keyof typeof ConfigurationAs2ConnectionResourceDocumentKindEnum];


/**
 * Check if a given object implements the ConfigurationAs2ConnectionResourceDocument interface.
 */
export function instanceOfConfigurationAs2ConnectionResourceDocument(value: object): value is ConfigurationAs2ConnectionResourceDocument {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'As2Connection') return false;

    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function ConfigurationAs2ConnectionResourceDocumentFromJSON(json: any): ConfigurationAs2ConnectionResourceDocument {
    return ConfigurationAs2ConnectionResourceDocumentFromJSONTyped(json, false);
}

export function ConfigurationAs2ConnectionResourceDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationAs2ConnectionResourceDocument {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': ConfigurationDocumentApiVersionFromJSON(json['apiVersion']),
        'kind': json['kind'],
        'metadata': ConfigurationResourceMetadataFromJSON(json['metadata']),
        'spec': ConfigurationAs2ConnectionSpecFromJSON(json['spec']),
    };
}

export function ConfigurationAs2ConnectionResourceDocumentToJSON(json: any): ConfigurationAs2ConnectionResourceDocument {
    return ConfigurationAs2ConnectionResourceDocumentToJSONTyped(json, false);
}

export function ConfigurationAs2ConnectionResourceDocumentToJSONTyped(value?: ConfigurationAs2ConnectionResourceDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': ConfigurationDocumentApiVersionToJSON(value['apiVersion']),
        'kind': value['kind'],
        'metadata': ConfigurationResourceMetadataToJSON(value['metadata']),
        'spec': ConfigurationAs2ConnectionSpecToJSON(value['spec']),
    };
}
