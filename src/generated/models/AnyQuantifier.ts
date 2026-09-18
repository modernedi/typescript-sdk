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
 * @interface AnyQuantifier
 */
export interface AnyQuantifier {
    /**
     *
     * @type {AnyQuantifierKindEnum}
     * @memberof AnyQuantifier
     */
    kind: AnyQuantifierKindEnum;
    /**
     *
     * @type {AnyQuantifierScopeEnum}
     * @memberof AnyQuantifier
     */
    scope: AnyQuantifierScopeEnum;
}


/**
 * @export
 */
export const AnyQuantifierKindEnum = {
    Any: 'any',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type AnyQuantifierKindEnum = typeof AnyQuantifierKindEnum[keyof typeof AnyQuantifierKindEnum];

/**
 * @export
 */
export const AnyQuantifierScopeEnum = {
    From: 'from',
    To: 'to',
    Pairs: 'pairs',
    PerFrom: 'per_from',
    PerTo: 'per_to',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type AnyQuantifierScopeEnum = typeof AnyQuantifierScopeEnum[keyof typeof AnyQuantifierScopeEnum];


/**
 * Check if a given object implements the AnyQuantifier interface.
 */
export function instanceOfAnyQuantifier(value: object): value is AnyQuantifier {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'any') return false;

    if (!('scope' in value) || value['scope'] === undefined) return false;
    return true;
}

export function AnyQuantifierFromJSON(json: any): AnyQuantifier {
    return AnyQuantifierFromJSONTyped(json, false);
}

export function AnyQuantifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnyQuantifier {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'scope': json['scope'],
    };
}

export function AnyQuantifierToJSON(json: any): AnyQuantifier {
    return AnyQuantifierToJSONTyped(json, false);
}

export function AnyQuantifierToJSONTyped(value?: AnyQuantifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'scope': value['scope'],
    };
}
