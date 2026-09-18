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
 * @interface ExtractStage
 */
export interface ExtractStage {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ExtractStage
     */
    id: string;
    /**
     * Materialize declared semantic facts using binding/runtime-provided sources. Every declared fact must appear in exactly one extract stage.
     * @type {ExtractStageKindEnum}
     * @memberof ExtractStage
     */
    kind: ExtractStageKindEnum;
    /**
     *
     * @type {Set<string>}
     * @memberof ExtractStage
     */
    facts: Set<string>;
}


/**
 * @export
 */
export const ExtractStageKindEnum = {
    Extract: 'extract',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ExtractStageKindEnum = typeof ExtractStageKindEnum[keyof typeof ExtractStageKindEnum];


/**
 * Check if a given object implements the ExtractStage interface.
 */
export function instanceOfExtractStage(value: object): value is ExtractStage {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'extract') return false;

    if (!('facts' in value) || value['facts'] === undefined) return false;
    return true;
}

export function ExtractStageFromJSON(json: any): ExtractStage {
    return ExtractStageFromJSONTyped(json, false);
}

export function ExtractStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtractStage {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
        'facts': new Set(json['facts']),
    };
}

export function ExtractStageToJSON(json: any): ExtractStage {
    return ExtractStageToJSONTyped(json, false);
}

export function ExtractStageToJSONTyped(value?: ExtractStage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
        'facts': Array.from(value['facts'] as Set<any>),
    };
}
