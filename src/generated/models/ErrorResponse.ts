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
import type { ErrorObject } from './ErrorObject.js';
import {
    ErrorObjectFromJSON,
    ErrorObjectFromJSONTyped,
    ErrorObjectToJSON,
    ErrorObjectToJSONTyped,
} from './ErrorObject.js';

/**
 * Standard JSON failure envelope used by Integration API operations.
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * Always `false` for this error envelope.
     * @type {boolean}
     * @memberof ErrorResponse
     */
    success: boolean;
    /**
     *
     * @type {ErrorObject}
     * @memberof ErrorResponse
     */
    error: ErrorObject;
}

/**
 * Check if a given object implements the ErrorResponse interface.
 */
export function instanceOfErrorResponse(value: object): value is ErrorResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function ErrorResponseFromJSON(json: any): ErrorResponse {
    return ErrorResponseFromJSONTyped(json, false);
}

export function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'error': ErrorObjectFromJSON(json['error']),
    };
}

export function ErrorResponseToJSON(json: any): ErrorResponse {
    return ErrorResponseToJSONTyped(json, false);
}

export function ErrorResponseToJSONTyped(value?: ErrorResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'error': ErrorObjectToJSON(value['error']),
    };
}
