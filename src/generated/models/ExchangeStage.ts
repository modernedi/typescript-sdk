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
 * @interface ExchangeStage
 */
export interface ExchangeStage {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ExchangeStage
     */
    id: string;
    /**
     * Observe or perform the business-document exchange. Exactly one is required per step.
     * @type {ExchangeStageKindEnum}
     * @memberof ExchangeStage
     */
    kind: ExchangeStageKindEnum;
}


/**
 * @export
 */
export const ExchangeStageKindEnum = {
    Exchange: 'exchange',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ExchangeStageKindEnum = typeof ExchangeStageKindEnum[keyof typeof ExchangeStageKindEnum];


/**
 * Check if a given object implements the ExchangeStage interface.
 */
export function instanceOfExchangeStage(value: object): value is ExchangeStage {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'exchange') return false;

    return true;
}

export function ExchangeStageFromJSON(json: any): ExchangeStage {
    return ExchangeStageFromJSONTyped(json, false);
}

export function ExchangeStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeStage {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'kind': json['kind'],
    };
}

export function ExchangeStageToJSON(json: any): ExchangeStage {
    return ExchangeStageToJSONTyped(json, false);
}

export function ExchangeStageToJSONTyped(value?: ExchangeStage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'kind': value['kind'],
    };
}
