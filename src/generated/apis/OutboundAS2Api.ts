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
import type { GeneratedX12SourceBody, OutboundMappedSourceBody } from '../requestBodies.js';
import {
    type ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/ErrorResponse.js';
import {
    type GeneratedX12Request,
    GeneratedX12RequestFromJSON,
    GeneratedX12RequestToJSON,
} from '../models/GeneratedX12Request.js';
import {
    type OutboundPreviewResponse,
    OutboundPreviewResponseFromJSON,
    OutboundPreviewResponseToJSON,
} from '../models/OutboundPreviewResponse.js';
import {
    type OutboundTransformEnvelope,
    OutboundTransformEnvelopeFromJSON,
    OutboundTransformEnvelopeToJSON,
} from '../models/OutboundTransformEnvelope.js';
import {
    type SendSuccessResponse,
    SendSuccessResponseFromJSON,
    SendSuccessResponseToJSON,
} from '../models/SendSuccessResponse.js';

export type CarbonCopyGeneratedX12Request = {
    x12Version: string;
    functionalGroupType: string;
    transactionGroupType: number;
    originalMessageId: string;
    xRequestId?: string;
    test?: boolean;
    idempotencyKey?: string;
    partnerId: number;
    originalTransactionKey?: string;
    copyToPartnerId: number;
} & GeneratedX12SourceBody;

export type PreviewOutboundX12OperationRequest = {
    x12Version: string;
    functionalGroupType: string;
    transactionGroupType: number;
    xRequestId?: string;
    partnerId: number;
} & OutboundMappedSourceBody;

export type ReplyToInboundAs2MessageRequest = {
    originalMessageId: string;
    xRequestId?: string;
    test?: boolean;
    idempotencyKey?: string;
    partnerId?: number;
    x12Version?: string;
    functionalGroupType?: string;
    transactionGroupType?: number;
    originalTransactionKey?: string;
} & OutboundMappedSourceBody;

export type ReplyWithGeneratedX12Request = {
    functionalGroupType: string;
    transactionGroupType: number;
    originalMessageId: string;
    xRequestId?: string;
    test?: boolean;
    idempotencyKey?: string;
    partnerId?: number;
    x12Version?: string;
    originalTransactionKey?: string;
} & GeneratedX12SourceBody;

export type SendAs2CarbonCopyRequest = {
    x12Version: string;
    functionalGroupType: string;
    transactionGroupType: number;
    originalMessageId: string;
    xRequestId?: string;
    test?: boolean;
    idempotencyKey?: string;
    partnerId: number;
    originalTransactionKey?: string;
    copyToPartnerId: number;
} & OutboundMappedSourceBody;

export type SendAs2MessageRequest = {
    x12Version: string;
    functionalGroupType: string;
    transactionGroupType: number;
    xRequestId?: string;
    test?: boolean;
    idempotencyKey?: string;
    partnerId: number;
} & OutboundMappedSourceBody;

export type SendGeneratedX12MessageRequest = {
    x12Version: string;
    functionalGroupType: string;
    transactionGroupType: number;
    xRequestId?: string;
    test?: boolean;
    idempotencyKey?: string;
    partnerId: number;
} & GeneratedX12SourceBody;

/**
 * OutboundAS2Api - interface
 *
 * @export
 * @interface OutboundAS2ApiInterface
 */
export interface OutboundAS2ApiInterface {
    /**
     * Creates request options for carbonCopyGeneratedX12 without sending the request
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {string} originalMessageId Original inbound AS2 message id used to link replies or carbon copies to an inbound flow.
     * @param {number} copyToPartnerId Stable partner id returned by &#x60;GET /v1/partners&#x60; for the partner that receives the carbon-copy AS2 envelope. This does not select the outgoing map; &#x60;partnerId&#x60; selects the original/source map.
     * @param {GeneratedX12SourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {GeneratedX12SourceBody['body']} body A complete X12 interchange that ModernEDI should validate and send without applying an outgoing map. Use the JSON form only when you also want to attach a business key to the transaction record.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {string} [originalTransactionKey] Exact transaction key, normally &#x60;GS06#ST02&#x60;, inside &#x60;originalMessageId&#x60;. Supply it when one inbound AS2 message contains multiple transaction sets. ModernEDI validates the composite reference against the selected production or test environment and authenticated workspace before transforming or sending. A missing or unauthorized exact inbound transaction returns 404 without invoking the map or tenant runtime. When omitted, ModernEDI resolves and persists the key only if &#x60;originalMessageId&#x60; identifies exactly one inbound transaction; an ambiguous multi-transaction message returns 400.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    carbonCopyGeneratedX12RequestOpts(requestParameters: CarbonCopyGeneratedX12Request): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Sends supplied X12 to a second partner while preserving the original transaction context. ModernEDI validates the X12 but does not apply an outgoing map. Select the original partner with `partnerId` and the recipient with `copyToPartnerId`. Use `originalTransactionKey` when the original AS2 message contains more than one transaction set.
     * @summary Send already-generated X12 to a carbon-copy partner
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {string} originalMessageId Original inbound AS2 message id used to link replies or carbon copies to an inbound flow.
     * @param {number} copyToPartnerId Stable partner id returned by &#x60;GET /v1/partners&#x60; for the partner that receives the carbon-copy AS2 envelope. This does not select the outgoing map; &#x60;partnerId&#x60; selects the original/source map.
     * @param {GeneratedX12SourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {GeneratedX12SourceBody['body']} body A complete X12 interchange that ModernEDI should validate and send without applying an outgoing map. Use the JSON form only when you also want to attach a business key to the transaction record.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {string} [originalTransactionKey] Exact transaction key, normally &#x60;GS06#ST02&#x60;, inside &#x60;originalMessageId&#x60;. Supply it when one inbound AS2 message contains multiple transaction sets. ModernEDI validates the composite reference against the selected production or test environment and authenticated workspace before transforming or sending. A missing or unauthorized exact inbound transaction returns 404 without invoking the map or tenant runtime. When omitted, ModernEDI resolves and persists the key only if &#x60;originalMessageId&#x60; identifies exactly one inbound transaction; an ambiguous multi-transaction message returns 400.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    carbonCopyGeneratedX12Raw(requestParameters: CarbonCopyGeneratedX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>>;

    /**
     * **Required key scope:** `messages:write`. Sends supplied X12 to a second partner while preserving the original transaction context. ModernEDI validates the X12 but does not apply an outgoing map. Select the original partner with `partnerId` and the recipient with `copyToPartnerId`. Use `originalTransactionKey` when the original AS2 message contains more than one transaction set.
     * Send already-generated X12 to a carbon-copy partner
     */
    carbonCopyGeneratedX12(requestParameters: CarbonCopyGeneratedX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse>;

    /**
     * Creates request options for previewOutboundX12 without sending the request
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {OutboundMappedSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {OutboundMappedSourceBody['body']} body Source document for an outgoing map. Use the vendor media type for an explicit ModernEDI envelope containing &#x60;input&#x60;, &#x60;contentType&#x60;, optional &#x60;params&#x60;, and optional &#x60;businessKey&#x60;. &#x60;application/json&#x60; bodies are always ordinary JSON map input, including objects with top-level &#x60;input&#x60;, &#x60;params&#x60;, &#x60;businessKey&#x60;, or &#x60;contentType&#x60; fields.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    previewOutboundX12RequestOpts(requestParameters: PreviewOutboundX12OperationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Uses the same partner, X12 metadata, content type, source body, params, and business-key contract as `/v1/as2/send`, but stops after mapping and X12 validation. It returns generated X12, validation details, mapping provenance, the resolved partner, and the optional business key. It does not contact the trading partner, create an outbound transaction, or require the partner\'s AS2 endpoint to be configured. Use it to validate a production-shaped request before the first live send.
     * @summary Transform and validate an outbound document without sending it
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {OutboundMappedSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {OutboundMappedSourceBody['body']} body Source document for an outgoing map. Use the vendor media type for an explicit ModernEDI envelope containing &#x60;input&#x60;, &#x60;contentType&#x60;, optional &#x60;params&#x60;, and optional &#x60;businessKey&#x60;. &#x60;application/json&#x60; bodies are always ordinary JSON map input, including objects with top-level &#x60;input&#x60;, &#x60;params&#x60;, &#x60;businessKey&#x60;, or &#x60;contentType&#x60; fields.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    previewOutboundX12Raw(requestParameters: PreviewOutboundX12OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OutboundPreviewResponse>>;

    /**
     * **Required key scope:** `messages:write`. Uses the same partner, X12 metadata, content type, source body, params, and business-key contract as `/v1/as2/send`, but stops after mapping and X12 validation. It returns generated X12, validation details, mapping provenance, the resolved partner, and the optional business key. It does not contact the trading partner, create an outbound transaction, or require the partner\'s AS2 endpoint to be configured. Use it to validate a production-shaped request before the first live send.
     * Transform and validate an outbound document without sending it
     */
    previewOutboundX12(requestParameters: PreviewOutboundX12OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OutboundPreviewResponse>;

    /**
     * Creates request options for replyToInboundAs2Message without sending the request
     * @param {string} originalMessageId Original inbound AS2 message id used to link replies or carbon copies to an inbound flow.
     * @param {OutboundMappedSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {OutboundMappedSourceBody['body']} body Source document to transform into the X12 reply. Its media type participates in outgoing-map selection; the body is not raw X12 unless you use the corresponding &#x60;/v1/as2/x12/reply&#x60; endpoint.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {number} [partnerId] Stable partner id returned by &#x60;GET /v1/partners&#x60;. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60; identifies an inbound transaction with an unambiguous persisted partner id. Transactions without a persisted id do not supply inferred partner metadata. An explicit id overrides inferred partner metadata.
     * @param {string} [x12Version] X12 version tied to the outgoing reply map. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60; identifies an inbound transaction whose X12 version can be inferred unambiguously. Send this explicitly when the reply must use a different X12 version than the original inbound document.
     * @param {string} [functionalGroupType] X12 functional group code tied to the outgoing reply map. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60;, the resolved partner and X12 version, and request &#x60;Content-Type&#x60; match exactly one outgoing reply map. Send this explicitly when multiple reply maps could match.
     * @param {number} [transactionGroupType] X12 transaction set identifier code tied to the outgoing reply map. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60;, the resolved partner and X12 version, and request &#x60;Content-Type&#x60; match exactly one outgoing reply map. Send this explicitly when multiple reply maps could match.
     * @param {string} [originalTransactionKey] Exact transaction key, normally &#x60;GS06#ST02&#x60;, inside &#x60;originalMessageId&#x60;. Supply it when one inbound AS2 message contains multiple transaction sets. ModernEDI validates the composite reference against the selected production or test environment and authenticated workspace before transforming or sending. A missing or unauthorized exact inbound transaction returns 404 without invoking the map or tenant runtime. When omitted, ModernEDI resolves and persists the key only if &#x60;originalMessageId&#x60; identifies exactly one inbound transaction; an ambiguous multi-transaction message returns 400.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    replyToInboundAs2MessageRequestOpts(requestParameters: ReplyToInboundAs2MessageRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Sends a follow-up document such as an ASN or invoice in response to a previously received inbound message. Send the source XML, JSON, or text input as the HTTP request body. ModernEDI looks up the original message by `originalMessageId`, and uses unambiguous metadata from that inbound transaction to recover an omitted partner selector and `x12Version`. When the inbound AS2 message contains more than one transaction set, send `originalTransactionKey` to bind the reply to the exact `GS06#ST02` transaction. ModernEDI validates that composite reference before transforming or sending; an unknown or non-inbound reference returns `404`. When it is omitted, ModernEDI resolves and persists the key only if the message contains exactly one inbound transaction; an ambiguous multi-transaction message returns `400`. This lookup uses production transaction history by default; send `test=true` to infer from and link to isolated test history. ModernEDI uses the persisted `partnerId`, so the reply still selects the same partner after its configured name changes. Transactions without a persisted partner id do not supply inferred partner metadata. An explicit `partnerId` always overrides inferred partner metadata. After the partner id, X12 version, and request `Content-Type` are known, ModernEDI can also fill omitted `functionalGroupType` and `transactionGroupType` when those selectors match exactly one outgoing reply map. ModernEDI then selects the matching outgoing map by partner, X12 version, functional group, transaction set, and request `Content-Type`, generates and validates X12, then sends the reply through the configured AS2 connection. Send `x12Version` explicitly when a partner requires reply documents on a different X12 version than the one they send; explicit query parameters override inferred metadata. If multiple reply maps could match, send `functionalGroupType` and `transactionGroupType` explicitly. The original inbound document type is not reused as the reply type; these fields identify the generated reply document, such as `IN`/`810` for an invoice. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. If the outgoing map needs extra runtime parameters, send the JSON envelope shape with `input`, `contentType`, and `params`; XSLT maps receive those values as top-level stylesheet parameters, JSLT maps read them from `.params`, and mapper-editor params files are not used as live defaults. Use the envelope\'s optional `businessKey` field when the reply has a stable identifier, such as an invoice number, that should be stored on the outbound transaction record.
     * @summary Send a follow-up document tied to an inbound message
     * @param {string} originalMessageId Original inbound AS2 message id used to link replies or carbon copies to an inbound flow.
     * @param {OutboundMappedSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {OutboundMappedSourceBody['body']} body Source document to transform into the X12 reply. Its media type participates in outgoing-map selection; the body is not raw X12 unless you use the corresponding &#x60;/v1/as2/x12/reply&#x60; endpoint.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {number} [partnerId] Stable partner id returned by &#x60;GET /v1/partners&#x60;. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60; identifies an inbound transaction with an unambiguous persisted partner id. Transactions without a persisted id do not supply inferred partner metadata. An explicit id overrides inferred partner metadata.
     * @param {string} [x12Version] X12 version tied to the outgoing reply map. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60; identifies an inbound transaction whose X12 version can be inferred unambiguously. Send this explicitly when the reply must use a different X12 version than the original inbound document.
     * @param {string} [functionalGroupType] X12 functional group code tied to the outgoing reply map. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60;, the resolved partner and X12 version, and request &#x60;Content-Type&#x60; match exactly one outgoing reply map. Send this explicitly when multiple reply maps could match.
     * @param {number} [transactionGroupType] X12 transaction set identifier code tied to the outgoing reply map. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60;, the resolved partner and X12 version, and request &#x60;Content-Type&#x60; match exactly one outgoing reply map. Send this explicitly when multiple reply maps could match.
     * @param {string} [originalTransactionKey] Exact transaction key, normally &#x60;GS06#ST02&#x60;, inside &#x60;originalMessageId&#x60;. Supply it when one inbound AS2 message contains multiple transaction sets. ModernEDI validates the composite reference against the selected production or test environment and authenticated workspace before transforming or sending. A missing or unauthorized exact inbound transaction returns 404 without invoking the map or tenant runtime. When omitted, ModernEDI resolves and persists the key only if &#x60;originalMessageId&#x60; identifies exactly one inbound transaction; an ambiguous multi-transaction message returns 400.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    replyToInboundAs2MessageRaw(requestParameters: ReplyToInboundAs2MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>>;

    /**
     * **Required key scope:** `messages:write`. Sends a follow-up document such as an ASN or invoice in response to a previously received inbound message. Send the source XML, JSON, or text input as the HTTP request body. ModernEDI looks up the original message by `originalMessageId`, and uses unambiguous metadata from that inbound transaction to recover an omitted partner selector and `x12Version`. When the inbound AS2 message contains more than one transaction set, send `originalTransactionKey` to bind the reply to the exact `GS06#ST02` transaction. ModernEDI validates that composite reference before transforming or sending; an unknown or non-inbound reference returns `404`. When it is omitted, ModernEDI resolves and persists the key only if the message contains exactly one inbound transaction; an ambiguous multi-transaction message returns `400`. This lookup uses production transaction history by default; send `test=true` to infer from and link to isolated test history. ModernEDI uses the persisted `partnerId`, so the reply still selects the same partner after its configured name changes. Transactions without a persisted partner id do not supply inferred partner metadata. An explicit `partnerId` always overrides inferred partner metadata. After the partner id, X12 version, and request `Content-Type` are known, ModernEDI can also fill omitted `functionalGroupType` and `transactionGroupType` when those selectors match exactly one outgoing reply map. ModernEDI then selects the matching outgoing map by partner, X12 version, functional group, transaction set, and request `Content-Type`, generates and validates X12, then sends the reply through the configured AS2 connection. Send `x12Version` explicitly when a partner requires reply documents on a different X12 version than the one they send; explicit query parameters override inferred metadata. If multiple reply maps could match, send `functionalGroupType` and `transactionGroupType` explicitly. The original inbound document type is not reused as the reply type; these fields identify the generated reply document, such as `IN`/`810` for an invoice. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. If the outgoing map needs extra runtime parameters, send the JSON envelope shape with `input`, `contentType`, and `params`; XSLT maps receive those values as top-level stylesheet parameters, JSLT maps read them from `.params`, and mapper-editor params files are not used as live defaults. Use the envelope\'s optional `businessKey` field when the reply has a stable identifier, such as an invoice number, that should be stored on the outbound transaction record.
     * Send a follow-up document tied to an inbound message
     */
    replyToInboundAs2Message(requestParameters: ReplyToInboundAs2MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse>;

    /**
     * Creates request options for replyWithGeneratedX12 without sending the request
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {string} originalMessageId Original inbound AS2 message id used to link replies or carbon copies to an inbound flow.
     * @param {GeneratedX12SourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {GeneratedX12SourceBody['body']} body A complete X12 interchange that ModernEDI should validate and send without applying an outgoing map. Use the JSON form only when you also want to attach a business key to the transaction record.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {number} [partnerId] Stable partner id returned by &#x60;GET /v1/partners&#x60;. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60; identifies an inbound transaction with an unambiguous persisted partner id. Transactions without a persisted id do not supply inferred partner metadata. An explicit id overrides inferred partner metadata.
     * @param {string} [x12Version] X12 version tied to the outgoing reply map. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60; identifies an inbound transaction whose X12 version can be inferred unambiguously. Send this explicitly when the reply must use a different X12 version than the original inbound document.
     * @param {string} [originalTransactionKey] Exact transaction key, normally &#x60;GS06#ST02&#x60;, inside &#x60;originalMessageId&#x60;. Supply it when one inbound AS2 message contains multiple transaction sets. ModernEDI validates the composite reference against the selected production or test environment and authenticated workspace before transforming or sending. A missing or unauthorized exact inbound transaction returns 404 without invoking the map or tenant runtime. When omitted, ModernEDI resolves and persists the key only if &#x60;originalMessageId&#x60; identifies exactly one inbound transaction; an ambiguous multi-transaction message returns 400.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    replyWithGeneratedX12RequestOpts(requestParameters: ReplyWithGeneratedX12Request): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Sends X12 that your system generated as a reply tied to an inbound AS2 message. ModernEDI does not apply an outgoing map. When the partner or X12 version is omitted, `originalMessageId` can recover it from the selected transaction history. Use `originalTransactionKey` to bind a reply to one exact transaction in a multi-ST message; the composite reference is validated before delivery. Production history is the default; send `test=true` to infer from and link to isolated test history. The functional group and transaction-set identifiers describe the reply document and remain required because they are not copied from the original inbound document.
     * @summary Reply to an inbound message with already-generated X12
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {string} originalMessageId Original inbound AS2 message id used to link replies or carbon copies to an inbound flow.
     * @param {GeneratedX12SourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {GeneratedX12SourceBody['body']} body A complete X12 interchange that ModernEDI should validate and send without applying an outgoing map. Use the JSON form only when you also want to attach a business key to the transaction record.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {number} [partnerId] Stable partner id returned by &#x60;GET /v1/partners&#x60;. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60; identifies an inbound transaction with an unambiguous persisted partner id. Transactions without a persisted id do not supply inferred partner metadata. An explicit id overrides inferred partner metadata.
     * @param {string} [x12Version] X12 version tied to the outgoing reply map. Optional for &#x60;/reply&#x60; when &#x60;originalMessageId&#x60; identifies an inbound transaction whose X12 version can be inferred unambiguously. Send this explicitly when the reply must use a different X12 version than the original inbound document.
     * @param {string} [originalTransactionKey] Exact transaction key, normally &#x60;GS06#ST02&#x60;, inside &#x60;originalMessageId&#x60;. Supply it when one inbound AS2 message contains multiple transaction sets. ModernEDI validates the composite reference against the selected production or test environment and authenticated workspace before transforming or sending. A missing or unauthorized exact inbound transaction returns 404 without invoking the map or tenant runtime. When omitted, ModernEDI resolves and persists the key only if &#x60;originalMessageId&#x60; identifies exactly one inbound transaction; an ambiguous multi-transaction message returns 400.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    replyWithGeneratedX12Raw(requestParameters: ReplyWithGeneratedX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>>;

    /**
     * **Required key scope:** `messages:write`. Sends X12 that your system generated as a reply tied to an inbound AS2 message. ModernEDI does not apply an outgoing map. When the partner or X12 version is omitted, `originalMessageId` can recover it from the selected transaction history. Use `originalTransactionKey` to bind a reply to one exact transaction in a multi-ST message; the composite reference is validated before delivery. Production history is the default; send `test=true` to infer from and link to isolated test history. The functional group and transaction-set identifiers describe the reply document and remain required because they are not copied from the original inbound document.
     * Reply to an inbound message with already-generated X12
     */
    replyWithGeneratedX12(requestParameters: ReplyWithGeneratedX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse>;

    /**
     * Creates request options for sendAs2CarbonCopy without sending the request
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {string} originalMessageId Original inbound AS2 message id used to link replies or carbon copies to an inbound flow.
     * @param {number} copyToPartnerId Stable partner id returned by &#x60;GET /v1/partners&#x60; for the partner that receives the carbon-copy AS2 envelope. This does not select the outgoing map; &#x60;partnerId&#x60; selects the original/source map.
     * @param {OutboundMappedSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {OutboundMappedSourceBody['body']} body Source document to transform into the carbon-copy X12 payload. Its media type participates in selecting the source partner\&#39;s outgoing map.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {string} [originalTransactionKey] Exact transaction key, normally &#x60;GS06#ST02&#x60;, inside &#x60;originalMessageId&#x60;. Supply it when one inbound AS2 message contains multiple transaction sets. ModernEDI validates the composite reference against the selected production or test environment and authenticated workspace before transforming or sending. A missing or unauthorized exact inbound transaction returns 404 without invoking the map or tenant runtime. When omitted, ModernEDI resolves and persists the key only if &#x60;originalMessageId&#x60; identifies exactly one inbound transaction; an ambiguous multi-transaction message returns 400.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    sendAs2CarbonCopyRequestOpts(requestParameters: SendAs2CarbonCopyRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Sends a generated X12 document to a second partner while preserving context from a previously received inbound message. Send the source XML, JSON, or text input as the HTTP request body. The `partnerId` query parameter identifies the source/original partner whose outgoing map should generate the X12, and `copyToPartnerId` identifies the destination partner for the copied AS2 envelope. ModernEDI selects the matching outgoing map for that original/source partner, generates and validates X12, then forwards the carbon copy through the configured AS2 connection. Example: to generate an 856 ASN for Retailer One and copy it to Broker One, send `partnerId=1` and `copyToPartnerId=2`; ModernEDI uses partner 1\'s outgoing 856 map. `copyToPartnerId` does not select the outgoing map. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. If the outgoing map needs extra runtime parameters, send the JSON envelope shape with `input`, `contentType`, and `params`; the map is still selected by `partnerId`, not by `copyToPartnerId`. XSLT maps receive params as top-level stylesheet parameters, JSLT maps read them from `.params`, and mapper-editor params files are test fixtures only and are not read by live carbon-copy calls. The envelope\'s optional `businessKey` is recorded on the copied outbound transaction, but it does not affect map selection. Send `originalTransactionKey` when the source message contains multiple transaction sets and this copy belongs to one exact transaction.
     * @summary Send a carbon copy of an inbound message flow to another partner
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {string} originalMessageId Original inbound AS2 message id used to link replies or carbon copies to an inbound flow.
     * @param {number} copyToPartnerId Stable partner id returned by &#x60;GET /v1/partners&#x60; for the partner that receives the carbon-copy AS2 envelope. This does not select the outgoing map; &#x60;partnerId&#x60; selects the original/source map.
     * @param {OutboundMappedSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {OutboundMappedSourceBody['body']} body Source document to transform into the carbon-copy X12 payload. Its media type participates in selecting the source partner\&#39;s outgoing map.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {string} [originalTransactionKey] Exact transaction key, normally &#x60;GS06#ST02&#x60;, inside &#x60;originalMessageId&#x60;. Supply it when one inbound AS2 message contains multiple transaction sets. ModernEDI validates the composite reference against the selected production or test environment and authenticated workspace before transforming or sending. A missing or unauthorized exact inbound transaction returns 404 without invoking the map or tenant runtime. When omitted, ModernEDI resolves and persists the key only if &#x60;originalMessageId&#x60; identifies exactly one inbound transaction; an ambiguous multi-transaction message returns 400.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    sendAs2CarbonCopyRaw(requestParameters: SendAs2CarbonCopyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>>;

    /**
     * **Required key scope:** `messages:write`. Sends a generated X12 document to a second partner while preserving context from a previously received inbound message. Send the source XML, JSON, or text input as the HTTP request body. The `partnerId` query parameter identifies the source/original partner whose outgoing map should generate the X12, and `copyToPartnerId` identifies the destination partner for the copied AS2 envelope. ModernEDI selects the matching outgoing map for that original/source partner, generates and validates X12, then forwards the carbon copy through the configured AS2 connection. Example: to generate an 856 ASN for Retailer One and copy it to Broker One, send `partnerId=1` and `copyToPartnerId=2`; ModernEDI uses partner 1\'s outgoing 856 map. `copyToPartnerId` does not select the outgoing map. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. If the outgoing map needs extra runtime parameters, send the JSON envelope shape with `input`, `contentType`, and `params`; the map is still selected by `partnerId`, not by `copyToPartnerId`. XSLT maps receive params as top-level stylesheet parameters, JSLT maps read them from `.params`, and mapper-editor params files are test fixtures only and are not read by live carbon-copy calls. The envelope\'s optional `businessKey` is recorded on the copied outbound transaction, but it does not affect map selection. Send `originalTransactionKey` when the source message contains multiple transaction sets and this copy belongs to one exact transaction.
     * Send a carbon copy of an inbound message flow to another partner
     */
    sendAs2CarbonCopy(requestParameters: SendAs2CarbonCopyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse>;

    /**
     * Creates request options for sendAs2Message without sending the request
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {OutboundMappedSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {OutboundMappedSourceBody['body']} body Source document to transform into X12. Its media type participates in outgoing-map selection; send XML, JSON, or text that matches the selected map\&#39;s configured input content type.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    sendAs2MessageRequestOpts(requestParameters: SendAs2MessageRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Sends a standalone outbound document to the configured trading partner. Send the source XML, JSON, or text input as the HTTP request body. ModernEDI looks up the matching outgoing map by partner, X12 version, functional group, transaction set, and request `Content-Type`, applies that map to generate X12, syntax-checks the generated X12, then sends it through the configured AS2 connection. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. Send `partnerId` to select the partner; use `GET /v1/partners` when your integration client needs to discover stable partner ids. If the outgoing map needs extra runtime parameters such as a bill-of-lading number, pallet list, or generated control number, send the JSON envelope shape with `input`, `contentType`, and `params`. The envelope can also include `businessKey` when your system knows a stable purchase order, shipment, BOL, or other business identifier that should appear on the outbound transaction record. XSLT maps receive those params as top-level stylesheet parameters; JSLT maps receive them under `.params`. Mapper-editor params files are test fixtures only; live API calls must provide required params in this request envelope.
     * @summary Send a standalone outbound document
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {OutboundMappedSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {OutboundMappedSourceBody['body']} body Source document to transform into X12. Its media type participates in outgoing-map selection; send XML, JSON, or text that matches the selected map\&#39;s configured input content type.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    sendAs2MessageRaw(requestParameters: SendAs2MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>>;

    /**
     * **Required key scope:** `messages:write`. Sends a standalone outbound document to the configured trading partner. Send the source XML, JSON, or text input as the HTTP request body. ModernEDI looks up the matching outgoing map by partner, X12 version, functional group, transaction set, and request `Content-Type`, applies that map to generate X12, syntax-checks the generated X12, then sends it through the configured AS2 connection. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. Send `partnerId` to select the partner; use `GET /v1/partners` when your integration client needs to discover stable partner ids. If the outgoing map needs extra runtime parameters such as a bill-of-lading number, pallet list, or generated control number, send the JSON envelope shape with `input`, `contentType`, and `params`. The envelope can also include `businessKey` when your system knows a stable purchase order, shipment, BOL, or other business identifier that should appear on the outbound transaction record. XSLT maps receive those params as top-level stylesheet parameters; JSLT maps receive them under `.params`. Mapper-editor params files are test fixtures only; live API calls must provide required params in this request envelope.
     * Send a standalone outbound document
     */
    sendAs2Message(requestParameters: SendAs2MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse>;

    /**
     * Creates request options for sendGeneratedX12Message without sending the request
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {GeneratedX12SourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {GeneratedX12SourceBody['body']} body A complete X12 interchange that ModernEDI should validate and send without applying an outgoing map. Use the JSON form only when you also want to attach a business key to the transaction record.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    sendGeneratedX12MessageRequestOpts(requestParameters: SendGeneratedX12MessageRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Sends X12 that your system generated without applying a ModernEDI outgoing map. ModernEDI parses and validates the supplied X12, builds the AS2 message, and delivers it through the selected partner connection. Supply the X12 directly with `Content-Type: application/edi-x12` (or `text/plain`), or use the JSON envelope when you also want to record a business key. The partner selector and X12 metadata remain explicit so ModernEDI can choose and audit the correct destination. Use `/v1/as2/send` instead when ModernEDI should map your business document into X12 first.
     * @summary Send an already-generated X12 document
     * @param {number} partnerId Stable partner id returned by &#x60;GET /v1/partners&#x60;. For &#x60;/carbonCopy&#x60;, this id selects the original/source partner, not the &#x60;copyToPartnerId&#x60; recipient.
     * @param {string} x12Version X12 version tied to the outgoing map.
     * @param {string} functionalGroupType X12 functional group code tied to the outgoing map.
     * @param {number} transactionGroupType X12 transaction set identifier code tied to the outgoing map.
     * @param {GeneratedX12SourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {GeneratedX12SourceBody['body']} body A complete X12 interchange that ModernEDI should validate and send without applying an outgoing map. Use the JSON form only when you also want to attach a business key to the transaction record.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {boolean} [test] When &#x60;true&#x60;, use the test identifiers and test endpoint configured for the partner connection. On &#x60;/v1/as2/reply&#x60; and &#x60;/v1/as2/x12/reply&#x60;, this also selects test transaction history when &#x60;originalMessageId&#x60; is used to infer partner metadata and link the reply.
     * @param {string} [idempotencyKey] Optional caller-generated key for safely retrying outbound requests. Reusing the same key with the same request replays a stored terminal result; reusing it with a different request returns an idempotency conflict. Retryable downstream &#x60;408&#x60;, &#x60;425&#x60;, &#x60;429&#x60;, and &#x60;5xx&#x60; results are not terminal and a retry can execute the AS2 send again. A replayed stored result includes &#x60;Idempotency-Replayed: true&#x60;. If the tenant AS2 runtime asks the client to wait, ModernEDI preserves its &#x60;Retry-After&#x60; response header. For the mapped endpoints, mapping selection, transformation, and generated-X12 validation happen before the tenant AS2 runtime reserves this key. If one of those steps fails and you correct the partner or map configuration, retry the identical operation and request with the same key even when that configuration error reported &#x60;retryable: false&#x60;. Do not change the operation, selectors, source input, content type, params, or business key while reusing it. When delivery may have succeeded but the terminal response was lost, reconcile transaction history and business keys before retrying because idempotency cannot rule out a duplicate send.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboundAS2ApiInterface
     */
    sendGeneratedX12MessageRaw(requestParameters: SendGeneratedX12MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>>;

    /**
     * **Required key scope:** `messages:write`. Sends X12 that your system generated without applying a ModernEDI outgoing map. ModernEDI parses and validates the supplied X12, builds the AS2 message, and delivers it through the selected partner connection. Supply the X12 directly with `Content-Type: application/edi-x12` (or `text/plain`), or use the JSON envelope when you also want to record a business key. The partner selector and X12 metadata remain explicit so ModernEDI can choose and audit the correct destination. Use `/v1/as2/send` instead when ModernEDI should map your business document into X12 first.
     * Send an already-generated X12 document
     */
    sendGeneratedX12Message(requestParameters: SendGeneratedX12MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse>;

}

/**
 *
 */
export class OutboundAS2Api extends runtime.BaseAPI implements OutboundAS2ApiInterface {

    /**
     * Creates request options for carbonCopyGeneratedX12 without sending the request
     */
    async carbonCopyGeneratedX12RequestOpts(requestParameters: CarbonCopyGeneratedX12Request): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling carbonCopyGeneratedX12().'
            );
        }

        if (requestParameters['x12Version'] == null) {
            throw new runtime.RequiredError(
                'x12Version',
                'Required parameter "x12Version" was null or undefined when calling carbonCopyGeneratedX12().'
            );
        }

        if (requestParameters['functionalGroupType'] == null) {
            throw new runtime.RequiredError(
                'functionalGroupType',
                'Required parameter "functionalGroupType" was null or undefined when calling carbonCopyGeneratedX12().'
            );
        }

        if (requestParameters['transactionGroupType'] == null) {
            throw new runtime.RequiredError(
                'transactionGroupType',
                'Required parameter "transactionGroupType" was null or undefined when calling carbonCopyGeneratedX12().'
            );
        }

        if (requestParameters['originalMessageId'] == null) {
            throw new runtime.RequiredError(
                'originalMessageId',
                'Required parameter "originalMessageId" was null or undefined when calling carbonCopyGeneratedX12().'
            );
        }

        if (requestParameters['copyToPartnerId'] == null) {
            throw new runtime.RequiredError(
                'copyToPartnerId',
                'Required parameter "copyToPartnerId" was null or undefined when calling carbonCopyGeneratedX12().'
            );
        }

        if (requestParameters['body'] === undefined) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling carbonCopyGeneratedX12().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['test'] != null) {
            queryParameters['test'] = requestParameters['test'];
        }

        if (requestParameters['partnerId'] != null) {
            queryParameters['partnerId'] = requestParameters['partnerId'];
        }

        if (requestParameters['x12Version'] != null) {
            queryParameters['x12Version'] = requestParameters['x12Version'];
        }

        if (requestParameters['functionalGroupType'] != null) {
            queryParameters['functionalGroupType'] = requestParameters['functionalGroupType'];
        }

        if (requestParameters['transactionGroupType'] != null) {
            queryParameters['transactionGroupType'] = requestParameters['transactionGroupType'];
        }

        if (requestParameters['originalMessageId'] != null) {
            queryParameters['originalMessageId'] = requestParameters['originalMessageId'];
        }

        if (requestParameters['originalTransactionKey'] != null) {
            queryParameters['originalTransactionKey'] = requestParameters['originalTransactionKey'];
        }

        if (requestParameters['copyToPartnerId'] != null) {
            queryParameters['copyToPartnerId'] = requestParameters['copyToPartnerId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = requestParameters['contentType'];

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


        let urlPath = `/v1/as2/x12/carbonCopy`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * **Required key scope:** `messages:write`. Sends supplied X12 to a second partner while preserving the original transaction context. ModernEDI validates the X12 but does not apply an outgoing map. Select the original partner with `partnerId` and the recipient with `copyToPartnerId`. Use `originalTransactionKey` when the original AS2 message contains more than one transaction set.
     * Send already-generated X12 to a carbon-copy partner
     */
    async carbonCopyGeneratedX12Raw(requestParameters: CarbonCopyGeneratedX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>> {
        const requestOptions = await this.carbonCopyGeneratedX12RequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendSuccessResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Sends supplied X12 to a second partner while preserving the original transaction context. ModernEDI validates the X12 but does not apply an outgoing map. Select the original partner with `partnerId` and the recipient with `copyToPartnerId`. Use `originalTransactionKey` when the original AS2 message contains more than one transaction set.
     * Send already-generated X12 to a carbon-copy partner
     */
    async carbonCopyGeneratedX12(requestParameters: CarbonCopyGeneratedX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse> {
        const response = await this.carbonCopyGeneratedX12Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for previewOutboundX12 without sending the request
     */
    async previewOutboundX12RequestOpts(requestParameters: PreviewOutboundX12OperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling previewOutboundX12().'
            );
        }

        if (requestParameters['x12Version'] == null) {
            throw new runtime.RequiredError(
                'x12Version',
                'Required parameter "x12Version" was null or undefined when calling previewOutboundX12().'
            );
        }

        if (requestParameters['functionalGroupType'] == null) {
            throw new runtime.RequiredError(
                'functionalGroupType',
                'Required parameter "functionalGroupType" was null or undefined when calling previewOutboundX12().'
            );
        }

        if (requestParameters['transactionGroupType'] == null) {
            throw new runtime.RequiredError(
                'transactionGroupType',
                'Required parameter "transactionGroupType" was null or undefined when calling previewOutboundX12().'
            );
        }

        if (requestParameters['body'] === undefined) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling previewOutboundX12().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['partnerId'] != null) {
            queryParameters['partnerId'] = requestParameters['partnerId'];
        }

        if (requestParameters['x12Version'] != null) {
            queryParameters['x12Version'] = requestParameters['x12Version'];
        }

        if (requestParameters['functionalGroupType'] != null) {
            queryParameters['functionalGroupType'] = requestParameters['functionalGroupType'];
        }

        if (requestParameters['transactionGroupType'] != null) {
            queryParameters['transactionGroupType'] = requestParameters['transactionGroupType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = requestParameters['contentType'];

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


        let urlPath = `/v1/as2/preview`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * **Required key scope:** `messages:write`. Uses the same partner, X12 metadata, content type, source body, params, and business-key contract as `/v1/as2/send`, but stops after mapping and X12 validation. It returns generated X12, validation details, mapping provenance, the resolved partner, and the optional business key. It does not contact the trading partner, create an outbound transaction, or require the partner\'s AS2 endpoint to be configured. Use it to validate a production-shaped request before the first live send.
     * Transform and validate an outbound document without sending it
     */
    async previewOutboundX12Raw(requestParameters: PreviewOutboundX12OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OutboundPreviewResponse>> {
        const requestOptions = await this.previewOutboundX12RequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OutboundPreviewResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Uses the same partner, X12 metadata, content type, source body, params, and business-key contract as `/v1/as2/send`, but stops after mapping and X12 validation. It returns generated X12, validation details, mapping provenance, the resolved partner, and the optional business key. It does not contact the trading partner, create an outbound transaction, or require the partner\'s AS2 endpoint to be configured. Use it to validate a production-shaped request before the first live send.
     * Transform and validate an outbound document without sending it
     */
    async previewOutboundX12(requestParameters: PreviewOutboundX12OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OutboundPreviewResponse> {
        const response = await this.previewOutboundX12Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for replyToInboundAs2Message without sending the request
     */
    async replyToInboundAs2MessageRequestOpts(requestParameters: ReplyToInboundAs2MessageRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['originalMessageId'] == null) {
            throw new runtime.RequiredError(
                'originalMessageId',
                'Required parameter "originalMessageId" was null or undefined when calling replyToInboundAs2Message().'
            );
        }

        if (requestParameters['body'] === undefined) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling replyToInboundAs2Message().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['test'] != null) {
            queryParameters['test'] = requestParameters['test'];
        }

        if (requestParameters['partnerId'] != null) {
            queryParameters['partnerId'] = requestParameters['partnerId'];
        }

        if (requestParameters['x12Version'] != null) {
            queryParameters['x12Version'] = requestParameters['x12Version'];
        }

        if (requestParameters['functionalGroupType'] != null) {
            queryParameters['functionalGroupType'] = requestParameters['functionalGroupType'];
        }

        if (requestParameters['transactionGroupType'] != null) {
            queryParameters['transactionGroupType'] = requestParameters['transactionGroupType'];
        }

        if (requestParameters['originalMessageId'] != null) {
            queryParameters['originalMessageId'] = requestParameters['originalMessageId'];
        }

        if (requestParameters['originalTransactionKey'] != null) {
            queryParameters['originalTransactionKey'] = requestParameters['originalTransactionKey'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = requestParameters['contentType'];

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


        let urlPath = `/v1/as2/reply`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * **Required key scope:** `messages:write`. Sends a follow-up document such as an ASN or invoice in response to a previously received inbound message. Send the source XML, JSON, or text input as the HTTP request body. ModernEDI looks up the original message by `originalMessageId`, and uses unambiguous metadata from that inbound transaction to recover an omitted partner selector and `x12Version`. When the inbound AS2 message contains more than one transaction set, send `originalTransactionKey` to bind the reply to the exact `GS06#ST02` transaction. ModernEDI validates that composite reference before transforming or sending; an unknown or non-inbound reference returns `404`. When it is omitted, ModernEDI resolves and persists the key only if the message contains exactly one inbound transaction; an ambiguous multi-transaction message returns `400`. This lookup uses production transaction history by default; send `test=true` to infer from and link to isolated test history. ModernEDI uses the persisted `partnerId`, so the reply still selects the same partner after its configured name changes. Transactions without a persisted partner id do not supply inferred partner metadata. An explicit `partnerId` always overrides inferred partner metadata. After the partner id, X12 version, and request `Content-Type` are known, ModernEDI can also fill omitted `functionalGroupType` and `transactionGroupType` when those selectors match exactly one outgoing reply map. ModernEDI then selects the matching outgoing map by partner, X12 version, functional group, transaction set, and request `Content-Type`, generates and validates X12, then sends the reply through the configured AS2 connection. Send `x12Version` explicitly when a partner requires reply documents on a different X12 version than the one they send; explicit query parameters override inferred metadata. If multiple reply maps could match, send `functionalGroupType` and `transactionGroupType` explicitly. The original inbound document type is not reused as the reply type; these fields identify the generated reply document, such as `IN`/`810` for an invoice. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. If the outgoing map needs extra runtime parameters, send the JSON envelope shape with `input`, `contentType`, and `params`; XSLT maps receive those values as top-level stylesheet parameters, JSLT maps read them from `.params`, and mapper-editor params files are not used as live defaults. Use the envelope\'s optional `businessKey` field when the reply has a stable identifier, such as an invoice number, that should be stored on the outbound transaction record.
     * Send a follow-up document tied to an inbound message
     */
    async replyToInboundAs2MessageRaw(requestParameters: ReplyToInboundAs2MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>> {
        const requestOptions = await this.replyToInboundAs2MessageRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendSuccessResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Sends a follow-up document such as an ASN or invoice in response to a previously received inbound message. Send the source XML, JSON, or text input as the HTTP request body. ModernEDI looks up the original message by `originalMessageId`, and uses unambiguous metadata from that inbound transaction to recover an omitted partner selector and `x12Version`. When the inbound AS2 message contains more than one transaction set, send `originalTransactionKey` to bind the reply to the exact `GS06#ST02` transaction. ModernEDI validates that composite reference before transforming or sending; an unknown or non-inbound reference returns `404`. When it is omitted, ModernEDI resolves and persists the key only if the message contains exactly one inbound transaction; an ambiguous multi-transaction message returns `400`. This lookup uses production transaction history by default; send `test=true` to infer from and link to isolated test history. ModernEDI uses the persisted `partnerId`, so the reply still selects the same partner after its configured name changes. Transactions without a persisted partner id do not supply inferred partner metadata. An explicit `partnerId` always overrides inferred partner metadata. After the partner id, X12 version, and request `Content-Type` are known, ModernEDI can also fill omitted `functionalGroupType` and `transactionGroupType` when those selectors match exactly one outgoing reply map. ModernEDI then selects the matching outgoing map by partner, X12 version, functional group, transaction set, and request `Content-Type`, generates and validates X12, then sends the reply through the configured AS2 connection. Send `x12Version` explicitly when a partner requires reply documents on a different X12 version than the one they send; explicit query parameters override inferred metadata. If multiple reply maps could match, send `functionalGroupType` and `transactionGroupType` explicitly. The original inbound document type is not reused as the reply type; these fields identify the generated reply document, such as `IN`/`810` for an invoice. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. If the outgoing map needs extra runtime parameters, send the JSON envelope shape with `input`, `contentType`, and `params`; XSLT maps receive those values as top-level stylesheet parameters, JSLT maps read them from `.params`, and mapper-editor params files are not used as live defaults. Use the envelope\'s optional `businessKey` field when the reply has a stable identifier, such as an invoice number, that should be stored on the outbound transaction record.
     * Send a follow-up document tied to an inbound message
     */
    async replyToInboundAs2Message(requestParameters: ReplyToInboundAs2MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse> {
        const response = await this.replyToInboundAs2MessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for replyWithGeneratedX12 without sending the request
     */
    async replyWithGeneratedX12RequestOpts(requestParameters: ReplyWithGeneratedX12Request): Promise<runtime.RequestOpts> {
        if (requestParameters['functionalGroupType'] == null) {
            throw new runtime.RequiredError(
                'functionalGroupType',
                'Required parameter "functionalGroupType" was null or undefined when calling replyWithGeneratedX12().'
            );
        }

        if (requestParameters['transactionGroupType'] == null) {
            throw new runtime.RequiredError(
                'transactionGroupType',
                'Required parameter "transactionGroupType" was null or undefined when calling replyWithGeneratedX12().'
            );
        }

        if (requestParameters['originalMessageId'] == null) {
            throw new runtime.RequiredError(
                'originalMessageId',
                'Required parameter "originalMessageId" was null or undefined when calling replyWithGeneratedX12().'
            );
        }

        if (requestParameters['body'] === undefined) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling replyWithGeneratedX12().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['test'] != null) {
            queryParameters['test'] = requestParameters['test'];
        }

        if (requestParameters['partnerId'] != null) {
            queryParameters['partnerId'] = requestParameters['partnerId'];
        }

        if (requestParameters['x12Version'] != null) {
            queryParameters['x12Version'] = requestParameters['x12Version'];
        }

        if (requestParameters['functionalGroupType'] != null) {
            queryParameters['functionalGroupType'] = requestParameters['functionalGroupType'];
        }

        if (requestParameters['transactionGroupType'] != null) {
            queryParameters['transactionGroupType'] = requestParameters['transactionGroupType'];
        }

        if (requestParameters['originalMessageId'] != null) {
            queryParameters['originalMessageId'] = requestParameters['originalMessageId'];
        }

        if (requestParameters['originalTransactionKey'] != null) {
            queryParameters['originalTransactionKey'] = requestParameters['originalTransactionKey'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = requestParameters['contentType'];

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


        let urlPath = `/v1/as2/x12/reply`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * **Required key scope:** `messages:write`. Sends X12 that your system generated as a reply tied to an inbound AS2 message. ModernEDI does not apply an outgoing map. When the partner or X12 version is omitted, `originalMessageId` can recover it from the selected transaction history. Use `originalTransactionKey` to bind a reply to one exact transaction in a multi-ST message; the composite reference is validated before delivery. Production history is the default; send `test=true` to infer from and link to isolated test history. The functional group and transaction-set identifiers describe the reply document and remain required because they are not copied from the original inbound document.
     * Reply to an inbound message with already-generated X12
     */
    async replyWithGeneratedX12Raw(requestParameters: ReplyWithGeneratedX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>> {
        const requestOptions = await this.replyWithGeneratedX12RequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendSuccessResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Sends X12 that your system generated as a reply tied to an inbound AS2 message. ModernEDI does not apply an outgoing map. When the partner or X12 version is omitted, `originalMessageId` can recover it from the selected transaction history. Use `originalTransactionKey` to bind a reply to one exact transaction in a multi-ST message; the composite reference is validated before delivery. Production history is the default; send `test=true` to infer from and link to isolated test history. The functional group and transaction-set identifiers describe the reply document and remain required because they are not copied from the original inbound document.
     * Reply to an inbound message with already-generated X12
     */
    async replyWithGeneratedX12(requestParameters: ReplyWithGeneratedX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse> {
        const response = await this.replyWithGeneratedX12Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for sendAs2CarbonCopy without sending the request
     */
    async sendAs2CarbonCopyRequestOpts(requestParameters: SendAs2CarbonCopyRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling sendAs2CarbonCopy().'
            );
        }

        if (requestParameters['x12Version'] == null) {
            throw new runtime.RequiredError(
                'x12Version',
                'Required parameter "x12Version" was null or undefined when calling sendAs2CarbonCopy().'
            );
        }

        if (requestParameters['functionalGroupType'] == null) {
            throw new runtime.RequiredError(
                'functionalGroupType',
                'Required parameter "functionalGroupType" was null or undefined when calling sendAs2CarbonCopy().'
            );
        }

        if (requestParameters['transactionGroupType'] == null) {
            throw new runtime.RequiredError(
                'transactionGroupType',
                'Required parameter "transactionGroupType" was null or undefined when calling sendAs2CarbonCopy().'
            );
        }

        if (requestParameters['originalMessageId'] == null) {
            throw new runtime.RequiredError(
                'originalMessageId',
                'Required parameter "originalMessageId" was null or undefined when calling sendAs2CarbonCopy().'
            );
        }

        if (requestParameters['copyToPartnerId'] == null) {
            throw new runtime.RequiredError(
                'copyToPartnerId',
                'Required parameter "copyToPartnerId" was null or undefined when calling sendAs2CarbonCopy().'
            );
        }

        if (requestParameters['body'] === undefined) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling sendAs2CarbonCopy().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['test'] != null) {
            queryParameters['test'] = requestParameters['test'];
        }

        if (requestParameters['partnerId'] != null) {
            queryParameters['partnerId'] = requestParameters['partnerId'];
        }

        if (requestParameters['x12Version'] != null) {
            queryParameters['x12Version'] = requestParameters['x12Version'];
        }

        if (requestParameters['functionalGroupType'] != null) {
            queryParameters['functionalGroupType'] = requestParameters['functionalGroupType'];
        }

        if (requestParameters['transactionGroupType'] != null) {
            queryParameters['transactionGroupType'] = requestParameters['transactionGroupType'];
        }

        if (requestParameters['originalMessageId'] != null) {
            queryParameters['originalMessageId'] = requestParameters['originalMessageId'];
        }

        if (requestParameters['originalTransactionKey'] != null) {
            queryParameters['originalTransactionKey'] = requestParameters['originalTransactionKey'];
        }

        if (requestParameters['copyToPartnerId'] != null) {
            queryParameters['copyToPartnerId'] = requestParameters['copyToPartnerId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = requestParameters['contentType'];

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


        let urlPath = `/v1/as2/carbonCopy`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * **Required key scope:** `messages:write`. Sends a generated X12 document to a second partner while preserving context from a previously received inbound message. Send the source XML, JSON, or text input as the HTTP request body. The `partnerId` query parameter identifies the source/original partner whose outgoing map should generate the X12, and `copyToPartnerId` identifies the destination partner for the copied AS2 envelope. ModernEDI selects the matching outgoing map for that original/source partner, generates and validates X12, then forwards the carbon copy through the configured AS2 connection. Example: to generate an 856 ASN for Retailer One and copy it to Broker One, send `partnerId=1` and `copyToPartnerId=2`; ModernEDI uses partner 1\'s outgoing 856 map. `copyToPartnerId` does not select the outgoing map. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. If the outgoing map needs extra runtime parameters, send the JSON envelope shape with `input`, `contentType`, and `params`; the map is still selected by `partnerId`, not by `copyToPartnerId`. XSLT maps receive params as top-level stylesheet parameters, JSLT maps read them from `.params`, and mapper-editor params files are test fixtures only and are not read by live carbon-copy calls. The envelope\'s optional `businessKey` is recorded on the copied outbound transaction, but it does not affect map selection. Send `originalTransactionKey` when the source message contains multiple transaction sets and this copy belongs to one exact transaction.
     * Send a carbon copy of an inbound message flow to another partner
     */
    async sendAs2CarbonCopyRaw(requestParameters: SendAs2CarbonCopyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>> {
        const requestOptions = await this.sendAs2CarbonCopyRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendSuccessResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Sends a generated X12 document to a second partner while preserving context from a previously received inbound message. Send the source XML, JSON, or text input as the HTTP request body. The `partnerId` query parameter identifies the source/original partner whose outgoing map should generate the X12, and `copyToPartnerId` identifies the destination partner for the copied AS2 envelope. ModernEDI selects the matching outgoing map for that original/source partner, generates and validates X12, then forwards the carbon copy through the configured AS2 connection. Example: to generate an 856 ASN for Retailer One and copy it to Broker One, send `partnerId=1` and `copyToPartnerId=2`; ModernEDI uses partner 1\'s outgoing 856 map. `copyToPartnerId` does not select the outgoing map. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. If the outgoing map needs extra runtime parameters, send the JSON envelope shape with `input`, `contentType`, and `params`; the map is still selected by `partnerId`, not by `copyToPartnerId`. XSLT maps receive params as top-level stylesheet parameters, JSLT maps read them from `.params`, and mapper-editor params files are test fixtures only and are not read by live carbon-copy calls. The envelope\'s optional `businessKey` is recorded on the copied outbound transaction, but it does not affect map selection. Send `originalTransactionKey` when the source message contains multiple transaction sets and this copy belongs to one exact transaction.
     * Send a carbon copy of an inbound message flow to another partner
     */
    async sendAs2CarbonCopy(requestParameters: SendAs2CarbonCopyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse> {
        const response = await this.sendAs2CarbonCopyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for sendAs2Message without sending the request
     */
    async sendAs2MessageRequestOpts(requestParameters: SendAs2MessageRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling sendAs2Message().'
            );
        }

        if (requestParameters['x12Version'] == null) {
            throw new runtime.RequiredError(
                'x12Version',
                'Required parameter "x12Version" was null or undefined when calling sendAs2Message().'
            );
        }

        if (requestParameters['functionalGroupType'] == null) {
            throw new runtime.RequiredError(
                'functionalGroupType',
                'Required parameter "functionalGroupType" was null or undefined when calling sendAs2Message().'
            );
        }

        if (requestParameters['transactionGroupType'] == null) {
            throw new runtime.RequiredError(
                'transactionGroupType',
                'Required parameter "transactionGroupType" was null or undefined when calling sendAs2Message().'
            );
        }

        if (requestParameters['body'] === undefined) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling sendAs2Message().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['test'] != null) {
            queryParameters['test'] = requestParameters['test'];
        }

        if (requestParameters['partnerId'] != null) {
            queryParameters['partnerId'] = requestParameters['partnerId'];
        }

        if (requestParameters['x12Version'] != null) {
            queryParameters['x12Version'] = requestParameters['x12Version'];
        }

        if (requestParameters['functionalGroupType'] != null) {
            queryParameters['functionalGroupType'] = requestParameters['functionalGroupType'];
        }

        if (requestParameters['transactionGroupType'] != null) {
            queryParameters['transactionGroupType'] = requestParameters['transactionGroupType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = requestParameters['contentType'];

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


        let urlPath = `/v1/as2/send`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * **Required key scope:** `messages:write`. Sends a standalone outbound document to the configured trading partner. Send the source XML, JSON, or text input as the HTTP request body. ModernEDI looks up the matching outgoing map by partner, X12 version, functional group, transaction set, and request `Content-Type`, applies that map to generate X12, syntax-checks the generated X12, then sends it through the configured AS2 connection. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. Send `partnerId` to select the partner; use `GET /v1/partners` when your integration client needs to discover stable partner ids. If the outgoing map needs extra runtime parameters such as a bill-of-lading number, pallet list, or generated control number, send the JSON envelope shape with `input`, `contentType`, and `params`. The envelope can also include `businessKey` when your system knows a stable purchase order, shipment, BOL, or other business identifier that should appear on the outbound transaction record. XSLT maps receive those params as top-level stylesheet parameters; JSLT maps receive them under `.params`. Mapper-editor params files are test fixtures only; live API calls must provide required params in this request envelope.
     * Send a standalone outbound document
     */
    async sendAs2MessageRaw(requestParameters: SendAs2MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>> {
        const requestOptions = await this.sendAs2MessageRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendSuccessResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Sends a standalone outbound document to the configured trading partner. Send the source XML, JSON, or text input as the HTTP request body. ModernEDI looks up the matching outgoing map by partner, X12 version, functional group, transaction set, and request `Content-Type`, applies that map to generate X12, syntax-checks the generated X12, then sends it through the configured AS2 connection. JSON source maps can use XSLT with Saxon `json-to-xml($json)` or JSLT. For JSLT, ModernEDI sets the current input `.` to a wrapper object, so the source document is read through `.input` paths. Send `partnerId` to select the partner; use `GET /v1/partners` when your integration client needs to discover stable partner ids. If the outgoing map needs extra runtime parameters such as a bill-of-lading number, pallet list, or generated control number, send the JSON envelope shape with `input`, `contentType`, and `params`. The envelope can also include `businessKey` when your system knows a stable purchase order, shipment, BOL, or other business identifier that should appear on the outbound transaction record. XSLT maps receive those params as top-level stylesheet parameters; JSLT maps receive them under `.params`. Mapper-editor params files are test fixtures only; live API calls must provide required params in this request envelope.
     * Send a standalone outbound document
     */
    async sendAs2Message(requestParameters: SendAs2MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse> {
        const response = await this.sendAs2MessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for sendGeneratedX12Message without sending the request
     */
    async sendGeneratedX12MessageRequestOpts(requestParameters: SendGeneratedX12MessageRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling sendGeneratedX12Message().'
            );
        }

        if (requestParameters['x12Version'] == null) {
            throw new runtime.RequiredError(
                'x12Version',
                'Required parameter "x12Version" was null or undefined when calling sendGeneratedX12Message().'
            );
        }

        if (requestParameters['functionalGroupType'] == null) {
            throw new runtime.RequiredError(
                'functionalGroupType',
                'Required parameter "functionalGroupType" was null or undefined when calling sendGeneratedX12Message().'
            );
        }

        if (requestParameters['transactionGroupType'] == null) {
            throw new runtime.RequiredError(
                'transactionGroupType',
                'Required parameter "transactionGroupType" was null or undefined when calling sendGeneratedX12Message().'
            );
        }

        if (requestParameters['body'] === undefined) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling sendGeneratedX12Message().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['test'] != null) {
            queryParameters['test'] = requestParameters['test'];
        }

        if (requestParameters['partnerId'] != null) {
            queryParameters['partnerId'] = requestParameters['partnerId'];
        }

        if (requestParameters['x12Version'] != null) {
            queryParameters['x12Version'] = requestParameters['x12Version'];
        }

        if (requestParameters['functionalGroupType'] != null) {
            queryParameters['functionalGroupType'] = requestParameters['functionalGroupType'];
        }

        if (requestParameters['transactionGroupType'] != null) {
            queryParameters['transactionGroupType'] = requestParameters['transactionGroupType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = requestParameters['contentType'];

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


        let urlPath = `/v1/as2/x12/send`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * **Required key scope:** `messages:write`. Sends X12 that your system generated without applying a ModernEDI outgoing map. ModernEDI parses and validates the supplied X12, builds the AS2 message, and delivers it through the selected partner connection. Supply the X12 directly with `Content-Type: application/edi-x12` (or `text/plain`), or use the JSON envelope when you also want to record a business key. The partner selector and X12 metadata remain explicit so ModernEDI can choose and audit the correct destination. Use `/v1/as2/send` instead when ModernEDI should map your business document into X12 first.
     * Send an already-generated X12 document
     */
    async sendGeneratedX12MessageRaw(requestParameters: SendGeneratedX12MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendSuccessResponse>> {
        const requestOptions = await this.sendGeneratedX12MessageRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendSuccessResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Sends X12 that your system generated without applying a ModernEDI outgoing map. ModernEDI parses and validates the supplied X12, builds the AS2 message, and delivers it through the selected partner connection. Supply the X12 directly with `Content-Type: application/edi-x12` (or `text/plain`), or use the JSON envelope when you also want to record a business key. The partner selector and X12 metadata remain explicit so ModernEDI can choose and audit the correct destination. Use `/v1/as2/send` instead when ModernEDI should map your business document into X12 first.
     * Send an already-generated X12 document
     */
    async sendGeneratedX12Message(requestParameters: SendGeneratedX12MessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendSuccessResponse> {
        const response = await this.sendGeneratedX12MessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
