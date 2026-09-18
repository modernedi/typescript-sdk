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
 * @interface ScenarioRunTimelineOperationError
 */
export interface ScenarioRunTimelineOperationError {
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineOperationError
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineOperationError
     */
    message: string;
}

/**
 * Check if a given object implements the ScenarioRunTimelineOperationError interface.
 */
export function instanceOfScenarioRunTimelineOperationError(value: object): value is ScenarioRunTimelineOperationError {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function ScenarioRunTimelineOperationErrorFromJSON(json: any): ScenarioRunTimelineOperationError {
    return ScenarioRunTimelineOperationErrorFromJSONTyped(json, false);
}

export function ScenarioRunTimelineOperationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunTimelineOperationError {
    if (json == null) {
        return json;
    }
    return {

        'code': json['code'],
        'message': json['message'],
    };
}

export function ScenarioRunTimelineOperationErrorToJSON(json: any): ScenarioRunTimelineOperationError {
    return ScenarioRunTimelineOperationErrorToJSONTyped(json, false);
}

export function ScenarioRunTimelineOperationErrorToJSONTyped(value?: ScenarioRunTimelineOperationError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'code': value['code'],
        'message': value['message'],
    };
}
