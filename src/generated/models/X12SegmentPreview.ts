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
import type { X12ElementPreview } from './X12ElementPreview.js';
import {
    X12ElementPreviewFromJSON,
    X12ElementPreviewFromJSONTyped,
    X12ElementPreviewToJSON,
    X12ElementPreviewToJSONTyped,
} from './X12ElementPreview.js';

/**
 * One parsed segment and its populated element values.
 * @export
 * @interface X12SegmentPreview
 */
export interface X12SegmentPreview {
    /**
     * One-based segment position within the transaction.
     * @type {number}
     * @memberof X12SegmentPreview
     */
    segmentPosition: number;
    /**
     * X12 segment identifier, such as `BEG` or `N1`.
     * @type {string}
     * @memberof X12SegmentPreview
     */
    segmentId: string;
    /**
     * Human-readable segment name from the X12 reference catalog.
     * @type {string}
     * @memberof X12SegmentPreview
     */
    segmentDescription: string;
    /**
     * Loop-aware path of segment identifiers used to disambiguate repeated segments.
     * @type {Array<string>}
     * @memberof X12SegmentPreview
     */
    segmentPath: Array<string>;
    /**
     * Populated elements only; omitted/empty source elements are not included.
     * @type {Array<X12ElementPreview>}
     * @memberof X12SegmentPreview
     */
    elements: Array<X12ElementPreview>;
}

/**
 * Check if a given object implements the X12SegmentPreview interface.
 */
export function instanceOfX12SegmentPreview(value: object): value is X12SegmentPreview {
    if (!('segmentPosition' in value) || value['segmentPosition'] === undefined) return false;
    if (!('segmentId' in value) || value['segmentId'] === undefined) return false;
    if (!('segmentDescription' in value) || value['segmentDescription'] === undefined) return false;
    if (!('segmentPath' in value) || value['segmentPath'] === undefined) return false;
    if (!('elements' in value) || value['elements'] === undefined) return false;
    return true;
}

export function X12SegmentPreviewFromJSON(json: any): X12SegmentPreview {
    return X12SegmentPreviewFromJSONTyped(json, false);
}

export function X12SegmentPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12SegmentPreview {
    if (json == null) {
        return json;
    }
    return {

        'segmentPosition': json['segmentPosition'],
        'segmentId': json['segmentId'],
        'segmentDescription': json['segmentDescription'],
        'segmentPath': json['segmentPath'],
        'elements': ((json['elements'] as Array<any>).map(X12ElementPreviewFromJSON)),
    };
}

export function X12SegmentPreviewToJSON(json: any): X12SegmentPreview {
    return X12SegmentPreviewToJSONTyped(json, false);
}

export function X12SegmentPreviewToJSONTyped(value?: X12SegmentPreview | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'segmentPosition': value['segmentPosition'],
        'segmentId': value['segmentId'],
        'segmentDescription': value['segmentDescription'],
        'segmentPath': value['segmentPath'],
        'elements': ((value['elements'] as Array<any>).map(X12ElementPreviewToJSON)),
    };
}
