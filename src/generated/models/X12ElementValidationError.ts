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
 * @interface X12ElementValidationError
 */
export interface X12ElementValidationError {
    /**
     * Zero-based functional-group index within the parsed interchange.
     * @type {number}
     * @memberof X12ElementValidationError
     */
    functionalGroupIndex: number;
    /**
     * Zero-based transaction index within the containing functional group.
     * @type {number}
     * @memberof X12ElementValidationError
     */
    transactionIndex: number;
    /**
     * ST01 transaction-set identifier, such as `850` or `810`.
     * @type {string}
     * @memberof X12ElementValidationError
     */
    transactionSetIdentifierCode: string;
    /**
     * Human-readable ST01 meaning, or `null` when the code is not in ModernEDI's reference catalog.
     * @type {string}
     * @memberof X12ElementValidationError
     */
    transactionSetDescription: string | null;
    /**
     * ST02 transaction control number used to correlate the finding with source X12.
     * @type {string}
     * @memberof X12ElementValidationError
     */
    controlNumber: string;
    /**
     * X12 validator code for the transaction-level finding.
     * @type {string}
     * @memberof X12ElementValidationError
     */
    code: string;
    /**
     * Human-readable explanation of the transaction-level finding.
     * @type {string}
     * @memberof X12ElementValidationError
     */
    description: string;
    /**
     * Segment identifier, such as `BEG`, at the reported position.
     * @type {string}
     * @memberof X12ElementValidationError
     */
    segmentId: string;
    /**
     * One-based segment position within the transaction set.
     * @type {number}
     * @memberof X12ElementValidationError
     */
    segmentPosition: number;
    /**
     * One-based element position within the affected segment.
     * @type {number}
     * @memberof X12ElementValidationError
     */
    elementPosition: number;
    /**
     * One-based component position for a composite element, or `null` for a simple element.
     * @type {number}
     * @memberof X12ElementValidationError
     */
    compositePosition: number | null;
    /**
     * X12 data-element definition number used to validate the value.
     * @type {string}
     * @memberof X12ElementValidationError
     */
    elementDefinition: string;
    /**
     * Exact submitted element value that failed validation; treat it as potentially sensitive business data.
     * @type {string}
     * @memberof X12ElementValidationError
     */
    badValue: string;
}

/**
 * Check if a given object implements the X12ElementValidationError interface.
 */
export function instanceOfX12ElementValidationError(value: object): value is X12ElementValidationError {
    if (!('functionalGroupIndex' in value) || value['functionalGroupIndex'] === undefined) return false;
    if (!('transactionIndex' in value) || value['transactionIndex'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transactionSetDescription' in value) || value['transactionSetDescription'] === undefined) return false;
    if (!('controlNumber' in value) || value['controlNumber'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('segmentId' in value) || value['segmentId'] === undefined) return false;
    if (!('segmentPosition' in value) || value['segmentPosition'] === undefined) return false;
    if (!('elementPosition' in value) || value['elementPosition'] === undefined) return false;
    if (!('compositePosition' in value) || value['compositePosition'] === undefined) return false;
    if (!('elementDefinition' in value) || value['elementDefinition'] === undefined) return false;
    if (!('badValue' in value) || value['badValue'] === undefined) return false;
    return true;
}

export function X12ElementValidationErrorFromJSON(json: any): X12ElementValidationError {
    return X12ElementValidationErrorFromJSONTyped(json, false);
}

export function X12ElementValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12ElementValidationError {
    if (json == null) {
        return json;
    }
    return {

        'functionalGroupIndex': json['functionalGroupIndex'],
        'transactionIndex': json['transactionIndex'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'transactionSetDescription': json['transactionSetDescription'],
        'controlNumber': json['controlNumber'],
        'code': json['code'],
        'description': json['description'],
        'segmentId': json['segmentId'],
        'segmentPosition': json['segmentPosition'],
        'elementPosition': json['elementPosition'],
        'compositePosition': json['compositePosition'],
        'elementDefinition': json['elementDefinition'],
        'badValue': json['badValue'],
    };
}

export function X12ElementValidationErrorToJSON(json: any): X12ElementValidationError {
    return X12ElementValidationErrorToJSONTyped(json, false);
}

export function X12ElementValidationErrorToJSONTyped(value?: X12ElementValidationError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalGroupIndex': value['functionalGroupIndex'],
        'transactionIndex': value['transactionIndex'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'transactionSetDescription': value['transactionSetDescription'],
        'controlNumber': value['controlNumber'],
        'code': value['code'],
        'description': value['description'],
        'segmentId': value['segmentId'],
        'segmentPosition': value['segmentPosition'],
        'elementPosition': value['elementPosition'],
        'compositePosition': value['compositePosition'],
        'elementDefinition': value['elementDefinition'],
        'badValue': value['badValue'],
    };
}
