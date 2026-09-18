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
import type { TransactionMdn } from './TransactionMdn.js';
import {
    TransactionMdnFromJSON,
    TransactionMdnFromJSONTyped,
    TransactionMdnToJSON,
    TransactionMdnToJSONTyped,
} from './TransactionMdn.js';
import type { ImplementationAcknowledgmentOutcome } from './ImplementationAcknowledgmentOutcome.js';
import {
    ImplementationAcknowledgmentOutcomeFromJSON,
    ImplementationAcknowledgmentOutcomeFromJSONTyped,
    ImplementationAcknowledgmentOutcomeToJSON,
    ImplementationAcknowledgmentOutcomeToJSONTyped,
} from './ImplementationAcknowledgmentOutcome.js';

/**
 * Metadata and normalized outcome for a stored X12 999. Fetch the indexed implementation-acknowledgment document for the X12 body.
 * @export
 * @interface ImplementationAcknowledgmentDetail
 */
export interface ImplementationAcknowledgmentDetail {
    /**
     * AS2 Message-Id of the stored 999, or `null` when only partial acknowledgment data was retained.
     * @type {string}
     * @memberof ImplementationAcknowledgmentDetail
     */
    messageId: string | null;
    /**
     * Delivery/persistence completion flag from the retained 999 record. True means its acknowledgment lifecycle completed, false means it did not, and `null` means the state is unavailable. This is not sender direction; use the transaction direction and timeline event type to determine whether ModernEDI sent or received the 999.
     * @type {boolean}
     * @memberof ImplementationAcknowledgmentDetail
     */
    sent: boolean | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof ImplementationAcknowledgmentDetail
     */
    timestamp: string | null;
    /**
     * Lowercase SHA-256 of the exact partner runtime configuration recorded for this transaction, receipt, or acknowledgment. It is `null` for legacy rows written before configuration stamping. Scenario verification accepts persisted evidence only when this value exactly matches the partner configuration frozen into the applied binding.
     *
     * @type {string}
     * @memberof ImplementationAcknowledgmentDetail
     */
    partnerConfigurationSha256: string | null;
    /**
     * AS2 receipt assurance state for the 999, or `null` when no MDN applies or was recorded.
     * @type {TransactionMdn}
     * @memberof ImplementationAcknowledgmentDetail
     */
    mdn: TransactionMdn | null;
    /**
     *
     * @type {ImplementationAcknowledgmentOutcome}
     * @memberof ImplementationAcknowledgmentDetail
     */
    outcome: ImplementationAcknowledgmentOutcome;
    /**
     * Whether this transaction was evaluated against its exact AK2/IK5 result, a unique AK1/AK9 group, or the conservative whole-999 aggregate.
     * @type {ImplementationAcknowledgmentDetailEvaluationScopeEnum}
     * @memberof ImplementationAcknowledgmentDetail
     */
    evaluationScope: ImplementationAcknowledgmentDetailEvaluationScopeEnum | null;
    /**
     * Exact AK2/IK5 outcome attributable to this transaction, or `null`.
     * @type {ImplementationAcknowledgmentTransactionSetOutcome}
     * @memberof ImplementationAcknowledgmentDetail
     */
    transactionOutcome: ImplementationAcknowledgmentTransactionSetOutcome | null;
    /**
     * Status selected for this transaction at `evaluationScope`, or `null` when no evaluation was available.
     * @type {ImplementationAcknowledgmentStatus}
     * @memberof ImplementationAcknowledgmentDetail
     */
    evaluatedStatus: ImplementationAcknowledgmentStatus | null;
}


/**
 * @export
 */
export const ImplementationAcknowledgmentDetailEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    ImplementationGroup: 'implementation_group',
    ImplementationAcknowledgment: 'implementation_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ImplementationAcknowledgmentDetailEvaluationScopeEnum = typeof ImplementationAcknowledgmentDetailEvaluationScopeEnum[keyof typeof ImplementationAcknowledgmentDetailEvaluationScopeEnum];


/**
 * Check if a given object implements the ImplementationAcknowledgmentDetail interface.
 */
export function instanceOfImplementationAcknowledgmentDetail(value: object): value is ImplementationAcknowledgmentDetail {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('partnerConfigurationSha256' in value) || value['partnerConfigurationSha256'] === undefined) return false;
    if (!('mdn' in value) || value['mdn'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('evaluationScope' in value) || value['evaluationScope'] === undefined) return false;
    if (!('transactionOutcome' in value) || value['transactionOutcome'] === undefined) return false;
    if (!('evaluatedStatus' in value) || value['evaluatedStatus'] === undefined) return false;
    return true;
}

export function ImplementationAcknowledgmentDetailFromJSON(json: any): ImplementationAcknowledgmentDetail {
    return ImplementationAcknowledgmentDetailFromJSONTyped(json, false);
}

export function ImplementationAcknowledgmentDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentDetail {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'sent': json['sent'],
        'timestamp': json['timestamp'],
        'partnerConfigurationSha256': json['partnerConfigurationSha256'],
        'mdn': TransactionMdnFromJSON(json['mdn']),
        'outcome': ImplementationAcknowledgmentOutcomeFromJSON(json['outcome']),
        'evaluationScope': json['evaluationScope'],
        'transactionOutcome': ImplementationAcknowledgmentTransactionSetOutcomeFromJSON(json['transactionOutcome']),
        'evaluatedStatus': ImplementationAcknowledgmentStatusFromJSON(json['evaluatedStatus']),
    };
}

export function ImplementationAcknowledgmentDetailToJSON(json: any): ImplementationAcknowledgmentDetail {
    return ImplementationAcknowledgmentDetailToJSONTyped(json, false);
}

export function ImplementationAcknowledgmentDetailToJSONTyped(value?: ImplementationAcknowledgmentDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'sent': value['sent'],
        'timestamp': value['timestamp'],
        'partnerConfigurationSha256': value['partnerConfigurationSha256'],
        'mdn': TransactionMdnToJSON(value['mdn']),
        'outcome': ImplementationAcknowledgmentOutcomeToJSON(value['outcome']),
        'evaluationScope': value['evaluationScope'],
        'transactionOutcome': ImplementationAcknowledgmentTransactionSetOutcomeToJSON(value['transactionOutcome']),
        'evaluatedStatus': ImplementationAcknowledgmentStatusToJSON(value['evaluatedStatus']),
    };
}
