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
 * @interface ScenarioGraphGuidance
 */
export interface ScenarioGraphGuidance {
    /**
     *
     * @type {ScenarioGraphGuidanceNextActionEnum}
     * @memberof ScenarioGraphGuidance
     */
    nextAction: ScenarioGraphGuidanceNextActionEnum | null;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioGraphGuidance
     */
    stepId: string | null;
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphGuidance
     */
    occurrence: number | null;
}


/**
 * @export
 */
export const ScenarioGraphGuidanceNextActionEnum = {
    AdvanceAdapter: 'advance_adapter',
    AttachOrRefresh: 'attach_or_refresh',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphGuidanceNextActionEnum = typeof ScenarioGraphGuidanceNextActionEnum[keyof typeof ScenarioGraphGuidanceNextActionEnum];


/**
 * Check if a given object implements the ScenarioGraphGuidance interface.
 */
export function instanceOfScenarioGraphGuidance(value: object): value is ScenarioGraphGuidance {
    if (!('nextAction' in value) || value['nextAction'] === undefined) return false;
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    return true;
}

export function ScenarioGraphGuidanceFromJSON(json: any): ScenarioGraphGuidance {
    return ScenarioGraphGuidanceFromJSONTyped(json, false);
}

export function ScenarioGraphGuidanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphGuidance {
    if (json == null) {
        return json;
    }
    return {

        'nextAction': json['nextAction'],
        'stepId': json['stepId'],
        'occurrence': json['occurrence'],
    };
}

export function ScenarioGraphGuidanceToJSON(json: any): ScenarioGraphGuidance {
    return ScenarioGraphGuidanceToJSONTyped(json, false);
}

export function ScenarioGraphGuidanceToJSONTyped(value?: ScenarioGraphGuidance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'nextAction': value['nextAction'],
        'stepId': value['stepId'],
        'occurrence': value['occurrence'],
    };
}
