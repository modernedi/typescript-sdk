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
 * @interface ScenarioEvidenceCheckSubject
 */
export interface ScenarioEvidenceCheckSubject {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceCheckSubject
     */
    stepId: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceCheckSubject
     */
    occurrence: number;
    /**
     *
     * @type {boolean}
     * @memberof ScenarioEvidenceCheckSubject
     */
    redacted: boolean;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceCheckSubject
     */
    fact: string | null;
    /**
     *
     * @type {ScenarioEvidenceCheckSubjectSensitivityEnum}
     * @memberof ScenarioEvidenceCheckSubject
     */
    sensitivity: ScenarioEvidenceCheckSubjectSensitivityEnum | null;
    /**
     *
     * @type {Array<string>}
     * @memberof ScenarioEvidenceCheckSubject
     */
    evidenceReferences: Array<string>;
}


/**
 * @export
 */
export const ScenarioEvidenceCheckSubjectSensitivityEnum = {
    Business: 'business',
    Personal: 'personal',
    Financial: 'financial',
    Health: 'health',
    Restricted: 'restricted',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceCheckSubjectSensitivityEnum = typeof ScenarioEvidenceCheckSubjectSensitivityEnum[keyof typeof ScenarioEvidenceCheckSubjectSensitivityEnum];


/**
 * Check if a given object implements the ScenarioEvidenceCheckSubject interface.
 */
export function instanceOfScenarioEvidenceCheckSubject(value: object): value is ScenarioEvidenceCheckSubject {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    if (!('redacted' in value) || value['redacted'] === undefined) return false;
    if (!('fact' in value) || value['fact'] === undefined) return false;
    if (!('sensitivity' in value) || value['sensitivity'] === undefined) return false;
    if (!('evidenceReferences' in value) || value['evidenceReferences'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceCheckSubjectFromJSON(json: any): ScenarioEvidenceCheckSubject {
    return ScenarioEvidenceCheckSubjectFromJSONTyped(json, false);
}

export function ScenarioEvidenceCheckSubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceCheckSubject {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'occurrence': json['occurrence'],
        'redacted': json['redacted'],
        'fact': json['fact'],
        'sensitivity': json['sensitivity'],
        'evidenceReferences': json['evidenceReferences'],
    };
}

export function ScenarioEvidenceCheckSubjectToJSON(json: any): ScenarioEvidenceCheckSubject {
    return ScenarioEvidenceCheckSubjectToJSONTyped(json, false);
}

export function ScenarioEvidenceCheckSubjectToJSONTyped(value?: ScenarioEvidenceCheckSubject | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'occurrence': value['occurrence'],
        'redacted': value['redacted'],
        'fact': value['fact'],
        'sensitivity': value['sensitivity'],
        'evidenceReferences': value['evidenceReferences'],
    };
}
