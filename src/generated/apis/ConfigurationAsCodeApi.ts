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
    type ConfigurationAppliedVerificationResponse,
    ConfigurationAppliedVerificationResponseFromJSON,
    ConfigurationAppliedVerificationResponseToJSON,
} from '../models/ConfigurationAppliedVerificationResponse.js';
import {
    type ConfigurationApplyOperationHistoryResponse,
    ConfigurationApplyOperationHistoryResponseFromJSON,
    ConfigurationApplyOperationHistoryResponseToJSON,
} from '../models/ConfigurationApplyOperationHistoryResponse.js';
import {
    type ConfigurationApplyOperationResponse,
    ConfigurationApplyOperationResponseFromJSON,
    ConfigurationApplyOperationResponseToJSON,
} from '../models/ConfigurationApplyOperationResponse.js';
import {
    type ConfigurationApplyRequest,
    ConfigurationApplyRequestFromJSON,
    ConfigurationApplyRequestToJSON,
} from '../models/ConfigurationApplyRequest.js';
import {
    type ConfigurationContextResponse,
    ConfigurationContextResponseFromJSON,
    ConfigurationContextResponseToJSON,
} from '../models/ConfigurationContextResponse.js';
import {
    type ConfigurationExportResponse,
    ConfigurationExportResponseFromJSON,
    ConfigurationExportResponseToJSON,
} from '../models/ConfigurationExportResponse.js';
import {
    type ConfigurationExternalRepositoryResponse,
    ConfigurationExternalRepositoryResponseFromJSON,
    ConfigurationExternalRepositoryResponseToJSON,
} from '../models/ConfigurationExternalRepositoryResponse.js';
import {
    type ConfigurationImportVerificationResponse,
    ConfigurationImportVerificationResponseFromJSON,
    ConfigurationImportVerificationResponseToJSON,
} from '../models/ConfigurationImportVerificationResponse.js';
import {
    type ConfigurationPlanRequest,
    ConfigurationPlanRequestFromJSON,
    ConfigurationPlanRequestToJSON,
} from '../models/ConfigurationPlanRequest.js';
import {
    type ConfigurationPlanResponse,
    ConfigurationPlanResponseFromJSON,
    ConfigurationPlanResponseToJSON,
} from '../models/ConfigurationPlanResponse.js';
import {
    type ConfigurationScenarioRunSelectionResponse,
    ConfigurationScenarioRunSelectionResponseFromJSON,
    ConfigurationScenarioRunSelectionResponseToJSON,
} from '../models/ConfigurationScenarioRunSelectionResponse.js';
import {
    type ConfigurationVerificationRequest,
    ConfigurationVerificationRequestFromJSON,
    ConfigurationVerificationRequestToJSON,
} from '../models/ConfigurationVerificationRequest.js';
import {
    type ConfigurationVerificationResponse,
    ConfigurationVerificationResponseFromJSON,
    ConfigurationVerificationResponseToJSON,
} from '../models/ConfigurationVerificationResponse.js';
import {
    type ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/ErrorResponse.js';

export interface ApplyIntegrationConfigurationRequest {
    idempotencyKey: string;
    ifMatch: string;
    configurationApplyRequest: ConfigurationApplyRequest;
    xRequestId?: string;
}

export interface CancelIntegrationConfigurationVerificationRequest {
    runId: string;
    xRequestId?: string;
}

export interface ExportIntegrationConfigurationRequest {
    xRequestId?: string;
    ifNoneMatch?: string;
}

export interface GetConfigurationScenarioRunSelectionRequest {
    operationId: string;
    bindingId: string;
    xRequestId?: string;
}

export interface GetIntegrationConfigurationAppliedVerificationRequest {
    operationId: string;
    xRequestId?: string;
}

export interface GetIntegrationConfigurationApplyOperationRequest {
    operationId: string;
    xRequestId?: string;
}

export interface GetIntegrationConfigurationContextRequest {
    xRequestId?: string;
}

export interface GetIntegrationConfigurationExternalRepositoryRequest {
    xRequestId?: string;
}

export interface GetIntegrationConfigurationImportVerificationRequest {
    runId: string;
    xRequestId?: string;
}

export interface GetIntegrationConfigurationVerificationRequest {
    runId: string;
    xRequestId?: string;
}

export interface ListIntegrationConfigurationApplyOperationsRequest {
    xRequestId?: string;
    limit?: number;
    cursor?: string;
}

export interface PlanIntegrationConfigurationRequest {
    configurationPlanRequest: ConfigurationPlanRequest;
    xRequestId?: string;
}

export interface VerifyIntegrationConfigurationRequest {
    configurationVerificationRequest: ConfigurationVerificationRequest;
    xRequestId?: string;
}

/**
 * ConfigurationAsCodeApi - interface
 *
 * @export
 * @interface ConfigurationAsCodeApiInterface
 */
export interface ConfigurationAsCodeApiInterface {
    /**
     * Creates request options for applyIntegrationConfiguration without sending the request
     * @param {string} idempotencyKey Required change key scoped to the authenticated API key within the workspace. Persist one stable value with the intended aggregate apply and reuse it through the same API key only with the identical &#x60;planSha256&#x60;, &#x60;If-Match&#x60;, and logical files. A different API key has a separate namespace. Do not generate a new value merely because the first response was lost or returned &#x60;202&#x60;.
     * @param {string} ifMatch Exact quoted &#x60;currentSnapshotEtag&#x60; returned by the successful plan represented by the request\&#39;s &#x60;planSha256&#x60;.
     * @param {ConfigurationApplyRequest} configurationApplyRequest Exact planned desired files plus the plan identity. The logical files and both required headers are part of idempotent request identity.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    applyIntegrationConfigurationRequestOpts(requestParameters: ApplyIntegrationConfigurationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:write`.  Atomically applies the exact desired bundle represented by a successful `POST /v1/configuration/plan` response. Send that response\'s non-null `planSha256` in the body and its exact quoted `currentSnapshotEtag` in `If-Match`. The body accepts the same `files` array as planning, including the optional exported `_state/snapshot.json` advisory file. The advisory file remains untrusted and never overrides live workspace state.  ModernEDI revalidates the package, current snapshot, active syntax-tree catalog, complete scenario impact, and planned operations while holding workspace configuration locks. Any drift fails closed; apply never silently substitutes a newer plan. Database mutations commit as one aggregate change, mapping updates retain immutable revision history, creates use the caller-supplied stable resource keys, and a desired Partner whose key was retired is restored under that same key. Public operations remain `CREATE`, `UPDATE`, and `DELETE`; there is no separate reactivation verb.  `Idempotency-Key` is required and scoped to the authenticated API key within the workspace. Persist one stable key with the intended change and reuse it only with the identical `planSha256`, `If-Match`, and logical files. A replay through that same API key returns the same operation and sets `Idempotency-Replayed: true`; using the key for a different semantic request returns `409 idempotency_key_conflict`, with the original operation\'s ID in `error.details.operationId`. A different API key has a separate idempotency namespace, even for the same workspace.  Locked revalidation failures return the complete freshly evaluated `ConfigurationPlanResponse` under `error.details.plan`. A `412 configuration_plan_stale` means the submitted snapshot or plan identity is no longer current. A `422 configuration_apply_not_applicable` means the refreshed plan has semantic blockers. Neither response mutates workspace configuration; resolve the refreshed diagnostics and call the planning endpoint again before another apply.  A `200` response has `operation.status: SUCCEEDED`. A `202` response has `operation.status: PENDING`: the database transaction has already committed, but the one workspace runtime publication is still being retried. Do not submit a new apply. Poll the URL in `Location` or call `GET /v1/configuration/apply-operations/{operationId}` until the stored operation is `SUCCEEDED`. Request bodies may be at most 16 MiB (16,777,216 bytes).
     * @summary Apply a planned workspace configuration
     * @param {string} idempotencyKey Required change key scoped to the authenticated API key within the workspace. Persist one stable value with the intended aggregate apply and reuse it through the same API key only with the identical &#x60;planSha256&#x60;, &#x60;If-Match&#x60;, and logical files. A different API key has a separate namespace. Do not generate a new value merely because the first response was lost or returned &#x60;202&#x60;.
     * @param {string} ifMatch Exact quoted &#x60;currentSnapshotEtag&#x60; returned by the successful plan represented by the request\&#39;s &#x60;planSha256&#x60;.
     * @param {ConfigurationApplyRequest} configurationApplyRequest Exact planned desired files plus the plan identity. The logical files and both required headers are part of idempotent request identity.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    applyIntegrationConfigurationRaw(requestParameters: ApplyIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationApplyOperationResponse>>;

    /**
     * **Required key scope:** `configuration:write`.  Atomically applies the exact desired bundle represented by a successful `POST /v1/configuration/plan` response. Send that response\'s non-null `planSha256` in the body and its exact quoted `currentSnapshotEtag` in `If-Match`. The body accepts the same `files` array as planning, including the optional exported `_state/snapshot.json` advisory file. The advisory file remains untrusted and never overrides live workspace state.  ModernEDI revalidates the package, current snapshot, active syntax-tree catalog, complete scenario impact, and planned operations while holding workspace configuration locks. Any drift fails closed; apply never silently substitutes a newer plan. Database mutations commit as one aggregate change, mapping updates retain immutable revision history, creates use the caller-supplied stable resource keys, and a desired Partner whose key was retired is restored under that same key. Public operations remain `CREATE`, `UPDATE`, and `DELETE`; there is no separate reactivation verb.  `Idempotency-Key` is required and scoped to the authenticated API key within the workspace. Persist one stable key with the intended change and reuse it only with the identical `planSha256`, `If-Match`, and logical files. A replay through that same API key returns the same operation and sets `Idempotency-Replayed: true`; using the key for a different semantic request returns `409 idempotency_key_conflict`, with the original operation\'s ID in `error.details.operationId`. A different API key has a separate idempotency namespace, even for the same workspace.  Locked revalidation failures return the complete freshly evaluated `ConfigurationPlanResponse` under `error.details.plan`. A `412 configuration_plan_stale` means the submitted snapshot or plan identity is no longer current. A `422 configuration_apply_not_applicable` means the refreshed plan has semantic blockers. Neither response mutates workspace configuration; resolve the refreshed diagnostics and call the planning endpoint again before another apply.  A `200` response has `operation.status: SUCCEEDED`. A `202` response has `operation.status: PENDING`: the database transaction has already committed, but the one workspace runtime publication is still being retried. Do not submit a new apply. Poll the URL in `Location` or call `GET /v1/configuration/apply-operations/{operationId}` until the stored operation is `SUCCEEDED`. Request bodies may be at most 16 MiB (16,777,216 bytes).
     * Apply a planned workspace configuration
     */
    applyIntegrationConfiguration(requestParameters: ApplyIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationApplyOperationResponse>;

    /**
     * Creates request options for cancelIntegrationConfigurationVerification without sending the request
     * @param {string} runId Server verification run ID.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    cancelIntegrationConfigurationVerificationRequestOpts(requestParameters: CancelIntegrationConfigurationVerificationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Only the API key that started the run can cancel it. Cancellation is persistent and prevents subsequent cases; the current bounded case may finish. Terminal results are unchanged.
     * @summary Cancel configuration verification
     * @param {string} runId Server verification run ID.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    cancelIntegrationConfigurationVerificationRaw(requestParameters: CancelIntegrationConfigurationVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationVerificationResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Only the API key that started the run can cancel it. Cancellation is persistent and prevents subsequent cases; the current bounded case may finish. Terminal results are unchanged.
     * Cancel configuration verification
     */
    cancelIntegrationConfigurationVerification(requestParameters: CancelIntegrationConfigurationVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationVerificationResponse>;

    /**
     * Creates request options for exportIntegrationConfiguration without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {string} [ifNoneMatch] Optional current configuration snapshot ETag. A matching strong or weak validator, a matching value in a comma-separated list, or &#x60;*&#x60; returns &#x60;304 Not Modified&#x60; with no body.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    exportIntegrationConfigurationRequestOpts(requestParameters: ExportIntegrationConfigurationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the workspace\'s current AS2 connections, active partners, published mappings, and optional scenario definitions and bindings as a deterministic logical file bundle. The response is JSON; ModernEDI does not create a ZIP archive, temporary download, or server-side filesystem tree. A caller may materialize the returned paths locally. Commit the portable `MANIFEST`, `RESOURCE`, and `SOURCE` files when using source control; `_state/snapshot.json` is observed server state and is normally kept outside desired configuration.  Scenario documents use `spec.source` for their complete authored JSON. Bindings refer to the bundle\'s stable `partnerKey` and `mappingKey` UUIDs, never another workspace\'s numeric IDs. Optional syntax-tree pins remain optional. Retired scenario configuration, immutable runtime revisions and run evidence are excluded. See the [scenario configuration guide](https://www.modernedi.com/docs/scenarios/reference#configuration-and-git) and the linked resource schemas for examples and lifecycle rules.  Every file carries a SHA-256 digest over its logical bytes. JSON file hashes use UTF-8 canonical JSON with object keys sorted recursively and array order preserved. Text file hashes use the exact stored UTF-8 source text, including its line endings. Files are sorted lexicographically by `path`.  `modernedi.json` is the desired-state manifest and its digest is `bundleSha256`. `_state/snapshot.json` records the current database ids and public API ETags that correspond to the portable resource keys; its digest is `snapshotSha256`. `snapshotEtag` is the quoted snapshot digest returned in the HTTP `ETag` header. The manifest, resource documents, and snapshot state use `apiVersion: modernedi.com/v1`.  Server-managed secrets are excluded. Public partner certificates and mapping source are configuration and are included. Treat the result as sensitive workspace configuration, keep the API key on a trusted server, and review customer-authored map source before sharing it.
     * @summary Export the current workspace configuration bundle
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {string} [ifNoneMatch] Optional current configuration snapshot ETag. A matching strong or weak validator, a matching value in a comma-separated list, or &#x60;*&#x60; returns &#x60;304 Not Modified&#x60; with no body.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    exportIntegrationConfigurationRaw(requestParameters: ExportIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationExportResponse | undefined>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the workspace\'s current AS2 connections, active partners, published mappings, and optional scenario definitions and bindings as a deterministic logical file bundle. The response is JSON; ModernEDI does not create a ZIP archive, temporary download, or server-side filesystem tree. A caller may materialize the returned paths locally. Commit the portable `MANIFEST`, `RESOURCE`, and `SOURCE` files when using source control; `_state/snapshot.json` is observed server state and is normally kept outside desired configuration.  Scenario documents use `spec.source` for their complete authored JSON. Bindings refer to the bundle\'s stable `partnerKey` and `mappingKey` UUIDs, never another workspace\'s numeric IDs. Optional syntax-tree pins remain optional. Retired scenario configuration, immutable runtime revisions and run evidence are excluded. See the [scenario configuration guide](https://www.modernedi.com/docs/scenarios/reference#configuration-and-git) and the linked resource schemas for examples and lifecycle rules.  Every file carries a SHA-256 digest over its logical bytes. JSON file hashes use UTF-8 canonical JSON with object keys sorted recursively and array order preserved. Text file hashes use the exact stored UTF-8 source text, including its line endings. Files are sorted lexicographically by `path`.  `modernedi.json` is the desired-state manifest and its digest is `bundleSha256`. `_state/snapshot.json` records the current database ids and public API ETags that correspond to the portable resource keys; its digest is `snapshotSha256`. `snapshotEtag` is the quoted snapshot digest returned in the HTTP `ETag` header. The manifest, resource documents, and snapshot state use `apiVersion: modernedi.com/v1`.  Server-managed secrets are excluded. Public partner certificates and mapping source are configuration and are included. Treat the result as sensitive workspace configuration, keep the API key on a trusted server, and review customer-authored map source before sharing it.
     * Export the current workspace configuration bundle
     */
    exportIntegrationConfiguration(requestParameters: ExportIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationExportResponse | undefined>;

    /**
     * Creates request options for getConfigurationScenarioRunSelection without sending the request
     * @param {string} operationId Immutable tenant-scoped apply operation id returned by POST. It is &#x60;apply-&#x60; followed by a canonical lowercase UUID.
     * @param {string} bindingId The authored ScenarioBinding source\&#39;s metadata.id, not its portable resource UUID or display name.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getConfigurationScenarioRunSelectionRequestOpts(requestParameters: GetConfigurationScenarioRunSelectionRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  After an aggregate apply reaches `SUCCEEDED`, resolve the authored binding ID from `ScenarioBinding` source `metadata.id` into the exact `selection` accepted by `POST /v1/scenario-runs`. The response contains frozen runtime hashes, not source-file hashes. No browser visit, configuration mutation, run creation, or EDI dispatch occurs. Unchanged bindings are selectable after a no-op apply too.  The complete current configuration snapshot must still equal this operation\'s `appliedSnapshotEtag`. A pending apply returns `409 configuration_apply_pending` with `Retry-After`; a different snapshot returns non-retryable `409 configuration_snapshot_changed`. A binding whose referenced runtime inputs are no longer current returns `409 scenario_binding_not_current`. Never silently substitute a later apply or recalculate hashes. Missing, retired, or reserved browser-managed bindings have no public selection.  This is a point-in-time selection, not a workspace lock, a run, or a guarantee of runtime readiness. Run admission rechecks the selected binding and its referenced inputs. Unrelated configuration changes after discovery do not automatically invalidate a run start. Supply any required definition parameters, and persist the final start body and a new run idempotency key before starting. Starting requires `scenario-runs:write`; run reads and actual sends have separate scopes.
     * @summary Select a scenario run from an exact configuration apply
     * @param {string} operationId Immutable tenant-scoped apply operation id returned by POST. It is &#x60;apply-&#x60; followed by a canonical lowercase UUID.
     * @param {string} bindingId The authored ScenarioBinding source\&#39;s metadata.id, not its portable resource UUID or display name.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getConfigurationScenarioRunSelectionRaw(requestParameters: GetConfigurationScenarioRunSelectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationScenarioRunSelectionResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  After an aggregate apply reaches `SUCCEEDED`, resolve the authored binding ID from `ScenarioBinding` source `metadata.id` into the exact `selection` accepted by `POST /v1/scenario-runs`. The response contains frozen runtime hashes, not source-file hashes. No browser visit, configuration mutation, run creation, or EDI dispatch occurs. Unchanged bindings are selectable after a no-op apply too.  The complete current configuration snapshot must still equal this operation\'s `appliedSnapshotEtag`. A pending apply returns `409 configuration_apply_pending` with `Retry-After`; a different snapshot returns non-retryable `409 configuration_snapshot_changed`. A binding whose referenced runtime inputs are no longer current returns `409 scenario_binding_not_current`. Never silently substitute a later apply or recalculate hashes. Missing, retired, or reserved browser-managed bindings have no public selection.  This is a point-in-time selection, not a workspace lock, a run, or a guarantee of runtime readiness. Run admission rechecks the selected binding and its referenced inputs. Unrelated configuration changes after discovery do not automatically invalidate a run start. Supply any required definition parameters, and persist the final start body and a new run idempotency key before starting. Starting requires `scenario-runs:write`; run reads and actual sends have separate scopes.
     * Select a scenario run from an exact configuration apply
     */
    getConfigurationScenarioRunSelection(requestParameters: GetConfigurationScenarioRunSelectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationScenarioRunSelectionResponse>;

    /**
     * Creates request options for getIntegrationConfigurationAppliedVerification without sending the request
     * @param {string} operationId Configuration apply operation ID.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationAppliedVerificationRequestOpts(requestParameters: GetIntegrationConfigurationAppliedVerificationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the server run explicitly selected by verificationRunId during apply, or null when none is retained. Ordinary applies do not require verification.
     * @summary Read verification linked to an apply
     * @param {string} operationId Configuration apply operation ID.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationAppliedVerificationRaw(requestParameters: GetIntegrationConfigurationAppliedVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationAppliedVerificationResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the server run explicitly selected by verificationRunId during apply, or null when none is retained. Ordinary applies do not require verification.
     * Read verification linked to an apply
     */
    getIntegrationConfigurationAppliedVerification(requestParameters: GetIntegrationConfigurationAppliedVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationAppliedVerificationResponse>;

    /**
     * Creates request options for getIntegrationConfigurationApplyOperation without sending the request
     * @param {string} operationId Immutable tenant-scoped apply operation id returned by POST. It is &#x60;apply-&#x60; followed by a canonical lowercase UUID.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationApplyOperationRequestOpts(requestParameters: GetIntegrationConfigurationApplyOperationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the workspace-scoped immutable result of one aggregate apply. Operation ids use `apply-` followed by a canonical UUID. `PENDING` means the database change already committed and only runtime publication remains; `SUCCEEDED` is terminal. Poll only when a prior POST returned `202`, honoring its `Retry-After` value.
     * @summary Get a configuration apply operation
     * @param {string} operationId Immutable tenant-scoped apply operation id returned by POST. It is &#x60;apply-&#x60; followed by a canonical lowercase UUID.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationApplyOperationRaw(requestParameters: GetIntegrationConfigurationApplyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationApplyOperationResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the workspace-scoped immutable result of one aggregate apply. Operation ids use `apply-` followed by a canonical UUID. `PENDING` means the database change already committed and only runtime publication remains; `SUCCEEDED` is terminal. Poll only when a prior POST returned `202`, honoring its `Retry-After` value.
     * Get a configuration apply operation
     */
    getIntegrationConfigurationApplyOperation(requestParameters: GetIntegrationConfigurationApplyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationApplyOperationResponse>;

    /**
     * Creates request options for getIntegrationConfigurationContext without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationContextRequestOpts(requestParameters: GetIntegrationConfigurationContextRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Confirms the workspace ID, calling key ID, label, and currently granted scopes using the same authentication as every configuration operation. Automation can compare these IDs with its approved target before proceeding. The workspace is derived from the key, not a request parameter. This does not enumerate users, other workspaces, or other keys, and never returns the key value, prefix, hash, or credentials. It is not an authorization lease; every subsequent request is independently authorized.
     * @summary Identify the calling workspace and API key
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationContextRaw(requestParameters: GetIntegrationConfigurationContextRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationContextResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Confirms the workspace ID, calling key ID, label, and currently granted scopes using the same authentication as every configuration operation. Automation can compare these IDs with its approved target before proceeding. The workspace is derived from the key, not a request parameter. This does not enumerate users, other workspaces, or other keys, and never returns the key value, prefix, hash, or credentials. It is not an authorization lease; every subsequent request is independently authorized.
     * Identify the calling workspace and API key
     */
    getIntegrationConfigurationContext(requestParameters: GetIntegrationConfigurationContextRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationContextResponse>;

    /**
     * Creates request options for getIntegrationConfigurationExternalRepository without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationExternalRepositoryRequestOpts(requestParameters: GetIntegrationConfigurationExternalRepositoryRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the connection already configured by a workspace owner, its automatic synchronization status, last synchronized commits, and optional import-test reference. `connected: false` is normal when Git is not configured. This is a database status read, not a remote Git fetch or synchronization trigger. The commit fields describe the last successful synchronization; they are not an attestation of the current remote branch HEAD. Connecting, disconnecting, changing import-test policy, retrying, and resolving conflicts remain owner actions in the browser. Provider tokens, usernames, secret-store references, and internal lease state are excluded.
     * @summary Read external repository synchronization status
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationExternalRepositoryRaw(requestParameters: GetIntegrationConfigurationExternalRepositoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationExternalRepositoryResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns the connection already configured by a workspace owner, its automatic synchronization status, last synchronized commits, and optional import-test reference. `connected: false` is normal when Git is not configured. This is a database status read, not a remote Git fetch or synchronization trigger. The commit fields describe the last successful synchronization; they are not an attestation of the current remote branch HEAD. Connecting, disconnecting, changing import-test policy, retrying, and resolving conflicts remain owner actions in the browser. Provider tokens, usernames, secret-store references, and internal lease state are excluded.
     * Read external repository synchronization status
     */
    getIntegrationConfigurationExternalRepository(requestParameters: GetIntegrationConfigurationExternalRepositoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationExternalRepositoryResponse>;

    /**
     * Creates request options for getIntegrationConfigurationImportVerification without sending the request
     * @param {string} runId
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationImportVerificationRequestOpts(requestParameters: GetIntegrationConfigurationImportVerificationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Use the `importVerification.runId` from the connection status. Returns the existing server-owned verification result for that connection\'s current import attempt. A `200` with `run: null` means the attempt was reserved but no retained result is available (for example, admission did not succeed or evidence expired); it never means a pass. A different attempt, disconnected repository, unknown ID, or another workspace\'s ID returns `404 verification_not_found`. Re-read connection status if the attempt changes. This endpoint does not run cases, retry an import, apply configuration, or send EDI. Previously retained results can still be read using the ordinary verification-run endpoint.
     * @summary Read the current external import\'s saved-case evidence
     * @param {string} runId
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationImportVerificationRaw(requestParameters: GetIntegrationConfigurationImportVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationImportVerificationResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Use the `importVerification.runId` from the connection status. Returns the existing server-owned verification result for that connection\'s current import attempt. A `200` with `run: null` means the attempt was reserved but no retained result is available (for example, admission did not succeed or evidence expired); it never means a pass. A different attempt, disconnected repository, unknown ID, or another workspace\'s ID returns `404 verification_not_found`. Re-read connection status if the attempt changes. This endpoint does not run cases, retry an import, apply configuration, or send EDI. Previously retained results can still be read using the ordinary verification-run endpoint.
     * Read the current external import\'s saved-case evidence
     */
    getIntegrationConfigurationImportVerification(requestParameters: GetIntegrationConfigurationImportVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationImportVerificationResponse>;

    /**
     * Creates request options for getIntegrationConfigurationVerification without sending the request
     * @param {string} runId Server verification run ID.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationVerificationRequestOpts(requestParameters: GetIntegrationConfigurationVerificationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Returns persisted outcomes and freshly checked configuration, evaluator and catalog identity. Any read-capable key in the same workspace can read a run.
     * @summary Read configuration verification
     * @param {string} runId Server verification run ID.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    getIntegrationConfigurationVerificationRaw(requestParameters: GetIntegrationConfigurationVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationVerificationResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Returns persisted outcomes and freshly checked configuration, evaluator and catalog identity. Any read-capable key in the same workspace can read a run.
     * Read configuration verification
     */
    getIntegrationConfigurationVerification(requestParameters: GetIntegrationConfigurationVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationVerificationResponse>;

    /**
     * Creates request options for listIntegrationConfigurationApplyOperations without sending the request
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {number} [limit] Maximum entries per page. Supply at most once.
     * @param {string} [cursor] Opaque nextCursor from the preceding page. Supply at most once; omit for the first page.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    listIntegrationConfigurationApplyOperationsRequestOpts(requestParameters: ListIntegrationConfigurationApplyOperationsRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Lists the same workspace-wide change history shown in the browser, including browser, API, and automatic Git imports. Newest requests come first, with operation ID breaking timestamp ties. Entries are compact summaries; fetch the existing operation endpoint for its full change list. Pass `nextCursor` unchanged to retrieve the next page and stop when it is null. Cursors belong to one workspace. Pagination is not a frozen snapshot: new changes can arrive during a scan, so re-read the first page when checking for drift. This endpoint does not advance pending publications or mutate configuration.
     * @summary List workspace configuration changes
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {number} [limit] Maximum entries per page. Supply at most once.
     * @param {string} [cursor] Opaque nextCursor from the preceding page. Supply at most once; omit for the first page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    listIntegrationConfigurationApplyOperationsRaw(requestParameters: ListIntegrationConfigurationApplyOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationApplyOperationHistoryResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Lists the same workspace-wide change history shown in the browser, including browser, API, and automatic Git imports. Newest requests come first, with operation ID breaking timestamp ties. Entries are compact summaries; fetch the existing operation endpoint for its full change list. Pass `nextCursor` unchanged to retrieve the next page and stop when it is null. Cursors belong to one workspace. Pagination is not a frozen snapshot: new changes can arrive during a scan, so re-read the first page when checking for drift. This endpoint does not advance pending publications or mutate configuration.
     * List workspace configuration changes
     */
    listIntegrationConfigurationApplyOperations(requestParameters: ListIntegrationConfigurationApplyOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationApplyOperationHistoryResponse>;

    /**
     * Creates request options for planIntegrationConfiguration without sending the request
     * @param {ConfigurationPlanRequest} configurationPlanRequest Portable desired-state files, optionally accompanied by the one advisory &#x60;_state/snapshot.json&#x60; file returned by configuration export. The advisory file is never mutation authority.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    planIntegrationConfigurationRequestOpts(requestParameters: PlanIntegrationConfigurationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Compares a portable desired configuration bundle with the workspace\'s current AS2 connections, active partners, published mappings, and optional scenario definitions and bindings. Planning is read-only: it does not create, update, retire, publish, or reapply anything, and it does not require an idempotency key.  Submit exactly one `MANIFEST` at `modernedi.json` plus every `RESOURCE` and `SOURCE` file inventoried by that manifest. You may pass the `files` array from configuration export unchanged: its single `_state/snapshot.json` `STATE` file is accepted as advisory context, but current workspace configuration remains authoritative. A stale advisory snapshot adds the `BASE_SNAPSHOT_STALE` warning; it does not make old database ids or ETags desired state. ModernEDI verifies safe paths, closed JSON objects, canonical file hashes, manifest inventory, stable resource keys, cross-resource references, mapping source, aggregate runtime limits, and the active syntax-tree catalog before comparing desired and current state.  A structurally valid bundle always receives `200`, even when the desired state cannot be applied. Inspect `applicable` and every entry in `diagnostics`; each diagnostic carries an RFC 6901 JSON Pointer into the submitted request. `operations` contains only `CREATE`, `UPDATE`, and `DELETE` entries. `summary.unchanged` reports resources omitted from that array because their complete portable configuration is already current.  Scenario bindings are compiled against the complete proposed configuration, so one apply can create their partners and maps too. Changing a referenced resource adds a binding `UPDATE` with unchanged authored content hashes: this creates a fresh runtime revision in the same transaction. `refreshScenarioBindings` explicitly requests that behavior for otherwise unchanged binding resource keys; include the same array in the apply request. Export followed by plan without refresh requests is a no-op.  `scenarioImpactComplete` is false when ModernEDI could not safely determine every affected applied scenario. `affectedScenarios` distinguishes bindings refreshed by this apply (`REAPPLIED_BY_APPLY`), retired by it (`RETIRED_BY_APPLY`), or requiring a separate reapplication (`REAPPLY_REQUIRED`). `affectedRuns` identifies ACTIVE runs pinned to impacted binding revisions; those runs must be cancelled or completed before re-planning. `planSha256` is present only when the plan is applicable and binds the desired bundle, current snapshot, validation context, operations, and scenario impact. A later apply request must still prove that exact plan is current; this endpoint grants no mutation authority.  Common planning diagnostics have deliberate recovery paths:  - `BASE_SNAPSHOT_STALE` is a warning that the optional exported snapshot no longer matches the workspace. The returned plan still uses live current state. - `STAGED_CHANGE_REQUIRED` is an error when a natural identity such as an AS2 identifier or X12 sender identity belongs to another stable resource key. Release it from the current owner in a separate apply, export again, and then plan the transfer. - `ACTIVE_SCENARIO_RUNS_AFFECTED` is an error when a change would alter authority used by an ACTIVE scenario run. Complete or cancel every listed `affectedRuns` entry and plan again.  Malformed envelopes, unsafe or duplicate paths, unsupported file roles, a noncanonical advisory `STATE` file, hash mismatches, and inconsistent manifests return `400 configuration_plan_invalid` with the same diagnostic shape in `error.details.diagnostics`. Request bodies may be at most 16 MiB (16,777,216 bytes).
     * @summary Plan desired workspace configuration
     * @param {ConfigurationPlanRequest} configurationPlanRequest Portable desired-state files, optionally accompanied by the one advisory &#x60;_state/snapshot.json&#x60; file returned by configuration export. The advisory file is never mutation authority.
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    planIntegrationConfigurationRaw(requestParameters: PlanIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationPlanResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Compares a portable desired configuration bundle with the workspace\'s current AS2 connections, active partners, published mappings, and optional scenario definitions and bindings. Planning is read-only: it does not create, update, retire, publish, or reapply anything, and it does not require an idempotency key.  Submit exactly one `MANIFEST` at `modernedi.json` plus every `RESOURCE` and `SOURCE` file inventoried by that manifest. You may pass the `files` array from configuration export unchanged: its single `_state/snapshot.json` `STATE` file is accepted as advisory context, but current workspace configuration remains authoritative. A stale advisory snapshot adds the `BASE_SNAPSHOT_STALE` warning; it does not make old database ids or ETags desired state. ModernEDI verifies safe paths, closed JSON objects, canonical file hashes, manifest inventory, stable resource keys, cross-resource references, mapping source, aggregate runtime limits, and the active syntax-tree catalog before comparing desired and current state.  A structurally valid bundle always receives `200`, even when the desired state cannot be applied. Inspect `applicable` and every entry in `diagnostics`; each diagnostic carries an RFC 6901 JSON Pointer into the submitted request. `operations` contains only `CREATE`, `UPDATE`, and `DELETE` entries. `summary.unchanged` reports resources omitted from that array because their complete portable configuration is already current.  Scenario bindings are compiled against the complete proposed configuration, so one apply can create their partners and maps too. Changing a referenced resource adds a binding `UPDATE` with unchanged authored content hashes: this creates a fresh runtime revision in the same transaction. `refreshScenarioBindings` explicitly requests that behavior for otherwise unchanged binding resource keys; include the same array in the apply request. Export followed by plan without refresh requests is a no-op.  `scenarioImpactComplete` is false when ModernEDI could not safely determine every affected applied scenario. `affectedScenarios` distinguishes bindings refreshed by this apply (`REAPPLIED_BY_APPLY`), retired by it (`RETIRED_BY_APPLY`), or requiring a separate reapplication (`REAPPLY_REQUIRED`). `affectedRuns` identifies ACTIVE runs pinned to impacted binding revisions; those runs must be cancelled or completed before re-planning. `planSha256` is present only when the plan is applicable and binds the desired bundle, current snapshot, validation context, operations, and scenario impact. A later apply request must still prove that exact plan is current; this endpoint grants no mutation authority.  Common planning diagnostics have deliberate recovery paths:  - `BASE_SNAPSHOT_STALE` is a warning that the optional exported snapshot no longer matches the workspace. The returned plan still uses live current state. - `STAGED_CHANGE_REQUIRED` is an error when a natural identity such as an AS2 identifier or X12 sender identity belongs to another stable resource key. Release it from the current owner in a separate apply, export again, and then plan the transfer. - `ACTIVE_SCENARIO_RUNS_AFFECTED` is an error when a change would alter authority used by an ACTIVE scenario run. Complete or cancel every listed `affectedRuns` entry and plan again.  Malformed envelopes, unsafe or duplicate paths, unsupported file roles, a noncanonical advisory `STATE` file, hash mismatches, and inconsistent manifests return `400 configuration_plan_invalid` with the same diagnostic shape in `error.details.diagnostics`. Request bodies may be at most 16 MiB (16,777,216 bytes).
     * Plan desired workspace configuration
     */
    planIntegrationConfiguration(requestParameters: PlanIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationPlanResponse>;

    /**
     * Creates request options for verifyIntegrationConfiguration without sending the request
     * @param {ConfigurationVerificationRequest} configurationVerificationRequest
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    verifyIntegrationConfigurationRequestOpts(requestParameters: VerifyIntegrationConfigurationRequest): Promise<runtime.RequestOpts>;

    /**
     * **Required key scope:** `configuration:read`.  Optional and side-effect-free: re-plans the submitted bundle and verifies all saved mapping cases on the server. Supports up to 25 tested mappings and 100 cases in a 30-second suite. Uses the same incoming/JSLT/XSLT engines as Mapper reviews. Mappings without cases are counted explicitly. No raw input/output is retained. One active verification and 30 starts per workspace per hour are shared with browser reviews. Same requestId and identical content replay the persisted run. This endpoint never applies configuration or executes AS2/scenarios. A network interruption does not imply cancellation; GET the deterministic verify-{requestId} run before retrying.
     * @summary Verify saved cases in an exact configuration plan
     * @param {ConfigurationVerificationRequest} configurationVerificationRequest
     * @param {string} [xRequestId] Optional caller correlation id. ModernEDI preserves a value that matches this safe format and returns it in the response &#x60;X-Request-Id&#x60; header; otherwise ModernEDI generates a replacement. Always log the response value because it is the authoritative id for support correlation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationAsCodeApiInterface
     */
    verifyIntegrationConfigurationRaw(requestParameters: VerifyIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationVerificationResponse>>;

    /**
     * **Required key scope:** `configuration:read`.  Optional and side-effect-free: re-plans the submitted bundle and verifies all saved mapping cases on the server. Supports up to 25 tested mappings and 100 cases in a 30-second suite. Uses the same incoming/JSLT/XSLT engines as Mapper reviews. Mappings without cases are counted explicitly. No raw input/output is retained. One active verification and 30 starts per workspace per hour are shared with browser reviews. Same requestId and identical content replay the persisted run. This endpoint never applies configuration or executes AS2/scenarios. A network interruption does not imply cancellation; GET the deterministic verify-{requestId} run before retrying.
     * Verify saved cases in an exact configuration plan
     */
    verifyIntegrationConfiguration(requestParameters: VerifyIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationVerificationResponse>;

}

/**
 *
 */
export class ConfigurationAsCodeApi extends runtime.BaseAPI implements ConfigurationAsCodeApiInterface {

    /**
     * Creates request options for applyIntegrationConfiguration without sending the request
     */
    async applyIntegrationConfigurationRequestOpts(requestParameters: ApplyIntegrationConfigurationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling applyIntegrationConfiguration().'
            );
        }

        if (requestParameters['ifMatch'] == null) {
            throw new runtime.RequiredError(
                'ifMatch',
                'Required parameter "ifMatch" was null or undefined when calling applyIntegrationConfiguration().'
            );
        }

        if (requestParameters['configurationApplyRequest'] == null) {
            throw new runtime.RequiredError(
                'configurationApplyRequest',
                'Required parameter "configurationApplyRequest" was null or undefined when calling applyIntegrationConfiguration().'
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


        let urlPath = `/v1/configuration/apply`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConfigurationApplyRequestToJSON(requestParameters['configurationApplyRequest']),
        };
    }

    /**
     * **Required key scope:** `configuration:write`.  Atomically applies the exact desired bundle represented by a successful `POST /v1/configuration/plan` response. Send that response\'s non-null `planSha256` in the body and its exact quoted `currentSnapshotEtag` in `If-Match`. The body accepts the same `files` array as planning, including the optional exported `_state/snapshot.json` advisory file. The advisory file remains untrusted and never overrides live workspace state.  ModernEDI revalidates the package, current snapshot, active syntax-tree catalog, complete scenario impact, and planned operations while holding workspace configuration locks. Any drift fails closed; apply never silently substitutes a newer plan. Database mutations commit as one aggregate change, mapping updates retain immutable revision history, creates use the caller-supplied stable resource keys, and a desired Partner whose key was retired is restored under that same key. Public operations remain `CREATE`, `UPDATE`, and `DELETE`; there is no separate reactivation verb.  `Idempotency-Key` is required and scoped to the authenticated API key within the workspace. Persist one stable key with the intended change and reuse it only with the identical `planSha256`, `If-Match`, and logical files. A replay through that same API key returns the same operation and sets `Idempotency-Replayed: true`; using the key for a different semantic request returns `409 idempotency_key_conflict`, with the original operation\'s ID in `error.details.operationId`. A different API key has a separate idempotency namespace, even for the same workspace.  Locked revalidation failures return the complete freshly evaluated `ConfigurationPlanResponse` under `error.details.plan`. A `412 configuration_plan_stale` means the submitted snapshot or plan identity is no longer current. A `422 configuration_apply_not_applicable` means the refreshed plan has semantic blockers. Neither response mutates workspace configuration; resolve the refreshed diagnostics and call the planning endpoint again before another apply.  A `200` response has `operation.status: SUCCEEDED`. A `202` response has `operation.status: PENDING`: the database transaction has already committed, but the one workspace runtime publication is still being retried. Do not submit a new apply. Poll the URL in `Location` or call `GET /v1/configuration/apply-operations/{operationId}` until the stored operation is `SUCCEEDED`. Request bodies may be at most 16 MiB (16,777,216 bytes).
     * Apply a planned workspace configuration
     */
    async applyIntegrationConfigurationRaw(requestParameters: ApplyIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationApplyOperationResponse>> {
        const requestOptions = await this.applyIntegrationConfigurationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationApplyOperationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:write`.  Atomically applies the exact desired bundle represented by a successful `POST /v1/configuration/plan` response. Send that response\'s non-null `planSha256` in the body and its exact quoted `currentSnapshotEtag` in `If-Match`. The body accepts the same `files` array as planning, including the optional exported `_state/snapshot.json` advisory file. The advisory file remains untrusted and never overrides live workspace state.  ModernEDI revalidates the package, current snapshot, active syntax-tree catalog, complete scenario impact, and planned operations while holding workspace configuration locks. Any drift fails closed; apply never silently substitutes a newer plan. Database mutations commit as one aggregate change, mapping updates retain immutable revision history, creates use the caller-supplied stable resource keys, and a desired Partner whose key was retired is restored under that same key. Public operations remain `CREATE`, `UPDATE`, and `DELETE`; there is no separate reactivation verb.  `Idempotency-Key` is required and scoped to the authenticated API key within the workspace. Persist one stable key with the intended change and reuse it only with the identical `planSha256`, `If-Match`, and logical files. A replay through that same API key returns the same operation and sets `Idempotency-Replayed: true`; using the key for a different semantic request returns `409 idempotency_key_conflict`, with the original operation\'s ID in `error.details.operationId`. A different API key has a separate idempotency namespace, even for the same workspace.  Locked revalidation failures return the complete freshly evaluated `ConfigurationPlanResponse` under `error.details.plan`. A `412 configuration_plan_stale` means the submitted snapshot or plan identity is no longer current. A `422 configuration_apply_not_applicable` means the refreshed plan has semantic blockers. Neither response mutates workspace configuration; resolve the refreshed diagnostics and call the planning endpoint again before another apply.  A `200` response has `operation.status: SUCCEEDED`. A `202` response has `operation.status: PENDING`: the database transaction has already committed, but the one workspace runtime publication is still being retried. Do not submit a new apply. Poll the URL in `Location` or call `GET /v1/configuration/apply-operations/{operationId}` until the stored operation is `SUCCEEDED`. Request bodies may be at most 16 MiB (16,777,216 bytes).
     * Apply a planned workspace configuration
     */
    async applyIntegrationConfiguration(requestParameters: ApplyIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationApplyOperationResponse> {
        const response = await this.applyIntegrationConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for cancelIntegrationConfigurationVerification without sending the request
     */
    async cancelIntegrationConfigurationVerificationRequestOpts(requestParameters: CancelIntegrationConfigurationVerificationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling cancelIntegrationConfigurationVerification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/configuration/verification-runs/{runId}/cancel`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Only the API key that started the run can cancel it. Cancellation is persistent and prevents subsequent cases; the current bounded case may finish. Terminal results are unchanged.
     * Cancel configuration verification
     */
    async cancelIntegrationConfigurationVerificationRaw(requestParameters: CancelIntegrationConfigurationVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationVerificationResponse>> {
        const requestOptions = await this.cancelIntegrationConfigurationVerificationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationVerificationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Only the API key that started the run can cancel it. Cancellation is persistent and prevents subsequent cases; the current bounded case may finish. Terminal results are unchanged.
     * Cancel configuration verification
     */
    async cancelIntegrationConfigurationVerification(requestParameters: CancelIntegrationConfigurationVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationVerificationResponse> {
        const response = await this.cancelIntegrationConfigurationVerificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for exportIntegrationConfiguration without sending the request
     */
    async exportIntegrationConfigurationRequestOpts(requestParameters: ExportIntegrationConfigurationRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
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


        let urlPath = `/v1/configuration/export`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the workspace\'s current AS2 connections, active partners, published mappings, and optional scenario definitions and bindings as a deterministic logical file bundle. The response is JSON; ModernEDI does not create a ZIP archive, temporary download, or server-side filesystem tree. A caller may materialize the returned paths locally. Commit the portable `MANIFEST`, `RESOURCE`, and `SOURCE` files when using source control; `_state/snapshot.json` is observed server state and is normally kept outside desired configuration.  Scenario documents use `spec.source` for their complete authored JSON. Bindings refer to the bundle\'s stable `partnerKey` and `mappingKey` UUIDs, never another workspace\'s numeric IDs. Optional syntax-tree pins remain optional. Retired scenario configuration, immutable runtime revisions and run evidence are excluded. See the [scenario configuration guide](https://www.modernedi.com/docs/scenarios/reference#configuration-and-git) and the linked resource schemas for examples and lifecycle rules.  Every file carries a SHA-256 digest over its logical bytes. JSON file hashes use UTF-8 canonical JSON with object keys sorted recursively and array order preserved. Text file hashes use the exact stored UTF-8 source text, including its line endings. Files are sorted lexicographically by `path`.  `modernedi.json` is the desired-state manifest and its digest is `bundleSha256`. `_state/snapshot.json` records the current database ids and public API ETags that correspond to the portable resource keys; its digest is `snapshotSha256`. `snapshotEtag` is the quoted snapshot digest returned in the HTTP `ETag` header. The manifest, resource documents, and snapshot state use `apiVersion: modernedi.com/v1`.  Server-managed secrets are excluded. Public partner certificates and mapping source are configuration and are included. Treat the result as sensitive workspace configuration, keep the API key on a trusted server, and review customer-authored map source before sharing it.
     * Export the current workspace configuration bundle
     */
    async exportIntegrationConfigurationRaw(requestParameters: ExportIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationExportResponse | undefined>> {
        const requestOptions = await this.exportIntegrationConfigurationRequestOpts(requestParameters);
        const response = await this.request({ ...requestOptions, acceptedStatuses: [304] }, initOverrides);
        if (response.status === 304) return { raw: response, value: async () => undefined };

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationExportResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the workspace\'s current AS2 connections, active partners, published mappings, and optional scenario definitions and bindings as a deterministic logical file bundle. The response is JSON; ModernEDI does not create a ZIP archive, temporary download, or server-side filesystem tree. A caller may materialize the returned paths locally. Commit the portable `MANIFEST`, `RESOURCE`, and `SOURCE` files when using source control; `_state/snapshot.json` is observed server state and is normally kept outside desired configuration.  Scenario documents use `spec.source` for their complete authored JSON. Bindings refer to the bundle\'s stable `partnerKey` and `mappingKey` UUIDs, never another workspace\'s numeric IDs. Optional syntax-tree pins remain optional. Retired scenario configuration, immutable runtime revisions and run evidence are excluded. See the [scenario configuration guide](https://www.modernedi.com/docs/scenarios/reference#configuration-and-git) and the linked resource schemas for examples and lifecycle rules.  Every file carries a SHA-256 digest over its logical bytes. JSON file hashes use UTF-8 canonical JSON with object keys sorted recursively and array order preserved. Text file hashes use the exact stored UTF-8 source text, including its line endings. Files are sorted lexicographically by `path`.  `modernedi.json` is the desired-state manifest and its digest is `bundleSha256`. `_state/snapshot.json` records the current database ids and public API ETags that correspond to the portable resource keys; its digest is `snapshotSha256`. `snapshotEtag` is the quoted snapshot digest returned in the HTTP `ETag` header. The manifest, resource documents, and snapshot state use `apiVersion: modernedi.com/v1`.  Server-managed secrets are excluded. Public partner certificates and mapping source are configuration and are included. Treat the result as sensitive workspace configuration, keep the API key on a trusted server, and review customer-authored map source before sharing it.
     * Export the current workspace configuration bundle
     */
    async exportIntegrationConfiguration(requestParameters: ExportIntegrationConfigurationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationExportResponse | undefined> {
        const response = await this.exportIntegrationConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getConfigurationScenarioRunSelection without sending the request
     */
    async getConfigurationScenarioRunSelectionRequestOpts(requestParameters: GetConfigurationScenarioRunSelectionRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['operationId'] == null) {
            throw new runtime.RequiredError(
                'operationId',
                'Required parameter "operationId" was null or undefined when calling getConfigurationScenarioRunSelection().'
            );
        }

        if (requestParameters['bindingId'] == null) {
            throw new runtime.RequiredError(
                'bindingId',
                'Required parameter "bindingId" was null or undefined when calling getConfigurationScenarioRunSelection().'
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


        let urlPath = `/v1/configuration/apply-operations/{operationId}/scenario-run-selections/{bindingId}`;
        urlPath = urlPath.replace('{operationId}', encodeURIComponent(String(requestParameters['operationId'])));
        urlPath = urlPath.replace('{bindingId}', encodeURIComponent(String(requestParameters['bindingId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  After an aggregate apply reaches `SUCCEEDED`, resolve the authored binding ID from `ScenarioBinding` source `metadata.id` into the exact `selection` accepted by `POST /v1/scenario-runs`. The response contains frozen runtime hashes, not source-file hashes. No browser visit, configuration mutation, run creation, or EDI dispatch occurs. Unchanged bindings are selectable after a no-op apply too.  The complete current configuration snapshot must still equal this operation\'s `appliedSnapshotEtag`. A pending apply returns `409 configuration_apply_pending` with `Retry-After`; a different snapshot returns non-retryable `409 configuration_snapshot_changed`. A binding whose referenced runtime inputs are no longer current returns `409 scenario_binding_not_current`. Never silently substitute a later apply or recalculate hashes. Missing, retired, or reserved browser-managed bindings have no public selection.  This is a point-in-time selection, not a workspace lock, a run, or a guarantee of runtime readiness. Run admission rechecks the selected binding and its referenced inputs. Unrelated configuration changes after discovery do not automatically invalidate a run start. Supply any required definition parameters, and persist the final start body and a new run idempotency key before starting. Starting requires `scenario-runs:write`; run reads and actual sends have separate scopes.
     * Select a scenario run from an exact configuration apply
     */
    async getConfigurationScenarioRunSelectionRaw(requestParameters: GetConfigurationScenarioRunSelectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationScenarioRunSelectionResponse>> {
        const requestOptions = await this.getConfigurationScenarioRunSelectionRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationScenarioRunSelectionResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  After an aggregate apply reaches `SUCCEEDED`, resolve the authored binding ID from `ScenarioBinding` source `metadata.id` into the exact `selection` accepted by `POST /v1/scenario-runs`. The response contains frozen runtime hashes, not source-file hashes. No browser visit, configuration mutation, run creation, or EDI dispatch occurs. Unchanged bindings are selectable after a no-op apply too.  The complete current configuration snapshot must still equal this operation\'s `appliedSnapshotEtag`. A pending apply returns `409 configuration_apply_pending` with `Retry-After`; a different snapshot returns non-retryable `409 configuration_snapshot_changed`. A binding whose referenced runtime inputs are no longer current returns `409 scenario_binding_not_current`. Never silently substitute a later apply or recalculate hashes. Missing, retired, or reserved browser-managed bindings have no public selection.  This is a point-in-time selection, not a workspace lock, a run, or a guarantee of runtime readiness. Run admission rechecks the selected binding and its referenced inputs. Unrelated configuration changes after discovery do not automatically invalidate a run start. Supply any required definition parameters, and persist the final start body and a new run idempotency key before starting. Starting requires `scenario-runs:write`; run reads and actual sends have separate scopes.
     * Select a scenario run from an exact configuration apply
     */
    async getConfigurationScenarioRunSelection(requestParameters: GetConfigurationScenarioRunSelectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationScenarioRunSelectionResponse> {
        const response = await this.getConfigurationScenarioRunSelectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationConfigurationAppliedVerification without sending the request
     */
    async getIntegrationConfigurationAppliedVerificationRequestOpts(requestParameters: GetIntegrationConfigurationAppliedVerificationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['operationId'] == null) {
            throw new runtime.RequiredError(
                'operationId',
                'Required parameter "operationId" was null or undefined when calling getIntegrationConfigurationAppliedVerification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/configuration/apply-operations/{operationId}/verification`;
        urlPath = urlPath.replace('{operationId}', encodeURIComponent(String(requestParameters['operationId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the server run explicitly selected by verificationRunId during apply, or null when none is retained. Ordinary applies do not require verification.
     * Read verification linked to an apply
     */
    async getIntegrationConfigurationAppliedVerificationRaw(requestParameters: GetIntegrationConfigurationAppliedVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationAppliedVerificationResponse>> {
        const requestOptions = await this.getIntegrationConfigurationAppliedVerificationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationAppliedVerificationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the server run explicitly selected by verificationRunId during apply, or null when none is retained. Ordinary applies do not require verification.
     * Read verification linked to an apply
     */
    async getIntegrationConfigurationAppliedVerification(requestParameters: GetIntegrationConfigurationAppliedVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationAppliedVerificationResponse> {
        const response = await this.getIntegrationConfigurationAppliedVerificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationConfigurationApplyOperation without sending the request
     */
    async getIntegrationConfigurationApplyOperationRequestOpts(requestParameters: GetIntegrationConfigurationApplyOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['operationId'] == null) {
            throw new runtime.RequiredError(
                'operationId',
                'Required parameter "operationId" was null or undefined when calling getIntegrationConfigurationApplyOperation().'
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


        let urlPath = `/v1/configuration/apply-operations/{operationId}`;
        urlPath = urlPath.replace('{operationId}', encodeURIComponent(String(requestParameters['operationId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the workspace-scoped immutable result of one aggregate apply. Operation ids use `apply-` followed by a canonical UUID. `PENDING` means the database change already committed and only runtime publication remains; `SUCCEEDED` is terminal. Poll only when a prior POST returned `202`, honoring its `Retry-After` value.
     * Get a configuration apply operation
     */
    async getIntegrationConfigurationApplyOperationRaw(requestParameters: GetIntegrationConfigurationApplyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationApplyOperationResponse>> {
        const requestOptions = await this.getIntegrationConfigurationApplyOperationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationApplyOperationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the workspace-scoped immutable result of one aggregate apply. Operation ids use `apply-` followed by a canonical UUID. `PENDING` means the database change already committed and only runtime publication remains; `SUCCEEDED` is terminal. Poll only when a prior POST returned `202`, honoring its `Retry-After` value.
     * Get a configuration apply operation
     */
    async getIntegrationConfigurationApplyOperation(requestParameters: GetIntegrationConfigurationApplyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationApplyOperationResponse> {
        const response = await this.getIntegrationConfigurationApplyOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationConfigurationContext without sending the request
     */
    async getIntegrationConfigurationContextRequestOpts(requestParameters: GetIntegrationConfigurationContextRequest): Promise<runtime.RequestOpts> {
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


        let urlPath = `/v1/configuration/context`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Confirms the workspace ID, calling key ID, label, and currently granted scopes using the same authentication as every configuration operation. Automation can compare these IDs with its approved target before proceeding. The workspace is derived from the key, not a request parameter. This does not enumerate users, other workspaces, or other keys, and never returns the key value, prefix, hash, or credentials. It is not an authorization lease; every subsequent request is independently authorized.
     * Identify the calling workspace and API key
     */
    async getIntegrationConfigurationContextRaw(requestParameters: GetIntegrationConfigurationContextRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationContextResponse>> {
        const requestOptions = await this.getIntegrationConfigurationContextRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationContextResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Confirms the workspace ID, calling key ID, label, and currently granted scopes using the same authentication as every configuration operation. Automation can compare these IDs with its approved target before proceeding. The workspace is derived from the key, not a request parameter. This does not enumerate users, other workspaces, or other keys, and never returns the key value, prefix, hash, or credentials. It is not an authorization lease; every subsequent request is independently authorized.
     * Identify the calling workspace and API key
     */
    async getIntegrationConfigurationContext(requestParameters: GetIntegrationConfigurationContextRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationContextResponse> {
        const response = await this.getIntegrationConfigurationContextRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationConfigurationExternalRepository without sending the request
     */
    async getIntegrationConfigurationExternalRepositoryRequestOpts(requestParameters: GetIntegrationConfigurationExternalRepositoryRequest): Promise<runtime.RequestOpts> {
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


        let urlPath = `/v1/configuration/external-repository`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the connection already configured by a workspace owner, its automatic synchronization status, last synchronized commits, and optional import-test reference. `connected: false` is normal when Git is not configured. This is a database status read, not a remote Git fetch or synchronization trigger. The commit fields describe the last successful synchronization; they are not an attestation of the current remote branch HEAD. Connecting, disconnecting, changing import-test policy, retrying, and resolving conflicts remain owner actions in the browser. Provider tokens, usernames, secret-store references, and internal lease state are excluded.
     * Read external repository synchronization status
     */
    async getIntegrationConfigurationExternalRepositoryRaw(requestParameters: GetIntegrationConfigurationExternalRepositoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationExternalRepositoryResponse>> {
        const requestOptions = await this.getIntegrationConfigurationExternalRepositoryRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationExternalRepositoryResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns the connection already configured by a workspace owner, its automatic synchronization status, last synchronized commits, and optional import-test reference. `connected: false` is normal when Git is not configured. This is a database status read, not a remote Git fetch or synchronization trigger. The commit fields describe the last successful synchronization; they are not an attestation of the current remote branch HEAD. Connecting, disconnecting, changing import-test policy, retrying, and resolving conflicts remain owner actions in the browser. Provider tokens, usernames, secret-store references, and internal lease state are excluded.
     * Read external repository synchronization status
     */
    async getIntegrationConfigurationExternalRepository(requestParameters: GetIntegrationConfigurationExternalRepositoryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationExternalRepositoryResponse> {
        const response = await this.getIntegrationConfigurationExternalRepositoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationConfigurationImportVerification without sending the request
     */
    async getIntegrationConfigurationImportVerificationRequestOpts(requestParameters: GetIntegrationConfigurationImportVerificationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling getIntegrationConfigurationImportVerification().'
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


        let urlPath = `/v1/configuration/external-repository/verification/{runId}`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Use the `importVerification.runId` from the connection status. Returns the existing server-owned verification result for that connection\'s current import attempt. A `200` with `run: null` means the attempt was reserved but no retained result is available (for example, admission did not succeed or evidence expired); it never means a pass. A different attempt, disconnected repository, unknown ID, or another workspace\'s ID returns `404 verification_not_found`. Re-read connection status if the attempt changes. This endpoint does not run cases, retry an import, apply configuration, or send EDI. Previously retained results can still be read using the ordinary verification-run endpoint.
     * Read the current external import\'s saved-case evidence
     */
    async getIntegrationConfigurationImportVerificationRaw(requestParameters: GetIntegrationConfigurationImportVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationImportVerificationResponse>> {
        const requestOptions = await this.getIntegrationConfigurationImportVerificationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationImportVerificationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Use the `importVerification.runId` from the connection status. Returns the existing server-owned verification result for that connection\'s current import attempt. A `200` with `run: null` means the attempt was reserved but no retained result is available (for example, admission did not succeed or evidence expired); it never means a pass. A different attempt, disconnected repository, unknown ID, or another workspace\'s ID returns `404 verification_not_found`. Re-read connection status if the attempt changes. This endpoint does not run cases, retry an import, apply configuration, or send EDI. Previously retained results can still be read using the ordinary verification-run endpoint.
     * Read the current external import\'s saved-case evidence
     */
    async getIntegrationConfigurationImportVerification(requestParameters: GetIntegrationConfigurationImportVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationImportVerificationResponse> {
        const response = await this.getIntegrationConfigurationImportVerificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getIntegrationConfigurationVerification without sending the request
     */
    async getIntegrationConfigurationVerificationRequestOpts(requestParameters: GetIntegrationConfigurationVerificationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling getIntegrationConfigurationVerification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/configuration/verification-runs/{runId}`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns persisted outcomes and freshly checked configuration, evaluator and catalog identity. Any read-capable key in the same workspace can read a run.
     * Read configuration verification
     */
    async getIntegrationConfigurationVerificationRaw(requestParameters: GetIntegrationConfigurationVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationVerificationResponse>> {
        const requestOptions = await this.getIntegrationConfigurationVerificationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationVerificationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Returns persisted outcomes and freshly checked configuration, evaluator and catalog identity. Any read-capable key in the same workspace can read a run.
     * Read configuration verification
     */
    async getIntegrationConfigurationVerification(requestParameters: GetIntegrationConfigurationVerificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationVerificationResponse> {
        const response = await this.getIntegrationConfigurationVerificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listIntegrationConfigurationApplyOperations without sending the request
     */
    async listIntegrationConfigurationApplyOperationsRequestOpts(requestParameters: ListIntegrationConfigurationApplyOperationsRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
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


        let urlPath = `/v1/configuration/apply-operations`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Lists the same workspace-wide change history shown in the browser, including browser, API, and automatic Git imports. Newest requests come first, with operation ID breaking timestamp ties. Entries are compact summaries; fetch the existing operation endpoint for its full change list. Pass `nextCursor` unchanged to retrieve the next page and stop when it is null. Cursors belong to one workspace. Pagination is not a frozen snapshot: new changes can arrive during a scan, so re-read the first page when checking for drift. This endpoint does not advance pending publications or mutate configuration.
     * List workspace configuration changes
     */
    async listIntegrationConfigurationApplyOperationsRaw(requestParameters: ListIntegrationConfigurationApplyOperationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationApplyOperationHistoryResponse>> {
        const requestOptions = await this.listIntegrationConfigurationApplyOperationsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationApplyOperationHistoryResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Lists the same workspace-wide change history shown in the browser, including browser, API, and automatic Git imports. Newest requests come first, with operation ID breaking timestamp ties. Entries are compact summaries; fetch the existing operation endpoint for its full change list. Pass `nextCursor` unchanged to retrieve the next page and stop when it is null. Cursors belong to one workspace. Pagination is not a frozen snapshot: new changes can arrive during a scan, so re-read the first page when checking for drift. This endpoint does not advance pending publications or mutate configuration.
     * List workspace configuration changes
     */
    async listIntegrationConfigurationApplyOperations(requestParameters: ListIntegrationConfigurationApplyOperationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationApplyOperationHistoryResponse> {
        const response = await this.listIntegrationConfigurationApplyOperationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for planIntegrationConfiguration without sending the request
     */
    async planIntegrationConfigurationRequestOpts(requestParameters: PlanIntegrationConfigurationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['configurationPlanRequest'] == null) {
            throw new runtime.RequiredError(
                'configurationPlanRequest',
                'Required parameter "configurationPlanRequest" was null or undefined when calling planIntegrationConfiguration().'
            );
        }

        const queryParameters: any = {};

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


        let urlPath = `/v1/configuration/plan`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConfigurationPlanRequestToJSON(requestParameters['configurationPlanRequest']),
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Compares a portable desired configuration bundle with the workspace\'s current AS2 connections, active partners, published mappings, and optional scenario definitions and bindings. Planning is read-only: it does not create, update, retire, publish, or reapply anything, and it does not require an idempotency key.  Submit exactly one `MANIFEST` at `modernedi.json` plus every `RESOURCE` and `SOURCE` file inventoried by that manifest. You may pass the `files` array from configuration export unchanged: its single `_state/snapshot.json` `STATE` file is accepted as advisory context, but current workspace configuration remains authoritative. A stale advisory snapshot adds the `BASE_SNAPSHOT_STALE` warning; it does not make old database ids or ETags desired state. ModernEDI verifies safe paths, closed JSON objects, canonical file hashes, manifest inventory, stable resource keys, cross-resource references, mapping source, aggregate runtime limits, and the active syntax-tree catalog before comparing desired and current state.  A structurally valid bundle always receives `200`, even when the desired state cannot be applied. Inspect `applicable` and every entry in `diagnostics`; each diagnostic carries an RFC 6901 JSON Pointer into the submitted request. `operations` contains only `CREATE`, `UPDATE`, and `DELETE` entries. `summary.unchanged` reports resources omitted from that array because their complete portable configuration is already current.  Scenario bindings are compiled against the complete proposed configuration, so one apply can create their partners and maps too. Changing a referenced resource adds a binding `UPDATE` with unchanged authored content hashes: this creates a fresh runtime revision in the same transaction. `refreshScenarioBindings` explicitly requests that behavior for otherwise unchanged binding resource keys; include the same array in the apply request. Export followed by plan without refresh requests is a no-op.  `scenarioImpactComplete` is false when ModernEDI could not safely determine every affected applied scenario. `affectedScenarios` distinguishes bindings refreshed by this apply (`REAPPLIED_BY_APPLY`), retired by it (`RETIRED_BY_APPLY`), or requiring a separate reapplication (`REAPPLY_REQUIRED`). `affectedRuns` identifies ACTIVE runs pinned to impacted binding revisions; those runs must be cancelled or completed before re-planning. `planSha256` is present only when the plan is applicable and binds the desired bundle, current snapshot, validation context, operations, and scenario impact. A later apply request must still prove that exact plan is current; this endpoint grants no mutation authority.  Common planning diagnostics have deliberate recovery paths:  - `BASE_SNAPSHOT_STALE` is a warning that the optional exported snapshot no longer matches the workspace. The returned plan still uses live current state. - `STAGED_CHANGE_REQUIRED` is an error when a natural identity such as an AS2 identifier or X12 sender identity belongs to another stable resource key. Release it from the current owner in a separate apply, export again, and then plan the transfer. - `ACTIVE_SCENARIO_RUNS_AFFECTED` is an error when a change would alter authority used by an ACTIVE scenario run. Complete or cancel every listed `affectedRuns` entry and plan again.  Malformed envelopes, unsafe or duplicate paths, unsupported file roles, a noncanonical advisory `STATE` file, hash mismatches, and inconsistent manifests return `400 configuration_plan_invalid` with the same diagnostic shape in `error.details.diagnostics`. Request bodies may be at most 16 MiB (16,777,216 bytes).
     * Plan desired workspace configuration
     */
    async planIntegrationConfigurationRaw(requestParameters: PlanIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationPlanResponse>> {
        const requestOptions = await this.planIntegrationConfigurationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationPlanResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Compares a portable desired configuration bundle with the workspace\'s current AS2 connections, active partners, published mappings, and optional scenario definitions and bindings. Planning is read-only: it does not create, update, retire, publish, or reapply anything, and it does not require an idempotency key.  Submit exactly one `MANIFEST` at `modernedi.json` plus every `RESOURCE` and `SOURCE` file inventoried by that manifest. You may pass the `files` array from configuration export unchanged: its single `_state/snapshot.json` `STATE` file is accepted as advisory context, but current workspace configuration remains authoritative. A stale advisory snapshot adds the `BASE_SNAPSHOT_STALE` warning; it does not make old database ids or ETags desired state. ModernEDI verifies safe paths, closed JSON objects, canonical file hashes, manifest inventory, stable resource keys, cross-resource references, mapping source, aggregate runtime limits, and the active syntax-tree catalog before comparing desired and current state.  A structurally valid bundle always receives `200`, even when the desired state cannot be applied. Inspect `applicable` and every entry in `diagnostics`; each diagnostic carries an RFC 6901 JSON Pointer into the submitted request. `operations` contains only `CREATE`, `UPDATE`, and `DELETE` entries. `summary.unchanged` reports resources omitted from that array because their complete portable configuration is already current.  Scenario bindings are compiled against the complete proposed configuration, so one apply can create their partners and maps too. Changing a referenced resource adds a binding `UPDATE` with unchanged authored content hashes: this creates a fresh runtime revision in the same transaction. `refreshScenarioBindings` explicitly requests that behavior for otherwise unchanged binding resource keys; include the same array in the apply request. Export followed by plan without refresh requests is a no-op.  `scenarioImpactComplete` is false when ModernEDI could not safely determine every affected applied scenario. `affectedScenarios` distinguishes bindings refreshed by this apply (`REAPPLIED_BY_APPLY`), retired by it (`RETIRED_BY_APPLY`), or requiring a separate reapplication (`REAPPLY_REQUIRED`). `affectedRuns` identifies ACTIVE runs pinned to impacted binding revisions; those runs must be cancelled or completed before re-planning. `planSha256` is present only when the plan is applicable and binds the desired bundle, current snapshot, validation context, operations, and scenario impact. A later apply request must still prove that exact plan is current; this endpoint grants no mutation authority.  Common planning diagnostics have deliberate recovery paths:  - `BASE_SNAPSHOT_STALE` is a warning that the optional exported snapshot no longer matches the workspace. The returned plan still uses live current state. - `STAGED_CHANGE_REQUIRED` is an error when a natural identity such as an AS2 identifier or X12 sender identity belongs to another stable resource key. Release it from the current owner in a separate apply, export again, and then plan the transfer. - `ACTIVE_SCENARIO_RUNS_AFFECTED` is an error when a change would alter authority used by an ACTIVE scenario run. Complete or cancel every listed `affectedRuns` entry and plan again.  Malformed envelopes, unsafe or duplicate paths, unsupported file roles, a noncanonical advisory `STATE` file, hash mismatches, and inconsistent manifests return `400 configuration_plan_invalid` with the same diagnostic shape in `error.details.diagnostics`. Request bodies may be at most 16 MiB (16,777,216 bytes).
     * Plan desired workspace configuration
     */
    async planIntegrationConfiguration(requestParameters: PlanIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationPlanResponse> {
        const response = await this.planIntegrationConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for verifyIntegrationConfiguration without sending the request
     */
    async verifyIntegrationConfigurationRequestOpts(requestParameters: VerifyIntegrationConfigurationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['configurationVerificationRequest'] == null) {
            throw new runtime.RequiredError(
                'configurationVerificationRequest',
                'Required parameter "configurationVerificationRequest" was null or undefined when calling verifyIntegrationConfiguration().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xRequestId'] != null) {
            headerParameters['X-Request-Id'] = String(requestParameters['xRequestId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // IntegrationApiKeyHeader authentication
        }


        let urlPath = `/v1/configuration/verification-runs`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConfigurationVerificationRequestToJSON(requestParameters['configurationVerificationRequest']),
        };
    }

    /**
     * **Required key scope:** `configuration:read`.  Optional and side-effect-free: re-plans the submitted bundle and verifies all saved mapping cases on the server. Supports up to 25 tested mappings and 100 cases in a 30-second suite. Uses the same incoming/JSLT/XSLT engines as Mapper reviews. Mappings without cases are counted explicitly. No raw input/output is retained. One active verification and 30 starts per workspace per hour are shared with browser reviews. Same requestId and identical content replay the persisted run. This endpoint never applies configuration or executes AS2/scenarios. A network interruption does not imply cancellation; GET the deterministic verify-{requestId} run before retrying.
     * Verify saved cases in an exact configuration plan
     */
    async verifyIntegrationConfigurationRaw(requestParameters: VerifyIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationVerificationResponse>> {
        const requestOptions = await this.verifyIntegrationConfigurationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationVerificationResponseFromJSON(jsonValue));
    }

    /**
     * **Required key scope:** `configuration:read`.  Optional and side-effect-free: re-plans the submitted bundle and verifies all saved mapping cases on the server. Supports up to 25 tested mappings and 100 cases in a 30-second suite. Uses the same incoming/JSLT/XSLT engines as Mapper reviews. Mappings without cases are counted explicitly. No raw input/output is retained. One active verification and 30 starts per workspace per hour are shared with browser reviews. Same requestId and identical content replay the persisted run. This endpoint never applies configuration or executes AS2/scenarios. A network interruption does not imply cancellation; GET the deterministic verify-{requestId} run before retrying.
     * Verify saved cases in an exact configuration plan
     */
    async verifyIntegrationConfiguration(requestParameters: VerifyIntegrationConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationVerificationResponse> {
        const response = await this.verifyIntegrationConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
