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
import type { ScenarioEvidenceBinding } from './ScenarioEvidenceBinding.js';
import {
    ScenarioEvidenceBindingFromJSON,
    ScenarioEvidenceBindingFromJSONTyped,
    ScenarioEvidenceBindingToJSON,
    ScenarioEvidenceBindingToJSONTyped,
} from './ScenarioEvidenceBinding.js';
import type { ScenarioEvidenceClaim } from './ScenarioEvidenceClaim.js';
import {
    ScenarioEvidenceClaimFromJSON,
    ScenarioEvidenceClaimFromJSONTyped,
    ScenarioEvidenceClaimToJSON,
    ScenarioEvidenceClaimToJSONTyped,
} from './ScenarioEvidenceClaim.js';
import type { ScenarioEvidenceRun } from './ScenarioEvidenceRun.js';
import {
    ScenarioEvidenceRunFromJSON,
    ScenarioEvidenceRunFromJSONTyped,
    ScenarioEvidenceRunToJSON,
    ScenarioEvidenceRunToJSONTyped,
} from './ScenarioEvidenceRun.js';
import type { ScenarioEvidence } from './ScenarioEvidence.js';
import {
    ScenarioEvidenceFromJSON,
    ScenarioEvidenceFromJSONTyped,
    ScenarioEvidenceToJSON,
    ScenarioEvidenceToJSONTyped,
} from './ScenarioEvidence.js';
import type { ScenarioEvidenceOperations } from './ScenarioEvidenceOperations.js';
import {
    ScenarioEvidenceOperationsFromJSON,
    ScenarioEvidenceOperationsFromJSONTyped,
    ScenarioEvidenceOperationsToJSON,
    ScenarioEvidenceOperationsToJSONTyped,
} from './ScenarioEvidenceOperations.js';

/**
 *
 * @export
 * @interface ScenarioEvidenceReport
 */
export interface ScenarioEvidenceReport {
    /**
     *
     * @type {ScenarioEvidenceReportApiVersionEnum}
     * @memberof ScenarioEvidenceReport
     */
    apiVersion: ScenarioEvidenceReportApiVersionEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceReport
     */
    createdAt: string;
    /**
     *
     * @type {ScenarioEvidenceClaim}
     * @memberof ScenarioEvidenceReport
     */
    claim: ScenarioEvidenceClaim;
    /**
     *
     * @type {ScenarioEvidenceRun}
     * @memberof ScenarioEvidenceReport
     */
    run: ScenarioEvidenceRun;
    /**
     *
     * @type {ScenarioEvidenceBinding}
     * @memberof ScenarioEvidenceReport
     */
    binding: ScenarioEvidenceBinding;
    /**
     *
     * @type {ScenarioEvidenceOperations}
     * @memberof ScenarioEvidenceReport
     */
    operations: ScenarioEvidenceOperations;
    /**
     *
     * @type {ScenarioEvidence}
     * @memberof ScenarioEvidenceReport
     */
    evidence: ScenarioEvidence;
}


/**
 * @export
 */
export const ScenarioEvidenceReportApiVersionEnum = {
    ModernediComScenarioEvidenceReportV1: 'modernedi.com/scenario-evidence-report/v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceReportApiVersionEnum = typeof ScenarioEvidenceReportApiVersionEnum[keyof typeof ScenarioEvidenceReportApiVersionEnum];


/**
 * Check if a given object implements the ScenarioEvidenceReport interface.
 */
export function instanceOfScenarioEvidenceReport(value: object): value is ScenarioEvidenceReport {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (value['apiVersion'] !== 'modernedi.com/scenario-evidence-report/v1') return false;

    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('claim' in value) || value['claim'] === undefined) return false;
    if (!('run' in value) || value['run'] === undefined) return false;
    if (!('binding' in value) || value['binding'] === undefined) return false;
    if (!('operations' in value) || value['operations'] === undefined) return false;
    if (!('evidence' in value) || value['evidence'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceReportFromJSON(json: any): ScenarioEvidenceReport {
    return ScenarioEvidenceReportFromJSONTyped(json, false);
}

export function ScenarioEvidenceReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceReport {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': json['apiVersion'],
        'createdAt': json['createdAt'],
        'claim': ScenarioEvidenceClaimFromJSON(json['claim']),
        'run': ScenarioEvidenceRunFromJSON(json['run']),
        'binding': ScenarioEvidenceBindingFromJSON(json['binding']),
        'operations': ScenarioEvidenceOperationsFromJSON(json['operations']),
        'evidence': ScenarioEvidenceFromJSON(json['evidence']),
    };
}

export function ScenarioEvidenceReportToJSON(json: any): ScenarioEvidenceReport {
    return ScenarioEvidenceReportToJSONTyped(json, false);
}

export function ScenarioEvidenceReportToJSONTyped(value?: ScenarioEvidenceReport | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': value['apiVersion'],
        'createdAt': value['createdAt'],
        'claim': ScenarioEvidenceClaimToJSON(value['claim']),
        'run': ScenarioEvidenceRunToJSON(value['run']),
        'binding': ScenarioEvidenceBindingToJSON(value['binding']),
        'operations': ScenarioEvidenceOperationsToJSON(value['operations']),
        'evidence': ScenarioEvidenceToJSON(value['evidence']),
    };
}
