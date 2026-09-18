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
 * @interface PrepareStage
 */
export interface PrepareStage {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof PrepareStage
     */
    id: string;
    /**
     * Journal that named run parameters are available. Every referenced parameter must either be required at run start or declare a default.
     * @type {PrepareStageKindEnum}
     * @memberof PrepareStage
     */
    kind: PrepareStageKindEnum;
    /**
     *
     * @type {Set<string>}
     * @memberof PrepareStage
     */
    parameters: Set<string>;
}


/**
 * @export
 */
export const PrepareStageKindEnum = {
    Prepare: 'prepare',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PrepareStageKindEnum = typeof PrepareStageKindEnum[keyof typeof PrepareStageKindEnum];


/**
 * Check if a given object implements the PrepareStage interface.
 */
export function instanceOfPrepareStage(value: object): value is PrepareStage {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'prepare') return false;

    if (!('parameters' in value) || value['parameters'] === undefined) return false;
    return true;
}

export function PrepareStageFromJSON(json: any): PrepareStage {
    return PrepareStageFromJSONTyped(json, false);
}

export function PrepareStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepareStage {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
        'parameters': new Set(json['parameters']),
    };
}

export function PrepareStageToJSON(json: any): PrepareStage {
    return PrepareStageToJSONTyped(json, false);
}

export function PrepareStageToJSONTyped(value?: PrepareStage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
        'parameters': Array.from(value['parameters'] as Set<any>),
    };
}
