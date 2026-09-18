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
import type { ScenarioRunSummary } from './ScenarioRunSummary.js';
import {
    ScenarioRunSummaryFromJSON,
    ScenarioRunSummaryFromJSONTyped,
    ScenarioRunSummaryToJSON,
    ScenarioRunSummaryToJSONTyped,
} from './ScenarioRunSummary.js';

/**
 *
 * @export
 * @interface ScenarioRunCollection
 */
export interface ScenarioRunCollection {
    /**
     *
     * @type {ScenarioRunCollectionApiVersionEnum}
     * @memberof ScenarioRunCollection
     */
    apiVersion: ScenarioRunCollectionApiVersionEnum;
    /**
     *
     * @type {ScenarioRunCollectionKindEnum}
     * @memberof ScenarioRunCollection
     */
    kind: ScenarioRunCollectionKindEnum;
    /**
     *
     * @type {Array<ScenarioRunSummary>}
     * @memberof ScenarioRunCollection
     */
    runs: Array<ScenarioRunSummary>;
    /**
     * Opaque tenant-bound keyset cursor for the next page, or null when history is exhausted.
     * @type {string}
     * @memberof ScenarioRunCollection
     */
    nextCursor: string | null;
}


/**
 * @export
 */
export const ScenarioRunCollectionApiVersionEnum = {
    ModernediComScenarioPlatformV1: 'modernedi.com/scenario-platform/v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunCollectionApiVersionEnum = typeof ScenarioRunCollectionApiVersionEnum[keyof typeof ScenarioRunCollectionApiVersionEnum];

/**
 * @export
 */
export const ScenarioRunCollectionKindEnum = {
    ScenarioRunCollection: 'scenario_run_collection',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunCollectionKindEnum = typeof ScenarioRunCollectionKindEnum[keyof typeof ScenarioRunCollectionKindEnum];


/**
 * Check if a given object implements the ScenarioRunCollection interface.
 */
export function instanceOfScenarioRunCollection(value: object): value is ScenarioRunCollection {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined) return false;
    if (value['apiVersion'] !== 'modernedi.com/scenario-platform/v1') return false;

    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'scenario_run_collection') return false;

    if (!('runs' in value) || value['runs'] === undefined) return false;
    if (!('nextCursor' in value) || value['nextCursor'] === undefined) return false;
    return true;
}

export function ScenarioRunCollectionFromJSON(json: any): ScenarioRunCollection {
    return ScenarioRunCollectionFromJSONTyped(json, false);
}

export function ScenarioRunCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunCollection {
    if (json == null) {
        return json;
    }
    return {

        'apiVersion': json['apiVersion'],
        'kind': json['kind'],
        'runs': ((json['runs'] as Array<any>).map(ScenarioRunSummaryFromJSON)),
        'nextCursor': json['nextCursor'],
    };
}

export function ScenarioRunCollectionToJSON(json: any): ScenarioRunCollection {
    return ScenarioRunCollectionToJSONTyped(json, false);
}

export function ScenarioRunCollectionToJSONTyped(value?: ScenarioRunCollection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'runs': ((value['runs'] as Array<any>).map(ScenarioRunSummaryToJSON)),
        'nextCursor': value['nextCursor'],
    };
}
