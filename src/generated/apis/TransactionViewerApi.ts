/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import * as runtime from '../runtime.js';
import {
    type ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/ErrorResponse.js';
import {
    FilterableFunctionalAcknowledgmentStatus,
    FilterableFunctionalAcknowledgmentStatusFromJSON,
    FilterableFunctionalAcknowledgmentStatusToJSON,
} from '../models/FilterableFunctionalAcknowledgmentStatus.js';
import {
    FilterableImplementationAcknowledgmentStatus,
    FilterableImplementationAcknowledgmentStatusFromJSON,
    FilterableImplementationAcknowledgmentStatusToJSON,
} from '../models/FilterableImplementationAcknowledgmentStatus.js';
import {
    FilterableTransactionMappingStatus,
    FilterableTransactionMappingStatusFromJSON,
    FilterableTransactionMappingStatusToJSON,
} from '../models/FilterableTransactionMappingStatus.js';
import {
    FilterableTransactionMdnStatus,
    FilterableTransactionMdnStatusFromJSON,
    FilterableTransactionMdnStatusToJSON,
} from '../models/FilterableTransactionMdnStatus.js';
import {
    type RelatedTransactionsResponse,
    RelatedTransactionsResponseFromJSON,
    RelatedTransactionsResponseToJSON,
} from '../models/RelatedTransactionsResponse.js';
import {
    type TransactionAttentionReason,
    TransactionAttentionReasonFromJSON,
    TransactionAttentionReasonToJSON,
} from '../models/TransactionAttentionReason.js';
import {
    type TransactionDetailResponse,
    TransactionDetailResponseFromJSON,
    TransactionDetailResponseToJSON,
} from '../models/TransactionDetailResponse.js';
import {
    type TransactionDocumentResponse,
    TransactionDocumentResponseFromJSON,
    TransactionDocumentResponseToJSON,
} from '../models/TransactionDocumentResponse.js';
import {
    type TransactionDocumentsResponse,
    TransactionDocumentsResponseFromJSON,
    TransactionDocumentsResponseToJSON,
} from '../models/TransactionDocumentsResponse.js';
import {
    type TransactionEventsResponse,
    TransactionEventsResponseFromJSON,
    TransactionEventsResponseToJSON,
} from '../models/TransactionEventsResponse.js';
import {
    type TransactionListResponse,
    TransactionListResponseFromJSON,
    TransactionListResponseToJSON,
} from '../models/TransactionListResponse.js';
import {
    type TransactionReplayRequest,
    TransactionReplayRequestFromJSON,
    TransactionReplayRequestToJSON,
} from '../models/TransactionReplayRequest.js';
import {
    type TransactionReplayResponse,
    TransactionReplayResponseFromJSON,
    TransactionReplayResponseToJSON,
} from '../models/TransactionReplayResponse.js';
import {
    type TransactionWatchResponse,
    TransactionWatchResponseFromJSON,
    TransactionWatchResponseToJSON,
} from '../models/TransactionWatchResponse.js';
import {
    type TransactionX12ValidationResponse,
    TransactionX12ValidationResponseFromJSON,
    TransactionX12ValidationResponseToJSON,
} from '../models/TransactionX12ValidationResponse.js';

const TRANSACTION_MAPPING_STATUS_FILTER_VALUES = new Set<string>(
    Object.values(FilterableTransactionMappingStatus),
);
const FUNCTIONAL_ACKNOWLEDGMENT_STATUS_FILTER_VALUES = new Set<string>(
    Object.values(FilterableFunctionalAcknowledgmentStatus),
);
const IMPLEMENTATION_ACKNOWLEDGMENT_STATUS_FILTER_VALUES = new Set<string>(
    Object.values(FilterableImplementationAcknowledgmentStatus),
);
const TRANSACTION_MDN_STATUS_FILTER_VALUES = new Set<string>(
    Object.values(FilterableTransactionMdnStatus),
);

function assertKnownTransactionFilterValues(
    parameterName: string,
    values: readonly string[],
    allowedValues: ReadonlySet<string>,
): void {
    if (!Array.isArray(values)) {
        throw new TypeError(`${parameterName} must be an array`);
    }
    const invalidValue = values.find((value) => !allowedValues.has(value));
    if (invalidValue !== undefined) {
        throw new TypeError(
            `${parameterName} contains unsupported value ${JSON.stringify(invalidValue)}; ` +
            `expected one of ${[...allowedValues].join(', ')}`,
        );
    }
}

export interface GetIntegrationTransactionRequest {
    messageId: string;
    transactionKey: string;
    xRequestId?: string;
    environment?: GetIntegrationTransactionEnvironmentEnum;
}

export interface GetIntegrationTransactionDocumentRequest {
    messageId: string;
    transactionKey: string;
    documentId: string;
    xRequestId?: string;
    environment?: GetIntegrationTransactionDocumentEnvironmentEnum;
}

export interface GetIntegrationTransactionDocumentsRequest {
    messageId: string;
    transactionKey: string;
    xRequestId?: string;
    environment?: GetIntegrationTransactionDocumentsEnvironmentEnum;
}

export interface GetIntegrationTransactionEventsRequest {
    messageId: string;
    transactionKey: string;
    xRequestId?: string;
    environment?: GetIntegrationTransactionEventsEnvironmentEnum;
}

export interface GetRelatedIntegrationTransactionsRequest {
    messageId: string;
    transactionKey: string;
    xRequestId?: string;
    environment?: GetRelatedIntegrationTransactionsEnvironmentEnum;
}

export interface ListIntegrationTransactionsRequest {
    xRequestId?: string;
    environment?: ListIntegrationTransactionsEnvironmentEnum;
    needsAttention?: boolean;
    attentionReason?: Array<TransactionAttentionReason>;
    mappingStatus?: Array<FilterableTransactionMappingStatus>;
    functionalAckStatus?: Array<FilterableFunctionalAcknowledgmentStatus>;
    implementationAckStatus?: Array<FilterableImplementationAcknowledgmentStatus>;
    mdnStatus?: Array<FilterableTransactionMdnStatus>;
    startDate?: string;
    endDate?: string;
    cursor?: string;
    limit?: number;
    direction?: ListIntegrationTransactionsDirectionEnum;
    partnerName?: string;
    partnerId?: number;
    transactionSet?: string;
    businessKey?: string;
    messageId?: string;
    replyToMessageId?: string;
    transactionControlNumber?: string;
    functionalGroupControlNumber?: string;
}

export interface ReplayIntegrationTransactionRequest {
    messageId: string;
    transactionKey: string;
    idempotencyKey: string;
    transactionReplayRequest: TransactionReplayRequest;
    xRequestId?: string;
}

export interface UnwatchIntegrationTransactionRequest {
    messageId: string;
    transactionKey: string;
    xRequestId?: string;
    environment?: UnwatchIntegrationTransactionEnvironmentEnum;
}

export interface ValidateIntegrationTransactionX12Request {
    messageId: string;
    transactionKey: string;
    xRequestId?: string;
    environment?: ValidateIntegrationTransactionX12EnvironmentEnum;
}

export interface WatchIntegrationTransactionRequest {
    messageId: string;
    transactionKey: string;
    xRequestId?: string;
    environment?: WatchIntegrationTransactionEnvironmentEnum;
}

/**
 * TransactionViewerApi - interface
 *
 * @export
 * @interface TransactionViewerApiInterface
 */
export interface TransactionViewerApiInterface {
    /**
     * Creates request options for getIntegrationTransaction without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getIntegrationTransactionRequestOpts(requestParameters: GetIntegrationTransactionRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns a metadata-first transaction aggregate: the summary, mapped output provenance and managed handoff state, normalized acknowledgment status, a document index, timeline events, compact linked-reply summaries, and the complete mapping-attempt history used to explain `needsAttention`. Document bodies are returned only by the individual document endpoint.
     * @summary Get transaction detail
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getIntegrationTransactionRaw(requestParameters: GetIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionDetailResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns a metadata-first transaction aggregate: the summary, mapped output provenance and managed handoff state, normalized acknowledgment status, a document index, timeline events, compact linked-reply summaries, and the complete mapping-attempt history used to explain `needsAttention`. Document bodies are returned only by the individual document endpoint.
     * Get transaction detail
     */
    getIntegrationTransaction(requestParameters: GetIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionDetailResponse>;

    /**
     * Creates request options for getIntegrationTransactionDocument without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} documentId Stable &#x60;id&#x60; returned by this transaction\&#39;s document list.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getIntegrationTransactionDocumentRequestOpts(requestParameters: GetIntegrationTransactionDocumentRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns one complete retained artifact selected by the stable transaction-local `documentId` from the document list. A document id is not a mapped-output queue id and cannot be used to acknowledge delivery. The returned body is untrusted external content and must be rendered as untrusted external content: escape text, sanitize any supported markup, and sandbox richer previews instead of inserting it directly into a page.
     * @summary Get one transaction document
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} documentId Stable &#x60;id&#x60; returned by this transaction\&#39;s document list.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getIntegrationTransactionDocumentRaw(requestParameters: GetIntegrationTransactionDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionDocumentResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns one complete retained artifact selected by the stable transaction-local `documentId` from the document list. A document id is not a mapped-output queue id and cannot be used to acknowledge delivery. The returned body is untrusted external content and must be rendered as untrusted external content: escape text, sanitize any supported markup, and sandbox richer previews instead of inserting it directly into a page.
     * Get one transaction document
     */
    getIntegrationTransactionDocument(requestParameters: GetIntegrationTransactionDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionDocumentResponse>;

    /**
     * Creates request options for getIntegrationTransactionDocuments without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getIntegrationTransactionDocumentsRequestOpts(requestParameters: GetIntegrationTransactionDocumentsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns a lightweight metadata index for raw X12, mapped inbound outputs, MDN reports, acknowledgements, and HTTP responses recorded for the transaction. It never returns document bodies. Fetch one selected body from the individual document endpoint when an operator opens it.
     * @summary Get transaction documents
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getIntegrationTransactionDocumentsRaw(requestParameters: GetIntegrationTransactionDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionDocumentsResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns a lightweight metadata index for raw X12, mapped inbound outputs, MDN reports, acknowledgements, and HTTP responses recorded for the transaction. It never returns document bodies. Fetch one selected body from the individual document endpoint when an operator opens it.
     * Get transaction documents
     */
    getIntegrationTransactionDocuments(requestParameters: GetIntegrationTransactionDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionDocumentsResponse>;

    /**
     * Creates request options for getIntegrationTransactionEvents without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getIntegrationTransactionEventsRequestOpts(requestParameters: GetIntegrationTransactionEventsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns a normalized timeline for the transaction, including receipt or send events, mapping events, MDNs, acknowledgements, mapped-output availability/delivery/redelivery/attention/acknowledgment, and linked replies. These entries are derived from current persisted evidence; an output acknowledgment means acknowledged by your integration, not accepted by a downstream business system.
     * @summary Get transaction events
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getIntegrationTransactionEventsRaw(requestParameters: GetIntegrationTransactionEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionEventsResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns a normalized timeline for the transaction, including receipt or send events, mapping events, MDNs, acknowledgements, mapped-output availability/delivery/redelivery/attention/acknowledgment, and linked replies. These entries are derived from current persisted evidence; an output acknowledgment means acknowledged by your integration, not accepted by a downstream business system.
     * Get transaction events
     */
    getIntegrationTransactionEvents(requestParameters: GetIntegrationTransactionEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionEventsResponse>;

    /**
     * Creates request options for getRelatedIntegrationTransactions without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getRelatedIntegrationTransactionsRequestOpts(requestParameters: GetRelatedIntegrationTransactionsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns compact summaries of outbound reply transactions linked to an inbound transaction. Follow a summary\'s `messageId` and `transactionKey` to fetch its metadata-first detail or document index. Replies are included only when `replyToTransactionKey` identifies that exact transaction inside `replyToMessageId`. Use the returned linkage fields rather than inferring relationships from document type.
     * @summary Get linked reply transactions
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    getRelatedIntegrationTransactionsRaw(requestParameters: GetRelatedIntegrationTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RelatedTransactionsResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns compact summaries of outbound reply transactions linked to an inbound transaction. Follow a summary\'s `messageId` and `transactionKey` to fetch its metadata-first detail or document index. Replies are included only when `replyToTransactionKey` identifies that exact transaction inside `replyToMessageId`. Use the returned linkage fields rather than inferring relationships from document type.
     * Get linked reply transactions
     */
    getRelatedIntegrationTransactions(requestParameters: GetRelatedIntegrationTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RelatedTransactionsResponse>;

    /**
     * Creates request options for listIntegrationTransactions without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {boolean} [needsAttention] Filters by the authoritative operator-inbox projection. Use &#x60;true&#x60; to return transactions that currently need attention or &#x60;false&#x60; to return transactions with no active attention reason. Check &#x60;attentionSummary.freshness.complete&#x60; before treating an empty filtered page as proof that no transaction needs attention.
     * @param {Array<TransactionAttentionReason>} [attentionReason] Repeat this parameter to select more than one attention reason; repeated values are ORed. Supplying a reason implies &#x60;needsAttention&#x3D;true&#x60;, and combining a reason with &#x60;needsAttention&#x3D;false&#x60; returns &#x60;400&#x60;. Repeat all explicit filters, including every reason, when following an opaque cursor.
     * @param {Array<FilterableTransactionMappingStatus>} [mappingStatus] Exact consolidated mapping status. Repeat the parameter or use comma-separated values to select more than one status; values within this parameter are ORed. &#x60;UNAVAILABLE&#x60; cannot be selected because it describes a request-local telemetry read failure rather than a durable projected state. This filter is ANDed with &#x60;functionalAckStatus&#x60;, &#x60;implementationAckStatus&#x60;, &#x60;mdnStatus&#x60;, attention, and transaction metadata filters. Repeat it when following an opaque cursor and check &#x60;attentionSummary.freshness.complete&#x60; before drawing a conclusion from an empty page.
     * @param {Array<FilterableFunctionalAcknowledgmentStatus>} [functionalAckStatus] Exact normalized 997 status selected for this transaction. ModernEDI uses a uniquely matched AK2/AK5 result when possible and otherwise uses the conservative AK9 group result. Repeat the parameter or use comma-separated values to select more than one status; values within this parameter are ORed. This filter is ANDed with the other filter categories. A missing actionable X12 acknowledgment is selected with &#x60;attentionReason&#x3D;x12_ack_overdue&#x60;, not by this parameter. Repeat the filter when following an opaque cursor and check &#x60;attentionSummary.freshness.complete&#x60; before drawing a conclusion from an empty page.
     * @param {Array<FilterableImplementationAcknowledgmentStatus>} [implementationAckStatus] Exact normalized 999 status selected for this transaction. ModernEDI uses a uniquely matched AK2/IK5 result when possible and otherwise uses the conservative AK9 implementation-group result. Repeat the parameter or use comma-separated values to select more than one status; values within this parameter are ORed. This filter is ANDed with the other filter categories. Transactions without an attributable 999 do not match this filter. Repeat it when following an opaque cursor and check &#x60;attentionSummary.freshness.complete&#x60; before drawing a conclusion from an empty page.
     * @param {Array<FilterableTransactionMdnStatus>} [mdnStatus] Exact normalized AS2 receipt-assurance status. Repeat the parameter or use comma-separated values to select more than one status; values within this parameter are ORed. This filter is ANDed with the other filter categories. Transactions for which no MDN status applies have &#x60;mdnStatus: null&#x60; and do not match this filter. Repeat the filter when following an opaque cursor and check &#x60;attentionSummary.freshness.complete&#x60; before drawing a conclusion from an empty page.
     * @param {string} [startDate] Optional inclusive window start. Accepts an ISO date or an RFC 3339 date-time with an explicit offset. Date-only values start at 00:00:00 UTC. Date-times are normalized to UTC; offset-less date-times are rejected. When both dates are omitted, the query covers the standard active-workspace transaction-history window of the preceding 12 months. Specify dates when your client requires a particular interval, and do not infer deletion from an absent row.
     * @param {string} [endDate] Optional inclusive window end. Accepts the same formats as &#x60;startDate&#x60;; a date-only value includes the complete UTC day. When both dates are omitted, the query covers the preceding 12 months.
     * @param {string} [cursor] Cursor from the previous response.
     * @param {number} [limit] Maximum number of transactions to return.
     * @param {'inbound' | 'outbound'} [direction] Case-insensitive filter for the persisted inbound or outbound transaction direction.
     * @param {string} [partnerName] Case-insensitive persisted partner name. This filters display metadata; transaction access remains scoped by persisted &#x60;partnerId&#x60;.
     * @param {number} [partnerId] Filters transactions by the tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;. The id remains stable when a partner is renamed. Transactions without a stored id are not returned.
     * @param {string} [transactionSet] X12 transaction set code.
     * @param {string} [businessKey] Exact business key value recorded on a transaction. Inbound keys come from the incoming map. Outbound keys are recorded only when &#x60;/send&#x60;, &#x60;/reply&#x60;, &#x60;/carbonCopy&#x60;, or a &#x60;/v1/as2/x12/...&#x60; endpoint is called with a JSON envelope that includes &#x60;businessKey&#x60;.
     * @param {string} [messageId] Exact AS2 message id.
     * @param {string} [replyToMessageId] Original inbound AS2 message id for outbound replies.
     * @param {string} [transactionControlNumber] ST02 transaction control number.
     * @param {string} [functionalGroupControlNumber] GS06 functional group control number.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    listIntegrationTransactionsRequestOpts(requestParameters: ListIntegrationTransactionsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns a pageable transaction history for custom transaction viewers, dashboards, and reconciliation workflows. Outbound replies include `replyToMessageId` so they can be shown underneath the inbound document they answer. Each row includes the stable `needsAttention` operator signal, machine-readable `attentionReasons`, and a compact `mappingStatus` so unattended integrations can route failures without fetching every transaction detail. `functionalAckStatus`, `implementationAckStatus`, and `mdnStatus` expose the same compact status values used by their exact list filters. The root `attentionSummary` is an environment-wide count and reconciliation-freshness signal; it is not restricted to the requested page or date window. Exact mapping, functional-acknowledgment, implementation-acknowledgment, and MDN filters use that same asynchronous projection, so check `attentionSummary.freshness.complete` before treating an empty filtered page as proof that no matching transaction exists.
     * @summary List transactions
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {boolean} [needsAttention] Filters by the authoritative operator-inbox projection. Use &#x60;true&#x60; to return transactions that currently need attention or &#x60;false&#x60; to return transactions with no active attention reason. Check &#x60;attentionSummary.freshness.complete&#x60; before treating an empty filtered page as proof that no transaction needs attention.
     * @param {Array<TransactionAttentionReason>} [attentionReason] Repeat this parameter to select more than one attention reason; repeated values are ORed. Supplying a reason implies &#x60;needsAttention&#x3D;true&#x60;, and combining a reason with &#x60;needsAttention&#x3D;false&#x60; returns &#x60;400&#x60;. Repeat all explicit filters, including every reason, when following an opaque cursor.
     * @param {Array<FilterableTransactionMappingStatus>} [mappingStatus] Exact consolidated mapping status. Repeat the parameter or use comma-separated values to select more than one status; values within this parameter are ORed. &#x60;UNAVAILABLE&#x60; cannot be selected because it describes a request-local telemetry read failure rather than a durable projected state. This filter is ANDed with &#x60;functionalAckStatus&#x60;, &#x60;implementationAckStatus&#x60;, &#x60;mdnStatus&#x60;, attention, and transaction metadata filters. Repeat it when following an opaque cursor and check &#x60;attentionSummary.freshness.complete&#x60; before drawing a conclusion from an empty page.
     * @param {Array<FilterableFunctionalAcknowledgmentStatus>} [functionalAckStatus] Exact normalized 997 status selected for this transaction. ModernEDI uses a uniquely matched AK2/AK5 result when possible and otherwise uses the conservative AK9 group result. Repeat the parameter or use comma-separated values to select more than one status; values within this parameter are ORed. This filter is ANDed with the other filter categories. A missing actionable X12 acknowledgment is selected with &#x60;attentionReason&#x3D;x12_ack_overdue&#x60;, not by this parameter. Repeat the filter when following an opaque cursor and check &#x60;attentionSummary.freshness.complete&#x60; before drawing a conclusion from an empty page.
     * @param {Array<FilterableImplementationAcknowledgmentStatus>} [implementationAckStatus] Exact normalized 999 status selected for this transaction. ModernEDI uses a uniquely matched AK2/IK5 result when possible and otherwise uses the conservative AK9 implementation-group result. Repeat the parameter or use comma-separated values to select more than one status; values within this parameter are ORed. This filter is ANDed with the other filter categories. Transactions without an attributable 999 do not match this filter. Repeat it when following an opaque cursor and check &#x60;attentionSummary.freshness.complete&#x60; before drawing a conclusion from an empty page.
     * @param {Array<FilterableTransactionMdnStatus>} [mdnStatus] Exact normalized AS2 receipt-assurance status. Repeat the parameter or use comma-separated values to select more than one status; values within this parameter are ORed. This filter is ANDed with the other filter categories. Transactions for which no MDN status applies have &#x60;mdnStatus: null&#x60; and do not match this filter. Repeat the filter when following an opaque cursor and check &#x60;attentionSummary.freshness.complete&#x60; before drawing a conclusion from an empty page.
     * @param {string} [startDate] Optional inclusive window start. Accepts an ISO date or an RFC 3339 date-time with an explicit offset. Date-only values start at 00:00:00 UTC. Date-times are normalized to UTC; offset-less date-times are rejected. When both dates are omitted, the query covers the standard active-workspace transaction-history window of the preceding 12 months. Specify dates when your client requires a particular interval, and do not infer deletion from an absent row.
     * @param {string} [endDate] Optional inclusive window end. Accepts the same formats as &#x60;startDate&#x60;; a date-only value includes the complete UTC day. When both dates are omitted, the query covers the preceding 12 months.
     * @param {string} [cursor] Cursor from the previous response.
     * @param {number} [limit] Maximum number of transactions to return.
     * @param {'inbound' | 'outbound'} [direction] Case-insensitive filter for the persisted inbound or outbound transaction direction.
     * @param {string} [partnerName] Case-insensitive persisted partner name. This filters display metadata; transaction access remains scoped by persisted &#x60;partnerId&#x60;.
     * @param {number} [partnerId] Filters transactions by the tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;. The id remains stable when a partner is renamed. Transactions without a stored id are not returned.
     * @param {string} [transactionSet] X12 transaction set code.
     * @param {string} [businessKey] Exact business key value recorded on a transaction. Inbound keys come from the incoming map. Outbound keys are recorded only when &#x60;/send&#x60;, &#x60;/reply&#x60;, &#x60;/carbonCopy&#x60;, or a &#x60;/v1/as2/x12/...&#x60; endpoint is called with a JSON envelope that includes &#x60;businessKey&#x60;.
     * @param {string} [messageId] Exact AS2 message id.
     * @param {string} [replyToMessageId] Original inbound AS2 message id for outbound replies.
     * @param {string} [transactionControlNumber] ST02 transaction control number.
     * @param {string} [functionalGroupControlNumber] GS06 functional group control number.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    listIntegrationTransactionsRaw(requestParameters: ListIntegrationTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionListResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns a pageable transaction history for custom transaction viewers, dashboards, and reconciliation workflows. Outbound replies include `replyToMessageId` so they can be shown underneath the inbound document they answer. Each row includes the stable `needsAttention` operator signal, machine-readable `attentionReasons`, and a compact `mappingStatus` so unattended integrations can route failures without fetching every transaction detail. `functionalAckStatus`, `implementationAckStatus`, and `mdnStatus` expose the same compact status values used by their exact list filters. The root `attentionSummary` is an environment-wide count and reconciliation-freshness signal; it is not restricted to the requested page or date window. Exact mapping, functional-acknowledgment, implementation-acknowledgment, and MDN filters use that same asynchronous projection, so check `attentionSummary.freshness.complete` before treating an empty filtered page as proof that no matching transaction exists.
     * List transactions
     */
    listIntegrationTransactions(requestParameters: ListIntegrationTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionListResponse>;

    /**
     * Creates request options for replayIntegrationTransaction without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} idempotencyKey Required caller-generated replay key. Reuse the same key only for the same message id, transaction key, environment, mode, delivery, and reason. A successful result is stored for safe retry.
     * @param {TransactionReplayRequest} transactionReplayRequest Replay request bodies may be at most 16 KiB (16,384 bytes).
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    replayIntegrationTransactionRequestOpts(requestParameters: ReplayIntegrationTransactionRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:replay`.  Re-runs mapping for one tenant-visible inbound transaction with the currently published maps and returns the regenerated mapped outputs directly. Historical map revision replay is not part of the public API.  The only supported delivery is `response_only`. ModernEDI does not put regenerated outputs on the mapped-output queue, invoke mapped-output webhooks, or generate outbound acknowledgements. This endpoint is therefore suitable for inspection and controlled recovery without repeating downstream delivery side effects.  Replay re-applies the currently active inbound protection policy. The stored inbound row must contain successful `signatureVerified` and `encryptionDecrypted` evidence for every protection required in the selected environment. A missing or `false` evidence value fails closed with an `insufficient-message-security:` replay error; consequently, older transactions without that evidence are not replayable while the corresponding protection remains required.  `Idempotency-Key` is required. Repeating the same key and request returns the stored successful replay with `Idempotency-Replayed: true` and does not invoke mapping again. Reusing the key for different replay input returns `409 idempotency_key_conflict`; retry while the same replay is still processing returns `409 idempotency_key_in_progress` with `retryable: true`.  The replay body is strict JSON: unknown fields are rejected, and `environment`, `mode`, `delivery`, and `reason` must be strings when present (`reason` may also be `null`). Type mismatches return `400 invalid_request` with the offending JSON pointer.
     * @summary Replay an inbound transaction without redelivery
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} idempotencyKey Required caller-generated replay key. Reuse the same key only for the same message id, transaction key, environment, mode, delivery, and reason. A successful result is stored for safe retry.
     * @param {TransactionReplayRequest} transactionReplayRequest Replay request bodies may be at most 16 KiB (16,384 bytes).
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    replayIntegrationTransactionRaw(requestParameters: ReplayIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionReplayResponse>>;

    /**
     * **Required key scope:** `transactions:replay`.  Re-runs mapping for one tenant-visible inbound transaction with the currently published maps and returns the regenerated mapped outputs directly. Historical map revision replay is not part of the public API.  The only supported delivery is `response_only`. ModernEDI does not put regenerated outputs on the mapped-output queue, invoke mapped-output webhooks, or generate outbound acknowledgements. This endpoint is therefore suitable for inspection and controlled recovery without repeating downstream delivery side effects.  Replay re-applies the currently active inbound protection policy. The stored inbound row must contain successful `signatureVerified` and `encryptionDecrypted` evidence for every protection required in the selected environment. A missing or `false` evidence value fails closed with an `insufficient-message-security:` replay error; consequently, older transactions without that evidence are not replayable while the corresponding protection remains required.  `Idempotency-Key` is required. Repeating the same key and request returns the stored successful replay with `Idempotency-Replayed: true` and does not invoke mapping again. Reusing the key for different replay input returns `409 idempotency_key_conflict`; retry while the same replay is still processing returns `409 idempotency_key_in_progress` with `retryable: true`.  The replay body is strict JSON: unknown fields are rejected, and `environment`, `mode`, `delivery`, and `reason` must be strings when present (`reason` may also be `null`). Type mismatches return `400 invalid_request` with the offending JSON pointer.
     * Replay an inbound transaction without redelivery
     */
    replayIntegrationTransaction(requestParameters: ReplayIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionReplayResponse>;

    /**
     * Creates request options for unwatchIntegrationTransaction without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    unwatchIntegrationTransactionRequestOpts(requestParameters: UnwatchIntegrationTransactionRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:write`. Idempotently removes a tenant-visible transaction from the selected environment\'s operator watchlist. The response reports `onWatchlist: false` even when the transaction was already unwatched, so retrying after a network failure is safe. Workspace-wide attention counts and status-filter projections are asynchronous; use their `freshness` object when reconciling an immediately following list response.
     * @summary Stop watching a transaction
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    unwatchIntegrationTransactionRaw(requestParameters: UnwatchIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionWatchResponse>>;

    /**
     * **Required key scope:** `transactions:write`. Idempotently removes a tenant-visible transaction from the selected environment\'s operator watchlist. The response reports `onWatchlist: false` even when the transaction was already unwatched, so retrying after a network failure is safe. Workspace-wide attention counts and status-filter projections are asynchronous; use their `freshness` object when reconciling an immediately following list response.
     * Stop watching a transaction
     */
    unwatchIntegrationTransaction(requestParameters: UnwatchIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionWatchResponse>;

    /**
     * Creates request options for validateIntegrationTransactionX12 without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    validateIntegrationTransactionX12RequestOpts(requestParameters: ValidateIntegrationTransactionX12Request): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Parses and validates the X12 content ModernEDI retained for this transaction and returns the same structured validation model as `POST /v1/x12/validate`. Invalid X12 is a successful analysis response with `validation.valid=false`, not an HTTP error. The retained X12 can be a complete interchange containing more than one transaction set; use the returned group and transaction indexes when displaying errors. This read-only endpoint lets transaction-viewer keys inspect stored content without granting message-send or transaction-replay authority. It does not rerun mappings, create mapped outputs, replay the transaction, or resend a document.
     * @summary Validate the X12 retained for a transaction
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    validateIntegrationTransactionX12Raw(requestParameters: ValidateIntegrationTransactionX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionX12ValidationResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Parses and validates the X12 content ModernEDI retained for this transaction and returns the same structured validation model as `POST /v1/x12/validate`. Invalid X12 is a successful analysis response with `validation.valid=false`, not an HTTP error. The retained X12 can be a complete interchange containing more than one transaction set; use the returned group and transaction indexes when displaying errors. This read-only endpoint lets transaction-viewer keys inspect stored content without granting message-send or transaction-replay authority. It does not rerun mappings, create mapped outputs, replay the transaction, or resend a document.
     * Validate the X12 retained for a transaction
     */
    validateIntegrationTransactionX12(requestParameters: ValidateIntegrationTransactionX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionX12ValidationResponse>;

    /**
     * Creates request options for watchIntegrationTransaction without sending the request
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    watchIntegrationTransactionRequestOpts(requestParameters: WatchIntegrationTransactionRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:write`. Idempotently adds a tenant-visible transaction to the selected environment\'s operator watchlist. Public API watch entries do not expire and remain active until the DELETE operation removes them. The response reports the resulting state, so retrying the same request is safe. Workspace-wide attention counts and status-filter projections are asynchronous; use their `freshness` object when reconciling an immediately following list response.
     * @summary Watch a transaction
     * @param {string} messageId AS2 message id.
     * @param {string} transactionKey Transaction key, usually &#x60;&lt;functional-group-control-number&gt;#&lt;transaction-control-number&gt;&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionViewerApiInterface
     */
    watchIntegrationTransactionRaw(requestParameters: WatchIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionWatchResponse>>;

    /**
     * **Required key scope:** `transactions:write`. Idempotently adds a tenant-visible transaction to the selected environment\'s operator watchlist. Public API watch entries do not expire and remain active until the DELETE operation removes them. The response reports the resulting state, so retrying the same request is safe. Workspace-wide attention counts and status-filter projections are asynchronous; use their `freshness` object when reconciling an immediately following list response.
     * Watch a transaction
     */
    watchIntegrationTransaction(requestParameters: WatchIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionWatchResponse>;

}

/**
 *
 */
export class TransactionViewerApi extends runtime.BaseAPI implements TransactionViewerApiInterface {

    /**
     * Creates request options for getIntegrationTransaction without sending the request
     */
    async getIntegrationTransactionRequestOpts(requestParameters: GetIntegrationTransactionRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling getIntegrationTransaction().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling getIntegrationTransaction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns a metadata-first transaction aggregate: the summary, mapped output provenance and managed handoff state, normalized acknowledgment status, a document index, timeline events, compact linked-reply summaries, and the complete mapping-attempt history used to explain `needsAttention`. Document bodies are returned only by the individual document endpoint.
     * Get transaction detail
     */
    async getIntegrationTransactionRaw(requestParameters: GetIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionDetailResponse>> {
        const requestOptions = await this.getIntegrationTransactionRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionDetailResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns a metadata-first transaction aggregate: the summary, mapped output provenance and managed handoff state, normalized acknowledgment status, a document index, timeline events, compact linked-reply summaries, and the complete mapping-attempt history used to explain `needsAttention`. Document bodies are returned only by the individual document endpoint.
     * Get transaction detail
     */
    async getIntegrationTransaction(requestParameters: GetIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionDetailResponse> {
        const response = await this.getIntegrationTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationTransactionDocument without sending the request
     */
    async getIntegrationTransactionDocumentRequestOpts(requestParameters: GetIntegrationTransactionDocumentRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling getIntegrationTransactionDocument().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling getIntegrationTransactionDocument().'
            );
        }

        if (requestParameters['documentId'] == null) {
            throw new runtime.RequiredError(
                'documentId',
                'Required parameter "documentId" was null or undefined when calling getIntegrationTransactionDocument().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}/documents/{documentId}`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));
        urlPath = urlPath.replace('{documentId}', encodeURIComponent(String(requestParameters['documentId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns one complete retained artifact selected by the stable transaction-local `documentId` from the document list. A document id is not a mapped-output queue id and cannot be used to acknowledge delivery. The returned body is untrusted external content and must be rendered as untrusted external content: escape text, sanitize any supported markup, and sandbox richer previews instead of inserting it directly into a page.
     * Get one transaction document
     */
    async getIntegrationTransactionDocumentRaw(requestParameters: GetIntegrationTransactionDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionDocumentResponse>> {
        const requestOptions = await this.getIntegrationTransactionDocumentRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionDocumentResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns one complete retained artifact selected by the stable transaction-local `documentId` from the document list. A document id is not a mapped-output queue id and cannot be used to acknowledge delivery. The returned body is untrusted external content and must be rendered as untrusted external content: escape text, sanitize any supported markup, and sandbox richer previews instead of inserting it directly into a page.
     * Get one transaction document
     */
    async getIntegrationTransactionDocument(requestParameters: GetIntegrationTransactionDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionDocumentResponse> {
        const response = await this.getIntegrationTransactionDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationTransactionDocuments without sending the request
     */
    async getIntegrationTransactionDocumentsRequestOpts(requestParameters: GetIntegrationTransactionDocumentsRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling getIntegrationTransactionDocuments().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling getIntegrationTransactionDocuments().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}/documents`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns a lightweight metadata index for raw X12, mapped inbound outputs, MDN reports, acknowledgements, and HTTP responses recorded for the transaction. It never returns document bodies. Fetch one selected body from the individual document endpoint when an operator opens it.
     * Get transaction documents
     */
    async getIntegrationTransactionDocumentsRaw(requestParameters: GetIntegrationTransactionDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionDocumentsResponse>> {
        const requestOptions = await this.getIntegrationTransactionDocumentsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionDocumentsResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns a lightweight metadata index for raw X12, mapped inbound outputs, MDN reports, acknowledgements, and HTTP responses recorded for the transaction. It never returns document bodies. Fetch one selected body from the individual document endpoint when an operator opens it.
     * Get transaction documents
     */
    async getIntegrationTransactionDocuments(requestParameters: GetIntegrationTransactionDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionDocumentsResponse> {
        const response = await this.getIntegrationTransactionDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationTransactionEvents without sending the request
     */
    async getIntegrationTransactionEventsRequestOpts(requestParameters: GetIntegrationTransactionEventsRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling getIntegrationTransactionEvents().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling getIntegrationTransactionEvents().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}/events`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns a normalized timeline for the transaction, including receipt or send events, mapping events, MDNs, acknowledgements, mapped-output availability/delivery/redelivery/attention/acknowledgment, and linked replies. These entries are derived from current persisted evidence; an output acknowledgment means acknowledged by your integration, not accepted by a downstream business system.
     * Get transaction events
     */
    async getIntegrationTransactionEventsRaw(requestParameters: GetIntegrationTransactionEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionEventsResponse>> {
        const requestOptions = await this.getIntegrationTransactionEventsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionEventsResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns a normalized timeline for the transaction, including receipt or send events, mapping events, MDNs, acknowledgements, mapped-output availability/delivery/redelivery/attention/acknowledgment, and linked replies. These entries are derived from current persisted evidence; an output acknowledgment means acknowledged by your integration, not accepted by a downstream business system.
     * Get transaction events
     */
    async getIntegrationTransactionEvents(requestParameters: GetIntegrationTransactionEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionEventsResponse> {
        const response = await this.getIntegrationTransactionEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getRelatedIntegrationTransactions without sending the request
     */
    async getRelatedIntegrationTransactionsRequestOpts(requestParameters: GetRelatedIntegrationTransactionsRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling getRelatedIntegrationTransactions().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling getRelatedIntegrationTransactions().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}/related`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns compact summaries of outbound reply transactions linked to an inbound transaction. Follow a summary\'s `messageId` and `transactionKey` to fetch its metadata-first detail or document index. Replies are included only when `replyToTransactionKey` identifies that exact transaction inside `replyToMessageId`. Use the returned linkage fields rather than inferring relationships from document type.
     * Get linked reply transactions
     */
    async getRelatedIntegrationTransactionsRaw(requestParameters: GetRelatedIntegrationTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RelatedTransactionsResponse>> {
        const requestOptions = await this.getRelatedIntegrationTransactionsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RelatedTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns compact summaries of outbound reply transactions linked to an inbound transaction. Follow a summary\'s `messageId` and `transactionKey` to fetch its metadata-first detail or document index. Replies are included only when `replyToTransactionKey` identifies that exact transaction inside `replyToMessageId`. Use the returned linkage fields rather than inferring relationships from document type.
     * Get linked reply transactions
     */
    async getRelatedIntegrationTransactions(requestParameters: GetRelatedIntegrationTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RelatedTransactionsResponse> {
        const response = await this.getRelatedIntegrationTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listIntegrationTransactions without sending the request
     */
    async listIntegrationTransactionsRequestOpts(requestParameters: ListIntegrationTransactionsRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        if (requestParameters['needsAttention'] != null) {
            queryParameters['needsAttention'] = requestParameters['needsAttention'];
        }

        if (requestParameters['attentionReason'] != null) {
            queryParameters['attentionReason'] = requestParameters['attentionReason'];
        }

        if (requestParameters['mappingStatus'] != null) {
            assertKnownTransactionFilterValues(
                'mappingStatus',
                requestParameters['mappingStatus'],
                TRANSACTION_MAPPING_STATUS_FILTER_VALUES,
            );
            queryParameters['mappingStatus'] = requestParameters['mappingStatus'];
        }

        if (requestParameters['functionalAckStatus'] != null) {
            assertKnownTransactionFilterValues(
                'functionalAckStatus',
                requestParameters['functionalAckStatus'],
                FUNCTIONAL_ACKNOWLEDGMENT_STATUS_FILTER_VALUES,
            );
            queryParameters['functionalAckStatus'] = requestParameters['functionalAckStatus'];
        }

        if (requestParameters['implementationAckStatus'] != null) {
            assertKnownTransactionFilterValues(
                'implementationAckStatus',
                requestParameters['implementationAckStatus'],
                IMPLEMENTATION_ACKNOWLEDGMENT_STATUS_FILTER_VALUES,
            );
            queryParameters['implementationAckStatus'] = requestParameters['implementationAckStatus'];
        }

        if (requestParameters['mdnStatus'] != null) {
            assertKnownTransactionFilterValues(
                'mdnStatus',
                requestParameters['mdnStatus'],
                TRANSACTION_MDN_STATUS_FILTER_VALUES,
            );
            queryParameters['mdnStatus'] = requestParameters['mdnStatus'];
        }

        if (requestParameters['startDate'] != null) {
            queryParameters['startDate'] = requestParameters['startDate'];
        }

        if (requestParameters['endDate'] != null) {
            queryParameters['endDate'] = requestParameters['endDate'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['direction'] != null) {
            queryParameters['direction'] = requestParameters['direction'];
        }

        if (requestParameters['partnerName'] != null) {
            queryParameters['partnerName'] = requestParameters['partnerName'];
        }

        if (requestParameters['partnerId'] != null) {
            queryParameters['partnerId'] = requestParameters['partnerId'];
        }

        if (requestParameters['transactionSet'] != null) {
            queryParameters['transactionSet'] = requestParameters['transactionSet'];
        }

        if (requestParameters['businessKey'] != null) {
            queryParameters['businessKey'] = requestParameters['businessKey'];
        }

        if (requestParameters['messageId'] != null) {
            queryParameters['messageId'] = requestParameters['messageId'];
        }

        if (requestParameters['replyToMessageId'] != null) {
            queryParameters['replyToMessageId'] = requestParameters['replyToMessageId'];
        }

        if (requestParameters['transactionControlNumber'] != null) {
            queryParameters['transactionControlNumber'] = requestParameters['transactionControlNumber'];
        }

        if (requestParameters['functionalGroupControlNumber'] != null) {
            queryParameters['functionalGroupControlNumber'] = requestParameters['functionalGroupControlNumber'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns a pageable transaction history for custom transaction viewers, dashboards, and reconciliation workflows. Outbound replies include `replyToMessageId` so they can be shown underneath the inbound document they answer. Each row includes the stable `needsAttention` operator signal, machine-readable `attentionReasons`, and a compact `mappingStatus` so unattended integrations can route failures without fetching every transaction detail. `functionalAckStatus`, `implementationAckStatus`, and `mdnStatus` expose the same compact status values used by their exact list filters. The root `attentionSummary` is an environment-wide count and reconciliation-freshness signal; it is not restricted to the requested page or date window. Exact mapping, functional-acknowledgment, implementation-acknowledgment, and MDN filters use that same asynchronous projection, so check `attentionSummary.freshness.complete` before treating an empty filtered page as proof that no matching transaction exists.
     * List transactions
     */
    async listIntegrationTransactionsRaw(requestParameters: ListIntegrationTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionListResponse>> {
        const requestOptions = await this.listIntegrationTransactionsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionListResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns a pageable transaction history for custom transaction viewers, dashboards, and reconciliation workflows. Outbound replies include `replyToMessageId` so they can be shown underneath the inbound document they answer. Each row includes the stable `needsAttention` operator signal, machine-readable `attentionReasons`, and a compact `mappingStatus` so unattended integrations can route failures without fetching every transaction detail. `functionalAckStatus`, `implementationAckStatus`, and `mdnStatus` expose the same compact status values used by their exact list filters. The root `attentionSummary` is an environment-wide count and reconciliation-freshness signal; it is not restricted to the requested page or date window. Exact mapping, functional-acknowledgment, implementation-acknowledgment, and MDN filters use that same asynchronous projection, so check `attentionSummary.freshness.complete` before treating an empty filtered page as proof that no matching transaction exists.
     * List transactions
     */
    async listIntegrationTransactions(requestParameters: ListIntegrationTransactionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionListResponse> {
        const response = await this.listIntegrationTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for replayIntegrationTransaction without sending the request
     */
    async replayIntegrationTransactionRequestOpts(requestParameters: ReplayIntegrationTransactionRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling replayIntegrationTransaction().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling replayIntegrationTransaction().'
            );
        }

        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling replayIntegrationTransaction().'
            );
        }

        if (requestParameters['transactionReplayRequest'] == null) {
            throw new runtime.RequiredError(
                'transactionReplayRequest',
                'Required parameter "transactionReplayRequest" was null or undefined when calling replayIntegrationTransaction().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (requestParameters['idempotencyKey'] != null) {
            headerParameters['Idempotency-Key'] = String(requestParameters['idempotencyKey']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}/replays`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionReplayRequestToJSON(requestParameters['transactionReplayRequest']),
        };
    }

    /**
     * **Required key scope:** `transactions:replay`.  Re-runs mapping for one tenant-visible inbound transaction with the currently published maps and returns the regenerated mapped outputs directly. Historical map revision replay is not part of the public API.  The only supported delivery is `response_only`. ModernEDI does not put regenerated outputs on the mapped-output queue, invoke mapped-output webhooks, or generate outbound acknowledgements. This endpoint is therefore suitable for inspection and controlled recovery without repeating downstream delivery side effects.  Replay re-applies the currently active inbound protection policy. The stored inbound row must contain successful `signatureVerified` and `encryptionDecrypted` evidence for every protection required in the selected environment. A missing or `false` evidence value fails closed with an `insufficient-message-security:` replay error; consequently, older transactions without that evidence are not replayable while the corresponding protection remains required.  `Idempotency-Key` is required. Repeating the same key and request returns the stored successful replay with `Idempotency-Replayed: true` and does not invoke mapping again. Reusing the key for different replay input returns `409 idempotency_key_conflict`; retry while the same replay is still processing returns `409 idempotency_key_in_progress` with `retryable: true`.  The replay body is strict JSON: unknown fields are rejected, and `environment`, `mode`, `delivery`, and `reason` must be strings when present (`reason` may also be `null`). Type mismatches return `400 invalid_request` with the offending JSON pointer.
     * Replay an inbound transaction without redelivery
     */
    async replayIntegrationTransactionRaw(requestParameters: ReplayIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionReplayResponse>> {
        const requestOptions = await this.replayIntegrationTransactionRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionReplayResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:replay`.  Re-runs mapping for one tenant-visible inbound transaction with the currently published maps and returns the regenerated mapped outputs directly. Historical map revision replay is not part of the public API.  The only supported delivery is `response_only`. ModernEDI does not put regenerated outputs on the mapped-output queue, invoke mapped-output webhooks, or generate outbound acknowledgements. This endpoint is therefore suitable for inspection and controlled recovery without repeating downstream delivery side effects.  Replay re-applies the currently active inbound protection policy. The stored inbound row must contain successful `signatureVerified` and `encryptionDecrypted` evidence for every protection required in the selected environment. A missing or `false` evidence value fails closed with an `insufficient-message-security:` replay error; consequently, older transactions without that evidence are not replayable while the corresponding protection remains required.  `Idempotency-Key` is required. Repeating the same key and request returns the stored successful replay with `Idempotency-Replayed: true` and does not invoke mapping again. Reusing the key for different replay input returns `409 idempotency_key_conflict`; retry while the same replay is still processing returns `409 idempotency_key_in_progress` with `retryable: true`.  The replay body is strict JSON: unknown fields are rejected, and `environment`, `mode`, `delivery`, and `reason` must be strings when present (`reason` may also be `null`). Type mismatches return `400 invalid_request` with the offending JSON pointer.
     * Replay an inbound transaction without redelivery
     */
    async replayIntegrationTransaction(requestParameters: ReplayIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionReplayResponse> {
        const response = await this.replayIntegrationTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for unwatchIntegrationTransaction without sending the request
     */
    async unwatchIntegrationTransactionRequestOpts(requestParameters: UnwatchIntegrationTransactionRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling unwatchIntegrationTransaction().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling unwatchIntegrationTransaction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}/watch`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));

        return {
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:write`. Idempotently removes a tenant-visible transaction from the selected environment\'s operator watchlist. The response reports `onWatchlist: false` even when the transaction was already unwatched, so retrying after a network failure is safe. Workspace-wide attention counts and status-filter projections are asynchronous; use their `freshness` object when reconciling an immediately following list response.
     * Stop watching a transaction
     */
    async unwatchIntegrationTransactionRaw(requestParameters: UnwatchIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionWatchResponse>> {
        const requestOptions = await this.unwatchIntegrationTransactionRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionWatchResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:write`. Idempotently removes a tenant-visible transaction from the selected environment\'s operator watchlist. The response reports `onWatchlist: false` even when the transaction was already unwatched, so retrying after a network failure is safe. Workspace-wide attention counts and status-filter projections are asynchronous; use their `freshness` object when reconciling an immediately following list response.
     * Stop watching a transaction
     */
    async unwatchIntegrationTransaction(requestParameters: UnwatchIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionWatchResponse> {
        const response = await this.unwatchIntegrationTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for validateIntegrationTransactionX12 without sending the request
     */
    async validateIntegrationTransactionX12RequestOpts(requestParameters: ValidateIntegrationTransactionX12Request): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling validateIntegrationTransactionX12().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling validateIntegrationTransactionX12().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}/x12/validation`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Parses and validates the X12 content ModernEDI retained for this transaction and returns the same structured validation model as `POST /v1/x12/validate`. Invalid X12 is a successful analysis response with `validation.valid=false`, not an HTTP error. The retained X12 can be a complete interchange containing more than one transaction set; use the returned group and transaction indexes when displaying errors. This read-only endpoint lets transaction-viewer keys inspect stored content without granting message-send or transaction-replay authority. It does not rerun mappings, create mapped outputs, replay the transaction, or resend a document.
     * Validate the X12 retained for a transaction
     */
    async validateIntegrationTransactionX12Raw(requestParameters: ValidateIntegrationTransactionX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionX12ValidationResponse>> {
        const requestOptions = await this.validateIntegrationTransactionX12RequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionX12ValidationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Parses and validates the X12 content ModernEDI retained for this transaction and returns the same structured validation model as `POST /v1/x12/validate`. Invalid X12 is a successful analysis response with `validation.valid=false`, not an HTTP error. The retained X12 can be a complete interchange containing more than one transaction set; use the returned group and transaction indexes when displaying errors. This read-only endpoint lets transaction-viewer keys inspect stored content without granting message-send or transaction-replay authority. It does not rerun mappings, create mapped outputs, replay the transaction, or resend a document.
     * Validate the X12 retained for a transaction
     */
    async validateIntegrationTransactionX12(requestParameters: ValidateIntegrationTransactionX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionX12ValidationResponse> {
        const response = await this.validateIntegrationTransactionX12Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for watchIntegrationTransaction without sending the request
     */
    async watchIntegrationTransactionRequestOpts(requestParameters: WatchIntegrationTransactionRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['messageId'] == null) {
            throw new runtime.RequiredError(
                'messageId',
                'Required parameter "messageId" was null or undefined when calling watchIntegrationTransaction().'
            );
        }

        if (requestParameters['transactionKey'] == null) {
            throw new runtime.RequiredError(
                'transactionKey',
                'Required parameter "transactionKey" was null or undefined when calling watchIntegrationTransaction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("IntegrationApiKeyBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/integration/transactions/{messageId}/{transactionKey}/watch`;
        urlPath = urlPath.replace('{messageId}', encodeURIComponent(String(requestParameters['messageId'])));
        urlPath = urlPath.replace('{transactionKey}', encodeURIComponent(String(requestParameters['transactionKey'])));

        return {
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:write`. Idempotently adds a tenant-visible transaction to the selected environment\'s operator watchlist. Public API watch entries do not expire and remain active until the DELETE operation removes them. The response reports the resulting state, so retrying the same request is safe. Workspace-wide attention counts and status-filter projections are asynchronous; use their `freshness` object when reconciling an immediately following list response.
     * Watch a transaction
     */
    async watchIntegrationTransactionRaw(requestParameters: WatchIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionWatchResponse>> {
        const requestOptions = await this.watchIntegrationTransactionRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionWatchResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:write`. Idempotently adds a tenant-visible transaction to the selected environment\'s operator watchlist. Public API watch entries do not expire and remain active until the DELETE operation removes them. The response reports the resulting state, so retrying the same request is safe. Workspace-wide attention counts and status-filter projections are asynchronous; use their `freshness` object when reconciling an immediately following list response.
     * Watch a transaction
     */
    async watchIntegrationTransaction(requestParameters: WatchIntegrationTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionWatchResponse> {
        const response = await this.watchIntegrationTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetIntegrationTransactionEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type GetIntegrationTransactionEnvironmentEnum = typeof GetIntegrationTransactionEnvironmentEnum[keyof typeof GetIntegrationTransactionEnvironmentEnum];
/**
 * @export
 */
export const GetIntegrationTransactionDocumentEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type GetIntegrationTransactionDocumentEnvironmentEnum = typeof GetIntegrationTransactionDocumentEnvironmentEnum[keyof typeof GetIntegrationTransactionDocumentEnvironmentEnum];
/**
 * @export
 */
export const GetIntegrationTransactionDocumentsEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type GetIntegrationTransactionDocumentsEnvironmentEnum = typeof GetIntegrationTransactionDocumentsEnvironmentEnum[keyof typeof GetIntegrationTransactionDocumentsEnvironmentEnum];
/**
 * @export
 */
export const GetIntegrationTransactionEventsEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type GetIntegrationTransactionEventsEnvironmentEnum = typeof GetIntegrationTransactionEventsEnvironmentEnum[keyof typeof GetIntegrationTransactionEventsEnvironmentEnum];
/**
 * @export
 */
export const GetRelatedIntegrationTransactionsEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type GetRelatedIntegrationTransactionsEnvironmentEnum = typeof GetRelatedIntegrationTransactionsEnvironmentEnum[keyof typeof GetRelatedIntegrationTransactionsEnvironmentEnum];
/**
 * @export
 */
export const ListIntegrationTransactionsEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ListIntegrationTransactionsEnvironmentEnum = typeof ListIntegrationTransactionsEnvironmentEnum[keyof typeof ListIntegrationTransactionsEnvironmentEnum];
/**
 * @export
 */
export const ListIntegrationTransactionsDirectionEnum = {
    Inbound: 'inbound',
    Outbound: 'outbound',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ListIntegrationTransactionsDirectionEnum = typeof ListIntegrationTransactionsDirectionEnum[keyof typeof ListIntegrationTransactionsDirectionEnum];
/**
 * @export
 */
export const UnwatchIntegrationTransactionEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type UnwatchIntegrationTransactionEnvironmentEnum = typeof UnwatchIntegrationTransactionEnvironmentEnum[keyof typeof UnwatchIntegrationTransactionEnvironmentEnum];
/**
 * @export
 */
export const ValidateIntegrationTransactionX12EnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ValidateIntegrationTransactionX12EnvironmentEnum = typeof ValidateIntegrationTransactionX12EnvironmentEnum[keyof typeof ValidateIntegrationTransactionX12EnvironmentEnum];
/**
 * @export
 */
export const WatchIntegrationTransactionEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type WatchIntegrationTransactionEnvironmentEnum = typeof WatchIntegrationTransactionEnvironmentEnum[keyof typeof WatchIntegrationTransactionEnvironmentEnum];
