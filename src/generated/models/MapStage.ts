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
 * @interface MapStage
 */
export interface MapStage {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof MapStage
     */
    id: string;
    /**
     * Confirm the exact runtime mapping selected by an applied binding. A step may declare this stage once, immediately next to exchange. Apply requires it before exchange for outgoing documents and after exchange for incoming documents.
     * @type {MapStageKindEnum}
     * @memberof MapStage
     */
    kind: MapStageKindEnum;
}


/**
 * @export
 */
export const MapStageKindEnum = {
    Map: 'map',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MapStageKindEnum = typeof MapStageKindEnum[keyof typeof MapStageKindEnum];


/**
 * Check if a given object implements the MapStage interface.
 */
export function instanceOfMapStage(value: object): value is MapStage {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'map') return false;

    return true;
}

export function MapStageFromJSON(json: any): MapStage {
    return MapStageFromJSONTyped(json, false);
}

export function MapStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapStage {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
    };
}

export function MapStageToJSON(json: any): MapStage {
    return MapStageToJSONTyped(json, false);
}

export function MapStageToJSONTyped(value?: MapStage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
    };
}
