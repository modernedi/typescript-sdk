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
import type { FunctionalAcknowledgmentOutcome } from './FunctionalAcknowledgmentOutcome.js';
import {
    FunctionalAcknowledgmentOutcomeFromJSON,
    FunctionalAcknowledgmentOutcomeFromJSONTyped,
    FunctionalAcknowledgmentOutcomeToJSON,
    FunctionalAcknowledgmentOutcomeToJSONTyped,
} from './FunctionalAcknowledgmentOutcome.js';
import type { FunctionalAcknowledgmentTransactionSetOutcome } from './FunctionalAcknowledgmentTransactionSetOutcome.js';
import {
    FunctionalAcknowledgmentTransactionSetOutcomeFromJSON,
    FunctionalAcknowledgmentTransactionSetOutcomeFromJSONTyped,
    FunctionalAcknowledgmentTransactionSetOutcomeToJSON,
    FunctionalAcknowledgmentTransactionSetOutcomeToJSONTyped,
} from './FunctionalAcknowledgmentTransactionSetOutcome.js';
import type { FunctionalAcknowledgmentGroupOutcome } from './FunctionalAcknowledgmentGroupOutcome.js';
import {
    FunctionalAcknowledgmentGroupOutcomeFromJSON,
    FunctionalAcknowledgmentGroupOutcomeFromJSONTyped,
    FunctionalAcknowledgmentGroupOutcomeToJSON,
    FunctionalAcknowledgmentGroupOutcomeToJSONTyped,
} from './FunctionalAcknowledgmentGroupOutcome.js';

/**
 * Normalized X12 997 outcome and the evaluation selected for the enclosing transaction.
 * @export
 * @interface TransactionFunctionalAcknowledgmentDocumentMetadata
 */
export interface TransactionFunctionalAcknowledgmentDocumentMetadata {
    /**
     * AS2 Message-Id of the stored 997.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentDocumentMetadata
     */
    messageId: string | null;
    /**
     * Delivery/persistence completion flag from the retained 997 record, or `null` when unavailable. It does not identify sender direction; use the transaction direction and timeline event type.
     * @type {boolean}
     * @memberof TransactionFunctionalAcknowledgmentDocumentMetadata
     */
    sent: boolean | null;
    /**
     *
     * @type {FunctionalAcknowledgmentOutcome}
     * @memberof TransactionFunctionalAcknowledgmentDocumentMetadata
     */
    outcome: FunctionalAcknowledgmentOutcome;
    /**
     * Whether the enclosing transaction was evaluated from its exact AK2/AK5 result, uniquely matched AK1/AK9 group, or whole-997 ambiguity fallback.
     * @type {TransactionFunctionalAcknowledgmentDocumentMetadataEvaluationScopeEnum}
     * @memberof TransactionFunctionalAcknowledgmentDocumentMetadata
     */
    evaluationScope: TransactionFunctionalAcknowledgmentDocumentMetadataEvaluationScopeEnum | null;
    /**
     * Exact AK1/AK9 group selected for the enclosing transaction, or `null` when no group was uniquely attributable.
     * @type {FunctionalAcknowledgmentGroupOutcome}
     * @memberof TransactionFunctionalAcknowledgmentDocumentMetadata
     */
    groupOutcome: FunctionalAcknowledgmentGroupOutcome | null;
    /**
     * Exact AK2/AK5 result selected for the enclosing transaction, or `null`.
     * @type {FunctionalAcknowledgmentTransactionSetOutcome}
     * @memberof TransactionFunctionalAcknowledgmentDocumentMetadata
     */
    transactionOutcome: FunctionalAcknowledgmentTransactionSetOutcome | null;
    /**
     * Status selected by `evaluationScope`, or `null` when no outcome was attributable.
     * @type {TransactionFunctionalAcknowledgmentDocumentMetadataEvaluatedStatusEnum}
     * @memberof TransactionFunctionalAcknowledgmentDocumentMetadata
     */
    evaluatedStatus: TransactionFunctionalAcknowledgmentDocumentMetadataEvaluatedStatusEnum | null;
}


/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentDocumentMetadataEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    FunctionalGroup: 'functional_group',
    FunctionalAcknowledgment: 'functional_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentDocumentMetadataEvaluationScopeEnum = typeof TransactionFunctionalAcknowledgmentDocumentMetadataEvaluationScopeEnum[keyof typeof TransactionFunctionalAcknowledgmentDocumentMetadataEvaluationScopeEnum];

/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentDocumentMetadataEvaluatedStatusEnum = {
    Accepted: 'accepted',
    AcceptedWithErrors: 'accepted_with_errors',
    PartiallyAccepted: 'partially_accepted',
    Rejected: 'rejected',
    Unknown: 'unknown',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentDocumentMetadataEvaluatedStatusEnum = typeof TransactionFunctionalAcknowledgmentDocumentMetadataEvaluatedStatusEnum[keyof typeof TransactionFunctionalAcknowledgmentDocumentMetadataEvaluatedStatusEnum];


/**
 * Check if a given object implements the TransactionFunctionalAcknowledgmentDocumentMetadata interface.
 */
export function instanceOfTransactionFunctionalAcknowledgmentDocumentMetadata(value: object): value is TransactionFunctionalAcknowledgmentDocumentMetadata {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('evaluationScope' in value) || value['evaluationScope'] === undefined) return false;
    if (!('groupOutcome' in value) || value['groupOutcome'] === undefined) return false;
    if (!('transactionOutcome' in value) || value['transactionOutcome'] === undefined) return false;
    if (!('evaluatedStatus' in value) || value['evaluatedStatus'] === undefined) return false;
    return true;
}

export function TransactionFunctionalAcknowledgmentDocumentMetadataFromJSON(json: any): TransactionFunctionalAcknowledgmentDocumentMetadata {
    return TransactionFunctionalAcknowledgmentDocumentMetadataFromJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFunctionalAcknowledgmentDocumentMetadata {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'sent': json['sent'],
        'outcome': FunctionalAcknowledgmentOutcomeFromJSON(json['outcome']),
        'evaluationScope': json['evaluationScope'],
        'groupOutcome': FunctionalAcknowledgmentGroupOutcomeFromJSON(json['groupOutcome']),
        'transactionOutcome': FunctionalAcknowledgmentTransactionSetOutcomeFromJSON(json['transactionOutcome']),
        'evaluatedStatus': json['evaluatedStatus'],
    };
}

export function TransactionFunctionalAcknowledgmentDocumentMetadataToJSON(json: any): TransactionFunctionalAcknowledgmentDocumentMetadata {
    return TransactionFunctionalAcknowledgmentDocumentMetadataToJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentDocumentMetadataToJSONTyped(value?: TransactionFunctionalAcknowledgmentDocumentMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'sent': value['sent'],
        'outcome': FunctionalAcknowledgmentOutcomeToJSON(value['outcome']),
        'evaluationScope': value['evaluationScope'],
        'groupOutcome': FunctionalAcknowledgmentGroupOutcomeToJSON(value['groupOutcome']),
        'transactionOutcome': FunctionalAcknowledgmentTransactionSetOutcomeToJSON(value['transactionOutcome']),
        'evaluatedStatus': value['evaluatedStatus'],
    };
}
