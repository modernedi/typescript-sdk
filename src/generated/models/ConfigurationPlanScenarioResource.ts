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
import type { ConfigurationResourceKind } from './ConfigurationResourceKind.js';
import {
    ConfigurationResourceKindFromJSON,
    ConfigurationResourceKindFromJSONTyped,
    ConfigurationResourceKindToJSON,
    ConfigurationResourceKindToJSONTyped,
} from './ConfigurationResourceKind.js';
import type { ConfigurationPlanAction } from './ConfigurationPlanAction.js';
import {
    ConfigurationPlanActionFromJSON,
    ConfigurationPlanActionFromJSONTyped,
    ConfigurationPlanActionToJSON,
    ConfigurationPlanActionToJSONTyped,
} from './ConfigurationPlanAction.js';

/**
 * Planned resource change that affects an applied scenario binding.
 * @export
 * @interface ConfigurationPlanScenarioResource
 */
export interface ConfigurationPlanScenarioResource {
    /**
     *
     * @type {ConfigurationResourceKind}
     * @memberof ConfigurationPlanScenarioResource
     */
    kind: ConfigurationResourceKind;
    /**
     *
     * @type {string}
     * @memberof ConfigurationPlanScenarioResource
     */
    key: string;
    /**
     *
     * @type {ConfigurationPlanAction}
     * @memberof ConfigurationPlanScenarioResource
     */
    action: ConfigurationPlanAction;
}



/**
 * Check if a given object implements the ConfigurationPlanScenarioResource interface.
 */
export function instanceOfConfigurationPlanScenarioResource(value: object): value is ConfigurationPlanScenarioResource {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('action' in value) || value['action'] === undefined) return false;
    return true;
}

export function ConfigurationPlanScenarioResourceFromJSON(json: any): ConfigurationPlanScenarioResource {
    return ConfigurationPlanScenarioResourceFromJSONTyped(json, false);
}

export function ConfigurationPlanScenarioResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanScenarioResource {
    if (json == null) {
        return json;
    }
    return {

        'kind': ConfigurationResourceKindFromJSON(json['kind']),
        'key': json['key'],
        'action': ConfigurationPlanActionFromJSON(json['action']),
    };
}

export function ConfigurationPlanScenarioResourceToJSON(json: any): ConfigurationPlanScenarioResource {
    return ConfigurationPlanScenarioResourceToJSONTyped(json, false);
}

export function ConfigurationPlanScenarioResourceToJSONTyped(value?: ConfigurationPlanScenarioResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': ConfigurationResourceKindToJSON(value['kind']),
        'key': value['key'],
        'action': ConfigurationPlanActionToJSON(value['action']),
    };
}
