/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { AdapterTarget } from './AdapterTarget.js';
import {
    instanceOfAdapterTarget,
    AdapterTargetFromJSON,
    AdapterTargetFromJSONTyped,
    AdapterTargetToJSON,
} from './AdapterTarget.js';
import type { ObservationOnlyTarget } from './ObservationOnlyTarget.js';
import {
    instanceOfObservationOnlyTarget,
    ObservationOnlyTargetFromJSON,
    ObservationOnlyTargetFromJSONTyped,
    ObservationOnlyTargetToJSON,
} from './ObservationOnlyTarget.js';
import type { RuntimeMappingTarget } from './RuntimeMappingTarget.js';
import {
    instanceOfRuntimeMappingTarget,
    RuntimeMappingTargetFromJSON,
    RuntimeMappingTargetFromJSONTyped,
    RuntimeMappingTargetToJSON,
} from './RuntimeMappingTarget.js';

/**
 * @type ConfigurationScenarioBindingTarget
 * OneOf discriminator selecting an evidence-constrained runtime mapping, a registered active executor adapter, or observation-only evidence.
 * @export
 */
export type ConfigurationScenarioBindingTarget = AdapterTarget | ObservationOnlyTarget | RuntimeMappingTarget;

export function ConfigurationScenarioBindingTargetFromJSON(json: any): ConfigurationScenarioBindingTarget {
    return ConfigurationScenarioBindingTargetFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingTarget {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfAdapterTarget(json)) {
        return AdapterTargetFromJSONTyped(json, true);
    }
    if (instanceOfObservationOnlyTarget(json)) {
        return ObservationOnlyTargetFromJSONTyped(json, true);
    }
    if (instanceOfRuntimeMappingTarget(json)) {
        return RuntimeMappingTargetFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioBindingTargetToJSON(json: any): any {
    return ConfigurationScenarioBindingTargetToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingTargetToJSONTyped(value?: ConfigurationScenarioBindingTarget | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfAdapterTarget(value)) {
        return AdapterTargetToJSON(value as AdapterTarget);
    }
    if (instanceOfObservationOnlyTarget(value)) {
        return ObservationOnlyTargetToJSON(value as ObservationOnlyTarget);
    }
    if (instanceOfRuntimeMappingTarget(value)) {
        return RuntimeMappingTargetToJSON(value as RuntimeMappingTarget);
    }
    return {};
}
