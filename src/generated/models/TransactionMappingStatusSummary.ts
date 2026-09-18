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
 * @interface TransactionMappingStatusSummary
 */
export interface TransactionMappingStatusSummary {
    /**
     * Consolidated mapping outcome. `NOT_RECORDED` means no mapping runtime result was found; it does not claim that a map ran successfully. `UNAVAILABLE` means mapping telemetry could not be read while this response was built. It is fail-soft, has `failureCount: 0`, and does not by itself set `needsAttention`; retry before drawing a conclusion. `RECOVERED` means earlier failures were resolved by a later successful attempt. `COMPLETED_WITH_ERRORS` means at least one attempt succeeded while another failure remains unresolved.
     *
     * @type {TransactionMappingStatusSummaryStatusEnum}
     * @memberof TransactionMappingStatusSummary
     */
    status: TransactionMappingStatusSummaryStatusEnum;
    /**
     * Timestamp of the latest mapping attempt or fallback post-process status.
     * @type {string}
     * @memberof TransactionMappingStatusSummary
     */
    latestAttemptAt: string | null;
    /**
     * Number of unresolved mapping failures for this transaction.
     * @type {number}
     * @memberof TransactionMappingStatusSummary
     */
    failureCount: number;
}


/**
 * @export
 */
export const TransactionMappingStatusSummaryStatusEnum = {
    NotRecorded: 'NOT_RECORDED',
    Unavailable: 'UNAVAILABLE',
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    CompletedWithErrors: 'COMPLETED_WITH_ERRORS',
    Recovered: 'RECOVERED',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappingStatusSummaryStatusEnum = typeof TransactionMappingStatusSummaryStatusEnum[keyof typeof TransactionMappingStatusSummaryStatusEnum];


/**
 * Check if a given object implements the TransactionMappingStatusSummary interface.
 */
export function instanceOfTransactionMappingStatusSummary(value: object): value is TransactionMappingStatusSummary {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('latestAttemptAt' in value) || value['latestAttemptAt'] === undefined) return false;
    if (!('failureCount' in value) || value['failureCount'] === undefined) return false;
    return true;
}

export function TransactionMappingStatusSummaryFromJSON(json: any): TransactionMappingStatusSummary {
    return TransactionMappingStatusSummaryFromJSONTyped(json, false);
}

export function TransactionMappingStatusSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappingStatusSummary {
    if (json == null) {
        return json;
    }
    return {

        'status': json['status'],
        'latestAttemptAt': json['latestAttemptAt'],
        'failureCount': json['failureCount'],
    };
}

export function TransactionMappingStatusSummaryToJSON(json: any): TransactionMappingStatusSummary {
    return TransactionMappingStatusSummaryToJSONTyped(json, false);
}

export function TransactionMappingStatusSummaryToJSONTyped(value?: TransactionMappingStatusSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': value['status'],
        'latestAttemptAt': value['latestAttemptAt'],
        'failureCount': value['failureCount'],
    };
}
