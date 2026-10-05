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
import type { ConfigurationVerificationSyntaxTree } from './ConfigurationVerificationSyntaxTree.js';
import {
    ConfigurationVerificationSyntaxTreeFromJSON,
    ConfigurationVerificationSyntaxTreeFromJSONTyped,
    ConfigurationVerificationSyntaxTreeToJSON,
    ConfigurationVerificationSyntaxTreeToJSONTyped,
} from './ConfigurationVerificationSyntaxTree.js';

/**
 *
 * @export
 * @interface ConfigurationVerificationScenarioStep
 */
export interface ConfigurationVerificationScenarioStep {
    /**
     * Step in the scenario definition.
     * @type {string}
     * @memberof ConfigurationVerificationScenarioStep
     */
    stepId: string;
    /**
     *
     * @type {ConfigurationVerificationSyntaxTree}
     * @memberof ConfigurationVerificationScenarioStep
     */
    syntaxTree: ConfigurationVerificationSyntaxTree;
}

/**
 * Check if a given object implements the ConfigurationVerificationScenarioStep interface.
 */
export function instanceOfConfigurationVerificationScenarioStep(value: object): value is ConfigurationVerificationScenarioStep {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('syntaxTree' in value) || value['syntaxTree'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationScenarioStepFromJSON(json: any): ConfigurationVerificationScenarioStep {
    return ConfigurationVerificationScenarioStepFromJSONTyped(json, false);
}

export function ConfigurationVerificationScenarioStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationScenarioStep {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'syntaxTree': ConfigurationVerificationSyntaxTreeFromJSON(json['syntaxTree']),
    };
}

export function ConfigurationVerificationScenarioStepToJSON(json: any): ConfigurationVerificationScenarioStep {
    return ConfigurationVerificationScenarioStepToJSONTyped(json, false);
}

export function ConfigurationVerificationScenarioStepToJSONTyped(value?: ConfigurationVerificationScenarioStep | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'syntaxTree': ConfigurationVerificationSyntaxTreeToJSON(value['syntaxTree']),
    };
}
