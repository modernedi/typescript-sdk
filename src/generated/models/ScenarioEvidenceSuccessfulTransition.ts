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
 * @interface ScenarioEvidenceSuccessfulTransition
 */
export interface ScenarioEvidenceSuccessfulTransition {
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSuccessfulTransition
     */
    operationId: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSuccessfulTransition
     */
    action: string;
    /**
     *
     * @type {ScenarioEvidenceSuccessfulTransitionDispositionEnum}
     * @memberof ScenarioEvidenceSuccessfulTransition
     */
    disposition: ScenarioEvidenceSuccessfulTransitionDispositionEnum;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceSuccessfulTransition
     */
    fromRevision: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceSuccessfulTransition
     */
    toRevision: number;
    /**
     *
     * @type {ScenarioRunActor}
     * @memberof ScenarioEvidenceSuccessfulTransition
     */
    actor: ScenarioRunActor;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSuccessfulTransition
     */
    requestedAt: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSuccessfulTransition
     */
    completedAt: string;
}


/**
 * @export
 */
export const ScenarioEvidenceSuccessfulTransitionDispositionEnum = {
    Started: 'started',
    Advanced: 'advanced',
    Reconciled: 'reconciled',
    ReconciliationPending: 'reconciliation_pending',
    BindingDrifted: 'binding_drifted',
    Cancelled: 'cancelled',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceSuccessfulTransitionDispositionEnum = typeof ScenarioEvidenceSuccessfulTransitionDispositionEnum[keyof typeof ScenarioEvidenceSuccessfulTransitionDispositionEnum];


/**
 * Check if a given object implements the ScenarioEvidenceSuccessfulTransition interface.
 */
export function instanceOfScenarioEvidenceSuccessfulTransition(value: object): value is ScenarioEvidenceSuccessfulTransition {
    if (!('operationId' in value) || value['operationId'] === undefined) return false;
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('disposition' in value) || value['disposition'] === undefined) return false;
    if (!('fromRevision' in value) || value['fromRevision'] === undefined) return false;
    if (!('toRevision' in value) || value['toRevision'] === undefined) return false;
    if (!('actor' in value) || value['actor'] === undefined) return false;
    if (!('requestedAt' in value) || value['requestedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceSuccessfulTransitionFromJSON(json: any): ScenarioEvidenceSuccessfulTransition {
    return ScenarioEvidenceSuccessfulTransitionFromJSONTyped(json, false);
}

export function ScenarioEvidenceSuccessfulTransitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceSuccessfulTransition {
    if (json == null) {
        return json;
    }
    return {

        'operationId': json['operationId'],
        'action': json['action'],
        'disposition': json['disposition'],
        'fromRevision': json['fromRevision'],
        'toRevision': json['toRevision'],
        'actor': ScenarioRunActorFromJSON(json['actor']),
        'requestedAt': json['requestedAt'],
        'completedAt': json['completedAt'],
    };
}

export function ScenarioEvidenceSuccessfulTransitionToJSON(json: any): ScenarioEvidenceSuccessfulTransition {
    return ScenarioEvidenceSuccessfulTransitionToJSONTyped(json, false);
}

export function ScenarioEvidenceSuccessfulTransitionToJSONTyped(value?: ScenarioEvidenceSuccessfulTransition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'operationId': value['operationId'],
        'action': value['action'],
        'disposition': value['disposition'],
        'fromRevision': value['fromRevision'],
        'toRevision': value['toRevision'],
        'actor': ScenarioRunActorToJSON(value['actor']),
        'requestedAt': value['requestedAt'],
        'completedAt': value['completedAt'],
    };
}
