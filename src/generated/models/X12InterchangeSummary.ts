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
import type { X12FunctionalGroupSummary } from './X12FunctionalGroupSummary.js';
import {
    X12FunctionalGroupSummaryFromJSON,
    X12FunctionalGroupSummaryFromJSONTyped,
    X12FunctionalGroupSummaryToJSON,
    X12FunctionalGroupSummaryToJSONTyped,
} from './X12FunctionalGroupSummary.js';
import type { X12SeparatorSummary } from './X12SeparatorSummary.js';
import {
    X12SeparatorSummaryFromJSON,
    X12SeparatorSummaryFromJSONTyped,
    X12SeparatorSummaryToJSON,
    X12SeparatorSummaryToJSONTyped,
} from './X12SeparatorSummary.js';

/**
 * Parsed ISA/IEA envelope and its functional groups, transactions, separators, and readable previews.
 * @export
 * @interface X12InterchangeSummary
 */
export interface X12InterchangeSummary {
    /**
     * X12 implementation version resolved from the interchange and functional-group headers.
     * @type {string}
     * @memberof X12InterchangeSummary
     */
    x12Version: string;
    /**
     * ISA13 interchange control number from the submitted document.
     * @type {string}
     * @memberof X12InterchangeSummary
     */
    controlNumber: string;
    /**
     * Whether the interchange is an X12 technical acknowledgment document.
     * @type {boolean}
     * @memberof X12InterchangeSummary
     */
    technicalAcknowledgment: boolean;
    /**
     * Whether the interchange is an X12 997 functional acknowledgment.
     * @type {boolean}
     * @memberof X12InterchangeSummary
     */
    functionalAcknowledgment: boolean;
    /**
     * Whether the interchange is an X12 999 implementation acknowledgment.
     * @type {boolean}
     * @memberof X12InterchangeSummary
     */
    implementationAcknowledgment: boolean;
    /**
     *
     * @type {X12SeparatorSummary}
     * @memberof X12InterchangeSummary
     */
    separators: X12SeparatorSummary;
    /**
     * Number of parsed GS/GE functional groups in the interchange.
     * @type {number}
     * @memberof X12InterchangeSummary
     */
    functionalGroupCount: number;
    /**
     * Total number of parsed ST/SE transaction sets across all groups.
     * @type {number}
     * @memberof X12InterchangeSummary
     */
    transactionCount: number;
    /**
     * Parsed functional groups in source order.
     * @type {Array<X12FunctionalGroupSummary>}
     * @memberof X12InterchangeSummary
     */
    functionalGroups: Array<X12FunctionalGroupSummary>;
}

/**
 * Check if a given object implements the X12InterchangeSummary interface.
 */
export function instanceOfX12InterchangeSummary(value: object): value is X12InterchangeSummary {
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('controlNumber' in value) || value['controlNumber'] === undefined) return false;
    if (!('technicalAcknowledgment' in value) || value['technicalAcknowledgment'] === undefined) return false;
    if (!('functionalAcknowledgment' in value) || value['functionalAcknowledgment'] === undefined) return false;
    if (!('implementationAcknowledgment' in value) || value['implementationAcknowledgment'] === undefined) return false;
    if (!('separators' in value) || value['separators'] === undefined) return false;
    if (!('functionalGroupCount' in value) || value['functionalGroupCount'] === undefined) return false;
    if (!('transactionCount' in value) || value['transactionCount'] === undefined) return false;
    if (!('functionalGroups' in value) || value['functionalGroups'] === undefined) return false;
    return true;
}

export function X12InterchangeSummaryFromJSON(json: any): X12InterchangeSummary {
    return X12InterchangeSummaryFromJSONTyped(json, false);
}

export function X12InterchangeSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12InterchangeSummary {
    if (json == null) {
        return json;
    }
    return {

        'x12Version': json['x12Version'],
        'controlNumber': json['controlNumber'],
        'technicalAcknowledgment': json['technicalAcknowledgment'],
        'functionalAcknowledgment': json['functionalAcknowledgment'],
        'implementationAcknowledgment': json['implementationAcknowledgment'],
        'separators': X12SeparatorSummaryFromJSON(json['separators']),
        'functionalGroupCount': json['functionalGroupCount'],
        'transactionCount': json['transactionCount'],
        'functionalGroups': ((json['functionalGroups'] as Array<any>).map(X12FunctionalGroupSummaryFromJSON)),
    };
}

export function X12InterchangeSummaryToJSON(json: any): X12InterchangeSummary {
    return X12InterchangeSummaryToJSONTyped(json, false);
}

export function X12InterchangeSummaryToJSONTyped(value?: X12InterchangeSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'x12Version': value['x12Version'],
        'controlNumber': value['controlNumber'],
        'technicalAcknowledgment': value['technicalAcknowledgment'],
        'functionalAcknowledgment': value['functionalAcknowledgment'],
        'implementationAcknowledgment': value['implementationAcknowledgment'],
        'separators': X12SeparatorSummaryToJSON(value['separators']),
        'functionalGroupCount': value['functionalGroupCount'],
        'transactionCount': value['transactionCount'],
        'functionalGroups': ((value['functionalGroups'] as Array<any>).map(X12FunctionalGroupSummaryToJSON)),
    };
}
