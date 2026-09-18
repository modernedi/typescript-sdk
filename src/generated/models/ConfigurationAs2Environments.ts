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
import type { ConfigurationAs2Environment } from './ConfigurationAs2Environment.js';
import {
    ConfigurationAs2EnvironmentFromJSON,
    ConfigurationAs2EnvironmentFromJSONTyped,
    ConfigurationAs2EnvironmentToJSON,
    ConfigurationAs2EnvironmentToJSONTyped,
} from './ConfigurationAs2Environment.js';

/**
 *
 * @export
 * @interface ConfigurationAs2Environments
 */
export interface ConfigurationAs2Environments {
    /**
     *
     * @type {ConfigurationAs2Environment}
     * @memberof ConfigurationAs2Environments
     */
    production: ConfigurationAs2Environment;
    /**
     *
     * @type {ConfigurationAs2Environment}
     * @memberof ConfigurationAs2Environments
     */
    test: ConfigurationAs2Environment | null;
}

/**
 * Check if a given object implements the ConfigurationAs2Environments interface.
 */
export function instanceOfConfigurationAs2Environments(value: object): value is ConfigurationAs2Environments {
    if (!('production' in value) || value['production'] === undefined) return false;
    if (!('test' in value) || value['test'] === undefined) return false;
    return true;
}

export function ConfigurationAs2EnvironmentsFromJSON(json: any): ConfigurationAs2Environments {
    return ConfigurationAs2EnvironmentsFromJSONTyped(json, false);
}

export function ConfigurationAs2EnvironmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationAs2Environments {
    if (json == null) {
        return json;
    }
    return {

        'production': ConfigurationAs2EnvironmentFromJSON(json['production']),
        'test': ConfigurationAs2EnvironmentFromJSON(json['test']),
    };
}

export function ConfigurationAs2EnvironmentsToJSON(json: any): ConfigurationAs2Environments {
    return ConfigurationAs2EnvironmentsToJSONTyped(json, false);
}

export function ConfigurationAs2EnvironmentsToJSONTyped(value?: ConfigurationAs2Environments | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'production': ConfigurationAs2EnvironmentToJSON(value['production']),
        'test': ConfigurationAs2EnvironmentToJSON(value['test']),
    };
}
