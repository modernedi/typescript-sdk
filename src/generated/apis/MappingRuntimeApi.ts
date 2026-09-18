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
    type MappingRuntimeFailureResponse,
    MappingRuntimeFailureResponseFromJSON,
    MappingRuntimeFailureResponseToJSON,
} from '../models/MappingRuntimeFailureResponse.js';
import {
    type MappingRuntimeFailuresResponse,
    MappingRuntimeFailuresResponseFromJSON,
    MappingRuntimeFailuresResponseToJSON,
} from '../models/MappingRuntimeFailuresResponse.js';
import {
    type MappingRuntimeHealthResponse,
    MappingRuntimeHealthResponseFromJSON,
    MappingRuntimeHealthResponseToJSON,
} from '../models/MappingRuntimeHealthResponse.js';

export interface GetIntegrationMappingRuntimeFailureRequest {
    failureId: string;
    xRequestId?: string;
}

export interface GetIntegrationMappingRuntimeHealthRequest {
    xRequestId?: string;
    environment?: GetIntegrationMappingRuntimeHealthEnvironmentEnum;
}

export interface ListIntegrationMappingRuntimeFailuresRequest {
    xRequestId?: string;
    environment?: ListIntegrationMappingRuntimeFailuresEnvironmentEnum;
    mappingId?: number;
    direction?: ListIntegrationMappingRuntimeFailuresDirectionEnum;
    resolved?: boolean;
    cursor?: string;
    limit?: number;
}

/**
 * MappingRuntimeApi - interface
 *
 * @export
 * @interface MappingRuntimeApiInterface
 */
export interface MappingRuntimeApiInterface {
    /**
     * Creates request options for getIntegrationMappingRuntimeFailure without sending the request
     * @param {string} failureId Opaque non-null &#x60;failureId&#x60; returned by the failure list or a failed transaction mapping attempt.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof MappingRuntimeApiInterface
     */
    getIntegrationMappingRuntimeFailureRequestOpts(requestParameters: GetIntegrationMappingRuntimeFailureRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns one safe diagnostic by its opaque `failureId`. The id is still checked against the authenticated tenant; knowing another tenant\'s id never grants access.
     * @summary Get one mapping runtime failure
     * @param {string} failureId Opaque non-null &#x60;failureId&#x60; returned by the failure list or a failed transaction mapping attempt.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappingRuntimeApiInterface
     */
    getIntegrationMappingRuntimeFailureRaw(requestParameters: GetIntegrationMappingRuntimeFailureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingRuntimeFailureResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns one safe diagnostic by its opaque `failureId`. The id is still checked against the authenticated tenant; knowing another tenant\'s id never grants access.
     * Get one mapping runtime failure
     */
    getIntegrationMappingRuntimeFailure(requestParameters: GetIntegrationMappingRuntimeFailureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingRuntimeFailureResponse>;

    /**
     * Creates request options for getIntegrationMappingRuntimeHealth without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @throws {RequiredError}
     * @memberof MappingRuntimeApiInterface
     */
    getIntegrationMappingRuntimeHealthRequestOpts(requestParameters: GetIntegrationMappingRuntimeHealthRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns aggregate unresolved and recovered mapping outcomes for the selected environment. This view includes failures that occurred before an X12 transaction could be created, so its totals can be non-zero even when no corresponding transaction appears in the transaction list. `truncated=true` means the bounded health scan could not summarize every retained attempt; use the paginated failures endpoint for investigation.
     * @summary Get mapping runtime health
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappingRuntimeApiInterface
     */
    getIntegrationMappingRuntimeHealthRaw(requestParameters: GetIntegrationMappingRuntimeHealthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingRuntimeHealthResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns aggregate unresolved and recovered mapping outcomes for the selected environment. This view includes failures that occurred before an X12 transaction could be created, so its totals can be non-zero even when no corresponding transaction appears in the transaction list. `truncated=true` means the bounded health scan could not summarize every retained attempt; use the paginated failures endpoint for investigation.
     * Get mapping runtime health
     */
    getIntegrationMappingRuntimeHealth(requestParameters: GetIntegrationMappingRuntimeHealthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingRuntimeHealthResponse>;

    /**
     * Creates request options for listIntegrationMappingRuntimeFailures without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {number} [mappingId] Tenant-scoped mapping id. Omit it to include unmatched pre-transaction failures.
     * @param {'inbound' | 'outbound'} [direction] Case-insensitive mapping direction.
     * @param {boolean} [resolved] Filter resolved or unresolved failures; omit it to return both.
     * @param {string} [cursor] Opaque cursor returned by the preceding page. Send it back unchanged with the same environment and filters.
     * @param {number} [limit] Maximum failures to return.
     * @throws {RequiredError}
     * @memberof MappingRuntimeApiInterface
     */
    listIntegrationMappingRuntimeFailuresRequestOpts(requestParameters: ListIntegrationMappingRuntimeFailuresRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns safe, tenant-scoped mapping failure diagnostics in reverse chronological order. The response deliberately omits raw source input, generated output, stack traces, and internal exception text. A failure whose `transactionReference` is null occurred before a transaction existed. For those pre-transaction outbound failures, `correlationId` is a ModernEDI request-correlation identifier rather than an AS2 Message-Id, and `transactionKey` is `outbound-request`. Use `failureId` as the stable investigation and deduplication key. `resolved=true` means a later equivalent mapping attempt succeeded; it does not mean an AS2 document was sent, delivered, or acknowledged.
     * @summary List mapping runtime failures
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {'production' | 'test'} [environment] Selects the isolated production or test transaction history and queue. Cursors and mapped-output receipt handles are bound to the environment that created them and cannot be reused across environments.
     * @param {number} [mappingId] Tenant-scoped mapping id. Omit it to include unmatched pre-transaction failures.
     * @param {'inbound' | 'outbound'} [direction] Case-insensitive mapping direction.
     * @param {boolean} [resolved] Filter resolved or unresolved failures; omit it to return both.
     * @param {string} [cursor] Opaque cursor returned by the preceding page. Send it back unchanged with the same environment and filters.
     * @param {number} [limit] Maximum failures to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappingRuntimeApiInterface
     */
    listIntegrationMappingRuntimeFailuresRaw(requestParameters: ListIntegrationMappingRuntimeFailuresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingRuntimeFailuresResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns safe, tenant-scoped mapping failure diagnostics in reverse chronological order. The response deliberately omits raw source input, generated output, stack traces, and internal exception text. A failure whose `transactionReference` is null occurred before a transaction existed. For those pre-transaction outbound failures, `correlationId` is a ModernEDI request-correlation identifier rather than an AS2 Message-Id, and `transactionKey` is `outbound-request`. Use `failureId` as the stable investigation and deduplication key. `resolved=true` means a later equivalent mapping attempt succeeded; it does not mean an AS2 document was sent, delivered, or acknowledged.
     * List mapping runtime failures
     */
    listIntegrationMappingRuntimeFailures(requestParameters: ListIntegrationMappingRuntimeFailuresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingRuntimeFailuresResponse>;

}

/**
 *
 */
export class MappingRuntimeApi extends runtime.BaseAPI implements MappingRuntimeApiInterface {

    /**
     * Creates request options for getIntegrationMappingRuntimeFailure without sending the request
     */
    async getIntegrationMappingRuntimeFailureRequestOpts(requestParameters: GetIntegrationMappingRuntimeFailureRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['failureId'] == null) {
            throw new runtime.RequiredError(
                'failureId',
                'Required parameter "failureId" was null or undefined when calling getIntegrationMappingRuntimeFailure().'
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


        let urlPath = `/v1/integration/mapping-runtime/failures/{failureId}`;
        urlPath = urlPath.replace('{failureId}', encodeURIComponent(String(requestParameters['failureId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns one safe diagnostic by its opaque `failureId`. The id is still checked against the authenticated tenant; knowing another tenant\'s id never grants access.
     * Get one mapping runtime failure
     */
    async getIntegrationMappingRuntimeFailureRaw(requestParameters: GetIntegrationMappingRuntimeFailureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingRuntimeFailureResponse>> {
        const requestOptions = await this.getIntegrationMappingRuntimeFailureRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappingRuntimeFailureResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns one safe diagnostic by its opaque `failureId`. The id is still checked against the authenticated tenant; knowing another tenant\'s id never grants access.
     * Get one mapping runtime failure
     */
    async getIntegrationMappingRuntimeFailure(requestParameters: GetIntegrationMappingRuntimeFailureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingRuntimeFailureResponse> {
        const response = await this.getIntegrationMappingRuntimeFailureRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationMappingRuntimeHealth without sending the request
     */
    async getIntegrationMappingRuntimeHealthRequestOpts(requestParameters: GetIntegrationMappingRuntimeHealthRequest): Promise<runtime.RequestOpts> {
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


        let urlPath = `/v1/integration/mapping-runtime/health`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns aggregate unresolved and recovered mapping outcomes for the selected environment. This view includes failures that occurred before an X12 transaction could be created, so its totals can be non-zero even when no corresponding transaction appears in the transaction list. `truncated=true` means the bounded health scan could not summarize every retained attempt; use the paginated failures endpoint for investigation.
     * Get mapping runtime health
     */
    async getIntegrationMappingRuntimeHealthRaw(requestParameters: GetIntegrationMappingRuntimeHealthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingRuntimeHealthResponse>> {
        const requestOptions = await this.getIntegrationMappingRuntimeHealthRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappingRuntimeHealthResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns aggregate unresolved and recovered mapping outcomes for the selected environment. This view includes failures that occurred before an X12 transaction could be created, so its totals can be non-zero even when no corresponding transaction appears in the transaction list. `truncated=true` means the bounded health scan could not summarize every retained attempt; use the paginated failures endpoint for investigation.
     * Get mapping runtime health
     */
    async getIntegrationMappingRuntimeHealth(requestParameters: GetIntegrationMappingRuntimeHealthRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingRuntimeHealthResponse> {
        const response = await this.getIntegrationMappingRuntimeHealthRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listIntegrationMappingRuntimeFailures without sending the request
     */
    async listIntegrationMappingRuntimeFailuresRequestOpts(requestParameters: ListIntegrationMappingRuntimeFailuresRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        if (requestParameters['mappingId'] != null) {
            queryParameters['mappingId'] = requestParameters['mappingId'];
        }

        if (requestParameters['direction'] != null) {
            queryParameters['direction'] = requestParameters['direction'];
        }

        if (requestParameters['resolved'] != null) {
            queryParameters['resolved'] = requestParameters['resolved'];
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


        let urlPath = `/v1/integration/mapping-runtime/failures`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns safe, tenant-scoped mapping failure diagnostics in reverse chronological order. The response deliberately omits raw source input, generated output, stack traces, and internal exception text. A failure whose `transactionReference` is null occurred before a transaction existed. For those pre-transaction outbound failures, `correlationId` is a ModernEDI request-correlation identifier rather than an AS2 Message-Id, and `transactionKey` is `outbound-request`. Use `failureId` as the stable investigation and deduplication key. `resolved=true` means a later equivalent mapping attempt succeeded; it does not mean an AS2 document was sent, delivered, or acknowledged.
     * List mapping runtime failures
     */
    async listIntegrationMappingRuntimeFailuresRaw(requestParameters: ListIntegrationMappingRuntimeFailuresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingRuntimeFailuresResponse>> {
        const requestOptions = await this.listIntegrationMappingRuntimeFailuresRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappingRuntimeFailuresResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns safe, tenant-scoped mapping failure diagnostics in reverse chronological order. The response deliberately omits raw source input, generated output, stack traces, and internal exception text. A failure whose `transactionReference` is null occurred before a transaction existed. For those pre-transaction outbound failures, `correlationId` is a ModernEDI request-correlation identifier rather than an AS2 Message-Id, and `transactionKey` is `outbound-request`. Use `failureId` as the stable investigation and deduplication key. `resolved=true` means a later equivalent mapping attempt succeeded; it does not mean an AS2 document was sent, delivered, or acknowledged.
     * List mapping runtime failures
     */
    async listIntegrationMappingRuntimeFailures(requestParameters: ListIntegrationMappingRuntimeFailuresRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingRuntimeFailuresResponse> {
        const response = await this.listIntegrationMappingRuntimeFailuresRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetIntegrationMappingRuntimeHealthEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type GetIntegrationMappingRuntimeHealthEnvironmentEnum = typeof GetIntegrationMappingRuntimeHealthEnvironmentEnum[keyof typeof GetIntegrationMappingRuntimeHealthEnvironmentEnum];
/**
 * @export
 */
export const ListIntegrationMappingRuntimeFailuresEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ListIntegrationMappingRuntimeFailuresEnvironmentEnum = typeof ListIntegrationMappingRuntimeFailuresEnvironmentEnum[keyof typeof ListIntegrationMappingRuntimeFailuresEnvironmentEnum];
/**
 * @export
 */
export const ListIntegrationMappingRuntimeFailuresDirectionEnum = {
    Inbound: 'inbound',
    Outbound: 'outbound',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ListIntegrationMappingRuntimeFailuresDirectionEnum = typeof ListIntegrationMappingRuntimeFailuresDirectionEnum[keyof typeof ListIntegrationMappingRuntimeFailuresDirectionEnum];
