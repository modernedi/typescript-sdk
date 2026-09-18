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
 * @interface ScenarioGraphCounts
 */
export interface ScenarioGraphCounts {
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphCounts
     */
    observations: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphCounts
     */
    checkpoints: number;
}

/**
 * Check if a given object implements the ScenarioGraphCounts interface.
 */
export function instanceOfScenarioGraphCounts(value: object): value is ScenarioGraphCounts {
    if (!('observations' in value) || value['observations'] === undefined) return false;
    if (!('checkpoints' in value) || value['checkpoints'] === undefined) return false;
    return true;
}

export function ScenarioGraphCountsFromJSON(json: any): ScenarioGraphCounts {
    return ScenarioGraphCountsFromJSONTyped(json, false);
}

export function ScenarioGraphCountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphCounts {
    if (json == null) {
        return json;
    }
    return {

        'observations': json['observations'],
        'checkpoints': json['checkpoints'],
    };
}

export function ScenarioGraphCountsToJSON(json: any): ScenarioGraphCounts {
    return ScenarioGraphCountsToJSONTyped(json, false);
}

export function ScenarioGraphCountsToJSONTyped(value?: ScenarioGraphCounts | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'observations': value['observations'],
        'checkpoints': value['checkpoints'],
    };
}
