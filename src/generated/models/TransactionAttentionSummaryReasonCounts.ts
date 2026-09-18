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
 * Active transaction counts by independently applicable attention reason.
 * @export
 * @interface TransactionAttentionSummaryReasonCounts
 */
export interface TransactionAttentionSummaryReasonCounts {
    /**
     * Transactions with one or more unresolved mapping attempts.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    mappingFailure: number;
    /**
     * Transactions with a received 997 that was not cleanly accepted.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    functionalAckIssue: number;
    /**
     * Transactions with a received 999 whose selected IK5 or AK9 result was not cleanly accepted.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    implementationAckIssue: number;
    /**
     * Eligible outbound transactions with neither a 997 nor a 999 received by their response deadline.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    x12AckOverdue: number;
    /**
     * Outbound transactions whose requested TA1 rejected the interchange, reported errors, or could not be classified.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    technicalAckIssue: number;
    /**
     * Outbound transactions whose ISA14 requested a TA1 that was not received by its response deadline.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    technicalAckOverdue: number;
    /**
     * Outbound transactions whose AS2 MDN is overdue or was received with a warning, rejection, validation failure, or content-MIC mismatch.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    as2MdnAttention: number;
    /**
     * Transactions with at least one managed output that was not collected within the 15-minute pickup grace period.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    mappedOutputNotCollected: number;
    /**
     * Transactions with an expired unacknowledged output lease or an unacknowledged redelivery.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    mappedOutputAckOverdue: number;
    /**
     * Transactions placed on an active operator watchlist independently of automated failure signals.
     * @type {number}
     * @memberof TransactionAttentionSummaryReasonCounts
     */
    watchlist: number;
}

/**
 * Check if a given object implements the TransactionAttentionSummaryReasonCounts interface.
 */
export function instanceOfTransactionAttentionSummaryReasonCounts(value: object): value is TransactionAttentionSummaryReasonCounts {
    if (!('mappingFailure' in value) || value['mappingFailure'] === undefined) return false;
    if (!('functionalAckIssue' in value) || value['functionalAckIssue'] === undefined) return false;
    if (!('implementationAckIssue' in value) || value['implementationAckIssue'] === undefined) return false;
    if (!('x12AckOverdue' in value) || value['x12AckOverdue'] === undefined) return false;
    if (!('technicalAckIssue' in value) || value['technicalAckIssue'] === undefined) return false;
    if (!('technicalAckOverdue' in value) || value['technicalAckOverdue'] === undefined) return false;
    if (!('as2MdnAttention' in value) || value['as2MdnAttention'] === undefined) return false;
    if (!('mappedOutputNotCollected' in value) || value['mappedOutputNotCollected'] === undefined) return false;
    if (!('mappedOutputAckOverdue' in value) || value['mappedOutputAckOverdue'] === undefined) return false;
    if (!('watchlist' in value) || value['watchlist'] === undefined) return false;
    return true;
}

export function TransactionAttentionSummaryReasonCountsFromJSON(json: any): TransactionAttentionSummaryReasonCounts {
    return TransactionAttentionSummaryReasonCountsFromJSONTyped(json, false);
}

export function TransactionAttentionSummaryReasonCountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAttentionSummaryReasonCounts {
    if (json == null) {
        return json;
    }
    return {

        'mappingFailure': json['mappingFailure'],
        'functionalAckIssue': json['functionalAckIssue'],
        'implementationAckIssue': json['implementationAckIssue'],
        'x12AckOverdue': json['x12AckOverdue'],
        'technicalAckIssue': json['technicalAckIssue'],
        'technicalAckOverdue': json['technicalAckOverdue'],
        'as2MdnAttention': json['as2MdnAttention'],
        'mappedOutputNotCollected': json['mappedOutputNotCollected'],
        'mappedOutputAckOverdue': json['mappedOutputAckOverdue'],
        'watchlist': json['watchlist'],
    };
}

export function TransactionAttentionSummaryReasonCountsToJSON(json: any): TransactionAttentionSummaryReasonCounts {
    return TransactionAttentionSummaryReasonCountsToJSONTyped(json, false);
}

export function TransactionAttentionSummaryReasonCountsToJSONTyped(value?: TransactionAttentionSummaryReasonCounts | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'mappingFailure': value['mappingFailure'],
        'functionalAckIssue': value['functionalAckIssue'],
        'implementationAckIssue': value['implementationAckIssue'],
        'x12AckOverdue': value['x12AckOverdue'],
        'technicalAckIssue': value['technicalAckIssue'],
        'technicalAckOverdue': value['technicalAckOverdue'],
        'as2MdnAttention': value['as2MdnAttention'],
        'mappedOutputNotCollected': value['mappedOutputNotCollected'],
        'mappedOutputAckOverdue': value['mappedOutputAckOverdue'],
        'watchlist': value['watchlist'],
    };
}
