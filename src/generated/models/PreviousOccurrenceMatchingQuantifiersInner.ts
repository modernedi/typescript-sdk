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
 * @interface PreviousOccurrenceMatchingQuantifiersInner
 */
export interface PreviousOccurrenceMatchingQuantifiersInner {
    /**
     *
     * @type {PreviousOccurrenceMatchingQuantifiersInnerKindEnum}
     * @memberof PreviousOccurrenceMatchingQuantifiersInner
     */
    kind: PreviousOccurrenceMatchingQuantifiersInnerKindEnum;
    /**
     *
     * @type {PreviousOccurrenceMatchingQuantifiersInnerScopeEnum}
     * @memberof PreviousOccurrenceMatchingQuantifiersInner
     */
    scope: PreviousOccurrenceMatchingQuantifiersInnerScopeEnum;
}


/**
 * @export
 */
export const PreviousOccurrenceMatchingQuantifiersInnerKindEnum = {
    Every: 'every',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PreviousOccurrenceMatchingQuantifiersInnerKindEnum = typeof PreviousOccurrenceMatchingQuantifiersInnerKindEnum[keyof typeof PreviousOccurrenceMatchingQuantifiersInnerKindEnum];

/**
 * @export
 */
export const PreviousOccurrenceMatchingQuantifiersInnerScopeEnum = {
    To: 'to',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PreviousOccurrenceMatchingQuantifiersInnerScopeEnum = typeof PreviousOccurrenceMatchingQuantifiersInnerScopeEnum[keyof typeof PreviousOccurrenceMatchingQuantifiersInnerScopeEnum];


/**
 * Check if a given object implements the PreviousOccurrenceMatchingQuantifiersInner interface.
 */
export function instanceOfPreviousOccurrenceMatchingQuantifiersInner(value: object): value is PreviousOccurrenceMatchingQuantifiersInner {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'every') return false;

    if (!('scope' in value) || value['scope'] === undefined) return false;
    if (value['scope'] !== 'to') return false;

    return true;
}

export function PreviousOccurrenceMatchingQuantifiersInnerFromJSON(json: any): PreviousOccurrenceMatchingQuantifiersInner {
    return PreviousOccurrenceMatchingQuantifiersInnerFromJSONTyped(json, false);
}

export function PreviousOccurrenceMatchingQuantifiersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreviousOccurrenceMatchingQuantifiersInner {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'scope': json['scope'],
    };
}

export function PreviousOccurrenceMatchingQuantifiersInnerToJSON(json: any): PreviousOccurrenceMatchingQuantifiersInner {
    return PreviousOccurrenceMatchingQuantifiersInnerToJSONTyped(json, false);
}

export function PreviousOccurrenceMatchingQuantifiersInnerToJSONTyped(value?: PreviousOccurrenceMatchingQuantifiersInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'scope': value['scope'],
    };
}
