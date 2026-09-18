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
 * A named completion event emitted by exactly one checkpoint pipeline stage after its preceding stages finish. For example, an X12 301 booking-confirmation step can emit bookingDisposition after exchange and fact extraction, allowing the run to choose the cancellation or shipping-instructions path.
 * @export
 * @interface ConfigurationScenarioDefinitionCheckpoint
 */
export interface ConfigurationScenarioDefinitionCheckpoint {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionCheckpoint
     */
    id: string;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionCheckpoint interface.
 */
export function instanceOfConfigurationScenarioDefinitionCheckpoint(value: object): value is ConfigurationScenarioDefinitionCheckpoint {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionCheckpointFromJSON(json: any): ConfigurationScenarioDefinitionCheckpoint {
    return ConfigurationScenarioDefinitionCheckpointFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionCheckpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionCheckpoint {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
    };
}

export function ConfigurationScenarioDefinitionCheckpointToJSON(json: any): ConfigurationScenarioDefinitionCheckpoint {
    return ConfigurationScenarioDefinitionCheckpointToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionCheckpointToJSONTyped(value?: ConfigurationScenarioDefinitionCheckpoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
    };
}
