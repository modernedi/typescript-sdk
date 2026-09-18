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
import type { ConfigurationVerificationIdentity } from './ConfigurationVerificationIdentity.js';
import {
    ConfigurationVerificationIdentityFromJSON,
    ConfigurationVerificationIdentityFromJSONTyped,
    ConfigurationVerificationIdentityToJSON,
    ConfigurationVerificationIdentityToJSONTyped,
} from './ConfigurationVerificationIdentity.js';
import type { ConfigurationVerificationCaseResult } from './ConfigurationVerificationCaseResult.js';
import {
    ConfigurationVerificationCaseResultFromJSON,
    ConfigurationVerificationCaseResultFromJSONTyped,
    ConfigurationVerificationCaseResultToJSON,
    ConfigurationVerificationCaseResultToJSONTyped,
} from './ConfigurationVerificationCaseResult.js';

/**
 * Durable bounded suite. Results expire after 90 days; only the most recent 200 workspace runs are retained. Freshness is checked on reads.
 * @export
 * @interface ConfigurationVerificationRun
 */
export interface ConfigurationVerificationRun {
    /**
     * Server-owned verification run identity.
     * @type {string}
     * @memberof ConfigurationVerificationRun
     */
    runId: string;
    /**
     * PASSED covers only selected saved cases; it does not establish delivery, partner acceptance or scenario success.
     * @type {ConfigurationVerificationRunStatusEnum}
     * @memberof ConfigurationVerificationRun
     */
    status: ConfigurationVerificationRunStatusEnum;
    /**
     * Server admission time.
     * @type {string}
     * @memberof ConfigurationVerificationRun
     */
    createdAt: string;
    /**
     * Server completion time; null while running.
     * @type {string}
     * @memberof ConfigurationVerificationRun
     */
    completedAt: string | null;
    /**
     * Apply operation explicitly linked to this result, or null.
     * @type {string}
     * @memberof ConfigurationVerificationRun
     */
    appliedOperationId: string | null;
    /**
     *
     * @type {ConfigurationVerificationIdentity}
     * @memberof ConfigurationVerificationRun
     */
    identity: ConfigurationVerificationIdentity;
    /**
     * Completed case outcomes. Incomplete suites cannot pass.
     * @type {Array<ConfigurationVerificationCaseResult>}
     * @memberof ConfigurationVerificationRun
     */
    cases: Array<ConfigurationVerificationCaseResult>;
    /**
     * Whether current workspace, evaluator and catalog still match this result.
     * @type {ConfigurationVerificationRunFreshnessEnum}
     * @memberof ConfigurationVerificationRun
     */
    freshness: ConfigurationVerificationRunFreshnessEnum;
    /**
     * Empty only when current.
     * @type {Array<ConfigurationVerificationRunStaleReasonsEnum>}
     * @memberof ConfigurationVerificationRun
     */
    staleReasons: Array<ConfigurationVerificationRunStaleReasonsEnum>;
}


/**
 * @export
 */
export const ConfigurationVerificationRunStatusEnum = {
    Running: 'RUNNING',
    Passed: 'PASSED',
    Failed: 'FAILED',
    Error: 'ERROR',
    Cancelled: 'CANCELLED',
    TimedOut: 'TIMED_OUT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationVerificationRunStatusEnum = typeof ConfigurationVerificationRunStatusEnum[keyof typeof ConfigurationVerificationRunStatusEnum];

/**
 * @export
 */
export const ConfigurationVerificationRunFreshnessEnum = {
    Current: 'CURRENT',
    Stale: 'STALE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationVerificationRunFreshnessEnum = typeof ConfigurationVerificationRunFreshnessEnum[keyof typeof ConfigurationVerificationRunFreshnessEnum];

/**
 * @export
 */
export const ConfigurationVerificationRunStaleReasonsEnum = {
    EvaluatorChanged: 'EVALUATOR_CHANGED',
    SyntaxTreeChanged: 'SYNTAX_TREE_CHANGED',
    ConfigurationChanged: 'CONFIGURATION_CHANGED',
    DependenciesUnavailable: 'DEPENDENCIES_UNAVAILABLE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationVerificationRunStaleReasonsEnum = typeof ConfigurationVerificationRunStaleReasonsEnum[keyof typeof ConfigurationVerificationRunStaleReasonsEnum];


/**
 * Check if a given object implements the ConfigurationVerificationRun interface.
 */
export function instanceOfConfigurationVerificationRun(value: object): value is ConfigurationVerificationRun {
    if (!('runId' in value) || value['runId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    if (!('appliedOperationId' in value) || value['appliedOperationId'] === undefined) return false;
    if (!('identity' in value) || value['identity'] === undefined) return false;
    if (!('cases' in value) || value['cases'] === undefined) return false;
    if (!('freshness' in value) || value['freshness'] === undefined) return false;
    if (!('staleReasons' in value) || value['staleReasons'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationRunFromJSON(json: any): ConfigurationVerificationRun {
    return ConfigurationVerificationRunFromJSONTyped(json, false);
}

export function ConfigurationVerificationRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationRun {
    if (json == null) {
        return json;
    }
    return {

        'runId': json['runId'],
        'status': json['status'],
        'createdAt': json['createdAt'],
        'completedAt': json['completedAt'],
        'appliedOperationId': json['appliedOperationId'],
        'identity': ConfigurationVerificationIdentityFromJSON(json['identity']),
        'cases': ((json['cases'] as Array<any>).map(ConfigurationVerificationCaseResultFromJSON)),
        'freshness': json['freshness'],
        'staleReasons': json['staleReasons'],
    };
}

export function ConfigurationVerificationRunToJSON(json: any): ConfigurationVerificationRun {
    return ConfigurationVerificationRunToJSONTyped(json, false);
}

export function ConfigurationVerificationRunToJSONTyped(value?: ConfigurationVerificationRun | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'runId': value['runId'],
        'status': value['status'],
        'createdAt': value['createdAt'],
        'completedAt': value['completedAt'],
        'appliedOperationId': value['appliedOperationId'],
        'identity': ConfigurationVerificationIdentityToJSON(value['identity']),
        'cases': ((value['cases'] as Array<any>).map(ConfigurationVerificationCaseResultToJSON)),
        'freshness': value['freshness'],
        'staleReasons': value['staleReasons'],
    };
}
