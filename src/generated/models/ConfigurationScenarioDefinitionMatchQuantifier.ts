/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { AnyQuantifier } from './AnyQuantifier.js';
import {
    instanceOfAnyQuantifier,
    AnyQuantifierFromJSON,
    AnyQuantifierFromJSONTyped,
    AnyQuantifierToJSON,
} from './AnyQuantifier.js';
import type { EveryQuantifier } from './EveryQuantifier.js';
import {
    instanceOfEveryQuantifier,
    EveryQuantifierFromJSON,
    EveryQuantifierFromJSONTyped,
    EveryQuantifierToJSON,
} from './EveryQuantifier.js';
import type { ExactCountQuantifier } from './ExactCountQuantifier.js';
import {
    instanceOfExactCountQuantifier,
    ExactCountQuantifierFromJSON,
    ExactCountQuantifierFromJSONTyped,
    ExactCountQuantifierToJSON,
} from './ExactCountQuantifier.js';

/**
 * @type ConfigurationScenarioDefinitionMatchQuantifier
 * An explicit requirement over source occurrences, target occurrences, matched pairs, or matches per endpoint occurrence.
 * @export
 */
export type ConfigurationScenarioDefinitionMatchQuantifier = AnyQuantifier | EveryQuantifier | ExactCountQuantifier;

export function ConfigurationScenarioDefinitionMatchQuantifierFromJSON(json: any): ConfigurationScenarioDefinitionMatchQuantifier {
    return ConfigurationScenarioDefinitionMatchQuantifierFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionMatchQuantifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionMatchQuantifier {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfAnyQuantifier(json)) {
        return AnyQuantifierFromJSONTyped(json, true);
    }
    if (instanceOfEveryQuantifier(json)) {
        return EveryQuantifierFromJSONTyped(json, true);
    }
    if (instanceOfExactCountQuantifier(json)) {
        return ExactCountQuantifierFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioDefinitionMatchQuantifierToJSON(json: any): any {
    return ConfigurationScenarioDefinitionMatchQuantifierToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionMatchQuantifierToJSONTyped(value?: ConfigurationScenarioDefinitionMatchQuantifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfAnyQuantifier(value)) {
        return AnyQuantifierToJSON(value as AnyQuantifier);
    }
    if (instanceOfEveryQuantifier(value)) {
        return EveryQuantifierToJSON(value as EveryQuantifier);
    }
    if (instanceOfExactCountQuantifier(value)) {
        return ExactCountQuantifierToJSON(value as ExactCountQuantifier);
    }
    return {};
}
