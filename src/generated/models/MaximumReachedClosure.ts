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
 * @interface MaximumReachedClosure
 */
export interface MaximumReachedClosure {
    /**
     * Close only when the declared maximum count is observed. Example: a 315 status step with max=2 closes after the second status document.
     * @type {MaximumReachedClosureKindEnum}
     * @memberof MaximumReachedClosure
     */
    kind: MaximumReachedClosureKindEnum;
}


/**
 * @export
 */
export const MaximumReachedClosureKindEnum = {
    MaxReached: 'max_reached',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MaximumReachedClosureKindEnum = typeof MaximumReachedClosureKindEnum[keyof typeof MaximumReachedClosureKindEnum];


/**
 * Check if a given object implements the MaximumReachedClosure interface.
 */
export function instanceOfMaximumReachedClosure(value: object): value is MaximumReachedClosure {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'max_reached') return false;

    return true;
}

export function MaximumReachedClosureFromJSON(json: any): MaximumReachedClosure {
    return MaximumReachedClosureFromJSONTyped(json, false);
}

export function MaximumReachedClosureFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaximumReachedClosure {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
    };
}

export function MaximumReachedClosureToJSON(json: any): MaximumReachedClosure {
    return MaximumReachedClosureToJSONTyped(json, false);
}

export function MaximumReachedClosureToJSONTyped(value?: MaximumReachedClosure | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
    };
}
