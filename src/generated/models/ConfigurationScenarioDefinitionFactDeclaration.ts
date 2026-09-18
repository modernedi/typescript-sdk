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
 * Stable semantic ABI for one fact exposed by a step occurrence. The binding/runtime capability separately defines extraction provenance.
 * @export
 * @interface ConfigurationScenarioDefinitionFactDeclaration
 */
export interface ConfigurationScenarioDefinitionFactDeclaration {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionFactDeclaration
     */
    name: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionValueType}
     * @memberof ConfigurationScenarioDefinitionFactDeclaration
     */
    type: ConfigurationScenarioDefinitionValueType;
    /**
     *
     * @type {ConfigurationScenarioDefinitionScalarType}
     * @memberof ConfigurationScenarioDefinitionFactDeclaration
     */
    elementType?: ConfigurationScenarioDefinitionScalarType;
    /**
     * Presence of the typed value on each occurrence. Collection multiplicity is expressed by type list/set, never by a separate many cardinality.
     * @type {ConfigurationScenarioDefinitionFactDeclarationCardinalityEnum}
     * @memberof ConfigurationScenarioDefinitionFactDeclaration
     */
    cardinality: ConfigurationScenarioDefinitionFactDeclarationCardinalityEnum;
    /**
     * Ordered, deterministic normalization applied before typed evaluation.
     * @type {Set<ConfigurationScenarioDefinitionFactDeclarationNormalizationEnum>}
     * @memberof ConfigurationScenarioDefinitionFactDeclaration
     */
    normalization: Set<ConfigurationScenarioDefinitionFactDeclarationNormalizationEnum>;
    /**
     * Data-handling classification carried with evidence and diagnostics.
     * @type {ConfigurationScenarioDefinitionFactDeclarationSensitivityEnum}
     * @memberof ConfigurationScenarioDefinitionFactDeclaration
     */
    sensitivity: ConfigurationScenarioDefinitionFactDeclarationSensitivityEnum;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionFactDeclarationCardinalityEnum = {
    One: 'one',
    Optional: 'optional',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionFactDeclarationCardinalityEnum = typeof ConfigurationScenarioDefinitionFactDeclarationCardinalityEnum[keyof typeof ConfigurationScenarioDefinitionFactDeclarationCardinalityEnum];

/**
 * @export
 */
export const ConfigurationScenarioDefinitionFactDeclarationNormalizationEnum = {
    Trim: 'trim',
    CollapseWhitespace: 'collapse_whitespace',
    Uppercase: 'uppercase',
    Lowercase: 'lowercase',
    DecimalCanonical: 'decimal_canonical',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionFactDeclarationNormalizationEnum = typeof ConfigurationScenarioDefinitionFactDeclarationNormalizationEnum[keyof typeof ConfigurationScenarioDefinitionFactDeclarationNormalizationEnum];

/**
 * @export
 */
export const ConfigurationScenarioDefinitionFactDeclarationSensitivityEnum = {
    Business: 'business',
    Personal: 'personal',
    Financial: 'financial',
    Health: 'health',
    Restricted: 'restricted',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionFactDeclarationSensitivityEnum = typeof ConfigurationScenarioDefinitionFactDeclarationSensitivityEnum[keyof typeof ConfigurationScenarioDefinitionFactDeclarationSensitivityEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionFactDeclaration interface.
 */
export function instanceOfConfigurationScenarioDefinitionFactDeclaration(value: object): value is ConfigurationScenarioDefinitionFactDeclaration {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('cardinality' in value) || value['cardinality'] === undefined) return false;
    if (!('normalization' in value) || value['normalization'] === undefined) return false;
    if (!('sensitivity' in value) || value['sensitivity'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionFactDeclarationFromJSON(json: any): ConfigurationScenarioDefinitionFactDeclaration {
    return ConfigurationScenarioDefinitionFactDeclarationFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionFactDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionFactDeclaration {
    if (json == null) {
        return json;
    }
    return {

        'name': json['name'],
        'type': ConfigurationScenarioDefinitionValueTypeFromJSON(json['type']),
        'elementType': json['elementType'] == null ? undefined : ConfigurationScenarioDefinitionScalarTypeFromJSON(json['elementType']),
        'cardinality': json['cardinality'],
        'normalization': new Set(json['normalization']),
        'sensitivity': json['sensitivity'],
    };
}

export function ConfigurationScenarioDefinitionFactDeclarationToJSON(json: any): ConfigurationScenarioDefinitionFactDeclaration {
    return ConfigurationScenarioDefinitionFactDeclarationToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionFactDeclarationToJSONTyped(value?: ConfigurationScenarioDefinitionFactDeclaration | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'name': value['name'],
        'type': ConfigurationScenarioDefinitionValueTypeToJSON(value['type']),
        'elementType': ConfigurationScenarioDefinitionScalarTypeToJSON(value['elementType']),
        'cardinality': value['cardinality'],
        'normalization': Array.from(value['normalization'] as Set<any>),
        'sensitivity': value['sensitivity'],
    };
}
