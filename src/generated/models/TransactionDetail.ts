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
import type { TransactionDocumentMetadata } from './TransactionDocumentMetadata.js';
import {
    TransactionDocumentMetadataFromJSON,
    TransactionDocumentMetadataFromJSONTyped,
    TransactionDocumentMetadataToJSON,
    TransactionDocumentMetadataToJSONTyped,
} from './TransactionDocumentMetadata.js';
import type { TransactionEvent } from './TransactionEvent.js';
import {
    TransactionEventFromJSON,
    TransactionEventFromJSONTyped,
    TransactionEventToJSON,
    TransactionEventToJSONTyped,
} from './TransactionEvent.js';
import type { StoredTransactionMappedOutput } from './StoredTransactionMappedOutput.js';
import {
    StoredTransactionMappedOutputFromJSON,
    StoredTransactionMappedOutputFromJSONTyped,
    StoredTransactionMappedOutputToJSON,
    StoredTransactionMappedOutputToJSONTyped,
} from './StoredTransactionMappedOutput.js';
import type { TransactionAttentionReason } from './TransactionAttentionReason.js';
import {
    TransactionAttentionReasonFromJSON,
    TransactionAttentionReasonFromJSONTyped,
    TransactionAttentionReasonToJSON,
    TransactionAttentionReasonToJSONTyped,
} from './TransactionAttentionReason.js';
import type { TransactionMappingStatus } from './TransactionMappingStatus.js';
import {
    TransactionMappingStatusFromJSON,
    TransactionMappingStatusFromJSONTyped,
    TransactionMappingStatusToJSON,
    TransactionMappingStatusToJSONTyped,
} from './TransactionMappingStatus.js';
import type { FunctionalAcknowledgmentDetail } from './FunctionalAcknowledgmentDetail.js';
import {
    FunctionalAcknowledgmentDetailFromJSON,
    FunctionalAcknowledgmentDetailFromJSONTyped,
    FunctionalAcknowledgmentDetailToJSON,
    FunctionalAcknowledgmentDetailToJSONTyped,
} from './FunctionalAcknowledgmentDetail.js';
import type { TransactionMdn } from './TransactionMdn.js';
import {
    TransactionMdnFromJSON,
    TransactionMdnFromJSONTyped,
    TransactionMdnToJSON,
    TransactionMdnToJSONTyped,
} from './TransactionMdn.js';
import type { ImplementationAcknowledgmentDetail } from './ImplementationAcknowledgmentDetail.js';
import {
    ImplementationAcknowledgmentDetailFromJSON,
    ImplementationAcknowledgmentDetailFromJSONTyped,
    ImplementationAcknowledgmentDetailToJSON,
    ImplementationAcknowledgmentDetailToJSONTyped,
} from './ImplementationAcknowledgmentDetail.js';
import type { TechnicalAcknowledgmentDetail } from './TechnicalAcknowledgmentDetail.js';
import {
    TechnicalAcknowledgmentDetailFromJSON,
    TechnicalAcknowledgmentDetailFromJSONTyped,
    TechnicalAcknowledgmentDetailToJSON,
    TechnicalAcknowledgmentDetailToJSONTyped,
} from './TechnicalAcknowledgmentDetail.js';
import type { TransactionSummary } from './TransactionSummary.js';
import {
    TransactionSummaryFromJSON,
    TransactionSummaryFromJSONTyped,
    TransactionSummaryToJSON,
    TransactionSummaryToJSONTyped,
} from './TransactionSummary.js';

/**
 * Metadata-first operator aggregate spanning mapping provenance, queue custody, normalized acknowledgments, a document index, and compact related-reply summaries.
 * @export
 * @interface TransactionDetail
 */
export interface TransactionDetail {
    /**
     * True when the transaction has an active operational watch, an unresolved mapping failure, or a 997 or 999 acknowledgment outcome other than `accepted`, when neither acknowledgment was received for an eligible outbound transaction by `x12AcknowledgmentExpectedBy`, when a requested TA1 rejected the interchange, reported errors, could not be classified, or was not received by `technicalAckExpectedBy`, when a managed output remained uncollected beyond its 15-minute pickup grace period, or when a delivered output was not acknowledged before its lease expired or was redelivered. A newly ready output inside the grace period and an active first lease are normal handoff progress and do not set this signal by themselves.
     *
     * @type {boolean}
     * @memberof TransactionDetail
     */
    needsAttention: boolean;
    /**
     * Active machine-readable reasons behind `needsAttention`.
     * @type {Set<TransactionAttentionReason>}
     * @memberof TransactionDetail
     */
    attentionReasons: Set<TransactionAttentionReason>;
    /**
     *
     * @type {TransactionMappingStatus}
     * @memberof TransactionDetail
     */
    mappingStatus: TransactionMappingStatus;
    /**
     *
     * @type {TransactionSummary}
     * @memberof TransactionDetail
     */
    summary: TransactionSummary;
    /**
     * Metadata, mapping provenance, and managed-delivery state for inbound mapped outputs. Payload bodies are available through the document endpoints. Outbound reply transactions return an empty array.
     * @type {Array<StoredTransactionMappedOutput>}
     * @memberof TransactionDetail
     */
    mappedOutputs: Array<StoredTransactionMappedOutput>;
    /**
     * Normalized AS2 receipt metadata without the report body. Fetch `mdn-report` from the document endpoint to inspect that body.
     * @type {TransactionMdn}
     * @memberof TransactionDetail
     */
    mdn: TransactionMdn | null;
    /**
     * Normalized X12 functional-acknowledgment metadata without the X12 body. Fetch `functional-ack-x12` from the document endpoint to inspect it.
     * @type {FunctionalAcknowledgmentDetail}
     * @memberof TransactionDetail
     */
    functionalAck: FunctionalAcknowledgmentDetail | null;
    /**
     * Normalized X12 999 implementation-acknowledgment metadata without the X12 body. Fetch `implementation-ack-x12` from the document endpoint to inspect it.
     * @type {ImplementationAcknowledgmentDetail}
     * @memberof TransactionDetail
     */
    implementationAck: ImplementationAcknowledgmentDetail | null;
    /**
     * Technical-acknowledgment transport metadata without X12 or HTTP response bodies, or `null` when none was recorded. Fetch the indexed document to inspect a body.
     * @type {TechnicalAcknowledgmentDetail}
     * @memberof TransactionDetail
     */
    technicalAck: TechnicalAcknowledgmentDetail | null;
    /**
     * Metadata index of retained source, mapped-output, acknowledgment, and HTTP-response documents.
     * @type {Array<TransactionDocumentMetadata>}
     * @memberof TransactionDetail
     */
    documents: Array<TransactionDocumentMetadata>;
    /**
     * Chronological operational timeline derived from persisted transaction artifacts.
     * @type {Array<TransactionEvent>}
     * @memberof TransactionDetail
     */
    events: Array<TransactionEvent>;
    /**
     * Compact summaries of outbound replies linked to this inbound transaction. Fetch a selected reply's detail on demand.
     * @type {Array<TransactionSummary>}
     * @memberof TransactionDetail
     */
    relatedTransactions: Array<TransactionSummary>;
}

/**
 * Check if a given object implements the TransactionDetail interface.
 */
export function instanceOfTransactionDetail(value: object): value is TransactionDetail {
    if (!('needsAttention' in value) || value['needsAttention'] === undefined) return false;
    if (!('attentionReasons' in value) || value['attentionReasons'] === undefined) return false;
    if (!('mappingStatus' in value) || value['mappingStatus'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('mappedOutputs' in value) || value['mappedOutputs'] === undefined) return false;
    if (!('mdn' in value) || value['mdn'] === undefined) return false;
    if (!('functionalAck' in value) || value['functionalAck'] === undefined) return false;
    if (!('implementationAck' in value) || value['implementationAck'] === undefined) return false;
    if (!('technicalAck' in value) || value['technicalAck'] === undefined) return false;
    if (!('documents' in value) || value['documents'] === undefined) return false;
    if (!('events' in value) || value['events'] === undefined) return false;
    if (!('relatedTransactions' in value) || value['relatedTransactions'] === undefined) return false;
    return true;
}

export function TransactionDetailFromJSON(json: any): TransactionDetail {
    return TransactionDetailFromJSONTyped(json, false);
}

export function TransactionDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetail {
    if (json == null) {
        return json;
    }
    return {

        'needsAttention': json['needsAttention'],
        'attentionReasons': (new Set((json['attentionReasons'] as Array<any>).map(TransactionAttentionReasonFromJSON))),
        'mappingStatus': TransactionMappingStatusFromJSON(json['mappingStatus']),
        'summary': TransactionSummaryFromJSON(json['summary']),
        'mappedOutputs': ((json['mappedOutputs'] as Array<any>).map(StoredTransactionMappedOutputFromJSON)),
        'mdn': TransactionMdnFromJSON(json['mdn']),
        'functionalAck': FunctionalAcknowledgmentDetailFromJSON(json['functionalAck']),
        'implementationAck': ImplementationAcknowledgmentDetailFromJSON(json['implementationAck']),
        'technicalAck': TechnicalAcknowledgmentDetailFromJSON(json['technicalAck']),
        'documents': ((json['documents'] as Array<any>).map(TransactionDocumentMetadataFromJSON)),
        'events': ((json['events'] as Array<any>).map(TransactionEventFromJSON)),
        'relatedTransactions': ((json['relatedTransactions'] as Array<any>).map(TransactionSummaryFromJSON)),
    };
}

export function TransactionDetailToJSON(json: any): TransactionDetail {
    return TransactionDetailToJSONTyped(json, false);
}

export function TransactionDetailToJSONTyped(value?: TransactionDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'needsAttention': value['needsAttention'],
        'attentionReasons': (Array.from(value['attentionReasons'] as Set<any>).map(TransactionAttentionReasonToJSON)),
        'mappingStatus': TransactionMappingStatusToJSON(value['mappingStatus']),
        'summary': TransactionSummaryToJSON(value['summary']),
        'mappedOutputs': ((value['mappedOutputs'] as Array<any>).map(StoredTransactionMappedOutputToJSON)),
        'mdn': TransactionMdnToJSON(value['mdn']),
        'functionalAck': FunctionalAcknowledgmentDetailToJSON(value['functionalAck']),
        'implementationAck': ImplementationAcknowledgmentDetailToJSON(value['implementationAck']),
        'technicalAck': TechnicalAcknowledgmentDetailToJSON(value['technicalAck']),
        'documents': ((value['documents'] as Array<any>).map(TransactionDocumentMetadataToJSON)),
        'events': ((value['events'] as Array<any>).map(TransactionEventToJSON)),
        'relatedTransactions': ((value['relatedTransactions'] as Array<any>).map(TransactionSummaryToJSON)),
    };
}
