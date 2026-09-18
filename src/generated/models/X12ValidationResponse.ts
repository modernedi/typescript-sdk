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
import type { X12ValidationResult } from './X12ValidationResult.js';
import {
    X12ValidationResultFromJSON,
    X12ValidationResultFromJSONTyped,
    X12ValidationResultToJSON,
    X12ValidationResultToJSONTyped,
} from './X12ValidationResult.js';

/**
 * Successful X12 parser and standards-validation result.
 * @export
 * @interface X12ValidationResponse
 */
export interface X12ValidationResponse {
    /**
     * Always `true`; invalid X12 is reported in `validation`, while request-level failures use an error response.
     * @type {boolean}
     * @memberof X12ValidationResponse
     */
    success: boolean;
    /**
     *
     * @type {X12ValidationResult}
     * @memberof X12ValidationResponse
     */
    validation: X12ValidationResult;
}

/**
 * Check if a given object implements the X12ValidationResponse interface.
 */
export function instanceOfX12ValidationResponse(value: object): value is X12ValidationResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('validation' in value) || value['validation'] === undefined) return false;
    return true;
}

export function X12ValidationResponseFromJSON(json: any): X12ValidationResponse {
    return X12ValidationResponseFromJSONTyped(json, false);
}

export function X12ValidationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12ValidationResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'validation': X12ValidationResultFromJSON(json['validation']),
    };
}

export function X12ValidationResponseToJSON(json: any): X12ValidationResponse {
    return X12ValidationResponseToJSONTyped(json, false);
}

export function X12ValidationResponseToJSONTyped(value?: X12ValidationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'validation': X12ValidationResultToJSON(value['validation']),
    };
}
