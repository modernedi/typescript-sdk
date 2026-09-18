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
import type { ConfigurationScenarioBindingTarget } from './ConfigurationScenarioBindingTarget.js';
import {
    ConfigurationScenarioBindingTargetFromJSON,
    ConfigurationScenarioBindingTargetFromJSONTyped,
    ConfigurationScenarioBindingTargetToJSON,
    ConfigurationScenarioBindingTargetToJSONTyped,
} from './ConfigurationScenarioBindingTarget.js';
import type { ConfigurationScenarioBindingFactSourceBinding } from './ConfigurationScenarioBindingFactSourceBinding.js';
import {
    ConfigurationScenarioBindingFactSourceBindingFromJSON,
    ConfigurationScenarioBindingFactSourceBindingFromJSONTyped,
    ConfigurationScenarioBindingFactSourceBindingToJSON,
    ConfigurationScenarioBindingFactSourceBindingToJSONTyped,
} from './ConfigurationScenarioBindingFactSourceBinding.js';
import type { ConfigurationScenarioBindingSyntaxTreeReference } from './ConfigurationScenarioBindingSyntaxTreeReference.js';
import {
    ConfigurationScenarioBindingSyntaxTreeReferenceFromJSON,
    ConfigurationScenarioBindingSyntaxTreeReferenceFromJSONTyped,
    ConfigurationScenarioBindingSyntaxTreeReferenceToJSON,
    ConfigurationScenarioBindingSyntaxTreeReferenceToJSONTyped,
} from './ConfigurationScenarioBindingSyntaxTreeReference.js';

/**
 * Connects one definition step to an executable or observation target and binds every declared semantic fact to an implementation-guide source. syntaxTree is optional while authoring; Apply resolves an exact authoritative syntax-tree artifact before runtime execution.
 * @export
 * @interface ConfigurationScenarioBindingStepBinding
 */
export interface ConfigurationScenarioBindingStepBinding {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioBindingStepBinding
     */
    stepId: string;
    /**
     *
     * @type {ConfigurationScenarioBindingSyntaxTreeReference}
     * @memberof ConfigurationScenarioBindingStepBinding
     */
    syntaxTree?: ConfigurationScenarioBindingSyntaxTreeReference;
    /**
     *
     * @type {ConfigurationScenarioBindingTarget}
     * @memberof ConfigurationScenarioBindingStepBinding
     */
    target: ConfigurationScenarioBindingTarget;
    /**
     * One source for every fact declared by this ScenarioDefinition step. Omission is a deliberate authoring shorthand only when the step declares no facts; canonical Apply materializes an empty array. Server validation otherwise requires exact fact-name coverage. Collection shape, element type, cardinality, normalization, and sensitivity come only from the declaration and are intentionally not duplicated here.
     * @type {Array<ConfigurationScenarioBindingFactSourceBinding>}
     * @memberof ConfigurationScenarioBindingStepBinding
     */
    factSources?: Array<ConfigurationScenarioBindingFactSourceBinding>;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingStepBinding interface.
 */
export function instanceOfConfigurationScenarioBindingStepBinding(value: object): value is ConfigurationScenarioBindingStepBinding {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingStepBindingFromJSON(json: any): ConfigurationScenarioBindingStepBinding {
    return ConfigurationScenarioBindingStepBindingFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingStepBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingStepBinding {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'syntaxTree': json['syntaxTree'] == null ? undefined : ConfigurationScenarioBindingSyntaxTreeReferenceFromJSON(json['syntaxTree']),
        'target': ConfigurationScenarioBindingTargetFromJSON(json['target']),
        'factSources': json['factSources'] == null ? undefined : ((json['factSources'] as Array<any>).map(ConfigurationScenarioBindingFactSourceBindingFromJSON)),
    };
}

export function ConfigurationScenarioBindingStepBindingToJSON(json: any): ConfigurationScenarioBindingStepBinding {
    return ConfigurationScenarioBindingStepBindingToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingStepBindingToJSONTyped(value?: ConfigurationScenarioBindingStepBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'syntaxTree': ConfigurationScenarioBindingSyntaxTreeReferenceToJSON(value['syntaxTree']),
        'target': ConfigurationScenarioBindingTargetToJSON(value['target']),
        'factSources': value['factSources'] == null ? undefined : ((value['factSources'] as Array<any>).map(ConfigurationScenarioBindingFactSourceBindingToJSON)),
    };
}
