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
import type { ConfigurationScenarioDefinitionMatchQuantifier } from './ConfigurationScenarioDefinitionMatchQuantifier.js';
import {
    ConfigurationScenarioDefinitionMatchQuantifierFromJSON,
    ConfigurationScenarioDefinitionMatchQuantifierFromJSONTyped,
    ConfigurationScenarioDefinitionMatchQuantifierToJSON,
    ConfigurationScenarioDefinitionMatchQuantifierToJSONTyped,
} from './ConfigurationScenarioDefinitionMatchQuantifier.js';

/**
 *
 * @export
 * @interface PositionalMatching
 */
export interface PositionalMatching {
    /**
     * Pair source and target occurrences by stable observation order; correlations are forbidden.
     * @type {PositionalMatchingStrategyEnum}
     * @memberof PositionalMatching
     */
    strategy: PositionalMatchingStrategyEnum;
    /**
     *
     * @type {Array<ConfigurationScenarioDefinitionMatchQuantifier>}
     * @memberof PositionalMatching
     */
    quantifiers: Array<ConfigurationScenarioDefinitionMatchQuantifier>;
    /**
     *
     * @type {PositionalMatchingUnmatchedEnum}
     * @memberof PositionalMatching
     */
    unmatched: PositionalMatchingUnmatchedEnum;
}


/**
 * @export
 */
export const PositionalMatchingStrategyEnum = {
    Position: 'position',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PositionalMatchingStrategyEnum = typeof PositionalMatchingStrategyEnum[keyof typeof PositionalMatchingStrategyEnum];

/**
 * @export
 */
export const PositionalMatchingUnmatchedEnum = {
    Fail: 'fail',
    Record: 'record',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PositionalMatchingUnmatchedEnum = typeof PositionalMatchingUnmatchedEnum[keyof typeof PositionalMatchingUnmatchedEnum];


/**
 * Check if a given object implements the PositionalMatching interface.
 */
export function instanceOfPositionalMatching(value: object): value is PositionalMatching {
    if (!('strategy' in value) || value['strategy'] === undefined) return false;
    if (value['strategy'] !== 'position') return false;

    if (!('quantifiers' in value) || value['quantifiers'] === undefined) return false;
    if (!('unmatched' in value) || value['unmatched'] === undefined) return false;
    return true;
}

export function PositionalMatchingFromJSON(json: any): PositionalMatching {
    return PositionalMatchingFromJSONTyped(json, false);
}

export function PositionalMatchingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PositionalMatching {
    if (json == null) {
        return json;
    }
    return {

        'strategy': json['strategy'],
        'quantifiers': ((json['quantifiers'] as Array<any>).map(ConfigurationScenarioDefinitionMatchQuantifierFromJSON)),
        'unmatched': json['unmatched'],
    };
}

export function PositionalMatchingToJSON(json: any): PositionalMatching {
    return PositionalMatchingToJSONTyped(json, false);
}

export function PositionalMatchingToJSONTyped(value?: PositionalMatching | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'strategy': value['strategy'],
        'quantifiers': ((value['quantifiers'] as Array<any>).map(ConfigurationScenarioDefinitionMatchQuantifierToJSON)),
        'unmatched': value['unmatched'],
    };
}
