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
/**
 *
 * @export
 * @interface ConfigurationScenarioBindingRegressionObservation
 */
export interface ConfigurationScenarioBindingRegressionObservation {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioBindingRegressionObservation
     */
    stepId: string;
    /**
     * ID of a saved case belonging to this step's bound runtime mapping. Incoming observations use that case's selected X12 transaction; outgoing observations use the actual generated output, never expectedOutput.
     * @type {string}
     * @memberof ConfigurationScenarioBindingRegressionObservation
     */
    mappingCaseId: string;
    /**
     * Whole seconds after the synthetic start (at most 365 days).
     * @type {number}
     * @memberof ConfigurationScenarioBindingRegressionObservation
     */
    observedAfterSeconds: number;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingRegressionObservation interface.
 */
export function instanceOfConfigurationScenarioBindingRegressionObservation(value: object): value is ConfigurationScenarioBindingRegressionObservation {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('mappingCaseId' in value) || value['mappingCaseId'] === undefined) return false;
    if (!('observedAfterSeconds' in value) || value['observedAfterSeconds'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingRegressionObservationFromJSON(json: any): ConfigurationScenarioBindingRegressionObservation {
    return ConfigurationScenarioBindingRegressionObservationFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionObservationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingRegressionObservation {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'mappingCaseId': json['mappingCaseId'],
        'observedAfterSeconds': json['observedAfterSeconds'],
    };
}

export function ConfigurationScenarioBindingRegressionObservationToJSON(json: any): ConfigurationScenarioBindingRegressionObservation {
    return ConfigurationScenarioBindingRegressionObservationToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionObservationToJSONTyped(value?: ConfigurationScenarioBindingRegressionObservation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'mappingCaseId': value['mappingCaseId'],
        'observedAfterSeconds': value['observedAfterSeconds'],
    };
}
