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
 * Accepted AS2 message counts for one UTC calendar date.
 * @export
 * @interface UsageDay
 */
export interface UsageDay {
    /**
     * UTC calendar date for these counts.
     * @type {Date}
     * @memberof UsageDay
     */
    date: Date;
    /**
     * Distinct inbound AS2 messages accepted on this date.
     * @type {number}
     * @memberof UsageDay
     */
    inboundMessages: number;
    /**
     * Distinct outbound AS2 messages accepted on this date.
     * @type {number}
     * @memberof UsageDay
     */
    outboundMessages: number;
    /**
     * Combined inbound and outbound accepted AS2 messages for this date.
     * @type {number}
     * @memberof UsageDay
     */
    totalMessages: number;
}

/**
 * Check if a given object implements the UsageDay interface.
 */
export function instanceOfUsageDay(value: object): value is UsageDay {
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('inboundMessages' in value) || value['inboundMessages'] === undefined) return false;
    if (!('outboundMessages' in value) || value['outboundMessages'] === undefined) return false;
    if (!('totalMessages' in value) || value['totalMessages'] === undefined) return false;
    return true;
}

export function UsageDayFromJSON(json: any): UsageDay {
    return UsageDayFromJSONTyped(json, false);
}

export function UsageDayFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsageDay {
    if (json == null) {
        return json;
    }
    return {

        'date': (new Date(json['date'])),
        'inboundMessages': json['inboundMessages'],
        'outboundMessages': json['outboundMessages'],
        'totalMessages': json['totalMessages'],
    };
}

export function UsageDayToJSON(json: any): UsageDay {
    return UsageDayToJSONTyped(json, false);
}

export function UsageDayToJSONTyped(value?: UsageDay | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'date': value['date'].toISOString().substring(0,10),
        'inboundMessages': value['inboundMessages'],
        'outboundMessages': value['outboundMessages'],
        'totalMessages': value['totalMessages'],
    };
}
