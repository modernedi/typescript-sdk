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
    type IntegrationChangeEventsResponse,
    IntegrationChangeEventsResponseFromJSON,
    IntegrationChangeEventsResponseToJSON,
} from '../models/IntegrationChangeEventsResponse.js';

export interface ListIntegrationChangeEventsRequest {
    xRequestId?: string;
    environment?: ListIntegrationChangeEventsEnvironmentEnum;
    cursor?: string;
    limit?: number;
}

/**
 * IntegrationEventsApi - interface
 *
 * @export
 * @interface IntegrationEventsApiInterface
 */
export interface IntegrationEventsApiInterface {
    /**
     * Creates request options for listIntegrationChangeEvents without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {string} [cursor] Opaque, integrity-protected cursor from &#x60;nextCursor&#x60;. It is bound to the authenticated tenant and selected environment and must be returned unchanged. A modified cursor, or one used with another tenant or environment, returns HTTP 400. Omit it only to establish a new high-water-mark bootstrap cursor.
     * @param {number} [limit] Maximum events to return after the cursor.
     * @throws {RequiredError}
     * @memberof IntegrationEventsApiInterface
     */
    listIntegrationChangeEventsRequestOpts(requestParameters: ListIntegrationChangeEventsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`.  Returns a small invalidation feed for transaction state detected after an initial snapshot, including late mapping results, MDNs, 997 and 999 evaluations, mapped-output handoff changes, and attention changes. Events do not duplicate transaction detail. Refetch the referenced transaction to read authoritative current state.  When `cursor` is omitted, ModernEDI returns no historical events, `bootstrap=true`, and a `nextCursor` positioned at the current high-water mark. A race-safe custom viewer should:  1. Request this endpoint without a cursor and retain `nextCursor`. 2. Load its current transaction snapshot from `/v1/integration/transactions`. 3. Poll this endpoint again using the retained cursor. 4. Refetch every transaction named by events that arrived while the snapshot loaded.  Thereafter, keep sending each `nextCursor` back unchanged. `observedAt` is when the reconciliation sweep detected the change, not necessarily the partner\'s event time; event order is detection order. The feed is eventually consistent, so inspect `freshness.complete` and `freshness.status` before treating an empty poll as proof that no changes are pending.  Change events have a rolling 30-day retention independent of retained transaction documents. Polling successfully refreshes the cursor\'s age. A client that resumes with an expired cursor receives `410 cursor_expired`; request a new bootstrap cursor and repeat the snapshot sequence.
     * @summary Poll transaction-state changes
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {string} [cursor] Opaque, integrity-protected cursor from &#x60;nextCursor&#x60;. It is bound to the authenticated tenant and selected environment and must be returned unchanged. A modified cursor, or one used with another tenant or environment, returns HTTP 400. Omit it only to establish a new high-water-mark bootstrap cursor.
     * @param {number} [limit] Maximum events to return after the cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationEventsApiInterface
     */
    listIntegrationChangeEventsRaw(requestParameters: ListIntegrationChangeEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IntegrationChangeEventsResponse>>;

    /**
     * **Required key scope:** `transactions:read`.  Returns a small invalidation feed for transaction state detected after an initial snapshot, including late mapping results, MDNs, 997 and 999 evaluations, mapped-output handoff changes, and attention changes. Events do not duplicate transaction detail. Refetch the referenced transaction to read authoritative current state.  When `cursor` is omitted, ModernEDI returns no historical events, `bootstrap=true`, and a `nextCursor` positioned at the current high-water mark. A race-safe custom viewer should:  1. Request this endpoint without a cursor and retain `nextCursor`. 2. Load its current transaction snapshot from `/v1/integration/transactions`. 3. Poll this endpoint again using the retained cursor. 4. Refetch every transaction named by events that arrived while the snapshot loaded.  Thereafter, keep sending each `nextCursor` back unchanged. `observedAt` is when the reconciliation sweep detected the change, not necessarily the partner\'s event time; event order is detection order. The feed is eventually consistent, so inspect `freshness.complete` and `freshness.status` before treating an empty poll as proof that no changes are pending.  Change events have a rolling 30-day retention independent of retained transaction documents. Polling successfully refreshes the cursor\'s age. A client that resumes with an expired cursor receives `410 cursor_expired`; request a new bootstrap cursor and repeat the snapshot sequence.
     * Poll transaction-state changes
     */
    listIntegrationChangeEvents(requestParameters: ListIntegrationChangeEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IntegrationChangeEventsResponse>;

}

/**
 *
 */
export class IntegrationEventsApi extends runtime.BaseAPI implements IntegrationEventsApiInterface {

    /**
     * Creates request options for listIntegrationChangeEvents without sending the request
     */
    async listIntegrationChangeEventsRequestOpts(requestParameters: ListIntegrationChangeEventsRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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


        let urlPath = `/v1/integration/events`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`.  Returns a small invalidation feed for transaction state detected after an initial snapshot, including late mapping results, MDNs, 997 and 999 evaluations, mapped-output handoff changes, and attention changes. Events do not duplicate transaction detail. Refetch the referenced transaction to read authoritative current state.  When `cursor` is omitted, ModernEDI returns no historical events, `bootstrap=true`, and a `nextCursor` positioned at the current high-water mark. A race-safe custom viewer should:  1. Request this endpoint without a cursor and retain `nextCursor`. 2. Load its current transaction snapshot from `/v1/integration/transactions`. 3. Poll this endpoint again using the retained cursor. 4. Refetch every transaction named by events that arrived while the snapshot loaded.  Thereafter, keep sending each `nextCursor` back unchanged. `observedAt` is when the reconciliation sweep detected the change, not necessarily the partner\'s event time; event order is detection order. The feed is eventually consistent, so inspect `freshness.complete` and `freshness.status` before treating an empty poll as proof that no changes are pending.  Change events have a rolling 30-day retention independent of retained transaction documents. Polling successfully refreshes the cursor\'s age. A client that resumes with an expired cursor receives `410 cursor_expired`; request a new bootstrap cursor and repeat the snapshot sequence.
     * Poll transaction-state changes
     */
    async listIntegrationChangeEventsRaw(requestParameters: ListIntegrationChangeEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IntegrationChangeEventsResponse>> {
        const requestOptions = await this.listIntegrationChangeEventsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IntegrationChangeEventsResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`.  Returns a small invalidation feed for transaction state detected after an initial snapshot, including late mapping results, MDNs, 997 and 999 evaluations, mapped-output handoff changes, and attention changes. Events do not duplicate transaction detail. Refetch the referenced transaction to read authoritative current state.  When `cursor` is omitted, ModernEDI returns no historical events, `bootstrap=true`, and a `nextCursor` positioned at the current high-water mark. A race-safe custom viewer should:  1. Request this endpoint without a cursor and retain `nextCursor`. 2. Load its current transaction snapshot from `/v1/integration/transactions`. 3. Poll this endpoint again using the retained cursor. 4. Refetch every transaction named by events that arrived while the snapshot loaded.  Thereafter, keep sending each `nextCursor` back unchanged. `observedAt` is when the reconciliation sweep detected the change, not necessarily the partner\'s event time; event order is detection order. The feed is eventually consistent, so inspect `freshness.complete` and `freshness.status` before treating an empty poll as proof that no changes are pending.  Change events have a rolling 30-day retention independent of retained transaction documents. Polling successfully refreshes the cursor\'s age. A client that resumes with an expired cursor receives `410 cursor_expired`; request a new bootstrap cursor and repeat the snapshot sequence.
     * Poll transaction-state changes
     */
    async listIntegrationChangeEvents(requestParameters: ListIntegrationChangeEventsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IntegrationChangeEventsResponse> {
        const response = await this.listIntegrationChangeEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ListIntegrationChangeEventsEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ListIntegrationChangeEventsEnvironmentEnum = typeof ListIntegrationChangeEventsEnvironmentEnum[keyof typeof ListIntegrationChangeEventsEnvironmentEnum];
