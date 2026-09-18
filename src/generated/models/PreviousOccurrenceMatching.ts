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
import type { PreviousOccurrenceMatchingQuantifiersInner } from './PreviousOccurrenceMatchingQuantifiersInner.js';
import {
    PreviousOccurrenceMatchingQuantifiersInnerFromJSON,
    PreviousOccurrenceMatchingQuantifiersInnerFromJSONTyped,
    PreviousOccurrenceMatchingQuantifiersInnerToJSON,
    PreviousOccurrenceMatchingQuantifiersInnerToJSONTyped,
} from './PreviousOccurrenceMatchingQuantifiersInner.js';

/**
 * For a same-step supersedes transition whose step occurrence max is at least 2, pair occurrence n with n-1. The first occurrence is recorded as the initial revision, so both matching.unmatched and effect.unmatched must be record. A separate cross-step transition can link an initial 850 to the first 860. cancels uses a distinct cancellation-document step and cannot use previous matching.
 * @export
 * @interface PreviousOccurrenceMatching
 */
export interface PreviousOccurrenceMatching {
    /**
     *
     * @type {PreviousOccurrenceMatchingStrategyEnum}
     * @memberof PreviousOccurrenceMatching
     */
    strategy: PreviousOccurrenceMatchingStrategyEnum;
    /**
     *
     * @type {Array<PreviousOccurrenceMatchingQuantifiersInner>}
     * @memberof PreviousOccurrenceMatching
     */
    quantifiers: Array<PreviousOccurrenceMatchingQuantifiersInner>;
    /**
     * Record the first occurrence because it has no predecessor; later occurrences must match their immediate predecessor.
     * @type {PreviousOccurrenceMatchingUnmatchedEnum}
     * @memberof PreviousOccurrenceMatching
     */
    unmatched: PreviousOccurrenceMatchingUnmatchedEnum;
}


/**
 * @export
 */
export const PreviousOccurrenceMatchingStrategyEnum = {
    Previous: 'previous',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PreviousOccurrenceMatchingStrategyEnum = typeof PreviousOccurrenceMatchingStrategyEnum[keyof typeof PreviousOccurrenceMatchingStrategyEnum];

/**
 * @export
 */
export const PreviousOccurrenceMatchingUnmatchedEnum = {
    Record: 'record',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PreviousOccurrenceMatchingUnmatchedEnum = typeof PreviousOccurrenceMatchingUnmatchedEnum[keyof typeof PreviousOccurrenceMatchingUnmatchedEnum];


/**
 * Check if a given object implements the PreviousOccurrenceMatching interface.
 */
export function instanceOfPreviousOccurrenceMatching(value: object): value is PreviousOccurrenceMatching {
    if (!('strategy' in value) || value['strategy'] === undefined) return false;
    if (value['strategy'] !== 'previous') return false;

    if (!('quantifiers' in value) || value['quantifiers'] === undefined) return false;
    if (!('unmatched' in value) || value['unmatched'] === undefined) return false;
    if (value['unmatched'] !== 'record') return false;

    return true;
}

export function PreviousOccurrenceMatchingFromJSON(json: any): PreviousOccurrenceMatching {
    return PreviousOccurrenceMatchingFromJSONTyped(json, false);
}

export function PreviousOccurrenceMatchingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreviousOccurrenceMatching {
    if (json == null) {
        return json;
    }
    return {

        'strategy': json['strategy'],
        'quantifiers': ((json['quantifiers'] as Array<any>).map(PreviousOccurrenceMatchingQuantifiersInnerFromJSON)),
        'unmatched': json['unmatched'],
    };
}

export function PreviousOccurrenceMatchingToJSON(json: any): PreviousOccurrenceMatching {
    return PreviousOccurrenceMatchingToJSONTyped(json, false);
}

export function PreviousOccurrenceMatchingToJSONTyped(value?: PreviousOccurrenceMatching | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'strategy': value['strategy'],
        'quantifiers': ((value['quantifiers'] as Array<any>).map(PreviousOccurrenceMatchingQuantifiersInnerToJSON)),
        'unmatched': value['unmatched'],
    };
}
