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
    type MappedOutputAckRequest,
    MappedOutputAckRequestFromJSON,
    MappedOutputAckRequestToJSON,
} from '../models/MappedOutputAckRequest.js';
import {
    type MappedOutputAckResponse,
    MappedOutputAckResponseFromJSON,
    MappedOutputAckResponseToJSON,
} from '../models/MappedOutputAckResponse.js';
import {
    type MappedOutputBulkAckRequest,
    MappedOutputBulkAckRequestFromJSON,
    MappedOutputBulkAckRequestToJSON,
} from '../models/MappedOutputBulkAckRequest.js';
import {
    type MappedOutputBulkAckResponse,
    MappedOutputBulkAckResponseFromJSON,
    MappedOutputBulkAckResponseToJSON,
} from '../models/MappedOutputBulkAckResponse.js';
import {
    type MappedOutputQueueResponse,
    MappedOutputQueueResponseFromJSON,
    MappedOutputQueueResponseToJSON,
} from '../models/MappedOutputQueueResponse.js';
import {
    type MappedOutputWebhookStatusResponse,
    MappedOutputWebhookStatusResponseFromJSON,
    MappedOutputWebhookStatusResponseToJSON,
} from '../models/MappedOutputWebhookStatusResponse.js';
import {
    type MappedOutputWebhookTestResponse,
    MappedOutputWebhookTestResponseFromJSON,
    MappedOutputWebhookTestResponseToJSON,
} from '../models/MappedOutputWebhookTestResponse.js';
import {
    type MappedOutputWebhookUpdateRequest,
    MappedOutputWebhookUpdateRequestFromJSON,
    MappedOutputWebhookUpdateRequestToJSON,
} from '../models/MappedOutputWebhookUpdateRequest.js';
import {
    type MappedOutputWebhookUpdateResponse,
    MappedOutputWebhookUpdateResponseFromJSON,
    MappedOutputWebhookUpdateResponseToJSON,
} from '../models/MappedOutputWebhookUpdateResponse.js';

export interface AcknowledgeMappedOutputRequest {
    id: string;
    mappedOutputAckRequest: MappedOutputAckRequest;
    xRequestId?: string;
    environment?: AcknowledgeMappedOutputEnvironmentEnum;
}

export interface AcknowledgeMappedOutputsRequest {
    mappedOutputBulkAckRequest: MappedOutputBulkAckRequest;
    xRequestId?: string;
    environment?: AcknowledgeMappedOutputsEnvironmentEnum;
}

export interface GetMappedOutputWebhookStatusRequest {
    partnerId: number;
    xRequestId?: string;
}

export interface PollMappedOutputsRequest {
    xRequestId?: string;
    environment?: PollMappedOutputsEnvironmentEnum;
    startDate?: string;
    endDate?: string;
    cursor?: string;
    limit?: number;
    visibilityTimeoutSeconds?: number;
    direction?: PollMappedOutputsDirectionEnum;
    partnerName?: string;
    partnerId?: number;
    transactionSet?: string;
    businessKey?: string;
    messageId?: string;
    replyToMessageId?: string;
    transactionControlNumber?: string;
    functionalGroupControlNumber?: string;
}

export interface TestMappedOutputWebhookRequest {
    partnerId: number;
    xRequestId?: string;
}

export interface UpdateMappedOutputWebhookRequest {
    partnerId: number;
    ifMatch: string;
    mappedOutputWebhookUpdateRequest: MappedOutputWebhookUpdateRequest;
    xRequestId?: string;
}

/**
 * MappedOutputQueueApi - interface
 *
 * @export
 * @interface MappedOutputQueueApiInterface
 */
export interface MappedOutputQueueApiInterface {
    /**
     * Creates request options for acknowledgeMappedOutput without sending the request
     * @param {string} id Mapped output id returned by &#x60;GET /v1/mapped-outputs&#x60;.
     * @param {MappedOutputAckRequest} mappedOutputAckRequest A receipt handle from the latest poll response for this mapped-output id. The id, receipt handle, and selected environment must refer to the same leased output.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    acknowledgeMappedOutputRequestOpts(requestParameters: AcknowledgeMappedOutputRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Records that your integration acknowledged custody of a previously returned mapped output message. Call this after the mapped output has been durably stored or enqueued for reliable processing in your system. This acknowledgment does not prove later ERP or business processing. The receipt handle must match the latest poll response for this mapped output id. A retry with the same id and receipt handle is idempotent: it returns the original acknowledgment and `ackedAt` value instead of failing. If a call ends without a definitive response, retry that same acknowledgment before polling. Poll for a new receipt only when the old lease is rejected or the message becomes available again; an acknowledged item is no longer returned by polling.
     * @summary Mark mapped output as received
     * @param {string} id Mapped output id returned by &#x60;GET /v1/mapped-outputs&#x60;.
     * @param {MappedOutputAckRequest} mappedOutputAckRequest A receipt handle from the latest poll response for this mapped-output id. The id, receipt handle, and selected environment must refer to the same leased output.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    acknowledgeMappedOutputRaw(requestParameters: AcknowledgeMappedOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputAckResponse>>;

    /**
     * **Required key scope:** `messages:write`. Records that your integration acknowledged custody of a previously returned mapped output message. Call this after the mapped output has been durably stored or enqueued for reliable processing in your system. This acknowledgment does not prove later ERP or business processing. The receipt handle must match the latest poll response for this mapped output id. A retry with the same id and receipt handle is idempotent: it returns the original acknowledgment and `ackedAt` value instead of failing. If a call ends without a definitive response, retry that same acknowledgment before polling. Poll for a new receipt only when the old lease is rejected or the message becomes available again; an acknowledged item is no longer returned by polling.
     * Mark mapped output as received
     */
    acknowledgeMappedOutput(requestParameters: AcknowledgeMappedOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputAckResponse>;

    /**
     * Creates request options for acknowledgeMappedOutputs without sending the request
     * @param {MappedOutputBulkAckRequest} mappedOutputBulkAckRequest Mapped-output acknowledgment bodies may be at most 16 KiB (16,384 bytes).
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    acknowledgeMappedOutputsRequestOpts(requestParameters: AcknowledgeMappedOutputsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `messages:write`. Acknowledges between 1 and 100 mapped-output receipts in one database transaction. If any id or receipt handle is invalid, none of the items are acknowledged. Repeating an already successful request with the same id and receipt handles is idempotent and returns the original acknowledgment timestamps. Retry the same batch first when a call ends without a definitive response; already acknowledged items are not returned by polling. All items must belong to the environment selected by the `environment` query parameter.
     * @summary Atomically acknowledge multiple mapped outputs
     * @param {MappedOutputBulkAckRequest} mappedOutputBulkAckRequest Mapped-output acknowledgment bodies may be at most 16 KiB (16,384 bytes).
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    acknowledgeMappedOutputsRaw(requestParameters: AcknowledgeMappedOutputsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputBulkAckResponse>>;

    /**
     * **Required key scope:** `messages:write`. Acknowledges between 1 and 100 mapped-output receipts in one database transaction. If any id or receipt handle is invalid, none of the items are acknowledged. Repeating an already successful request with the same id and receipt handles is idempotent and returns the original acknowledgment timestamps. Retry the same batch first when a call ends without a definitive response; already acknowledged items are not returned by polling. All items must belong to the environment selected by the `environment` query parameter.
     * Atomically acknowledge multiple mapped outputs
     */
    acknowledgeMappedOutputs(requestParameters: AcknowledgeMappedOutputsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputBulkAckResponse>;

    /**
     * Creates request options for getMappedOutputWebhookStatus without sending the request
     * @param {number} partnerId Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    getMappedOutputWebhookStatusRequestOpts(requestParameters: GetMappedOutputWebhookStatusRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`. Returns the current mapped-output webhook configuration and recent delivery health for a partner. This read-only endpoint never returns the signing secret; it reports whether a secret is configured and only its last four characters so operators can identify the active credential. Save the response `ETag` header or `webhook.etag` before updating.
     * @summary Get mapped-output webhook status
     * @param {number} partnerId Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    getMappedOutputWebhookStatusRaw(requestParameters: GetMappedOutputWebhookStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputWebhookStatusResponse>>;

    /**
     * **Required key scope:** `configuration:read`. Returns the current mapped-output webhook configuration and recent delivery health for a partner. This read-only endpoint never returns the signing secret; it reports whether a secret is configured and only its last four characters so operators can identify the active credential. Save the response `ETag` header or `webhook.etag` before updating.
     * Get mapped-output webhook status
     */
    getMappedOutputWebhookStatus(requestParameters: GetMappedOutputWebhookStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputWebhookStatusResponse>;

    /**
     * Creates request options for pollMappedOutputs without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {string} [startDate] Optional inclusive transaction-window start. Accepts an ISO date or an RFC 3339 date-time with an explicit offset. Date-only values start at 00:00:00 UTC. Date-times are normalized to UTC; offset-less date-times are rejected.
     * @param {string} [endDate] Optional inclusive transaction-window end. Accepts the same formats as &#x60;startDate&#x60;; a date-only value includes the complete UTC day.
     * @param {string} [cursor] Opaque continuation cursor returned as &#x60;nextCursor&#x60;. When supplied, it retains the original transaction window; omit &#x60;startDate&#x60; and &#x60;endDate&#x60; or send the same normalized values.
     * @param {number} [limit] Maximum number of mapped output messages to return.
     * @param {number} [visibilityTimeoutSeconds] Seconds ModernEDI keeps returned messages hidden from later polls while your system processes them.
     * @param {'inbound' | 'outbound'} [direction] Transaction direction. Mapped outputs normally come from inbound transactions.
     * @param {string} [partnerName] Case-insensitive persisted partner name.
     * @param {number} [partnerId] Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} [transactionSet] X12 transaction-set identifier such as &#x60;850&#x60; or &#x60;856&#x60;.
     * @param {string} [businessKey] Exact mapped-output business-key value.
     * @param {string} [messageId] Exact AS2 Message-Id.
     * @param {string} [replyToMessageId] Exact original inbound Message-Id recorded on a reply.
     * @param {string} [transactionControlNumber] Exact ST02 transaction control number.
     * @param {string} [functionalGroupControlNumber] Exact GS06 functional-group control number.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    pollMappedOutputsRequestOpts(requestParameters: PollMappedOutputsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns server-managed mapped inbound documents for this tenant and temporarily marks them in progress. Transaction-record-only results and legacy direct-to-SQS or direct-to-DynamoDB outputs are not duplicated into this queue. If a returned message is not acknowledged before the visibility timeout expires, ModernEDI may return it again on a later poll. Push delivery uses the same queue state: a successful 2xx webhook response acknowledges the message, while a failed push leaves it available through this endpoint. Each request performs a bounded scan. When `hasMore` is true, send `nextCursor` as the next request\'s `cursor` so polling advances past unavailable or output-free transactions instead of rescanning them. This endpoint runs on the shared ModernEDI API host, not on the tenant AS2 hostname.
     * @summary Poll mapped inbound output
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {string} [startDate] Optional inclusive transaction-window start. Accepts an ISO date or an RFC 3339 date-time with an explicit offset. Date-only values start at 00:00:00 UTC. Date-times are normalized to UTC; offset-less date-times are rejected.
     * @param {string} [endDate] Optional inclusive transaction-window end. Accepts the same formats as &#x60;startDate&#x60;; a date-only value includes the complete UTC day.
     * @param {string} [cursor] Opaque continuation cursor returned as &#x60;nextCursor&#x60;. When supplied, it retains the original transaction window; omit &#x60;startDate&#x60; and &#x60;endDate&#x60; or send the same normalized values.
     * @param {number} [limit] Maximum number of mapped output messages to return.
     * @param {number} [visibilityTimeoutSeconds] Seconds ModernEDI keeps returned messages hidden from later polls while your system processes them.
     * @param {'inbound' | 'outbound'} [direction] Transaction direction. Mapped outputs normally come from inbound transactions.
     * @param {string} [partnerName] Case-insensitive persisted partner name.
     * @param {number} [partnerId] Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} [transactionSet] X12 transaction-set identifier such as &#x60;850&#x60; or &#x60;856&#x60;.
     * @param {string} [businessKey] Exact mapped-output business-key value.
     * @param {string} [messageId] Exact AS2 Message-Id.
     * @param {string} [replyToMessageId] Exact original inbound Message-Id recorded on a reply.
     * @param {string} [transactionControlNumber] Exact ST02 transaction control number.
     * @param {string} [functionalGroupControlNumber] Exact GS06 functional-group control number.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    pollMappedOutputsRaw(requestParameters: PollMappedOutputsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputQueueResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns server-managed mapped inbound documents for this tenant and temporarily marks them in progress. Transaction-record-only results and legacy direct-to-SQS or direct-to-DynamoDB outputs are not duplicated into this queue. If a returned message is not acknowledged before the visibility timeout expires, ModernEDI may return it again on a later poll. Push delivery uses the same queue state: a successful 2xx webhook response acknowledges the message, while a failed push leaves it available through this endpoint. Each request performs a bounded scan. When `hasMore` is true, send `nextCursor` as the next request\'s `cursor` so polling advances past unavailable or output-free transactions instead of rescanning them. This endpoint runs on the shared ModernEDI API host, not on the tenant AS2 hostname.
     * Poll mapped inbound output
     */
    pollMappedOutputs(requestParameters: PollMappedOutputsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputQueueResponse>;

    /**
     * Creates request options for testMappedOutputWebhook without sending the request
     * @param {number} partnerId Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    testMappedOutputWebhookRequestOpts(requestParameters: TestMappedOutputWebhookRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:write`.  Sends one signed `mapped_output.test` event to the partner\'s saved HTTPS webhook endpoint using the same DNS validation, pinned public-address transport, timeout, and HMAC signing path as normal mapped-output delivery. The test event is explicitly marked `test: true`, contains no mapped-output `message`, queue id, receipt handle, or business document, and never creates, leases, acknowledges, retries, or changes a real mapped-output queue item. It also does not replace the webhook\'s recorded production delivery health.  The webhook may be disabled while this connectivity test runs, but an endpoint and signing secret must already be saved. The API returns `200` after every completed attempt; inspect `delivered`, `statusCode`, and `error` for the destination outcome. `requestId` matches the `X-Request-Id` response header and is also included in the signed synthetic event for correlation.
     * @summary Send a synthetic mapped-output webhook test
     * @param {number} partnerId Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    testMappedOutputWebhookRaw(requestParameters: TestMappedOutputWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputWebhookTestResponse>>;

    /**
     * **Required key scope:** `configuration:write`.  Sends one signed `mapped_output.test` event to the partner\'s saved HTTPS webhook endpoint using the same DNS validation, pinned public-address transport, timeout, and HMAC signing path as normal mapped-output delivery. The test event is explicitly marked `test: true`, contains no mapped-output `message`, queue id, receipt handle, or business document, and never creates, leases, acknowledges, retries, or changes a real mapped-output queue item. It also does not replace the webhook\'s recorded production delivery health.  The webhook may be disabled while this connectivity test runs, but an endpoint and signing secret must already be saved. The API returns `200` after every completed attempt; inspect `delivered`, `statusCode`, and `error` for the destination outcome. `requestId` matches the `X-Request-Id` response header and is also included in the signed synthetic event for correlation.
     * Send a synthetic mapped-output webhook test
     */
    testMappedOutputWebhook(requestParameters: TestMappedOutputWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputWebhookTestResponse>;

    /**
     * Creates request options for updateMappedOutputWebhook without sending the request
     * @param {number} partnerId Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} ifMatch Exact quoted ETag returned by the latest GET, POST, or PATCH response for this resource.
     * @param {MappedOutputWebhookUpdateRequest} mappedOutputWebhookUpdateRequest Partner webhook configuration bodies may be at most 1 MiB (1,048,576 bytes).
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    updateMappedOutputWebhookRequestOpts(requestParameters: UpdateMappedOutputWebhookRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:write`.  Enables, disables, or rotates a partner\'s HTTPS mapped-output webhook. Send the current configuration ETag in `If-Match`. `endpointUrl` is required when enabling delivery and must be an absolute HTTPS URL without user information or a fragment and use a publicly routable host. Localhost, private, link-local, multicast, carrier-grade NAT, documentation, benchmark, and other reserved address targets are rejected. ModernEDI resolves the hostname again before every webhook delivery and sends only when all resolved addresses are publicly routable. Enabling a webhook without an existing signing secret creates one; `rotateSigningSecret: true` replaces it.  The request body is strict JSON: unknown fields are rejected; `enabled` and `rotateSigningSecret` must be booleans; and `endpointUrl` must be a string or `null`. Type mismatches return `400 invalid_request` with the offending JSON pointer.  A newly created or rotated `plainTextSigningSecret` appears only in this successful response. Save it immediately. Later reads expose only `signingSecretConfigured` and `signingSecretLastFour`.
     * @summary Configure mapped-output webhook delivery
     * @param {number} partnerId Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} ifMatch Exact quoted ETag returned by the latest GET, POST, or PATCH response for this resource.
     * @param {MappedOutputWebhookUpdateRequest} mappedOutputWebhookUpdateRequest Partner webhook configuration bodies may be at most 1 MiB (1,048,576 bytes).
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappedOutputQueueApiInterface
     */
    updateMappedOutputWebhookRaw(requestParameters: UpdateMappedOutputWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputWebhookUpdateResponse>>;

    /**
     * **Required key scope:** `configuration:write`.  Enables, disables, or rotates a partner\'s HTTPS mapped-output webhook. Send the current configuration ETag in `If-Match`. `endpointUrl` is required when enabling delivery and must be an absolute HTTPS URL without user information or a fragment and use a publicly routable host. Localhost, private, link-local, multicast, carrier-grade NAT, documentation, benchmark, and other reserved address targets are rejected. ModernEDI resolves the hostname again before every webhook delivery and sends only when all resolved addresses are publicly routable. Enabling a webhook without an existing signing secret creates one; `rotateSigningSecret: true` replaces it.  The request body is strict JSON: unknown fields are rejected; `enabled` and `rotateSigningSecret` must be booleans; and `endpointUrl` must be a string or `null`. Type mismatches return `400 invalid_request` with the offending JSON pointer.  A newly created or rotated `plainTextSigningSecret` appears only in this successful response. Save it immediately. Later reads expose only `signingSecretConfigured` and `signingSecretLastFour`.
     * Configure mapped-output webhook delivery
     */
    updateMappedOutputWebhook(requestParameters: UpdateMappedOutputWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputWebhookUpdateResponse>;

}

/**
 *
 */
export class MappedOutputQueueApi extends runtime.BaseAPI implements MappedOutputQueueApiInterface {

    /**
     * Creates request options for acknowledgeMappedOutput without sending the request
     */
    async acknowledgeMappedOutputRequestOpts(requestParameters: AcknowledgeMappedOutputRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling acknowledgeMappedOutput().'
            );
        }

        if (requestParameters['mappedOutputAckRequest'] == null) {
            throw new runtime.RequiredError(
                'mappedOutputAckRequest',
                'Required parameter "mappedOutputAckRequest" was null or undefined when calling acknowledgeMappedOutput().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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


        let urlPath = `/v1/mapped-outputs/{id}/ack`;
        urlPath = urlPath.replace('{id}', encodeURIComponent(String(requestParameters['id'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MappedOutputAckRequestToJSON(requestParameters['mappedOutputAckRequest']),
        };
    }

    /**
     * **Required key scope:** `messages:write`. Records that your integration acknowledged custody of a previously returned mapped output message. Call this after the mapped output has been durably stored or enqueued for reliable processing in your system. This acknowledgment does not prove later ERP or business processing. The receipt handle must match the latest poll response for this mapped output id. A retry with the same id and receipt handle is idempotent: it returns the original acknowledgment and `ackedAt` value instead of failing. If a call ends without a definitive response, retry that same acknowledgment before polling. Poll for a new receipt only when the old lease is rejected or the message becomes available again; an acknowledged item is no longer returned by polling.
     * Mark mapped output as received
     */
    async acknowledgeMappedOutputRaw(requestParameters: AcknowledgeMappedOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputAckResponse>> {
        const requestOptions = await this.acknowledgeMappedOutputRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappedOutputAckResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Records that your integration acknowledged custody of a previously returned mapped output message. Call this after the mapped output has been durably stored or enqueued for reliable processing in your system. This acknowledgment does not prove later ERP or business processing. The receipt handle must match the latest poll response for this mapped output id. A retry with the same id and receipt handle is idempotent: it returns the original acknowledgment and `ackedAt` value instead of failing. If a call ends without a definitive response, retry that same acknowledgment before polling. Poll for a new receipt only when the old lease is rejected or the message becomes available again; an acknowledged item is no longer returned by polling.
     * Mark mapped output as received
     */
    async acknowledgeMappedOutput(requestParameters: AcknowledgeMappedOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputAckResponse> {
        const response = await this.acknowledgeMappedOutputRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for acknowledgeMappedOutputs without sending the request
     */
    async acknowledgeMappedOutputsRequestOpts(requestParameters: AcknowledgeMappedOutputsRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['mappedOutputBulkAckRequest'] == null) {
            throw new runtime.RequiredError(
                'mappedOutputBulkAckRequest',
                'Required parameter "mappedOutputBulkAckRequest" was null or undefined when calling acknowledgeMappedOutputs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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


        let urlPath = `/v1/mapped-outputs/ack`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MappedOutputBulkAckRequestToJSON(requestParameters['mappedOutputBulkAckRequest']),
        };
    }

    /**
     * **Required key scope:** `messages:write`. Acknowledges between 1 and 100 mapped-output receipts in one database transaction. If any id or receipt handle is invalid, none of the items are acknowledged. Repeating an already successful request with the same id and receipt handles is idempotent and returns the original acknowledgment timestamps. Retry the same batch first when a call ends without a definitive response; already acknowledged items are not returned by polling. All items must belong to the environment selected by the `environment` query parameter.
     * Atomically acknowledge multiple mapped outputs
     */
    async acknowledgeMappedOutputsRaw(requestParameters: AcknowledgeMappedOutputsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputBulkAckResponse>> {
        const requestOptions = await this.acknowledgeMappedOutputsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappedOutputBulkAckResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `messages:write`. Acknowledges between 1 and 100 mapped-output receipts in one database transaction. If any id or receipt handle is invalid, none of the items are acknowledged. Repeating an already successful request with the same id and receipt handles is idempotent and returns the original acknowledgment timestamps. Retry the same batch first when a call ends without a definitive response; already acknowledged items are not returned by polling. All items must belong to the environment selected by the `environment` query parameter.
     * Atomically acknowledge multiple mapped outputs
     */
    async acknowledgeMappedOutputs(requestParameters: AcknowledgeMappedOutputsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputBulkAckResponse> {
        const response = await this.acknowledgeMappedOutputsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getMappedOutputWebhookStatus without sending the request
     */
    async getMappedOutputWebhookStatusRequestOpts(requestParameters: GetMappedOutputWebhookStatusRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling getMappedOutputWebhookStatus().'
            );
        }

        const queryParameters: any = {};

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


        let urlPath = `/v1/partners/{partnerId}/mapped-output-webhook`;
        urlPath = urlPath.replace('{partnerId}', encodeURIComponent(String(requestParameters['partnerId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the current mapped-output webhook configuration and recent delivery health for a partner. This read-only endpoint never returns the signing secret; it reports whether a secret is configured and only its last four characters so operators can identify the active credential. Save the response `ETag` header or `webhook.etag` before updating.
     * Get mapped-output webhook status
     */
    async getMappedOutputWebhookStatusRaw(requestParameters: GetMappedOutputWebhookStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputWebhookStatusResponse>> {
        const requestOptions = await this.getMappedOutputWebhookStatusRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappedOutputWebhookStatusResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the current mapped-output webhook configuration and recent delivery health for a partner. This read-only endpoint never returns the signing secret; it reports whether a secret is configured and only its last four characters so operators can identify the active credential. Save the response `ETag` header or `webhook.etag` before updating.
     * Get mapped-output webhook status
     */
    async getMappedOutputWebhookStatus(requestParameters: GetMappedOutputWebhookStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputWebhookStatusResponse> {
        const response = await this.getMappedOutputWebhookStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for pollMappedOutputs without sending the request
     */
    async pollMappedOutputsRequestOpts(requestParameters: PollMappedOutputsRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
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

        if (requestParameters['visibilityTimeoutSeconds'] != null) {
            queryParameters['visibilityTimeoutSeconds'] = requestParameters['visibilityTimeoutSeconds'];
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


        let urlPath = `/v1/mapped-outputs`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns server-managed mapped inbound documents for this tenant and temporarily marks them in progress. Transaction-record-only results and legacy direct-to-SQS or direct-to-DynamoDB outputs are not duplicated into this queue. If a returned message is not acknowledged before the visibility timeout expires, ModernEDI may return it again on a later poll. Push delivery uses the same queue state: a successful 2xx webhook response acknowledges the message, while a failed push leaves it available through this endpoint. Each request performs a bounded scan. When `hasMore` is true, send `nextCursor` as the next request\'s `cursor` so polling advances past unavailable or output-free transactions instead of rescanning them. This endpoint runs on the shared ModernEDI API host, not on the tenant AS2 hostname.
     * Poll mapped inbound output
     */
    async pollMappedOutputsRaw(requestParameters: PollMappedOutputsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputQueueResponse>> {
        const requestOptions = await this.pollMappedOutputsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappedOutputQueueResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns server-managed mapped inbound documents for this tenant and temporarily marks them in progress. Transaction-record-only results and legacy direct-to-SQS or direct-to-DynamoDB outputs are not duplicated into this queue. If a returned message is not acknowledged before the visibility timeout expires, ModernEDI may return it again on a later poll. Push delivery uses the same queue state: a successful 2xx webhook response acknowledges the message, while a failed push leaves it available through this endpoint. Each request performs a bounded scan. When `hasMore` is true, send `nextCursor` as the next request\'s `cursor` so polling advances past unavailable or output-free transactions instead of rescanning them. This endpoint runs on the shared ModernEDI API host, not on the tenant AS2 hostname.
     * Poll mapped inbound output
     */
    async pollMappedOutputs(requestParameters: PollMappedOutputsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputQueueResponse> {
        const response = await this.pollMappedOutputsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for testMappedOutputWebhook without sending the request
     */
    async testMappedOutputWebhookRequestOpts(requestParameters: TestMappedOutputWebhookRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling testMappedOutputWebhook().'
            );
        }

        const queryParameters: any = {};

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


        let urlPath = `/v1/partners/{partnerId}/mapped-output-webhook/test`;
        urlPath = urlPath.replace('{partnerId}', encodeURIComponent(String(requestParameters['partnerId'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:write`.  Sends one signed `mapped_output.test` event to the partner\'s saved HTTPS webhook endpoint using the same DNS validation, pinned public-address transport, timeout, and HMAC signing path as normal mapped-output delivery. The test event is explicitly marked `test: true`, contains no mapped-output `message`, queue id, receipt handle, or business document, and never creates, leases, acknowledges, retries, or changes a real mapped-output queue item. It also does not replace the webhook\'s recorded production delivery health.  The webhook may be disabled while this connectivity test runs, but an endpoint and signing secret must already be saved. The API returns `200` after every completed attempt; inspect `delivered`, `statusCode`, and `error` for the destination outcome. `requestId` matches the `X-Request-Id` response header and is also included in the signed synthetic event for correlation.
     * Send a synthetic mapped-output webhook test
     */
    async testMappedOutputWebhookRaw(requestParameters: TestMappedOutputWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputWebhookTestResponse>> {
        const requestOptions = await this.testMappedOutputWebhookRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappedOutputWebhookTestResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:write`.  Sends one signed `mapped_output.test` event to the partner\'s saved HTTPS webhook endpoint using the same DNS validation, pinned public-address transport, timeout, and HMAC signing path as normal mapped-output delivery. The test event is explicitly marked `test: true`, contains no mapped-output `message`, queue id, receipt handle, or business document, and never creates, leases, acknowledges, retries, or changes a real mapped-output queue item. It also does not replace the webhook\'s recorded production delivery health.  The webhook may be disabled while this connectivity test runs, but an endpoint and signing secret must already be saved. The API returns `200` after every completed attempt; inspect `delivered`, `statusCode`, and `error` for the destination outcome. `requestId` matches the `X-Request-Id` response header and is also included in the signed synthetic event for correlation.
     * Send a synthetic mapped-output webhook test
     */
    async testMappedOutputWebhook(requestParameters: TestMappedOutputWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputWebhookTestResponse> {
        const response = await this.testMappedOutputWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for updateMappedOutputWebhook without sending the request
     */
    async updateMappedOutputWebhookRequestOpts(requestParameters: UpdateMappedOutputWebhookRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling updateMappedOutputWebhook().'
            );
        }

        if (requestParameters['ifMatch'] == null) {
            throw new runtime.RequiredError(
                'ifMatch',
                'Required parameter "ifMatch" was null or undefined when calling updateMappedOutputWebhook().'
            );
        }

        if (requestParameters['mappedOutputWebhookUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'mappedOutputWebhookUpdateRequest',
                'Required parameter "mappedOutputWebhookUpdateRequest" was null or undefined when calling updateMappedOutputWebhook().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = String(requestParameters['ifMatch']);
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


        let urlPath = `/v1/partners/{partnerId}/mapped-output-webhook`;
        urlPath = urlPath.replace('{partnerId}', encodeURIComponent(String(requestParameters['partnerId'])));

        return {
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MappedOutputWebhookUpdateRequestToJSON(requestParameters['mappedOutputWebhookUpdateRequest']),
        };
    }

    /**
     * **Required key scope:** `configuration:write`.  Enables, disables, or rotates a partner\'s HTTPS mapped-output webhook. Send the current configuration ETag in `If-Match`. `endpointUrl` is required when enabling delivery and must be an absolute HTTPS URL without user information or a fragment and use a publicly routable host. Localhost, private, link-local, multicast, carrier-grade NAT, documentation, benchmark, and other reserved address targets are rejected. ModernEDI resolves the hostname again before every webhook delivery and sends only when all resolved addresses are publicly routable. Enabling a webhook without an existing signing secret creates one; `rotateSigningSecret: true` replaces it.  The request body is strict JSON: unknown fields are rejected; `enabled` and `rotateSigningSecret` must be booleans; and `endpointUrl` must be a string or `null`. Type mismatches return `400 invalid_request` with the offending JSON pointer.  A newly created or rotated `plainTextSigningSecret` appears only in this successful response. Save it immediately. Later reads expose only `signingSecretConfigured` and `signingSecretLastFour`.
     * Configure mapped-output webhook delivery
     */
    async updateMappedOutputWebhookRaw(requestParameters: UpdateMappedOutputWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappedOutputWebhookUpdateResponse>> {
        const requestOptions = await this.updateMappedOutputWebhookRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappedOutputWebhookUpdateResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:write`.  Enables, disables, or rotates a partner\'s HTTPS mapped-output webhook. Send the current configuration ETag in `If-Match`. `endpointUrl` is required when enabling delivery and must be an absolute HTTPS URL without user information or a fragment and use a publicly routable host. Localhost, private, link-local, multicast, carrier-grade NAT, documentation, benchmark, and other reserved address targets are rejected. ModernEDI resolves the hostname again before every webhook delivery and sends only when all resolved addresses are publicly routable. Enabling a webhook without an existing signing secret creates one; `rotateSigningSecret: true` replaces it.  The request body is strict JSON: unknown fields are rejected; `enabled` and `rotateSigningSecret` must be booleans; and `endpointUrl` must be a string or `null`. Type mismatches return `400 invalid_request` with the offending JSON pointer.  A newly created or rotated `plainTextSigningSecret` appears only in this successful response. Save it immediately. Later reads expose only `signingSecretConfigured` and `signingSecretLastFour`.
     * Configure mapped-output webhook delivery
     */
    async updateMappedOutputWebhook(requestParameters: UpdateMappedOutputWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappedOutputWebhookUpdateResponse> {
        const response = await this.updateMappedOutputWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AcknowledgeMappedOutputEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type AcknowledgeMappedOutputEnvironmentEnum = typeof AcknowledgeMappedOutputEnvironmentEnum[keyof typeof AcknowledgeMappedOutputEnvironmentEnum];
/**
 * @export
 */
export const AcknowledgeMappedOutputsEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type AcknowledgeMappedOutputsEnvironmentEnum = typeof AcknowledgeMappedOutputsEnvironmentEnum[keyof typeof AcknowledgeMappedOutputsEnvironmentEnum];
/**
 * @export
 */
export const PollMappedOutputsEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PollMappedOutputsEnvironmentEnum = typeof PollMappedOutputsEnvironmentEnum[keyof typeof PollMappedOutputsEnvironmentEnum];
/**
 * @export
 */
export const PollMappedOutputsDirectionEnum = {
    Inbound: 'inbound',
    Outbound: 'outbound',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PollMappedOutputsDirectionEnum = typeof PollMappedOutputsDirectionEnum[keyof typeof PollMappedOutputsDirectionEnum];
