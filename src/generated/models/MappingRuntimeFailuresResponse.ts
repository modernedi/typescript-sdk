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
import type { TransactionMappingAttempt } from './TransactionMappingAttempt.js';
import {
    TransactionMappingAttemptFromJSON,
    TransactionMappingAttemptFromJSONTyped,
    TransactionMappingAttemptToJSON,
    TransactionMappingAttemptToJSONTyped,
} from './TransactionMappingAttempt.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 *
 * @export
 * @interface MappingRuntimeFailuresResponse
 */
export interface MappingRuntimeFailuresResponse {
    /**
     * Always `true`; invalid filters, cursors, or runtime-read failures use an error response.
     * @type {boolean}
     * @memberof MappingRuntimeFailuresResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof MappingRuntimeFailuresResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * Reverse-chronological safe diagnostics matching the supplied environment and filters.
     * @type {Array<TransactionMappingAttempt>}
     * @memberof MappingRuntimeFailuresResponse
     */
    failures: Array<TransactionMappingAttempt>;
    /**
     * Opaque cursor for the next page, or `null` when this page is complete.
     * @type {string}
     * @memberof MappingRuntimeFailuresResponse
     */
    nextCursor: string | null;
    /**
     * True when `nextCursor` should be sent back for another page.
     * @type {boolean}
     * @memberof MappingRuntimeFailuresResponse
     */
    hasMore: boolean;
}



/**
 * Check if a given object implements the MappingRuntimeFailuresResponse interface.
 */
export function instanceOfMappingRuntimeFailuresResponse(value: object): value is MappingRuntimeFailuresResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('failures' in value) || value['failures'] === undefined) return false;
    if (!('nextCursor' in value) || value['nextCursor'] === undefined) return false;
    if (!('hasMore' in value) || value['hasMore'] === undefined) return false;
    return true;
}

export function MappingRuntimeFailuresResponseFromJSON(json: any): MappingRuntimeFailuresResponse {
    return MappingRuntimeFailuresResponseFromJSONTyped(json, false);
}

export function MappingRuntimeFailuresResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingRuntimeFailuresResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'failures': ((json['failures'] as Array<any>).map(TransactionMappingAttemptFromJSON)),
        'nextCursor': json['nextCursor'],
        'hasMore': json['hasMore'],
    };
}

export function MappingRuntimeFailuresResponseToJSON(json: any): MappingRuntimeFailuresResponse {
    return MappingRuntimeFailuresResponseToJSONTyped(json, false);
}

export function MappingRuntimeFailuresResponseToJSONTyped(value?: MappingRuntimeFailuresResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'failures': ((value['failures'] as Array<any>).map(TransactionMappingAttemptToJSON)),
        'nextCursor': value['nextCursor'],
        'hasMore': value['hasMore'],
    };
}
