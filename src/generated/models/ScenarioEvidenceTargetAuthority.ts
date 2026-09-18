/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ScenarioEvidenceTargetAuthorityOneOf } from './ScenarioEvidenceTargetAuthorityOneOf.js';
import {
    instanceOfScenarioEvidenceTargetAuthorityOneOf,
    ScenarioEvidenceTargetAuthorityOneOfFromJSON,
    ScenarioEvidenceTargetAuthorityOneOfFromJSONTyped,
    ScenarioEvidenceTargetAuthorityOneOfToJSON,
} from './ScenarioEvidenceTargetAuthorityOneOf.js';
import type { ScenarioEvidenceTargetAuthorityOneOf1 } from './ScenarioEvidenceTargetAuthorityOneOf1.js';
import {
    instanceOfScenarioEvidenceTargetAuthorityOneOf1,
    ScenarioEvidenceTargetAuthorityOneOf1FromJSON,
    ScenarioEvidenceTargetAuthorityOneOf1FromJSONTyped,
    ScenarioEvidenceTargetAuthorityOneOf1ToJSON,
} from './ScenarioEvidenceTargetAuthorityOneOf1.js';
import type { ScenarioEvidenceTargetAuthorityOneOf2 } from './ScenarioEvidenceTargetAuthorityOneOf2.js';
import {
    instanceOfScenarioEvidenceTargetAuthorityOneOf2,
    ScenarioEvidenceTargetAuthorityOneOf2FromJSON,
    ScenarioEvidenceTargetAuthorityOneOf2FromJSONTyped,
    ScenarioEvidenceTargetAuthorityOneOf2ToJSON,
} from './ScenarioEvidenceTargetAuthorityOneOf2.js';

/**
 * @type ScenarioEvidenceTargetAuthority
 *
 * @export
 */
export type ScenarioEvidenceTargetAuthority = ScenarioEvidenceTargetAuthorityOneOf | ScenarioEvidenceTargetAuthorityOneOf1 | ScenarioEvidenceTargetAuthorityOneOf2;

export function ScenarioEvidenceTargetAuthorityFromJSON(json: any): ScenarioEvidenceTargetAuthority {
    return ScenarioEvidenceTargetAuthorityFromJSONTyped(json, false);
}

export function ScenarioEvidenceTargetAuthorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceTargetAuthority {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfScenarioEvidenceTargetAuthorityOneOf(json)) {
        return ScenarioEvidenceTargetAuthorityOneOfFromJSONTyped(json, true);
    }
    if (instanceOfScenarioEvidenceTargetAuthorityOneOf1(json)) {
        return ScenarioEvidenceTargetAuthorityOneOf1FromJSONTyped(json, true);
    }
    if (instanceOfScenarioEvidenceTargetAuthorityOneOf2(json)) {
        return ScenarioEvidenceTargetAuthorityOneOf2FromJSONTyped(json, true);
    }
    return {} as any;
}

export function ScenarioEvidenceTargetAuthorityToJSON(json: any): any {
    return ScenarioEvidenceTargetAuthorityToJSONTyped(json, false);
}

export function ScenarioEvidenceTargetAuthorityToJSONTyped(value?: ScenarioEvidenceTargetAuthority | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfScenarioEvidenceTargetAuthorityOneOf(value)) {
        return ScenarioEvidenceTargetAuthorityOneOfToJSON(value as ScenarioEvidenceTargetAuthorityOneOf);
    }
    if (instanceOfScenarioEvidenceTargetAuthorityOneOf1(value)) {
        return ScenarioEvidenceTargetAuthorityOneOf1ToJSON(value as ScenarioEvidenceTargetAuthorityOneOf1);
    }
    if (instanceOfScenarioEvidenceTargetAuthorityOneOf2(value)) {
        return ScenarioEvidenceTargetAuthorityOneOf2ToJSON(value as ScenarioEvidenceTargetAuthorityOneOf2);
    }
    return {};
}
