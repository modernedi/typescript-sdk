/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.36.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import { mapValues } from '../runtime.js';
/**
 *
 * @export
 * @interface ExplicitClosure
 */
export interface ExplicitClosure {
    /**
     * Wait for an explicit no-more-documents decision through the browser or advance API closeSteps field. The maximum is a safety limit, not an expected final count. Quantity equality alone never closes the step.
     * @type {ExplicitClosureKindEnum}
     * @memberof ExplicitClosure
     */
    kind: ExplicitClosureKindEnum;
}


/**
 * @export
 */
export const ExplicitClosureKindEnum = {
    Explicit: 'explicit',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ExplicitClosureKindEnum = typeof ExplicitClosureKindEnum[keyof typeof ExplicitClosureKindEnum];


/**
 * Check if a given object implements the ExplicitClosure interface.
 */
export function instanceOfExplicitClosure(value: object): value is ExplicitClosure {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'explicit') return false;

    return true;
}

export function ExplicitClosureFromJSON(json: any): ExplicitClosure {
    return ExplicitClosureFromJSONTyped(json, false);
}

export function ExplicitClosureFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExplicitClosure {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
    };
}

export function ExplicitClosureToJSON(json: any): ExplicitClosure {
    return ExplicitClosureToJSONTyped(json, false);
}

export function ExplicitClosureToJSONTyped(value?: ExplicitClosure | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
    };
}
