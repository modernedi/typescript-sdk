/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ScenarioRunActorOneOf } from './ScenarioRunActorOneOf.js';
import {
    instanceOfScenarioRunActorOneOf,
    ScenarioRunActorOneOfFromJSON,
    ScenarioRunActorOneOfFromJSONTyped,
    ScenarioRunActorOneOfToJSON,
} from './ScenarioRunActorOneOf.js';
import type { ScenarioRunActorOneOf1 } from './ScenarioRunActorOneOf1.js';
import {
    instanceOfScenarioRunActorOneOf1,
    ScenarioRunActorOneOf1FromJSON,
    ScenarioRunActorOneOf1FromJSONTyped,
    ScenarioRunActorOneOf1ToJSON,
} from './ScenarioRunActorOneOf1.js';

/**
 * @type ScenarioRunActor
 * The member or Integration API key that requested the operation. No credential is included.
 * @export
 */
export type ScenarioRunActor = ScenarioRunActorOneOf | ScenarioRunActorOneOf1;

export function ScenarioRunActorFromJSON(json: any): ScenarioRunActor {
    return ScenarioRunActorFromJSONTyped(json, false);
}

export function ScenarioRunActorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunActor {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfScenarioRunActorOneOf(json)) {
        return ScenarioRunActorOneOfFromJSONTyped(json, true);
    }
    if (instanceOfScenarioRunActorOneOf1(json)) {
        return ScenarioRunActorOneOf1FromJSONTyped(json, true);
    }
    return {} as any;
}

export function ScenarioRunActorToJSON(json: any): any {
    return ScenarioRunActorToJSONTyped(json, false);
}

export function ScenarioRunActorToJSONTyped(value?: ScenarioRunActor | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfScenarioRunActorOneOf(value)) {
        return ScenarioRunActorOneOfToJSON(value as ScenarioRunActorOneOf);
    }
    if (instanceOfScenarioRunActorOneOf1(value)) {
        return ScenarioRunActorOneOf1ToJSON(value as ScenarioRunActorOneOf1);
    }
    return {};
}
