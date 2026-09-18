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
import type { ConfigurationScenarioDefinitionScalarType } from './ConfigurationScenarioDefinitionScalarType.js';
import {
    ConfigurationScenarioDefinitionScalarTypeFromJSON,
    ConfigurationScenarioDefinitionScalarTypeFromJSONTyped,
    ConfigurationScenarioDefinitionScalarTypeToJSON,
    ConfigurationScenarioDefinitionScalarTypeToJSONTyped,
} from './ConfigurationScenarioDefinitionScalarType.js';
import type { ConfigurationScenarioDefinitionValueType } from './ConfigurationScenarioDefinitionValueType.js';
import {
    ConfigurationScenarioDefinitionValueTypeFromJSON,
    ConfigurationScenarioDefinitionValueTypeFromJSONTyped,
    ConfigurationScenarioDefinitionValueTypeToJSON,
    ConfigurationScenarioDefinitionValueTypeToJSONTyped,
} from './ConfigurationScenarioDefinitionValueType.js';

/**
 * A typed value supplied when a run starts through the Workspace UI or API, or resolved from its declared default when optional.
 * @export
 * @interface ConfigurationScenarioDefinitionParameter
 */
export interface ConfigurationScenarioDefinitionParameter {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionParameter
     */
    id: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionValueType}
     * @memberof ConfigurationScenarioDefinitionParameter
     */
    type: ConfigurationScenarioDefinitionValueType;
    /**
     *
     * @type {ConfigurationScenarioDefinitionScalarType}
     * @memberof ConfigurationScenarioDefinitionParameter
     */
    elementType?: ConfigurationScenarioDefinitionScalarType;
    /**
     * Whether the run must explicitly provide this value. A required parameter cannot also have a default.
     * @type {boolean}
     * @memberof ConfigurationScenarioDefinitionParameter
     */
    required: boolean;
    /**
     * Optional JSON value used when the run omits a non-required parameter.
     * @type {any}
     * @memberof ConfigurationScenarioDefinitionParameter
     */
    _default?: any | null;
}



/**
 * Check if a given object implements the ConfigurationScenarioDefinitionParameter interface.
 */
export function instanceOfConfigurationScenarioDefinitionParameter(value: object): value is ConfigurationScenarioDefinitionParameter {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('required' in value) || value['required'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionParameterFromJSON(json: any): ConfigurationScenarioDefinitionParameter {
    return ConfigurationScenarioDefinitionParameterFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionParameter {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': ConfigurationScenarioDefinitionValueTypeFromJSON(json['type']),
        'elementType': json['elementType'] == null ? undefined : ConfigurationScenarioDefinitionScalarTypeFromJSON(json['elementType']),
        'required': json['required'],
        '_default': json['default'] === undefined ? undefined : json['default'] === null ? null : json['default'],
    };
}

export function ConfigurationScenarioDefinitionParameterToJSON(json: any): ConfigurationScenarioDefinitionParameter {
    return ConfigurationScenarioDefinitionParameterToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionParameterToJSONTyped(value?: ConfigurationScenarioDefinitionParameter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': ConfigurationScenarioDefinitionValueTypeToJSON(value['type']),
        'elementType': ConfigurationScenarioDefinitionScalarTypeToJSON(value['elementType']),
        'required': value['required'],
        'default': value['_default'],
    };
}
