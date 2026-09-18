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
 * Confirmation that ModernEDI validated, packaged, and handed an outbound AS2 message to the configured partner endpoint.
 * @export
 * @interface SendSuccessResponse
 */
export interface SendSuccessResponse {
    /**
     * Always `true`; transport or validation failures use the documented error response instead.
     * @type {boolean}
     * @memberof SendSuccessResponse
     */
    success: boolean;
    /**
     * AS2 Message-Id assigned to the outbound message.
     * @type {string}
     * @memberof SendSuccessResponse
     */
    messageId: string;
    /**
     * Final X12 sent downstream after ModernEDI syntax-checks it and wraps it for AS2 delivery. For mapped endpoints this is generated output; for `/v1/as2/x12/...` endpoints it is the validated X12 supplied by the caller.
     *
     * @type {string}
     * @memberof SendSuccessResponse
     */
    x12: string;
}

/**
 * Check if a given object implements the SendSuccessResponse interface.
 */
export function instanceOfSendSuccessResponse(value: object): value is SendSuccessResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('x12' in value) || value['x12'] === undefined) return false;
    return true;
}

export function SendSuccessResponseFromJSON(json: any): SendSuccessResponse {
    return SendSuccessResponseFromJSONTyped(json, false);
}

export function SendSuccessResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendSuccessResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'messageId': json['messageId'],
        'x12': json['x12'],
    };
}

export function SendSuccessResponseToJSON(json: any): SendSuccessResponse {
    return SendSuccessResponseToJSONTyped(json, false);
}

export function SendSuccessResponseToJSONTyped(value?: SendSuccessResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'messageId': value['messageId'],
        'x12': value['x12'],
    };
}
