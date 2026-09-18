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
/**
 *
 * @export
 * @interface MappingConfigurationRevisionTransformSummary
 */
export interface MappingConfigurationRevisionTransformSummary {
    /**
     * Transform runtime that compiled or interpreted this archived source.
     * @type {MappingConfigurationRevisionTransformSummaryTypeEnum}
     * @memberof MappingConfigurationRevisionTransformSummary
     */
    type: MappingConfigurationRevisionTransformSummaryTypeEnum;
    /**
     * Transform filename retained in this configuration revision.
     * @type {string}
     * @memberof MappingConfigurationRevisionTransformSummary
     */
    fileName: string;
}


/**
 * @export
 */
export const MappingConfigurationRevisionTransformSummaryTypeEnum = {
    X12Mapper: 'X12_MAPPER',
    Xslt: 'XSLT',
    Jslt: 'JSLT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingConfigurationRevisionTransformSummaryTypeEnum = typeof MappingConfigurationRevisionTransformSummaryTypeEnum[keyof typeof MappingConfigurationRevisionTransformSummaryTypeEnum];


/**
 * Check if a given object implements the MappingConfigurationRevisionTransformSummary interface.
 */
export function instanceOfMappingConfigurationRevisionTransformSummary(value: object): value is MappingConfigurationRevisionTransformSummary {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fileName' in value) || value['fileName'] === undefined) return false;
    return true;
}

export function MappingConfigurationRevisionTransformSummaryFromJSON(json: any): MappingConfigurationRevisionTransformSummary {
    return MappingConfigurationRevisionTransformSummaryFromJSONTyped(json, false);
}

export function MappingConfigurationRevisionTransformSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingConfigurationRevisionTransformSummary {
    if (json == null) {
        return json;
    }
    return {

        'type': json['type'],
        'fileName': json['fileName'],
    };
}

export function MappingConfigurationRevisionTransformSummaryToJSON(json: any): MappingConfigurationRevisionTransformSummary {
    return MappingConfigurationRevisionTransformSummaryToJSONTyped(json, false);
}

export function MappingConfigurationRevisionTransformSummaryToJSONTyped(value?: MappingConfigurationRevisionTransformSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'type': value['type'],
        'fileName': value['fileName'],
    };
}
