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
import type { ConfigurationScenarioBindingRegressionObservation } from './ConfigurationScenarioBindingRegressionObservation.js';
import {
    ConfigurationScenarioBindingRegressionObservationFromJSON,
    ConfigurationScenarioBindingRegressionObservationFromJSONTyped,
    ConfigurationScenarioBindingRegressionObservationToJSON,
    ConfigurationScenarioBindingRegressionObservationToJSONTyped,
} from './ConfigurationScenarioBindingRegressionObservation.js';
import type { ConfigurationScenarioBindingRegressionExpected } from './ConfigurationScenarioBindingRegressionExpected.js';
import {
    ConfigurationScenarioBindingRegressionExpectedFromJSON,
    ConfigurationScenarioBindingRegressionExpectedFromJSONTyped,
    ConfigurationScenarioBindingRegressionExpectedToJSON,
    ConfigurationScenarioBindingRegressionExpectedToJSONTyped,
} from './ConfigurationScenarioBindingRegressionExpected.js';

/**
 *
 * @export
 * @interface ConfigurationScenarioBindingRegressionCase
 */
export interface ConfigurationScenarioBindingRegressionCase {
    /**
     *
     * @type {string}
     * @memberof ConfigurationScenarioBindingRegressionCase
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationScenarioBindingRegressionCase
     */
    name: string;
    /**
     * Ordinary run parameters, resolved and type-checked against this exact definition.
     * @type {object}
     * @memberof ConfigurationScenarioBindingRegressionCase
     */
    parameters: object;
    /**
     * Listed attachment order. Repeated step IDs are assigned occurrence 1, 2, and so on. No sorting by business event time occurs.
     * @type {Array<ConfigurationScenarioBindingRegressionObservation>}
     * @memberof ConfigurationScenarioBindingRegressionCase
     */
    observations: Array<ConfigurationScenarioBindingRegressionObservation>;
    /**
     * Whole seconds after the synthetic start (at most 365 days).
     * @type {number}
     * @memberof ConfigurationScenarioBindingRegressionCase
     */
    evaluatedAfterSeconds: number;
    /**
     * Explicit-completion steps to close at the evaluation time. Closing never waives their checks.
     * @type {Set<string>}
     * @memberof ConfigurationScenarioBindingRegressionCase
     */
    closeSteps: Set<string>;
    /**
     *
     * @type {ConfigurationScenarioBindingRegressionExpected}
     * @memberof ConfigurationScenarioBindingRegressionCase
     */
    expected: ConfigurationScenarioBindingRegressionExpected;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingRegressionCase interface.
 */
export function instanceOfConfigurationScenarioBindingRegressionCase(value: object): value is ConfigurationScenarioBindingRegressionCase {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('parameters' in value) || value['parameters'] === undefined) return false;
    if (!('observations' in value) || value['observations'] === undefined) return false;
    if (!('evaluatedAfterSeconds' in value) || value['evaluatedAfterSeconds'] === undefined) return false;
    if (!('closeSteps' in value) || value['closeSteps'] === undefined) return false;
    if (!('expected' in value) || value['expected'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingRegressionCaseFromJSON(json: any): ConfigurationScenarioBindingRegressionCase {
    return ConfigurationScenarioBindingRegressionCaseFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionCaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingRegressionCase {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'name': json['name'],
        'parameters': json['parameters'],
        'observations': ((json['observations'] as Array<any>).map(ConfigurationScenarioBindingRegressionObservationFromJSON)),
        'evaluatedAfterSeconds': json['evaluatedAfterSeconds'],
        'closeSteps': new Set(json['closeSteps']),
        'expected': ConfigurationScenarioBindingRegressionExpectedFromJSON(json['expected']),
    };
}

export function ConfigurationScenarioBindingRegressionCaseToJSON(json: any): ConfigurationScenarioBindingRegressionCase {
    return ConfigurationScenarioBindingRegressionCaseToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionCaseToJSONTyped(value?: ConfigurationScenarioBindingRegressionCase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'name': value['name'],
        'parameters': value['parameters'],
        'observations': ((value['observations'] as Array<any>).map(ConfigurationScenarioBindingRegressionObservationToJSON)),
        'evaluatedAfterSeconds': value['evaluatedAfterSeconds'],
        'closeSteps': Array.from(value['closeSteps'] as Set<any>),
        'expected': ConfigurationScenarioBindingRegressionExpectedToJSON(value['expected']),
    };
}
