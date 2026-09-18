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
import type { ConfigurationScenarioDefinitionResourceDocumentSpec } from './ConfigurationScenarioDefinitionResourceDocumentSpec.js';
import {
    ConfigurationScenarioDefinitionResourceDocumentSpecFromJSON,
    ConfigurationScenarioDefinitionResourceDocumentSpecFromJSONTyped,
    ConfigurationScenarioDefinitionResourceDocumentSpecToJSON,
    ConfigurationScenarioDefinitionResourceDocumentSpecToJSONTyped,
} from './ConfigurationScenarioDefinitionResourceDocumentSpec.js';
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
 * @interface ConfigurationScenarioDefinitionResourceDocument
 */
export interface ConfigurationScenarioDefinitionResourceDocument {
    /**
     *
     * @type {ConfigurationScenarioDefinitionResourceDocumentApiVersionEnum}
     * @memberof ConfigurationScenarioDefinitionResourceDocument
     */
    apiVersion: ConfigurationScenarioDefinitionResourceDocumentApiVersionEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionResourceDocumentKindEnum}
     * @memberof ConfigurationScenarioDefinitionResourceDocument
     */
    kind: ConfigurationScenarioDefinitionResourceDocumentKindEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionResourceDocumentMetadata}
     * @memberof ConfigurationScenarioDefinitionResourceDocument
     */
    metadata: ConfigurationScenarioDefinitionResourceDocumentMetadata;
    /**
     *
     * @type {ConfigurationScenarioDefinitionResourceDocumentSpec}
     * @memberof ConfigurationScenarioDefinitionResourceDocument
     */
    spec: ConfigurationScenarioDefinitionResourceDocumentSpec;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionResourceDocumentApiVersionEnum = {
    ModernediComV1: 'modernedi.com/v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionResourceDocumentApiVersionEnum = typeof ConfigurationScenarioDefinitionResourceDocumentApiVersionEnum[keyof typeof ConfigurationScenarioDefinitionResourceDocumentApiVersionEnum];

/**
 * @export
 */
export const ConfigurationScenarioDefinitionResourceDocumentKindEnum = {
    ScenarioDefinition: 'ScenarioDefinition',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionResourceDocumentKindEnum = typeof ConfigurationScenarioDefinitionResourceDocumentKindEnum[keyof typeof ConfigurationScenarioDefinitionResourceDocumentKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionResourceDocument interface.
 */
export function instanceOfConfigurationScenarioDefinitionResourceDocument(value: object): value is ConfigurationScenarioDefinitionResourceDocument {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (value['apiVersion'] !== 'modernedi.com/v1') return false;

    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'ScenarioDefinition') return false;

    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionResourceDocumentFromJSON(json: any): ConfigurationScenarioDefinitionResourceDocument {
    return ConfigurationScenarioDefinitionResourceDocumentFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionResourceDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionResourceDocument {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': json['apiVersion'],
        'kind': json['kind'],
        'metadata': ConfigurationScenarioDefinitionResourceDocumentMetadataFromJSON(json['metadata']),
        'spec': ConfigurationScenarioDefinitionResourceDocumentSpecFromJSON(json['spec']),
    };
}

export function ConfigurationScenarioDefinitionResourceDocumentToJSON(json: any): ConfigurationScenarioDefinitionResourceDocument {
    return ConfigurationScenarioDefinitionResourceDocumentToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionResourceDocumentToJSONTyped(value?: ConfigurationScenarioDefinitionResourceDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': ConfigurationScenarioDefinitionResourceDocumentMetadataToJSON(value['metadata']),
        'spec': ConfigurationScenarioDefinitionResourceDocumentSpecToJSON(value['spec']),
    };
}
