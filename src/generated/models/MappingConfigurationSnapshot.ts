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
import type { ConfigurationMappingRuntime } from './ConfigurationMappingRuntime.js';
import {
    ConfigurationMappingRuntimeFromJSON,
    ConfigurationMappingRuntimeFromJSONTyped,
    ConfigurationMappingRuntimeToJSON,
    ConfigurationMappingRuntimeToJSONTyped,
} from './ConfigurationMappingRuntime.js';
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
 * Complete immutable mapping configuration, including the exact advanced runtime values that participate in its configuration hash.
 * @export
 * @interface MappingConfigurationSnapshot
 */
export interface MappingConfigurationSnapshot {
    /**
     * Stable workspace-scoped mapping id used for reads, updates, history, and deletion.
     * @type {number}
     * @memberof MappingConfigurationSnapshot
     */
    mappingId: number;
    /**
     * Stable workspace-scoped partner id whose X12 traffic this map handles.
     * @type {number}
     * @memberof MappingConfigurationSnapshot
     */
    partnerId: number;
    /**
     * `INCOMING` transforms partner X12 to application data; `OUTGOING` transforms application data to partner X12.
     * @type {MappingConfigurationSnapshotDirectionEnum}
     * @memberof MappingConfigurationSnapshot
     */
    direction: MappingConfigurationSnapshotDirectionEnum;
    /**
     * Normalized X12 version, such as `4010`.
     * @type {string}
     * @memberof MappingConfigurationSnapshot
     */
    x12Version: string;
    /**
     * X12 GS01 functional identifier enum name.
     * @type {string}
     * @memberof MappingConfigurationSnapshot
     */
    functionalIdentifierCode: string;
    /**
     * X12 ST01 transaction-set identifier without a leading underscore.
     * @type {string}
     * @memberof MappingConfigurationSnapshot
     */
    transactionSetIdentifierCode: string;
    /**
     *
     * @type {SyntaxTreeCatalogBinding}
     * @memberof MappingConfigurationSnapshot
     */
    syntaxTreeCatalog?: SyntaxTreeCatalogBinding;
    /**
     *
     * @type {MappingTransform}
     * @memberof MappingConfigurationSnapshot
     */
    transform: MappingTransform;
    /**
     *
     * @type {MappingOutputConfiguration}
     * @memberof MappingConfigurationSnapshot
     */
    output: MappingOutputConfiguration;
    /**
     *
     * @type {MappingBusinessKey}
     * @memberof MappingConfigurationSnapshot
     */
    businessKey?: MappingBusinessKey;
    /**
     * Present only for incoming mappings.
     * @type {MappingDeliveredMetadata}
     * @memberof MappingConfigurationSnapshot
     */
    deliveredMetadata?: MappingDeliveredMetadata;
    /**
     *
     * @type {ConfigurationMappingRuntime}
     * @memberof MappingConfigurationSnapshot
     */
    runtime: ConfigurationMappingRuntime;
}


/**
 * @export
 */
export const MappingConfigurationSnapshotDirectionEnum = {
    Incoming: 'INCOMING',
    Outgoing: 'OUTGOING',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingConfigurationSnapshotDirectionEnum = typeof MappingConfigurationSnapshotDirectionEnum[keyof typeof MappingConfigurationSnapshotDirectionEnum];


/**
 * Check if a given object implements the MappingConfigurationSnapshot interface.
 */
export function instanceOfMappingConfigurationSnapshot(value: object): value is MappingConfigurationSnapshot {
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('functionalIdentifierCode' in value) || value['functionalIdentifierCode'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transform' in value) || value['transform'] === undefined) return false;
    if (!('output' in value) || value['output'] === undefined) return false;
    if (!('runtime' in value) || value['runtime'] === undefined) return false;
    return true;
}

export function MappingConfigurationSnapshotFromJSON(json: any): MappingConfigurationSnapshot {
    return MappingConfigurationSnapshotFromJSONTyped(json, false);
}

export function MappingConfigurationSnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingConfigurationSnapshot {
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
        'runtime': ConfigurationMappingRuntimeFromJSON(json['runtime']),
    };
}

export function MappingConfigurationSnapshotToJSON(json: any): MappingConfigurationSnapshot {
    return MappingConfigurationSnapshotToJSONTyped(json, false);
}

export function MappingConfigurationSnapshotToJSONTyped(value?: MappingConfigurationSnapshot | null, ignoreDiscriminator: boolean = false): any {
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
        'runtime': ConfigurationMappingRuntimeToJSON(value['runtime']),
    };
}
