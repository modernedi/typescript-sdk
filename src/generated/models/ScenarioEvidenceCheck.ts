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
import type { ScenarioEvidenceCheckSubject } from './ScenarioEvidenceCheckSubject.js';
import {
    ScenarioEvidenceCheckSubjectFromJSON,
    ScenarioEvidenceCheckSubjectFromJSONTyped,
    ScenarioEvidenceCheckSubjectToJSON,
    ScenarioEvidenceCheckSubjectToJSONTyped,
} from './ScenarioEvidenceCheckSubject.js';
import type { ScenarioEvidenceDigest } from './ScenarioEvidenceDigest.js';
import {
    ScenarioEvidenceDigestFromJSON,
    ScenarioEvidenceDigestFromJSONTyped,
    ScenarioEvidenceDigestToJSON,
    ScenarioEvidenceDigestToJSONTyped,
} from './ScenarioEvidenceDigest.js';

/**
 *
 * @export
 * @interface ScenarioEvidenceCheck
 */
export interface ScenarioEvidenceCheck {
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceCheck
     */
    id: string;
    /**
     *
     * @type {ScenarioEvidenceCheckKindEnum}
     * @memberof ScenarioEvidenceCheck
     */
    kind: ScenarioEvidenceCheckKindEnum;
    /**
     *
     * @type {ScenarioEvidenceCheckOutcomeEnum}
     * @memberof ScenarioEvidenceCheck
     */
    outcome: ScenarioEvidenceCheckOutcomeEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceCheck
     */
    code: string;
    /**
     *
     * @type {Array<ScenarioEvidenceCheckSubject>}
     * @memberof ScenarioEvidenceCheck
     */
    subjects: Array<ScenarioEvidenceCheckSubject>;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof ScenarioEvidenceCheck
     */
    attributes: { [key: string]: string | undefined; };
    /**
     *
     * @type {Array<ScenarioEvidenceDigest>}
     * @memberof ScenarioEvidenceCheck
     */
    evidenceDigests: Array<ScenarioEvidenceDigest>;
}


/**
 * @export
 */
export const ScenarioEvidenceCheckKindEnum = {
    Parameter: 'parameter',
    Occurrence: 'occurrence',
    Pipeline: 'pipeline',
    Assurance: 'assurance',
    Branch: 'branch',
    Transition: 'transition',
    Assertion: 'assertion',
    Revision: 'revision',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceCheckKindEnum = typeof ScenarioEvidenceCheckKindEnum[keyof typeof ScenarioEvidenceCheckKindEnum];

/**
 * @export
 */
export const ScenarioEvidenceCheckOutcomeEnum = {
    Pending: 'pending',
    Passed: 'passed',
    Failed: 'failed',
    Inconclusive: 'inconclusive',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceCheckOutcomeEnum = typeof ScenarioEvidenceCheckOutcomeEnum[keyof typeof ScenarioEvidenceCheckOutcomeEnum];


/**
 * Check if a given object implements the ScenarioEvidenceCheck interface.
 */
export function instanceOfScenarioEvidenceCheck(value: object): value is ScenarioEvidenceCheck {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('subjects' in value) || value['subjects'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('evidenceDigests' in value) || value['evidenceDigests'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceCheckFromJSON(json: any): ScenarioEvidenceCheck {
    return ScenarioEvidenceCheckFromJSONTyped(json, false);
}

export function ScenarioEvidenceCheckFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceCheck {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
        'outcome': json['outcome'],
        'code': json['code'],
        'subjects': ((json['subjects'] as Array<any>).map(ScenarioEvidenceCheckSubjectFromJSON)),
        'attributes': json['attributes'],
        'evidenceDigests': ((json['evidenceDigests'] as Array<any>).map(ScenarioEvidenceDigestFromJSON)),
    };
}

export function ScenarioEvidenceCheckToJSON(json: any): ScenarioEvidenceCheck {
    return ScenarioEvidenceCheckToJSONTyped(json, false);
}

export function ScenarioEvidenceCheckToJSONTyped(value?: ScenarioEvidenceCheck | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
        'outcome': value['outcome'],
        'code': value['code'],
        'subjects': ((value['subjects'] as Array<any>).map(ScenarioEvidenceCheckSubjectToJSON)),
        'attributes': value['attributes'],
        'evidenceDigests': ((value['evidenceDigests'] as Array<any>).map(ScenarioEvidenceDigestToJSON)),
    };
}
