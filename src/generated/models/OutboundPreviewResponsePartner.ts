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
 * Source trading partner whose outgoing map and configuration were selected.
 * @export
 * @interface OutboundPreviewResponsePartner
 */
export interface OutboundPreviewResponsePartner {
    /**
     * Stable workspace-scoped partner id used for exact selection.
     * @type {number}
     * @memberof OutboundPreviewResponsePartner
     */
    partnerId: number;
    /**
     * Current customer-visible name of the selected partner.
     * @type {string}
     * @memberof OutboundPreviewResponsePartner
     */
    name: string;
}

/**
 * Check if a given object implements the OutboundPreviewResponsePartner interface.
 */
export function instanceOfOutboundPreviewResponsePartner(value: object): value is OutboundPreviewResponsePartner {
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function OutboundPreviewResponsePartnerFromJSON(json: any): OutboundPreviewResponsePartner {
    return OutboundPreviewResponsePartnerFromJSONTyped(json, false);
}

export function OutboundPreviewResponsePartnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutboundPreviewResponsePartner {
    if (json == null) {
        return json;
    }
    return {

        'partnerId': json['partnerId'],
        'name': json['name'],
    };
}

export function OutboundPreviewResponsePartnerToJSON(json: any): OutboundPreviewResponsePartner {
    return OutboundPreviewResponsePartnerToJSONTyped(json, false);
}

export function OutboundPreviewResponsePartnerToJSONTyped(value?: OutboundPreviewResponsePartner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'partnerId': value['partnerId'],
        'name': value['name'],
    };
}
