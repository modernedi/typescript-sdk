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
import type { ConfigurationMappingSpec } from './ConfigurationMappingSpec.js';
import {
    ConfigurationMappingSpecFromJSON,
    ConfigurationMappingSpecFromJSONTyped,
    ConfigurationMappingSpecToJSON,
    ConfigurationMappingSpecToJSONTyped,
} from './ConfigurationMappingSpec.js';
import type { ConfigurationResourceMetadata } from './ConfigurationResourceMetadata.js';
import {
    ConfigurationResourceMetadataFromJSON,
    ConfigurationResourceMetadataFromJSONTyped,
    ConfigurationResourceMetadataToJSON,
    ConfigurationResourceMetadataToJSONTyped,
} from './ConfigurationResourceMetadata.js';

/**
 * Portable desired state for one published mapping. Executable source is stored in the separately hashed `SOURCE` file named by the transform.
 * @export
 * @interface ConfigurationMappingResourceDocument
 */
export interface ConfigurationMappingResourceDocument {
    /**
     *
     * @type {ConfigurationDocumentApiVersion}
     * @memberof ConfigurationMappingResourceDocument
     */
    apiVersion: ConfigurationDocumentApiVersion;
    /**
     *
     * @type {ConfigurationMappingResourceDocumentKindEnum}
     * @memberof ConfigurationMappingResourceDocument
     */
    kind: ConfigurationMappingResourceDocumentKindEnum;
    /**
     *
     * @type {ConfigurationResourceMetadata}
     * @memberof ConfigurationMappingResourceDocument
     */
    metadata: ConfigurationResourceMetadata;
    /**
     *
     * @type {ConfigurationMappingSpec}
     * @memberof ConfigurationMappingResourceDocument
     */
    spec: ConfigurationMappingSpec;
}


/**
 * @export
 */
export const ConfigurationMappingResourceDocumentKindEnum = {
    Mapping: 'Mapping',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationMappingResourceDocumentKindEnum = typeof ConfigurationMappingResourceDocumentKindEnum[keyof typeof ConfigurationMappingResourceDocumentKindEnum];


/**
 * Check if a given object implements the ConfigurationMappingResourceDocument interface.
 */
export function instanceOfConfigurationMappingResourceDocument(value: object): value is ConfigurationMappingResourceDocument {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'Mapping') return false;

    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function ConfigurationMappingResourceDocumentFromJSON(json: any): ConfigurationMappingResourceDocument {
    return ConfigurationMappingResourceDocumentFromJSONTyped(json, false);
}

export function ConfigurationMappingResourceDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationMappingResourceDocument {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': ConfigurationDocumentApiVersionFromJSON(json['apiVersion']),
        'kind': json['kind'],
        'metadata': ConfigurationResourceMetadataFromJSON(json['metadata']),
        'spec': ConfigurationMappingSpecFromJSON(json['spec']),
    };
}

export function ConfigurationMappingResourceDocumentToJSON(json: any): ConfigurationMappingResourceDocument {
    return ConfigurationMappingResourceDocumentToJSONTyped(json, false);
}

export function ConfigurationMappingResourceDocumentToJSONTyped(value?: ConfigurationMappingResourceDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': ConfigurationDocumentApiVersionToJSON(value['apiVersion']),
        'kind': value['kind'],
        'metadata': ConfigurationResourceMetadataToJSON(value['metadata']),
        'spec': ConfigurationMappingSpecToJSON(value['spec']),
    };
}
