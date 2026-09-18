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
 * One populated X12 data element from a parsed segment.
 * @export
 * @interface X12ElementPreview
 */
export interface X12ElementPreview {
    /**
     * One-based element position within the segment.
     * @type {number}
     * @memberof X12ElementPreview
     */
    elementPosition: number;
    /**
     * X12 data-element definition number from the reference catalog.
     * @type {string}
     * @memberof X12ElementPreview
     */
    definition: string;
    /**
     * Human-readable data-element name from the reference catalog.
     * @type {string}
     * @memberof X12ElementPreview
     */
    description: string;
    /**
     * Normalized data type from the X12 reference catalog for this populated element.
     * @type {X12ElementPreviewDataTypeEnum}
     * @memberof X12ElementPreview
     */
    dataType?: X12ElementPreviewDataTypeEnum;
    /**
     * Number of trailing digits interpreted as fractional for a NUMERIC (Nn) element; omitted for every other data type.
     * @type {number}
     * @memberof X12ElementPreview
     */
    impliedDecimalDigits?: number;
    /**
     * Exact parsed source value; treat it as potentially sensitive business data.
     * @type {string}
     * @memberof X12ElementPreview
     */
    value: string;
}


/**
 * @export
 */
export const X12ElementPreviewDataTypeEnum = {
    Alphanumeric: 'ALPHANUMERIC',
    Binary: 'BINARY',
    Date: 'DATE',
    Id: 'ID',
    Numeric: 'NUMERIC',
    Decimal: 'DECIMAL',
    Time: 'TIME',
    Composite: 'COMPOSITE',
    None: 'NONE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type X12ElementPreviewDataTypeEnum = typeof X12ElementPreviewDataTypeEnum[keyof typeof X12ElementPreviewDataTypeEnum];


/**
 * Check if a given object implements the X12ElementPreview interface.
 */
export function instanceOfX12ElementPreview(value: object): value is X12ElementPreview {
    if (!('elementPosition' in value) || value['elementPosition'] === undefined) return false;
    if (!('definition' in value) || value['definition'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function X12ElementPreviewFromJSON(json: any): X12ElementPreview {
    return X12ElementPreviewFromJSONTyped(json, false);
}

export function X12ElementPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12ElementPreview {
    if (json == null) {
        return json;
    }
    return {

        'elementPosition': json['elementPosition'],
        'definition': json['definition'],
        'description': json['description'],
        'dataType': json['dataType'] == null ? undefined : json['dataType'],
        'impliedDecimalDigits': json['impliedDecimalDigits'] == null ? undefined : json['impliedDecimalDigits'],
        'value': json['value'],
    };
}

export function X12ElementPreviewToJSON(json: any): X12ElementPreview {
    return X12ElementPreviewToJSONTyped(json, false);
}

export function X12ElementPreviewToJSONTyped(value?: X12ElementPreview | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'elementPosition': value['elementPosition'],
        'definition': value['definition'],
        'description': value['description'],
        'dataType': value['dataType'],
        'impliedDecimalDigits': value['impliedDecimalDigits'],
        'value': value['value'],
    };
}
