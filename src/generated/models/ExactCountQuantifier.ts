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
 * @interface ExactCountQuantifier
 */
export interface ExactCountQuantifier {
    /**
     *
     * @type {ExactCountQuantifierKindEnum}
     * @memberof ExactCountQuantifier
     */
    kind: ExactCountQuantifierKindEnum;
    /**
     *
     * @type {ExactCountQuantifierScopeEnum}
     * @memberof ExactCountQuantifier
     */
    scope: ExactCountQuantifierScopeEnum;
    /**
     *
     * @type {number}
     * @memberof ExactCountQuantifier
     */
    count: number;
}


/**
 * @export
 */
export const ExactCountQuantifierKindEnum = {
    Exactly: 'exactly',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ExactCountQuantifierKindEnum = typeof ExactCountQuantifierKindEnum[keyof typeof ExactCountQuantifierKindEnum];

/**
 * @export
 */
export const ExactCountQuantifierScopeEnum = {
    From: 'from',
    To: 'to',
    Pairs: 'pairs',
    PerFrom: 'per_from',
    PerTo: 'per_to',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ExactCountQuantifierScopeEnum = typeof ExactCountQuantifierScopeEnum[keyof typeof ExactCountQuantifierScopeEnum];


/**
 * Check if a given object implements the ExactCountQuantifier interface.
 */
export function instanceOfExactCountQuantifier(value: object): value is ExactCountQuantifier {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'exactly') return false;

    if (!('scope' in value) || value['scope'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    return true;
}

export function ExactCountQuantifierFromJSON(json: any): ExactCountQuantifier {
    return ExactCountQuantifierFromJSONTyped(json, false);
}

export function ExactCountQuantifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExactCountQuantifier {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'scope': json['scope'],
        'count': json['count'],
    };
}

export function ExactCountQuantifierToJSON(json: any): ExactCountQuantifier {
    return ExactCountQuantifierToJSONTyped(json, false);
}

export function ExactCountQuantifierToJSONTyped(value?: ExactCountQuantifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'scope': value['scope'],
        'count': value['count'],
    };
}
