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
 * @interface TransactionReplayRequest
 */
export interface TransactionReplayRequest {
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionReplayRequest
     */
    environment?: TransactionEnvironmentValue;
    /**
     * Uses the mappings currently published for the partner. This is the only public replay mode.
     * @type {TransactionReplayRequestModeEnum}
     * @memberof TransactionReplayRequest
     */
    mode?: TransactionReplayRequestModeEnum;
    /**
     * Regenerated outputs are returned only; no queue item, webhook, or outbound acknowledgment is produced.
     * @type {TransactionReplayRequestDeliveryEnum}
     * @memberof TransactionReplayRequest
     */
    delivery?: TransactionReplayRequestDeliveryEnum;
    /**
     * Optional operator or automation context recorded on the replay attempt.
     * @type {string}
     * @memberof TransactionReplayRequest
     */
    reason?: string | null;
}


/**
 * @export
 */
export const TransactionReplayRequestModeEnum = {
    CurrentMaps: 'current_maps',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionReplayRequestModeEnum = typeof TransactionReplayRequestModeEnum[keyof typeof TransactionReplayRequestModeEnum];

/**
 * @export
 */
export const TransactionReplayRequestDeliveryEnum = {
    ResponseOnly: 'response_only',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionReplayRequestDeliveryEnum = typeof TransactionReplayRequestDeliveryEnum[keyof typeof TransactionReplayRequestDeliveryEnum];


/**
 * Check if a given object implements the TransactionReplayRequest interface.
 */
export function instanceOfTransactionReplayRequest(value: object): value is TransactionReplayRequest {
    return true;
}

export function TransactionReplayRequestFromJSON(json: any): TransactionReplayRequest {
    return TransactionReplayRequestFromJSONTyped(json, false);
}

export function TransactionReplayRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionReplayRequest {
    if (json == null) {
        return json;
    }
    return {

        'environment': json['environment'] == null ? undefined : TransactionEnvironmentValueFromJSON(json['environment']),
        'mode': json['mode'] == null ? undefined : json['mode'],
        'delivery': json['delivery'] == null ? undefined : json['delivery'],
        'reason': json['reason'] === undefined ? undefined : json['reason'] === null ? null : json['reason'],
    };
}

export function TransactionReplayRequestToJSON(json: any): TransactionReplayRequest {
    return TransactionReplayRequestToJSONTyped(json, false);
}

export function TransactionReplayRequestToJSONTyped(value?: TransactionReplayRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'mode': value['mode'],
        'delivery': value['delivery'],
        'reason': value['reason'],
    };
}
