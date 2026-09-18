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
import type { ConfigurationScenarioDefinitionOccurrenceClosure } from './ConfigurationScenarioDefinitionOccurrenceClosure.js';
import {
    ConfigurationScenarioDefinitionOccurrenceClosureFromJSON,
    ConfigurationScenarioDefinitionOccurrenceClosureFromJSONTyped,
    ConfigurationScenarioDefinitionOccurrenceClosureToJSON,
    ConfigurationScenarioDefinitionOccurrenceClosureToJSONTyped,
} from './ConfigurationScenarioDefinitionOccurrenceClosure.js';

/**
 * How many documents this step may contribute to one run and the rule that says when no more are expected. One observed document is one occurrence. For example, an 850 order can be exactly once while 856 shipment notices can repeat. The server also enforces min <= max.
 * @export
 * @interface ConfigurationScenarioDefinitionOccurrence
 */
export interface ConfigurationScenarioDefinitionOccurrence {
    /**
     * Minimum accepted count once a reachable step closes. Zero is a no-document outcome only when expected_count resolves to 0 or branch selection makes the step unreachable; zero alone does not close a stream.
     * @type {number}
     * @memberof ConfigurationScenarioDefinitionOccurrence
     */
    min: number;
    /**
     * Structural per-step ceiling for authored occurrences. Validate and Apply also enforce one conservative run-state capacity budget across all steps, paired documents, checks, and durable evidence.
     * @type {number}
     * @memberof ConfigurationScenarioDefinitionOccurrence
     */
    max: number;
    /**
     *
     * @type {ConfigurationScenarioDefinitionOccurrenceClosure}
     * @memberof ConfigurationScenarioDefinitionOccurrence
     */
    closure?: ConfigurationScenarioDefinitionOccurrenceClosure;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionOccurrence interface.
 */
export function instanceOfConfigurationScenarioDefinitionOccurrence(value: object): value is ConfigurationScenarioDefinitionOccurrence {
    if (!('min' in value) || value['min'] === undefined) return false;
    if (!('max' in value) || value['max'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionOccurrenceFromJSON(json: any): ConfigurationScenarioDefinitionOccurrence {
    return ConfigurationScenarioDefinitionOccurrenceFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionOccurrenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionOccurrence {
    if (json == null) {
        return json;
    }
    return {

        'min': json['min'],
        'max': json['max'],
        'closure': json['closure'] == null ? undefined : ConfigurationScenarioDefinitionOccurrenceClosureFromJSON(json['closure']),
    };
}

export function ConfigurationScenarioDefinitionOccurrenceToJSON(json: any): ConfigurationScenarioDefinitionOccurrence {
    return ConfigurationScenarioDefinitionOccurrenceToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionOccurrenceToJSONTyped(value?: ConfigurationScenarioDefinitionOccurrence | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'min': value['min'],
        'max': value['max'],
        'closure': ConfigurationScenarioDefinitionOccurrenceClosureToJSON(value['closure']),
    };
}
