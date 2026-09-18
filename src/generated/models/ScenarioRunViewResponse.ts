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
import type { ScenarioRun } from './ScenarioRun.js';
import {
    ScenarioRunFromJSON,
    ScenarioRunFromJSONTyped,
    ScenarioRunToJSON,
    ScenarioRunToJSONTyped,
} from './ScenarioRun.js';

/**
 *
 * @export
 * @interface ScenarioRunViewResponse
 */
export interface ScenarioRunViewResponse {
    /**
     *
     * @type {boolean}
     * @memberof ScenarioRunViewResponse
     */
    success: boolean;
    /**
     *
     * @type {ScenarioRun}
     * @memberof ScenarioRunViewResponse
     */
    run: ScenarioRun;
}

/**
 * Check if a given object implements the ScenarioRunViewResponse interface.
 */
export function instanceOfScenarioRunViewResponse(value: object): value is ScenarioRunViewResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('run' in value) || value['run'] === undefined) return false;
    return true;
}

export function ScenarioRunViewResponseFromJSON(json: any): ScenarioRunViewResponse {
    return ScenarioRunViewResponseFromJSONTyped(json, false);
}

export function ScenarioRunViewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunViewResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'run': ScenarioRunFromJSON(json['run']),
    };
}

export function ScenarioRunViewResponseToJSON(json: any): ScenarioRunViewResponse {
    return ScenarioRunViewResponseToJSONTyped(json, false);
}

export function ScenarioRunViewResponseToJSONTyped(value?: ScenarioRunViewResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'run': ScenarioRunToJSON(value['run']),
    };
}
