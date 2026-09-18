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
import type { X12TransactionSummary } from './X12TransactionSummary.js';
import {
    X12TransactionSummaryFromJSON,
    X12TransactionSummaryFromJSONTyped,
    X12TransactionSummaryToJSON,
    X12TransactionSummaryToJSONTyped,
} from './X12TransactionSummary.js';

/**
 * Parsed GS/GE group with its identity, control number, and transaction summaries.
 * @export
 * @interface X12FunctionalGroupSummary
 */
export interface X12FunctionalGroupSummary {
    /**
     * Zero-based group index within the interchange.
     * @type {number}
     * @memberof X12FunctionalGroupSummary
     */
    functionalGroupIndex: number;
    /**
     * GS01 functional identifier code, such as `PO` or `IN`.
     * @type {string}
     * @memberof X12FunctionalGroupSummary
     */
    functionalIdentifierCode: string;
    /**
     * Human-readable GS01 meaning, or `null` for an unknown code.
     * @type {string}
     * @memberof X12FunctionalGroupSummary
     */
    functionalIdentifierDescription: string | null;
    /**
     * GS06 functional-group control number.
     * @type {string}
     * @memberof X12FunctionalGroupSummary
     */
    controlNumber: string;
    /**
     * X12 version declared by the functional-group header.
     * @type {string}
     * @memberof X12FunctionalGroupSummary
     */
    x12Version: string;
    /**
     * Number of ST/SE transaction sets in this group.
     * @type {number}
     * @memberof X12FunctionalGroupSummary
     */
    transactionCount: number;
    /**
     * Parsed transaction summaries in source order.
     * @type {Array<X12TransactionSummary>}
     * @memberof X12FunctionalGroupSummary
     */
    transactions: Array<X12TransactionSummary>;
}

/**
 * Check if a given object implements the X12FunctionalGroupSummary interface.
 */
export function instanceOfX12FunctionalGroupSummary(value: object): value is X12FunctionalGroupSummary {
    if (!('functionalGroupIndex' in value) || value['functionalGroupIndex'] === undefined) return false;
    if (!('functionalIdentifierCode' in value) || value['functionalIdentifierCode'] === undefined) return false;
    if (!('functionalIdentifierDescription' in value) || value['functionalIdentifierDescription'] === undefined) return false;
    if (!('controlNumber' in value) || value['controlNumber'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('transactionCount' in value) || value['transactionCount'] === undefined) return false;
    if (!('transactions' in value) || value['transactions'] === undefined) return false;
    return true;
}

export function X12FunctionalGroupSummaryFromJSON(json: any): X12FunctionalGroupSummary {
    return X12FunctionalGroupSummaryFromJSONTyped(json, false);
}

export function X12FunctionalGroupSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12FunctionalGroupSummary {
    if (json == null) {
        return json;
    }
    return {

        'functionalGroupIndex': json['functionalGroupIndex'],
        'functionalIdentifierCode': json['functionalIdentifierCode'],
        'functionalIdentifierDescription': json['functionalIdentifierDescription'],
        'controlNumber': json['controlNumber'],
        'x12Version': json['x12Version'],
        'transactionCount': json['transactionCount'],
        'transactions': ((json['transactions'] as Array<any>).map(X12TransactionSummaryFromJSON)),
    };
}

export function X12FunctionalGroupSummaryToJSON(json: any): X12FunctionalGroupSummary {
    return X12FunctionalGroupSummaryToJSONTyped(json, false);
}

export function X12FunctionalGroupSummaryToJSONTyped(value?: X12FunctionalGroupSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalGroupIndex': value['functionalGroupIndex'],
        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'functionalIdentifierDescription': value['functionalIdentifierDescription'],
        'controlNumber': value['controlNumber'],
        'x12Version': value['x12Version'],
        'transactionCount': value['transactionCount'],
        'transactions': ((value['transactions'] as Array<any>).map(X12TransactionSummaryToJSON)),
    };
}
