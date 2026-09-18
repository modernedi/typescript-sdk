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
 * @interface ObservationOnlyTarget
 */
export interface ObservationOnlyTarget {
    /**
     * ModernEDI observes and evaluates this step but does not initiate it.
     * @type {ObservationOnlyTargetKindEnum}
     * @memberof ObservationOnlyTarget
     */
    kind: ObservationOnlyTargetKindEnum;
}


/**
 * @export
 */
export const ObservationOnlyTargetKindEnum = {
    ObservationOnly: 'observation-only',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ObservationOnlyTargetKindEnum = typeof ObservationOnlyTargetKindEnum[keyof typeof ObservationOnlyTargetKindEnum];


/**
 * Check if a given object implements the ObservationOnlyTarget interface.
 */
export function instanceOfObservationOnlyTarget(value: object): value is ObservationOnlyTarget {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'observation-only') return false;

    return true;
}

export function ObservationOnlyTargetFromJSON(json: any): ObservationOnlyTarget {
    return ObservationOnlyTargetFromJSONTyped(json, false);
}

export function ObservationOnlyTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObservationOnlyTarget {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
    };
}

export function ObservationOnlyTargetToJSON(json: any): ObservationOnlyTarget {
    return ObservationOnlyTargetToJSONTyped(json, false);
}

export function ObservationOnlyTargetToJSONTyped(value?: ObservationOnlyTarget | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
    };
}
