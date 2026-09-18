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
import type { ScenarioGraphStepOccurrence } from './ScenarioGraphStepOccurrence.js';
import {
    ScenarioGraphStepOccurrenceFromJSON,
    ScenarioGraphStepOccurrenceFromJSONTyped,
    ScenarioGraphStepOccurrenceToJSON,
    ScenarioGraphStepOccurrenceToJSONTyped,
} from './ScenarioGraphStepOccurrence.js';
import type { ScenarioGraphOccurrence } from './ScenarioGraphOccurrence.js';
import {
    ScenarioGraphOccurrenceFromJSON,
    ScenarioGraphOccurrenceFromJSONTyped,
    ScenarioGraphOccurrenceToJSON,
    ScenarioGraphOccurrenceToJSONTyped,
} from './ScenarioGraphOccurrence.js';

/**
 *
 * @export
 * @interface ScenarioGraphStep
 */
export interface ScenarioGraphStep {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioGraphStep
     */
    stepId: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioGraphStep
     */
    fromActor: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioGraphStep
     */
    toActor: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphStep
     */
    transactionSet: string;
    /**
     *
     * @type {ScenarioGraphStepDirectionEnum}
     * @memberof ScenarioGraphStep
     */
    direction: ScenarioGraphStepDirectionEnum;
    /**
     *
     * @type {ScenarioGraphStepTargetKindEnum}
     * @memberof ScenarioGraphStep
     */
    targetKind: ScenarioGraphStepTargetKindEnum;
    /**
     * True only for runtime_mapping and observation_only targets. Adapter steps are advanced through /advance.
     * @type {boolean}
     * @memberof ScenarioGraphStep
     */
    attachable: boolean;
    /**
     *
     * @type {ScenarioGraphStepOccurrence}
     * @memberof ScenarioGraphStep
     */
    occurrence: ScenarioGraphStepOccurrence;
    /**
     *
     * @type {Set<number>}
     * @memberof ScenarioGraphStep
     */
    observedOccurrences: Set<number>;
    /**
     *
     * @type {Array<ScenarioGraphOccurrence>}
     * @memberof ScenarioGraphStep
     */
    occurrences: Array<ScenarioGraphOccurrence>;
}


/**
 * @export
 */
export const ScenarioGraphStepDirectionEnum = {
    Incoming: 'incoming',
    Outgoing: 'outgoing',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphStepDirectionEnum = typeof ScenarioGraphStepDirectionEnum[keyof typeof ScenarioGraphStepDirectionEnum];

/**
 * @export
 */
export const ScenarioGraphStepTargetKindEnum = {
    Adapter: 'adapter',
    RuntimeMapping: 'runtime_mapping',
    ObservationOnly: 'observation_only',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphStepTargetKindEnum = typeof ScenarioGraphStepTargetKindEnum[keyof typeof ScenarioGraphStepTargetKindEnum];


/**
 * Check if a given object implements the ScenarioGraphStep interface.
 */
export function instanceOfScenarioGraphStep(value: object): value is ScenarioGraphStep {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('fromActor' in value) || value['fromActor'] === undefined) return false;
    if (!('toActor' in value) || value['toActor'] === undefined) return false;
    if (!('transactionSet' in value) || value['transactionSet'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('targetKind' in value) || value['targetKind'] === undefined) return false;
    if (!('attachable' in value) || value['attachable'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    if (!('observedOccurrences' in value) || value['observedOccurrences'] === undefined) return false;
    if (!('occurrences' in value) || value['occurrences'] === undefined) return false;
    return true;
}

export function ScenarioGraphStepFromJSON(json: any): ScenarioGraphStep {
    return ScenarioGraphStepFromJSONTyped(json, false);
}

export function ScenarioGraphStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphStep {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'fromActor': json['fromActor'],
        'toActor': json['toActor'],
        'transactionSet': json['transactionSet'],
        'direction': json['direction'],
        'targetKind': json['targetKind'],
        'attachable': json['attachable'],
        'occurrence': ScenarioGraphStepOccurrenceFromJSON(json['occurrence']),
        'observedOccurrences': new Set(json['observedOccurrences']),
        'occurrences': ((json['occurrences'] as Array<any>).map(ScenarioGraphOccurrenceFromJSON)),
    };
}

export function ScenarioGraphStepToJSON(json: any): ScenarioGraphStep {
    return ScenarioGraphStepToJSONTyped(json, false);
}

export function ScenarioGraphStepToJSONTyped(value?: ScenarioGraphStep | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'fromActor': value['fromActor'],
        'toActor': value['toActor'],
        'transactionSet': value['transactionSet'],
        'direction': value['direction'],
        'targetKind': value['targetKind'],
        'attachable': value['attachable'],
        'occurrence': ScenarioGraphStepOccurrenceToJSON(value['occurrence']),
        'observedOccurrences': Array.from(value['observedOccurrences'] as Set<any>),
        'occurrences': ((value['occurrences'] as Array<any>).map(ScenarioGraphOccurrenceToJSON)),
    };
}
