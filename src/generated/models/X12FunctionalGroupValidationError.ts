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
 * Validation finding associated with one GS/GE functional group.
 * @export
 * @interface X12FunctionalGroupValidationError
 */
export interface X12FunctionalGroupValidationError {
    /**
     * Zero-based functional-group index within the parsed interchange.
     * @type {number}
     * @memberof X12FunctionalGroupValidationError
     */
    functionalGroupIndex: number;
    /**
     * GS01 functional identifier code for the affected group.
     * @type {string}
     * @memberof X12FunctionalGroupValidationError
     */
    functionalIdentifierCode: string;
    /**
     * Human-readable GS01 code meaning, or `null` when the code is not in ModernEDI's reference catalog.
     * @type {string}
     * @memberof X12FunctionalGroupValidationError
     */
    functionalIdentifierDescription: string | null;
    /**
     * GS06 functional-group control number used to correlate the finding with source X12.
     * @type {string}
     * @memberof X12FunctionalGroupValidationError
     */
    controlNumber: string;
    /**
     * X12 validator code for the functional-group finding.
     * @type {string}
     * @memberof X12FunctionalGroupValidationError
     */
    code: string;
    /**
     * Human-readable explanation of the functional-group finding.
     * @type {string}
     * @memberof X12FunctionalGroupValidationError
     */
    description: string;
}

/**
 * Check if a given object implements the X12FunctionalGroupValidationError interface.
 */
export function instanceOfX12FunctionalGroupValidationError(value: object): value is X12FunctionalGroupValidationError {
    if (!('functionalGroupIndex' in value) || value['functionalGroupIndex'] === undefined) return false;
    if (!('functionalIdentifierCode' in value) || value['functionalIdentifierCode'] === undefined) return false;
    if (!('functionalIdentifierDescription' in value) || value['functionalIdentifierDescription'] === undefined) return false;
    if (!('controlNumber' in value) || value['controlNumber'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function X12FunctionalGroupValidationErrorFromJSON(json: any): X12FunctionalGroupValidationError {
    return X12FunctionalGroupValidationErrorFromJSONTyped(json, false);
}

export function X12FunctionalGroupValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12FunctionalGroupValidationError {
    if (json == null) {
        return json;
    }
    return {

        'functionalGroupIndex': json['functionalGroupIndex'],
        'functionalIdentifierCode': json['functionalIdentifierCode'],
        'functionalIdentifierDescription': json['functionalIdentifierDescription'],
        'controlNumber': json['controlNumber'],
        'code': json['code'],
        'description': json['description'],
    };
}

export function X12FunctionalGroupValidationErrorToJSON(json: any): X12FunctionalGroupValidationError {
    return X12FunctionalGroupValidationErrorToJSONTyped(json, false);
}

export function X12FunctionalGroupValidationErrorToJSONTyped(value?: X12FunctionalGroupValidationError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalGroupIndex': value['functionalGroupIndex'],
        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'functionalIdentifierDescription': value['functionalIdentifierDescription'],
        'controlNumber': value['controlNumber'],
        'code': value['code'],
        'description': value['description'],
    };
}
