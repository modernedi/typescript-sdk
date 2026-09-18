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
    type UsageResponse,
    UsageResponseFromJSON,
    UsageResponseToJSON,
} from '../models/UsageResponse.js';

export interface GetIntegrationUsageRequest {
    xRequestId?: string;
    days?: number;
}

/**
 * AccountApi - interface
 *
 * @export
 * @interface AccountApiInterface
 */
export interface AccountApiInterface {
    /**
     * Creates request options for getIntegrationUsage without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {number} [days] Number of UTC calendar days to include.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    getIntegrationUsageRequestOpts(requestParameters: GetIntegrationUsageRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `transactions:read`. Returns the tenant\'s current AS2 message usage, plan thresholds, daily history, and operational signals. Use `rejectionActive`, `status`, and the threshold fields to warn operators before additional messages are rejected. The quota date and `timeZone` are reported in UTC and usage includes both inbound and outbound AS2 messages. Hour bucket labels use `HH:00` values such as `18:00`.
     * @summary Get plan usage and enforcement status
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {number} [days] Number of UTC calendar days to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    getIntegrationUsageRaw(requestParameters: GetIntegrationUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsageResponse>>;

    /**
     * **Required key scope:** `transactions:read`. Returns the tenant\'s current AS2 message usage, plan thresholds, daily history, and operational signals. Use `rejectionActive`, `status`, and the threshold fields to warn operators before additional messages are rejected. The quota date and `timeZone` are reported in UTC and usage includes both inbound and outbound AS2 messages. Hour bucket labels use `HH:00` values such as `18:00`.
     * Get plan usage and enforcement status
     */
    getIntegrationUsage(requestParameters: GetIntegrationUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsageResponse>;

}

/**
 *
 */
export class AccountApi extends runtime.BaseAPI implements AccountApiInterface {

    /**
     * Creates request options for getIntegrationUsage without sending the request
     */
    async getIntegrationUsageRequestOpts(requestParameters: GetIntegrationUsageRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['days'] != null) {
            queryParameters['days'] = requestParameters['days'];
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


        let urlPath = `/v1/usage`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `transactions:read`. Returns the tenant\'s current AS2 message usage, plan thresholds, daily history, and operational signals. Use `rejectionActive`, `status`, and the threshold fields to warn operators before additional messages are rejected. The quota date and `timeZone` are reported in UTC and usage includes both inbound and outbound AS2 messages. Hour bucket labels use `HH:00` values such as `18:00`.
     * Get plan usage and enforcement status
     */
    async getIntegrationUsageRaw(requestParameters: GetIntegrationUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsageResponse>> {
        const requestOptions = await this.getIntegrationUsageRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsageResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `transactions:read`. Returns the tenant\'s current AS2 message usage, plan thresholds, daily history, and operational signals. Use `rejectionActive`, `status`, and the threshold fields to warn operators before additional messages are rejected. The quota date and `timeZone` are reported in UTC and usage includes both inbound and outbound AS2 messages. Hour bucket labels use `HH:00` values such as `18:00`.
     * Get plan usage and enforcement status
     */
    async getIntegrationUsage(requestParameters: GetIntegrationUsageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsageResponse> {
        const response = await this.getIntegrationUsageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
