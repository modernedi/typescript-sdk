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
 *
 * @export
 * @interface TransactionImplementationAcknowledgmentEventDetails
 */
export interface TransactionImplementationAcknowledgmentEventDetails {
    /**
     * AS2 Message-Id of the stored 999.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentEventDetails
     */
    messageId: string | null;
    /**
     * Delivery/persistence completion flag from the retained 999 record, or `null` when unavailable. It does not identify sender direction; use the transaction direction and timeline event type.
     * @type {boolean}
     * @memberof TransactionImplementationAcknowledgmentEventDetails
     */
    sent: boolean | null;
    /**
     *
     * @type {ImplementationAcknowledgmentOutcome}
     * @memberof TransactionImplementationAcknowledgmentEventDetails
     */
    outcome: ImplementationAcknowledgmentOutcome;
    /**
     * Whether the enclosing transaction was evaluated from its exact IK5 result, a unique AK9 group result, or the conservative whole-999 aggregate.
     * @type {TransactionImplementationAcknowledgmentEventDetailsEvaluationScopeEnum}
     * @memberof TransactionImplementationAcknowledgmentEventDetails
     */
    evaluationScope: TransactionImplementationAcknowledgmentEventDetailsEvaluationScopeEnum | null;
    /**
     * Exact AK2/IK5 result selected for the enclosing transaction, or `null`.
     * @type {ImplementationAcknowledgmentTransactionSetOutcome}
     * @memberof TransactionImplementationAcknowledgmentEventDetails
     */
    transactionOutcome: ImplementationAcknowledgmentTransactionSetOutcome | null;
    /**
     * Status selected by `evaluationScope`, or `null` when no outcome was attributable.
     * @type {ImplementationAcknowledgmentStatus}
     * @memberof TransactionImplementationAcknowledgmentEventDetails
     */
    evaluatedStatus: ImplementationAcknowledgmentStatus | null;
}


/**
 * @export
 */
export const TransactionImplementationAcknowledgmentEventDetailsEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    ImplementationGroup: 'implementation_group',
    ImplementationAcknowledgment: 'implementation_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentEventDetailsEvaluationScopeEnum = typeof TransactionImplementationAcknowledgmentEventDetailsEvaluationScopeEnum[keyof typeof TransactionImplementationAcknowledgmentEventDetailsEvaluationScopeEnum];


/**
 * Check if a given object implements the TransactionImplementationAcknowledgmentEventDetails interface.
 */
export function instanceOfTransactionImplementationAcknowledgmentEventDetails(value: object): value is TransactionImplementationAcknowledgmentEventDetails {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('evaluationScope' in value) || value['evaluationScope'] === undefined) return false;
    if (!('transactionOutcome' in value) || value['transactionOutcome'] === undefined) return false;
    if (!('evaluatedStatus' in value) || value['evaluatedStatus'] === undefined) return false;
    return true;
}

export function TransactionImplementationAcknowledgmentEventDetailsFromJSON(json: any): TransactionImplementationAcknowledgmentEventDetails {
    return TransactionImplementationAcknowledgmentEventDetailsFromJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentEventDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionImplementationAcknowledgmentEventDetails {
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

export function TransactionImplementationAcknowledgmentEventDetailsToJSON(json: any): TransactionImplementationAcknowledgmentEventDetails {
    return TransactionImplementationAcknowledgmentEventDetailsToJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentEventDetailsToJSONTyped(value?: TransactionImplementationAcknowledgmentEventDetails | null, ignoreDiscriminator: boolean = false): any {
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
