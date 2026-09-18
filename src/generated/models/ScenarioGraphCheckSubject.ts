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
 * @interface ScenarioGraphCheckSubject
 */
export interface ScenarioGraphCheckSubject {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioGraphCheckSubject
     */
    stepId: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphCheckSubject
     */
    occurrence: number;
    /**
     *
     * @type {boolean}
     * @memberof ScenarioGraphCheckSubject
     */
    redacted: boolean;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioGraphCheckSubject
     */
    fact: string | null;
    /**
     *
     * @type {ScenarioGraphCheckSubjectSensitivityEnum}
     * @memberof ScenarioGraphCheckSubject
     */
    sensitivity: ScenarioGraphCheckSubjectSensitivityEnum | null;
    /**
     *
     * @type {Set<string>}
     * @memberof ScenarioGraphCheckSubject
     */
    evidenceReferences: Set<string>;
}


/**
 * @export
 */
export const ScenarioGraphCheckSubjectSensitivityEnum = {
    Business: 'business',
    Personal: 'personal',
    Financial: 'financial',
    Health: 'health',
    Restricted: 'restricted',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphCheckSubjectSensitivityEnum = typeof ScenarioGraphCheckSubjectSensitivityEnum[keyof typeof ScenarioGraphCheckSubjectSensitivityEnum];


/**
 * Check if a given object implements the ScenarioGraphCheckSubject interface.
 */
export function instanceOfScenarioGraphCheckSubject(value: object): value is ScenarioGraphCheckSubject {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    if (!('redacted' in value) || value['redacted'] === undefined) return false;
    if (!('fact' in value) || value['fact'] === undefined) return false;
    if (!('sensitivity' in value) || value['sensitivity'] === undefined) return false;
    if (!('evidenceReferences' in value) || value['evidenceReferences'] === undefined) return false;
    return true;
}

export function ScenarioGraphCheckSubjectFromJSON(json: any): ScenarioGraphCheckSubject {
    return ScenarioGraphCheckSubjectFromJSONTyped(json, false);
}

export function ScenarioGraphCheckSubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphCheckSubject {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'occurrence': json['occurrence'],
        'redacted': json['redacted'],
        'fact': json['fact'],
        'sensitivity': json['sensitivity'],
        'evidenceReferences': new Set(json['evidenceReferences']),
    };
}

export function ScenarioGraphCheckSubjectToJSON(json: any): ScenarioGraphCheckSubject {
    return ScenarioGraphCheckSubjectToJSONTyped(json, false);
}

export function ScenarioGraphCheckSubjectToJSONTyped(value?: ScenarioGraphCheckSubject | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'occurrence': value['occurrence'],
        'redacted': value['redacted'],
        'fact': value['fact'],
        'sensitivity': value['sensitivity'],
        'evidenceReferences': Array.from(value['evidenceReferences'] as Set<any>),
    };
}
