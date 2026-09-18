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
 * Current UTC-day message and transaction volume attributed to one partner.
 * @export
 * @interface UsagePartnerBreakdown
 */
export interface UsagePartnerBreakdown {
    /**
     * Partner display name captured on the counted transaction rows.
     * @type {string}
     * @memberof UsagePartnerBreakdown
     */
    partnerName: string;
    /**
     * Distinct inbound AS2 messages attributed to this partner today.
     * @type {number}
     * @memberof UsagePartnerBreakdown
     */
    inboundMessages: number;
    /**
     * Distinct outbound AS2 messages attributed to this partner today.
     * @type {number}
     * @memberof UsagePartnerBreakdown
     */
    outboundMessages: number;
    /**
     * Combined distinct inbound and outbound messages attributed to this partner today.
     * @type {number}
     * @memberof UsagePartnerBreakdown
     */
    totalMessages: number;
    /**
     * Transaction-set rows attributed to this partner today; one AS2 message may contain multiple rows.
     * @type {number}
     * @memberof UsagePartnerBreakdown
     */
    transactionRows: number;
}

/**
 * Check if a given object implements the UsagePartnerBreakdown interface.
 */
export function instanceOfUsagePartnerBreakdown(value: object): value is UsagePartnerBreakdown {
    if (!('partnerName' in value) || value['partnerName'] === undefined) return false;
    if (!('inboundMessages' in value) || value['inboundMessages'] === undefined) return false;
    if (!('outboundMessages' in value) || value['outboundMessages'] === undefined) return false;
    if (!('totalMessages' in value) || value['totalMessages'] === undefined) return false;
    if (!('transactionRows' in value) || value['transactionRows'] === undefined) return false;
    return true;
}

export function UsagePartnerBreakdownFromJSON(json: any): UsagePartnerBreakdown {
    return UsagePartnerBreakdownFromJSONTyped(json, false);
}

export function UsagePartnerBreakdownFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsagePartnerBreakdown {
    if (json == null) {
        return json;
    }
    return {

        'partnerName': json['partnerName'],
        'inboundMessages': json['inboundMessages'],
        'outboundMessages': json['outboundMessages'],
        'totalMessages': json['totalMessages'],
        'transactionRows': json['transactionRows'],
    };
}

export function UsagePartnerBreakdownToJSON(json: any): UsagePartnerBreakdown {
    return UsagePartnerBreakdownToJSONTyped(json, false);
}

export function UsagePartnerBreakdownToJSONTyped(value?: UsagePartnerBreakdown | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'partnerName': value['partnerName'],
        'inboundMessages': value['inboundMessages'],
        'outboundMessages': value['outboundMessages'],
        'totalMessages': value['totalMessages'],
        'transactionRows': value['transactionRows'],
    };
}
