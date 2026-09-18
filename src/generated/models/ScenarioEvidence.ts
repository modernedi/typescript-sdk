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
import type { ScenarioEvidenceCheck } from './ScenarioEvidenceCheck.js';
import {
    ScenarioEvidenceCheckFromJSON,
    ScenarioEvidenceCheckFromJSONTyped,
    ScenarioEvidenceCheckToJSON,
    ScenarioEvidenceCheckToJSONTyped,
} from './ScenarioEvidenceCheck.js';
import type { ScenarioEvidenceStep } from './ScenarioEvidenceStep.js';
import {
    ScenarioEvidenceStepFromJSON,
    ScenarioEvidenceStepFromJSONTyped,
    ScenarioEvidenceStepToJSON,
    ScenarioEvidenceStepToJSONTyped,
} from './ScenarioEvidenceStep.js';
import type { ScenarioEvidenceCounts } from './ScenarioEvidenceCounts.js';
import {
    ScenarioEvidenceCountsFromJSON,
    ScenarioEvidenceCountsFromJSONTyped,
    ScenarioEvidenceCountsToJSON,
    ScenarioEvidenceCountsToJSONTyped,
} from './ScenarioEvidenceCounts.js';
import type { ScenarioEvidenceReference } from './ScenarioEvidenceReference.js';
import {
    ScenarioEvidenceReferenceFromJSON,
    ScenarioEvidenceReferenceFromJSONTyped,
    ScenarioEvidenceReferenceToJSON,
    ScenarioEvidenceReferenceToJSONTyped,
} from './ScenarioEvidenceReference.js';

/**
 *
 * @export
 * @interface ScenarioEvidence
 */
export interface ScenarioEvidence {
    /**
     *
     * @type {ScenarioEvidenceKindEnum}
     * @memberof ScenarioEvidence
     */
    kind: ScenarioEvidenceKindEnum;
    /**
     *
     * @type {ScenarioEvidenceCounts}
     * @memberof ScenarioEvidence
     */
    counts: ScenarioEvidenceCounts;
    /**
     *
     * @type {Array<ScenarioEvidenceStep>}
     * @memberof ScenarioEvidence
     */
    steps: Array<ScenarioEvidenceStep>;
    /**
     *
     * @type {Array<ScenarioEvidenceCheck>}
     * @memberof ScenarioEvidence
     */
    checks: Array<ScenarioEvidenceCheck>;
    /**
     *
     * @type {Array<ScenarioEvidenceReference>}
     * @memberof ScenarioEvidence
     */
    references: Array<ScenarioEvidenceReference>;
}


/**
 * @export
 */
export const ScenarioEvidenceKindEnum = {
    Graph: 'graph',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceKindEnum = typeof ScenarioEvidenceKindEnum[keyof typeof ScenarioEvidenceKindEnum];


/**
 * Check if a given object implements the ScenarioEvidence interface.
 */
export function instanceOfScenarioEvidence(value: object): value is ScenarioEvidence {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'graph') return false;

    if (!('counts' in value) || value['counts'] === undefined) return false;
    if (!('steps' in value) || value['steps'] === undefined) return false;
    if (!('checks' in value) || value['checks'] === undefined) return false;
    if (!('references' in value) || value['references'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceFromJSON(json: any): ScenarioEvidence {
    return ScenarioEvidenceFromJSONTyped(json, false);
}

export function ScenarioEvidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidence {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'counts': ScenarioEvidenceCountsFromJSON(json['counts']),
        'steps': ((json['steps'] as Array<any>).map(ScenarioEvidenceStepFromJSON)),
        'checks': ((json['checks'] as Array<any>).map(ScenarioEvidenceCheckFromJSON)),
        'references': ((json['references'] as Array<any>).map(ScenarioEvidenceReferenceFromJSON)),
    };
}

export function ScenarioEvidenceToJSON(json: any): ScenarioEvidence {
    return ScenarioEvidenceToJSONTyped(json, false);
}

export function ScenarioEvidenceToJSONTyped(value?: ScenarioEvidence | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'counts': ScenarioEvidenceCountsToJSON(value['counts']),
        'steps': ((value['steps'] as Array<any>).map(ScenarioEvidenceStepToJSON)),
        'checks': ((value['checks'] as Array<any>).map(ScenarioEvidenceCheckToJSON)),
        'references': ((value['references'] as Array<any>).map(ScenarioEvidenceReferenceToJSON)),
    };
}
