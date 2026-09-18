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
import type { ScenarioEvidenceSuccessfulTransition } from './ScenarioEvidenceSuccessfulTransition.js';
import {
    ScenarioEvidenceSuccessfulTransitionFromJSON,
    ScenarioEvidenceSuccessfulTransitionFromJSONTyped,
    ScenarioEvidenceSuccessfulTransitionToJSON,
    ScenarioEvidenceSuccessfulTransitionToJSONTyped,
} from './ScenarioEvidenceSuccessfulTransition.js';
import type { ScenarioEvidenceFailure } from './ScenarioEvidenceFailure.js';
import {
    ScenarioEvidenceFailureFromJSON,
    ScenarioEvidenceFailureFromJSONTyped,
    ScenarioEvidenceFailureToJSON,
    ScenarioEvidenceFailureToJSONTyped,
} from './ScenarioEvidenceFailure.js';

/**
 *
 * @export
 * @interface ScenarioEvidenceOperations
 */
export interface ScenarioEvidenceOperations {
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceOperations
     */
    total: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceOperations
     */
    succeeded: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceOperations
     */
    failed: number;
    /**
     *
     * @type {Array<ScenarioEvidenceSuccessfulTransition>}
     * @memberof ScenarioEvidenceOperations
     */
    successfulTransitions: Array<ScenarioEvidenceSuccessfulTransition>;
    /**
     *
     * @type {Array<ScenarioEvidenceFailure>}
     * @memberof ScenarioEvidenceOperations
     */
    failures: Array<ScenarioEvidenceFailure>;
}

/**
 * Check if a given object implements the ScenarioEvidenceOperations interface.
 */
export function instanceOfScenarioEvidenceOperations(value: object): value is ScenarioEvidenceOperations {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('succeeded' in value) || value['succeeded'] === undefined) return false;
    if (!('failed' in value) || value['failed'] === undefined) return false;
    if (!('successfulTransitions' in value) || value['successfulTransitions'] === undefined) return false;
    if (!('failures' in value) || value['failures'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceOperationsFromJSON(json: any): ScenarioEvidenceOperations {
    return ScenarioEvidenceOperationsFromJSONTyped(json, false);
}

export function ScenarioEvidenceOperationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceOperations {
    if (json == null) {
        return json;
    }
    return {

        'total': json['total'],
        'succeeded': json['succeeded'],
        'failed': json['failed'],
        'successfulTransitions': ((json['successfulTransitions'] as Array<any>).map(ScenarioEvidenceSuccessfulTransitionFromJSON)),
        'failures': ((json['failures'] as Array<any>).map(ScenarioEvidenceFailureFromJSON)),
    };
}

export function ScenarioEvidenceOperationsToJSON(json: any): ScenarioEvidenceOperations {
    return ScenarioEvidenceOperationsToJSONTyped(json, false);
}

export function ScenarioEvidenceOperationsToJSONTyped(value?: ScenarioEvidenceOperations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'total': value['total'],
        'succeeded': value['succeeded'],
        'failed': value['failed'],
        'successfulTransitions': ((value['successfulTransitions'] as Array<any>).map(ScenarioEvidenceSuccessfulTransitionToJSON)),
        'failures': ((value['failures'] as Array<any>).map(ScenarioEvidenceFailureToJSON)),
    };
}
