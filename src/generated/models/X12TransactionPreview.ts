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
import type { X12SegmentPreview } from './X12SegmentPreview.js';
import {
    X12SegmentPreviewFromJSON,
    X12SegmentPreviewFromJSONTyped,
    X12SegmentPreviewToJSON,
    X12SegmentPreviewToJSONTyped,
} from './X12SegmentPreview.js';

/**
 * Transaction-local X12 text and parsed segment/element values for inspection.
 * @export
 * @interface X12TransactionPreview
 */
export interface X12TransactionPreview {
    /**
     * Complete ST-through-SE X12 text for this transaction using the detected delimiters.
     * @type {string}
     * @memberof X12TransactionPreview
     */
    x12: string;
    /**
     * Number of parsed segments included in `segments`.
     * @type {number}
     * @memberof X12TransactionPreview
     */
    segmentCount: number;
    /**
     * Parsed segments in source order with loop-aware paths.
     * @type {Array<X12SegmentPreview>}
     * @memberof X12TransactionPreview
     */
    segments: Array<X12SegmentPreview>;
}

/**
 * Check if a given object implements the X12TransactionPreview interface.
 */
export function instanceOfX12TransactionPreview(value: object): value is X12TransactionPreview {
    if (!('x12' in value) || value['x12'] === undefined) return false;
    if (!('segmentCount' in value) || value['segmentCount'] === undefined) return false;
    if (!('segments' in value) || value['segments'] === undefined) return false;
    return true;
}

export function X12TransactionPreviewFromJSON(json: any): X12TransactionPreview {
    return X12TransactionPreviewFromJSONTyped(json, false);
}

export function X12TransactionPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12TransactionPreview {
    if (json == null) {
        return json;
    }
    return {

        'x12': json['x12'],
        'segmentCount': json['segmentCount'],
        'segments': ((json['segments'] as Array<any>).map(X12SegmentPreviewFromJSON)),
    };
}

export function X12TransactionPreviewToJSON(json: any): X12TransactionPreview {
    return X12TransactionPreviewToJSONTyped(json, false);
}

export function X12TransactionPreviewToJSONTyped(value?: X12TransactionPreview | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'x12': value['x12'],
        'segmentCount': value['segmentCount'],
        'segments': ((value['segments'] as Array<any>).map(X12SegmentPreviewToJSON)),
    };
}
