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
import type { MappedOutputMessage } from './MappedOutputMessage.js';
import {
    MappedOutputMessageFromJSON,
    MappedOutputMessageFromJSONTyped,
    MappedOutputMessageToJSON,
    MappedOutputMessageToJSONTyped,
} from './MappedOutputMessage.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * One bounded poll of application-facing mapped outputs from the selected environment.
 * @export
 * @interface MappedOutputQueueResponse
 */
export interface MappedOutputQueueResponse {
    /**
     * Always `true`; authentication or queue failures use the documented error response instead.
     * @type {boolean}
     * @memberof MappedOutputQueueResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof MappedOutputQueueResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * Outputs leased to this poll; acknowledge each successfully persisted item using its id and latest receipt handle.
     * @type {Array<MappedOutputMessage>}
     * @memberof MappedOutputQueueResponse
     */
    messages: Array<MappedOutputMessage>;
    /**
     * Maximum number of deliverable messages requested for this poll, after server bounds are applied.
     * @type {number}
     * @memberof MappedOutputQueueResponse
     */
    limit: number;
    /**
     * Lease duration in seconds; unacknowledged messages may be redelivered after this interval.
     * @type {number}
     * @memberof MappedOutputQueueResponse
     */
    visibilityTimeoutSeconds: number;
    /**
     * Opaque position for the next bounded scan. Send this value as the next poll's `cursor` whenever `hasMore` is true.
     *
     * @type {string}
     * @memberof MappedOutputQueueResponse
     */
    nextCursor: string | null;
    /**
     * True when `nextCursor` should be used to continue scanning.
     * @type {boolean}
     * @memberof MappedOutputQueueResponse
     */
    hasMore: boolean;
}



/**
 * Check if a given object implements the MappedOutputQueueResponse interface.
 */
export function instanceOfMappedOutputQueueResponse(value: object): value is MappedOutputQueueResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('messages' in value) || value['messages'] === undefined) return false;
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('visibilityTimeoutSeconds' in value) || value['visibilityTimeoutSeconds'] === undefined) return false;
    if (!('nextCursor' in value) || value['nextCursor'] === undefined) return false;
    if (!('hasMore' in value) || value['hasMore'] === undefined) return false;
    return true;
}

export function MappedOutputQueueResponseFromJSON(json: any): MappedOutputQueueResponse {
    return MappedOutputQueueResponseFromJSONTyped(json, false);
}

export function MappedOutputQueueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputQueueResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'messages': ((json['messages'] as Array<any>).map(MappedOutputMessageFromJSON)),
        'limit': json['limit'],
        'visibilityTimeoutSeconds': json['visibilityTimeoutSeconds'],
        'nextCursor': json['nextCursor'],
        'hasMore': json['hasMore'],
    };
}

export function MappedOutputQueueResponseToJSON(json: any): MappedOutputQueueResponse {
    return MappedOutputQueueResponseToJSONTyped(json, false);
}

export function MappedOutputQueueResponseToJSONTyped(value?: MappedOutputQueueResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'messages': ((value['messages'] as Array<any>).map(MappedOutputMessageToJSON)),
        'limit': value['limit'],
        'visibilityTimeoutSeconds': value['visibilityTimeoutSeconds'],
        'nextCursor': value['nextCursor'],
        'hasMore': value['hasMore'],
    };
}
