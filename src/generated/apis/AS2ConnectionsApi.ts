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
    type As2ConnectionListResponse,
    As2ConnectionListResponseFromJSON,
    As2ConnectionListResponseToJSON,
} from '../models/As2ConnectionListResponse.js';
import {
    type As2ConnectionResponse,
    As2ConnectionResponseFromJSON,
    As2ConnectionResponseToJSON,
} from '../models/As2ConnectionResponse.js';
import {
    type ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/ErrorResponse.js';

export interface GetIntegrationAs2ConnectionRequest {
    connectionId: number;
    xRequestId?: string;
}

export interface ListIntegrationAs2ConnectionsRequest {
    xRequestId?: string;
}

/**
 * AS2ConnectionsApi - interface
 *
 * @export
 * @interface AS2ConnectionsApiInterface
 */
export interface AS2ConnectionsApiInterface {
    /**
     * Creates request options for getIntegrationAs2Connection without sending the request
     * @param {number} connectionId Tenant-scoped AS2 connection id.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof AS2ConnectionsApiInterface
     */
    getIntegrationAs2ConnectionRequestOpts(requestParameters: GetIntegrationAs2ConnectionRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns one public AS2 connection configuration and the ETag that identifies this observed resource version. To change or remove the connection, use the aggregate export–plan–apply workflow.
     * @summary Get a partner AS2 connection
     * @param {number} connectionId Tenant-scoped AS2 connection id.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AS2ConnectionsApiInterface
     */
    getIntegrationAs2ConnectionRaw(requestParameters: GetIntegrationAs2ConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<As2ConnectionResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns one public AS2 connection configuration and the ETag that identifies this observed resource version. To change or remove the connection, use the aggregate export–plan–apply workflow.
     * Get a partner AS2 connection
     */
    getIntegrationAs2Connection(requestParameters: GetIntegrationAs2ConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<As2ConnectionResponse>;

    /**
     * Creates request options for listIntegrationAs2Connections without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof AS2ConnectionsApiInterface
     */
    listIntegrationAs2ConnectionsRequestOpts(requestParameters: ListIntegrationAs2ConnectionsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns every partner AS2 connection in this tenant. Certificates are partner public X.509 certificates formatted as PEM. Private keys and secret locations are never returned.
     * @summary List partner AS2 connections
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AS2ConnectionsApiInterface
     */
    listIntegrationAs2ConnectionsRaw(requestParameters: ListIntegrationAs2ConnectionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<As2ConnectionListResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns every partner AS2 connection in this tenant. Certificates are partner public X.509 certificates formatted as PEM. Private keys and secret locations are never returned.
     * List partner AS2 connections
     */
    listIntegrationAs2Connections(requestParameters: ListIntegrationAs2ConnectionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<As2ConnectionListResponse>;

}

/**
 *
 */
export class AS2ConnectionsApi extends runtime.BaseAPI implements AS2ConnectionsApiInterface {

    /**
     * Creates request options for getIntegrationAs2Connection without sending the request
     */
    async getIntegrationAs2ConnectionRequestOpts(requestParameters: GetIntegrationAs2ConnectionRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['connectionId'] == null) {
            throw new runtime.RequiredError(
                'connectionId',
                'Required parameter "connectionId" was null or undefined when calling getIntegrationAs2Connection().'
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


        let urlPath = `/v1/as2/connections/{connectionId}`;
        urlPath = urlPath.replace('{connectionId}', encodeURIComponent(String(requestParameters['connectionId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns one public AS2 connection configuration and the ETag that identifies this observed resource version. To change or remove the connection, use the aggregate export–plan–apply workflow.
     * Get a partner AS2 connection
     */
    async getIntegrationAs2ConnectionRaw(requestParameters: GetIntegrationAs2ConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<As2ConnectionResponse>> {
        const requestOptions = await this.getIntegrationAs2ConnectionRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => As2ConnectionResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns one public AS2 connection configuration and the ETag that identifies this observed resource version. To change or remove the connection, use the aggregate export–plan–apply workflow.
     * Get a partner AS2 connection
     */
    async getIntegrationAs2Connection(requestParameters: GetIntegrationAs2ConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<As2ConnectionResponse> {
        const response = await this.getIntegrationAs2ConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listIntegrationAs2Connections without sending the request
     */
    async listIntegrationAs2ConnectionsRequestOpts(requestParameters: ListIntegrationAs2ConnectionsRequest): Promise<runtime.RequestOpts> {
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


        let urlPath = `/v1/as2/connections`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns every partner AS2 connection in this tenant. Certificates are partner public X.509 certificates formatted as PEM. Private keys and secret locations are never returned.
     * List partner AS2 connections
     */
    async listIntegrationAs2ConnectionsRaw(requestParameters: ListIntegrationAs2ConnectionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<As2ConnectionListResponse>> {
        const requestOptions = await this.listIntegrationAs2ConnectionsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => As2ConnectionListResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns every partner AS2 connection in this tenant. Certificates are partner public X.509 certificates formatted as PEM. Private keys and secret locations are never returned.
     * List partner AS2 connections
     */
    async listIntegrationAs2Connections(requestParameters: ListIntegrationAs2ConnectionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<As2ConnectionListResponse> {
        const response = await this.listIntegrationAs2ConnectionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
