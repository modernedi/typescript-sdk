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
 * A closed typed JSON literal. list and set literals require scalar elementType and use a JSON array value.
 * @export
 * @interface ConfigurationScenarioDefinitionLiteralOperand
 */
export interface ConfigurationScenarioDefinitionLiteralOperand {
    /**
     *
     * @type {ConfigurationScenarioDefinitionLiteralOperandKindEnum}
     * @memberof ConfigurationScenarioDefinitionLiteralOperand
     */
    kind: ConfigurationScenarioDefinitionLiteralOperandKindEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionValueType}
     * @memberof ConfigurationScenarioDefinitionLiteralOperand
     */
    type: ConfigurationScenarioDefinitionValueType;
    /**
     *
     * @type {ConfigurationScenarioDefinitionScalarType}
     * @memberof ConfigurationScenarioDefinitionLiteralOperand
     */
    elementType?: ConfigurationScenarioDefinitionScalarType;
    /**
     * JSON value matching type and elementType. The server performs format and exact type validation.
     * @type {any}
     * @memberof ConfigurationScenarioDefinitionLiteralOperand
     */
    value: any | null;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionLiteralOperandKindEnum = {
    Literal: 'literal',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionLiteralOperandKindEnum = typeof ConfigurationScenarioDefinitionLiteralOperandKindEnum[keyof typeof ConfigurationScenarioDefinitionLiteralOperandKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionLiteralOperand interface.
 */
export function instanceOfConfigurationScenarioDefinitionLiteralOperand(value: object): value is ConfigurationScenarioDefinitionLiteralOperand {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'literal') return false;

    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionLiteralOperandFromJSON(json: any): ConfigurationScenarioDefinitionLiteralOperand {
    return ConfigurationScenarioDefinitionLiteralOperandFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionLiteralOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionLiteralOperand {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'type': ConfigurationScenarioDefinitionValueTypeFromJSON(json['type']),
        'elementType': json['elementType'] == null ? undefined : ConfigurationScenarioDefinitionScalarTypeFromJSON(json['elementType']),
        'value': json['value'],
    };
}

export function ConfigurationScenarioDefinitionLiteralOperandToJSON(json: any): ConfigurationScenarioDefinitionLiteralOperand {
    return ConfigurationScenarioDefinitionLiteralOperandToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionLiteralOperandToJSONTyped(value?: ConfigurationScenarioDefinitionLiteralOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'type': ConfigurationScenarioDefinitionValueTypeToJSON(value['type']),
        'elementType': ConfigurationScenarioDefinitionScalarTypeToJSON(value['elementType']),
        'value': value['value'],
    };
}
