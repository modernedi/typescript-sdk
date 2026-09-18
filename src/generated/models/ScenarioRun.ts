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
import type { ScenarioGraphRetry } from './ScenarioGraphRetry.js';
import {
    ScenarioGraphRetryFromJSON,
    ScenarioGraphRetryFromJSONTyped,
    ScenarioGraphRetryToJSON,
    ScenarioGraphRetryToJSONTyped,
} from './ScenarioGraphRetry.js';
import type { ScenarioGraphExecution } from './ScenarioGraphExecution.js';
import {
    ScenarioGraphExecutionFromJSON,
    ScenarioGraphExecutionFromJSONTyped,
    ScenarioGraphExecutionToJSON,
    ScenarioGraphExecutionToJSONTyped,
} from './ScenarioGraphExecution.js';
import type { ScenarioGraphStep } from './ScenarioGraphStep.js';
import {
    ScenarioGraphStepFromJSON,
    ScenarioGraphStepFromJSONTyped,
    ScenarioGraphStepToJSON,
    ScenarioGraphStepToJSONTyped,
} from './ScenarioGraphStep.js';
import type { ScenarioDefinitionIdentity } from './ScenarioDefinitionIdentity.js';
import {
    ScenarioDefinitionIdentityFromJSON,
    ScenarioDefinitionIdentityFromJSONTyped,
    ScenarioDefinitionIdentityToJSON,
    ScenarioDefinitionIdentityToJSONTyped,
} from './ScenarioDefinitionIdentity.js';
import type { ScenarioGraphGuidance } from './ScenarioGraphGuidance.js';
import {
    ScenarioGraphGuidanceFromJSON,
    ScenarioGraphGuidanceFromJSONTyped,
    ScenarioGraphGuidanceToJSON,
    ScenarioGraphGuidanceToJSONTyped,
} from './ScenarioGraphGuidance.js';
import type { StartScenarioRunRequestBinding } from './StartScenarioRunRequestBinding.js';
import {
    StartScenarioRunRequestBindingFromJSON,
    StartScenarioRunRequestBindingFromJSONTyped,
    StartScenarioRunRequestBindingToJSON,
    StartScenarioRunRequestBindingToJSONTyped,
} from './StartScenarioRunRequestBinding.js';
import type { ScenarioGraphCounts } from './ScenarioGraphCounts.js';
import {
    ScenarioGraphCountsFromJSON,
    ScenarioGraphCountsFromJSONTyped,
    ScenarioGraphCountsToJSON,
    ScenarioGraphCountsToJSONTyped,
} from './ScenarioGraphCounts.js';
import type { ScenarioGraphCheck } from './ScenarioGraphCheck.js';
import {
    ScenarioGraphCheckFromJSON,
    ScenarioGraphCheckFromJSONTyped,
    ScenarioGraphCheckToJSON,
    ScenarioGraphCheckToJSONTyped,
} from './ScenarioGraphCheck.js';

/**
 *
 * @export
 * @interface ScenarioRun
 */
export interface ScenarioRun {
    /**
     *
     * @type {ScenarioRunApiVersionEnum}
     * @memberof ScenarioRun
     */
    apiVersion: ScenarioRunApiVersionEnum;
    /**
     *
     * @type {ScenarioRunKindEnum}
     * @memberof ScenarioRun
     */
    kind: ScenarioRunKindEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioRun
     */
    id: string;
    /**
     * Server-owned run origin. system_managed is reserved for the managed implementation-verification route; tenant_applied identifies an exact tenant-applied binding start.
     * @type {ScenarioRunOriginEnum}
     * @memberof ScenarioRun
     */
    origin: ScenarioRunOriginEnum;
    /**
     *
     * @type {StartScenarioRunRequestBinding}
     * @memberof ScenarioRun
     */
    binding: StartScenarioRunRequestBinding;
    /**
     *
     * @type {ScenarioDefinitionIdentity}
     * @memberof ScenarioRun
     */
    definition: ScenarioDefinitionIdentity;
    /**
     *
     * @type {ScenarioRunEnvironmentEnum}
     * @memberof ScenarioRun
     */
    environment: ScenarioRunEnvironmentEnum;
    /**
     *
     * @type {ScenarioRunAdapterIdEnum}
     * @memberof ScenarioRun
     */
    adapterId: ScenarioRunAdapterIdEnum;
    /**
     *
     * @type {ScenarioGraphExecution}
     * @memberof ScenarioRun
     */
    execution: ScenarioGraphExecution;
    /**
     *
     * @type {ScenarioRunStatusEnum}
     * @memberof ScenarioRun
     */
    status: ScenarioRunStatusEnum;
    /**
     *
     * @type {ScenarioRunOutcomeEnum}
     * @memberof ScenarioRun
     */
    outcome: ScenarioRunOutcomeEnum;
    /**
     *
     * @type {ScenarioRunPhaseEnum}
     * @memberof ScenarioRun
     */
    phase: ScenarioRunPhaseEnum;
    /**
     *
     * @type {number}
     * @memberof ScenarioRun
     */
    revision: number;
    /**
     * Opaque quoted strong ETag for one tenant-scoped run revision. Clients must return the current value unchanged; its fields are not client authority.
     * @type {string}
     * @memberof ScenarioRun
     */
    etag: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioRun
     */
    startedAt: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioRun
     */
    completedAt: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioRun
     */
    lastUpdatedAt: string | null;
    /**
     *
     * @type {ScenarioGraphCounts}
     * @memberof ScenarioRun
     */
    counts: ScenarioGraphCounts;
    /**
     *
     * @type {ScenarioGraphRetry}
     * @memberof ScenarioRun
     */
    retry: ScenarioGraphRetry;
    /**
     *
     * @type {ScenarioGraphGuidance}
     * @memberof ScenarioRun
     */
    guidance: ScenarioGraphGuidance;
    /**
     *
     * @type {Array<ScenarioGraphStep>}
     * @memberof ScenarioRun
     */
    steps: Array<ScenarioGraphStep>;
    /**
     *
     * @type {Array<ScenarioGraphCheck>}
     * @memberof ScenarioRun
     */
    checks: Array<ScenarioGraphCheck>;
}


/**
 * @export
 */
export const ScenarioRunApiVersionEnum = {
    ModernediComScenarioRunResponseV1: 'modernedi.com/scenario-run-response/v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunApiVersionEnum = typeof ScenarioRunApiVersionEnum[keyof typeof ScenarioRunApiVersionEnum];

/**
 * @export
 */
export const ScenarioRunKindEnum = {
    Graph: 'graph',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunKindEnum = typeof ScenarioRunKindEnum[keyof typeof ScenarioRunKindEnum];

/**
 * @export
 */
export const ScenarioRunOriginEnum = {
    SystemManaged: 'system_managed',
    TenantApplied: 'tenant_applied',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunOriginEnum = typeof ScenarioRunOriginEnum[keyof typeof ScenarioRunOriginEnum];

/**
 * @export
 */
export const ScenarioRunEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunEnvironmentEnum = typeof ScenarioRunEnvironmentEnum[keyof typeof ScenarioRunEnvironmentEnum];

/**
 * @export
 */
export const ScenarioRunAdapterIdEnum = {
    ScenarioGraphInterpreterV1: 'scenario-graph-interpreter-v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunAdapterIdEnum = typeof ScenarioRunAdapterIdEnum[keyof typeof ScenarioRunAdapterIdEnum];

/**
 * @export
 */
export const ScenarioRunStatusEnum = {
    Active: 'active',
    Completed: 'completed',
    Cancelled: 'cancelled',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunStatusEnum = typeof ScenarioRunStatusEnum[keyof typeof ScenarioRunStatusEnum];

/**
 * @export
 */
export const ScenarioRunOutcomeEnum = {
    Waiting: 'waiting',
    Passed: 'passed',
    Failed: 'failed',
    Inconclusive: 'inconclusive',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunOutcomeEnum = typeof ScenarioRunOutcomeEnum[keyof typeof ScenarioRunOutcomeEnum];

/**
 * @export
 */
export const ScenarioRunPhaseEnum = {
    Observing: 'observing',
    Complete: 'complete',
    BindingDrifted: 'binding_drifted',
    ReconciliationPending: 'reconciliation_pending',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunPhaseEnum = typeof ScenarioRunPhaseEnum[keyof typeof ScenarioRunPhaseEnum];


/**
 * Check if a given object implements the ScenarioRun interface.
 */
export function instanceOfScenarioRun(value: object): value is ScenarioRun {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (value['apiVersion'] !== 'modernedi.com/scenario-run-response/v1') return false;

    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'graph') return false;

    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('origin' in value) || value['origin'] === undefined) return false;
    if (!('binding' in value) || value['binding'] === undefined) return false;
    if (!('definition' in value) || value['definition'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('adapterId' in value) || value['adapterId'] === undefined) return false;
    if (value['adapterId'] !== 'scenario-graph-interpreter-v1') return false;

    if (!('execution' in value) || value['execution'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('phase' in value) || value['phase'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('etag' in value) || value['etag'] === undefined) return false;
    if (!('startedAt' in value) || value['startedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    if (!('lastUpdatedAt' in value) || value['lastUpdatedAt'] === undefined) return false;
    if (!('counts' in value) || value['counts'] === undefined) return false;
    if (!('retry' in value) || value['retry'] === undefined) return false;
    if (!('guidance' in value) || value['guidance'] === undefined) return false;
    if (!('steps' in value) || value['steps'] === undefined) return false;
    if (!('checks' in value) || value['checks'] === undefined) return false;
    return true;
}

export function ScenarioRunFromJSON(json: any): ScenarioRun {
    return ScenarioRunFromJSONTyped(json, false);
}

export function ScenarioRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRun {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': json['apiVersion'],
        'kind': json['kind'],
        'id': json['id'],
        'origin': json['origin'],
        'binding': StartScenarioRunRequestBindingFromJSON(json['binding']),
        'definition': ScenarioDefinitionIdentityFromJSON(json['definition']),
        'environment': json['environment'],
        'adapterId': json['adapterId'],
        'execution': ScenarioGraphExecutionFromJSON(json['execution']),
        'status': json['status'],
        'outcome': json['outcome'],
        'phase': json['phase'],
        'revision': json['revision'],
        'etag': json['etag'],
        'startedAt': json['startedAt'],
        'completedAt': json['completedAt'],
        'lastUpdatedAt': json['lastUpdatedAt'],
        'counts': ScenarioGraphCountsFromJSON(json['counts']),
        'retry': ScenarioGraphRetryFromJSON(json['retry']),
        'guidance': ScenarioGraphGuidanceFromJSON(json['guidance']),
        'steps': ((json['steps'] as Array<any>).map(ScenarioGraphStepFromJSON)),
        'checks': ((json['checks'] as Array<any>).map(ScenarioGraphCheckFromJSON)),
    };
}

export function ScenarioRunToJSON(json: any): ScenarioRun {
    return ScenarioRunToJSONTyped(json, false);
}

export function ScenarioRunToJSONTyped(value?: ScenarioRun | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'id': value['id'],
        'origin': value['origin'],
        'binding': StartScenarioRunRequestBindingToJSON(value['binding']),
        'definition': ScenarioDefinitionIdentityToJSON(value['definition']),
        'environment': value['environment'],
        'adapterId': value['adapterId'],
        'execution': ScenarioGraphExecutionToJSON(value['execution']),
        'status': value['status'],
        'outcome': value['outcome'],
        'phase': value['phase'],
        'revision': value['revision'],
        'etag': value['etag'],
        'startedAt': value['startedAt'],
        'completedAt': value['completedAt'],
        'lastUpdatedAt': value['lastUpdatedAt'],
        'counts': ScenarioGraphCountsToJSON(value['counts']),
        'retry': ScenarioGraphRetryToJSON(value['retry']),
        'guidance': ScenarioGraphGuidanceToJSON(value['guidance']),
        'steps': ((value['steps'] as Array<any>).map(ScenarioGraphStepToJSON)),
        'checks': ((value['checks'] as Array<any>).map(ScenarioGraphCheckToJSON)),
    };
}
