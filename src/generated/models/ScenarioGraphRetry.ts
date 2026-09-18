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
 * @interface ScenarioGraphRetry
 */
export interface ScenarioGraphRetry {
    /**
     *
     * @type {ScenarioGraphRetryModeEnum}
     * @memberof ScenarioGraphRetry
     */
    mode: ScenarioGraphRetryModeEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphRetry
     */
    reason: string;
    /**
     *
     * @type {boolean}
     * @memberof ScenarioGraphRetry
     */
    requiresApiKey: boolean;
}


/**
 * @export
 */
export const ScenarioGraphRetryModeEnum = {
    Advance: 'advance',
    ReconcileOnly: 'reconcile_only',
    Terminal: 'terminal',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphRetryModeEnum = typeof ScenarioGraphRetryModeEnum[keyof typeof ScenarioGraphRetryModeEnum];


/**
 * Check if a given object implements the ScenarioGraphRetry interface.
 */
export function instanceOfScenarioGraphRetry(value: object): value is ScenarioGraphRetry {
    if (!('mode' in value) || value['mode'] === undefined) return false;
    if (!('reason' in value) || value['reason'] === undefined) return false;
    if (!('requiresApiKey' in value) || value['requiresApiKey'] === undefined) return false;
    return true;
}

export function ScenarioGraphRetryFromJSON(json: any): ScenarioGraphRetry {
    return ScenarioGraphRetryFromJSONTyped(json, false);
}

export function ScenarioGraphRetryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphRetry {
    if (json == null) {
        return json;
    }
    return {

        'mode': json['mode'],
        'reason': json['reason'],
        'requiresApiKey': json['requiresApiKey'],
    };
}

export function ScenarioGraphRetryToJSON(json: any): ScenarioGraphRetry {
    return ScenarioGraphRetryToJSONTyped(json, false);
}

export function ScenarioGraphRetryToJSONTyped(value?: ScenarioGraphRetry | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'mode': value['mode'],
        'reason': value['reason'],
        'requiresApiKey': value['requiresApiKey'],
    };
}
