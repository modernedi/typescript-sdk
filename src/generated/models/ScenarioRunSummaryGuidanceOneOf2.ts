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
 * @interface ScenarioRunSummaryGuidanceOneOf2
 */
export interface ScenarioRunSummaryGuidanceOneOf2 {
    /**
     *
     * @type {ScenarioRunSummaryGuidanceOneOf2NextActionEnum}
     * @memberof ScenarioRunSummaryGuidanceOneOf2
     */
    nextAction: ScenarioRunSummaryGuidanceOneOf2NextActionEnum;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioRunSummaryGuidanceOneOf2
     */
    stepId: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioRunSummaryGuidanceOneOf2
     */
    occurrence: number;
}


/**
 * @export
 */
export const ScenarioRunSummaryGuidanceOneOf2NextActionEnum = {
    AdvanceAdapter: 'advance_adapter',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunSummaryGuidanceOneOf2NextActionEnum = typeof ScenarioRunSummaryGuidanceOneOf2NextActionEnum[keyof typeof ScenarioRunSummaryGuidanceOneOf2NextActionEnum];


/**
 * Check if a given object implements the ScenarioRunSummaryGuidanceOneOf2 interface.
 */
export function instanceOfScenarioRunSummaryGuidanceOneOf2(value: object): value is ScenarioRunSummaryGuidanceOneOf2 {
    if (!('nextAction' in value) || value['nextAction'] === undefined) return false;
    if (value['nextAction'] !== 'advance_adapter') return false;

    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    return true;
}

export function ScenarioRunSummaryGuidanceOneOf2FromJSON(json: any): ScenarioRunSummaryGuidanceOneOf2 {
    return ScenarioRunSummaryGuidanceOneOf2FromJSONTyped(json, false);
}

export function ScenarioRunSummaryGuidanceOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunSummaryGuidanceOneOf2 {
    if (json == null) {
        return json;
    }
    return {

        'nextAction': json['nextAction'],
        'stepId': json['stepId'],
        'occurrence': json['occurrence'],
    };
}

export function ScenarioRunSummaryGuidanceOneOf2ToJSON(json: any): ScenarioRunSummaryGuidanceOneOf2 {
    return ScenarioRunSummaryGuidanceOneOf2ToJSONTyped(json, false);
}

export function ScenarioRunSummaryGuidanceOneOf2ToJSONTyped(value?: ScenarioRunSummaryGuidanceOneOf2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'nextAction': value['nextAction'],
        'stepId': value['stepId'],
        'occurrence': value['occurrence'],
    };
}
