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
 * @interface CorrelationMatching
 */
export interface CorrelationMatching {
    /**
     * Pair occurrences whose declared correlation conditions pass.
     * @type {CorrelationMatchingStrategyEnum}
     * @memberof CorrelationMatching
     */
    strategy: CorrelationMatchingStrategyEnum;
    /**
     *
     * @type {Array<ConfigurationScenarioDefinitionMatchQuantifier>}
     * @memberof CorrelationMatching
     */
    quantifiers: Array<ConfigurationScenarioDefinitionMatchQuantifier>;
    /**
     *
     * @type {CorrelationMatchingUnmatchedEnum}
     * @memberof CorrelationMatching
     */
    unmatched: CorrelationMatchingUnmatchedEnum;
}


/**
 * @export
 */
export const CorrelationMatchingStrategyEnum = {
    Correlate: 'correlate',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CorrelationMatchingStrategyEnum = typeof CorrelationMatchingStrategyEnum[keyof typeof CorrelationMatchingStrategyEnum];

/**
 * @export
 */
export const CorrelationMatchingUnmatchedEnum = {
    Fail: 'fail',
    Record: 'record',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CorrelationMatchingUnmatchedEnum = typeof CorrelationMatchingUnmatchedEnum[keyof typeof CorrelationMatchingUnmatchedEnum];


/**
 * Check if a given object implements the CorrelationMatching interface.
 */
export function instanceOfCorrelationMatching(value: object): value is CorrelationMatching {
    if (!('strategy' in value) || value['strategy'] === undefined) return false;
    if (value['strategy'] !== 'correlate') return false;

    if (!('quantifiers' in value) || value['quantifiers'] === undefined) return false;
    if (!('unmatched' in value) || value['unmatched'] === undefined) return false;
    return true;
}

export function CorrelationMatchingFromJSON(json: any): CorrelationMatching {
    return CorrelationMatchingFromJSONTyped(json, false);
}

export function CorrelationMatchingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CorrelationMatching {
    if (json == null) {
        return json;
    }
    return {

        'strategy': json['strategy'],
        'quantifiers': ((json['quantifiers'] as Array<any>).map(ConfigurationScenarioDefinitionMatchQuantifierFromJSON)),
        'unmatched': json['unmatched'],
    };
}

export function CorrelationMatchingToJSON(json: any): CorrelationMatching {
    return CorrelationMatchingToJSONTyped(json, false);
}

export function CorrelationMatchingToJSONTyped(value?: CorrelationMatching | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'strategy': value['strategy'],
        'quantifiers': ((value['quantifiers'] as Array<any>).map(ConfigurationScenarioDefinitionMatchQuantifierToJSON)),
        'unmatched': value['unmatched'],
    };
}
