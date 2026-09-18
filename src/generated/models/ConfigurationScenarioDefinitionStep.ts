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
import type { ConfigurationScenarioDefinitionFactDeclaration } from './ConfigurationScenarioDefinitionFactDeclaration.js';
import {
    ConfigurationScenarioDefinitionFactDeclarationFromJSON,
    ConfigurationScenarioDefinitionFactDeclarationFromJSONTyped,
    ConfigurationScenarioDefinitionFactDeclarationToJSON,
    ConfigurationScenarioDefinitionFactDeclarationToJSONTyped,
} from './ConfigurationScenarioDefinitionFactDeclaration.js';
import type { ConfigurationScenarioDefinitionAssurance } from './ConfigurationScenarioDefinitionAssurance.js';
import {
    ConfigurationScenarioDefinitionAssuranceFromJSON,
    ConfigurationScenarioDefinitionAssuranceFromJSONTyped,
    ConfigurationScenarioDefinitionAssuranceToJSON,
    ConfigurationScenarioDefinitionAssuranceToJSONTyped,
} from './ConfigurationScenarioDefinitionAssurance.js';
import type { ConfigurationScenarioDefinitionTransaction } from './ConfigurationScenarioDefinitionTransaction.js';
import {
    ConfigurationScenarioDefinitionTransactionFromJSON,
    ConfigurationScenarioDefinitionTransactionFromJSONTyped,
    ConfigurationScenarioDefinitionTransactionToJSON,
    ConfigurationScenarioDefinitionTransactionToJSONTyped,
} from './ConfigurationScenarioDefinitionTransaction.js';
import type { ConfigurationScenarioDefinitionPipelineStage } from './ConfigurationScenarioDefinitionPipelineStage.js';
import {
    ConfigurationScenarioDefinitionPipelineStageFromJSON,
    ConfigurationScenarioDefinitionPipelineStageFromJSONTyped,
    ConfigurationScenarioDefinitionPipelineStageToJSON,
    ConfigurationScenarioDefinitionPipelineStageToJSONTyped,
} from './ConfigurationScenarioDefinitionPipelineStage.js';
import type { ConfigurationScenarioDefinitionOccurrence } from './ConfigurationScenarioDefinitionOccurrence.js';
import {
    ConfigurationScenarioDefinitionOccurrenceFromJSON,
    ConfigurationScenarioDefinitionOccurrenceFromJSONTyped,
    ConfigurationScenarioDefinitionOccurrenceToJSON,
    ConfigurationScenarioDefinitionOccurrenceToJSONTyped,
} from './ConfigurationScenarioDefinitionOccurrence.js';

/**
 * One directed X12 business-document exchange. Functional acknowledgments (997/999) are evidence requirements, not business steps.
 * @export
 * @interface ConfigurationScenarioDefinitionStep
 */
export interface ConfigurationScenarioDefinitionStep {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionStep
     */
    id: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionStep
     */
    fromActor: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionStep
     */
    toActor: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionTransaction}
     * @memberof ConfigurationScenarioDefinitionStep
     */
    transaction: ConfigurationScenarioDefinitionTransaction;
    /**
     *
     * @type {ConfigurationScenarioDefinitionOccurrence}
     * @memberof ConfigurationScenarioDefinitionStep
     */
    occurrence: ConfigurationScenarioDefinitionOccurrence;
    /**
     *
     * @type {ConfigurationScenarioDefinitionAssurance}
     * @memberof ConfigurationScenarioDefinitionStep
     */
    assurance?: ConfigurationScenarioDefinitionAssurance;
    /**
     * Typed semantic facts exposed by this step. Use an empty array when the step exposes none. Declarations name the stable ABI only; extraction provenance belongs to runtime capability and binding layers.
     * @type {Array<ConfigurationScenarioDefinitionFactDeclaration>}
     * @memberof ConfigurationScenarioDefinitionStep
     */
    facts: Array<ConfigurationScenarioDefinitionFactDeclaration>;
    /**
     * Ordered abstract processing stages for each step occurrence. Stages describe behavior without naming mapper or transport artifacts.
     * @type {Array<ConfigurationScenarioDefinitionPipelineStage>}
     * @memberof ConfigurationScenarioDefinitionStep
     */
    pipeline: Array<ConfigurationScenarioDefinitionPipelineStage>;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionStep interface.
 */
export function instanceOfConfigurationScenarioDefinitionStep(value: object): value is ConfigurationScenarioDefinitionStep {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('fromActor' in value) || value['fromActor'] === undefined) return false;
    if (!('toActor' in value) || value['toActor'] === undefined) return false;
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    if (!('facts' in value) || value['facts'] === undefined) return false;
    if (!('pipeline' in value) || value['pipeline'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionStepFromJSON(json: any): ConfigurationScenarioDefinitionStep {
    return ConfigurationScenarioDefinitionStepFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionStep {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'fromActor': json['fromActor'],
        'toActor': json['toActor'],
        'transaction': ConfigurationScenarioDefinitionTransactionFromJSON(json['transaction']),
        'occurrence': ConfigurationScenarioDefinitionOccurrenceFromJSON(json['occurrence']),
        'assurance': json['assurance'] == null ? undefined : ConfigurationScenarioDefinitionAssuranceFromJSON(json['assurance']),
        'facts': ((json['facts'] as Array<any>).map(ConfigurationScenarioDefinitionFactDeclarationFromJSON)),
        'pipeline': ((json['pipeline'] as Array<any>).map(ConfigurationScenarioDefinitionPipelineStageFromJSON)),
    };
}

export function ConfigurationScenarioDefinitionStepToJSON(json: any): ConfigurationScenarioDefinitionStep {
    return ConfigurationScenarioDefinitionStepToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionStepToJSONTyped(value?: ConfigurationScenarioDefinitionStep | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'fromActor': value['fromActor'],
        'toActor': value['toActor'],
        'transaction': ConfigurationScenarioDefinitionTransactionToJSON(value['transaction']),
        'occurrence': ConfigurationScenarioDefinitionOccurrenceToJSON(value['occurrence']),
        'assurance': ConfigurationScenarioDefinitionAssuranceToJSON(value['assurance']),
        'facts': ((value['facts'] as Array<any>).map(ConfigurationScenarioDefinitionFactDeclarationToJSON)),
        'pipeline': ((value['pipeline'] as Array<any>).map(ConfigurationScenarioDefinitionPipelineStageToJSON)),
    };
}
