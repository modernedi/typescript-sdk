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
import type { ConfigurationPlanDiagnostic } from './ConfigurationPlanDiagnostic.js';
import {
    ConfigurationPlanDiagnosticFromJSON,
    ConfigurationPlanDiagnosticFromJSONTyped,
    ConfigurationPlanDiagnosticToJSON,
    ConfigurationPlanDiagnosticToJSONTyped,
} from './ConfigurationPlanDiagnostic.js';
import type { ConfigurationPlanSummary } from './ConfigurationPlanSummary.js';
import {
    ConfigurationPlanSummaryFromJSON,
    ConfigurationPlanSummaryFromJSONTyped,
    ConfigurationPlanSummaryToJSON,
    ConfigurationPlanSummaryToJSONTyped,
} from './ConfigurationPlanSummary.js';
import type { ConfigurationPlanValidationContext } from './ConfigurationPlanValidationContext.js';
import {
    ConfigurationPlanValidationContextFromJSON,
    ConfigurationPlanValidationContextFromJSONTyped,
    ConfigurationPlanValidationContextToJSON,
    ConfigurationPlanValidationContextToJSONTyped,
} from './ConfigurationPlanValidationContext.js';
import type { ConfigurationPlanAffectedRun } from './ConfigurationPlanAffectedRun.js';
import {
    ConfigurationPlanAffectedRunFromJSON,
    ConfigurationPlanAffectedRunFromJSONTyped,
    ConfigurationPlanAffectedRunToJSON,
    ConfigurationPlanAffectedRunToJSONTyped,
} from './ConfigurationPlanAffectedRun.js';
import type { ConfigurationPlanOperation } from './ConfigurationPlanOperation.js';
import {
    ConfigurationPlanOperationFromJSON,
    ConfigurationPlanOperationFromJSONTyped,
    ConfigurationPlanOperationToJSON,
    ConfigurationPlanOperationToJSONTyped,
} from './ConfigurationPlanOperation.js';
import type { ConfigurationPlanAffectedScenario } from './ConfigurationPlanAffectedScenario.js';
import {
    ConfigurationPlanAffectedScenarioFromJSON,
    ConfigurationPlanAffectedScenarioFromJSONTyped,
    ConfigurationPlanAffectedScenarioToJSON,
    ConfigurationPlanAffectedScenarioToJSONTyped,
} from './ConfigurationPlanAffectedScenario.js';

/**
 * Deterministic read-only comparison between one validated desired bundle and the workspace's current portable AS2, partner, and mapping configuration.
 * @export
 * @interface ConfigurationPlanResponse
 */
export interface ConfigurationPlanResponse {
    /**
     * Always `true` when planning completed, including a plan with semantic errors.
     * @type {boolean}
     * @memberof ConfigurationPlanResponse
     */
    success: boolean;
    /**
     * Whether the desired configuration passed semantic validation and complete scenario-impact analysis and can therefore receive a `planSha256`.
     * @type {boolean}
     * @memberof ConfigurationPlanResponse
     */
    applicable: boolean;
    /**
     * SHA-256 of the submitted canonical `modernedi.json` manifest.
     * @type {string}
     * @memberof ConfigurationPlanResponse
     */
    desiredBundleSha256: string;
    /**
     * Strong quoted SHA-256 identity of the current configuration snapshot used for this comparison.
     * @type {string}
     * @memberof ConfigurationPlanResponse
     */
    currentSnapshotEtag: string;
    /**
     * Tenant-wide runtime configuration revision observed by the same repeatable-read planning transaction.
     * @type {number}
     * @memberof ConfigurationPlanResponse
     */
    runtimeConfigurationRevision: number;
    /**
     *
     * @type {ConfigurationPlanValidationContext}
     * @memberof ConfigurationPlanResponse
     */
    validationContext: ConfigurationPlanValidationContext;
    /**
     * Deterministic identity binding desired state, current snapshot, validation context, operations, and scenario impact. Null when `applicable` is false.
     * @type {string}
     * @memberof ConfigurationPlanResponse
     */
    planSha256: string | null;
    /**
     *
     * @type {ConfigurationPlanSummary}
     * @memberof ConfigurationPlanResponse
     */
    summary: ConfigurationPlanSummary;
    /**
     * Changed resources only, in deterministic dependency-aware display order. Unchanged resources are counted in `summary.unchanged`.
     * @type {Array<ConfigurationPlanOperation>}
     * @memberof ConfigurationPlanResponse
     */
    operations: Array<ConfigurationPlanOperation>;
    /**
     * Deterministically ordered semantic errors and warnings. Any ERROR makes `applicable` false.
     * @type {Array<ConfigurationPlanDiagnostic>}
     * @memberof ConfigurationPlanResponse
     */
    diagnostics: Array<ConfigurationPlanDiagnostic>;
    /**
     * Whether ModernEDI safely evaluated every applied scenario binding that could depend on a changed resource. False makes `applicable` false.
     * @type {boolean}
     * @memberof ConfigurationPlanResponse
     */
    scenarioImpactComplete: boolean;
    /**
     * Applied scenario bindings that would require reapplication if these operations were later applied.
     * @type {Array<ConfigurationPlanAffectedScenario>}
     * @memberof ConfigurationPlanResponse
     */
    affectedScenarios: Array<ConfigurationPlanAffectedScenario>;
    /**
     * ACTIVE scenario runs pinned to affected binding revisions. Any entry makes the plan inapplicable until the run is cancelled or completed and configuration is planned again.
     * @type {Array<ConfigurationPlanAffectedRun>}
     * @memberof ConfigurationPlanResponse
     */
    affectedRuns: Array<ConfigurationPlanAffectedRun>;
}

/**
 * Check if a given object implements the ConfigurationPlanResponse interface.
 */
export function instanceOfConfigurationPlanResponse(value: object): value is ConfigurationPlanResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('applicable' in value) || value['applicable'] === undefined) return false;
    if (!('desiredBundleSha256' in value) || value['desiredBundleSha256'] === undefined) return false;
    if (!('currentSnapshotEtag' in value) || value['currentSnapshotEtag'] === undefined) return false;
    if (!('runtimeConfigurationRevision' in value) || value['runtimeConfigurationRevision'] === undefined) return false;
    if (!('validationContext' in value) || value['validationContext'] === undefined) return false;
    if (!('planSha256' in value) || value['planSha256'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('operations' in value) || value['operations'] === undefined) return false;
    if (!('diagnostics' in value) || value['diagnostics'] === undefined) return false;
    if (!('scenarioImpactComplete' in value) || value['scenarioImpactComplete'] === undefined) return false;
    if (!('affectedScenarios' in value) || value['affectedScenarios'] === undefined) return false;
    if (!('affectedRuns' in value) || value['affectedRuns'] === undefined) return false;
    return true;
}

export function ConfigurationPlanResponseFromJSON(json: any): ConfigurationPlanResponse {
    return ConfigurationPlanResponseFromJSONTyped(json, false);
}

export function ConfigurationPlanResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'applicable': json['applicable'],
        'desiredBundleSha256': json['desiredBundleSha256'],
        'currentSnapshotEtag': json['currentSnapshotEtag'],
        'runtimeConfigurationRevision': json['runtimeConfigurationRevision'],
        'validationContext': ConfigurationPlanValidationContextFromJSON(json['validationContext']),
        'planSha256': json['planSha256'],
        'summary': ConfigurationPlanSummaryFromJSON(json['summary']),
        'operations': ((json['operations'] as Array<any>).map(ConfigurationPlanOperationFromJSON)),
        'diagnostics': ((json['diagnostics'] as Array<any>).map(ConfigurationPlanDiagnosticFromJSON)),
        'scenarioImpactComplete': json['scenarioImpactComplete'],
        'affectedScenarios': ((json['affectedScenarios'] as Array<any>).map(ConfigurationPlanAffectedScenarioFromJSON)),
        'affectedRuns': ((json['affectedRuns'] as Array<any>).map(ConfigurationPlanAffectedRunFromJSON)),
    };
}

export function ConfigurationPlanResponseToJSON(json: any): ConfigurationPlanResponse {
    return ConfigurationPlanResponseToJSONTyped(json, false);
}

export function ConfigurationPlanResponseToJSONTyped(value?: ConfigurationPlanResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'applicable': value['applicable'],
        'desiredBundleSha256': value['desiredBundleSha256'],
        'currentSnapshotEtag': value['currentSnapshotEtag'],
        'runtimeConfigurationRevision': value['runtimeConfigurationRevision'],
        'validationContext': ConfigurationPlanValidationContextToJSON(value['validationContext']),
        'planSha256': value['planSha256'],
        'summary': ConfigurationPlanSummaryToJSON(value['summary']),
        'operations': ((value['operations'] as Array<any>).map(ConfigurationPlanOperationToJSON)),
        'diagnostics': ((value['diagnostics'] as Array<any>).map(ConfigurationPlanDiagnosticToJSON)),
        'scenarioImpactComplete': value['scenarioImpactComplete'],
        'affectedScenarios': ((value['affectedScenarios'] as Array<any>).map(ConfigurationPlanAffectedScenarioToJSON)),
        'affectedRuns': ((value['affectedRuns'] as Array<any>).map(ConfigurationPlanAffectedRunToJSON)),
    };
}
