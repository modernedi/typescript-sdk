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
    type MappingConfigurationRevisionListResponse,
    MappingConfigurationRevisionListResponseFromJSON,
    MappingConfigurationRevisionListResponseToJSON,
} from '../models/MappingConfigurationRevisionListResponse.js';
import {
    type MappingConfigurationRevisionResponse,
    MappingConfigurationRevisionResponseFromJSON,
    MappingConfigurationRevisionResponseToJSON,
} from '../models/MappingConfigurationRevisionResponse.js';
import {
    type MappingListResponse,
    MappingListResponseFromJSON,
    MappingListResponseToJSON,
} from '../models/MappingListResponse.js';
import {
    type MappingResponse,
    MappingResponseFromJSON,
    MappingResponseToJSON,
} from '../models/MappingResponse.js';

export interface GetIntegrationMappingRequest {
    mappingId: number;
    xRequestId?: string;
}

export interface GetIntegrationMappingConfigurationRevisionRequest {
    mappingId: number;
    revisionId: number;
    xRequestId?: string;
}

export interface ListIntegrationMappingConfigurationRevisionsRequest {
    mappingId: number;
    xRequestId?: string;
    cursor?: string;
    limit?: number;
}

export interface ListIntegrationMappingsRequest {
    xRequestId?: string;
}

/**
 * MappingsApi - interface
 *
 * @export
 * @interface MappingsApiInterface
 */
export interface MappingsApiInterface {
    /**
     * Creates request options for getIntegrationMapping without sending the request
     * @param {number} mappingId Tenant-scoped mapping id.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof MappingsApiInterface
     */
    getIntegrationMappingRequestOpts(requestParameters: GetIntegrationMappingRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns one published map, its complete source text, safe output configuration, delivery category, and observed resource ETag. To change or retire the map, use the aggregate export–plan–apply workflow or the browser editor\'s reviewed deployment flow.
     * @summary Get a published mapping
     * @param {number} mappingId Tenant-scoped mapping id.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappingsApiInterface
     */
    getIntegrationMappingRaw(requestParameters: GetIntegrationMappingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns one published map, its complete source text, safe output configuration, delivery category, and observed resource ETag. To change or retire the map, use the aggregate export–plan–apply workflow or the browser editor\'s reviewed deployment flow.
     * Get a published mapping
     */
    getIntegrationMapping(requestParameters: GetIntegrationMappingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingResponse>;

    /**
     * Creates request options for getIntegrationMappingConfigurationRevision without sending the request
     * @param {number} mappingId Tenant-scoped mapping id.
     * @param {number} revisionId Mapping-configuration revision id returned by the mapping history endpoint.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof MappingsApiInterface
     */
    getIntegrationMappingConfigurationRevisionRequestOpts(requestParameters: GetIntegrationMappingConfigurationRevisionRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the identity, syntax-tree provenance, and complete stored configuration for one immutable historical mapping-configuration revision. The revision must belong to the tenant-scoped mapping in the path.
     * @summary Get a historical mapping configuration revision
     * @param {number} mappingId Tenant-scoped mapping id.
     * @param {number} revisionId Mapping-configuration revision id returned by the mapping history endpoint.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappingsApiInterface
     */
    getIntegrationMappingConfigurationRevisionRaw(requestParameters: GetIntegrationMappingConfigurationRevisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingConfigurationRevisionResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the identity, syntax-tree provenance, and complete stored configuration for one immutable historical mapping-configuration revision. The revision must belong to the tenant-scoped mapping in the path.
     * Get a historical mapping configuration revision
     */
    getIntegrationMappingConfigurationRevision(requestParameters: GetIntegrationMappingConfigurationRevisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingConfigurationRevisionResponse>;

    /**
     * Creates request options for listIntegrationMappingConfigurationRevisions without sending the request
     * @param {number} mappingId Tenant-scoped mapping id.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {string} [cursor] Opaque &#x60;nextCursor&#x60; from the preceding configuration-history page. Omit for the first page.
     * @param {number} [limit] Maximum chronological configuration-revision summaries to return. &#x60;currentRevision&#x60; is returned separately and does not count against this limit.
     * @throws {RequiredError}
     * @memberof MappingsApiInterface
     */
    listIntegrationMappingConfigurationRevisionsRequestOpts(requestParameters: ListIntegrationMappingConfigurationRevisionsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns one page of immutable mapping-configuration revisions, newest first. A configuration-only change creates a distinct revision even when its transform source is unchanged. Page entries intentionally omit source text; fetch one revision by id to preview or diff its transform. Follow `nextCursor` while `hasMore` is true. Cursors are opaque and must be sent back unchanged.  `currentRevision` always contains the complete currently published transform source and exact configuration identity, even when that configuration\'s chronological entry is outside this page. It and `currentEtag` are read from the same locked configuration snapshot, so clients can use them as an authoritative diff baseline. If `currentEtag` changes between page requests, restart from the first page before presenting a coherent history view.  `sourceHash` identifies only transform text. `configurationSha256` identifies the complete immutable mapping configuration and may be `null` for a legacy revision recorded before exact configuration identities. `current` compares the complete configuration identity. The API exposes the retained transform and configuration for inspection, diffing, and reviewed desired-configuration workflows.
     * @summary List a mapping\'s configuration history
     * @param {number} mappingId Tenant-scoped mapping id.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {string} [cursor] Opaque &#x60;nextCursor&#x60; from the preceding configuration-history page. Omit for the first page.
     * @param {number} [limit] Maximum chronological configuration-revision summaries to return. &#x60;currentRevision&#x60; is returned separately and does not count against this limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappingsApiInterface
     */
    listIntegrationMappingConfigurationRevisionsRaw(requestParameters: ListIntegrationMappingConfigurationRevisionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingConfigurationRevisionListResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns one page of immutable mapping-configuration revisions, newest first. A configuration-only change creates a distinct revision even when its transform source is unchanged. Page entries intentionally omit source text; fetch one revision by id to preview or diff its transform. Follow `nextCursor` while `hasMore` is true. Cursors are opaque and must be sent back unchanged.  `currentRevision` always contains the complete currently published transform source and exact configuration identity, even when that configuration\'s chronological entry is outside this page. It and `currentEtag` are read from the same locked configuration snapshot, so clients can use them as an authoritative diff baseline. If `currentEtag` changes between page requests, restart from the first page before presenting a coherent history view.  `sourceHash` identifies only transform text. `configurationSha256` identifies the complete immutable mapping configuration and may be `null` for a legacy revision recorded before exact configuration identities. `current` compares the complete configuration identity. The API exposes the retained transform and configuration for inspection, diffing, and reviewed desired-configuration workflows.
     * List a mapping\'s configuration history
     */
    listIntegrationMappingConfigurationRevisions(requestParameters: ListIntegrationMappingConfigurationRevisionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingConfigurationRevisionListResponse>;

    /**
     * Creates request options for listIntegrationMappings without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof MappingsApiInterface
     */
    listIntegrationMappingsRequestOpts(requestParameters: ListIntegrationMappingsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the tenant\'s published incoming and outgoing maps, including the full transform source, delivery category, and each resource ETag. Infrastructure details are never exposed.
     * @summary List published mappings
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MappingsApiInterface
     */
    listIntegrationMappingsRaw(requestParameters: ListIntegrationMappingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingListResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the tenant\'s published incoming and outgoing maps, including the full transform source, delivery category, and each resource ETag. Infrastructure details are never exposed.
     * List published mappings
     */
    listIntegrationMappings(requestParameters: ListIntegrationMappingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingListResponse>;

}

/**
 *
 */
export class MappingsApi extends runtime.BaseAPI implements MappingsApiInterface {

    /**
     * Creates request options for getIntegrationMapping without sending the request
     */
    async getIntegrationMappingRequestOpts(requestParameters: GetIntegrationMappingRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['mappingId'] == null) {
            throw new runtime.RequiredError(
                'mappingId',
                'Required parameter "mappingId" was null or undefined when calling getIntegrationMapping().'
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


        let urlPath = `/v1/mappings/{mappingId}`;
        urlPath = urlPath.replace('{mappingId}', encodeURIComponent(String(requestParameters['mappingId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns one published map, its complete source text, safe output configuration, delivery category, and observed resource ETag. To change or retire the map, use the aggregate export–plan–apply workflow or the browser editor\'s reviewed deployment flow.
     * Get a published mapping
     */
    async getIntegrationMappingRaw(requestParameters: GetIntegrationMappingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingResponse>> {
        const requestOptions = await this.getIntegrationMappingRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappingResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns one published map, its complete source text, safe output configuration, delivery category, and observed resource ETag. To change or retire the map, use the aggregate export–plan–apply workflow or the browser editor\'s reviewed deployment flow.
     * Get a published mapping
     */
    async getIntegrationMapping(requestParameters: GetIntegrationMappingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingResponse> {
        const response = await this.getIntegrationMappingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationMappingConfigurationRevision without sending the request
     */
    async getIntegrationMappingConfigurationRevisionRequestOpts(requestParameters: GetIntegrationMappingConfigurationRevisionRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['mappingId'] == null) {
            throw new runtime.RequiredError(
                'mappingId',
                'Required parameter "mappingId" was null or undefined when calling getIntegrationMappingConfigurationRevision().'
            );
        }

        if (requestParameters['revisionId'] == null) {
            throw new runtime.RequiredError(
                'revisionId',
                'Required parameter "revisionId" was null or undefined when calling getIntegrationMappingConfigurationRevision().'
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


        let urlPath = `/v1/mappings/{mappingId}/revisions/{revisionId}`;
        urlPath = urlPath.replace('{mappingId}', encodeURIComponent(String(requestParameters['mappingId'])));
        urlPath = urlPath.replace('{revisionId}', encodeURIComponent(String(requestParameters['revisionId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the identity, syntax-tree provenance, and complete stored configuration for one immutable historical mapping-configuration revision. The revision must belong to the tenant-scoped mapping in the path.
     * Get a historical mapping configuration revision
     */
    async getIntegrationMappingConfigurationRevisionRaw(requestParameters: GetIntegrationMappingConfigurationRevisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingConfigurationRevisionResponse>> {
        const requestOptions = await this.getIntegrationMappingConfigurationRevisionRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappingConfigurationRevisionResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the identity, syntax-tree provenance, and complete stored configuration for one immutable historical mapping-configuration revision. The revision must belong to the tenant-scoped mapping in the path.
     * Get a historical mapping configuration revision
     */
    async getIntegrationMappingConfigurationRevision(requestParameters: GetIntegrationMappingConfigurationRevisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingConfigurationRevisionResponse> {
        const response = await this.getIntegrationMappingConfigurationRevisionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listIntegrationMappingConfigurationRevisions without sending the request
     */
    async listIntegrationMappingConfigurationRevisionsRequestOpts(requestParameters: ListIntegrationMappingConfigurationRevisionsRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['mappingId'] == null) {
            throw new runtime.RequiredError(
                'mappingId',
                'Required parameter "mappingId" was null or undefined when calling listIntegrationMappingConfigurationRevisions().'
            );
        }

        const queryParameters: any = {};

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


        let urlPath = `/v1/mappings/{mappingId}/revisions`;
        urlPath = urlPath.replace('{mappingId}', encodeURIComponent(String(requestParameters['mappingId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns one page of immutable mapping-configuration revisions, newest first. A configuration-only change creates a distinct revision even when its transform source is unchanged. Page entries intentionally omit source text; fetch one revision by id to preview or diff its transform. Follow `nextCursor` while `hasMore` is true. Cursors are opaque and must be sent back unchanged.  `currentRevision` always contains the complete currently published transform source and exact configuration identity, even when that configuration\'s chronological entry is outside this page. It and `currentEtag` are read from the same locked configuration snapshot, so clients can use them as an authoritative diff baseline. If `currentEtag` changes between page requests, restart from the first page before presenting a coherent history view.  `sourceHash` identifies only transform text. `configurationSha256` identifies the complete immutable mapping configuration and may be `null` for a legacy revision recorded before exact configuration identities. `current` compares the complete configuration identity. The API exposes the retained transform and configuration for inspection, diffing, and reviewed desired-configuration workflows.
     * List a mapping\'s configuration history
     */
    async listIntegrationMappingConfigurationRevisionsRaw(requestParameters: ListIntegrationMappingConfigurationRevisionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingConfigurationRevisionListResponse>> {
        const requestOptions = await this.listIntegrationMappingConfigurationRevisionsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappingConfigurationRevisionListResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns one page of immutable mapping-configuration revisions, newest first. A configuration-only change creates a distinct revision even when its transform source is unchanged. Page entries intentionally omit source text; fetch one revision by id to preview or diff its transform. Follow `nextCursor` while `hasMore` is true. Cursors are opaque and must be sent back unchanged.  `currentRevision` always contains the complete currently published transform source and exact configuration identity, even when that configuration\'s chronological entry is outside this page. It and `currentEtag` are read from the same locked configuration snapshot, so clients can use them as an authoritative diff baseline. If `currentEtag` changes between page requests, restart from the first page before presenting a coherent history view.  `sourceHash` identifies only transform text. `configurationSha256` identifies the complete immutable mapping configuration and may be `null` for a legacy revision recorded before exact configuration identities. `current` compares the complete configuration identity. The API exposes the retained transform and configuration for inspection, diffing, and reviewed desired-configuration workflows.
     * List a mapping\'s configuration history
     */
    async listIntegrationMappingConfigurationRevisions(requestParameters: ListIntegrationMappingConfigurationRevisionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingConfigurationRevisionListResponse> {
        const response = await this.listIntegrationMappingConfigurationRevisionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listIntegrationMappings without sending the request
     */
    async listIntegrationMappingsRequestOpts(requestParameters: ListIntegrationMappingsRequest): Promise<runtime.RequestOpts> {
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


        let urlPath = `/v1/mappings`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the tenant\'s published incoming and outgoing maps, including the full transform source, delivery category, and each resource ETag. Infrastructure details are never exposed.
     * List published mappings
     */
    async listIntegrationMappingsRaw(requestParameters: ListIntegrationMappingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MappingListResponse>> {
        const requestOptions = await this.listIntegrationMappingsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MappingListResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the tenant\'s published incoming and outgoing maps, including the full transform source, delivery category, and each resource ETag. Infrastructure details are never exposed.
     * List published mappings
     */
    async listIntegrationMappings(requestParameters: ListIntegrationMappingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MappingListResponse> {
        const response = await this.listIntegrationMappingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
