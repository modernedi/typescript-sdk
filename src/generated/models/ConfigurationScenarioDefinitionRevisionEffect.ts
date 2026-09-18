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
import type { ConfigurationScenarioDefinitionEffectiveAt } from './ConfigurationScenarioDefinitionEffectiveAt.js';
import {
    ConfigurationScenarioDefinitionEffectiveAtFromJSON,
    ConfigurationScenarioDefinitionEffectiveAtFromJSONTyped,
    ConfigurationScenarioDefinitionEffectiveAtToJSON,
    ConfigurationScenarioDefinitionEffectiveAtToJSONTyped,
} from './ConfigurationScenarioDefinitionEffectiveAt.js';

/**
 * What a matched replacement or cancellation changes. Raw immutable observation history means every received document remains stored unchanged; the revision rule changes only the run's interpreted business view. A revision transition does not open a next-document path by itself. Each branch-decision round first snapshots the steps already allowed; its conditions see only active reevaluate effects whose original and later-document steps are both in that snapshot, and a chosen path becomes available only in the next round. After branch selection, a revision affects checks only when both endpoint steps remain on the selected conversation path. If several active reevaluate effects target the same original document, the later effectiveAt wins; equal latest times fail with REVISION_EFFECT_CONFLICT instead of choosing arbitrarily.
 * @export
 * @interface ConfigurationScenarioDefinitionRevisionEffect
 */
export interface ConfigurationScenarioDefinitionRevisionEffect {
    /**
     *
     * @type {ConfigurationScenarioDefinitionEffectiveAt}
     * @memberof ConfigurationScenarioDefinitionRevisionEffect
     */
    effectiveAt: ConfigurationScenarioDefinitionEffectiveAt;
    /**
     * retain records the change and effective time but keeps using the original document for branch conditions, ordinary follows transitions, and assertions; for example, record an advisory 860 while later shipment checks still use the original 850. reevaluate recomputes those same consumers with the replacement or removal; for example, use the revised 860 values for later 856/810 checks, or remove a 301 booking confirmation after its 303 cancellation.
     * @type {ConfigurationScenarioDefinitionRevisionEffectDownstreamEnum}
     * @memberof ConfigurationScenarioDefinitionRevisionEffect
     */
    downstream: ConfigurationScenarioDefinitionRevisionEffectDownstreamEnum;
    /**
     * Behavior when no prior effective occurrence can be revised or cancelled. previous matching requires record because the first occurrence is the initial revision and necessarily has no prior occurrence.
     * @type {ConfigurationScenarioDefinitionRevisionEffectUnmatchedEnum}
     * @memberof ConfigurationScenarioDefinitionRevisionEffect
     */
    unmatched: ConfigurationScenarioDefinitionRevisionEffectUnmatchedEnum;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionRevisionEffectDownstreamEnum = {
    Retain: 'retain',
    Reevaluate: 'reevaluate',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionRevisionEffectDownstreamEnum = typeof ConfigurationScenarioDefinitionRevisionEffectDownstreamEnum[keyof typeof ConfigurationScenarioDefinitionRevisionEffectDownstreamEnum];

/**
 * @export
 */
export const ConfigurationScenarioDefinitionRevisionEffectUnmatchedEnum = {
    Fail: 'fail',
    Record: 'record',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionRevisionEffectUnmatchedEnum = typeof ConfigurationScenarioDefinitionRevisionEffectUnmatchedEnum[keyof typeof ConfigurationScenarioDefinitionRevisionEffectUnmatchedEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionRevisionEffect interface.
 */
export function instanceOfConfigurationScenarioDefinitionRevisionEffect(value: object): value is ConfigurationScenarioDefinitionRevisionEffect {
    if (!('effectiveAt' in value) || value['effectiveAt'] === undefined) return false;
    if (!('downstream' in value) || value['downstream'] === undefined) return false;
    if (!('unmatched' in value) || value['unmatched'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionRevisionEffectFromJSON(json: any): ConfigurationScenarioDefinitionRevisionEffect {
    return ConfigurationScenarioDefinitionRevisionEffectFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionRevisionEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionRevisionEffect {
    if (json == null) {
        return json;
    }
    return {

        'effectiveAt': ConfigurationScenarioDefinitionEffectiveAtFromJSON(json['effectiveAt']),
        'downstream': json['downstream'],
        'unmatched': json['unmatched'],
    };
}

export function ConfigurationScenarioDefinitionRevisionEffectToJSON(json: any): ConfigurationScenarioDefinitionRevisionEffect {
    return ConfigurationScenarioDefinitionRevisionEffectToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionRevisionEffectToJSONTyped(value?: ConfigurationScenarioDefinitionRevisionEffect | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'effectiveAt': ConfigurationScenarioDefinitionEffectiveAtToJSON(value['effectiveAt']),
        'downstream': value['downstream'],
        'unmatched': value['unmatched'],
    };
}
