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
 * @interface ScenarioRunSummaryGuidanceOneOf1
 */
export interface ScenarioRunSummaryGuidanceOneOf1 {
    /**
     *
     * @type {ScenarioRunSummaryGuidanceOneOf1NextActionEnum}
     * @memberof ScenarioRunSummaryGuidanceOneOf1
     */
    nextAction: ScenarioRunSummaryGuidanceOneOf1NextActionEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummaryGuidanceOneOf1
     */
    stepId: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummaryGuidanceOneOf1
     */
    occurrence: string | null;
}


/**
 * @export
 */
export const ScenarioRunSummaryGuidanceOneOf1NextActionEnum = {
    AttachOrRefresh: 'attach_or_refresh',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunSummaryGuidanceOneOf1NextActionEnum = typeof ScenarioRunSummaryGuidanceOneOf1NextActionEnum[keyof typeof ScenarioRunSummaryGuidanceOneOf1NextActionEnum];


/**
 * Check if a given object implements the ScenarioRunSummaryGuidanceOneOf1 interface.
 */
export function instanceOfScenarioRunSummaryGuidanceOneOf1(value: object): value is ScenarioRunSummaryGuidanceOneOf1 {
    if (!('nextAction' in value) || value['nextAction'] === undefined) return false;
    if (value['nextAction'] !== 'attach_or_refresh') return false;

    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    return true;
}

export function ScenarioRunSummaryGuidanceOneOf1FromJSON(json: any): ScenarioRunSummaryGuidanceOneOf1 {
    return ScenarioRunSummaryGuidanceOneOf1FromJSONTyped(json, false);
}

export function ScenarioRunSummaryGuidanceOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunSummaryGuidanceOneOf1 {
    if (json == null) {
        return json;
    }
    return {

        'nextAction': json['nextAction'],
        'stepId': json['stepId'],
        'occurrence': json['occurrence'],
    };
}

export function ScenarioRunSummaryGuidanceOneOf1ToJSON(json: any): ScenarioRunSummaryGuidanceOneOf1 {
    return ScenarioRunSummaryGuidanceOneOf1ToJSONTyped(json, false);
}

export function ScenarioRunSummaryGuidanceOneOf1ToJSONTyped(value?: ScenarioRunSummaryGuidanceOneOf1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'nextAction': value['nextAction'],
        'stepId': value['stepId'],
        'occurrence': value['occurrence'],
    };
}
