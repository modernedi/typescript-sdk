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
 * Current UTC-day message and transaction volume for one UTC hour.
 * @export
 * @interface UsageHour
 */
export interface UsageHour {
    /**
     * Hour bucket label in `HH:00` form.
     * @type {string}
     * @memberof UsageHour
     */
    hour: string;
    /**
     * Distinct inbound AS2 messages accepted during this UTC hour.
     * @type {number}
     * @memberof UsageHour
     */
    inboundMessages: number;
    /**
     * Distinct outbound AS2 messages accepted during this UTC hour.
     * @type {number}
     * @memberof UsageHour
     */
    outboundMessages: number;
    /**
     * Combined inbound and outbound accepted messages during this UTC hour.
     * @type {number}
     * @memberof UsageHour
     */
    totalMessages: number;
    /**
     * Transaction-set rows recorded during this UTC hour; one AS2 message may contain multiple rows.
     * @type {number}
     * @memberof UsageHour
     */
    transactionRows: number;
}

/**
 * Check if a given object implements the UsageHour interface.
 */
export function instanceOfUsageHour(value: object): value is UsageHour {
    if (!('hour' in value) || value['hour'] === undefined) return false;
    if (!('inboundMessages' in value) || value['inboundMessages'] === undefined) return false;
    if (!('outboundMessages' in value) || value['outboundMessages'] === undefined) return false;
    if (!('totalMessages' in value) || value['totalMessages'] === undefined) return false;
    if (!('transactionRows' in value) || value['transactionRows'] === undefined) return false;
    return true;
}

export function UsageHourFromJSON(json: any): UsageHour {
    return UsageHourFromJSONTyped(json, false);
}

export function UsageHourFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsageHour {
    if (json == null) {
        return json;
    }
    return {

        'hour': json['hour'],
        'inboundMessages': json['inboundMessages'],
        'outboundMessages': json['outboundMessages'],
        'totalMessages': json['totalMessages'],
        'transactionRows': json['transactionRows'],
    };
}

export function UsageHourToJSON(json: any): UsageHour {
    return UsageHourToJSONTyped(json, false);
}

export function UsageHourToJSONTyped(value?: UsageHour | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'hour': value['hour'],
        'inboundMessages': value['inboundMessages'],
        'outboundMessages': value['outboundMessages'],
        'totalMessages': value['totalMessages'],
        'transactionRows': value['transactionRows'],
    };
}
