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
import type { FunctionalAcknowledgmentStatus } from './FunctionalAcknowledgmentStatus.js';
import {
    FunctionalAcknowledgmentStatusFromJSON,
    FunctionalAcknowledgmentStatusFromJSONTyped,
    FunctionalAcknowledgmentStatusToJSON,
    FunctionalAcknowledgmentStatusToJSONTyped,
} from './FunctionalAcknowledgmentStatus.js';
import type { TransactionMdn } from './TransactionMdn.js';
import {
    TransactionMdnFromJSON,
    TransactionMdnFromJSONTyped,
    TransactionMdnToJSON,
    TransactionMdnToJSONTyped,
} from './TransactionMdn.js';

/**
 * Metadata and normalized outcome for a stored X12 997. Fetch the indexed functional-acknowledgment document for the X12 body.
 * @export
 * @interface FunctionalAcknowledgmentDetail
 */
export interface FunctionalAcknowledgmentDetail {
    /**
     * AS2 Message-Id of the stored 997, or `null` when only partial acknowledgment data was retained.
     * @type {string}
     * @memberof FunctionalAcknowledgmentDetail
     */
    messageId: string | null;
    /**
     * Delivery/persistence completion flag from the retained 997 record. True means its acknowledgment lifecycle completed, false means it did not, and `null` means the state is unavailable. This is not sender direction; use the transaction direction and timeline event type to determine whether ModernEDI sent or received the 997.
     * @type {boolean}
     * @memberof FunctionalAcknowledgmentDetail
     */
    sent: boolean | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof FunctionalAcknowledgmentDetail
     */
    timestamp: string | null;
    /**
     * Lowercase SHA-256 of the exact partner runtime configuration recorded for this transaction, receipt, or acknowledgment. It is `null` for legacy rows written before configuration stamping. Scenario verification accepts persisted evidence only when this value exactly matches the partner configuration frozen into the applied binding.
     *
     * @type {string}
     * @memberof FunctionalAcknowledgmentDetail
     */
    partnerConfigurationSha256: string | null;
    /**
     * AS2 receipt assurance state, or `null` when no MDN applies or was recorded.
     * @type {TransactionMdn}
     * @memberof FunctionalAcknowledgmentDetail
     */
    mdn: TransactionMdn | null;
    /**
     *
     * @type {FunctionalAcknowledgmentOutcome}
     * @memberof FunctionalAcknowledgmentDetail
     */
    outcome: FunctionalAcknowledgmentOutcome;
    /**
     * Whether this transaction was evaluated against its exact AK2/AK5 result, its uniquely matched AK1/AK9 group, or the whole-997 aggregate because no group was uniquely attributable.
     * @type {FunctionalAcknowledgmentDetailEvaluationScopeEnum}
     * @memberof FunctionalAcknowledgmentDetail
     */
    evaluationScope: FunctionalAcknowledgmentDetailEvaluationScopeEnum | null;
    /**
     * Unique AK1/AK9 group outcome attributable to this transaction, or `null` when group identity is absent or ambiguous.
     * @type {FunctionalAcknowledgmentGroupOutcome}
     * @memberof FunctionalAcknowledgmentDetail
     */
    groupOutcome: FunctionalAcknowledgmentGroupOutcome | null;
    /**
     * Exact AK2/AK5 outcome attributable to this transaction, or `null`.
     * @type {FunctionalAcknowledgmentTransactionSetOutcome}
     * @memberof FunctionalAcknowledgmentDetail
     */
    transactionOutcome: FunctionalAcknowledgmentTransactionSetOutcome | null;
    /**
     * Status selected for this transaction at `evaluationScope`, or `null` when no evaluation was available.
     * @type {FunctionalAcknowledgmentStatus}
     * @memberof FunctionalAcknowledgmentDetail
     */
    evaluatedStatus: FunctionalAcknowledgmentStatus | null;
}


/**
 * @export
 */
export const FunctionalAcknowledgmentDetailEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    FunctionalGroup: 'functional_group',
    FunctionalAcknowledgment: 'functional_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type FunctionalAcknowledgmentDetailEvaluationScopeEnum = typeof FunctionalAcknowledgmentDetailEvaluationScopeEnum[keyof typeof FunctionalAcknowledgmentDetailEvaluationScopeEnum];


/**
 * Check if a given object implements the FunctionalAcknowledgmentDetail interface.
 */
export function instanceOfFunctionalAcknowledgmentDetail(value: object): value is FunctionalAcknowledgmentDetail {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('partnerConfigurationSha256' in value) || value['partnerConfigurationSha256'] === undefined) return false;
    if (!('mdn' in value) || value['mdn'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('evaluationScope' in value) || value['evaluationScope'] === undefined) return false;
    if (!('groupOutcome' in value) || value['groupOutcome'] === undefined) return false;
    if (!('transactionOutcome' in value) || value['transactionOutcome'] === undefined) return false;
    if (!('evaluatedStatus' in value) || value['evaluatedStatus'] === undefined) return false;
    return true;
}

export function FunctionalAcknowledgmentDetailFromJSON(json: any): FunctionalAcknowledgmentDetail {
    return FunctionalAcknowledgmentDetailFromJSONTyped(json, false);
}

export function FunctionalAcknowledgmentDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionalAcknowledgmentDetail {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'sent': json['sent'],
        'timestamp': json['timestamp'],
        'partnerConfigurationSha256': json['partnerConfigurationSha256'],
        'mdn': TransactionMdnFromJSON(json['mdn']),
        'outcome': FunctionalAcknowledgmentOutcomeFromJSON(json['outcome']),
        'evaluationScope': json['evaluationScope'],
        'groupOutcome': FunctionalAcknowledgmentGroupOutcomeFromJSON(json['groupOutcome']),
        'transactionOutcome': FunctionalAcknowledgmentTransactionSetOutcomeFromJSON(json['transactionOutcome']),
        'evaluatedStatus': FunctionalAcknowledgmentStatusFromJSON(json['evaluatedStatus']),
    };
}

export function FunctionalAcknowledgmentDetailToJSON(json: any): FunctionalAcknowledgmentDetail {
    return FunctionalAcknowledgmentDetailToJSONTyped(json, false);
}

export function FunctionalAcknowledgmentDetailToJSONTyped(value?: FunctionalAcknowledgmentDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'sent': value['sent'],
        'timestamp': value['timestamp'],
        'partnerConfigurationSha256': value['partnerConfigurationSha256'],
        'mdn': TransactionMdnToJSON(value['mdn']),
        'outcome': FunctionalAcknowledgmentOutcomeToJSON(value['outcome']),
        'evaluationScope': value['evaluationScope'],
        'groupOutcome': FunctionalAcknowledgmentGroupOutcomeToJSON(value['groupOutcome']),
        'transactionOutcome': FunctionalAcknowledgmentTransactionSetOutcomeToJSON(value['transactionOutcome']),
        'evaluatedStatus': FunctionalAcknowledgmentStatusToJSON(value['evaluatedStatus']),
    };
}
