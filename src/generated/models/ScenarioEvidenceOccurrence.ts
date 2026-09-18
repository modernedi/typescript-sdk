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
/**
 *
 * @export
 * @interface ScenarioEvidenceOccurrence
 */
export interface ScenarioEvidenceOccurrence {
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceOccurrence
     */
    occurrence: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceOccurrence
     */
    observedAt: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceOccurrence
     */
    messageId: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceOccurrence
     */
    transactionKey: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceOccurrence
     */
    partnerId: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceOccurrence
     */
    mappingId: number | null;
}

/**
 * Check if a given object implements the ScenarioEvidenceOccurrence interface.
 */
export function instanceOfScenarioEvidenceOccurrence(value: object): value is ScenarioEvidenceOccurrence {
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    if (!('observedAt' in value) || value['observedAt'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceOccurrenceFromJSON(json: any): ScenarioEvidenceOccurrence {
    return ScenarioEvidenceOccurrenceFromJSONTyped(json, false);
}

export function ScenarioEvidenceOccurrenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceOccurrence {
    if (json == null) {
        return json;
    }
    return {

        'occurrence': json['occurrence'],
        'observedAt': json['observedAt'],
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'partnerId': json['partnerId'],
        'mappingId': json['mappingId'],
    };
}

export function ScenarioEvidenceOccurrenceToJSON(json: any): ScenarioEvidenceOccurrence {
    return ScenarioEvidenceOccurrenceToJSONTyped(json, false);
}

export function ScenarioEvidenceOccurrenceToJSONTyped(value?: ScenarioEvidenceOccurrence | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'occurrence': value['occurrence'],
        'observedAt': value['observedAt'],
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'partnerId': value['partnerId'],
        'mappingId': value['mappingId'],
    };
}
