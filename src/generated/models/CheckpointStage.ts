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
 * @interface CheckpointStage
 */
export interface CheckpointStage {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof CheckpointStage
     */
    id: string;
    /**
     * Emit a declared global checkpoint after the preceding stages complete. In v1, the containing step must have occurrence max 1 so the emitting occurrence is unambiguous.
     * @type {CheckpointStageKindEnum}
     * @memberof CheckpointStage
     */
    kind: CheckpointStageKindEnum;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof CheckpointStage
     */
    checkpoint: string;
}


/**
 * @export
 */
export const CheckpointStageKindEnum = {
    Checkpoint: 'checkpoint',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type CheckpointStageKindEnum = typeof CheckpointStageKindEnum[keyof typeof CheckpointStageKindEnum];


/**
 * Check if a given object implements the CheckpointStage interface.
 */
export function instanceOfCheckpointStage(value: object): value is CheckpointStage {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'checkpoint') return false;

    if (!('checkpoint' in value) || value['checkpoint'] === undefined) return false;
    return true;
}

export function CheckpointStageFromJSON(json: any): CheckpointStage {
    return CheckpointStageFromJSONTyped(json, false);
}

export function CheckpointStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckpointStage {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
        'checkpoint': json['checkpoint'],
    };
}

export function CheckpointStageToJSON(json: any): CheckpointStage {
    return CheckpointStageToJSONTyped(json, false);
}

export function CheckpointStageToJSONTyped(value?: CheckpointStage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
        'checkpoint': value['checkpoint'],
    };
}
