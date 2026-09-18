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
 *
 * @export
 * @interface MappedOutputWebhookUpdateRequest
 */
export interface MappedOutputWebhookUpdateRequest {
    /**
     * Enables or disables push delivery for this partner. Disabling retains the stored endpoint and signing secret for later use; re-enabling still requires `endpointUrl` in this request.
     * @type {boolean}
     * @memberof MappedOutputWebhookUpdateRequest
     */
    enabled: boolean;
    /**
     * Required when `enabled` is true. Must be an absolute HTTPS URL without user information or a fragment and use a publicly routable host. DNS is revalidated before every delivery.
     * @type {string}
     * @memberof MappedOutputWebhookUpdateRequest
     */
    endpointUrl?: string | null;
    /**
     * When true on an enabled webhook, replaces the signing secret and returns the new plaintext value once. Enabling a webhook without an existing secret creates one even when this is false.
     * @type {boolean}
     * @memberof MappedOutputWebhookUpdateRequest
     */
    rotateSigningSecret?: boolean;
}

/**
 * Check if a given object implements the MappedOutputWebhookUpdateRequest interface.
 */
export function instanceOfMappedOutputWebhookUpdateRequest(value: object): value is MappedOutputWebhookUpdateRequest {
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    return true;
}

export function MappedOutputWebhookUpdateRequestFromJSON(json: any): MappedOutputWebhookUpdateRequest {
    return MappedOutputWebhookUpdateRequestFromJSONTyped(json, false);
}

export function MappedOutputWebhookUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputWebhookUpdateRequest {
    if (json == null) {
        return json;
    }
    return {

        'enabled': json['enabled'],
        'endpointUrl': json['endpointUrl'] === undefined ? undefined : json['endpointUrl'] === null ? null : json['endpointUrl'],
        'rotateSigningSecret': json['rotateSigningSecret'] == null ? undefined : json['rotateSigningSecret'],
    };
}

export function MappedOutputWebhookUpdateRequestToJSON(json: any): MappedOutputWebhookUpdateRequest {
    return MappedOutputWebhookUpdateRequestToJSONTyped(json, false);
}

export function MappedOutputWebhookUpdateRequestToJSONTyped(value?: MappedOutputWebhookUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'enabled': value['enabled'],
        'endpointUrl': value['endpointUrl'],
        'rotateSigningSecret': value['rotateSigningSecret'],
    };
}
