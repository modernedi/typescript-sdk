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
import type { ScenarioEvidenceFailureError } from './ScenarioEvidenceFailureError.js';
import {
    ScenarioEvidenceFailureErrorFromJSON,
    ScenarioEvidenceFailureErrorFromJSONTyped,
    ScenarioEvidenceFailureErrorToJSON,
    ScenarioEvidenceFailureErrorToJSONTyped,
} from './ScenarioEvidenceFailureError.js';
import type { ScenarioRunActor } from './ScenarioRunActor.js';
import {
    ScenarioRunActorFromJSON,
    ScenarioRunActorFromJSONTyped,
    ScenarioRunActorToJSON,
    ScenarioRunActorToJSONTyped,
} from './ScenarioRunActor.js';

/**
 *
 * @export
 * @interface ScenarioEvidenceFailure
 */
export interface ScenarioEvidenceFailure {
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceFailure
     */
    operationId: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceFailure
     */
    action: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceFailure
     */
    expectedRunRevision: number;
    /**
     *
     * @type {ScenarioRunActor}
     * @memberof ScenarioEvidenceFailure
     */
    actor: ScenarioRunActor;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceFailure
     */
    requestedAt: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceFailure
     */
    completedAt: string;
    /**
     *
     * @type {ScenarioEvidenceFailureError}
     * @memberof ScenarioEvidenceFailure
     */
    error: ScenarioEvidenceFailureError;
}

/**
 * Check if a given object implements the ScenarioEvidenceFailure interface.
 */
export function instanceOfScenarioEvidenceFailure(value: object): value is ScenarioEvidenceFailure {
    if (!('operationId' in value) || value['operationId'] === undefined) return false;
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('expectedRunRevision' in value) || value['expectedRunRevision'] === undefined) return false;
    if (!('actor' in value) || value['actor'] === undefined) return false;
    if (!('requestedAt' in value) || value['requestedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceFailureFromJSON(json: any): ScenarioEvidenceFailure {
    return ScenarioEvidenceFailureFromJSONTyped(json, false);
}

export function ScenarioEvidenceFailureFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceFailure {
    if (json == null) {
        return json;
    }
    return {

        'operationId': json['operationId'],
        'action': json['action'],
        'expectedRunRevision': json['expectedRunRevision'],
        'actor': ScenarioRunActorFromJSON(json['actor']),
        'requestedAt': json['requestedAt'],
        'completedAt': json['completedAt'],
        'error': ScenarioEvidenceFailureErrorFromJSON(json['error']),
    };
}

export function ScenarioEvidenceFailureToJSON(json: any): ScenarioEvidenceFailure {
    return ScenarioEvidenceFailureToJSONTyped(json, false);
}

export function ScenarioEvidenceFailureToJSONTyped(value?: ScenarioEvidenceFailure | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'operationId': value['operationId'],
        'action': value['action'],
        'expectedRunRevision': value['expectedRunRevision'],
        'actor': ScenarioRunActorToJSON(value['actor']),
        'requestedAt': value['requestedAt'],
        'completedAt': value['completedAt'],
        'error': ScenarioEvidenceFailureErrorToJSON(value['error']),
    };
}
