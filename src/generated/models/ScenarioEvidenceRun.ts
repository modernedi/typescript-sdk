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
import type { ScenarioEvidenceRunBinding } from './ScenarioEvidenceRunBinding.js';
import {
    ScenarioEvidenceRunBindingFromJSON,
    ScenarioEvidenceRunBindingFromJSONTyped,
    ScenarioEvidenceRunBindingToJSON,
    ScenarioEvidenceRunBindingToJSONTyped,
} from './ScenarioEvidenceRunBinding.js';
import type { ScenarioDefinitionIdentity } from './ScenarioDefinitionIdentity.js';
import {
    ScenarioDefinitionIdentityFromJSON,
    ScenarioDefinitionIdentityFromJSONTyped,
    ScenarioDefinitionIdentityToJSON,
    ScenarioDefinitionIdentityToJSONTyped,
} from './ScenarioDefinitionIdentity.js';
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
 * @interface ScenarioEvidenceRun
 */
export interface ScenarioEvidenceRun {
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceRun
     */
    id: string;
    /**
     *
     * @type {ScenarioEvidenceRunStatusEnum}
     * @memberof ScenarioEvidenceRun
     */
    status: ScenarioEvidenceRunStatusEnum;
    /**
     *
     * @type {ScenarioEvidenceRunOutcomeEnum}
     * @memberof ScenarioEvidenceRun
     */
    outcome: ScenarioEvidenceRunOutcomeEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceRun
     */
    phase: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceRun
     */
    revision: number;
    /**
     *
     * @type {ScenarioEvidenceRunEnvironmentEnum}
     * @memberof ScenarioEvidenceRun
     */
    environment: ScenarioEvidenceRunEnvironmentEnum;
    /**
     *
     * @type {ScenarioEvidenceRunAdapterIdEnum}
     * @memberof ScenarioEvidenceRun
     */
    adapterId: ScenarioEvidenceRunAdapterIdEnum;
    /**
     *
     * @type {ScenarioDefinitionIdentity}
     * @memberof ScenarioEvidenceRun
     */
    definition: ScenarioDefinitionIdentity;
    /**
     *
     * @type {ScenarioEvidenceRunBinding}
     * @memberof ScenarioEvidenceRun
     */
    binding: ScenarioEvidenceRunBinding;
    /**
     *
     * @type {ScenarioRunActor}
     * @memberof ScenarioEvidenceRun
     */
    startedBy: ScenarioRunActor;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceRun
     */
    startedAt: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceRun
     */
    completedAt: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceRun
     */
    lastUpdatedAt: string;
}


/**
 * @export
 */
export const ScenarioEvidenceRunStatusEnum = {
    Completed: 'completed',
    Cancelled: 'cancelled',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceRunStatusEnum = typeof ScenarioEvidenceRunStatusEnum[keyof typeof ScenarioEvidenceRunStatusEnum];

/**
 * @export
 */
export const ScenarioEvidenceRunOutcomeEnum = {
    Passed: 'passed',
    Failed: 'failed',
    Inconclusive: 'inconclusive',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceRunOutcomeEnum = typeof ScenarioEvidenceRunOutcomeEnum[keyof typeof ScenarioEvidenceRunOutcomeEnum];

/**
 * @export
 */
export const ScenarioEvidenceRunEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceRunEnvironmentEnum = typeof ScenarioEvidenceRunEnvironmentEnum[keyof typeof ScenarioEvidenceRunEnvironmentEnum];

/**
 * @export
 */
export const ScenarioEvidenceRunAdapterIdEnum = {
    ScenarioGraphInterpreterV1: 'scenario-graph-interpreter-v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceRunAdapterIdEnum = typeof ScenarioEvidenceRunAdapterIdEnum[keyof typeof ScenarioEvidenceRunAdapterIdEnum];


/**
 * Check if a given object implements the ScenarioEvidenceRun interface.
 */
export function instanceOfScenarioEvidenceRun(value: object): value is ScenarioEvidenceRun {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('phase' in value) || value['phase'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('adapterId' in value) || value['adapterId'] === undefined) return false;
    if (value['adapterId'] !== 'scenario-graph-interpreter-v1') return false;

    if (!('definition' in value) || value['definition'] === undefined) return false;
    if (!('binding' in value) || value['binding'] === undefined) return false;
    if (!('startedBy' in value) || value['startedBy'] === undefined) return false;
    if (!('startedAt' in value) || value['startedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    if (!('lastUpdatedAt' in value) || value['lastUpdatedAt'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceRunFromJSON(json: any): ScenarioEvidenceRun {
    return ScenarioEvidenceRunFromJSONTyped(json, false);
}

export function ScenarioEvidenceRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceRun {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'status': json['status'],
        'outcome': json['outcome'],
        'phase': json['phase'],
        'revision': json['revision'],
        'environment': json['environment'],
        'adapterId': json['adapterId'],
        'definition': ScenarioDefinitionIdentityFromJSON(json['definition']),
        'binding': ScenarioEvidenceRunBindingFromJSON(json['binding']),
        'startedBy': ScenarioRunActorFromJSON(json['startedBy']),
        'startedAt': json['startedAt'],
        'completedAt': json['completedAt'],
        'lastUpdatedAt': json['lastUpdatedAt'],
    };
}

export function ScenarioEvidenceRunToJSON(json: any): ScenarioEvidenceRun {
    return ScenarioEvidenceRunToJSONTyped(json, false);
}

export function ScenarioEvidenceRunToJSONTyped(value?: ScenarioEvidenceRun | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'status': value['status'],
        'outcome': value['outcome'],
        'phase': value['phase'],
        'revision': value['revision'],
        'environment': value['environment'],
        'adapterId': value['adapterId'],
        'definition': ScenarioDefinitionIdentityToJSON(value['definition']),
        'binding': ScenarioEvidenceRunBindingToJSON(value['binding']),
        'startedBy': ScenarioRunActorToJSON(value['startedBy']),
        'startedAt': value['startedAt'],
        'completedAt': value['completedAt'],
        'lastUpdatedAt': value['lastUpdatedAt'],
    };
}
