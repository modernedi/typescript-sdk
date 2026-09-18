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
import type { X12TransactionPreview } from './X12TransactionPreview.js';
import {
    X12TransactionPreviewFromJSON,
    X12TransactionPreviewFromJSONTyped,
    X12TransactionPreviewToJSON,
    X12TransactionPreviewToJSONTyped,
} from './X12TransactionPreview.js';

/**
 * Parsed ST/SE transaction identity and readable segment preview.
 * @export
 * @interface X12TransactionSummary
 */
export interface X12TransactionSummary {
    /**
     * Zero-based index of the containing functional group.
     * @type {number}
     * @memberof X12TransactionSummary
     */
    functionalGroupIndex: number;
    /**
     * Zero-based transaction index within the group.
     * @type {number}
     * @memberof X12TransactionSummary
     */
    transactionIndex: number;
    /**
     * ST01 transaction-set identifier, such as `850` or `810`.
     * @type {string}
     * @memberof X12TransactionSummary
     */
    transactionSetIdentifierCode: string;
    /**
     * Human-readable ST01 meaning, or `null` for an unknown code.
     * @type {string}
     * @memberof X12TransactionSummary
     */
    transactionSetDescription: string | null;
    /**
     * ST02 transaction control number.
     * @type {string}
     * @memberof X12TransactionSummary
     */
    controlNumber: string;
    /**
     *
     * @type {X12TransactionPreview}
     * @memberof X12TransactionSummary
     */
    preview: X12TransactionPreview;
}

/**
 * Check if a given object implements the X12TransactionSummary interface.
 */
export function instanceOfX12TransactionSummary(value: object): value is X12TransactionSummary {
    if (!('functionalGroupIndex' in value) || value['functionalGroupIndex'] === undefined) return false;
    if (!('transactionIndex' in value) || value['transactionIndex'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transactionSetDescription' in value) || value['transactionSetDescription'] === undefined) return false;
    if (!('controlNumber' in value) || value['controlNumber'] === undefined) return false;
    if (!('preview' in value) || value['preview'] === undefined) return false;
    return true;
}

export function X12TransactionSummaryFromJSON(json: any): X12TransactionSummary {
    return X12TransactionSummaryFromJSONTyped(json, false);
}

export function X12TransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12TransactionSummary {
    if (json == null) {
        return json;
    }
    return {

        'functionalGroupIndex': json['functionalGroupIndex'],
        'transactionIndex': json['transactionIndex'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'transactionSetDescription': json['transactionSetDescription'],
        'controlNumber': json['controlNumber'],
        'preview': X12TransactionPreviewFromJSON(json['preview']),
    };
}

export function X12TransactionSummaryToJSON(json: any): X12TransactionSummary {
    return X12TransactionSummaryToJSONTyped(json, false);
}

export function X12TransactionSummaryToJSONTyped(value?: X12TransactionSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalGroupIndex': value['functionalGroupIndex'],
        'transactionIndex': value['transactionIndex'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'transactionSetDescription': value['transactionSetDescription'],
        'controlNumber': value['controlNumber'],
        'preview': X12TransactionPreviewToJSON(value['preview']),
    };
}
