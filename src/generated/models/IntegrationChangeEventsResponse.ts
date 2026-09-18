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
import type { TransactionAttentionFreshness } from './TransactionAttentionFreshness.js';
import {
    TransactionAttentionFreshnessFromJSON,
    TransactionAttentionFreshnessFromJSONTyped,
    TransactionAttentionFreshnessToJSON,
    TransactionAttentionFreshnessToJSONTyped,
} from './TransactionAttentionFreshness.js';
import type { IntegrationChangeEvent } from './IntegrationChangeEvent.js';
import {
    IntegrationChangeEventFromJSON,
    IntegrationChangeEventFromJSONTyped,
    IntegrationChangeEventToJSON,
    IntegrationChangeEventToJSONTyped,
} from './IntegrationChangeEvent.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Bootstrap cursor or chronological page of transaction-state invalidations.
 * @export
 * @interface IntegrationChangeEventsResponse
 */
export interface IntegrationChangeEventsResponse {
    /**
     * Always `true`; invalid or expired cursors use a structured error response.
     * @type {boolean}
     * @memberof IntegrationChangeEventsResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof IntegrationChangeEventsResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * Events strictly after the supplied cursor, ordered by detection sequence.
     * @type {Array<IntegrationChangeEvent>}
     * @memberof IntegrationChangeEventsResponse
     */
    events: Array<IntegrationChangeEvent>;
    /**
     * Opaque, integrity-protected cursor bound to this tenant and environment. Return it unchanged on the next poll, including after an empty page. Editing it or using it for another tenant or environment returns HTTP 400.
     *
     * @type {string}
     * @memberof IntegrationChangeEventsResponse
     */
    nextCursor: string;
    /**
     * True when another page is already available after `nextCursor`.
     * @type {boolean}
     * @memberof IntegrationChangeEventsResponse
     */
    hasMore: boolean;
    /**
     * True only when the request omitted `cursor` and established a high-water mark.
     * @type {boolean}
     * @memberof IntegrationChangeEventsResponse
     */
    bootstrap: boolean;
    /**
     * Rolling retention of this invalidation feed; independent of transaction-document retention.
     * @type {number}
     * @memberof IntegrationChangeEventsResponse
     */
    retentionSeconds: number;
    /**
     *
     * @type {TransactionAttentionFreshness}
     * @memberof IntegrationChangeEventsResponse
     */
    freshness: TransactionAttentionFreshness;
}



/**
 * Check if a given object implements the IntegrationChangeEventsResponse interface.
 */
export function instanceOfIntegrationChangeEventsResponse(value: object): value is IntegrationChangeEventsResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('events' in value) || value['events'] === undefined) return false;
    if (!('nextCursor' in value) || value['nextCursor'] === undefined) return false;
    if (!('hasMore' in value) || value['hasMore'] === undefined) return false;
    if (!('bootstrap' in value) || value['bootstrap'] === undefined) return false;
    if (!('retentionSeconds' in value) || value['retentionSeconds'] === undefined) return false;
    if (!('freshness' in value) || value['freshness'] === undefined) return false;
    return true;
}

export function IntegrationChangeEventsResponseFromJSON(json: any): IntegrationChangeEventsResponse {
    return IntegrationChangeEventsResponseFromJSONTyped(json, false);
}

export function IntegrationChangeEventsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationChangeEventsResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'events': ((json['events'] as Array<any>).map(IntegrationChangeEventFromJSON)),
        'nextCursor': json['nextCursor'],
        'hasMore': json['hasMore'],
        'bootstrap': json['bootstrap'],
        'retentionSeconds': json['retentionSeconds'],
        'freshness': TransactionAttentionFreshnessFromJSON(json['freshness']),
    };
}

export function IntegrationChangeEventsResponseToJSON(json: any): IntegrationChangeEventsResponse {
    return IntegrationChangeEventsResponseToJSONTyped(json, false);
}

export function IntegrationChangeEventsResponseToJSONTyped(value?: IntegrationChangeEventsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'events': ((value['events'] as Array<any>).map(IntegrationChangeEventToJSON)),
        'nextCursor': value['nextCursor'],
        'hasMore': value['hasMore'],
        'bootstrap': value['bootstrap'],
        'retentionSeconds': value['retentionSeconds'],
        'freshness': TransactionAttentionFreshnessToJSON(value['freshness']),
    };
}
