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
import type { MappedOutputAcknowledgment } from './MappedOutputAcknowledgment.js';
import {
    MappedOutputAcknowledgmentFromJSON,
    MappedOutputAcknowledgmentFromJSONTyped,
    MappedOutputAcknowledgmentToJSON,
    MappedOutputAcknowledgmentToJSONTyped,
} from './MappedOutputAcknowledgment.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Atomic confirmation that every requested mapped-output lease was acknowledged.
 * @export
 * @interface MappedOutputBulkAckResponse
 */
export interface MappedOutputBulkAckResponse {
    /**
     * Always `true`; if any lease is invalid the entire request fails and no output is acknowledged.
     * @type {boolean}
     * @memberof MappedOutputBulkAckResponse
     */
    success: boolean;
    /**
     * Selects the isolated transaction history containing the original transaction. Defaults to `production` when omitted.
     * @type {TransactionEnvironmentValue}
     * @memberof MappedOutputBulkAckResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * Number of outputs acknowledged by this atomic batch.
     * @type {number}
     * @memberof MappedOutputBulkAckResponse
     */
    acknowledgedCount: number;
    /**
     * Canonical acknowledgment records in the same successful batch.
     * @type {Array<MappedOutputAcknowledgment>}
     * @memberof MappedOutputBulkAckResponse
     */
    acknowledgments: Array<MappedOutputAcknowledgment>;
}



/**
 * Check if a given object implements the MappedOutputBulkAckResponse interface.
 */
export function instanceOfMappedOutputBulkAckResponse(value: object): value is MappedOutputBulkAckResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('acknowledgedCount' in value) || value['acknowledgedCount'] === undefined) return false;
    if (!('acknowledgments' in value) || value['acknowledgments'] === undefined) return false;
    return true;
}

export function MappedOutputBulkAckResponseFromJSON(json: any): MappedOutputBulkAckResponse {
    return MappedOutputBulkAckResponseFromJSONTyped(json, false);
}

export function MappedOutputBulkAckResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputBulkAckResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'acknowledgedCount': json['acknowledgedCount'],
        'acknowledgments': ((json['acknowledgments'] as Array<any>).map(MappedOutputAcknowledgmentFromJSON)),
    };
}

export function MappedOutputBulkAckResponseToJSON(json: any): MappedOutputBulkAckResponse {
    return MappedOutputBulkAckResponseToJSONTyped(json, false);
}

export function MappedOutputBulkAckResponseToJSONTyped(value?: MappedOutputBulkAckResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'acknowledgedCount': value['acknowledgedCount'],
        'acknowledgments': ((value['acknowledgments'] as Array<any>).map(MappedOutputAcknowledgmentToJSON)),
    };
}
