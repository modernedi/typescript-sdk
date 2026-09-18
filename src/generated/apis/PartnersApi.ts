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
    type As2ProfileResponse,
    As2ProfileResponseFromJSON,
    As2ProfileResponseToJSON,
} from '../models/As2ProfileResponse.js';
import {
    type ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/ErrorResponse.js';
import {
    type PartnerCapabilitiesResponse,
    PartnerCapabilitiesResponseFromJSON,
    PartnerCapabilitiesResponseToJSON,
} from '../models/PartnerCapabilitiesResponse.js';
import {
    type PartnerListResponse,
    PartnerListResponseFromJSON,
    PartnerListResponseToJSON,
} from '../models/PartnerListResponse.js';
import {
    type PartnerResponse,
    PartnerResponseFromJSON,
    PartnerResponseToJSON,
} from '../models/PartnerResponse.js';

export interface GetIntegrationAs2ProfileRequest {
    xRequestId?: string;
}

export interface GetIntegrationPartnerRequest {
    partnerId: number;
    xRequestId?: string;
}

export interface GetIntegrationPartnerCapabilitiesRequest {
    partnerId: number;
    xRequestId?: string;
}

export interface ListIntegrationPartnersRequest {
    xRequestId?: string;
}

/**
 * PartnersApi - interface
 *
 * @export
 * @interface PartnersApiInterface
 */
export interface PartnersApiInterface {
    /**
     * Creates request options for getIntegrationAs2Profile without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof PartnersApiInterface
     */
    getIntegrationAs2ProfileRequestOpts(requestParameters: GetIntegrationAs2ProfileRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`. Returns the safe connection sheet your trading partners need: production and test AS2 URLs and identifiers, X12 sender identities, static network addresses included in the current plan, and active or next public certificates. Private keys, secret ARNs, billing contacts, and internal infrastructure identifiers are never returned. Network capability status is `ready`, `pending`, or `not_included`.
     * @summary Get the tenant\'s public AS2 profile
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApiInterface
     */
    getIntegrationAs2ProfileRaw(requestParameters: GetIntegrationAs2ProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<As2ProfileResponse>>;

    /**
     * **Required key scope:** `configuration:read`. Returns the safe connection sheet your trading partners need: production and test AS2 URLs and identifiers, X12 sender identities, static network addresses included in the current plan, and active or next public certificates. Private keys, secret ARNs, billing contacts, and internal infrastructure identifiers are never returned. Network capability status is `ready`, `pending`, or `not_included`.
     * Get the tenant\'s public AS2 profile
     */
    getIntegrationAs2Profile(requestParameters: GetIntegrationAs2ProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<As2ProfileResponse>;

    /**
     * Creates request options for getIntegrationPartner without sending the request
     * @param {number} partnerId Tenant-scoped partner id.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof PartnersApiInterface
     */
    getIntegrationPartnerRequestOpts(requestParameters: GetIntegrationPartnerRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the complete active public partner configuration. Retired partners return `404`; their retained rows are used only for historical transaction authorization. The response never exposes internal header overrides or infrastructure settings. The `ETag` header and `partner.etag` identify this observed resource version. To change or retire the partner, export the workspace configuration, edit its portable partner resource, plan the aggregate change, and apply that exact plan.
     * @summary Get a trading partner
     * @param {number} partnerId Tenant-scoped partner id.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApiInterface
     */
    getIntegrationPartnerRaw(requestParameters: GetIntegrationPartnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PartnerResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the complete active public partner configuration. Retired partners return `404`; their retained rows are used only for historical transaction authorization. The response never exposes internal header overrides or infrastructure settings. The `ETag` header and `partner.etag` identify this observed resource version. To change or retire the partner, export the workspace configuration, edit its portable partner resource, plan the aggregate change, and apply that exact plan.
     * Get a trading partner
     */
    getIntegrationPartner(requestParameters: GetIntegrationPartnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PartnerResponse>;

    /**
     * Creates request options for getIntegrationPartnerCapabilities without sending the request
     * @param {number} partnerId Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof PartnersApiInterface
     */
    getIntegrationPartnerCapabilitiesRequestOpts(requestParameters: GetIntegrationPartnerCapabilitiesRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`. Returns the selected partner plus its published incoming and outgoing mapping capabilities. Use this before sending to discover the exact X12 version, functional group, transaction set, source content type, and transform type that are currently configured. `productionReady` and `testReady` report whether the corresponding AS2 destination endpoint is configured; a published mapping can exist before either endpoint is ready.
     * @summary Inspect a partner\'s published mapping capabilities
     * @param {number} partnerId Tenant-scoped partner id returned by &#x60;GET /v1/partners&#x60;.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApiInterface
     */
    getIntegrationPartnerCapabilitiesRaw(requestParameters: GetIntegrationPartnerCapabilitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PartnerCapabilitiesResponse>>;

    /**
     * **Required key scope:** `configuration:read`. Returns the selected partner plus its published incoming and outgoing mapping capabilities. Use this before sending to discover the exact X12 version, functional group, transaction set, source content type, and transform type that are currently configured. `productionReady` and `testReady` report whether the corresponding AS2 destination endpoint is configured; a published mapping can exist before either endpoint is ready.
     * Inspect a partner\'s published mapping capabilities
     */
    getIntegrationPartnerCapabilities(requestParameters: GetIntegrationPartnerCapabilitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PartnerCapabilitiesResponse>;

    /**
     * Creates request options for listIntegrationPartners without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof PartnersApiInterface
     */
    listIntegrationPartnersRequestOpts(requestParameters: ListIntegrationPartnersRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`. Returns the tenant\'s active configured trading partners in workspace order. Retired partners are excluded. Use `partnerId` from this response as the `partnerId` query parameter on `/v1/as2/send`, `/v1/as2/reply`, or `/v1/as2/carbonCopy` when your integration selects the outbound partner. The returned `name` is display metadata; use `copyToPartnerId` for the carbon-copy recipient. Partners can appear before their AS2 profile is complete so teams can publish and test maps during onboarding; `as2ConnectionConfigured` tells you whether live AS2 delivery can use that partner yet.
     * @summary List configured trading partners
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApiInterface
     */
    listIntegrationPartnersRaw(requestParameters: ListIntegrationPartnersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PartnerListResponse>>;

    /**
     * **Required key scope:** `configuration:read`. Returns the tenant\'s active configured trading partners in workspace order. Retired partners are excluded. Use `partnerId` from this response as the `partnerId` query parameter on `/v1/as2/send`, `/v1/as2/reply`, or `/v1/as2/carbonCopy` when your integration selects the outbound partner. The returned `name` is display metadata; use `copyToPartnerId` for the carbon-copy recipient. Partners can appear before their AS2 profile is complete so teams can publish and test maps during onboarding; `as2ConnectionConfigured` tells you whether live AS2 delivery can use that partner yet.
     * List configured trading partners
     */
    listIntegrationPartners(requestParameters: ListIntegrationPartnersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PartnerListResponse>;

}

/**
 *
 */
export class PartnersApi extends runtime.BaseAPI implements PartnersApiInterface {

    /**
     * Creates request options for getIntegrationAs2Profile without sending the request
     */
    async getIntegrationAs2ProfileRequestOpts(requestParameters: GetIntegrationAs2ProfileRequest): Promise<runtime.RequestOpts> {
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


        let urlPath = `/v1/as2/profile`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the safe connection sheet your trading partners need: production and test AS2 URLs and identifiers, X12 sender identities, static network addresses included in the current plan, and active or next public certificates. Private keys, secret ARNs, billing contacts, and internal infrastructure identifiers are never returned. Network capability status is `ready`, `pending`, or `not_included`.
     * Get the tenant\'s public AS2 profile
     */
    async getIntegrationAs2ProfileRaw(requestParameters: GetIntegrationAs2ProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<As2ProfileResponse>> {
        const requestOptions = await this.getIntegrationAs2ProfileRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => As2ProfileResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the safe connection sheet your trading partners need: production and test AS2 URLs and identifiers, X12 sender identities, static network addresses included in the current plan, and active or next public certificates. Private keys, secret ARNs, billing contacts, and internal infrastructure identifiers are never returned. Network capability status is `ready`, `pending`, or `not_included`.
     * Get the tenant\'s public AS2 profile
     */
    async getIntegrationAs2Profile(requestParameters: GetIntegrationAs2ProfileRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<As2ProfileResponse> {
        const response = await this.getIntegrationAs2ProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationPartner without sending the request
     */
    async getIntegrationPartnerRequestOpts(requestParameters: GetIntegrationPartnerRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling getIntegrationPartner().'
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


        let urlPath = `/v1/partners/{partnerId}`;
        urlPath = urlPath.replace('{partnerId}', encodeURIComponent(String(requestParameters['partnerId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the complete active public partner configuration. Retired partners return `404`; their retained rows are used only for historical transaction authorization. The response never exposes internal header overrides or infrastructure settings. The `ETag` header and `partner.etag` identify this observed resource version. To change or retire the partner, export the workspace configuration, edit its portable partner resource, plan the aggregate change, and apply that exact plan.
     * Get a trading partner
     */
    async getIntegrationPartnerRaw(requestParameters: GetIntegrationPartnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PartnerResponse>> {
        const requestOptions = await this.getIntegrationPartnerRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PartnerResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the complete active public partner configuration. Retired partners return `404`; their retained rows are used only for historical transaction authorization. The response never exposes internal header overrides or infrastructure settings. The `ETag` header and `partner.etag` identify this observed resource version. To change or retire the partner, export the workspace configuration, edit its portable partner resource, plan the aggregate change, and apply that exact plan.
     * Get a trading partner
     */
    async getIntegrationPartner(requestParameters: GetIntegrationPartnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PartnerResponse> {
        const response = await this.getIntegrationPartnerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationPartnerCapabilities without sending the request
     */
    async getIntegrationPartnerCapabilitiesRequestOpts(requestParameters: GetIntegrationPartnerCapabilitiesRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['partnerId'] == null) {
            throw new runtime.RequiredError(
                'partnerId',
                'Required parameter "partnerId" was null or undefined when calling getIntegrationPartnerCapabilities().'
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


        let urlPath = `/v1/partners/{partnerId}/capabilities`;
        urlPath = urlPath.replace('{partnerId}', encodeURIComponent(String(requestParameters['partnerId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the selected partner plus its published incoming and outgoing mapping capabilities. Use this before sending to discover the exact X12 version, functional group, transaction set, source content type, and transform type that are currently configured. `productionReady` and `testReady` report whether the corresponding AS2 destination endpoint is configured; a published mapping can exist before either endpoint is ready.
     * Inspect a partner\'s published mapping capabilities
     */
    async getIntegrationPartnerCapabilitiesRaw(requestParameters: GetIntegrationPartnerCapabilitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PartnerCapabilitiesResponse>> {
        const requestOptions = await this.getIntegrationPartnerCapabilitiesRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PartnerCapabilitiesResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the selected partner plus its published incoming and outgoing mapping capabilities. Use this before sending to discover the exact X12 version, functional group, transaction set, source content type, and transform type that are currently configured. `productionReady` and `testReady` report whether the corresponding AS2 destination endpoint is configured; a published mapping can exist before either endpoint is ready.
     * Inspect a partner\'s published mapping capabilities
     */
    async getIntegrationPartnerCapabilities(requestParameters: GetIntegrationPartnerCapabilitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PartnerCapabilitiesResponse> {
        const response = await this.getIntegrationPartnerCapabilitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listIntegrationPartners without sending the request
     */
    async listIntegrationPartnersRequestOpts(requestParameters: ListIntegrationPartnersRequest): Promise<runtime.RequestOpts> {
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


        let urlPath = `/v1/partners`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the tenant\'s active configured trading partners in workspace order. Retired partners are excluded. Use `partnerId` from this response as the `partnerId` query parameter on `/v1/as2/send`, `/v1/as2/reply`, or `/v1/as2/carbonCopy` when your integration selects the outbound partner. The returned `name` is display metadata; use `copyToPartnerId` for the carbon-copy recipient. Partners can appear before their AS2 profile is complete so teams can publish and test maps during onboarding; `as2ConnectionConfigured` tells you whether live AS2 delivery can use that partner yet.
     * List configured trading partners
     */
    async listIntegrationPartnersRaw(requestParameters: ListIntegrationPartnersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PartnerListResponse>> {
        const requestOptions = await this.listIntegrationPartnersRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PartnerListResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`. Returns the tenant\'s active configured trading partners in workspace order. Retired partners are excluded. Use `partnerId` from this response as the `partnerId` query parameter on `/v1/as2/send`, `/v1/as2/reply`, or `/v1/as2/carbonCopy` when your integration selects the outbound partner. The returned `name` is display metadata; use `copyToPartnerId` for the carbon-copy recipient. Partners can appear before their AS2 profile is complete so teams can publish and test maps during onboarding; `as2ConnectionConfigured` tells you whether live AS2 delivery can use that partner yet.
     * List configured trading partners
     */
    async listIntegrationPartners(requestParameters: ListIntegrationPartnersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PartnerListResponse> {
        const response = await this.listIntegrationPartnersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
