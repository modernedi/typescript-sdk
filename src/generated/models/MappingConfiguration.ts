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
import type { MappingTransform } from './MappingTransform.js';
import {
    MappingTransformFromJSON,
    MappingTransformFromJSONTyped,
    MappingTransformToJSON,
    MappingTransformToJSONTyped,
} from './MappingTransform.js';
import type { MappingOutputConfiguration } from './MappingOutputConfiguration.js';
import {
    MappingOutputConfigurationFromJSON,
    MappingOutputConfigurationFromJSONTyped,
    MappingOutputConfigurationToJSON,
    MappingOutputConfigurationToJSONTyped,
} from './MappingOutputConfiguration.js';
import type { MappingDeliveredMetadata } from './MappingDeliveredMetadata.js';
import {
    MappingDeliveredMetadataFromJSON,
    MappingDeliveredMetadataFromJSONTyped,
    MappingDeliveredMetadataToJSON,
    MappingDeliveredMetadataToJSONTyped,
} from './MappingDeliveredMetadata.js';
import type { SyntaxTreeCatalogBinding } from './SyntaxTreeCatalogBinding.js';
import {
    SyntaxTreeCatalogBindingFromJSON,
    SyntaxTreeCatalogBindingFromJSONTyped,
    SyntaxTreeCatalogBindingToJSON,
    SyntaxTreeCatalogBindingToJSONTyped,
} from './SyntaxTreeCatalogBinding.js';
import type { MappingBusinessKey } from './MappingBusinessKey.js';
import {
    MappingBusinessKeyFromJSON,
    MappingBusinessKeyFromJSONTyped,
    MappingBusinessKeyToJSON,
    MappingBusinessKeyToJSONTyped,
} from './MappingBusinessKey.js';

/**
 * Complete published map, transform source, output contract, provenance controls, and concurrency ETag.
 * @export
 * @interface MappingConfiguration
 */
export interface MappingConfiguration {
    /**
     * Stable workspace-scoped mapping id used for reads, updates, history, and deletion.
     * @type {number}
     * @memberof MappingConfiguration
     */
    mappingId: number;
    /**
     * Stable workspace-scoped partner id whose X12 traffic this map handles.
     * @type {number}
     * @memberof MappingConfiguration
     */
    partnerId: number;
    /**
     * `INCOMING` transforms partner X12 to application data; `OUTGOING` transforms application data to partner X12.
     * @type {MappingConfigurationDirectionEnum}
     * @memberof MappingConfiguration
     */
    direction: MappingConfigurationDirectionEnum;
    /**
     * Normalized X12 version, such as `4010`.
     * @type {string}
     * @memberof MappingConfiguration
     */
    x12Version: string;
    /**
     * X12 GS01 functional identifier enum name.
     * @type {string}
     * @memberof MappingConfiguration
     */
    functionalIdentifierCode: string;
    /**
     * X12 ST01 transaction-set identifier without a leading underscore.
     * @type {string}
     * @memberof MappingConfiguration
     */
    transactionSetIdentifierCode: string;
    /**
     *
     * @type {SyntaxTreeCatalogBinding}
     * @memberof MappingConfiguration
     */
    syntaxTreeCatalog?: SyntaxTreeCatalogBinding;
    /**
     *
     * @type {MappingTransform}
     * @memberof MappingConfiguration
     */
    transform: MappingTransform;
    /**
     *
     * @type {MappingOutputConfiguration}
     * @memberof MappingConfiguration
     */
    output: MappingOutputConfiguration;
    /**
     *
     * @type {MappingBusinessKey}
     * @memberof MappingConfiguration
     */
    businessKey?: MappingBusinessKey;
    /**
     * Present only for incoming mappings.
     * @type {MappingDeliveredMetadata}
     * @memberof MappingConfiguration
     */
    deliveredMetadata?: MappingDeliveredMetadata;
    /**
     * Portable mapping identity used by exported configuration documents and aggregate plan/apply. Unlike the numeric workspace-local `mappingId`, this key remains stable when the configuration moves between workspaces.
     * @type {string}
     * @memberof MappingConfiguration
     */
    configurationResourceKey: string;
    /**
     * Quoted SHA-256 configuration ETag.
     * @type {string}
     * @memberof MappingConfiguration
     */
    etag: string;
}


/**
 * @export
 */
export const MappingConfigurationDirectionEnum = {
    Incoming: 'INCOMING',
    Outgoing: 'OUTGOING',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingConfigurationDirectionEnum = typeof MappingConfigurationDirectionEnum[keyof typeof MappingConfigurationDirectionEnum];


/**
 * Check if a given object implements the MappingConfiguration interface.
 */
export function instanceOfMappingConfiguration(value: object): value is MappingConfiguration {
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('functionalIdentifierCode' in value) || value['functionalIdentifierCode'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transform' in value) || value['transform'] === undefined) return false;
    if (!('output' in value) || value['output'] === undefined) return false;
    if (!('configurationResourceKey' in value) || value['configurationResourceKey'] === undefined) return false;
    if (!('etag' in value) || value['etag'] === undefined) return false;
    return true;
}

export function MappingConfigurationFromJSON(json: any): MappingConfiguration {
    return MappingConfigurationFromJSONTyped(json, false);
}

export function MappingConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingConfiguration {
    if (json == null) {
        return json;
    }
    return {

        'mappingId': json['mappingId'],
        'partnerId': json['partnerId'],
        'direction': json['direction'],
        'x12Version': json['x12Version'],
        'functionalIdentifierCode': json['functionalIdentifierCode'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'syntaxTreeCatalog': json['syntaxTreeCatalog'] == null ? undefined : SyntaxTreeCatalogBindingFromJSON(json['syntaxTreeCatalog']),
        'transform': MappingTransformFromJSON(json['transform']),
        'output': MappingOutputConfigurationFromJSON(json['output']),
        'businessKey': json['businessKey'] == null ? undefined : MappingBusinessKeyFromJSON(json['businessKey']),
        'deliveredMetadata': json['deliveredMetadata'] == null ? undefined : MappingDeliveredMetadataFromJSON(json['deliveredMetadata']),
        'configurationResourceKey': json['configurationResourceKey'],
        'etag': json['etag'],
    };
}

export function MappingConfigurationToJSON(json: any): MappingConfiguration {
    return MappingConfigurationToJSONTyped(json, false);
}

export function MappingConfigurationToJSONTyped(value?: MappingConfiguration | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'mappingId': value['mappingId'],
        'partnerId': value['partnerId'],
        'direction': value['direction'],
        'x12Version': value['x12Version'],
        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'syntaxTreeCatalog': SyntaxTreeCatalogBindingToJSON(value['syntaxTreeCatalog']),
        'transform': MappingTransformToJSON(value['transform']),
        'output': MappingOutputConfigurationToJSON(value['output']),
        'businessKey': MappingBusinessKeyToJSON(value['businessKey']),
        'deliveredMetadata': MappingDeliveredMetadataToJSON(value['deliveredMetadata']),
        'configurationResourceKey': value['configurationResourceKey'],
        'etag': value['etag'],
    };
}
