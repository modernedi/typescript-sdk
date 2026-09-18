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
import type { ScenarioGraphCheckSubject } from './ScenarioGraphCheckSubject.js';
import {
    ScenarioGraphCheckSubjectFromJSON,
    ScenarioGraphCheckSubjectFromJSONTyped,
    ScenarioGraphCheckSubjectToJSON,
    ScenarioGraphCheckSubjectToJSONTyped,
} from './ScenarioGraphCheckSubject.js';

/**
 *
 * @export
 * @interface ScenarioGraphCheck
 */
export interface ScenarioGraphCheck {
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphCheck
     */
    id: string;
    /**
     *
     * @type {ScenarioGraphCheckKindEnum}
     * @memberof ScenarioGraphCheck
     */
    kind: ScenarioGraphCheckKindEnum;
    /**
     *
     * @type {ScenarioGraphCheckOutcomeEnum}
     * @memberof ScenarioGraphCheck
     */
    outcome: ScenarioGraphCheckOutcomeEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphCheck
     */
    code: string;
    /**
     *
     * @type {Array<ScenarioGraphCheckSubject>}
     * @memberof ScenarioGraphCheck
     */
    subjects: Array<ScenarioGraphCheckSubject>;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof ScenarioGraphCheck
     */
    attributes: { [key: string]: string | undefined; };
}


/**
 * @export
 */
export const ScenarioGraphCheckKindEnum = {
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
export type ScenarioGraphCheckKindEnum = typeof ScenarioGraphCheckKindEnum[keyof typeof ScenarioGraphCheckKindEnum];

/**
 * @export
 */
export const ScenarioGraphCheckOutcomeEnum = {
    Pending: 'pending',
    Passed: 'passed',
    Failed: 'failed',
    Inconclusive: 'inconclusive',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphCheckOutcomeEnum = typeof ScenarioGraphCheckOutcomeEnum[keyof typeof ScenarioGraphCheckOutcomeEnum];


/**
 * Check if a given object implements the ScenarioGraphCheck interface.
 */
export function instanceOfScenarioGraphCheck(value: object): value is ScenarioGraphCheck {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('subjects' in value) || value['subjects'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    return true;
}

export function ScenarioGraphCheckFromJSON(json: any): ScenarioGraphCheck {
    return ScenarioGraphCheckFromJSONTyped(json, false);
}

export function ScenarioGraphCheckFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphCheck {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
        'outcome': json['outcome'],
        'code': json['code'],
        'subjects': ((json['subjects'] as Array<any>).map(ScenarioGraphCheckSubjectFromJSON)),
        'attributes': json['attributes'],
    };
}

export function ScenarioGraphCheckToJSON(json: any): ScenarioGraphCheck {
    return ScenarioGraphCheckToJSONTyped(json, false);
}

export function ScenarioGraphCheckToJSONTyped(value?: ScenarioGraphCheck | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
        'outcome': value['outcome'],
        'code': value['code'],
        'subjects': ((value['subjects'] as Array<any>).map(ScenarioGraphCheckSubjectToJSON)),
        'attributes': value['attributes'],
    };
}
