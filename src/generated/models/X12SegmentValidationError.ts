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
 * @interface X12SegmentValidationError
 */
export interface X12SegmentValidationError {
    /**
     * Zero-based functional-group index within the parsed interchange.
     * @type {number}
     * @memberof X12SegmentValidationError
     */
    functionalGroupIndex: number;
    /**
     * Zero-based transaction index within the containing functional group.
     * @type {number}
     * @memberof X12SegmentValidationError
     */
    transactionIndex: number;
    /**
     * ST01 transaction-set identifier, such as `850` or `810`.
     * @type {string}
     * @memberof X12SegmentValidationError
     */
    transactionSetIdentifierCode: string;
    /**
     * Human-readable ST01 meaning, or `null` when the code is not in ModernEDI's reference catalog.
     * @type {string}
     * @memberof X12SegmentValidationError
     */
    transactionSetDescription: string | null;
    /**
     * ST02 transaction control number used to correlate the finding with source X12.
     * @type {string}
     * @memberof X12SegmentValidationError
     */
    controlNumber: string;
    /**
     * X12 validator code for the transaction-level finding.
     * @type {string}
     * @memberof X12SegmentValidationError
     */
    code: string;
    /**
     * Human-readable explanation of the transaction-level finding.
     * @type {string}
     * @memberof X12SegmentValidationError
     */
    description: string;
    /**
     * Segment identifier, such as `BEG`, at the reported position.
     * @type {string}
     * @memberof X12SegmentValidationError
     */
    segmentId: string;
    /**
     * One-based segment position within the transaction set.
     * @type {number}
     * @memberof X12SegmentValidationError
     */
    segmentPosition: number;
}

/**
 * Check if a given object implements the X12SegmentValidationError interface.
 */
export function instanceOfX12SegmentValidationError(value: object): value is X12SegmentValidationError {
    if (!('functionalGroupIndex' in value) || value['functionalGroupIndex'] === undefined) return false;
    if (!('transactionIndex' in value) || value['transactionIndex'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transactionSetDescription' in value) || value['transactionSetDescription'] === undefined) return false;
    if (!('controlNumber' in value) || value['controlNumber'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('segmentId' in value) || value['segmentId'] === undefined) return false;
    if (!('segmentPosition' in value) || value['segmentPosition'] === undefined) return false;
    return true;
}

export function X12SegmentValidationErrorFromJSON(json: any): X12SegmentValidationError {
    return X12SegmentValidationErrorFromJSONTyped(json, false);
}

export function X12SegmentValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12SegmentValidationError {
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
    };
}

export function X12SegmentValidationErrorToJSON(json: any): X12SegmentValidationError {
    return X12SegmentValidationErrorToJSONTyped(json, false);
}

export function X12SegmentValidationErrorToJSONTyped(value?: X12SegmentValidationError | null, ignoreDiscriminator: boolean = false): any {
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
    };
}
