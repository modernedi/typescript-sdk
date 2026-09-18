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
 *
 * @export
 * @interface TransactionFunctionalAcknowledgmentEventDetails
 */
export interface TransactionFunctionalAcknowledgmentEventDetails {
    /**
     * AS2 Message-Id of the stored 997.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentEventDetails
     */
    messageId: string | null;
    /**
     * Delivery/persistence completion flag from the retained 997 record, or `null` when unavailable. It does not identify sender direction; use the transaction direction and timeline event type.
     * @type {boolean}
     * @memberof TransactionFunctionalAcknowledgmentEventDetails
     */
    sent: boolean | null;
    /**
     *
     * @type {FunctionalAcknowledgmentOutcome}
     * @memberof TransactionFunctionalAcknowledgmentEventDetails
     */
    outcome: FunctionalAcknowledgmentOutcome;
    /**
     * Whether the enclosing transaction was evaluated from its exact AK2/AK5 result, uniquely matched AK1/AK9 group, or whole-997 ambiguity fallback.
     * @type {TransactionFunctionalAcknowledgmentEventDetailsEvaluationScopeEnum}
     * @memberof TransactionFunctionalAcknowledgmentEventDetails
     */
    evaluationScope: TransactionFunctionalAcknowledgmentEventDetailsEvaluationScopeEnum | null;
    /**
     * Exact AK1/AK9 group selected for the enclosing transaction, or `null` when no group was uniquely attributable.
     * @type {FunctionalAcknowledgmentGroupOutcome}
     * @memberof TransactionFunctionalAcknowledgmentEventDetails
     */
    groupOutcome: FunctionalAcknowledgmentGroupOutcome | null;
    /**
     * Exact AK2/AK5 result selected for the enclosing transaction, or `null`.
     * @type {FunctionalAcknowledgmentTransactionSetOutcome}
     * @memberof TransactionFunctionalAcknowledgmentEventDetails
     */
    transactionOutcome: FunctionalAcknowledgmentTransactionSetOutcome | null;
    /**
     * Status selected by `evaluationScope`, or `null` when no outcome was attributable.
     * @type {TransactionFunctionalAcknowledgmentEventDetailsEvaluatedStatusEnum}
     * @memberof TransactionFunctionalAcknowledgmentEventDetails
     */
    evaluatedStatus: TransactionFunctionalAcknowledgmentEventDetailsEvaluatedStatusEnum | null;
}


/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentEventDetailsEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    FunctionalGroup: 'functional_group',
    FunctionalAcknowledgment: 'functional_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentEventDetailsEvaluationScopeEnum = typeof TransactionFunctionalAcknowledgmentEventDetailsEvaluationScopeEnum[keyof typeof TransactionFunctionalAcknowledgmentEventDetailsEvaluationScopeEnum];

/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentEventDetailsEvaluatedStatusEnum = {
    Accepted: 'accepted',
    AcceptedWithErrors: 'accepted_with_errors',
    PartiallyAccepted: 'partially_accepted',
    Rejected: 'rejected',
    Unknown: 'unknown',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentEventDetailsEvaluatedStatusEnum = typeof TransactionFunctionalAcknowledgmentEventDetailsEvaluatedStatusEnum[keyof typeof TransactionFunctionalAcknowledgmentEventDetailsEvaluatedStatusEnum];


/**
 * Check if a given object implements the TransactionFunctionalAcknowledgmentEventDetails interface.
 */
export function instanceOfTransactionFunctionalAcknowledgmentEventDetails(value: object): value is TransactionFunctionalAcknowledgmentEventDetails {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('evaluationScope' in value) || value['evaluationScope'] === undefined) return false;
    if (!('groupOutcome' in value) || value['groupOutcome'] === undefined) return false;
    if (!('transactionOutcome' in value) || value['transactionOutcome'] === undefined) return false;
    if (!('evaluatedStatus' in value) || value['evaluatedStatus'] === undefined) return false;
    return true;
}

export function TransactionFunctionalAcknowledgmentEventDetailsFromJSON(json: any): TransactionFunctionalAcknowledgmentEventDetails {
    return TransactionFunctionalAcknowledgmentEventDetailsFromJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentEventDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFunctionalAcknowledgmentEventDetails {
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

export function TransactionFunctionalAcknowledgmentEventDetailsToJSON(json: any): TransactionFunctionalAcknowledgmentEventDetails {
    return TransactionFunctionalAcknowledgmentEventDetailsToJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentEventDetailsToJSONTyped(value?: TransactionFunctionalAcknowledgmentEventDetails | null, ignoreDiscriminator: boolean = false): any {
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
