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
/**
 *
 * @export
 * @interface ScenarioEvidenceClaim
 */
export interface ScenarioEvidenceClaim {
    /**
     *
     * @type {ScenarioEvidenceClaimTypeEnum}
     * @memberof ScenarioEvidenceClaim
     */
    type: ScenarioEvidenceClaimTypeEnum;
    /**
     *
     * @type {ScenarioEvidenceClaimStatementEnum}
     * @memberof ScenarioEvidenceClaim
     */
    statement: ScenarioEvidenceClaimStatementEnum;
    /**
     *
     * @type {ScenarioEvidenceClaimScopeEnum}
     * @memberof ScenarioEvidenceClaim
     */
    scope: ScenarioEvidenceClaimScopeEnum;
}


/**
 * @export
 */
export const ScenarioEvidenceClaimTypeEnum = {
    ImplementationVerification: 'implementation_verification',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceClaimTypeEnum = typeof ScenarioEvidenceClaimTypeEnum[keyof typeof ScenarioEvidenceClaimTypeEnum];

/**
 * @export
 */
export const ScenarioEvidenceClaimStatementEnum = {
    ModernEdiObservedAndEvaluatedThisScenarioRunAgainstTheExactAppliedBindingRecordedInThisReport: 'ModernEDI observed and evaluated this scenario run against the exact applied binding recorded in this report.',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceClaimStatementEnum = typeof ScenarioEvidenceClaimStatementEnum[keyof typeof ScenarioEvidenceClaimStatementEnum];

/**
 * @export
 */
export const ScenarioEvidenceClaimScopeEnum = {
    ThisReportProvesOnlyTheRecordedRunItDoesNotCertifyTheTenantsBroaderEdiImplementation: 'This report proves only the recorded run; it does not certify the tenant\'s broader EDI implementation.',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceClaimScopeEnum = typeof ScenarioEvidenceClaimScopeEnum[keyof typeof ScenarioEvidenceClaimScopeEnum];


/**
 * Check if a given object implements the ScenarioEvidenceClaim interface.
 */
export function instanceOfScenarioEvidenceClaim(value: object): value is ScenarioEvidenceClaim {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (value['type'] !== 'implementation_verification') return false;

    if (!('statement' in value) || value['statement'] === undefined) return false;
    if (value['statement'] !== 'ModernEDI observed and evaluated this scenario run against the exact applied binding recorded in this report.') return false;

    if (!('scope' in value) || value['scope'] === undefined) return false;
    if (value['scope'] !== 'This report proves only the recorded run; it does not certify the tenant&#39;s broader EDI implementation.') return false;

    return true;
}

export function ScenarioEvidenceClaimFromJSON(json: any): ScenarioEvidenceClaim {
    return ScenarioEvidenceClaimFromJSONTyped(json, false);
}

export function ScenarioEvidenceClaimFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceClaim {
    if (json == null) {
        return json;
    }
    return {

        'type': json['type'],
        'statement': json['statement'],
        'scope': json['scope'],
    };
}

export function ScenarioEvidenceClaimToJSON(json: any): ScenarioEvidenceClaim {
    return ScenarioEvidenceClaimToJSONTyped(json, false);
}

export function ScenarioEvidenceClaimToJSONTyped(value?: ScenarioEvidenceClaim | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'type': value['type'],
        'statement': value['statement'],
        'scope': value['scope'],
    };
}
