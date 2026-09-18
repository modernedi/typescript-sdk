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
import type { ScenarioGraphEvidenceReference } from './ScenarioGraphEvidenceReference.js';
import {
    ScenarioGraphEvidenceReferenceFromJSON,
    ScenarioGraphEvidenceReferenceFromJSONTyped,
    ScenarioGraphEvidenceReferenceToJSON,
    ScenarioGraphEvidenceReferenceToJSONTyped,
} from './ScenarioGraphEvidenceReference.js';
import type { ScenarioGraphAssurances } from './ScenarioGraphAssurances.js';
import {
    ScenarioGraphAssurancesFromJSON,
    ScenarioGraphAssurancesFromJSONTyped,
    ScenarioGraphAssurancesToJSON,
    ScenarioGraphAssurancesToJSONTyped,
} from './ScenarioGraphAssurances.js';

/**
 *
 * @export
 * @interface ScenarioGraphOccurrence
 */
export interface ScenarioGraphOccurrence {
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphOccurrence
     */
    occurrence: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphOccurrence
     */
    observedAt: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphOccurrence
     */
    messageId: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphOccurrence
     */
    transactionKey: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphOccurrence
     */
    replyToMessageId: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphOccurrence
     */
    replyToTransactionKey: string | null;
    /**
     *
     * @type {ScenarioGraphOccurrenceDirectionEnum}
     * @memberof ScenarioGraphOccurrence
     */
    direction: ScenarioGraphOccurrenceDirectionEnum;
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphOccurrence
     */
    partnerId: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphOccurrence
     */
    transactionSet: string;
    /**
     * Canonical six-digit public X12 release identity.
     * @type {string}
     * @memberof ScenarioGraphOccurrence
     */
    x12Version: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioGraphOccurrence
     */
    mappingId: number | null;
    /**
     *
     * @type {ScenarioGraphAssurances}
     * @memberof ScenarioGraphOccurrence
     */
    assurances: ScenarioGraphAssurances;
    /**
     *
     * @type {Array<ScenarioGraphEvidenceReference>}
     * @memberof ScenarioGraphOccurrence
     */
    evidence: Array<ScenarioGraphEvidenceReference>;
}


/**
 * @export
 */
export const ScenarioGraphOccurrenceDirectionEnum = {
    Incoming: 'incoming',
    Outgoing: 'outgoing',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphOccurrenceDirectionEnum = typeof ScenarioGraphOccurrenceDirectionEnum[keyof typeof ScenarioGraphOccurrenceDirectionEnum];


/**
 * Check if a given object implements the ScenarioGraphOccurrence interface.
 */
export function instanceOfScenarioGraphOccurrence(value: object): value is ScenarioGraphOccurrence {
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    if (!('observedAt' in value) || value['observedAt'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('replyToMessageId' in value) || value['replyToMessageId'] === undefined) return false;
    if (!('replyToTransactionKey' in value) || value['replyToTransactionKey'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('transactionSet' in value) || value['transactionSet'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    if (!('assurances' in value) || value['assurances'] === undefined) return false;
    if (!('evidence' in value) || value['evidence'] === undefined) return false;
    return true;
}

export function ScenarioGraphOccurrenceFromJSON(json: any): ScenarioGraphOccurrence {
    return ScenarioGraphOccurrenceFromJSONTyped(json, false);
}

export function ScenarioGraphOccurrenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphOccurrence {
    if (json == null) {
        return json;
    }
    return {

        'occurrence': json['occurrence'],
        'observedAt': json['observedAt'],
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'replyToMessageId': json['replyToMessageId'],
        'replyToTransactionKey': json['replyToTransactionKey'],
        'direction': json['direction'],
        'partnerId': json['partnerId'],
        'transactionSet': json['transactionSet'],
        'x12Version': json['x12Version'],
        'mappingId': json['mappingId'],
        'assurances': ScenarioGraphAssurancesFromJSON(json['assurances']),
        'evidence': ((json['evidence'] as Array<any>).map(ScenarioGraphEvidenceReferenceFromJSON)),
    };
}

export function ScenarioGraphOccurrenceToJSON(json: any): ScenarioGraphOccurrence {
    return ScenarioGraphOccurrenceToJSONTyped(json, false);
}

export function ScenarioGraphOccurrenceToJSONTyped(value?: ScenarioGraphOccurrence | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'occurrence': value['occurrence'],
        'observedAt': value['observedAt'],
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'replyToMessageId': value['replyToMessageId'],
        'replyToTransactionKey': value['replyToTransactionKey'],
        'direction': value['direction'],
        'partnerId': value['partnerId'],
        'transactionSet': value['transactionSet'],
        'x12Version': value['x12Version'],
        'mappingId': value['mappingId'],
        'assurances': ScenarioGraphAssurancesToJSON(value['assurances']),
        'evidence': ((value['evidence'] as Array<any>).map(ScenarioGraphEvidenceReferenceToJSON)),
    };
}
