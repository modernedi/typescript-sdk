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
 * @interface MappingConfigurationRevisionTransformDetail
 */
export interface MappingConfigurationRevisionTransformDetail {
    /**
     * Transform runtime that compiled or interpreted this archived source.
     * @type {MappingConfigurationRevisionTransformDetailTypeEnum}
     * @memberof MappingConfigurationRevisionTransformDetail
     */
    type: MappingConfigurationRevisionTransformDetailTypeEnum;
    /**
     * Transform filename retained in this configuration revision.
     * @type {string}
     * @memberof MappingConfigurationRevisionTransformDetail
     */
    fileName: string;
    /**
     * Complete immutable historical transform source, suitable for previewing or diffing against the current mapping source.
     * @type {string}
     * @memberof MappingConfigurationRevisionTransformDetail
     */
    source: string;
}


/**
 * @export
 */
export const MappingConfigurationRevisionTransformDetailTypeEnum = {
    X12Mapper: 'X12_MAPPER',
    Xslt: 'XSLT',
    Jslt: 'JSLT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingConfigurationRevisionTransformDetailTypeEnum = typeof MappingConfigurationRevisionTransformDetailTypeEnum[keyof typeof MappingConfigurationRevisionTransformDetailTypeEnum];


/**
 * Check if a given object implements the MappingConfigurationRevisionTransformDetail interface.
 */
export function instanceOfMappingConfigurationRevisionTransformDetail(value: object): value is MappingConfigurationRevisionTransformDetail {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fileName' in value) || value['fileName'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function MappingConfigurationRevisionTransformDetailFromJSON(json: any): MappingConfigurationRevisionTransformDetail {
    return MappingConfigurationRevisionTransformDetailFromJSONTyped(json, false);
}

export function MappingConfigurationRevisionTransformDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingConfigurationRevisionTransformDetail {
    if (json == null) {
        return json;
    }
    return {

        'type': json['type'],
        'fileName': json['fileName'],
        'source': json['source'],
    };
}

export function MappingConfigurationRevisionTransformDetailToJSON(json: any): MappingConfigurationRevisionTransformDetail {
    return MappingConfigurationRevisionTransformDetailToJSONTyped(json, false);
}

export function MappingConfigurationRevisionTransformDetailToJSONTyped(value?: MappingConfigurationRevisionTransformDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'type': value['type'],
        'fileName': value['fileName'],
        'source': value['source'],
    };
}
