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
 * @interface AssureStage
 */
export interface AssureStage {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof AssureStage
     */
    id: string;
    /**
     * Evaluate the step's declared operational evidence requirements. A step may declare this stage at most once.
     * @type {AssureStageKindEnum}
     * @memberof AssureStage
     */
    kind: AssureStageKindEnum;
}


/**
 * @export
 */
export const AssureStageKindEnum = {
    Assure: 'assure',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type AssureStageKindEnum = typeof AssureStageKindEnum[keyof typeof AssureStageKindEnum];


/**
 * Check if a given object implements the AssureStage interface.
 */
export function instanceOfAssureStage(value: object): value is AssureStage {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'assure') return false;

    return true;
}

export function AssureStageFromJSON(json: any): AssureStage {
    return AssureStageFromJSONTyped(json, false);
}

export function AssureStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssureStage {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
    };
}

export function AssureStageToJSON(json: any): AssureStage {
    return AssureStageToJSONTyped(json, false);
}

export function AssureStageToJSONTyped(value?: AssureStage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
    };
}
