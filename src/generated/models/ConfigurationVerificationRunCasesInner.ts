/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.36.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ConfigurationScenarioCaseResult } from './ConfigurationScenarioCaseResult.js';
import {
    instanceOfConfigurationScenarioCaseResult,
    ConfigurationScenarioCaseResultFromJSON,
    ConfigurationScenarioCaseResultFromJSONTyped,
    ConfigurationScenarioCaseResultToJSON,
} from './ConfigurationScenarioCaseResult.js';
import type { ConfigurationVerificationCaseResult } from './ConfigurationVerificationCaseResult.js';
import {
    instanceOfConfigurationVerificationCaseResult,
    ConfigurationVerificationCaseResultFromJSON,
    ConfigurationVerificationCaseResultFromJSONTyped,
    ConfigurationVerificationCaseResultToJSON,
} from './ConfigurationVerificationCaseResult.js';

/**
 * @type ConfigurationVerificationRunCasesInner
 *
 * @export
 */
export type ConfigurationVerificationRunCasesInner = ConfigurationScenarioCaseResult | ConfigurationVerificationCaseResult;

export function ConfigurationVerificationRunCasesInnerFromJSON(json: any): ConfigurationVerificationRunCasesInner {
    return ConfigurationVerificationRunCasesInnerFromJSONTyped(json, false);
}

export function ConfigurationVerificationRunCasesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationRunCasesInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfConfigurationScenarioCaseResult(json)) {
        return ConfigurationScenarioCaseResultFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationVerificationCaseResult(json)) {
        return ConfigurationVerificationCaseResultFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationVerificationRunCasesInnerToJSON(json: any): any {
    return ConfigurationVerificationRunCasesInnerToJSONTyped(json, false);
}

export function ConfigurationVerificationRunCasesInnerToJSONTyped(value?: ConfigurationVerificationRunCasesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfConfigurationScenarioCaseResult(value)) {
        return ConfigurationScenarioCaseResultToJSON(value as ConfigurationScenarioCaseResult);
    }
    if (instanceOfConfigurationVerificationCaseResult(value)) {
        return ConfigurationVerificationCaseResultToJSON(value as ConfigurationVerificationCaseResult);
    }
    return {};
}
