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
import type { ConfigurationScenarioBindingRegressionOutcome } from './ConfigurationScenarioBindingRegressionOutcome.js';
import {
    ConfigurationScenarioBindingRegressionOutcomeFromJSON,
    ConfigurationScenarioBindingRegressionOutcomeFromJSONTyped,
    ConfigurationScenarioBindingRegressionOutcomeToJSON,
    ConfigurationScenarioBindingRegressionOutcomeToJSONTyped,
} from './ConfigurationScenarioBindingRegressionOutcome.js';

/**
 *
 * @export
 * @interface ConfigurationScenarioBindingRegressionExpectedChecksInner
 */
export interface ConfigurationScenarioBindingRegressionExpectedChecksInner {
    /**
     *
     * @type {string}
     * @memberof ConfigurationScenarioBindingRegressionExpectedChecksInner
     */
    id: string;
    /**
     *
     * @type {ConfigurationScenarioBindingRegressionOutcome}
     * @memberof ConfigurationScenarioBindingRegressionExpectedChecksInner
     */
    outcome: ConfigurationScenarioBindingRegressionOutcome;
    /**
     *
     * @type {string}
     * @memberof ConfigurationScenarioBindingRegressionExpectedChecksInner
     */
    code: string;
}



/**
 * Check if a given object implements the ConfigurationScenarioBindingRegressionExpectedChecksInner interface.
 */
export function instanceOfConfigurationScenarioBindingRegressionExpectedChecksInner(value: object): value is ConfigurationScenarioBindingRegressionExpectedChecksInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingRegressionExpectedChecksInnerFromJSON(json: any): ConfigurationScenarioBindingRegressionExpectedChecksInner {
    return ConfigurationScenarioBindingRegressionExpectedChecksInnerFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionExpectedChecksInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingRegressionExpectedChecksInner {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'outcome': ConfigurationScenarioBindingRegressionOutcomeFromJSON(json['outcome']),
        'code': json['code'],
    };
}

export function ConfigurationScenarioBindingRegressionExpectedChecksInnerToJSON(json: any): ConfigurationScenarioBindingRegressionExpectedChecksInner {
    return ConfigurationScenarioBindingRegressionExpectedChecksInnerToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionExpectedChecksInnerToJSONTyped(value?: ConfigurationScenarioBindingRegressionExpectedChecksInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'outcome': ConfigurationScenarioBindingRegressionOutcomeToJSON(value['outcome']),
        'code': value['code'],
    };
}
