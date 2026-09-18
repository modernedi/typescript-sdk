/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ExpectedCountClosure } from './ExpectedCountClosure.js';
import {
    instanceOfExpectedCountClosure,
    ExpectedCountClosureFromJSON,
    ExpectedCountClosureFromJSONTyped,
    ExpectedCountClosureToJSON,
} from './ExpectedCountClosure.js';
import type { FixedClosure } from './FixedClosure.js';
import {
    instanceOfFixedClosure,
    FixedClosureFromJSON,
    FixedClosureFromJSONTyped,
    FixedClosureToJSON,
} from './FixedClosure.js';
import type { MaximumReachedClosure } from './MaximumReachedClosure.js';
import {
    instanceOfMaximumReachedClosure,
    MaximumReachedClosureFromJSON,
    MaximumReachedClosureFromJSONTyped,
    MaximumReachedClosureToJSON,
} from './MaximumReachedClosure.js';

/**
 * @type ConfigurationScenarioDefinitionOccurrenceClosure
 * The objective rule that tells a run no more documents are expected for one repeated step. fixed closes at the required fixed count; max_reached closes only at the authored maximum; expected_count closes at a required or defaulted run parameter, including an explicit zero. Branch selection supplies the no-document outcome for an unselected destination. There is no manual-close operation in v1.
 * @export
 */
export type ConfigurationScenarioDefinitionOccurrenceClosure = ExpectedCountClosure | FixedClosure | MaximumReachedClosure;

export function ConfigurationScenarioDefinitionOccurrenceClosureFromJSON(json: any): ConfigurationScenarioDefinitionOccurrenceClosure {
    return ConfigurationScenarioDefinitionOccurrenceClosureFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionOccurrenceClosureFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionOccurrenceClosure {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfExpectedCountClosure(json)) {
        return ExpectedCountClosureFromJSONTyped(json, true);
    }
    if (instanceOfFixedClosure(json)) {
        return FixedClosureFromJSONTyped(json, true);
    }
    if (instanceOfMaximumReachedClosure(json)) {
        return MaximumReachedClosureFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioDefinitionOccurrenceClosureToJSON(json: any): any {
    return ConfigurationScenarioDefinitionOccurrenceClosureToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionOccurrenceClosureToJSONTyped(value?: ConfigurationScenarioDefinitionOccurrenceClosure | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfExpectedCountClosure(value)) {
        return ExpectedCountClosureToJSON(value as ExpectedCountClosure);
    }
    if (instanceOfFixedClosure(value)) {
        return FixedClosureToJSON(value as FixedClosure);
    }
    if (instanceOfMaximumReachedClosure(value)) {
        return MaximumReachedClosureToJSON(value as MaximumReachedClosure);
    }
    return {};
}
