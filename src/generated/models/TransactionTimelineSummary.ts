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
import type { TransactionEdiMetadata } from './TransactionEdiMetadata.js';
import {
    TransactionEdiMetadataFromJSON,
    TransactionEdiMetadataFromJSONTyped,
    TransactionEdiMetadataToJSON,
    TransactionEdiMetadataToJSONTyped,
} from './TransactionEdiMetadata.js';
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
import type { TransactionControlNumbers } from './TransactionControlNumbers.js';
import {
    TransactionControlNumbersFromJSON,
    TransactionControlNumbersFromJSONTyped,
    TransactionControlNumbersToJSON,
    TransactionControlNumbersToJSONTyped,
} from './TransactionControlNumbers.js';
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
import type { FunctionalAcknowledgmentGroupSummary } from './FunctionalAcknowledgmentGroupSummary.js';
import {
    FunctionalAcknowledgmentGroupSummaryFromJSON,
    FunctionalAcknowledgmentGroupSummaryFromJSONTyped,
    FunctionalAcknowledgmentGroupSummaryToJSON,
    FunctionalAcknowledgmentGroupSummaryToJSONTyped,
} from './FunctionalAcknowledgmentGroupSummary.js';
import type { TransactionBusinessKey } from './TransactionBusinessKey.js';
import {
    TransactionBusinessKeyFromJSON,
    TransactionBusinessKeyFromJSONTyped,
    TransactionBusinessKeyToJSON,
    TransactionBusinessKeyToJSONTyped,
} from './TransactionBusinessKey.js';

/**
 * Stable transaction identity used inside transaction and reply timeline events. It intentionally omits the current attention and mapping projections; refetch transaction detail for authoritative current state.
 *
 * @export
 * @interface TransactionTimelineSummary
 */
export interface TransactionTimelineSummary {
    /**
     * Convenience id formatted as `<messageId>/<transactionKey>`.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    id: string;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionTimelineSummary
     */
    environment: TransactionEnvironmentValue;
    /**
     * AS2 Message-Id that identifies the transaction for detail and correlation requests.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    messageId: string;
    /**
     * Transaction identifier within the AS2 message, usually `GS06#ST02`.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    transactionKey: string;
    /**
     * Source inbound message for an outbound reply, or `null`.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    replyToMessageId: string | null;
    /**
     * Exact source transaction for an outbound reply, or `null` for a non-reply.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    replyToTransactionKey: string | null;
    /**
     * Direction across the ModernEDI boundary at the time this timeline snapshot was created.
     * @type {TransactionTimelineSummaryDirectionEnum}
     * @memberof TransactionTimelineSummary
     */
    direction: TransactionTimelineSummaryDirectionEnum;
    /**
     * Partner name captured at processing time.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    partnerName: string;
    /**
     * Stable tenant-scoped partner id.
     * @type {number}
     * @memberof TransactionTimelineSummary
     */
    partnerId: number | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    timestamp: string;
    /**
     *
     * @type {TransactionSet}
     * @memberof TransactionTimelineSummary
     */
    transactionSet: TransactionSet;
    /**
     *
     * @type {TransactionControlNumbers}
     * @memberof TransactionTimelineSummary
     */
    controlNumbers: TransactionControlNumbers;
    /**
     *
     * @type {TransactionEdiMetadata}
     * @memberof TransactionTimelineSummary
     */
    edi: TransactionEdiMetadata;
    /**
     *
     * @type {TransactionBusinessKey}
     * @memberof TransactionTimelineSummary
     */
    businessKey: TransactionBusinessKey | null;
    /**
     *
     * @type {FunctionalAcknowledgmentSummary}
     * @memberof TransactionTimelineSummary
     */
    functionalAckOutcome: FunctionalAcknowledgmentSummary | null;
    /**
     * Exact AK2/AK5 outcome uniquely attributable to this transaction, or `null`.
     * @type {FunctionalAcknowledgmentTransactionSetOutcome}
     * @memberof TransactionTimelineSummary
     */
    functionalAckTransactionOutcome: FunctionalAcknowledgmentTransactionSetOutcome | null;
    /**
     * Compact AK1/AK9 group outcome uniquely attributable to this transaction, or `null`.
     * @type {FunctionalAcknowledgmentGroupSummary}
     * @memberof TransactionTimelineSummary
     */
    functionalAckGroupOutcome: FunctionalAcknowledgmentGroupSummary | null;
    /**
     * Whether operator status used the exact transaction-set result, the matching group, or the whole-997 ambiguity fallback.
     * @type {TransactionTimelineSummaryFunctionalAckEvaluationScopeEnum}
     * @memberof TransactionTimelineSummary
     */
    functionalAckEvaluationScope: TransactionTimelineSummaryFunctionalAckEvaluationScopeEnum | null;
    /**
     * Compact aggregate and group-level 999 context, or `null` when no 999 was attributable.
     * @type {ImplementationAcknowledgmentSummary}
     * @memberof TransactionTimelineSummary
     */
    implementationAckOutcome: ImplementationAcknowledgmentSummary | null;
    /**
     * Exact AK2/IK5 outcome uniquely attributable to this transaction, or `null`.
     * @type {ImplementationAcknowledgmentTransactionSetOutcome}
     * @memberof TransactionTimelineSummary
     */
    implementationAckTransactionOutcome: ImplementationAcknowledgmentTransactionSetOutcome | null;
    /**
     * Whether operator status used the exact IK5 result, a unique AK9 group result, or the conservative whole-999 aggregate.
     * @type {TransactionTimelineSummaryImplementationAckEvaluationScopeEnum}
     * @memberof TransactionTimelineSummary
     */
    implementationAckEvaluationScope: TransactionTimelineSummaryImplementationAckEvaluationScopeEnum | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    x12AcknowledgmentExpectedBy: string | null;
    /**
     * Whether outbound ISA14 requested a TA1 for this timeline snapshot.
     * @type {boolean}
     * @memberof TransactionTimelineSummary
     */
    technicalAckRequested: boolean;
    /**
     *
     * @type {TechnicalAcknowledgmentStatus}
     * @memberof TransactionTimelineSummary
     */
    technicalAckStatus: TechnicalAcknowledgmentStatus;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionTimelineSummary
     */
    technicalAckExpectedBy: string | null;
    /**
     * Parsed TA1 outcome correlated to the interchange represented by this timeline snapshot, or `null` while no TA1 is available. Use `technicalAckStatus` and the `technical_ack_overdue` attention reason to distinguish not requested, pending, and overdue states; a null outcome alone is not evidence that the partner accepted the interchange.
     *
     * @type {TechnicalAcknowledgmentOutcome}
     * @memberof TransactionTimelineSummary
     */
    technicalAckOutcome: TechnicalAcknowledgmentOutcome | null;
}


/**
 * @export
 */
export const TransactionTimelineSummaryDirectionEnum = {
    Inbound: 'inbound',
    Outbound: 'outbound',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionTimelineSummaryDirectionEnum = typeof TransactionTimelineSummaryDirectionEnum[keyof typeof TransactionTimelineSummaryDirectionEnum];

/**
 * @export
 */
export const TransactionTimelineSummaryFunctionalAckEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    FunctionalGroup: 'functional_group',
    FunctionalAcknowledgment: 'functional_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionTimelineSummaryFunctionalAckEvaluationScopeEnum = typeof TransactionTimelineSummaryFunctionalAckEvaluationScopeEnum[keyof typeof TransactionTimelineSummaryFunctionalAckEvaluationScopeEnum];

/**
 * @export
 */
export const TransactionTimelineSummaryImplementationAckEvaluationScopeEnum = {
    TransactionSet: 'transaction_set',
    ImplementationGroup: 'implementation_group',
    ImplementationAcknowledgment: 'implementation_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionTimelineSummaryImplementationAckEvaluationScopeEnum = typeof TransactionTimelineSummaryImplementationAckEvaluationScopeEnum[keyof typeof TransactionTimelineSummaryImplementationAckEvaluationScopeEnum];


/**
 * Check if a given object implements the TransactionTimelineSummary interface.
 */
export function instanceOfTransactionTimelineSummary(value: object): value is TransactionTimelineSummary {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('replyToMessageId' in value) || value['replyToMessageId'] === undefined) return false;
    if (!('replyToTransactionKey' in value) || value['replyToTransactionKey'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('partnerName' in value) || value['partnerName'] === undefined) return false;
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
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

export function TransactionTimelineSummaryFromJSON(json: any): TransactionTimelineSummary {
    return TransactionTimelineSummaryFromJSONTyped(json, false);
}

export function TransactionTimelineSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionTimelineSummary {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'replyToMessageId': json['replyToMessageId'],
        'replyToTransactionKey': json['replyToTransactionKey'],
        'direction': json['direction'],
        'partnerName': json['partnerName'],
        'partnerId': json['partnerId'],
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
        'implementationAckEvaluationScope': json['implementationAckEvaluationScope'],
        'x12AcknowledgmentExpectedBy': json['x12AcknowledgmentExpectedBy'],
        'technicalAckRequested': json['technicalAckRequested'],
        'technicalAckStatus': TechnicalAcknowledgmentStatusFromJSON(json['technicalAckStatus']),
        'technicalAckExpectedBy': json['technicalAckExpectedBy'],
        'technicalAckOutcome': TechnicalAcknowledgmentOutcomeFromJSON(json['technicalAckOutcome']),
    };
}

export function TransactionTimelineSummaryToJSON(json: any): TransactionTimelineSummary {
    return TransactionTimelineSummaryToJSONTyped(json, false);
}

export function TransactionTimelineSummaryToJSONTyped(value?: TransactionTimelineSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'replyToMessageId': value['replyToMessageId'],
        'replyToTransactionKey': value['replyToTransactionKey'],
        'direction': value['direction'],
        'partnerName': value['partnerName'],
        'partnerId': value['partnerId'],
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
        'implementationAckEvaluationScope': value['implementationAckEvaluationScope'],
        'x12AcknowledgmentExpectedBy': value['x12AcknowledgmentExpectedBy'],
        'technicalAckRequested': value['technicalAckRequested'],
        'technicalAckStatus': TechnicalAcknowledgmentStatusToJSON(value['technicalAckStatus']),
        'technicalAckExpectedBy': value['technicalAckExpectedBy'],
        'technicalAckOutcome': TechnicalAcknowledgmentOutcomeToJSON(value['technicalAckOutcome']),
    };
}
