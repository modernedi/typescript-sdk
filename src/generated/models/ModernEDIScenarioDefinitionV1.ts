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
import type { ConfigurationScenarioDefinitionMetadata } from './ConfigurationScenarioDefinitionMetadata.js';
import {
    ConfigurationScenarioDefinitionMetadataFromJSON,
    ConfigurationScenarioDefinitionMetadataFromJSONTyped,
    ConfigurationScenarioDefinitionMetadataToJSON,
    ConfigurationScenarioDefinitionMetadataToJSONTyped,
} from './ConfigurationScenarioDefinitionMetadata.js';
import type { ConfigurationScenarioDefinitionSpec } from './ConfigurationScenarioDefinitionSpec.js';
import {
    ConfigurationScenarioDefinitionSpecFromJSON,
    ConfigurationScenarioDefinitionSpecFromJSONTyped,
    ConfigurationScenarioDefinitionSpecToJSON,
    ConfigurationScenarioDefinitionSpecToJSONTyped,
} from './ConfigurationScenarioDefinitionSpec.js';

/**
 * Maps define how documents are processed; scenarios define and prove the business conversation those maps implement. A ScenarioDefinition is the portable recipe for that conversation: who exchanges each X12 business document, which documents belong together, what order and repetition are allowed, and what evidence must pass. Tenant partners, syntax trees, mappings, and executable targets belong in a ScenarioBinding.
 * @export
 * @interface ModernEDIScenarioDefinitionV1
 */
export interface ModernEDIScenarioDefinitionV1 {
    /**
     * Optional portable tooling hint. It does not participate in the definition's canonical content hash.
     * @type {ModernEDIScenarioDefinitionV1SchemaEnum}
     * @memberof ModernEDIScenarioDefinitionV1
     */
    $schema?: ModernEDIScenarioDefinitionV1SchemaEnum;
    /**
     * Wire-contract version for the generally available ScenarioDefinition contract.
     * @type {ModernEDIScenarioDefinitionV1ApiVersionEnum}
     * @memberof ModernEDIScenarioDefinitionV1
     */
    apiVersion: ModernEDIScenarioDefinitionV1ApiVersionEnum;
    /**
     * Discriminator for a scenario definition document.
     * @type {ModernEDIScenarioDefinitionV1KindEnum}
     * @memberof ModernEDIScenarioDefinitionV1
     */
    kind: ModernEDIScenarioDefinitionV1KindEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionMetadata}
     * @memberof ModernEDIScenarioDefinitionV1
     */
    metadata: ConfigurationScenarioDefinitionMetadata;
    /**
     *
     * @type {ConfigurationScenarioDefinitionSpec}
     * @memberof ModernEDIScenarioDefinitionV1
     */
    spec: ConfigurationScenarioDefinitionSpec;
}


/**
 * @export
 */
export const ModernEDIScenarioDefinitionV1SchemaEnum = {
    HttpsWwwModernediComDocsScenariosSchemasScenarioDefinitionV1SchemaJson: 'https://www.modernedi.com/docs/scenarios/schemas/scenario-definition-v1.schema.json',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ModernEDIScenarioDefinitionV1SchemaEnum = typeof ModernEDIScenarioDefinitionV1SchemaEnum[keyof typeof ModernEDIScenarioDefinitionV1SchemaEnum];

/**
 * @export
 */
export const ModernEDIScenarioDefinitionV1ApiVersionEnum = {
    ModernediComScenarioV1: 'modernedi.com/scenario/v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ModernEDIScenarioDefinitionV1ApiVersionEnum = typeof ModernEDIScenarioDefinitionV1ApiVersionEnum[keyof typeof ModernEDIScenarioDefinitionV1ApiVersionEnum];

/**
 * @export
 */
export const ModernEDIScenarioDefinitionV1KindEnum = {
    ScenarioDefinition: 'ScenarioDefinition',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ModernEDIScenarioDefinitionV1KindEnum = typeof ModernEDIScenarioDefinitionV1KindEnum[keyof typeof ModernEDIScenarioDefinitionV1KindEnum];


/**
 * Check if a given object implements the ModernEDIScenarioDefinitionV1 interface.
 */
export function instanceOfModernEDIScenarioDefinitionV1(value: object): value is ModernEDIScenarioDefinitionV1 {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (value['apiVersion'] !== 'modernedi.com/scenario/v1') return false;

    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'ScenarioDefinition') return false;

    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function ModernEDIScenarioDefinitionV1FromJSON(json: any): ModernEDIScenarioDefinitionV1 {
    return ModernEDIScenarioDefinitionV1FromJSONTyped(json, false);
}

export function ModernEDIScenarioDefinitionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ModernEDIScenarioDefinitionV1 {
    if (json == null) {
        return json;
    }
    return {

        '$schema': json['$schema'] == null ? undefined : json['$schema'],
        'apiVersion': json['apiVersion'],
        'kind': json['kind'],
        'metadata': ConfigurationScenarioDefinitionMetadataFromJSON(json['metadata']),
        'spec': ConfigurationScenarioDefinitionSpecFromJSON(json['spec']),
    };
}

export function ModernEDIScenarioDefinitionV1ToJSON(json: any): ModernEDIScenarioDefinitionV1 {
    return ModernEDIScenarioDefinitionV1ToJSONTyped(json, false);
}

export function ModernEDIScenarioDefinitionV1ToJSONTyped(value?: ModernEDIScenarioDefinitionV1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        '$schema': value['$schema'],
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': ConfigurationScenarioDefinitionMetadataToJSON(value['metadata']),
        'spec': ConfigurationScenarioDefinitionSpecToJSON(value['spec']),
    };
}
