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
 * @interface ScenarioGraphStepOccurrence
 */
export interface ScenarioGraphStepOccurrence {
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphStepOccurrence
     */
    min: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphStepOccurrence
     */
    max: number;
}

/**
 * Check if a given object implements the ScenarioGraphStepOccurrence interface.
 */
export function instanceOfScenarioGraphStepOccurrence(value: object): value is ScenarioGraphStepOccurrence {
    if (!('min' in value) || value['min'] === undefined) return false;
    if (!('max' in value) || value['max'] === undefined) return false;
    return true;
}

export function ScenarioGraphStepOccurrenceFromJSON(json: any): ScenarioGraphStepOccurrence {
    return ScenarioGraphStepOccurrenceFromJSONTyped(json, false);
}

export function ScenarioGraphStepOccurrenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphStepOccurrence {
    if (json == null) {
        return json;
    }
    return {

        'min': json['min'],
        'max': json['max'],
    };
}

export function ScenarioGraphStepOccurrenceToJSON(json: any): ScenarioGraphStepOccurrence {
    return ScenarioGraphStepOccurrenceToJSONTyped(json, false);
}

export function ScenarioGraphStepOccurrenceToJSONTyped(value?: ScenarioGraphStepOccurrence | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'min': value['min'],
        'max': value['max'],
    };
}
