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
import type { ScenarioRunTimelineOperationError } from './ScenarioRunTimelineOperationError.js';
import {
    ScenarioRunTimelineOperationErrorFromJSON,
    ScenarioRunTimelineOperationErrorFromJSONTyped,
    ScenarioRunTimelineOperationErrorToJSON,
    ScenarioRunTimelineOperationErrorToJSONTyped,
} from './ScenarioRunTimelineOperationError.js';
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
 * @interface ScenarioRunTimelineOperation
 */
export interface ScenarioRunTimelineOperation {
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineOperation
     */
    operationId: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineOperation
     */
    action: string;
    /**
     *
     * @type {ScenarioRunTimelineOperationStatusEnum}
     * @memberof ScenarioRunTimelineOperation
     */
    status: ScenarioRunTimelineOperationStatusEnum;
    /**
     *
     * @type {number}
     * @memberof ScenarioRunTimelineOperation
     */
    expectedRunRevision: number;
    /**
     *
     * @type {ScenarioRunActor}
     * @memberof ScenarioRunTimelineOperation
     */
    actor: ScenarioRunActor;
    /**
     *
     * @type {number}
     * @memberof ScenarioRunTimelineOperation
     */
    attempts: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineOperation
     */
    requestedAt: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineOperation
     */
    startedAt: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineOperation
     */
    completedAt: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineOperation
     */
    lastUpdatedAt: string;
    /**
     *
     * @type {ScenarioRunTimelineOperationError}
     * @memberof ScenarioRunTimelineOperation
     */
    error: ScenarioRunTimelineOperationError | null;
}


/**
 * @export
 */
export const ScenarioRunTimelineOperationStatusEnum = {
    Processing: 'processing',
    Succeeded: 'succeeded',
    Failed: 'failed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunTimelineOperationStatusEnum = typeof ScenarioRunTimelineOperationStatusEnum[keyof typeof ScenarioRunTimelineOperationStatusEnum];


/**
 * Check if a given object implements the ScenarioRunTimelineOperation interface.
 */
export function instanceOfScenarioRunTimelineOperation(value: object): value is ScenarioRunTimelineOperation {
    if (!('operationId' in value) || value['operationId'] === undefined) return false;
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('expectedRunRevision' in value) || value['expectedRunRevision'] === undefined) return false;
    if (!('actor' in value) || value['actor'] === undefined) return false;
    if (!('attempts' in value) || value['attempts'] === undefined) return false;
    if (!('requestedAt' in value) || value['requestedAt'] === undefined) return false;
    if (!('startedAt' in value) || value['startedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    if (!('lastUpdatedAt' in value) || value['lastUpdatedAt'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function ScenarioRunTimelineOperationFromJSON(json: any): ScenarioRunTimelineOperation {
    return ScenarioRunTimelineOperationFromJSONTyped(json, false);
}

export function ScenarioRunTimelineOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunTimelineOperation {
    if (json == null) {
        return json;
    }
    return {

        'operationId': json['operationId'],
        'action': json['action'],
        'status': json['status'],
        'expectedRunRevision': json['expectedRunRevision'],
        'actor': ScenarioRunActorFromJSON(json['actor']),
        'attempts': json['attempts'],
        'requestedAt': json['requestedAt'],
        'startedAt': json['startedAt'],
        'completedAt': json['completedAt'],
        'lastUpdatedAt': json['lastUpdatedAt'],
        'error': ScenarioRunTimelineOperationErrorFromJSON(json['error']),
    };
}

export function ScenarioRunTimelineOperationToJSON(json: any): ScenarioRunTimelineOperation {
    return ScenarioRunTimelineOperationToJSONTyped(json, false);
}

export function ScenarioRunTimelineOperationToJSONTyped(value?: ScenarioRunTimelineOperation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'operationId': value['operationId'],
        'action': value['action'],
        'status': value['status'],
        'expectedRunRevision': value['expectedRunRevision'],
        'actor': ScenarioRunActorToJSON(value['actor']),
        'attempts': value['attempts'],
        'requestedAt': value['requestedAt'],
        'startedAt': value['startedAt'],
        'completedAt': value['completedAt'],
        'lastUpdatedAt': value['lastUpdatedAt'],
        'error': ScenarioRunTimelineOperationErrorToJSON(value['error']),
    };
}
