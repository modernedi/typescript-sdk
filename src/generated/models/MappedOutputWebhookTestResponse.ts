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
 * Result of one synthetic webhook connectivity attempt. This response never represents or changes a real mapped output.
 * @export
 * @interface MappedOutputWebhookTestResponse
 */
export interface MappedOutputWebhookTestResponse {
    /**
     * The ModernEDI test operation completed. This does not mean the destination accepted the event; inspect `delivered`.
     * @type {boolean}
     * @memberof MappedOutputWebhookTestResponse
     */
    success: boolean;
    /**
     * Always true so this result cannot be mistaken for production mapped-output delivery.
     * @type {boolean}
     * @memberof MappedOutputWebhookTestResponse
     */
    synthetic: boolean;
    /**
     * Synthetic event name sent in both the signed body and `X-ModernEDI-Event` header.
     * @type {MappedOutputWebhookTestResponseEventEnum}
     * @memberof MappedOutputWebhookTestResponse
     */
    event: MappedOutputWebhookTestResponseEventEnum;
    /**
     * Synthetic `test_`-prefixed delivery correlation id. It is not a mapped-output queue id or receipt handle.
     * @type {string}
     * @memberof MappedOutputWebhookTestResponse
     */
    deliveryId: string;
    /**
     * Request correlation id returned in `X-Request-Id` and included in the signed synthetic event.
     * @type {string}
     * @memberof MappedOutputWebhookTestResponse
     */
    requestId: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof MappedOutputWebhookTestResponse
     */
    attemptedAt: string;
    /**
     * Always true because ModernEDI invoked the validated delivery path. A null `statusCode` means the path failed before an HTTP response was received.
     * @type {boolean}
     * @memberof MappedOutputWebhookTestResponse
     */
    attempted: boolean;
    /**
     * True only when the destination returned HTTP 2xx. A `200` from this ModernEDI API operation can still contain `delivered: false`.
     *
     * @type {boolean}
     * @memberof MappedOutputWebhookTestResponse
     */
    delivered: boolean;
    /**
     * Destination HTTP status, or null when public-address validation, DNS, connection, TLS, or timeout failure prevented an HTTP response.
     *
     * @type {number}
     * @memberof MappedOutputWebhookTestResponse
     */
    statusCode: number | null;
    /**
     * Safe delivery failure summary, or null when `delivered` is true.
     * @type {string}
     * @memberof MappedOutputWebhookTestResponse
     */
    error: string | null;
}


/**
 * @export
 */
export const MappedOutputWebhookTestResponseEventEnum = {
    MappedOutputTest: 'mapped_output.test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappedOutputWebhookTestResponseEventEnum = typeof MappedOutputWebhookTestResponseEventEnum[keyof typeof MappedOutputWebhookTestResponseEventEnum];


/**
 * Check if a given object implements the MappedOutputWebhookTestResponse interface.
 */
export function instanceOfMappedOutputWebhookTestResponse(value: object): value is MappedOutputWebhookTestResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('synthetic' in value) || value['synthetic'] === undefined) return false;
    if (!('event' in value) || value['event'] === undefined) return false;
    if (value['event'] !== 'mapped_output.test') return false;

    if (!('deliveryId' in value) || value['deliveryId'] === undefined) return false;
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('attemptedAt' in value) || value['attemptedAt'] === undefined) return false;
    if (!('attempted' in value) || value['attempted'] === undefined) return false;
    if (!('delivered' in value) || value['delivered'] === undefined) return false;
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function MappedOutputWebhookTestResponseFromJSON(json: any): MappedOutputWebhookTestResponse {
    return MappedOutputWebhookTestResponseFromJSONTyped(json, false);
}

export function MappedOutputWebhookTestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputWebhookTestResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'synthetic': json['synthetic'],
        'event': json['event'],
        'deliveryId': json['deliveryId'],
        'requestId': json['requestId'],
        'attemptedAt': json['attemptedAt'],
        'attempted': json['attempted'],
        'delivered': json['delivered'],
        'statusCode': json['statusCode'],
        'error': json['error'],
    };
}

export function MappedOutputWebhookTestResponseToJSON(json: any): MappedOutputWebhookTestResponse {
    return MappedOutputWebhookTestResponseToJSONTyped(json, false);
}

export function MappedOutputWebhookTestResponseToJSONTyped(value?: MappedOutputWebhookTestResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'synthetic': value['synthetic'],
        'event': value['event'],
        'deliveryId': value['deliveryId'],
        'requestId': value['requestId'],
        'attemptedAt': value['attemptedAt'],
        'attempted': value['attempted'],
        'delivered': value['delivered'],
        'statusCode': value['statusCode'],
        'error': value['error'],
    };
}
