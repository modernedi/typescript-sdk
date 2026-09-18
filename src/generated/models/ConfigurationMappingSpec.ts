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
import type { ConfigurationMappingTransform } from './ConfigurationMappingTransform.js';
import {
    ConfigurationMappingTransformFromJSON,
    ConfigurationMappingTransformFromJSONTyped,
    ConfigurationMappingTransformToJSON,
    ConfigurationMappingTransformToJSONTyped,
} from './ConfigurationMappingTransform.js';
import type { ConfigurationMappingOutput } from './ConfigurationMappingOutput.js';
import {
    ConfigurationMappingOutputFromJSON,
    ConfigurationMappingOutputFromJSONTyped,
    ConfigurationMappingOutputToJSON,
    ConfigurationMappingOutputToJSONTyped,
} from './ConfigurationMappingOutput.js';
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
import type { MappingRegressionCase } from './MappingRegressionCase.js';
import {
    MappingRegressionCaseFromJSON,
    MappingRegressionCaseFromJSONTyped,
    MappingRegressionCaseToJSON,
    MappingRegressionCaseToJSONTyped,
} from './MappingRegressionCase.js';
import type { MappingBusinessKey } from './MappingBusinessKey.js';
import {
    MappingBusinessKeyFromJSON,
    MappingBusinessKeyFromJSONTyped,
    MappingBusinessKeyToJSON,
    MappingBusinessKeyToJSONTyped,
} from './MappingBusinessKey.js';

/**
 * Published mapping configuration without its database id, API ETag, or server-resolved syntax-tree provenance. The partner reference and source reference are portable bundle values.
 * @export
 * @interface ConfigurationMappingSpec
 */
export interface ConfigurationMappingSpec {
    /**
     * Optional saved editor tests. Omit when empty; sort by unique case id. The canonical JSON array must fit within 256 KiB. Fixtures enter configuration and Git history, so use sanitized sample data. Editing only these cases does not change the live mapping or refresh scenario bindings. Stored cases do not assert a passing result and do not gate apply.
     *
     * @type {Array<MappingRegressionCase>}
     * @memberof ConfigurationMappingSpec
     */
    regressionCases?: Array<MappingRegressionCase>;
    /**
     * Portable key of the partner resource this mapping handles.
     * @type {string}
     * @memberof ConfigurationMappingSpec
     */
    partnerKey: string;
    /**
     *
     * @type {ConfigurationMappingSpecDirectionEnum}
     * @memberof ConfigurationMappingSpec
     */
    direction: ConfigurationMappingSpecDirectionEnum;
    /**
     * Normalized X12 version, such as `4010`.
     * @type {string}
     * @memberof ConfigurationMappingSpec
     */
    x12Version: string;
    /**
     * X12 GS01 functional identifier enum name.
     * @type {string}
     * @memberof ConfigurationMappingSpec
     */
    functionalIdentifierCode: string;
    /**
     * X12 ST01 transaction-set identifier without a leading underscore.
     * @type {string}
     * @memberof ConfigurationMappingSpec
     */
    transactionSetIdentifierCode: string;
    /**
     *
     * @type {ConfigurationMappingTransform}
     * @memberof ConfigurationMappingSpec
     */
    transform: ConfigurationMappingTransform;
    /**
     *
     * @type {ConfigurationMappingOutput}
     * @memberof ConfigurationMappingSpec
     */
    output: ConfigurationMappingOutput;
    /**
     *
     * @type {MappingBusinessKey}
     * @memberof ConfigurationMappingSpec
     */
    businessKey?: MappingBusinessKey;
    /**
     *
     * @type {MappingDeliveredMetadata}
     * @memberof ConfigurationMappingSpec
     */
    deliveredMetadata?: MappingDeliveredMetadata;
    /**
     *
     * @type {ConfigurationMappingRuntime}
     * @memberof ConfigurationMappingSpec
     */
    runtime: ConfigurationMappingRuntime;
}


/**
 * @export
 */
export const ConfigurationMappingSpecDirectionEnum = {
    Incoming: 'INCOMING',
    Outgoing: 'OUTGOING',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationMappingSpecDirectionEnum = typeof ConfigurationMappingSpecDirectionEnum[keyof typeof ConfigurationMappingSpecDirectionEnum];


/**
 * Check if a given object implements the ConfigurationMappingSpec interface.
 */
export function instanceOfConfigurationMappingSpec(value: object): value is ConfigurationMappingSpec {
    if (!('partnerKey' in value) || value['partnerKey'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('functionalIdentifierCode' in value) || value['functionalIdentifierCode'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transform' in value) || value['transform'] === undefined) return false;
    if (!('output' in value) || value['output'] === undefined) return false;
    if (!('runtime' in value) || value['runtime'] === undefined) return false;
    return true;
}

export function ConfigurationMappingSpecFromJSON(json: any): ConfigurationMappingSpec {
    return ConfigurationMappingSpecFromJSONTyped(json, false);
}

export function ConfigurationMappingSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationMappingSpec {
    if (json == null) {
        return json;
    }
    return {

        'regressionCases': json['regressionCases'] == null ? undefined : ((json['regressionCases'] as Array<any>).map(MappingRegressionCaseFromJSON)),
        'partnerKey': json['partnerKey'],
        'direction': json['direction'],
        'x12Version': json['x12Version'],
        'functionalIdentifierCode': json['functionalIdentifierCode'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'transform': ConfigurationMappingTransformFromJSON(json['transform']),
        'output': ConfigurationMappingOutputFromJSON(json['output']),
        'businessKey': json['businessKey'] == null ? undefined : MappingBusinessKeyFromJSON(json['businessKey']),
        'deliveredMetadata': json['deliveredMetadata'] == null ? undefined : MappingDeliveredMetadataFromJSON(json['deliveredMetadata']),
        'runtime': ConfigurationMappingRuntimeFromJSON(json['runtime']),
    };
}

export function ConfigurationMappingSpecToJSON(json: any): ConfigurationMappingSpec {
    return ConfigurationMappingSpecToJSONTyped(json, false);
}

export function ConfigurationMappingSpecToJSONTyped(value?: ConfigurationMappingSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'regressionCases': value['regressionCases'] == null ? undefined : ((value['regressionCases'] as Array<any>).map(MappingRegressionCaseToJSON)),
        'partnerKey': value['partnerKey'],
        'direction': value['direction'],
        'x12Version': value['x12Version'],
        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'transform': ConfigurationMappingTransformToJSON(value['transform']),
        'output': ConfigurationMappingOutputToJSON(value['output']),
        'businessKey': MappingBusinessKeyToJSON(value['businessKey']),
        'deliveredMetadata': MappingDeliveredMetadataToJSON(value['deliveredMetadata']),
        'runtime': ConfigurationMappingRuntimeToJSON(value['runtime']),
    };
}
