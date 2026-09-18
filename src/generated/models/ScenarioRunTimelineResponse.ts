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
import type { ScenarioRunTimelineOperation } from './ScenarioRunTimelineOperation.js';
import {
    ScenarioRunTimelineOperationFromJSON,
    ScenarioRunTimelineOperationFromJSONTyped,
    ScenarioRunTimelineOperationToJSON,
    ScenarioRunTimelineOperationToJSONTyped,
} from './ScenarioRunTimelineOperation.js';

/**
 *
 * @export
 * @interface ScenarioRunTimelineResponse
 */
export interface ScenarioRunTimelineResponse {
    /**
     *
     * @type {boolean}
     * @memberof ScenarioRunTimelineResponse
     */
    success: boolean;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunTimelineResponse
     */
    runId: string;
    /**
     *
     * @type {Array<ScenarioRunTimelineOperation>}
     * @memberof ScenarioRunTimelineResponse
     */
    operations: Array<ScenarioRunTimelineOperation>;
    /**
     * Opaque tenant-and-run-bound keyset cursor for the next page, or null when the timeline is exhausted.
     * @type {string}
     * @memberof ScenarioRunTimelineResponse
     */
    nextCursor: string | null;
}

/**
 * Check if a given object implements the ScenarioRunTimelineResponse interface.
 */
export function instanceOfScenarioRunTimelineResponse(value: object): value is ScenarioRunTimelineResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('runId' in value) || value['runId'] === undefined) return false;
    if (!('operations' in value) || value['operations'] === undefined) return false;
    if (!('nextCursor' in value) || value['nextCursor'] === undefined) return false;
    return true;
}

export function ScenarioRunTimelineResponseFromJSON(json: any): ScenarioRunTimelineResponse {
    return ScenarioRunTimelineResponseFromJSONTyped(json, false);
}

export function ScenarioRunTimelineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunTimelineResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'runId': json['runId'],
        'operations': ((json['operations'] as Array<any>).map(ScenarioRunTimelineOperationFromJSON)),
        'nextCursor': json['nextCursor'],
    };
}

export function ScenarioRunTimelineResponseToJSON(json: any): ScenarioRunTimelineResponse {
    return ScenarioRunTimelineResponseToJSONTyped(json, false);
}

export function ScenarioRunTimelineResponseToJSONTyped(value?: ScenarioRunTimelineResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'runId': value['runId'],
        'operations': ((value['operations'] as Array<any>).map(ScenarioRunTimelineOperationToJSON)),
        'nextCursor': value['nextCursor'],
    };
}
