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
 * @interface ExpectedCountClosure
 */
export interface ExpectedCountClosure {
    /**
     * Close when the number of occurrences reaches an exact integer supplied by a required run parameter or a declared default. The value must fit this step's occurrence bounds; steps sharing one count parameter must have overlapping bounds. Example: expectedShipmentCount=2 closes a repeated 945 step after two shipping-advice documents.
     * @type {ExpectedCountClosureKindEnum}
     * @memberof ExpectedCountClosure
     */
    kind: ExpectedCountClosureKindEnum;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ExpectedCountClosure
     */
    parameter: string;
}


/**
 * @export
 */
export const ExpectedCountClosureKindEnum = {
    ExpectedCount: 'expected_count',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ExpectedCountClosureKindEnum = typeof ExpectedCountClosureKindEnum[keyof typeof ExpectedCountClosureKindEnum];


/**
 * Check if a given object implements the ExpectedCountClosure interface.
 */
export function instanceOfExpectedCountClosure(value: object): value is ExpectedCountClosure {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'expected_count') return false;

    if (!('parameter' in value) || value['parameter'] === undefined) return false;
    return true;
}

export function ExpectedCountClosureFromJSON(json: any): ExpectedCountClosure {
    return ExpectedCountClosureFromJSONTyped(json, false);
}

export function ExpectedCountClosureFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpectedCountClosure {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'parameter': json['parameter'],
    };
}

export function ExpectedCountClosureToJSON(json: any): ExpectedCountClosure {
    return ExpectedCountClosureToJSONTyped(json, false);
}

export function ExpectedCountClosureToJSONTyped(value?: ExpectedCountClosure | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'parameter': value['parameter'],
    };
}
