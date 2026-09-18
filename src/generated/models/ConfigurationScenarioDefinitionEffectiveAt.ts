/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { BusinessEffectiveTimestamp } from './BusinessEffectiveTimestamp.js';
import {
    instanceOfBusinessEffectiveTimestamp,
    BusinessEffectiveTimestampFromJSON,
    BusinessEffectiveTimestampFromJSONTyped,
    BusinessEffectiveTimestampToJSON,
} from './BusinessEffectiveTimestamp.js';
import type { TimeModernEDIObservedTheRevision } from './TimeModernEDIObservedTheRevision.js';
import {
    instanceOfTimeModernEDIObservedTheRevision,
    TimeModernEDIObservedTheRevisionFromJSON,
    TimeModernEDIObservedTheRevisionFromJSONTyped,
    TimeModernEDIObservedTheRevisionToJSON,
} from './TimeModernEDIObservedTheRevision.js';

/**
 * @type ConfigurationScenarioDefinitionEffectiveAt
 * When a replacement or cancellation begins to govern the conversation. observed_at uses the time ModernEDI observed the later document. value uses an explicit timestamp, such as effectiveTimestamp extracted from an X12 860 order change. The value must be a timestamp, not only a date or clock time. A fact value belongs to the matched revision pair and must come from its source or later document; for a previous-matched same-step revision, it is read from the later revision occurrence.
 * @export
 */
export type ConfigurationScenarioDefinitionEffectiveAt = BusinessEffectiveTimestamp | TimeModernEDIObservedTheRevision;

export function ConfigurationScenarioDefinitionEffectiveAtFromJSON(json: any): ConfigurationScenarioDefinitionEffectiveAt {
    return ConfigurationScenarioDefinitionEffectiveAtFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionEffectiveAtFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionEffectiveAt {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfBusinessEffectiveTimestamp(json)) {
        return BusinessEffectiveTimestampFromJSONTyped(json, true);
    }
    if (instanceOfTimeModernEDIObservedTheRevision(json)) {
        return TimeModernEDIObservedTheRevisionFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioDefinitionEffectiveAtToJSON(json: any): any {
    return ConfigurationScenarioDefinitionEffectiveAtToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionEffectiveAtToJSONTyped(value?: ConfigurationScenarioDefinitionEffectiveAt | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfBusinessEffectiveTimestamp(value)) {
        return BusinessEffectiveTimestampToJSON(value as BusinessEffectiveTimestamp);
    }
    if (instanceOfTimeModernEDIObservedTheRevision(value)) {
        return TimeModernEDIObservedTheRevisionToJSON(value as TimeModernEDIObservedTheRevision);
    }
    return {};
}
