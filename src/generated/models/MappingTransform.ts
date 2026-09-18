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
 * @interface MappingTransform
 */
export interface MappingTransform {
    /**
     * Transform runtime selected by mapping direction. Incoming mappings use `X12_MAPPER`; outgoing mappings use `XSLT` or `JSLT`.
     * @type {MappingTransformTypeEnum}
     * @memberof MappingTransform
     */
    type: MappingTransformTypeEnum;
    /**
     * Source-controlled transform filename shown in the workspace and transaction provenance.
     * @type {string}
     * @memberof MappingTransform
     */
    fileName: string;
    /**
     * Complete map source text, limited to 524,288 characters (512 KiB) by the executable mapping runtime. This value is returned on reads for configuration-as-code workflows.
     * @type {string}
     * @memberof MappingTransform
     */
    source: string;
}


/**
 * @export
 */
export const MappingTransformTypeEnum = {
    X12Mapper: 'X12_MAPPER',
    Xslt: 'XSLT',
    Jslt: 'JSLT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingTransformTypeEnum = typeof MappingTransformTypeEnum[keyof typeof MappingTransformTypeEnum];


/**
 * Check if a given object implements the MappingTransform interface.
 */
export function instanceOfMappingTransform(value: object): value is MappingTransform {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fileName' in value) || value['fileName'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function MappingTransformFromJSON(json: any): MappingTransform {
    return MappingTransformFromJSONTyped(json, false);
}

export function MappingTransformFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingTransform {
    if (json == null) {
        return json;
    }
    return {

        'type': json['type'],
        'fileName': json['fileName'],
        'source': json['source'],
    };
}

export function MappingTransformToJSON(json: any): MappingTransform {
    return MappingTransformToJSONTyped(json, false);
}

export function MappingTransformToJSONTyped(value?: MappingTransform | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'type': value['type'],
        'fileName': value['fileName'],
        'source': value['source'],
    };
}
