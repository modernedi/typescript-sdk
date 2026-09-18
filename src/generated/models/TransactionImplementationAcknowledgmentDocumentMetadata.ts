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
import type { ImplementationAcknowledgmentStatus } from './ImplementationAcknowledgmentStatus.js';
import {
    ImplementationAcknowledgmentStatusFromJSON,
    ImplementationAcknowledgmentStatusFromJSONTyped,
    ImplementationAcknowledgmentStatusToJSON,
    ImplementationAcknowledgmentStatusToJSONTyped,
} from './ImplementationAcknowledgmentStatus.js';
import type { ImplementationAcknowledgmentTransactionSetOutcome } from './ImplementationAcknowledgmentTransactionSetOutcome.js';
import {
    ImplementationAcknowledgmentTransactionSetOutcomeFromJSON,
    ImplementationAcknowledgmentTransactionSetOutcomeFromJSONTyped,
    ImplementationAcknowledgmentTransactionSetOutcomeToJSON,
    ImplementationAcknowledgmentTransactionSetOutcomeToJSONTyped,
} from './ImplementationAcknowledgmentTransactionSetOutcome.js';
import type { ImplementationAcknowledgmentOutcome } from './ImplementationAcknowledgmentOutcome.js';
import {
    ImplementationAcknowledgmentOutcomeFromJSON,
    ImplementationAcknowledgmentOutcomeFromJSONTyped,
    ImplementationAcknowledgmentOutcomeToJSON,
    ImplementationAcknowledgmentOutcomeToJSONTyped,
} from './ImplementationAcknowledgmentOutcome.js';

/**
 * Normalized X12 999 outcome and the evaluation selected for the enclosing transaction.
 * @export
 * @interface TransactionImplementationAcknowledgmentDocumentMetadata
 */
export interface TransactionImplementationAcknowledgmentDocumentMetadata {
    /**
     * AS2 Message-Id of the stored 999.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentDocumentMetadata
     */
    messageId: string | null;
    /**
     * Delivery/persistence completion flag from the retained 999 record, or `null` when unavailable. It does not identify sender direction; use the transaction direction and timeline event type.
     * @type {boolean}
     * @memberof TransactionImplementationAcknowledgmentDocumentMetadata
     */
    sent: boolean | null;
    /**
     *
     * @type {ImplementationAcknowledgmentOutcome}
     * @memberof TransactionImplementationAcknowledgmentDocumentMetadata
     */
    outcome: ImplementationAcknowledgmentOutcome;
    /**
     * Whether the enclosing transaction was evaluated from its exact IK5 result, a unique AK9 group result, or the conservative whole-999 aggregate.
     * @type {TransactionImplementationAcknowledgmentDocumentMetadataEvaluationScopeEnum}
     * @memberof TransactionImplementationAcknowledgmentDocumentMetadata
     */
    evaluationScope: TransactionImplementationAcknowledgmentDocumentMetadataEvaluationScopeEnum | null;
    /**
     * Exact AK2/IK5 result selected for the enclosing transaction, or `null`.
     * @type {ImplementationAcknowledgmentTransactionSetOutcome}
     * @memberof TransactionImplementationAcknowledgmentDocumentMetadata
     */
    transactionOutcome: ImplementationAcknowledgmentTransactionSetOutcome | null;
    /**
     * Status selected by `evaluationScope`, or `null` when no outcome was attributable.
     * @type {ImplementationAcknowledgmentStatus}
     * @memberof TransactionImplementationAcknowledgmentDocumentMetadata
     */
    evaluatedStatus: ImplementationAcknowledgmentStatus | null;
}


/**
 * @export
 */
export const TransactionImplementationAcknowledgmentDocumentMetadataEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    ImplementationGroup: 'implementation_group',
    ImplementationAcknowledgment: 'implementation_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentDocumentMetadataEvaluationScopeEnum = typeof TransactionImplementationAcknowledgmentDocumentMetadataEvaluationScopeEnum[keyof typeof TransactionImplementationAcknowledgmentDocumentMetadataEvaluationScopeEnum];


/**
 * Check if a given object implements the TransactionImplementationAcknowledgmentDocumentMetadata interface.
 */
export function instanceOfTransactionImplementationAcknowledgmentDocumentMetadata(value: object): value is TransactionImplementationAcknowledgmentDocumentMetadata {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('evaluationScope' in value) || value['evaluationScope'] === undefined) return false;
    if (!('transactionOutcome' in value) || value['transactionOutcome'] === undefined) return false;
    if (!('evaluatedStatus' in value) || value['evaluatedStatus'] === undefined) return false;
    return true;
}

export function TransactionImplementationAcknowledgmentDocumentMetadataFromJSON(json: any): TransactionImplementationAcknowledgmentDocumentMetadata {
    return TransactionImplementationAcknowledgmentDocumentMetadataFromJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionImplementationAcknowledgmentDocumentMetadata {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'sent': json['sent'],
        'outcome': ImplementationAcknowledgmentOutcomeFromJSON(json['outcome']),
        'evaluationScope': json['evaluationScope'],
        'transactionOutcome': ImplementationAcknowledgmentTransactionSetOutcomeFromJSON(json['transactionOutcome']),
        'evaluatedStatus': ImplementationAcknowledgmentStatusFromJSON(json['evaluatedStatus']),
    };
}

export function TransactionImplementationAcknowledgmentDocumentMetadataToJSON(json: any): TransactionImplementationAcknowledgmentDocumentMetadata {
    return TransactionImplementationAcknowledgmentDocumentMetadataToJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentDocumentMetadataToJSONTyped(value?: TransactionImplementationAcknowledgmentDocumentMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'sent': value['sent'],
        'outcome': ImplementationAcknowledgmentOutcomeToJSON(value['outcome']),
        'evaluationScope': value['evaluationScope'],
        'transactionOutcome': ImplementationAcknowledgmentTransactionSetOutcomeToJSON(value['transactionOutcome']),
        'evaluatedStatus': ImplementationAcknowledgmentStatusToJSON(value['evaluatedStatus']),
    };
}
