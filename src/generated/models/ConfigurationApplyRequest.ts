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
import type { ConfigurationPlanFile } from './ConfigurationPlanFile.js';
import {
    ConfigurationPlanFileFromJSON,
    ConfigurationPlanFileFromJSONTyped,
    ConfigurationPlanFileToJSON,
    ConfigurationPlanFileToJSONTyped,
} from './ConfigurationPlanFile.js';

/**
 * Exact applicable desired bundle and deterministic plan identity submitted for one aggregate configuration deployment. The files must be byte-for-byte and logically identical to those planned.
 * @export
 * @interface ConfigurationApplyRequest
 */
export interface ConfigurationApplyRequest {
    /**
     * Optional binding resource keys to re-apply against the destination workspace's current runtime authority without changing their authored files. Include the same selection in plan and apply. Referenced mapping/partner changes also produce explicit dependent binding updates in the plan. This option is apply metadata and never enters Git files.
     * @type {Set<string>}
     * @memberof ConfigurationApplyRequest
     */
    refreshScenarioBindings?: Set<string>;
    /**
     * Non-null deterministic plan identity returned by the immediately preceding applicable plan.
     * @type {string}
     * @memberof ConfigurationApplyRequest
     */
    planSha256: string;
    /**
     * Optional explicit passing-evidence requirement. When supplied, the server requires a current, unapplied PASSED run for this exact bundle and plan, and links it to the apply atomically. Omit to apply without a verification gate.
     * @type {string}
     * @memberof ConfigurationApplyRequest
     */
    verificationRunId?: string;
    /**
     * The exact desired logical files used to compute `planSha256`, optionally including the one canonical advisory `_state/snapshot.json` file accepted by planning.
     * @type {Array<ConfigurationPlanFile>}
     * @memberof ConfigurationApplyRequest
     */
    files: Array<ConfigurationPlanFile>;
}

/**
 * Check if a given object implements the ConfigurationApplyRequest interface.
 */
export function instanceOfConfigurationApplyRequest(value: object): value is ConfigurationApplyRequest {
    if (!('planSha256' in value) || value['planSha256'] === undefined) return false;
    if (!('files' in value) || value['files'] === undefined) return false;
    return true;
}

export function ConfigurationApplyRequestFromJSON(json: any): ConfigurationApplyRequest {
    return ConfigurationApplyRequestFromJSONTyped(json, false);
}

export function ConfigurationApplyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationApplyRequest {
    if (json == null) {
        return json;
    }
    return {

        'refreshScenarioBindings': json['refreshScenarioBindings'] == null ? undefined : new Set(json['refreshScenarioBindings']),
        'planSha256': json['planSha256'],
        'verificationRunId': json['verificationRunId'] == null ? undefined : json['verificationRunId'],
        'files': ((json['files'] as Array<any>).map(ConfigurationPlanFileFromJSON)),
    };
}

export function ConfigurationApplyRequestToJSON(json: any): ConfigurationApplyRequest {
    return ConfigurationApplyRequestToJSONTyped(json, false);
}

export function ConfigurationApplyRequestToJSONTyped(value?: ConfigurationApplyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'refreshScenarioBindings': value['refreshScenarioBindings'] == null ? undefined : Array.from(value['refreshScenarioBindings'] as Set<any>),
        'planSha256': value['planSha256'],
        'verificationRunId': value['verificationRunId'],
        'files': ((value['files'] as Array<any>).map(ConfigurationPlanFileToJSON)),
    };
}
