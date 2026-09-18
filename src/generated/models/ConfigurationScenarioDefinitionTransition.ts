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
import type { ConfigurationScenarioDefinitionOccurrenceMatching } from './ConfigurationScenarioDefinitionOccurrenceMatching.js';
import {
    ConfigurationScenarioDefinitionOccurrenceMatchingFromJSON,
    ConfigurationScenarioDefinitionOccurrenceMatchingFromJSONTyped,
    ConfigurationScenarioDefinitionOccurrenceMatchingToJSON,
    ConfigurationScenarioDefinitionOccurrenceMatchingToJSONTyped,
} from './ConfigurationScenarioDefinitionOccurrenceMatching.js';
import type { ConfigurationScenarioDefinitionCorrelation } from './ConfigurationScenarioDefinitionCorrelation.js';
import {
    ConfigurationScenarioDefinitionCorrelationFromJSON,
    ConfigurationScenarioDefinitionCorrelationFromJSONTyped,
    ConfigurationScenarioDefinitionCorrelationToJSON,
    ConfigurationScenarioDefinitionCorrelationToJSONTyped,
} from './ConfigurationScenarioDefinitionCorrelation.js';
import type { ConfigurationScenarioDefinitionRevisionEffect } from './ConfigurationScenarioDefinitionRevisionEffect.js';
import {
    ConfigurationScenarioDefinitionRevisionEffectFromJSON,
    ConfigurationScenarioDefinitionRevisionEffectFromJSONTyped,
    ConfigurationScenarioDefinitionRevisionEffectToJSON,
    ConfigurationScenarioDefinitionRevisionEffectToJSONTyped,
} from './ConfigurationScenarioDefinitionRevisionEffect.js';

/**
 * A rule from one document step to another. Correlations identify which actual documents belong together. follows models ordinary order, such as a matching 810 invoice after an 850 order. supersedes records a replacement, such as a later 860 order change replacing the prior 850 or 860. cancels records a removal, such as an ocean 303 cancellation for a 301 booking confirmation. Supersedes and cancels inspect every stored observation before any replacement or cancellation is applied; they do not make an otherwise unavailable next-document path available and cannot themselves be branch alternatives.
 * @export
 * @interface ConfigurationScenarioDefinitionTransition
 */
export interface ConfigurationScenarioDefinitionTransition {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionTransition
     */
    id: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionTransition
     */
    fromStep: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionTransition
     */
    toStep: string;
    /**
     * Choose follows when a matched later document must occur at or after the earlier one, such as an 810 invoice after its 850 order. Choose supersedes when the later document replaces the matched earlier occurrence, such as an 860 order change replacing an 850 or prior 860. Choose cancels when the later document cancels the matched earlier occurrence, such as an ocean 303 cancelling a 301 booking confirmation. supersedes and cancels require effect to say when the change begins and whether later checks keep using the original document or reevaluate with the replacement/removal. Business labels such as acknowledges, reports status, or settles belong in the transition ID and prose unless an assertion or evidence requirement actually verifies them.
     * @type {ConfigurationScenarioDefinitionTransitionRelationshipEnum}
     * @memberof ConfigurationScenarioDefinitionTransition
     */
    relationship: ConfigurationScenarioDefinitionTransitionRelationshipEnum;
    /**
     * A positive ISO 8601 duration accepted by java.time.Duration, no longer than P365D. Examples: PT30M, PT4H, P2D. The server enforces the upper bound.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionTransition
     */
    within?: string;
    /**
     * Conditions the scenario evaluator uses to pair actual source and target documents. For example, compare the purchase-order number extracted from an 850 with the purchase-order number extracted from an 810. Correlation IDs must be unique within this transition.
     * @type {Array<ConfigurationScenarioDefinitionCorrelation>}
     * @memberof ConfigurationScenarioDefinitionTransition
     */
    correlations?: Array<ConfigurationScenarioDefinitionCorrelation>;
    /**
     *
     * @type {ConfigurationScenarioDefinitionOccurrenceMatching}
     * @memberof ConfigurationScenarioDefinitionTransition
     */
    matching: ConfigurationScenarioDefinitionOccurrenceMatching;
    /**
     *
     * @type {ConfigurationScenarioDefinitionRevisionEffect}
     * @memberof ConfigurationScenarioDefinitionTransition
     */
    effect?: ConfigurationScenarioDefinitionRevisionEffect;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionTransitionRelationshipEnum = {
    Follows: 'follows',
    Supersedes: 'supersedes',
    Cancels: 'cancels',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionTransitionRelationshipEnum = typeof ConfigurationScenarioDefinitionTransitionRelationshipEnum[keyof typeof ConfigurationScenarioDefinitionTransitionRelationshipEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionTransition interface.
 */
export function instanceOfConfigurationScenarioDefinitionTransition(value: object): value is ConfigurationScenarioDefinitionTransition {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('fromStep' in value) || value['fromStep'] === undefined) return false;
    if (!('toStep' in value) || value['toStep'] === undefined) return false;
    if (!('relationship' in value) || value['relationship'] === undefined) return false;
    if (!('matching' in value) || value['matching'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionTransitionFromJSON(json: any): ConfigurationScenarioDefinitionTransition {
    return ConfigurationScenarioDefinitionTransitionFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionTransitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionTransition {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'fromStep': json['fromStep'],
        'toStep': json['toStep'],
        'relationship': json['relationship'],
        'within': json['within'] == null ? undefined : json['within'],
        'correlations': json['correlations'] == null ? undefined : ((json['correlations'] as Array<any>).map(ConfigurationScenarioDefinitionCorrelationFromJSON)),
        'matching': ConfigurationScenarioDefinitionOccurrenceMatchingFromJSON(json['matching']),
        'effect': json['effect'] == null ? undefined : ConfigurationScenarioDefinitionRevisionEffectFromJSON(json['effect']),
    };
}

export function ConfigurationScenarioDefinitionTransitionToJSON(json: any): ConfigurationScenarioDefinitionTransition {
    return ConfigurationScenarioDefinitionTransitionToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionTransitionToJSONTyped(value?: ConfigurationScenarioDefinitionTransition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'fromStep': value['fromStep'],
        'toStep': value['toStep'],
        'relationship': value['relationship'],
        'within': value['within'],
        'correlations': value['correlations'] == null ? undefined : ((value['correlations'] as Array<any>).map(ConfigurationScenarioDefinitionCorrelationToJSON)),
        'matching': ConfigurationScenarioDefinitionOccurrenceMatchingToJSON(value['matching']),
        'effect': ConfigurationScenarioDefinitionRevisionEffectToJSON(value['effect']),
    };
}
