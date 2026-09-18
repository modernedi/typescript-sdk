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
import type { MappedOutputWebhookStatus } from './MappedOutputWebhookStatus.js';
import {
    MappedOutputWebhookStatusFromJSON,
    MappedOutputWebhookStatusFromJSONTyped,
    MappedOutputWebhookStatusToJSON,
    MappedOutputWebhookStatusToJSONTyped,
} from './MappedOutputWebhookStatus.js';

/**
 * Current per-partner mapped-output push-delivery configuration and recent delivery health.
 * @export
 * @interface MappedOutputWebhookStatusResponse
 */
export interface MappedOutputWebhookStatusResponse {
    /**
     * Always `true`; unknown partners or authorization failures use an error response.
     * @type {boolean}
     * @memberof MappedOutputWebhookStatusResponse
     */
    success: boolean;
    /**
     *
     * @type {MappedOutputWebhookStatus}
     * @memberof MappedOutputWebhookStatusResponse
     */
    webhook: MappedOutputWebhookStatus;
}

/**
 * Check if a given object implements the MappedOutputWebhookStatusResponse interface.
 */
export function instanceOfMappedOutputWebhookStatusResponse(value: object): value is MappedOutputWebhookStatusResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('webhook' in value) || value['webhook'] === undefined) return false;
    return true;
}

export function MappedOutputWebhookStatusResponseFromJSON(json: any): MappedOutputWebhookStatusResponse {
    return MappedOutputWebhookStatusResponseFromJSONTyped(json, false);
}

export function MappedOutputWebhookStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputWebhookStatusResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'webhook': MappedOutputWebhookStatusFromJSON(json['webhook']),
    };
}

export function MappedOutputWebhookStatusResponseToJSON(json: any): MappedOutputWebhookStatusResponse {
    return MappedOutputWebhookStatusResponseToJSONTyped(json, false);
}

export function MappedOutputWebhookStatusResponseToJSONTyped(value?: MappedOutputWebhookStatusResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'webhook': MappedOutputWebhookStatusToJSON(value['webhook']),
    };
}
