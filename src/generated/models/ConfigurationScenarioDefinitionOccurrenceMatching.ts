/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { CorrelationMatching } from './CorrelationMatching.js';
import {
    instanceOfCorrelationMatching,
    CorrelationMatchingFromJSON,
    CorrelationMatchingFromJSONTyped,
    CorrelationMatchingToJSON,
} from './CorrelationMatching.js';
import type { PositionalMatching } from './PositionalMatching.js';
import {
    instanceOfPositionalMatching,
    PositionalMatchingFromJSON,
    PositionalMatchingFromJSONTyped,
    PositionalMatchingToJSON,
} from './PositionalMatching.js';
import type { PreviousOccurrenceMatching } from './PreviousOccurrenceMatching.js';
import {
    instanceOfPreviousOccurrenceMatching,
    PreviousOccurrenceMatchingFromJSON,
    PreviousOccurrenceMatchingFromJSONTyped,
    PreviousOccurrenceMatchingToJSON,
} from './PreviousOccurrenceMatching.js';

/**
 * @type ConfigurationScenarioDefinitionOccurrenceMatching
 * How actual repeated documents are paired across a transition, plus what happens to documents with no match. correlate pairs documents whose declared fact or reply-link conditions pass; position pairs by observation order; previous pairs each revision with the immediately preceding occurrence of the same step, such as the second 860 order change with the first.
 * @export
 */
export type ConfigurationScenarioDefinitionOccurrenceMatching = CorrelationMatching | PositionalMatching | PreviousOccurrenceMatching;

export function ConfigurationScenarioDefinitionOccurrenceMatchingFromJSON(json: any): ConfigurationScenarioDefinitionOccurrenceMatching {
    return ConfigurationScenarioDefinitionOccurrenceMatchingFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionOccurrenceMatchingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionOccurrenceMatching {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfCorrelationMatching(json)) {
        return CorrelationMatchingFromJSONTyped(json, true);
    }
    if (instanceOfPositionalMatching(json)) {
        return PositionalMatchingFromJSONTyped(json, true);
    }
    if (instanceOfPreviousOccurrenceMatching(json)) {
        return PreviousOccurrenceMatchingFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioDefinitionOccurrenceMatchingToJSON(json: any): any {
    return ConfigurationScenarioDefinitionOccurrenceMatchingToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionOccurrenceMatchingToJSONTyped(value?: ConfigurationScenarioDefinitionOccurrenceMatching | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfCorrelationMatching(value)) {
        return CorrelationMatchingToJSON(value as CorrelationMatching);
    }
    if (instanceOfPositionalMatching(value)) {
        return PositionalMatchingToJSON(value as PositionalMatching);
    }
    if (instanceOfPreviousOccurrenceMatching(value)) {
        return PreviousOccurrenceMatchingToJSON(value as PreviousOccurrenceMatching);
    }
    return {};
}
