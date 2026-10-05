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
import type { ConfigurationScenarioBindingRegressionExpectedChecksInner } from './ConfigurationScenarioBindingRegressionExpectedChecksInner.js';
import {
    ConfigurationScenarioBindingRegressionExpectedChecksInnerFromJSON,
    ConfigurationScenarioBindingRegressionExpectedChecksInnerFromJSONTyped,
    ConfigurationScenarioBindingRegressionExpectedChecksInnerToJSON,
    ConfigurationScenarioBindingRegressionExpectedChecksInnerToJSONTyped,
} from './ConfigurationScenarioBindingRegressionExpectedChecksInner.js';

/**
 * A FAILED expectation must include at least one specific FAILED check, preventing an unrelated failure from satisfying a negative test.
 * @export
 * @interface ConfigurationScenarioBindingRegressionExpected
 */
export interface ConfigurationScenarioBindingRegressionExpected {
    /**
     *
     * @type {ConfigurationScenarioBindingRegressionOutcome}
     * @memberof ConfigurationScenarioBindingRegressionExpected
     */
    outcome: ConfigurationScenarioBindingRegressionOutcome;
    /**
     *
     * @type {Array<ConfigurationScenarioBindingRegressionExpectedChecksInner>}
     * @memberof ConfigurationScenarioBindingRegressionExpected
     */
    checks: Array<ConfigurationScenarioBindingRegressionExpectedChecksInner>;
}



/**
 * Check if a given object implements the ConfigurationScenarioBindingRegressionExpected interface.
 */
export function instanceOfConfigurationScenarioBindingRegressionExpected(value: object): value is ConfigurationScenarioBindingRegressionExpected {
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('checks' in value) || value['checks'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingRegressionExpectedFromJSON(json: any): ConfigurationScenarioBindingRegressionExpected {
    return ConfigurationScenarioBindingRegressionExpectedFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionExpectedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingRegressionExpected {
    if (json == null) {
        return json;
    }
    return {

        'outcome': ConfigurationScenarioBindingRegressionOutcomeFromJSON(json['outcome']),
        'checks': ((json['checks'] as Array<any>).map(ConfigurationScenarioBindingRegressionExpectedChecksInnerFromJSON)),
    };
}

export function ConfigurationScenarioBindingRegressionExpectedToJSON(json: any): ConfigurationScenarioBindingRegressionExpected {
    return ConfigurationScenarioBindingRegressionExpectedToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionExpectedToJSONTyped(value?: ConfigurationScenarioBindingRegressionExpected | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'outcome': ConfigurationScenarioBindingRegressionOutcomeToJSON(value['outcome']),
        'checks': ((value['checks'] as Array<any>).map(ConfigurationScenarioBindingRegressionExpectedChecksInnerToJSON)),
    };
}
