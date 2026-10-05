/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.36.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import { mapValues } from '../runtime.js';
import type { ConfigurationVerificationScenarioStep } from './ConfigurationVerificationScenarioStep.js';
import {
    ConfigurationVerificationScenarioStepFromJSON,
    ConfigurationVerificationScenarioStepFromJSONTyped,
    ConfigurationVerificationScenarioStepToJSON,
    ConfigurationVerificationScenarioStepToJSONTyped,
} from './ConfigurationVerificationScenarioStep.js';

/**
 *
 * @export
 * @interface ConfigurationVerificationScenarioBinding
 */
export interface ConfigurationVerificationScenarioBinding {
    /**
     * Stable portable ScenarioBinding resource key.
     * @type {string}
     * @memberof ConfigurationVerificationScenarioBinding
     */
    scenarioBindingResourceKey: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationScenarioBinding
     */
    definitionSha256: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationScenarioBinding
     */
    bindingSha256: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationScenarioBinding
     */
    authoritySha256: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationScenarioBinding
     */
    casesSha256: string;
    /**
     * Number of saved conversation tests selected from this binding.
     * @type {number}
     * @memberof ConfigurationVerificationScenarioBinding
     */
    caseCount: number;
    /**
     * Frozen X12 grammar for every bound step, including steps absent from an individual test.
     * @type {Array<ConfigurationVerificationScenarioStep>}
     * @memberof ConfigurationVerificationScenarioBinding
     */
    steps: Array<ConfigurationVerificationScenarioStep>;
}

/**
 * Check if a given object implements the ConfigurationVerificationScenarioBinding interface.
 */
export function instanceOfConfigurationVerificationScenarioBinding(value: object): value is ConfigurationVerificationScenarioBinding {
    if (!('scenarioBindingResourceKey' in value) || value['scenarioBindingResourceKey'] === undefined) return false;
    if (!('definitionSha256' in value) || value['definitionSha256'] === undefined) return false;
    if (!('bindingSha256' in value) || value['bindingSha256'] === undefined) return false;
    if (!('authoritySha256' in value) || value['authoritySha256'] === undefined) return false;
    if (!('casesSha256' in value) || value['casesSha256'] === undefined) return false;
    if (!('caseCount' in value) || value['caseCount'] === undefined) return false;
    if (!('steps' in value) || value['steps'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationScenarioBindingFromJSON(json: any): ConfigurationVerificationScenarioBinding {
    return ConfigurationVerificationScenarioBindingFromJSONTyped(json, false);
}

export function ConfigurationVerificationScenarioBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationScenarioBinding {
    if (json == null) {
        return json;
    }
    return {

        'scenarioBindingResourceKey': json['scenarioBindingResourceKey'],
        'definitionSha256': json['definitionSha256'],
        'bindingSha256': json['bindingSha256'],
        'authoritySha256': json['authoritySha256'],
        'casesSha256': json['casesSha256'],
        'caseCount': json['caseCount'],
        'steps': ((json['steps'] as Array<any>).map(ConfigurationVerificationScenarioStepFromJSON)),
    };
}

export function ConfigurationVerificationScenarioBindingToJSON(json: any): ConfigurationVerificationScenarioBinding {
    return ConfigurationVerificationScenarioBindingToJSONTyped(json, false);
}

export function ConfigurationVerificationScenarioBindingToJSONTyped(value?: ConfigurationVerificationScenarioBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'scenarioBindingResourceKey': value['scenarioBindingResourceKey'],
        'definitionSha256': value['definitionSha256'],
        'bindingSha256': value['bindingSha256'],
        'authoritySha256': value['authoritySha256'],
        'casesSha256': value['casesSha256'],
        'caseCount': value['caseCount'],
        'steps': ((value['steps'] as Array<any>).map(ConfigurationVerificationScenarioStepToJSON)),
    };
}
