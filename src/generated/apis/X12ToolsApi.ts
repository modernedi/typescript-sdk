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
import type { X12ValidationSourceBody } from '../requestBodies.js';
import {
    type ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/ErrorResponse.js';
import {
    type X12TransactionSetsResponse,
    X12TransactionSetsResponseFromJSON,
    X12TransactionSetsResponseToJSON,
} from '../models/X12TransactionSetsResponse.js';
import {
    type X12ValidationRequest,
    X12ValidationRequestFromJSON,
    X12ValidationRequestToJSON,
} from '../models/X12ValidationRequest.js';
import {
    type X12ValidationResponse,
    X12ValidationResponseFromJSON,
    X12ValidationResponseToJSON,
} from '../models/X12ValidationResponse.js';
import {
    type X12VersionsResponse,
    X12VersionsResponseFromJSON,
    X12VersionsResponseToJSON,
} from '../models/X12VersionsResponse.js';

export interface ListX12TransactionSetsRequest {
    x12Version: string;
    xRequestId?: string;
}

export interface ListX12VersionsRequest {
    xRequestId?: string;
}

export type ValidateX12Request = {
    xRequestId?: string;
} & X12ValidationSourceBody;

/**
 * X12ToolsApi - interface
 *
 * @export
 * @interface X12ToolsApiInterface
 */
export interface X12ToolsApiInterface {
    /**
     * Creates request options for listX12TransactionSets without sending the request
     * @param {string} x12Version X12 version to normalize and look up. Both &#x60;4010&#x60; and &#x60;004010&#x60; forms are accepted.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof X12ToolsApiInterface
     */
    listX12TransactionSetsRequestOpts(requestParameters: ListX12TransactionSetsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`. Returns the transaction-set identifiers and descriptions available for the normalized X12 version. Both `4010` and `004010` style version values are accepted.
     * @summary List transaction sets for an X12 version
     * @param {string} x12Version X12 version to normalize and look up. Both &#x60;4010&#x60; and &#x60;004010&#x60; forms are accepted.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof X12ToolsApiInterface
     */
    listX12TransactionSetsRaw(requestParameters: ListX12TransactionSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<X12TransactionSetsResponse>>;

    /**
     * **Required key scope:** `configuration:read`. Returns the transaction-set identifiers and descriptions available for the normalized X12 version. Both `4010` and `004010` style version values are accepted.
     * List transaction sets for an X12 version
     */
    listX12TransactionSets(requestParameters: ListX12TransactionSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<X12TransactionSetsResponse>;

    /**
     * Creates request options for listX12Versions without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof X12ToolsApiInterface
     */
    listX12VersionsRequestOpts(requestParameters: ListX12VersionsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns X12 versions for which the tenant has reference syntax trees.
     * @summary List available X12 versions
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof X12ToolsApiInterface
     */
    listX12VersionsRaw(requestParameters: ListX12VersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<X12VersionsResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns X12 versions for which the tenant has reference syntax trees.
     * List available X12 versions
     */
    listX12Versions(requestParameters: ListX12VersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<X12VersionsResponse>;

    /**
     * Creates request options for validateX12 without sending the request
     * @param {X12ValidationSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {X12ValidationSourceBody['body']} body Complete X12 interchange to validate, supplied directly as &#x60;application/edi-x12&#x60; or &#x60;text/plain&#x60;, or as the &#x60;x12&#x60; property of a JSON object.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof X12ToolsApiInterface
     */
    validateX12RequestOpts(requestParameters: ValidateX12Request): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Parses an X12 interchange and returns structural, group, transaction, segment, and element validation results without sending anything. Send X12 directly as `application/edi-x12` or `text/plain`, or wrap it in an `x12` field when JSON is more convenient. A syntactically invalid X12 document still returns a 200 validation result; malformed request shapes return a standard 400 error. Request bodies are limited to 3 MiB. Validation is available to read-only viewers and does not grant authority to send X12.
     * @summary Parse and validate an X12 interchange
     * @param {X12ValidationSourceBody['contentType']} contentType Exact HTTP media type of `body`.
     * @param {X12ValidationSourceBody['body']} body Complete X12 interchange to validate, supplied directly as &#x60;application/edi-x12&#x60; or &#x60;text/plain&#x60;, or as the &#x60;x12&#x60; property of a JSON object.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof X12ToolsApiInterface
     */
    validateX12Raw(requestParameters: ValidateX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<X12ValidationResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Parses an X12 interchange and returns structural, group, transaction, segment, and element validation results without sending anything. Send X12 directly as `application/edi-x12` or `text/plain`, or wrap it in an `x12` field when JSON is more convenient. A syntactically invalid X12 document still returns a 200 validation result; malformed request shapes return a standard 400 error. Request bodies are limited to 3 MiB. Validation is available to read-only viewers and does not grant authority to send X12.
     * Parse and validate an X12 interchange
     */
    validateX12(requestParameters: ValidateX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<X12ValidationResponse>;

}

/**
 *
 */
export class X12ToolsApi extends runtime.BaseAPI implements X12ToolsApiInterface {

    /**
     * Creates request options for listX12TransactionSets without sending the request
     */
    async listX12TransactionSetsRequestOpts(requestParameters: ListX12TransactionSetsRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['x12Version'] == null) {
            throw new runtime.RequiredError(
                'x12Version',
                'Required parameter "x12Version" was null or undefined when calling listX12TransactionSets().'
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


        let urlPath = `/v1/x12/versions/{x12Version}/transaction-sets`;
        urlPath = urlPath.replace('{x12Version}', encodeURIComponent(String(requestParameters['x12Version'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the transaction-set identifiers and descriptions available for the normalized X12 version. Both `4010` and `004010` style version values are accepted.
     * List transaction sets for an X12 version
     */
    async listX12TransactionSetsRaw(requestParameters: ListX12TransactionSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<X12TransactionSetsResponse>> {
        const requestOptions = await this.listX12TransactionSetsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => X12TransactionSetsResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the transaction-set identifiers and descriptions available for the normalized X12 version. Both `4010` and `004010` style version values are accepted.
     * List transaction sets for an X12 version
     */
    async listX12TransactionSets(requestParameters: ListX12TransactionSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<X12TransactionSetsResponse> {
        const response = await this.listX12TransactionSetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listX12Versions without sending the request
     */
    async listX12VersionsRequestOpts(requestParameters: ListX12VersionsRequest): Promise<runtime.RequestOpts> {
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


        let urlPath = `/v1/x12/versions`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns X12 versions for which the tenant has reference syntax trees.
     * List available X12 versions
     */
    async listX12VersionsRaw(requestParameters: ListX12VersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<X12VersionsResponse>> {
        const requestOptions = await this.listX12VersionsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => X12VersionsResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns X12 versions for which the tenant has reference syntax trees.
     * List available X12 versions
     */
    async listX12Versions(requestParameters: ListX12VersionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<X12VersionsResponse> {
        const response = await this.listX12VersionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for validateX12 without sending the request
     */
    async validateX12RequestOpts(requestParameters: ValidateX12Request): Promise<runtime.RequestOpts> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling validateX12().'
            );
        }

        const queryParameters: any = {};

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


        let urlPath = `/v1/x12/validate`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Parses an X12 interchange and returns structural, group, transaction, segment, and element validation results without sending anything. Send X12 directly as `application/edi-x12` or `text/plain`, or wrap it in an `x12` field when JSON is more convenient. A syntactically invalid X12 document still returns a 200 validation result; malformed request shapes return a standard 400 error. Request bodies are limited to 3 MiB. Validation is available to read-only viewers and does not grant authority to send X12.
     * Parse and validate an X12 interchange
     */
    async validateX12Raw(requestParameters: ValidateX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<X12ValidationResponse>> {
        const requestOptions = await this.validateX12RequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => X12ValidationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Parses an X12 interchange and returns structural, group, transaction, segment, and element validation results without sending anything. Send X12 directly as `application/edi-x12` or `text/plain`, or wrap it in an `x12` field when JSON is more convenient. A syntactically invalid X12 document still returns a 200 validation result; malformed request shapes return a standard 400 error. Request bodies are limited to 3 MiB. Validation is available to read-only viewers and does not grant authority to send X12.
     * Parse and validate an X12 interchange
     */
    async validateX12(requestParameters: ValidateX12Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<X12ValidationResponse> {
        const response = await this.validateX12Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
