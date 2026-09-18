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
 * Execute saved cases from the exact desired configuration under review. Request IDs are replayable only with identical content and the same API key.
 * @export
 * @interface ConfigurationVerificationRequest
 */
export interface ConfigurationVerificationRequest {
    /**
     * Persist a canonical UUID and reuse it only when retrying this exact request.
     * @type {string}
     * @memberof ConfigurationVerificationRequest
     */
    requestId: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationRequest
     */
    planSha256: string;
    /**
     * Exact logical files from the applicable plan.
     * @type {Array<ConfigurationPlanFile>}
     * @memberof ConfigurationVerificationRequest
     */
    files: Array<ConfigurationPlanFile>;
    /**
     * Optional binding resource keys to re-apply against the destination workspace's current runtime authority without changing their authored files. Include the same selection in plan and apply. Referenced mapping/partner changes also produce explicit dependent binding updates in the plan. This option is apply metadata and never enters Git files.
     * @type {Set<string>}
     * @memberof ConfigurationVerificationRequest
     */
    refreshScenarioBindings?: Set<string>;
}

/**
 * Check if a given object implements the ConfigurationVerificationRequest interface.
 */
export function instanceOfConfigurationVerificationRequest(value: object): value is ConfigurationVerificationRequest {
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('planSha256' in value) || value['planSha256'] === undefined) return false;
    if (!('files' in value) || value['files'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationRequestFromJSON(json: any): ConfigurationVerificationRequest {
    return ConfigurationVerificationRequestFromJSONTyped(json, false);
}

export function ConfigurationVerificationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationRequest {
    if (json == null) {
        return json;
    }
    return {

        'requestId': json['requestId'],
        'planSha256': json['planSha256'],
        'files': ((json['files'] as Array<any>).map(ConfigurationPlanFileFromJSON)),
        'refreshScenarioBindings': json['refreshScenarioBindings'] == null ? undefined : new Set(json['refreshScenarioBindings']),
    };
}

export function ConfigurationVerificationRequestToJSON(json: any): ConfigurationVerificationRequest {
    return ConfigurationVerificationRequestToJSONTyped(json, false);
}

export function ConfigurationVerificationRequestToJSONTyped(value?: ConfigurationVerificationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'requestId': value['requestId'],
        'planSha256': value['planSha256'],
        'files': ((value['files'] as Array<any>).map(ConfigurationPlanFileToJSON)),
        'refreshScenarioBindings': value['refreshScenarioBindings'] == null ? undefined : Array.from(value['refreshScenarioBindings'] as Set<any>),
    };
}
