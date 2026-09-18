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
import type { ScenarioOperation } from './ScenarioOperation.js';
import {
    ScenarioOperationFromJSON,
    ScenarioOperationFromJSONTyped,
    ScenarioOperationToJSON,
    ScenarioOperationToJSONTyped,
} from './ScenarioOperation.js';

/**
 *
 * @export
 * @interface ScenarioRunCommandResponse
 */
export interface ScenarioRunCommandResponse {
    /**
     *
     * @type {boolean}
     * @memberof ScenarioRunCommandResponse
     */
    success: boolean;
    /**
     *
     * @type {ScenarioOperation}
     * @memberof ScenarioRunCommandResponse
     */
    operation: ScenarioOperation;
    /**
     *
     * @type {ScenarioRun}
     * @memberof ScenarioRunCommandResponse
     */
    run: ScenarioRun;
}

/**
 * Check if a given object implements the ScenarioRunCommandResponse interface.
 */
export function instanceOfScenarioRunCommandResponse(value: object): value is ScenarioRunCommandResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('operation' in value) || value['operation'] === undefined) return false;
    if (!('run' in value) || value['run'] === undefined) return false;
    return true;
}

export function ScenarioRunCommandResponseFromJSON(json: any): ScenarioRunCommandResponse {
    return ScenarioRunCommandResponseFromJSONTyped(json, false);
}

export function ScenarioRunCommandResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunCommandResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'operation': ScenarioOperationFromJSON(json['operation']),
        'run': ScenarioRunFromJSON(json['run']),
    };
}

export function ScenarioRunCommandResponseToJSON(json: any): ScenarioRunCommandResponse {
    return ScenarioRunCommandResponseToJSONTyped(json, false);
}

export function ScenarioRunCommandResponseToJSONTyped(value?: ScenarioRunCommandResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'operation': ScenarioOperationToJSON(value['operation']),
        'run': ScenarioRunToJSON(value['run']),
    };
}
