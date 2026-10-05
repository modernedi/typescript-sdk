/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.36.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */


/**
 *
 * @export
 */
export const ConfigurationScenarioBindingRegressionOutcome = {
    Passed: 'PASSED',
    Failed: 'FAILED',
    Pending: 'PENDING',
    Inconclusive: 'INCONCLUSIVE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioBindingRegressionOutcome = typeof ConfigurationScenarioBindingRegressionOutcome[keyof typeof ConfigurationScenarioBindingRegressionOutcome];


export function instanceOfConfigurationScenarioBindingRegressionOutcome(value: any): boolean {
    for (const key in ConfigurationScenarioBindingRegressionOutcome) {
        if (Object.prototype.hasOwnProperty.call(ConfigurationScenarioBindingRegressionOutcome, key)) {
            if (ConfigurationScenarioBindingRegressionOutcome[key as keyof typeof ConfigurationScenarioBindingRegressionOutcome] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConfigurationScenarioBindingRegressionOutcomeFromJSON(json: any): ConfigurationScenarioBindingRegressionOutcome {
    return ConfigurationScenarioBindingRegressionOutcomeFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingRegressionOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingRegressionOutcome {
    return json as ConfigurationScenarioBindingRegressionOutcome;
}

export function ConfigurationScenarioBindingRegressionOutcomeToJSON(value?: ConfigurationScenarioBindingRegressionOutcome | null): any {
    return value as any;
}

export function ConfigurationScenarioBindingRegressionOutcomeToJSONTyped(value: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingRegressionOutcome {
    return value as ConfigurationScenarioBindingRegressionOutcome;
}
