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
import type { FunctionalAcknowledgmentTransactionSetOutcome } from './FunctionalAcknowledgmentTransactionSetOutcome.js';
import {
    FunctionalAcknowledgmentTransactionSetOutcomeFromJSON,
    FunctionalAcknowledgmentTransactionSetOutcomeFromJSONTyped,
    FunctionalAcknowledgmentTransactionSetOutcomeToJSON,
    FunctionalAcknowledgmentTransactionSetOutcomeToJSONTyped,
} from './FunctionalAcknowledgmentTransactionSetOutcome.js';
import type { ImplementationAcknowledgmentTransactionSetOutcome } from './ImplementationAcknowledgmentTransactionSetOutcome.js';
import {
    ImplementationAcknowledgmentTransactionSetOutcomeFromJSON,
    ImplementationAcknowledgmentTransactionSetOutcomeFromJSONTyped,
    ImplementationAcknowledgmentTransactionSetOutcomeToJSON,
    ImplementationAcknowledgmentTransactionSetOutcomeToJSONTyped,
} from './ImplementationAcknowledgmentTransactionSetOutcome.js';
import type { TransactionSet } from './TransactionSet.js';
import {
    TransactionSetFromJSON,
    TransactionSetFromJSONTyped,
    TransactionSetToJSON,
    TransactionSetToJSONTyped,
} from './TransactionSet.js';
import type { TechnicalAcknowledgmentStatus } from './TechnicalAcknowledgmentStatus.js';
import {
    TechnicalAcknowledgmentStatusFromJSON,
    TechnicalAcknowledgmentStatusFromJSONTyped,
    TechnicalAcknowledgmentStatusToJSON,
    TechnicalAcknowledgmentStatusToJSONTyped,
} from './TechnicalAcknowledgmentStatus.js';
import type { FunctionalAcknowledgmentSummary } from './FunctionalAcknowledgmentSummary.js';
import {
    FunctionalAcknowledgmentSummaryFromJSON,
    FunctionalAcknowledgmentSummaryFromJSONTyped,
    FunctionalAcknowledgmentSummaryToJSON,
    FunctionalAcknowledgmentSummaryToJSONTyped,
} from './FunctionalAcknowledgmentSummary.js';
import type { ImplementationAcknowledgmentSummary } from './ImplementationAcknowledgmentSummary.js';
import {
    ImplementationAcknowledgmentSummaryFromJSON,
    ImplementationAcknowledgmentSummaryFromJSONTyped,
    ImplementationAcknowledgmentSummaryToJSON,
    ImplementationAcknowledgmentSummaryToJSONTyped,
} from './ImplementationAcknowledgmentSummary.js';
import type { TechnicalAcknowledgmentOutcome } from './TechnicalAcknowledgmentOutcome.js';
import {
    TechnicalAcknowledgmentOutcomeFromJSON,
    TechnicalAcknowledgmentOutcomeFromJSONTyped,
    TechnicalAcknowledgmentOutcomeToJSON,
    TechnicalAcknowledgmentOutcomeToJSONTyped,
} from './TechnicalAcknowledgmentOutcome.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';
import type { TransactionBusinessKey } from './TransactionBusinessKey.js';
import {
    TransactionBusinessKeyFromJSON,
    TransactionBusinessKeyFromJSONTyped,
    TransactionBusinessKeyToJSON,
    TransactionBusinessKeyToJSONTyped,
} from './TransactionBusinessKey.js';
import type { ImplementationAcknowledgmentEvaluationScope } from './ImplementationAcknowledgmentEvaluationScope.js';
import {
    ImplementationAcknowledgmentEvaluationScopeFromJSON,
    ImplementationAcknowledgmentEvaluationScopeFromJSONTyped,
    ImplementationAcknowledgmentEvaluationScopeToJSON,
    ImplementationAcknowledgmentEvaluationScopeToJSONTyped,
} from './ImplementationAcknowledgmentEvaluationScope.js';
import type { ImplementationAcknowledgmentStatus } from './ImplementationAcknowledgmentStatus.js';
import {
    ImplementationAcknowledgmentStatusFromJSON,
    ImplementationAcknowledgmentStatusFromJSONTyped,
    ImplementationAcknowledgmentStatusToJSON,
    ImplementationAcknowledgmentStatusToJSONTyped,
} from './ImplementationAcknowledgmentStatus.js';
import type { TransactionEdiMetadata } from './TransactionEdiMetadata.js';
import {
    TransactionEdiMetadataFromJSON,
    TransactionEdiMetadataFromJSONTyped,
    TransactionEdiMetadataToJSON,
    TransactionEdiMetadataToJSONTyped,
} from './TransactionEdiMetadata.js';
import type { TransactionAttentionReason } from './TransactionAttentionReason.js';
import {
    TransactionAttentionReasonFromJSON,
    TransactionAttentionReasonFromJSONTyped,
    TransactionAttentionReasonToJSON,
    TransactionAttentionReasonToJSONTyped,
} from './TransactionAttentionReason.js';
import type { TransactionControlNumbers } from './TransactionControlNumbers.js';
import {
    TransactionControlNumbersFromJSON,
    TransactionControlNumbersFromJSONTyped,
    TransactionControlNumbersToJSON,
    TransactionControlNumbersToJSONTyped,
} from './TransactionControlNumbers.js';
import type { TransactionMappingStatusSummary } from './TransactionMappingStatusSummary.js';
import {
    TransactionMappingStatusSummaryFromJSON,
    TransactionMappingStatusSummaryFromJSONTyped,
    TransactionMappingStatusSummaryToJSON,
    TransactionMappingStatusSummaryToJSONTyped,
} from './TransactionMappingStatusSummary.js';
import type { FunctionalAcknowledgmentGroupSummary } from './FunctionalAcknowledgmentGroupSummary.js';
import {
    FunctionalAcknowledgmentGroupSummaryFromJSON,
    FunctionalAcknowledgmentGroupSummaryFromJSONTyped,
    FunctionalAcknowledgmentGroupSummaryToJSON,
    FunctionalAcknowledgmentGroupSummaryToJSONTyped,
} from './FunctionalAcknowledgmentGroupSummary.js';

/**
 * Stable list-level transaction identity, partner context, acknowledgment state, and operator-attention projection.
 * @export
 * @interface TransactionSummary
 */
export interface TransactionSummary {
    /**
     * Convenience id formatted as `<messageId>/<transactionKey>`.
     * @type {string}
     * @memberof TransactionSummary
     */
    id: string;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionSummary
     */
    environment: TransactionEnvironmentValue;
    /**
     * Stable operator-inbox signal. True when an unexpired watchlist entry is active, a mapping failure remains unresolved, or the 997 outcome selected by `functionalAckEvaluationScope` or the 999 outcome selected by `implementationAckEvaluationScope` is present and is not `accepted`, or neither a 997 nor a 999 was received for an eligible outbound transaction by `x12AcknowledgmentExpectedBy`, or a requested TA1 rejected the interchange, reported errors, could not be classified, or was not received by `technicalAckExpectedBy`, or when a managed output remained uncollected beyond its 15-minute pickup grace period, or when a delivered output was not acknowledged before its lease expired or was redelivered. A newly ready output inside the grace period and an active first lease are normal handoff progress and do not set this signal by themselves.
     *
     * @type {boolean}
     * @memberof TransactionSummary
     */
    needsAttention: boolean;
    /**
     * Active machine-readable reasons behind `needsAttention`.
     * @type {Set<TransactionAttentionReason>}
     * @memberof TransactionSummary
     */
    attentionReasons: Set<TransactionAttentionReason>;
    /**
     * True while an active watchlist entry exists for this transaction. Entries created through the Integration API remain active until `DELETE /v1/integration/transactions/{messageId}/{transactionKey}/watch` removes them. An active watch is also represented by the `watchlist` attention reason.
     *
     * @type {boolean}
     * @memberof TransactionSummary
     */
    onWatchlist: boolean;
    /**
     *
     * @type {TransactionMappingStatusSummary}
     * @memberof TransactionSummary
     */
    mappingStatus: TransactionMappingStatusSummary;
    /**
     * Compact 997 status selected for this transaction. ModernEDI uses a uniquely matched AK2/AK5 outcome when possible, otherwise the uniquely matched AK1/AK9 functional-group outcome, and only then the conservative whole-997 aggregate. Null means no attributable 997 status is currently available. Use `x12_ack_overdue` for an actionable missing X12 acknowledgment.
     *
     * @type {TransactionSummaryFunctionalAckStatusEnum}
     * @memberof TransactionSummary
     */
    functionalAckStatus: TransactionSummaryFunctionalAckStatusEnum | null;
    /**
     * Compact 999 status selected for this transaction. ModernEDI uses a uniquely matched AK2/IK5 result when possible. Group fallback conservatively reduces the matching AK9 status with every nested IK5 status, and whole-999 fallback reduces the aggregate with every flattened IK5 status. A non-accepted primary fallback remains authoritative. An accepted primary with any nested `unknown` becomes `unknown`; an accepted primary with any definitive non-clean nested result becomes `accepted_with_errors`, not the sibling's rejection or partial disposition. This prevents a raw accepted fallback from hiding a non-clean result or falsely assigning a sibling's disposition to this row, without changing the raw AK9 or IK5 fields. Null means no attributable 999 status is currently available.
     *
     * @type {ImplementationAcknowledgmentStatus}
     * @memberof TransactionSummary
     */
    implementationAckStatus: ImplementationAcknowledgmentStatus | null;
    /**
     * Compact normalized AS2 receipt-assurance status. Null means no MDN status applies or the asynchronous status projection has not indexed this row yet. Check `attentionSummary.freshness` on list responses before interpreting a null during projection bootstrap.
     *
     * @type {TransactionSummaryMdnStatusEnum}
     * @memberof TransactionSummary
     */
    mdnStatus: TransactionSummaryMdnStatusEnum | null;
    /**
     * AS2 Message-Id for this transaction.
     * @type {string}
     * @memberof TransactionSummary
     */
    messageId: string;
    /**
     * Transaction identifier within the AS2 message, usually `GS06#ST02`.
     * @type {string}
     * @memberof TransactionSummary
     */
    transactionKey: string;
    /**
     * Present on outbound replies and points back to the inbound AS2 message id.
     * @type {string}
     * @memberof TransactionSummary
     */
    replyToMessageId: string | null;
    /**
     * Exact inbound transaction key for an outbound reply, or `null` for a transaction that is not a reply. Related-transaction queries attach the reply only to this transaction inside `replyToMessageId`.
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    replyToTransactionKey: string | null;
    /**
     * Direction across the ModernEDI boundary: inbound from the partner or outbound to the partner.
     * @type {TransactionSummaryDirectionEnum}
     * @memberof TransactionSummary
     */
    direction: TransactionSummaryDirectionEnum;
    /**
     * Partner name captured for display; use `partnerId` for stable automation across renames.
     * @type {string}
     * @memberof TransactionSummary
     */
    partnerName: string;
    /**
     * Persisted tenant-scoped partner id that authorizes this transaction and remains stable across partner renames.
     * @type {number}
     * @memberof TransactionSummary
     */
    partnerId: number | null;
    /**
     * Lowercase SHA-256 of the exact partner runtime configuration recorded for this transaction, receipt, or acknowledgment. It is `null` for legacy rows written before configuration stamping. Scenario verification accepts persisted evidence only when this value exactly matches the partner configuration frozen into the applied binding.
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    partnerConfigurationSha256: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof TransactionSummary
     */
    timestamp: string;
    /**
     *
     * @type {TransactionSet}
     * @memberof TransactionSummary
     */
    transactionSet: TransactionSet;
    /**
     *
     * @type {TransactionControlNumbers}
     * @memberof TransactionSummary
     */
    controlNumbers: TransactionControlNumbers;
    /**
     *
     * @type {TransactionEdiMetadata}
     * @memberof TransactionSummary
     */
    edi: TransactionEdiMetadata;
    /**
     * Business key recorded on this transaction. Inbound keys come from the incoming map. Outbound keys are present when `/send`, `/reply`, or `/carbonCopy` supplied `businessKey` in the JSON request envelope; otherwise this is `null`.
     *
     * @type {TransactionBusinessKey}
     * @memberof TransactionSummary
     */
    businessKey: TransactionBusinessKey | null;
    /**
     * Compact normalized whole-997 aggregate. Distinct AK1/AK9 groups are intentionally omitted from list responses; use `functionalAckGroupOutcome` for this row's selected compact group and transaction detail or the `functional-ack-x12` document metadata for every full group. A null value means no compact outcome was available, normally because no 997 is stored; list enrichment is fail-soft, so callers should use transaction detail before treating null as proof that no acknowledgment exists. Do not use the aggregate status as this row's status; use `functionalAckStatus` and `functionalAckEvaluationScope`.
     *
     * @type {FunctionalAcknowledgmentSummary}
     * @memberof TransactionSummary
     */
    functionalAckOutcome: FunctionalAcknowledgmentSummary | null;
    /**
     * Exact AK2/AK5 result matched to this row by GS06/AK102 and ST02/AK202, with a leading-zero-insensitive control-number fallback only when it yields one unique match. Null means no unique transaction-set result could be attributed.
     *
     * @type {FunctionalAcknowledgmentTransactionSetOutcome}
     * @memberof TransactionSummary
     */
    functionalAckTransactionOutcome: FunctionalAcknowledgmentTransactionSetOutcome | null;
    /**
     * Exact AK1/AK9 group matched to this row by GS06/AK102 and GS01/AK101. Exact control-number identity is preferred; a leading-zero-insensitive fallback is used only when it yields one unique group. Null means no group was uniquely attributable. This row-level projection omits the group's nested AK2 results to keep list, reply, and event payloads bounded; fetch transaction detail for the complete group tree.
     *
     * @type {FunctionalAcknowledgmentGroupSummary}
     * @memberof TransactionSummary
     */
    functionalAckGroupOutcome: FunctionalAcknowledgmentGroupSummary | null;
    /**
     * Outcome level ModernEDI used for `functional_ack_issue`. `transaction_set` uses a unique AK2/AK5 disposition while retaining the matching AK9 group separately. `functional_group` is used when AK2 is omitted or no unique transaction result exists. `functional_acknowledgment` is the conservative whole-997 fallback only when no AK1 group can be matched uniquely. Null means no 997 outcome was available.
     *
     * @type {TransactionSummaryFunctionalAckEvaluationScopeEnum}
     * @memberof TransactionSummary
     */
    functionalAckEvaluationScope: TransactionSummaryFunctionalAckEvaluationScopeEnum | null;
    /**
     * Compact normalized whole-999 result plus distinct AK1/AK9 group outcomes. A null value normally means no 999 is stored. This remains the acknowledgment-wide context even when ModernEDI can evaluate this row against a narrower group or transaction result.
     *
     * @type {ImplementationAcknowledgmentSummary}
     * @memberof TransactionSummary
     */
    implementationAckOutcome: ImplementationAcknowledgmentSummary | null;
    /**
     * Exact AK2/IK5 result matched uniquely to this row by the functional-group and transaction-set identifiers. Null means no unique transaction-set result could be attributed.
     *
     * @type {ImplementationAcknowledgmentTransactionSetOutcome}
     * @memberof TransactionSummary
     */
    implementationAckTransactionOutcome: ImplementationAcknowledgmentTransactionSetOutcome | null;
    /**
     * Outcome level ModernEDI used for `implementation_ack_issue`. `transaction_set` selects a unique AK2/IK5 result; `implementation_group` selects a unique AK1/AK9 group and conservatively reduces it with nested IK5 statuses; `implementation_acknowledgment` conservatively reduces the aggregate with all flattened IK5 statuses when no unique group is attributable. Null means no 999 outcome was available.
     *
     * @type {ImplementationAcknowledgmentEvaluationScope}
     * @memberof TransactionSummary
     */
    implementationAckEvaluationScope: ImplementationAcknowledgmentEvaluationScope | null;
    /**
     * Deadline used to classify a still-missing partner X12 acknowledgment for an eligible outbound business transaction. Outbound 997 and 999 acknowledgment documents are excluded. Receipt of either a correlated 997 or 999 satisfies the deadline. This is null when no deadline applies. Use the `x12_ack_overdue` attention reason, not this timestamp alone, as the authoritative active overdue signal. ModernEDI does not automatically resend the original X12 when the deadline passes.
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    x12AcknowledgmentExpectedBy: string | null;
    /**
     * True when the outbound ISA14 requested a TA1 interchange acknowledgment. False for inbound traffic, outbound interchanges that did not request TA1, and legacy rows that predate this persisted signal.
     * @type {boolean}
     * @memberof TransactionSummary
     */
    technicalAckRequested: boolean;
    /**
     *
     * @type {TechnicalAcknowledgmentStatus}
     * @memberof TransactionSummary
     */
    technicalAckStatus: TechnicalAcknowledgmentStatus;
    /**
     * Deadline for a TA1 explicitly requested by outbound ISA14, or `null` when none was requested. Use `technical_ack_overdue` as the authoritative active overdue signal. ModernEDI does not automatically resend when this deadline passes.
     * @type {string}
     * @memberof TransactionSummary
     */
    technicalAckExpectedBy: string | null;
    /**
     * Parsed TA1 outcome correlated by the original AS2 message id, or `null` while a requested TA1 is still pending or when none was requested.
     * @type {TechnicalAcknowledgmentOutcome}
     * @memberof TransactionSummary
     */
    technicalAckOutcome: TechnicalAcknowledgmentOutcome | null;
}


/**
 * @export
 */
export const TransactionSummaryFunctionalAckStatusEnum = {
    Accepted: 'accepted',
    AcceptedWithErrors: 'accepted_with_errors',
    PartiallyAccepted: 'partially_accepted',
    Rejected: 'rejected',
    Unknown: 'unknown',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionSummaryFunctionalAckStatusEnum = typeof TransactionSummaryFunctionalAckStatusEnum[keyof typeof TransactionSummaryFunctionalAckStatusEnum];

/**
 * @export
 */
export const TransactionSummaryMdnStatusEnum = {
    Pending: 'pending',
    Processed: 'processed',
    Warning: 'warning',
    Rejected: 'rejected',
    Invalid: 'invalid',
    MicMismatch: 'mic_mismatch',
    Overdue: 'overdue',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionSummaryMdnStatusEnum = typeof TransactionSummaryMdnStatusEnum[keyof typeof TransactionSummaryMdnStatusEnum];

/**
 * @export
 */
export const TransactionSummaryDirectionEnum = {
    Inbound: 'inbound',
    Outbound: 'outbound',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionSummaryDirectionEnum = typeof TransactionSummaryDirectionEnum[keyof typeof TransactionSummaryDirectionEnum];

/**
 * @export
 */
export const TransactionSummaryFunctionalAckEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    FunctionalGroup: 'functional_group',
    FunctionalAcknowledgment: 'functional_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionSummaryFunctionalAckEvaluationScopeEnum = typeof TransactionSummaryFunctionalAckEvaluationScopeEnum[keyof typeof TransactionSummaryFunctionalAckEvaluationScopeEnum];


/**
 * Check if a given object implements the TransactionSummary interface.
 */
export function instanceOfTransactionSummary(value: object): value is TransactionSummary {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('needsAttention' in value) || value['needsAttention'] === undefined) return false;
    if (!('attentionReasons' in value) || value['attentionReasons'] === undefined) return false;
    if (!('onWatchlist' in value) || value['onWatchlist'] === undefined) return false;
    if (!('mappingStatus' in value) || value['mappingStatus'] === undefined) return false;
    if (!('functionalAckStatus' in value) || value['functionalAckStatus'] === undefined) return false;
    if (!('implementationAckStatus' in value) || value['implementationAckStatus'] === undefined) return false;
    if (!('mdnStatus' in value) || value['mdnStatus'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('replyToMessageId' in value) || value['replyToMessageId'] === undefined) return false;
    if (!('replyToTransactionKey' in value) || value['replyToTransactionKey'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('partnerName' in value) || value['partnerName'] === undefined) return false;
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('partnerConfigurationSha256' in value) || value['partnerConfigurationSha256'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('transactionSet' in value) || value['transactionSet'] === undefined) return false;
    if (!('controlNumbers' in value) || value['controlNumbers'] === undefined) return false;
    if (!('edi' in value) || value['edi'] === undefined) return false;
    if (!('businessKey' in value) || value['businessKey'] === undefined) return false;
    if (!('functionalAckOutcome' in value) || value['functionalAckOutcome'] === undefined) return false;
    if (!('functionalAckTransactionOutcome' in value) || value['functionalAckTransactionOutcome'] === undefined) return false;
    if (!('functionalAckGroupOutcome' in value) || value['functionalAckGroupOutcome'] === undefined) return false;
    if (!('functionalAckEvaluationScope' in value) || value['functionalAckEvaluationScope'] === undefined) return false;
    if (!('implementationAckOutcome' in value) || value['implementationAckOutcome'] === undefined) return false;
    if (!('implementationAckTransactionOutcome' in value) || value['implementationAckTransactionOutcome'] === undefined) return false;
    if (!('implementationAckEvaluationScope' in value) || value['implementationAckEvaluationScope'] === undefined) return false;
    if (!('x12AcknowledgmentExpectedBy' in value) || value['x12AcknowledgmentExpectedBy'] === undefined) return false;
    if (!('technicalAckRequested' in value) || value['technicalAckRequested'] === undefined) return false;
    if (!('technicalAckStatus' in value) || value['technicalAckStatus'] === undefined) return false;
    if (!('technicalAckExpectedBy' in value) || value['technicalAckExpectedBy'] === undefined) return false;
    if (!('technicalAckOutcome' in value) || value['technicalAckOutcome'] === undefined) return false;
    return true;
}

export function TransactionSummaryFromJSON(json: any): TransactionSummary {
    return TransactionSummaryFromJSONTyped(json, false);
}

export function TransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSummary {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'needsAttention': json['needsAttention'],
        'attentionReasons': (new Set((json['attentionReasons'] as Array<any>).map(TransactionAttentionReasonFromJSON))),
        'onWatchlist': json['onWatchlist'],
        'mappingStatus': TransactionMappingStatusSummaryFromJSON(json['mappingStatus']),
        'functionalAckStatus': json['functionalAckStatus'],
        'implementationAckStatus': ImplementationAcknowledgmentStatusFromJSON(json['implementationAckStatus']),
        'mdnStatus': json['mdnStatus'],
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'replyToMessageId': json['replyToMessageId'],
        'replyToTransactionKey': json['replyToTransactionKey'],
        'direction': json['direction'],
        'partnerName': json['partnerName'],
        'partnerId': json['partnerId'],
        'partnerConfigurationSha256': json['partnerConfigurationSha256'],
        'timestamp': json['timestamp'],
        'transactionSet': TransactionSetFromJSON(json['transactionSet']),
        'controlNumbers': TransactionControlNumbersFromJSON(json['controlNumbers']),
        'edi': TransactionEdiMetadataFromJSON(json['edi']),
        'businessKey': TransactionBusinessKeyFromJSON(json['businessKey']),
        'functionalAckOutcome': FunctionalAcknowledgmentSummaryFromJSON(json['functionalAckOutcome']),
        'functionalAckTransactionOutcome': FunctionalAcknowledgmentTransactionSetOutcomeFromJSON(json['functionalAckTransactionOutcome']),
        'functionalAckGroupOutcome': FunctionalAcknowledgmentGroupSummaryFromJSON(json['functionalAckGroupOutcome']),
        'functionalAckEvaluationScope': json['functionalAckEvaluationScope'],
        'implementationAckOutcome': ImplementationAcknowledgmentSummaryFromJSON(json['implementationAckOutcome']),
        'implementationAckTransactionOutcome': ImplementationAcknowledgmentTransactionSetOutcomeFromJSON(json['implementationAckTransactionOutcome']),
        'implementationAckEvaluationScope': ImplementationAcknowledgmentEvaluationScopeFromJSON(json['implementationAckEvaluationScope']),
        'x12AcknowledgmentExpectedBy': json['x12AcknowledgmentExpectedBy'],
        'technicalAckRequested': json['technicalAckRequested'],
        'technicalAckStatus': TechnicalAcknowledgmentStatusFromJSON(json['technicalAckStatus']),
        'technicalAckExpectedBy': json['technicalAckExpectedBy'],
        'technicalAckOutcome': TechnicalAcknowledgmentOutcomeFromJSON(json['technicalAckOutcome']),
    };
}

export function TransactionSummaryToJSON(json: any): TransactionSummary {
    return TransactionSummaryToJSONTyped(json, false);
}

export function TransactionSummaryToJSONTyped(value?: TransactionSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'needsAttention': value['needsAttention'],
        'attentionReasons': (Array.from(value['attentionReasons'] as Set<any>).map(TransactionAttentionReasonToJSON)),
        'onWatchlist': value['onWatchlist'],
        'mappingStatus': TransactionMappingStatusSummaryToJSON(value['mappingStatus']),
        'functionalAckStatus': value['functionalAckStatus'],
        'implementationAckStatus': ImplementationAcknowledgmentStatusToJSON(value['implementationAckStatus']),
        'mdnStatus': value['mdnStatus'],
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'replyToMessageId': value['replyToMessageId'],
        'replyToTransactionKey': value['replyToTransactionKey'],
        'direction': value['direction'],
        'partnerName': value['partnerName'],
        'partnerId': value['partnerId'],
        'partnerConfigurationSha256': value['partnerConfigurationSha256'],
        'timestamp': value['timestamp'],
        'transactionSet': TransactionSetToJSON(value['transactionSet']),
        'controlNumbers': TransactionControlNumbersToJSON(value['controlNumbers']),
        'edi': TransactionEdiMetadataToJSON(value['edi']),
        'businessKey': TransactionBusinessKeyToJSON(value['businessKey']),
        'functionalAckOutcome': FunctionalAcknowledgmentSummaryToJSON(value['functionalAckOutcome']),
        'functionalAckTransactionOutcome': FunctionalAcknowledgmentTransactionSetOutcomeToJSON(value['functionalAckTransactionOutcome']),
        'functionalAckGroupOutcome': FunctionalAcknowledgmentGroupSummaryToJSON(value['functionalAckGroupOutcome']),
        'functionalAckEvaluationScope': value['functionalAckEvaluationScope'],
        'implementationAckOutcome': ImplementationAcknowledgmentSummaryToJSON(value['implementationAckOutcome']),
        'implementationAckTransactionOutcome': ImplementationAcknowledgmentTransactionSetOutcomeToJSON(value['implementationAckTransactionOutcome']),
        'implementationAckEvaluationScope': ImplementationAcknowledgmentEvaluationScopeToJSON(value['implementationAckEvaluationScope']),
        'x12AcknowledgmentExpectedBy': value['x12AcknowledgmentExpectedBy'],
        'technicalAckRequested': value['technicalAckRequested'],
        'technicalAckStatus': TechnicalAcknowledgmentStatusToJSON(value['technicalAckStatus']),
        'technicalAckExpectedBy': value['technicalAckExpectedBy'],
        'technicalAckOutcome': TechnicalAcknowledgmentOutcomeToJSON(value['technicalAckOutcome']),
    };
}
