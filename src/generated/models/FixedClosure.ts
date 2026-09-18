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
 * @interface FixedClosure
 */
export interface FixedClosure {
    /**
     * Close after the fixed min=max count is observed. Example: an 850 step with min=1 and max=1 closes after its one purchase order.
     * @type {FixedClosureKindEnum}
     * @memberof FixedClosure
     */
    kind: FixedClosureKindEnum;
}


/**
 * @export
 */
export const FixedClosureKindEnum = {
    Fixed: 'fixed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type FixedClosureKindEnum = typeof FixedClosureKindEnum[keyof typeof FixedClosureKindEnum];


/**
 * Check if a given object implements the FixedClosure interface.
 */
export function instanceOfFixedClosure(value: object): value is FixedClosure {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'fixed') return false;

    return true;
}

export function FixedClosureFromJSON(json: any): FixedClosure {
    return FixedClosureFromJSONTyped(json, false);
}

export function FixedClosureFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedClosure {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
    };
}

export function FixedClosureToJSON(json: any): FixedClosure {
    return FixedClosureToJSONTyped(json, false);
}

export function FixedClosureToJSONTyped(value?: FixedClosure | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
    };
}
