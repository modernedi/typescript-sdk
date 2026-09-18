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
/**
 * Stable machine-readable error details returned for a failed Integration API request.
 * @export
 * @interface ErrorObject
 */
export interface ErrorObject {
    /**
     * Stable machine-readable error code; branch on this value rather than parsing `message`.
     * @type {string}
     * @memberof ErrorObject
     */
    code: string;
    /**
     * Customer-readable explanation suitable for logs or an operator-facing error message.
     * @type {string}
     * @memberof ErrorObject
     */
    message: string;
    /**
     * Whether retrying the same operation later may succeed without changing the request.
     * @type {boolean}
     * @memberof ErrorObject
     */
    retryable: boolean;
    /**
     * Correlation identifier also returned in `X-Request-Id`; include it when contacting ModernEDI Support.
     * @type {string}
     * @memberof ErrorObject
     */
    requestId: string;
    /**
     * Error-specific structured context such as field paths, limits, required scopes, or entitlement details.
     * @type {{ [key: string]: any | undefined; }}
     * @memberof ErrorObject
     */
    details: { [key: string]: any | undefined; };
}

/**
 * Check if a given object implements the ErrorObject interface.
 */
export function instanceOfErrorObject(value: object): value is ErrorObject {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('retryable' in value) || value['retryable'] === undefined) return false;
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function ErrorObjectFromJSON(json: any): ErrorObject {
    return ErrorObjectFromJSONTyped(json, false);
}

export function ErrorObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorObject {
    if (json == null) {
        return json;
    }
    return {

        'code': json['code'],
        'message': json['message'],
        'retryable': json['retryable'],
        'requestId': json['requestId'],
        'details': json['details'],
    };
}

export function ErrorObjectToJSON(json: any): ErrorObject {
    return ErrorObjectToJSONTyped(json, false);
}

export function ErrorObjectToJSONTyped(value?: ErrorObject | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'code': value['code'],
        'message': value['message'],
        'retryable': value['retryable'],
        'requestId': value['requestId'],
        'details': value['details'],
    };
}
