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
import type { ConfigurationScenarioBindingEndpoint } from './ConfigurationScenarioBindingEndpoint.js';
import {
    ConfigurationScenarioBindingEndpointFromJSON,
    ConfigurationScenarioBindingEndpointFromJSONTyped,
    ConfigurationScenarioBindingEndpointToJSON,
    ConfigurationScenarioBindingEndpointToJSONTyped,
} from './ConfigurationScenarioBindingEndpoint.js';

/**
 * Connects one definition actor to this workspace or a current trading partner.
 * @export
 * @interface ConfigurationScenarioBindingActorBinding
 */
export interface ConfigurationScenarioBindingActorBinding {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioBindingActorBinding
     */
    actorId: string;
    /**
     *
     * @type {ConfigurationScenarioBindingEndpoint}
     * @memberof ConfigurationScenarioBindingActorBinding
     */
    endpoint: ConfigurationScenarioBindingEndpoint;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingActorBinding interface.
 */
export function instanceOfConfigurationScenarioBindingActorBinding(value: object): value is ConfigurationScenarioBindingActorBinding {
    if (!('actorId' in value) || value['actorId'] === undefined) return false;
    if (!('endpoint' in value) || value['endpoint'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingActorBindingFromJSON(json: any): ConfigurationScenarioBindingActorBinding {
    return ConfigurationScenarioBindingActorBindingFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingActorBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingActorBinding {
    if (json == null) {
        return json;
    }
    return {

        'actorId': json['actorId'],
        'endpoint': ConfigurationScenarioBindingEndpointFromJSON(json['endpoint']),
    };
}

export function ConfigurationScenarioBindingActorBindingToJSON(json: any): ConfigurationScenarioBindingActorBinding {
    return ConfigurationScenarioBindingActorBindingToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingActorBindingToJSONTyped(value?: ConfigurationScenarioBindingActorBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'actorId': value['actorId'],
        'endpoint': ConfigurationScenarioBindingEndpointToJSON(value['endpoint']),
    };
}
