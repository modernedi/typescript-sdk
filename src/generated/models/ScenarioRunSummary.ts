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
import type { ScenarioRunSummaryGuidance } from './ScenarioRunSummaryGuidance.js';
import {
    ScenarioRunSummaryGuidanceFromJSON,
    ScenarioRunSummaryGuidanceFromJSONTyped,
    ScenarioRunSummaryGuidanceToJSON,
    ScenarioRunSummaryGuidanceToJSONTyped,
} from './ScenarioRunSummaryGuidance.js';
import type { ScenarioContextBinding } from './ScenarioContextBinding.js';
import {
    ScenarioContextBindingFromJSON,
    ScenarioContextBindingFromJSONTyped,
    ScenarioContextBindingToJSON,
    ScenarioContextBindingToJSONTyped,
} from './ScenarioContextBinding.js';
import type { ScenarioDefinitionIdentity } from './ScenarioDefinitionIdentity.js';
import {
    ScenarioDefinitionIdentityFromJSON,
    ScenarioDefinitionIdentityFromJSONTyped,
    ScenarioDefinitionIdentityToJSON,
    ScenarioDefinitionIdentityToJSONTyped,
} from './ScenarioDefinitionIdentity.js';

/**
 *
 * @export
 * @interface ScenarioRunSummary
 */
export interface ScenarioRunSummary {
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummary
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioRunSummary
     */
    revision: number;
    /**
     * Opaque quoted strong ETag for one tenant-scoped run revision. Clients must return the current value unchanged; its fields are not client authority.
     * @type {string}
     * @memberof ScenarioRunSummary
     */
    etag: string;
    /**
     *
     * @type {ScenarioContextBinding}
     * @memberof ScenarioRunSummary
     */
    binding: ScenarioContextBinding;
    /**
     *
     * @type {ScenarioDefinitionIdentity}
     * @memberof ScenarioRunSummary
     */
    definition: ScenarioDefinitionIdentity;
    /**
     *
     * @type {ScenarioRunSummaryEnvironmentEnum}
     * @memberof ScenarioRunSummary
     */
    environment: ScenarioRunSummaryEnvironmentEnum;
    /**
     *
     * @type {ScenarioRunSummaryStatusEnum}
     * @memberof ScenarioRunSummary
     */
    status: ScenarioRunSummaryStatusEnum;
    /**
     *
     * @type {ScenarioRunSummaryOutcomeEnum}
     * @memberof ScenarioRunSummary
     */
    outcome: ScenarioRunSummaryOutcomeEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummary
     */
    phase: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummary
     */
    startedAt: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummary
     */
    completedAt: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunSummary
     */
    lastUpdatedAt: string;
    /**
     *
     * @type {ScenarioRunSummaryGuidance}
     * @memberof ScenarioRunSummary
     */
    guidance: ScenarioRunSummaryGuidance;
}


/**
 * @export
 */
export const ScenarioRunSummaryEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunSummaryEnvironmentEnum = typeof ScenarioRunSummaryEnvironmentEnum[keyof typeof ScenarioRunSummaryEnvironmentEnum];

/**
 * @export
 */
export const ScenarioRunSummaryStatusEnum = {
    Active: 'active',
    Completed: 'completed',
    Cancelled: 'cancelled',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunSummaryStatusEnum = typeof ScenarioRunSummaryStatusEnum[keyof typeof ScenarioRunSummaryStatusEnum];

/**
 * @export
 */
export const ScenarioRunSummaryOutcomeEnum = {
    Waiting: 'waiting',
    Passed: 'passed',
    Failed: 'failed',
    Inconclusive: 'inconclusive',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunSummaryOutcomeEnum = typeof ScenarioRunSummaryOutcomeEnum[keyof typeof ScenarioRunSummaryOutcomeEnum];


/**
 * Check if a given object implements the ScenarioRunSummary interface.
 */
export function instanceOfScenarioRunSummary(value: object): value is ScenarioRunSummary {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('etag' in value) || value['etag'] === undefined) return false;
    if (!('binding' in value) || value['binding'] === undefined) return false;
    if (!('definition' in value) || value['definition'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('phase' in value) || value['phase'] === undefined) return false;
    if (!('startedAt' in value) || value['startedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    if (!('lastUpdatedAt' in value) || value['lastUpdatedAt'] === undefined) return false;
    if (!('guidance' in value) || value['guidance'] === undefined) return false;
    return true;
}

export function ScenarioRunSummaryFromJSON(json: any): ScenarioRunSummary {
    return ScenarioRunSummaryFromJSONTyped(json, false);
}

export function ScenarioRunSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunSummary {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'revision': json['revision'],
        'etag': json['etag'],
        'binding': ScenarioContextBindingFromJSON(json['binding']),
        'definition': ScenarioDefinitionIdentityFromJSON(json['definition']),
        'environment': json['environment'],
        'status': json['status'],
        'outcome': json['outcome'],
        'phase': json['phase'],
        'startedAt': json['startedAt'],
        'completedAt': json['completedAt'],
        'lastUpdatedAt': json['lastUpdatedAt'],
        'guidance': ScenarioRunSummaryGuidanceFromJSON(json['guidance']),
    };
}

export function ScenarioRunSummaryToJSON(json: any): ScenarioRunSummary {
    return ScenarioRunSummaryToJSONTyped(json, false);
}

export function ScenarioRunSummaryToJSONTyped(value?: ScenarioRunSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'revision': value['revision'],
        'etag': value['etag'],
        'binding': ScenarioContextBindingToJSON(value['binding']),
        'definition': ScenarioDefinitionIdentityToJSON(value['definition']),
        'environment': value['environment'],
        'status': value['status'],
        'outcome': value['outcome'],
        'phase': value['phase'],
        'startedAt': value['startedAt'],
        'completedAt': value['completedAt'],
        'lastUpdatedAt': value['lastUpdatedAt'],
        'guidance': ScenarioRunSummaryGuidanceToJSON(value['guidance']),
    };
}
