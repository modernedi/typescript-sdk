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
 * @interface MappingBusinessKey
 */
export interface MappingBusinessKey {
    /**
     * Stable customer-facing label for the extracted value, such as `purchaseOrderNumber`.
     * @type {string}
     * @memberof MappingBusinessKey
     */
    name: string;
    /**
     * Incoming X12 mapper expression used to persist the searchable business-key value.
     * @type {string}
     * @memberof MappingBusinessKey
     */
    extractor: string;
}

/**
 * Check if a given object implements the MappingBusinessKey interface.
 */
export function instanceOfMappingBusinessKey(value: object): value is MappingBusinessKey {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('extractor' in value) || value['extractor'] === undefined) return false;
    return true;
}

export function MappingBusinessKeyFromJSON(json: any): MappingBusinessKey {
    return MappingBusinessKeyFromJSONTyped(json, false);
}

export function MappingBusinessKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingBusinessKey {
    if (json == null) {
        return json;
    }
    return {

        'name': json['name'],
        'extractor': json['extractor'],
    };
}

export function MappingBusinessKeyToJSON(json: any): MappingBusinessKey {
    return MappingBusinessKeyToJSONTyped(json, false);
}

export function MappingBusinessKeyToJSONTyped(value?: MappingBusinessKey | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'name': value['name'],
        'extractor': value['extractor'],
    };
}
