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
 * Single-character delimiters detected from the fixed-width ISA segment.
 * @export
 * @interface X12SeparatorSummary
 */
export interface X12SeparatorSummary {
    /**
     * Character separating simple elements within each segment.
     * @type {string}
     * @memberof X12SeparatorSummary
     */
    elementSeparator: string;
    /**
     * Character separating components inside composite data elements.
     * @type {string}
     * @memberof X12SeparatorSummary
     */
    subElementSeparator: string;
    /**
     * Character terminating each X12 segment.
     * @type {string}
     * @memberof X12SeparatorSummary
     */
    segmentTerminator: string;
    /**
     * Repetition separator for versions that support repetitions, or `null` when unavailable.
     * @type {string}
     * @memberof X12SeparatorSummary
     */
    repetitionSeparator: string | null;
}

/**
 * Check if a given object implements the X12SeparatorSummary interface.
 */
export function instanceOfX12SeparatorSummary(value: object): value is X12SeparatorSummary {
    if (!('elementSeparator' in value) || value['elementSeparator'] === undefined) return false;
    if (!('subElementSeparator' in value) || value['subElementSeparator'] === undefined) return false;
    if (!('segmentTerminator' in value) || value['segmentTerminator'] === undefined) return false;
    if (!('repetitionSeparator' in value) || value['repetitionSeparator'] === undefined) return false;
    return true;
}

export function X12SeparatorSummaryFromJSON(json: any): X12SeparatorSummary {
    return X12SeparatorSummaryFromJSONTyped(json, false);
}

export function X12SeparatorSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12SeparatorSummary {
    if (json == null) {
        return json;
    }
    return {

        'elementSeparator': json['elementSeparator'],
        'subElementSeparator': json['subElementSeparator'],
        'segmentTerminator': json['segmentTerminator'],
        'repetitionSeparator': json['repetitionSeparator'],
    };
}

export function X12SeparatorSummaryToJSON(json: any): X12SeparatorSummary {
    return X12SeparatorSummaryToJSONTyped(json, false);
}

export function X12SeparatorSummaryToJSONTyped(value?: X12SeparatorSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'elementSeparator': value['elementSeparator'],
        'subElementSeparator': value['subElementSeparator'],
        'segmentTerminator': value['segmentTerminator'],
        'repetitionSeparator': value['repetitionSeparator'],
    };
}
