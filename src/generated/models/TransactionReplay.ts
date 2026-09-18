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
import type { TransactionReplayError } from './TransactionReplayError.js';
import {
    TransactionReplayErrorFromJSON,
    TransactionReplayErrorFromJSONTyped,
    TransactionReplayErrorToJSON,
    TransactionReplayErrorToJSONTyped,
} from './TransactionReplayError.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Persisted audit and lifecycle state for one transaction replay.
 * @export
 * @interface TransactionReplay
 */
export interface TransactionReplay {
    /**
     * Globally unique replay identifier used to correlate regenerated mapping attempts.
     * @type {string}
     * @memberof TransactionReplay
     */
    id: string;
    /**
     * Current replay lifecycle; a synchronous success normally returns `succeeded`.
     * @type {TransactionReplayStatusEnum}
     * @memberof TransactionReplay
     */
    status: TransactionReplayStatusEnum;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionReplay
     */
    environment: TransactionEnvironmentValue;
    /**
     * Source inbound AS2 Message-Id replayed by this operation.
     * @type {string}
     * @memberof TransactionReplay
     */
    messageId: string;
    /**
     * Source transaction key within the message replayed by this operation.
     * @type {string}
     * @memberof TransactionReplay
     */
    transactionKey: string;
    /**
     * Mapping revision policy; public replays always use the maps currently published.
     * @type {TransactionReplayModeEnum}
     * @memberof TransactionReplay
     */
    mode: TransactionReplayModeEnum;
    /**
     * Delivery boundary; public replay outputs are returned in the response and never queued or pushed.
     * @type {TransactionReplayDeliveryEnum}
     * @memberof TransactionReplay
     */
    delivery: TransactionReplayDeliveryEnum;
    /**
     * Caller-supplied operator context, or `null` when no reason was provided.
     * @type {string}
     * @memberof TransactionReplay
     */
    reason: string | null;
    /**
     * Internal id of the scoped Integration API key that requested the replay.
     * @type {number}
     * @memberof TransactionReplay
     */
    requestedByApiKeyId: number;
    /**
     * Number of replay execution attempts recorded for this request.
     * @type {number}
     * @memberof TransactionReplay
     */
    attempts: number;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof TransactionReplay
     */
    requestedAt: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionReplay
     */
    startedAt: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionReplay
     */
    completedAt: string | null;
    /**
     *
     * @type {TransactionReplayError}
     * @memberof TransactionReplay
     */
    error: TransactionReplayError | null;
}


/**
 * @export
 */
export const TransactionReplayStatusEnum = {
    Succeeded: 'succeeded',
    Processing: 'processing',
    Failed: 'failed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionReplayStatusEnum = typeof TransactionReplayStatusEnum[keyof typeof TransactionReplayStatusEnum];

/**
 * @export
 */
export const TransactionReplayModeEnum = {
    CurrentMaps: 'current_maps',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionReplayModeEnum = typeof TransactionReplayModeEnum[keyof typeof TransactionReplayModeEnum];

/**
 * @export
 */
export const TransactionReplayDeliveryEnum = {
    ResponseOnly: 'response_only',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionReplayDeliveryEnum = typeof TransactionReplayDeliveryEnum[keyof typeof TransactionReplayDeliveryEnum];


/**
 * Check if a given object implements the TransactionReplay interface.
 */
export function instanceOfTransactionReplay(value: object): value is TransactionReplay {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('mode' in value) || value['mode'] === undefined) return false;
    if (value['mode'] !== 'current_maps') return false;

    if (!('delivery' in value) || value['delivery'] === undefined) return false;
    if (value['delivery'] !== 'response_only') return false;

    if (!('reason' in value) || value['reason'] === undefined) return false;
    if (!('requestedByApiKeyId' in value) || value['requestedByApiKeyId'] === undefined) return false;
    if (!('attempts' in value) || value['attempts'] === undefined) return false;
    if (!('requestedAt' in value) || value['requestedAt'] === undefined) return false;
    if (!('startedAt' in value) || value['startedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function TransactionReplayFromJSON(json: any): TransactionReplay {
    return TransactionReplayFromJSONTyped(json, false);
}

export function TransactionReplayFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionReplay {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'status': json['status'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'mode': json['mode'],
        'delivery': json['delivery'],
        'reason': json['reason'],
        'requestedByApiKeyId': json['requestedByApiKeyId'],
        'attempts': json['attempts'],
        'requestedAt': json['requestedAt'],
        'startedAt': json['startedAt'],
        'completedAt': json['completedAt'],
        'error': TransactionReplayErrorFromJSON(json['error']),
    };
}

export function TransactionReplayToJSON(json: any): TransactionReplay {
    return TransactionReplayToJSONTyped(json, false);
}

export function TransactionReplayToJSONTyped(value?: TransactionReplay | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'status': value['status'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'mode': value['mode'],
        'delivery': value['delivery'],
        'reason': value['reason'],
        'requestedByApiKeyId': value['requestedByApiKeyId'],
        'attempts': value['attempts'],
        'requestedAt': value['requestedAt'],
        'startedAt': value['startedAt'],
        'completedAt': value['completedAt'],
        'error': TransactionReplayErrorToJSON(value['error']),
    };
}
