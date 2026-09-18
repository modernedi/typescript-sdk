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
import type { ConfigurationScenarioDefinitionFactProjection } from './ConfigurationScenarioDefinitionFactProjection.js';
import {
    ConfigurationScenarioDefinitionFactProjectionFromJSON,
    ConfigurationScenarioDefinitionFactProjectionFromJSONTyped,
    ConfigurationScenarioDefinitionFactProjectionToJSON,
    ConfigurationScenarioDefinitionFactProjectionToJSONTyped,
} from './ConfigurationScenarioDefinitionFactProjection.js';

/**
 * A declared semantic fact from a concrete step occurrence.
 * @export
 * @interface ConfigurationScenarioDefinitionFactOperand
 */
export interface ConfigurationScenarioDefinitionFactOperand {
    /**
     *
     * @type {ConfigurationScenarioDefinitionFactOperandKindEnum}
     * @memberof ConfigurationScenarioDefinitionFactOperand
     */
    kind: ConfigurationScenarioDefinitionFactOperandKindEnum;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionFactOperand
     */
    stepId: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionFactOperand
     */
    fact: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionFactProjection}
     * @memberof ConfigurationScenarioDefinitionFactOperand
     */
    projection: ConfigurationScenarioDefinitionFactProjection;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionFactOperandKindEnum = {
    Fact: 'fact',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionFactOperandKindEnum = typeof ConfigurationScenarioDefinitionFactOperandKindEnum[keyof typeof ConfigurationScenarioDefinitionFactOperandKindEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionFactOperand interface.
 */
export function instanceOfConfigurationScenarioDefinitionFactOperand(value: object): value is ConfigurationScenarioDefinitionFactOperand {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'fact') return false;

    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('fact' in value) || value['fact'] === undefined) return false;
    if (!('projection' in value) || value['projection'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionFactOperandFromJSON(json: any): ConfigurationScenarioDefinitionFactOperand {
    return ConfigurationScenarioDefinitionFactOperandFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionFactOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionFactOperand {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'stepId': json['stepId'],
        'fact': json['fact'],
        'projection': ConfigurationScenarioDefinitionFactProjectionFromJSON(json['projection']),
    };
}

export function ConfigurationScenarioDefinitionFactOperandToJSON(json: any): ConfigurationScenarioDefinitionFactOperand {
    return ConfigurationScenarioDefinitionFactOperandToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionFactOperandToJSONTyped(value?: ConfigurationScenarioDefinitionFactOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'stepId': value['stepId'],
        'fact': value['fact'],
        'projection': ConfigurationScenarioDefinitionFactProjectionToJSON(value['projection']),
    };
}
