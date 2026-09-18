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

/**
 *
 * @export
 * @interface MappingRuntimeFailureResponse
 */
export interface MappingRuntimeFailureResponse {
    /**
     * Always `true`; an unknown or tenant-inaccessible failure id uses an error response.
     * @type {boolean}
     * @memberof MappingRuntimeFailureResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionMappingAttempt}
     * @memberof MappingRuntimeFailureResponse
     */
    failure: TransactionMappingAttempt;
}

/**
 * Check if a given object implements the MappingRuntimeFailureResponse interface.
 */
export function instanceOfMappingRuntimeFailureResponse(value: object): value is MappingRuntimeFailureResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('failure' in value) || value['failure'] === undefined) return false;
    return true;
}

export function MappingRuntimeFailureResponseFromJSON(json: any): MappingRuntimeFailureResponse {
    return MappingRuntimeFailureResponseFromJSONTyped(json, false);
}

export function MappingRuntimeFailureResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingRuntimeFailureResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'failure': TransactionMappingAttemptFromJSON(json['failure']),
    };
}

export function MappingRuntimeFailureResponseToJSON(json: any): MappingRuntimeFailureResponse {
    return MappingRuntimeFailureResponseToJSONTyped(json, false);
}

export function MappingRuntimeFailureResponseToJSONTyped(value?: MappingRuntimeFailureResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'failure': TransactionMappingAttemptToJSON(value['failure']),
    };
}
