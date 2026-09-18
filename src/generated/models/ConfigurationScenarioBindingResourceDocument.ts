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
import type { ConfigurationScenarioBindingResourceDocumentSpec } from './ConfigurationScenarioBindingResourceDocumentSpec.js';
import {
    ConfigurationScenarioBindingResourceDocumentSpecFromJSON,
    ConfigurationScenarioBindingResourceDocumentSpecFromJSONTyped,
    ConfigurationScenarioBindingResourceDocumentSpecToJSON,
    ConfigurationScenarioBindingResourceDocumentSpecToJSONTyped,
} from './ConfigurationScenarioBindingResourceDocumentSpec.js';
import type { ConfigurationScenarioDefinitionResourceDocumentMetadata } from './ConfigurationScenarioDefinitionResourceDocumentMetadata.js';
import {
    ConfigurationScenarioDefinitionResourceDocumentMetadataFromJSON,
    ConfigurationScenarioDefinitionResourceDocumentMetadataFromJSONTyped,
    ConfigurationScenarioDefinitionResourceDocumentMetadataToJSON,
    ConfigurationScenarioDefinitionResourceDocumentMetadataToJSONTyped,
} from './ConfigurationScenarioDefinitionResourceDocumentMetadata.js';

/**
 * Optional scenario configuration in the same reviewed bundle as connections, partners and maps. Retirement removes current configuration without deleting published revisions or run evidence.
 * @export
 * @interface ConfigurationScenarioBindingResourceDocument
 */
export interface ConfigurationScenarioBindingResourceDocument {
    /**
     *
     * @type {ConfigurationScenarioBindingResourceDocumentApiVersionEnum}
     * @memberof ConfigurationScenarioBindingResourceDocument
     */
    apiVersion: ConfigurationScenarioBindingResourceDocumentApiVersionEnum;
    /**
     *
     * @type {ConfigurationScenarioBindingResourceDocumentKindEnum}
     * @memberof ConfigurationScenarioBindingResourceDocument
     */
    kind: ConfigurationScenarioBindingResourceDocumentKindEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionResourceDocumentMetadata}
     * @memberof ConfigurationScenarioBindingResourceDocument
     */
    metadata: ConfigurationScenarioDefinitionResourceDocumentMetadata;
    /**
     *
     * @type {ConfigurationScenarioBindingResourceDocumentSpec}
     * @memberof ConfigurationScenarioBindingResourceDocument
     */
    spec: ConfigurationScenarioBindingResourceDocumentSpec;
}


/**
 * @export
 */
export const ConfigurationScenarioBindingResourceDocumentApiVersionEnum = {
    ModernediComV1: 'modernedi.com/v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioBindingResourceDocumentApiVersionEnum = typeof ConfigurationScenarioBindingResourceDocumentApiVersionEnum[keyof typeof ConfigurationScenarioBindingResourceDocumentApiVersionEnum];

/**
 * @export
 */
export const ConfigurationScenarioBindingResourceDocumentKindEnum = {
    ScenarioBinding: 'ScenarioBinding',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioBindingResourceDocumentKindEnum = typeof ConfigurationScenarioBindingResourceDocumentKindEnum[keyof typeof ConfigurationScenarioBindingResourceDocumentKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioBindingResourceDocument interface.
 */
export function instanceOfConfigurationScenarioBindingResourceDocument(value: object): value is ConfigurationScenarioBindingResourceDocument {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (value['apiVersion'] !== 'modernedi.com/v1') return false;

    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'ScenarioBinding') return false;

    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingResourceDocumentFromJSON(json: any): ConfigurationScenarioBindingResourceDocument {
    return ConfigurationScenarioBindingResourceDocumentFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingResourceDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingResourceDocument {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': json['apiVersion'],
        'kind': json['kind'],
        'metadata': ConfigurationScenarioDefinitionResourceDocumentMetadataFromJSON(json['metadata']),
        'spec': ConfigurationScenarioBindingResourceDocumentSpecFromJSON(json['spec']),
    };
}

export function ConfigurationScenarioBindingResourceDocumentToJSON(json: any): ConfigurationScenarioBindingResourceDocument {
    return ConfigurationScenarioBindingResourceDocumentToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingResourceDocumentToJSONTyped(value?: ConfigurationScenarioBindingResourceDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': ConfigurationScenarioDefinitionResourceDocumentMetadataToJSON(value['metadata']),
        'spec': ConfigurationScenarioBindingResourceDocumentSpecToJSON(value['spec']),
    };
}
