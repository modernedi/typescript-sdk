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
import type { ConfigurationPartnerSpec } from './ConfigurationPartnerSpec.js';
import {
    ConfigurationPartnerSpecFromJSON,
    ConfigurationPartnerSpecFromJSONTyped,
    ConfigurationPartnerSpecToJSON,
    ConfigurationPartnerSpecToJSONTyped,
} from './ConfigurationPartnerSpec.js';
import type { ConfigurationResourceMetadata } from './ConfigurationResourceMetadata.js';
import {
    ConfigurationResourceMetadataFromJSON,
    ConfigurationResourceMetadataFromJSONTyped,
    ConfigurationResourceMetadataToJSON,
    ConfigurationResourceMetadataToJSONTyped,
} from './ConfigurationResourceMetadata.js';

/**
 * Portable desired state for one active trading partner.
 * @export
 * @interface ConfigurationPartnerResourceDocument
 */
export interface ConfigurationPartnerResourceDocument {
    /**
     *
     * @type {ConfigurationDocumentApiVersion}
     * @memberof ConfigurationPartnerResourceDocument
     */
    apiVersion: ConfigurationDocumentApiVersion;
    /**
     *
     * @type {ConfigurationPartnerResourceDocumentKindEnum}
     * @memberof ConfigurationPartnerResourceDocument
     */
    kind: ConfigurationPartnerResourceDocumentKindEnum;
    /**
     *
     * @type {ConfigurationResourceMetadata}
     * @memberof ConfigurationPartnerResourceDocument
     */
    metadata: ConfigurationResourceMetadata;
    /**
     *
     * @type {ConfigurationPartnerSpec}
     * @memberof ConfigurationPartnerResourceDocument
     */
    spec: ConfigurationPartnerSpec;
}


/**
 * @export
 */
export const ConfigurationPartnerResourceDocumentKindEnum = {
    Partner: 'Partner',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPartnerResourceDocumentKindEnum = typeof ConfigurationPartnerResourceDocumentKindEnum[keyof typeof ConfigurationPartnerResourceDocumentKindEnum];


/**
 * Check if a given object implements the ConfigurationPartnerResourceDocument interface.
 */
export function instanceOfConfigurationPartnerResourceDocument(value: object): value is ConfigurationPartnerResourceDocument {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'Partner') return false;

    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function ConfigurationPartnerResourceDocumentFromJSON(json: any): ConfigurationPartnerResourceDocument {
    return ConfigurationPartnerResourceDocumentFromJSONTyped(json, false);
}

export function ConfigurationPartnerResourceDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPartnerResourceDocument {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': ConfigurationDocumentApiVersionFromJSON(json['apiVersion']),
        'kind': json['kind'],
        'metadata': ConfigurationResourceMetadataFromJSON(json['metadata']),
        'spec': ConfigurationPartnerSpecFromJSON(json['spec']),
    };
}

export function ConfigurationPartnerResourceDocumentToJSON(json: any): ConfigurationPartnerResourceDocument {
    return ConfigurationPartnerResourceDocumentToJSONTyped(json, false);
}

export function ConfigurationPartnerResourceDocumentToJSONTyped(value?: ConfigurationPartnerResourceDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': ConfigurationDocumentApiVersionToJSON(value['apiVersion']),
        'kind': value['kind'],
        'metadata': ConfigurationResourceMetadataToJSON(value['metadata']),
        'spec': ConfigurationPartnerSpecToJSON(value['spec']),
    };
}
