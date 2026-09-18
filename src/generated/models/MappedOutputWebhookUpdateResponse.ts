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
 * Successful mapped-output webhook configuration update.
 * @export
 * @interface MappedOutputWebhookUpdateResponse
 */
export interface MappedOutputWebhookUpdateResponse {
    /**
     * Always `true`; endpoint validation or configuration conflicts use an error response.
     * @type {boolean}
     * @memberof MappedOutputWebhookUpdateResponse
     */
    success: boolean;
    /**
     *
     * @type {MappedOutputWebhookStatus}
     * @memberof MappedOutputWebhookUpdateResponse
     */
    webhook: MappedOutputWebhookStatus;
    /**
     * Present only when a signing secret was created or rotated. It is never returned again.
     * @type {string}
     * @memberof MappedOutputWebhookUpdateResponse
     */
    plainTextSigningSecret?: string;
    /**
     * Present with `plainTextSigningSecret` to remind the caller to save it.
     * @type {string}
     * @memberof MappedOutputWebhookUpdateResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the MappedOutputWebhookUpdateResponse interface.
 */
export function instanceOfMappedOutputWebhookUpdateResponse(value: object): value is MappedOutputWebhookUpdateResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('webhook' in value) || value['webhook'] === undefined) return false;
    return true;
}

export function MappedOutputWebhookUpdateResponseFromJSON(json: any): MappedOutputWebhookUpdateResponse {
    return MappedOutputWebhookUpdateResponseFromJSONTyped(json, false);
}

export function MappedOutputWebhookUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputWebhookUpdateResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'webhook': MappedOutputWebhookStatusFromJSON(json['webhook']),
        'plainTextSigningSecret': json['plainTextSigningSecret'] == null ? undefined : json['plainTextSigningSecret'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function MappedOutputWebhookUpdateResponseToJSON(json: any): MappedOutputWebhookUpdateResponse {
    return MappedOutputWebhookUpdateResponseToJSONTyped(json, false);
}

export function MappedOutputWebhookUpdateResponseToJSONTyped(value?: MappedOutputWebhookUpdateResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'webhook': MappedOutputWebhookStatusToJSON(value['webhook']),
        'plainTextSigningSecret': value['plainTextSigningSecret'],
        'message': value['message'],
    };
}
