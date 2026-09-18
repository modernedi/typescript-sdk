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
 * @interface TimeModernEDIObservedTheRevision
 */
export interface TimeModernEDIObservedTheRevision {
    /**
     *
     * @type {TimeModernEDIObservedTheRevisionKindEnum}
     * @memberof TimeModernEDIObservedTheRevision
     */
    kind: TimeModernEDIObservedTheRevisionKindEnum;
}


/**
 * @export
 */
export const TimeModernEDIObservedTheRevisionKindEnum = {
    ObservedAt: 'observed_at',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TimeModernEDIObservedTheRevisionKindEnum = typeof TimeModernEDIObservedTheRevisionKindEnum[keyof typeof TimeModernEDIObservedTheRevisionKindEnum];


/**
 * Check if a given object implements the TimeModernEDIObservedTheRevision interface.
 */
export function instanceOfTimeModernEDIObservedTheRevision(value: object): value is TimeModernEDIObservedTheRevision {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'observed_at') return false;

    return true;
}

export function TimeModernEDIObservedTheRevisionFromJSON(json: any): TimeModernEDIObservedTheRevision {
    return TimeModernEDIObservedTheRevisionFromJSONTyped(json, false);
}

export function TimeModernEDIObservedTheRevisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeModernEDIObservedTheRevision {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
    };
}

export function TimeModernEDIObservedTheRevisionToJSON(json: any): TimeModernEDIObservedTheRevision {
    return TimeModernEDIObservedTheRevisionToJSONTyped(json, false);
}

export function TimeModernEDIObservedTheRevisionToJSONTyped(value?: TimeModernEDIObservedTheRevision | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
    };
}
