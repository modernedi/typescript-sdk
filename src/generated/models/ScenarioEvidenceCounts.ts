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
 * @interface ScenarioEvidenceCounts
 */
export interface ScenarioEvidenceCounts {
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceCounts
     */
    observations: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceCounts
     */
    checkpoints: number;
}

/**
 * Check if a given object implements the ScenarioEvidenceCounts interface.
 */
export function instanceOfScenarioEvidenceCounts(value: object): value is ScenarioEvidenceCounts {
    if (!('observations' in value) || value['observations'] === undefined) return false;
    if (!('checkpoints' in value) || value['checkpoints'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceCountsFromJSON(json: any): ScenarioEvidenceCounts {
    return ScenarioEvidenceCountsFromJSONTyped(json, false);
}

export function ScenarioEvidenceCountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceCounts {
    if (json == null) {
        return json;
    }
    return {

        'observations': json['observations'],
        'checkpoints': json['checkpoints'],
    };
}

export function ScenarioEvidenceCountsToJSON(json: any): ScenarioEvidenceCounts {
    return ScenarioEvidenceCountsToJSONTyped(json, false);
}

export function ScenarioEvidenceCountsToJSONTyped(value?: ScenarioEvidenceCounts | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'observations': value['observations'],
        'checkpoints': value['checkpoints'],
    };
}
