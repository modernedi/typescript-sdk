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
import type { UsageSnapshot } from './UsageSnapshot.js';
import {
    UsageSnapshotFromJSON,
    UsageSnapshotFromJSONTyped,
    UsageSnapshotToJSON,
    UsageSnapshotToJSONTyped,
} from './UsageSnapshot.js';

/**
 * Current UTC-day message quota, enforcement state, history, and workload signals.
 * @export
 * @interface UsageResponse
 */
export interface UsageResponse {
    /**
     * Always `true`; authorization or telemetry failures use an error response.
     * @type {boolean}
     * @memberof UsageResponse
     */
    success: boolean;
    /**
     *
     * @type {UsageSnapshot}
     * @memberof UsageResponse
     */
    usage: UsageSnapshot;
}

/**
 * Check if a given object implements the UsageResponse interface.
 */
export function instanceOfUsageResponse(value: object): value is UsageResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('usage' in value) || value['usage'] === undefined) return false;
    return true;
}

export function UsageResponseFromJSON(json: any): UsageResponse {
    return UsageResponseFromJSONTyped(json, false);
}

export function UsageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsageResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'usage': UsageSnapshotFromJSON(json['usage']),
    };
}

export function UsageResponseToJSON(json: any): UsageResponse {
    return UsageResponseToJSONTyped(json, false);
}

export function UsageResponseToJSONTyped(value?: UsageResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'usage': UsageSnapshotToJSON(value['usage']),
    };
}
