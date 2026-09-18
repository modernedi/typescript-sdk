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
import type { ConfigurationScenarioBindingSpec } from './ConfigurationScenarioBindingSpec.js';
import {
    ConfigurationScenarioBindingSpecFromJSON,
    ConfigurationScenarioBindingSpecFromJSONTyped,
    ConfigurationScenarioBindingSpecToJSON,
    ConfigurationScenarioBindingSpecToJSONTyped,
} from './ConfigurationScenarioBindingSpec.js';
import type { ConfigurationScenarioBindingMetadata } from './ConfigurationScenarioBindingMetadata.js';
import {
    ConfigurationScenarioBindingMetadataFromJSON,
    ConfigurationScenarioBindingMetadataFromJSONTyped,
    ConfigurationScenarioBindingMetadataToJSON,
    ConfigurationScenarioBindingMetadataToJSONTyped,
} from './ConfigurationScenarioBindingMetadata.js';

/**
 * A tenant-scoped authoring binding that connects every actor and step in one immutable ScenarioDefinition to current workspace partners and executable targets. It references tenant artifacts by identity and contains no copied runtime configuration, credentials, private keys, or other secrets.
 * @export
 * @interface ModernEDIScenarioBindingV1
 */
export interface ModernEDIScenarioBindingV1 {
    /**
     * Optional portable tooling hint. It does not participate in the binding's canonical content hash.
     * @type {ModernEDIScenarioBindingV1SchemaEnum}
     * @memberof ModernEDIScenarioBindingV1
     */
    $schema?: ModernEDIScenarioBindingV1SchemaEnum;
    /**
     * Wire-contract version for tenant-authored scenario bindings.
     * @type {ModernEDIScenarioBindingV1ApiVersionEnum}
     * @memberof ModernEDIScenarioBindingV1
     */
    apiVersion: ModernEDIScenarioBindingV1ApiVersionEnum;
    /**
     * Discriminator for a scenario binding document.
     * @type {ModernEDIScenarioBindingV1KindEnum}
     * @memberof ModernEDIScenarioBindingV1
     */
    kind: ModernEDIScenarioBindingV1KindEnum;
    /**
     *
     * @type {ConfigurationScenarioBindingMetadata}
     * @memberof ModernEDIScenarioBindingV1
     */
    metadata: ConfigurationScenarioBindingMetadata;
    /**
     *
     * @type {ConfigurationScenarioBindingSpec}
     * @memberof ModernEDIScenarioBindingV1
     */
    spec: ConfigurationScenarioBindingSpec;
}


/**
 * @export
 */
export const ModernEDIScenarioBindingV1SchemaEnum = {
    HttpsWwwModernediComDocsScenariosSchemasScenarioBindingV1SchemaJson: 'https://www.modernedi.com/docs/scenarios/schemas/scenario-binding-v1.schema.json',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ModernEDIScenarioBindingV1SchemaEnum = typeof ModernEDIScenarioBindingV1SchemaEnum[keyof typeof ModernEDIScenarioBindingV1SchemaEnum];

/**
 * @export
 */
export const ModernEDIScenarioBindingV1ApiVersionEnum = {
    ModernediComScenarioBindingAuthoringV1: 'modernedi.com/scenario-binding-authoring/v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ModernEDIScenarioBindingV1ApiVersionEnum = typeof ModernEDIScenarioBindingV1ApiVersionEnum[keyof typeof ModernEDIScenarioBindingV1ApiVersionEnum];

/**
 * @export
 */
export const ModernEDIScenarioBindingV1KindEnum = {
    ScenarioBinding: 'ScenarioBinding',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ModernEDIScenarioBindingV1KindEnum = typeof ModernEDIScenarioBindingV1KindEnum[keyof typeof ModernEDIScenarioBindingV1KindEnum];


/**
 * Check if a given object implements the ModernEDIScenarioBindingV1 interface.
 */
export function instanceOfModernEDIScenarioBindingV1(value: object): value is ModernEDIScenarioBindingV1 {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (value['apiVersion'] !== 'modernedi.com/scenario-binding-authoring/v1') return false;

    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'ScenarioBinding') return false;

    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function ModernEDIScenarioBindingV1FromJSON(json: any): ModernEDIScenarioBindingV1 {
    return ModernEDIScenarioBindingV1FromJSONTyped(json, false);
}

export function ModernEDIScenarioBindingV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ModernEDIScenarioBindingV1 {
    if (json == null) {
        return json;
    }
    return {

        '$schema': json['$schema'] == null ? undefined : json['$schema'],
        'apiVersion': json['apiVersion'],
        'kind': json['kind'],
        'metadata': ConfigurationScenarioBindingMetadataFromJSON(json['metadata']),
        'spec': ConfigurationScenarioBindingSpecFromJSON(json['spec']),
    };
}

export function ModernEDIScenarioBindingV1ToJSON(json: any): ModernEDIScenarioBindingV1 {
    return ModernEDIScenarioBindingV1ToJSONTyped(json, false);
}

export function ModernEDIScenarioBindingV1ToJSONTyped(value?: ModernEDIScenarioBindingV1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        '$schema': value['$schema'],
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': ConfigurationScenarioBindingMetadataToJSON(value['metadata']),
        'spec': ConfigurationScenarioBindingSpecToJSON(value['spec']),
    };
}
