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
import type { ScenarioEvidenceOccurrence } from './ScenarioEvidenceOccurrence.js';
import {
    ScenarioEvidenceOccurrenceFromJSON,
    ScenarioEvidenceOccurrenceFromJSONTyped,
    ScenarioEvidenceOccurrenceToJSON,
    ScenarioEvidenceOccurrenceToJSONTyped,
} from './ScenarioEvidenceOccurrence.js';

/**
 *
 * @export
 * @interface ScenarioEvidenceStep
 */
export interface ScenarioEvidenceStep {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceStep
     */
    stepId: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceStep
     */
    fromActor: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceStep
     */
    toActor: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceStep
     */
    transactionSet: string;
    /**
     *
     * @type {ScenarioEvidenceStepDirectionEnum}
     * @memberof ScenarioEvidenceStep
     */
    direction: ScenarioEvidenceStepDirectionEnum;
    /**
     *
     * @type {ScenarioEvidenceStepTargetKindEnum}
     * @memberof ScenarioEvidenceStep
     */
    targetKind: ScenarioEvidenceStepTargetKindEnum;
    /**
     *
     * @type {Array<ScenarioEvidenceOccurrence>}
     * @memberof ScenarioEvidenceStep
     */
    occurrences: Array<ScenarioEvidenceOccurrence>;
}


/**
 * @export
 */
export const ScenarioEvidenceStepDirectionEnum = {
    Incoming: 'incoming',
    Outgoing: 'outgoing',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceStepDirectionEnum = typeof ScenarioEvidenceStepDirectionEnum[keyof typeof ScenarioEvidenceStepDirectionEnum];

/**
 * @export
 */
export const ScenarioEvidenceStepTargetKindEnum = {
    RuntimeMapping: 'runtime_mapping',
    Adapter: 'adapter',
    ObservationOnly: 'observation_only',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceStepTargetKindEnum = typeof ScenarioEvidenceStepTargetKindEnum[keyof typeof ScenarioEvidenceStepTargetKindEnum];


/**
 * Check if a given object implements the ScenarioEvidenceStep interface.
 */
export function instanceOfScenarioEvidenceStep(value: object): value is ScenarioEvidenceStep {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('fromActor' in value) || value['fromActor'] === undefined) return false;
    if (!('toActor' in value) || value['toActor'] === undefined) return false;
    if (!('transactionSet' in value) || value['transactionSet'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('targetKind' in value) || value['targetKind'] === undefined) return false;
    if (!('occurrences' in value) || value['occurrences'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceStepFromJSON(json: any): ScenarioEvidenceStep {
    return ScenarioEvidenceStepFromJSONTyped(json, false);
}

export function ScenarioEvidenceStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceStep {
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
        'occurrences': ((json['occurrences'] as Array<any>).map(ScenarioEvidenceOccurrenceFromJSON)),
    };
}

export function ScenarioEvidenceStepToJSON(json: any): ScenarioEvidenceStep {
    return ScenarioEvidenceStepToJSONTyped(json, false);
}

export function ScenarioEvidenceStepToJSONTyped(value?: ScenarioEvidenceStep | null, ignoreDiscriminator: boolean = false): any {
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
        'occurrences': ((value['occurrences'] as Array<any>).map(ScenarioEvidenceOccurrenceToJSON)),
    };
}
