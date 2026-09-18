/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ScenarioRunSummaryGuidanceOneOf } from './ScenarioRunSummaryGuidanceOneOf.js';
import {
    instanceOfScenarioRunSummaryGuidanceOneOf,
    ScenarioRunSummaryGuidanceOneOfFromJSON,
    ScenarioRunSummaryGuidanceOneOfFromJSONTyped,
    ScenarioRunSummaryGuidanceOneOfToJSON,
} from './ScenarioRunSummaryGuidanceOneOf.js';
import type { ScenarioRunSummaryGuidanceOneOf1 } from './ScenarioRunSummaryGuidanceOneOf1.js';
import {
    instanceOfScenarioRunSummaryGuidanceOneOf1,
    ScenarioRunSummaryGuidanceOneOf1FromJSON,
    ScenarioRunSummaryGuidanceOneOf1FromJSONTyped,
    ScenarioRunSummaryGuidanceOneOf1ToJSON,
} from './ScenarioRunSummaryGuidanceOneOf1.js';
import type { ScenarioRunSummaryGuidanceOneOf2 } from './ScenarioRunSummaryGuidanceOneOf2.js';
import {
    instanceOfScenarioRunSummaryGuidanceOneOf2,
    ScenarioRunSummaryGuidanceOneOf2FromJSON,
    ScenarioRunSummaryGuidanceOneOf2FromJSONTyped,
    ScenarioRunSummaryGuidanceOneOf2ToJSON,
} from './ScenarioRunSummaryGuidanceOneOf2.js';

/**
 * @type ScenarioRunSummaryGuidance
 *
 * @export
 */
export type ScenarioRunSummaryGuidance = ScenarioRunSummaryGuidanceOneOf | ScenarioRunSummaryGuidanceOneOf1 | ScenarioRunSummaryGuidanceOneOf2;

export function ScenarioRunSummaryGuidanceFromJSON(json: any): ScenarioRunSummaryGuidance {
    return ScenarioRunSummaryGuidanceFromJSONTyped(json, false);
}

export function ScenarioRunSummaryGuidanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunSummaryGuidance {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfScenarioRunSummaryGuidanceOneOf(json)) {
        return ScenarioRunSummaryGuidanceOneOfFromJSONTyped(json, true);
    }
    if (instanceOfScenarioRunSummaryGuidanceOneOf1(json)) {
        return ScenarioRunSummaryGuidanceOneOf1FromJSONTyped(json, true);
    }
    if (instanceOfScenarioRunSummaryGuidanceOneOf2(json)) {
        return ScenarioRunSummaryGuidanceOneOf2FromJSONTyped(json, true);
    }
    return {} as any;
}

export function ScenarioRunSummaryGuidanceToJSON(json: any): any {
    return ScenarioRunSummaryGuidanceToJSONTyped(json, false);
}

export function ScenarioRunSummaryGuidanceToJSONTyped(value?: ScenarioRunSummaryGuidance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfScenarioRunSummaryGuidanceOneOf(value)) {
        return ScenarioRunSummaryGuidanceOneOfToJSON(value as ScenarioRunSummaryGuidanceOneOf);
    }
    if (instanceOfScenarioRunSummaryGuidanceOneOf1(value)) {
        return ScenarioRunSummaryGuidanceOneOf1ToJSON(value as ScenarioRunSummaryGuidanceOneOf1);
    }
    if (instanceOfScenarioRunSummaryGuidanceOneOf2(value)) {
        return ScenarioRunSummaryGuidanceOneOf2ToJSON(value as ScenarioRunSummaryGuidanceOneOf2);
    }
    return {};
}
