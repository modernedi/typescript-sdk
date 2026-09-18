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
 * Confirmation that one leased mapped output moved into acknowledged-by-your-integration custody.
 * @export
 * @interface MappedOutputAckResponse
 */
export interface MappedOutputAckResponse {
    /**
     * Always `true`; stale handles or unknown outputs use the documented error response instead.
     * @type {boolean}
     * @memberof MappedOutputAckResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof MappedOutputAckResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     *
     * @type {MappedOutputAcknowledgment}
     * @memberof MappedOutputAckResponse
     */
    acknowledgment: MappedOutputAcknowledgment;
    /**
     * Mapped output id that was marked received.
     * @type {string}
     * @memberof MappedOutputAckResponse
     */
    id: string;
    /**
     * Original inbound AS2 message id for the mapped output.
     * @type {string}
     * @memberof MappedOutputAckResponse
     */
    messageId: string;
    /**
     * Unique mapped-output key inside the transaction.
     * @type {string}
     * @memberof MappedOutputAckResponse
     */
    mappedOutputKey: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappedOutputAckResponse
     */
    ackedAt?: string | null;
}



/**
 * Check if a given object implements the MappedOutputAckResponse interface.
 */
export function instanceOfMappedOutputAckResponse(value: object): value is MappedOutputAckResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('acknowledgment' in value) || value['acknowledgment'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('mappedOutputKey' in value) || value['mappedOutputKey'] === undefined) return false;
    return true;
}

export function MappedOutputAckResponseFromJSON(json: any): MappedOutputAckResponse {
    return MappedOutputAckResponseFromJSONTyped(json, false);
}

export function MappedOutputAckResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputAckResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'acknowledgment': MappedOutputAcknowledgmentFromJSON(json['acknowledgment']),
        'id': json['id'],
        'messageId': json['messageId'],
        'mappedOutputKey': json['mappedOutputKey'],
        'ackedAt': json['ackedAt'] === undefined ? undefined : json['ackedAt'] === null ? null : json['ackedAt'],
    };
}

export function MappedOutputAckResponseToJSON(json: any): MappedOutputAckResponse {
    return MappedOutputAckResponseToJSONTyped(json, false);
}

export function MappedOutputAckResponseToJSONTyped(value?: MappedOutputAckResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'acknowledgment': MappedOutputAcknowledgmentToJSON(value['acknowledgment']),
        'id': value['id'],
        'messageId': value['messageId'],
        'mappedOutputKey': value['mappedOutputKey'],
        'ackedAt': value['ackedAt'],
    };
}
