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
import type { ConfigurationPlanFile } from './ConfigurationPlanFile.js';
import {
    ConfigurationPlanFileFromJSON,
    ConfigurationPlanFileFromJSONTyped,
    ConfigurationPlanFileToJSON,
    ConfigurationPlanFileToJSONTyped,
} from './ConfigurationPlanFile.js';

/**
 * Portable desired-state bundle submitted for read-only planning. It contains exactly one manifest and every resource and mapping-source file inventoried by that manifest. It may also include at most one advisory STATE file copied directly from configuration export; ModernEDI never treats that file as authority over current workspace state.
 * @export
 * @interface ConfigurationPlanRequest
 */
export interface ConfigurationPlanRequest {
    /**
     * Optional binding resource keys to re-apply against the destination workspace's current runtime authority without changing their authored files. Include the same selection in plan and apply. Referenced mapping/partner changes also produce explicit dependent binding updates in the plan. This option is apply metadata and never enters Git files.
     * @type {Set<string>}
     * @memberof ConfigurationPlanRequest
     */
    refreshScenarioBindings?: Set<string>;
    /**
     * Desired files plus, optionally, the single exported advisory state file. Paths must be safe, case-insensitively unique relative POSIX paths, and each declared hash must match the file's logical bytes. Only `_state/snapshot.json` may use the `_state` prefix.
     * @type {Array<ConfigurationPlanFile>}
     * @memberof ConfigurationPlanRequest
     */
    files: Array<ConfigurationPlanFile>;
}

/**
 * Check if a given object implements the ConfigurationPlanRequest interface.
 */
export function instanceOfConfigurationPlanRequest(value: object): value is ConfigurationPlanRequest {
    if (!('files' in value) || value['files'] === undefined) return false;
    return true;
}

export function ConfigurationPlanRequestFromJSON(json: any): ConfigurationPlanRequest {
    return ConfigurationPlanRequestFromJSONTyped(json, false);
}

export function ConfigurationPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanRequest {
    if (json == null) {
        return json;
    }
    return {

        'refreshScenarioBindings': json['refreshScenarioBindings'] == null ? undefined : new Set(json['refreshScenarioBindings']),
        'files': ((json['files'] as Array<any>).map(ConfigurationPlanFileFromJSON)),
    };
}

export function ConfigurationPlanRequestToJSON(json: any): ConfigurationPlanRequest {
    return ConfigurationPlanRequestToJSONTyped(json, false);
}

export function ConfigurationPlanRequestToJSONTyped(value?: ConfigurationPlanRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'refreshScenarioBindings': value['refreshScenarioBindings'] == null ? undefined : Array.from(value['refreshScenarioBindings'] as Set<any>),
        'files': ((value['files'] as Array<any>).map(ConfigurationPlanFileToJSON)),
    };
}
