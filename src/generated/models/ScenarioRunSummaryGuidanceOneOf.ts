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
 * @interface ScenarioRunSummaryGuidanceOneOf
 */
export interface ScenarioRunSummaryGuidanceOneOf {
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummaryGuidanceOneOf
     */
    nextAction: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummaryGuidanceOneOf
     */
    stepId: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummaryGuidanceOneOf
     */
    occurrence: string | null;
}

/**
 * Check if a given object implements the ScenarioRunSummaryGuidanceOneOf interface.
 */
export function instanceOfScenarioRunSummaryGuidanceOneOf(value: object): value is ScenarioRunSummaryGuidanceOneOf {
    if (!('nextAction' in value) || value['nextAction'] === undefined) return false;
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    return true;
}

export function ScenarioRunSummaryGuidanceOneOfFromJSON(json: any): ScenarioRunSummaryGuidanceOneOf {
    return ScenarioRunSummaryGuidanceOneOfFromJSONTyped(json, false);
}

export function ScenarioRunSummaryGuidanceOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunSummaryGuidanceOneOf {
    if (json == null) {
        return json;
    }
    return {

        'nextAction': json['nextAction'],
        'stepId': json['stepId'],
        'occurrence': json['occurrence'],
    };
}

export function ScenarioRunSummaryGuidanceOneOfToJSON(json: any): ScenarioRunSummaryGuidanceOneOf {
    return ScenarioRunSummaryGuidanceOneOfToJSONTyped(json, false);
}

export function ScenarioRunSummaryGuidanceOneOfToJSONTyped(value?: ScenarioRunSummaryGuidanceOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'nextAction': value['nextAction'],
        'stepId': value['stepId'],
        'occurrence': value['occurrence'],
    };
}
