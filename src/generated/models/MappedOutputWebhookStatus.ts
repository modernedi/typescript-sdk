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
 * Per-partner HTTPS push configuration and last observed delivery attempt.
 * @export
 * @interface MappedOutputWebhookStatus
 */
export interface MappedOutputWebhookStatus {
    /**
     * Stable workspace-scoped partner id whose mapped outputs use this webhook.
     * @type {number}
     * @memberof MappedOutputWebhookStatus
     */
    partnerId: number;
    /**
     * Whether ModernEDI currently attempts HTTPS push delivery for this partner.
     * @type {boolean}
     * @memberof MappedOutputWebhookStatus
     */
    enabled: boolean;
    /**
     * Configured public HTTPS destination, or `null` when no endpoint has been stored.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    endpointUrl?: string | null;
    /**
     * Whether ModernEDI has a secret for signing webhook requests; the full secret is never returned here.
     * @type {boolean}
     * @memberof MappedOutputWebhookStatus
     */
    signingSecretConfigured: boolean;
    /**
     * Last four characters only; the signing secret is never returned.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    signingSecretLastFour?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    activatedAt?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    lastDeliveryAttemptAt?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    lastDeliverySuccessAt?: string | null;
    /**
     * Most recent webhook HTTP response status, or `null` before a response has been recorded.
     * @type {number}
     * @memberof MappedOutputWebhookStatus
     */
    lastDeliveryStatusCode?: number | null;
    /**
     * Safe most-recent delivery error, or `null` when the latest attempt succeeded or none has occurred.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    lastDeliveryError?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    createdAt?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    lastUpdatedAt?: string | null;
    /**
     * Quoted SHA-256 configuration ETag, also returned in the HTTP `ETag` header.
     * @type {string}
     * @memberof MappedOutputWebhookStatus
     */
    readonly etag: string;
}

/**
 * Check if a given object implements the MappedOutputWebhookStatus interface.
 */
export function instanceOfMappedOutputWebhookStatus(value: object): value is MappedOutputWebhookStatus {
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('signingSecretConfigured' in value) || value['signingSecretConfigured'] === undefined) return false;
    if (!('etag' in value) || value['etag'] === undefined) return false;
    return true;
}

export function MappedOutputWebhookStatusFromJSON(json: any): MappedOutputWebhookStatus {
    return MappedOutputWebhookStatusFromJSONTyped(json, false);
}

export function MappedOutputWebhookStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputWebhookStatus {
    if (json == null) {
        return json;
    }
    return {

        'partnerId': json['partnerId'],
        'enabled': json['enabled'],
        'endpointUrl': json['endpointUrl'] === undefined ? undefined : json['endpointUrl'] === null ? null : json['endpointUrl'],
        'signingSecretConfigured': json['signingSecretConfigured'],
        'signingSecretLastFour': json['signingSecretLastFour'] === undefined ? undefined : json['signingSecretLastFour'] === null ? null : json['signingSecretLastFour'],
        'activatedAt': json['activatedAt'] === undefined ? undefined : json['activatedAt'] === null ? null : json['activatedAt'],
        'lastDeliveryAttemptAt': json['lastDeliveryAttemptAt'] === undefined ? undefined : json['lastDeliveryAttemptAt'] === null ? null : json['lastDeliveryAttemptAt'],
        'lastDeliverySuccessAt': json['lastDeliverySuccessAt'] === undefined ? undefined : json['lastDeliverySuccessAt'] === null ? null : json['lastDeliverySuccessAt'],
        'lastDeliveryStatusCode': json['lastDeliveryStatusCode'] === undefined ? undefined : json['lastDeliveryStatusCode'] === null ? null : json['lastDeliveryStatusCode'],
        'lastDeliveryError': json['lastDeliveryError'] === undefined ? undefined : json['lastDeliveryError'] === null ? null : json['lastDeliveryError'],
        'createdAt': json['createdAt'] === undefined ? undefined : json['createdAt'] === null ? null : json['createdAt'],
        'lastUpdatedAt': json['lastUpdatedAt'] === undefined ? undefined : json['lastUpdatedAt'] === null ? null : json['lastUpdatedAt'],
        'etag': json['etag'],
    };
}

export function MappedOutputWebhookStatusToJSON(json: any): MappedOutputWebhookStatus {
    return MappedOutputWebhookStatusToJSONTyped(json, false);
}

export function MappedOutputWebhookStatusToJSONTyped(value?: Omit<MappedOutputWebhookStatus, 'etag'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'partnerId': value['partnerId'],
        'enabled': value['enabled'],
        'endpointUrl': value['endpointUrl'],
        'signingSecretConfigured': value['signingSecretConfigured'],
        'signingSecretLastFour': value['signingSecretLastFour'],
        'activatedAt': value['activatedAt'],
        'lastDeliveryAttemptAt': value['lastDeliveryAttemptAt'],
        'lastDeliverySuccessAt': value['lastDeliverySuccessAt'],
        'lastDeliveryStatusCode': value['lastDeliveryStatusCode'],
        'lastDeliveryError': value['lastDeliveryError'],
        'createdAt': value['createdAt'],
        'lastUpdatedAt': value['lastUpdatedAt'],
    };
}
