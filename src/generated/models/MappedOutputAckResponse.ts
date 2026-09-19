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
}



/**
 * Check if a given object implements the MappedOutputAckResponse interface.
 */
export function instanceOfMappedOutputAckResponse(value: object): value is MappedOutputAckResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('acknowledgment' in value) || value['acknowledgment'] === undefined) return false;
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
    };
}
