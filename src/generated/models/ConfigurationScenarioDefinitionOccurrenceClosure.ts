/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.36.0 with OpenAPI Generator 7.24.0.
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
import type { ExplicitClosure } from './ExplicitClosure.js';
import {
    instanceOfExplicitClosure,
    ExplicitClosureFromJSON,
    ExplicitClosureFromJSONTyped,
    ExplicitClosureToJSON,
} from './ExplicitClosure.js';
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
 * The rule that tells a run no more documents will be attached to a step. fixed closes at the fixed count; max_reached closes at the maximum; expected_count uses a required or defaulted count parameter. explicit waits for an authorized browser or API decision, even at max: advance with closeSteps records the exact attached count and time, then evaluates all existing checks. Closing does not assert success, reopen the step, or send EDI. An explicit min-zero step can close with no documents. Existing attachments may still refresh pending evidence while the run is active. A new run is required for additional documents after closure. Branch selection supplies the no-document outcome for an unselected destination.
 * @export
 */
export type ConfigurationScenarioDefinitionOccurrenceClosure = ExpectedCountClosure | ExplicitClosure | FixedClosure | MaximumReachedClosure;

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
    if (instanceOfExplicitClosure(json)) {
        return ExplicitClosureFromJSONTyped(json, true);
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
    if (instanceOfExplicitClosure(value)) {
        return ExplicitClosureToJSON(value as ExplicitClosure);
    }
    if (instanceOfFixedClosure(value)) {
        return FixedClosureToJSON(value as FixedClosure);
    }
    if (instanceOfMaximumReachedClosure(value)) {
        return MaximumReachedClosureToJSON(value as MaximumReachedClosure);
    }
    return {};
}
