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
import type { ConfigurationScenarioBindingFactSource } from './ConfigurationScenarioBindingFactSource.js';
import {
    ConfigurationScenarioBindingFactSourceFromJSON,
    ConfigurationScenarioBindingFactSourceFromJSONTyped,
    ConfigurationScenarioBindingFactSourceToJSON,
    ConfigurationScenarioBindingFactSourceToJSONTyped,
} from './ConfigurationScenarioBindingFactSource.js';

/**
 * Binds one named fact declaration to one validated X12 Mapper expression. Fact names must be unique within a step.
 * @export
 * @interface ConfigurationScenarioBindingFactSourceBinding
 */
export interface ConfigurationScenarioBindingFactSourceBinding {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioBindingFactSourceBinding
     */
    fact: string;
    /**
     *
     * @type {ConfigurationScenarioBindingFactSource}
     * @memberof ConfigurationScenarioBindingFactSourceBinding
     */
    source: ConfigurationScenarioBindingFactSource;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingFactSourceBinding interface.
 */
export function instanceOfConfigurationScenarioBindingFactSourceBinding(value: object): value is ConfigurationScenarioBindingFactSourceBinding {
    if (!('fact' in value) || value['fact'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingFactSourceBindingFromJSON(json: any): ConfigurationScenarioBindingFactSourceBinding {
    return ConfigurationScenarioBindingFactSourceBindingFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingFactSourceBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingFactSourceBinding {
    if (json == null) {
        return json;
    }
    return {

        'fact': json['fact'],
        'source': ConfigurationScenarioBindingFactSourceFromJSON(json['source']),
    };
}

export function ConfigurationScenarioBindingFactSourceBindingToJSON(json: any): ConfigurationScenarioBindingFactSourceBinding {
    return ConfigurationScenarioBindingFactSourceBindingToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingFactSourceBindingToJSONTyped(value?: ConfigurationScenarioBindingFactSourceBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'fact': value['fact'],
        'source': ConfigurationScenarioBindingFactSourceToJSON(value['source']),
    };
}
