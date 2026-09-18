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
 * @interface TransactionWindow
 */
export interface TransactionWindow {
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof TransactionWindow
     */
    startDate: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof TransactionWindow
     */
    endDate: string;
    /**
     * Time zone used for transaction timestamps and normalized query windows.
     * @type {TransactionWindowTimeZoneEnum}
     * @memberof TransactionWindow
     */
    timeZone: TransactionWindowTimeZoneEnum;
}


/**
 * @export
 */
export const TransactionWindowTimeZoneEnum = {
    Utc: 'UTC',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionWindowTimeZoneEnum = typeof TransactionWindowTimeZoneEnum[keyof typeof TransactionWindowTimeZoneEnum];


/**
 * Check if a given object implements the TransactionWindow interface.
 */
export function instanceOfTransactionWindow(value: object): value is TransactionWindow {
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('endDate' in value) || value['endDate'] === undefined) return false;
    if (!('timeZone' in value) || value['timeZone'] === undefined) return false;
    if (value['timeZone'] !== 'UTC') return false;

    return true;
}

export function TransactionWindowFromJSON(json: any): TransactionWindow {
    return TransactionWindowFromJSONTyped(json, false);
}

export function TransactionWindowFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionWindow {
    if (json == null) {
        return json;
    }
    return {

        'startDate': json['startDate'],
        'endDate': json['endDate'],
        'timeZone': json['timeZone'],
    };
}

export function TransactionWindowToJSON(json: any): TransactionWindow {
    return TransactionWindowToJSONTyped(json, false);
}

export function TransactionWindowToJSONTyped(value?: TransactionWindow | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'startDate': value['startDate'],
        'endDate': value['endDate'],
        'timeZone': value['timeZone'],
    };
}
