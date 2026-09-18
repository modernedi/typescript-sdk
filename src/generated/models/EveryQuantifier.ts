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
 * @interface EveryQuantifier
 */
export interface EveryQuantifier {
    /**
     *
     * @type {EveryQuantifierKindEnum}
     * @memberof EveryQuantifier
     */
    kind: EveryQuantifierKindEnum;
    /**
     *
     * @type {EveryQuantifierScopeEnum}
     * @memberof EveryQuantifier
     */
    scope: EveryQuantifierScopeEnum;
}


/**
 * @export
 */
export const EveryQuantifierKindEnum = {
    Every: 'every',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type EveryQuantifierKindEnum = typeof EveryQuantifierKindEnum[keyof typeof EveryQuantifierKindEnum];

/**
 * @export
 */
export const EveryQuantifierScopeEnum = {
    From: 'from',
    To: 'to',
    Pairs: 'pairs',
    PerFrom: 'per_from',
    PerTo: 'per_to',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type EveryQuantifierScopeEnum = typeof EveryQuantifierScopeEnum[keyof typeof EveryQuantifierScopeEnum];


/**
 * Check if a given object implements the EveryQuantifier interface.
 */
export function instanceOfEveryQuantifier(value: object): value is EveryQuantifier {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'every') return false;

    if (!('scope' in value) || value['scope'] === undefined) return false;
    return true;
}

export function EveryQuantifierFromJSON(json: any): EveryQuantifier {
    return EveryQuantifierFromJSONTyped(json, false);
}

export function EveryQuantifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): EveryQuantifier {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'scope': json['scope'],
    };
}

export function EveryQuantifierToJSON(json: any): EveryQuantifier {
    return EveryQuantifierToJSONTyped(json, false);
}

export function EveryQuantifierToJSONTyped(value?: EveryQuantifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'scope': value['scope'],
    };
}
