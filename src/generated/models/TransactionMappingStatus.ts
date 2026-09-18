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
import type { TransactionMappingAttempt } from './TransactionMappingAttempt.js';
import {
    TransactionMappingAttemptFromJSON,
    TransactionMappingAttemptFromJSONTyped,
    TransactionMappingAttemptToJSON,
    TransactionMappingAttemptToJSONTyped,
} from './TransactionMappingAttempt.js';

/**
 *
 * @export
 * @interface TransactionMappingStatus
 */
export interface TransactionMappingStatus {
    /**
     * Consolidated mapping outcome. `NOT_RECORDED` means no mapping runtime result was found; it does not claim that a map ran successfully. `UNAVAILABLE` means mapping telemetry could not be read while this response was built. It is fail-soft, has `failureCount: 0`, and does not by itself set `needsAttention`; retry before drawing a conclusion. `RECOVERED` means earlier failures were resolved by a later successful attempt. `COMPLETED_WITH_ERRORS` means at least one attempt succeeded while another failure remains unresolved.
     *
     * @type {TransactionMappingStatusStatusEnum}
     * @memberof TransactionMappingStatus
     */
    status: TransactionMappingStatusStatusEnum;
    /**
     * Timestamp of the latest mapping attempt or fallback post-process status.
     * @type {string}
     * @memberof TransactionMappingStatus
     */
    latestAttemptAt: string | null;
    /**
     * Number of unresolved mapping failures for this transaction.
     * @type {number}
     * @memberof TransactionMappingStatus
     */
    failureCount: number;
    /**
     * Mapping attempts in reverse chronological order. This is empty when only fallback post-process status is available.
     * @type {Array<TransactionMappingAttempt>}
     * @memberof TransactionMappingStatus
     */
    attempts: Array<TransactionMappingAttempt>;
}


/**
 * @export
 */
export const TransactionMappingStatusStatusEnum = {
    NotRecorded: 'NOT_RECORDED',
    Unavailable: 'UNAVAILABLE',
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    CompletedWithErrors: 'COMPLETED_WITH_ERRORS',
    Recovered: 'RECOVERED',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappingStatusStatusEnum = typeof TransactionMappingStatusStatusEnum[keyof typeof TransactionMappingStatusStatusEnum];


/**
 * Check if a given object implements the TransactionMappingStatus interface.
 */
export function instanceOfTransactionMappingStatus(value: object): value is TransactionMappingStatus {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('latestAttemptAt' in value) || value['latestAttemptAt'] === undefined) return false;
    if (!('failureCount' in value) || value['failureCount'] === undefined) return false;
    if (!('attempts' in value) || value['attempts'] === undefined) return false;
    return true;
}

export function TransactionMappingStatusFromJSON(json: any): TransactionMappingStatus {
    return TransactionMappingStatusFromJSONTyped(json, false);
}

export function TransactionMappingStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappingStatus {
    if (json == null) {
        return json;
    }
    return {

        'status': json['status'],
        'latestAttemptAt': json['latestAttemptAt'],
        'failureCount': json['failureCount'],
        'attempts': ((json['attempts'] as Array<any>).map(TransactionMappingAttemptFromJSON)),
    };
}

export function TransactionMappingStatusToJSON(json: any): TransactionMappingStatus {
    return TransactionMappingStatusToJSONTyped(json, false);
}

export function TransactionMappingStatusToJSONTyped(value?: TransactionMappingStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': value['status'],
        'latestAttemptAt': value['latestAttemptAt'],
        'failureCount': value['failureCount'],
        'attempts': ((value['attempts'] as Array<any>).map(TransactionMappingAttemptToJSON)),
    };
}
