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
 * @interface RuntimeMappingTarget
 */
export interface RuntimeMappingTarget {
    /**
     *
     * @type {RuntimeMappingTargetKindEnum}
     * @memberof RuntimeMappingTarget
     */
    kind: RuntimeMappingTargetKindEnum;
    /**
     * Stable Mapping resource key in this configuration bundle; resolved to a workspace ID during apply.
     * @type {string}
     * @memberof RuntimeMappingTarget
     */
    mappingKey: string;
}


/**
 * @export
 */
export const RuntimeMappingTargetKindEnum = {
    RuntimeMapping: 'runtime-mapping',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type RuntimeMappingTargetKindEnum = typeof RuntimeMappingTargetKindEnum[keyof typeof RuntimeMappingTargetKindEnum];


/**
 * Check if a given object implements the RuntimeMappingTarget interface.
 */
export function instanceOfRuntimeMappingTarget(value: object): value is RuntimeMappingTarget {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'runtime-mapping') return false;

    if (!('mappingKey' in value) || value['mappingKey'] === undefined) return false;
    return true;
}

export function RuntimeMappingTargetFromJSON(json: any): RuntimeMappingTarget {
    return RuntimeMappingTargetFromJSONTyped(json, false);
}

export function RuntimeMappingTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeMappingTarget {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'mappingKey': json['mappingKey'],
    };
}

export function RuntimeMappingTargetToJSON(json: any): RuntimeMappingTarget {
    return RuntimeMappingTargetToJSONTyped(json, false);
}

export function RuntimeMappingTargetToJSONTyped(value?: RuntimeMappingTarget | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'mappingKey': value['mappingKey'],
    };
}
