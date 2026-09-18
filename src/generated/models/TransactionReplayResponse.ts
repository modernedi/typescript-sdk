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
import type { TransactionMappedOutput } from './TransactionMappedOutput.js';
import {
    TransactionMappedOutputFromJSON,
    TransactionMappedOutputFromJSONTyped,
    TransactionMappedOutputToJSON,
    TransactionMappedOutputToJSONTyped,
} from './TransactionMappedOutput.js';
import type { TransactionReplay } from './TransactionReplay.js';
import {
    TransactionReplayFromJSON,
    TransactionReplayFromJSONTyped,
    TransactionReplayToJSON,
    TransactionReplayToJSONTyped,
} from './TransactionReplay.js';

/**
 * Atomic response-only replay result using the mappings currently published for the partner.
 * @export
 * @interface TransactionReplayResponse
 */
export interface TransactionReplayResponse {
    /**
     * Always `true`; replay validation or execution failures use the replay error response.
     * @type {boolean}
     * @memberof TransactionReplayResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionReplay}
     * @memberof TransactionReplayResponse
     */
    replay: TransactionReplay;
    /**
     * Newly generated map results. They are not enqueued and do not trigger mapped-output webhooks.
     * @type {Array<TransactionMappedOutput>}
     * @memberof TransactionReplayResponse
     */
    regeneratedOutputs: Array<TransactionMappedOutput>;
}

/**
 * Check if a given object implements the TransactionReplayResponse interface.
 */
export function instanceOfTransactionReplayResponse(value: object): value is TransactionReplayResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('replay' in value) || value['replay'] === undefined) return false;
    if (!('regeneratedOutputs' in value) || value['regeneratedOutputs'] === undefined) return false;
    return true;
}

export function TransactionReplayResponseFromJSON(json: any): TransactionReplayResponse {
    return TransactionReplayResponseFromJSONTyped(json, false);
}

export function TransactionReplayResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionReplayResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'replay': TransactionReplayFromJSON(json['replay']),
        'regeneratedOutputs': ((json['regeneratedOutputs'] as Array<any>).map(TransactionMappedOutputFromJSON)),
    };
}

export function TransactionReplayResponseToJSON(json: any): TransactionReplayResponse {
    return TransactionReplayResponseToJSONTyped(json, false);
}

export function TransactionReplayResponseToJSONTyped(value?: TransactionReplayResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'replay': TransactionReplayToJSON(value['replay']),
        'regeneratedOutputs': ((value['regeneratedOutputs'] as Array<any>).map(TransactionMappedOutputToJSON)),
    };
}
