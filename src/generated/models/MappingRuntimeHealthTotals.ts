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
 * @interface MappingRuntimeHealthTotals
 */
export interface MappingRuntimeHealthTotals {
    /**
     * Unresolved failures across all retained mapping revisions and unmatched requests.
     * @type {number}
     * @memberof MappingRuntimeHealthTotals
     */
    failed: number;
    /**
     * Unresolved failures produced by currently published mapping revisions.
     * @type {number}
     * @memberof MappingRuntimeHealthTotals
     */
    currentRevisionFailed: number;
    /**
     * Unresolved failures for which no published mapping was resolved.
     * @type {number}
     * @memberof MappingRuntimeHealthTotals
     */
    unmappedFailed: number;
    /**
     * Failures marked resolved by a later successful equivalent attempt.
     * @type {number}
     * @memberof MappingRuntimeHealthTotals
     */
    recovered: number;
}

/**
 * Check if a given object implements the MappingRuntimeHealthTotals interface.
 */
export function instanceOfMappingRuntimeHealthTotals(value: object): value is MappingRuntimeHealthTotals {
    if (!('failed' in value) || value['failed'] === undefined) return false;
    if (!('currentRevisionFailed' in value) || value['currentRevisionFailed'] === undefined) return false;
    if (!('unmappedFailed' in value) || value['unmappedFailed'] === undefined) return false;
    if (!('recovered' in value) || value['recovered'] === undefined) return false;
    return true;
}

export function MappingRuntimeHealthTotalsFromJSON(json: any): MappingRuntimeHealthTotals {
    return MappingRuntimeHealthTotalsFromJSONTyped(json, false);
}

export function MappingRuntimeHealthTotalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingRuntimeHealthTotals {
    if (json == null) {
        return json;
    }
    return {

        'failed': json['failed'],
        'currentRevisionFailed': json['currentRevisionFailed'],
        'unmappedFailed': json['unmappedFailed'],
        'recovered': json['recovered'],
    };
}

export function MappingRuntimeHealthTotalsToJSON(json: any): MappingRuntimeHealthTotals {
    return MappingRuntimeHealthTotalsToJSONTyped(json, false);
}

export function MappingRuntimeHealthTotalsToJSONTyped(value?: MappingRuntimeHealthTotals | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'failed': value['failed'],
        'currentRevisionFailed': value['currentRevisionFailed'],
        'unmappedFailed': value['unmappedFailed'],
        'recovered': value['recovered'],
    };
}
