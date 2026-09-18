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
 * @interface AdapterTarget
 */
export interface AdapterTarget {
    /**
     *
     * @type {AdapterTargetKindEnum}
     * @memberof AdapterTarget
     */
    kind: AdapterTargetKindEnum;
    /**
     * Registered active executor adapter ID. Apply verifies it implements this definition and step.
     * @type {string}
     * @memberof AdapterTarget
     */
    adapterId: string;
    /**
     * Stable Mapping resource key in this configuration bundle; resolved to a workspace ID during apply.
     * @type {string}
     * @memberof AdapterTarget
     */
    mappingKey?: string;
}


/**
 * @export
 */
export const AdapterTargetKindEnum = {
    Adapter: 'adapter',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type AdapterTargetKindEnum = typeof AdapterTargetKindEnum[keyof typeof AdapterTargetKindEnum];


/**
 * Check if a given object implements the AdapterTarget interface.
 */
export function instanceOfAdapterTarget(value: object): value is AdapterTarget {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'adapter') return false;

    if (!('adapterId' in value) || value['adapterId'] === undefined) return false;
    return true;
}

export function AdapterTargetFromJSON(json: any): AdapterTarget {
    return AdapterTargetFromJSONTyped(json, false);
}

export function AdapterTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdapterTarget {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'adapterId': json['adapterId'],
        'mappingKey': json['mappingKey'] == null ? undefined : json['mappingKey'],
    };
}

export function AdapterTargetToJSON(json: any): AdapterTarget {
    return AdapterTargetToJSONTyped(json, false);
}

export function AdapterTargetToJSONTyped(value?: AdapterTarget | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'adapterId': value['adapterId'],
        'mappingKey': value['mappingKey'],
    };
}
