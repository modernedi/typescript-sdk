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
/**
 * A business role. Bindings later connect each role to this workspace or a trading partner.
 * @export
 * @interface ConfigurationScenarioDefinitionActor
 */
export interface ConfigurationScenarioDefinitionActor {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionActor
     */
    id: string;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionActor interface.
 */
export function instanceOfConfigurationScenarioDefinitionActor(value: object): value is ConfigurationScenarioDefinitionActor {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionActorFromJSON(json: any): ConfigurationScenarioDefinitionActor {
    return ConfigurationScenarioDefinitionActorFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionActorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionActor {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
    };
}

export function ConfigurationScenarioDefinitionActorToJSON(json: any): ConfigurationScenarioDefinitionActor {
    return ConfigurationScenarioDefinitionActorToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionActorToJSONTyped(value?: ConfigurationScenarioDefinitionActor | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
    };
}
