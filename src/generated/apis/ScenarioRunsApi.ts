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
    type ScenarioEvidenceReport,
    ScenarioEvidenceReportFromJSON,
    ScenarioEvidenceReportToJSON,
} from '../models/ScenarioEvidenceReport.js';
import {
    type ScenarioRunCollection,
    ScenarioRunCollectionFromJSON,
    ScenarioRunCollectionToJSON,
} from '../models/ScenarioRunCollection.js';
import {
    type ScenarioRunCommandResponse,
    ScenarioRunCommandResponseFromJSON,
    ScenarioRunCommandResponseToJSON,
} from '../models/ScenarioRunCommandResponse.js';
import {
    type ScenarioRunObservationRequest,
    ScenarioRunObservationRequestFromJSON,
    ScenarioRunObservationRequestToJSON,
} from '../models/ScenarioRunObservationRequest.js';
import {
    type ScenarioRunTimelineResponse,
    ScenarioRunTimelineResponseFromJSON,
    ScenarioRunTimelineResponseToJSON,
} from '../models/ScenarioRunTimelineResponse.js';
import {
    type ScenarioRunViewResponse,
    ScenarioRunViewResponseFromJSON,
    ScenarioRunViewResponseToJSON,
} from '../models/ScenarioRunViewResponse.js';
import {
    type StartScenarioRunRequest,
    StartScenarioRunRequestFromJSON,
    StartScenarioRunRequestToJSON,
} from '../models/StartScenarioRunRequest.js';

export interface AdvanceScenarioRunRequest {
    runId: string;
    idempotencyKey: string;
    ifMatch: string;
    body: object;
}

export interface AttachScenarioRunObservationRequest {
    runId: string;
    idempotencyKey: string;
    ifMatch: string;
    scenarioRunObservationRequest: ScenarioRunObservationRequest;
}

export interface CancelScenarioRunRequest {
    runId: string;
    idempotencyKey: string;
    ifMatch: string;
    body: object;
}

export interface DownloadScenarioEvidenceReportRequest {
    runId: string;
}

export interface GetScenarioRunRequest {
    runId: string;
}

export interface GetScenarioRunTimelineRequest {
    runId: string;
    limit?: number;
    cursor?: string;
}

export interface ListScenarioRunsRequest {
    limit?: number;
    cursor?: string;
}

export interface StartScenarioRunOperationRequest {
    idempotencyKey: string;
    startScenarioRunRequest: StartScenarioRunRequest;
}

/**
 * ScenarioRunsApi - interface
 *
 * @export
 * @interface ScenarioRunsApiInterface
 */
export interface ScenarioRunsApiInterface {
    /**
     * Creates request options for advanceScenarioRun without sending the request
     * @param {string} runId Durable scenario run identifier.
     * @param {string} idempotencyKey Required command identity. Replays require byte-equivalent normalized input.
     * @param {string} ifMatch Current strong run-revision ETag returned in the run body or ETag response header.
     * @param {object} body
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    advanceScenarioRunRequestOpts(requestParameters: AdvanceScenarioRunRequest): Promise<runtime.RequestOpts>;

    /**
     * Advances server-controlled adapter work or refreshes/re-evaluates the existing graph, using the same runtime as the browser. Every fresh external dispatch, including ModernEDI test-partner-originated traffic, additionally requires messages:write on the authenticated key. The same key is reused automatically; no second credential is accepted in the body. Reconciliation and observation-only evaluation need no send scope. retry.requiresApiKey describes the browser\'s supplemental credential, not API authorization: false never exempts a dispatch from messages:write. A lost-response retry must reuse the original Idempotency-Key and If-Match. An already-recorded failed operation is replayed without another dispatch; to attempt a retryable failed action again, fetch the current ETag and use a fresh key. Follow structured guidance rather than hard-coding bundled step names.
     * @summary Advance adapter work or reevaluate graph deadlines
     * @param {string} runId Durable scenario run identifier.
     * @param {string} idempotencyKey Required command identity. Replays require byte-equivalent normalized input.
     * @param {string} ifMatch Current strong run-revision ETag returned in the run body or ETag response header.
     * @param {object} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    advanceScenarioRunRaw(requestParameters: AdvanceScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCommandResponse>>;

    /**
     * Advances server-controlled adapter work or refreshes/re-evaluates the existing graph, using the same runtime as the browser. Every fresh external dispatch, including ModernEDI test-partner-originated traffic, additionally requires messages:write on the authenticated key. The same key is reused automatically; no second credential is accepted in the body. Reconciliation and observation-only evaluation need no send scope. retry.requiresApiKey describes the browser\'s supplemental credential, not API authorization: false never exempts a dispatch from messages:write. A lost-response retry must reuse the original Idempotency-Key and If-Match. An already-recorded failed operation is replayed without another dispatch; to attempt a retryable failed action again, fetch the current ETag and use a fresh key. Follow structured guidance rather than hard-coding bundled step names.
     * Advance adapter work or reevaluate graph deadlines
     */
    advanceScenarioRun(requestParameters: AdvanceScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCommandResponse>;

    /**
     * Creates request options for attachScenarioRunObservation without sending the request
     * @param {string} runId Durable scenario run identifier.
     * @param {string} idempotencyKey Required command identity. Replays require byte-equivalent normalized input.
     * @param {string} ifMatch Current strong run-revision ETag returned in the run body or ETag response header.
     * @param {ScenarioRunObservationRequest} scenarioRunObservationRequest
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    attachScenarioRunObservationRequestOpts(requestParameters: AttachScenarioRunObservationRequest): Promise<runtime.RequestOpts>;

    /**
     * Attaches one exact workspace-visible ModernEDI transaction to an attachable runtime-mapping or observation-only occurrence. The body identifies persisted transaction metadata; raw X12 is never accepted. The transaction must carry the exact partner-configuration fingerprint frozen into the applied binding; legacy or mismatched transactions are ineligible, while acknowledgments and receipts produced under a different configuration remain pending. Repeating the same slot and transaction with the current ETag and a new Idempotency-Key re-reads trusted transaction detail, refreshes pending mapping or acknowledgment evidence, and reevaluates the graph atomically. Reusing the original key is a pure replay and does not refresh evidence. Adapter-controlled steps reject client attachment. Mapper-derived facts use ordinary X12 Mapper semantics, with dynamic durability limits enforced before SQL persistence: collections contain at most 1000 scalar values; text scalars contain at most 4096 UTF-8 bytes; one canonical typed value contains at most 32768 bytes; and one observation\'s facts JSON contains at most 262144 bytes. A fact provenance receipt contains at most 4096 bytes. Each evidence document contains at most 8192 bytes, with at most 8 non-fact evidence documents and 524288 bytes of aggregate evidence JSON per observation. Capacity failures use fact_value_limit_exceeded, transaction_observation_capacity_exceeded, transaction_fact_evidence_capacity_exceeded, or transaction_evidence_capacity_exceeded. fact_evaluation_timeout and fact_evaluation_busy_or_limited return HTTP 409 with retryable=true and operationStatus=failed; reload the run if needed, then retry with its current ETag and a fresh Idempotency-Key to re-read trusted transaction evidence.
     * @summary Attach or refresh a persisted transaction observation
     * @param {string} runId Durable scenario run identifier.
     * @param {string} idempotencyKey Required command identity. Replays require byte-equivalent normalized input.
     * @param {string} ifMatch Current strong run-revision ETag returned in the run body or ETag response header.
     * @param {ScenarioRunObservationRequest} scenarioRunObservationRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    attachScenarioRunObservationRaw(requestParameters: AttachScenarioRunObservationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCommandResponse>>;

    /**
     * Attaches one exact workspace-visible ModernEDI transaction to an attachable runtime-mapping or observation-only occurrence. The body identifies persisted transaction metadata; raw X12 is never accepted. The transaction must carry the exact partner-configuration fingerprint frozen into the applied binding; legacy or mismatched transactions are ineligible, while acknowledgments and receipts produced under a different configuration remain pending. Repeating the same slot and transaction with the current ETag and a new Idempotency-Key re-reads trusted transaction detail, refreshes pending mapping or acknowledgment evidence, and reevaluates the graph atomically. Reusing the original key is a pure replay and does not refresh evidence. Adapter-controlled steps reject client attachment. Mapper-derived facts use ordinary X12 Mapper semantics, with dynamic durability limits enforced before SQL persistence: collections contain at most 1000 scalar values; text scalars contain at most 4096 UTF-8 bytes; one canonical typed value contains at most 32768 bytes; and one observation\'s facts JSON contains at most 262144 bytes. A fact provenance receipt contains at most 4096 bytes. Each evidence document contains at most 8192 bytes, with at most 8 non-fact evidence documents and 524288 bytes of aggregate evidence JSON per observation. Capacity failures use fact_value_limit_exceeded, transaction_observation_capacity_exceeded, transaction_fact_evidence_capacity_exceeded, or transaction_evidence_capacity_exceeded. fact_evaluation_timeout and fact_evaluation_busy_or_limited return HTTP 409 with retryable=true and operationStatus=failed; reload the run if needed, then retry with its current ETag and a fresh Idempotency-Key to re-read trusted transaction evidence.
     * Attach or refresh a persisted transaction observation
     */
    attachScenarioRunObservation(requestParameters: AttachScenarioRunObservationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCommandResponse>;

    /**
     * Creates request options for cancelScenarioRun without sending the request
     * @param {string} runId Durable scenario run identifier.
     * @param {string} idempotencyKey Required command identity. Replays require byte-equivalent normalized input.
     * @param {string} ifMatch Current strong run-revision ETag returned in the run body or ETag response header.
     * @param {object} body
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    cancelScenarioRunRequestOpts(requestParameters: CancelScenarioRunRequest): Promise<runtime.RequestOpts>;

    /**
     * Records an actor-attributed operator cancellation as an inconclusive terminal result while preserving all evidence already gathered. Cancellation is optimistic-concurrency controlled and idempotent, and it does not interrupt a command that still owns the run. If a command stops without saving a result and its temporary ownership period expires, ModernEDI records that attempt as failed and claims cancellation as one durable change. If the abandoned command may already have affected an external system, its failed timeline entry remains available for manual reconciliation. Each run can store at most 256 command records. The initial start and all later ordinary commands share 253 records; the remaining three are held for one retry record, cancellation, and a retry of cancellation. Result documents for ordinary commands share a 32 MiB budget, with additional space held for those same three reserved records.
     * @summary Cancel an active scenario run
     * @param {string} runId Durable scenario run identifier.
     * @param {string} idempotencyKey Required command identity. Replays require byte-equivalent normalized input.
     * @param {string} ifMatch Current strong run-revision ETag returned in the run body or ETag response header.
     * @param {object} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    cancelScenarioRunRaw(requestParameters: CancelScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCommandResponse>>;

    /**
     * Records an actor-attributed operator cancellation as an inconclusive terminal result while preserving all evidence already gathered. Cancellation is optimistic-concurrency controlled and idempotent, and it does not interrupt a command that still owns the run. If a command stops without saving a result and its temporary ownership period expires, ModernEDI records that attempt as failed and claims cancellation as one durable change. If the abandoned command may already have affected an external system, its failed timeline entry remains available for manual reconciliation. Each run can store at most 256 command records. The initial start and all later ordinary commands share 253 records; the remaining three are held for one retry record, cancellation, and a retry of cancellation. Result documents for ordinary commands share a 32 MiB budget, with additional space held for those same three reserved records.
     * Cancel an active scenario run
     */
    cancelScenarioRun(requestParameters: CancelScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCommandResponse>;

    /**
     * Creates request options for downloadScenarioEvidenceReport without sending the request
     * @param {string} runId Durable scenario run identifier.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    downloadScenarioEvidenceReportRequestOpts(requestParameters: DownloadScenarioEvidenceReportRequest): Promise<runtime.RequestOpts>;

    /**
     * Creates the report once from terminal durable state and thereafter returns the exact persisted canonical JSON. It records the frozen authority and redacted evidence needed to substantiate the bounded implementation-verification claim; it is not editable scenario source, raw X12, or a compliance certificate. Stable failure codes are included, while detailed failure messages remain in the run timeline so the credential-free proof stays within its fixed export bound. If a retry creates another audit record for the same successful state change, the report counts that change once and keeps its earliest record; the timeline still shows every attempt.
     * @summary Download the immutable evidence report for a terminal run
     * @param {string} runId Durable scenario run identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    downloadScenarioEvidenceReportRaw(requestParameters: DownloadScenarioEvidenceReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioEvidenceReport>>;

    /**
     * Creates the report once from terminal durable state and thereafter returns the exact persisted canonical JSON. It records the frozen authority and redacted evidence needed to substantiate the bounded implementation-verification claim; it is not editable scenario source, raw X12, or a compliance certificate. Stable failure codes are included, while detailed failure messages remain in the run timeline so the credential-free proof stays within its fixed export bound. If a retry creates another audit record for the same successful state change, the report counts that change once and keeps its earliest record; the timeline still shows every attempt.
     * Download the immutable evidence report for a terminal run
     */
    downloadScenarioEvidenceReport(requestParameters: DownloadScenarioEvidenceReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioEvidenceReport>;

    /**
     * Creates request options for getScenarioRun without sending the request
     * @param {string} runId Durable scenario run identifier.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    getScenarioRunRequestOpts(requestParameters: GetScenarioRunRequest): Promise<runtime.RequestOpts>;

    /**
     * Returns the current durable revision, evidence-bearing observations, checks, outcome, and strong ETag. Sensitive fact values are redacted from the public representation.
     * @summary Read current scenario run state and evidence
     * @param {string} runId Durable scenario run identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    getScenarioRunRaw(requestParameters: GetScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunViewResponse>>;

    /**
     * Returns the current durable revision, evidence-bearing observations, checks, outcome, and strong ETag. Sensitive fact values are redacted from the public representation.
     * Read current scenario run state and evidence
     */
    getScenarioRun(requestParameters: GetScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunViewResponse>;

    /**
     * Creates request options for getScenarioRunTimeline without sending the request
     * @param {string} runId Durable scenario run identifier.
     * @param {number} [limit] Maximum operations to return.
     * @param {string} [cursor] Opaque tenant-and-run-bound keyset cursor returned as nextCursor by the preceding page. Return it unchanged.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    getScenarioRunTimelineRequestOpts(requestParameters: GetScenarioRunTimelineRequest): Promise<runtime.RequestOpts>;

    /**
     * Returns a bounded, newest-first audit timeline without idempotency hashes, attempt tokens, transient credentials, or operation result payloads. The cursor is opaque and bound to both the workspace and run.
     * @summary Read the actor-attributed operation timeline for a run
     * @param {string} runId Durable scenario run identifier.
     * @param {number} [limit] Maximum operations to return.
     * @param {string} [cursor] Opaque tenant-and-run-bound keyset cursor returned as nextCursor by the preceding page. Return it unchanged.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    getScenarioRunTimelineRaw(requestParameters: GetScenarioRunTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunTimelineResponse>>;

    /**
     * Returns a bounded, newest-first audit timeline without idempotency hashes, attempt tokens, transient credentials, or operation result payloads. The cursor is opaque and bound to both the workspace and run.
     * Read the actor-attributed operation timeline for a run
     */
    getScenarioRunTimeline(requestParameters: GetScenarioRunTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunTimelineResponse>;

    /**
     * Creates request options for listScenarioRuns without sending the request
     * @param {number} [limit] Maximum recent runs to return.
     * @param {string} [cursor] Opaque tenant-bound keyset cursor returned as nextCursor by the preceding page. Return it unchanged.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    listScenarioRunsRequestOpts(requestParameters: ListScenarioRunsRequest): Promise<runtime.RequestOpts>;

    /**
     * Returns a bounded workspace-scoped summary of recent runs for discovery and navigation without exposing fact values or evidence payloads.
     * @summary List recent scenario conversations
     * @param {number} [limit] Maximum recent runs to return.
     * @param {string} [cursor] Opaque tenant-bound keyset cursor returned as nextCursor by the preceding page. Return it unchanged.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    listScenarioRunsRaw(requestParameters: ListScenarioRunsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCollection>>;

    /**
     * Returns a bounded workspace-scoped summary of recent runs for discovery and navigation without exposing fact values or evidence payloads.
     * List recent scenario conversations
     */
    listScenarioRuns(requestParameters: ListScenarioRunsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCollection>;

    /**
     * Creates request options for startScenarioRun without sending the request
     * @param {string} idempotencyKey Required command identity. Replays require byte-equivalent normalized input.
     * @param {StartScenarioRunRequest} startScenarioRunRequest
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    startScenarioRunRequestOpts(requestParameters: StartScenarioRunOperationRequest): Promise<runtime.RequestOpts>;

    /**
     * Starts a durable run from exact definition and binding hashes in the binding\'s production or test traffic environment. Both environments share deployed mappings, but transactions, dispatch, acknowledgments, and evidence remain in the selected environment. Optional typed parameters are checked against the definition before any operation is accepted. Registered adapter targets prepare their selected-profile runtime dependencies before the run is inserted; temporary preparation failures are retryable and return Retry-After. Does not send EDI. It uses an already applied binding and never publishes authored definitions or applies desired configuration. The reserved browser-managed binding cannot be selected here; apply your own binding (including one using a managed example). The key is scoped to operations in this workspace, not restricted to Test traffic.
     * @summary Start a run from an exact applied binding
     * @param {string} idempotencyKey Required command identity. Replays require byte-equivalent normalized input.
     * @param {StartScenarioRunRequest} startScenarioRunRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScenarioRunsApiInterface
     */
    startScenarioRunRaw(requestParameters: StartScenarioRunOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCommandResponse>>;

    /**
     * Starts a durable run from exact definition and binding hashes in the binding\'s production or test traffic environment. Both environments share deployed mappings, but transactions, dispatch, acknowledgments, and evidence remain in the selected environment. Optional typed parameters are checked against the definition before any operation is accepted. Registered adapter targets prepare their selected-profile runtime dependencies before the run is inserted; temporary preparation failures are retryable and return Retry-After. Does not send EDI. It uses an already applied binding and never publishes authored definitions or applies desired configuration. The reserved browser-managed binding cannot be selected here; apply your own binding (including one using a managed example). The key is scoped to operations in this workspace, not restricted to Test traffic.
     * Start a run from an exact applied binding
     */
    startScenarioRun(requestParameters: StartScenarioRunOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCommandResponse>;

}

/**
 *
 */
export class ScenarioRunsApi extends runtime.BaseAPI implements ScenarioRunsApiInterface {

    /**
     * Creates request options for advanceScenarioRun without sending the request
     */
    async advanceScenarioRunRequestOpts(requestParameters: AdvanceScenarioRunRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling advanceScenarioRun().'
            );
        }

        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling advanceScenarioRun().'
            );
        }

        if (requestParameters['ifMatch'] == null) {
            throw new runtime.RequiredError(
                'ifMatch',
                'Required parameter "ifMatch" was null or undefined when calling advanceScenarioRun().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling advanceScenarioRun().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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


        let urlPath = `/v1/scenario-runs/{runId}/advance`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * Advances server-controlled adapter work or refreshes/re-evaluates the existing graph, using the same runtime as the browser. Every fresh external dispatch, including ModernEDI test-partner-originated traffic, additionally requires messages:write on the authenticated key. The same key is reused automatically; no second credential is accepted in the body. Reconciliation and observation-only evaluation need no send scope. retry.requiresApiKey describes the browser\'s supplemental credential, not API authorization: false never exempts a dispatch from messages:write. A lost-response retry must reuse the original Idempotency-Key and If-Match. An already-recorded failed operation is replayed without another dispatch; to attempt a retryable failed action again, fetch the current ETag and use a fresh key. Follow structured guidance rather than hard-coding bundled step names.
     * Advance adapter work or reevaluate graph deadlines
     */
    async advanceScenarioRunRaw(requestParameters: AdvanceScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCommandResponse>> {
        const requestOptions = await this.advanceScenarioRunRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScenarioRunCommandResponseFromJSON(jsonValue));
    }

    /**
     * Advances server-controlled adapter work or refreshes/re-evaluates the existing graph, using the same runtime as the browser. Every fresh external dispatch, including ModernEDI test-partner-originated traffic, additionally requires messages:write on the authenticated key. The same key is reused automatically; no second credential is accepted in the body. Reconciliation and observation-only evaluation need no send scope. retry.requiresApiKey describes the browser\'s supplemental credential, not API authorization: false never exempts a dispatch from messages:write. A lost-response retry must reuse the original Idempotency-Key and If-Match. An already-recorded failed operation is replayed without another dispatch; to attempt a retryable failed action again, fetch the current ETag and use a fresh key. Follow structured guidance rather than hard-coding bundled step names.
     * Advance adapter work or reevaluate graph deadlines
     */
    async advanceScenarioRun(requestParameters: AdvanceScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCommandResponse> {
        const response = await this.advanceScenarioRunRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for attachScenarioRunObservation without sending the request
     */
    async attachScenarioRunObservationRequestOpts(requestParameters: AttachScenarioRunObservationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling attachScenarioRunObservation().'
            );
        }

        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling attachScenarioRunObservation().'
            );
        }

        if (requestParameters['ifMatch'] == null) {
            throw new runtime.RequiredError(
                'ifMatch',
                'Required parameter "ifMatch" was null or undefined when calling attachScenarioRunObservation().'
            );
        }

        if (requestParameters['scenarioRunObservationRequest'] == null) {
            throw new runtime.RequiredError(
                'scenarioRunObservationRequest',
                'Required parameter "scenarioRunObservationRequest" was null or undefined when calling attachScenarioRunObservation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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


        let urlPath = `/v1/scenario-runs/{runId}/observations`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScenarioRunObservationRequestToJSON(requestParameters['scenarioRunObservationRequest']),
        };
    }

    /**
     * Attaches one exact workspace-visible ModernEDI transaction to an attachable runtime-mapping or observation-only occurrence. The body identifies persisted transaction metadata; raw X12 is never accepted. The transaction must carry the exact partner-configuration fingerprint frozen into the applied binding; legacy or mismatched transactions are ineligible, while acknowledgments and receipts produced under a different configuration remain pending. Repeating the same slot and transaction with the current ETag and a new Idempotency-Key re-reads trusted transaction detail, refreshes pending mapping or acknowledgment evidence, and reevaluates the graph atomically. Reusing the original key is a pure replay and does not refresh evidence. Adapter-controlled steps reject client attachment. Mapper-derived facts use ordinary X12 Mapper semantics, with dynamic durability limits enforced before SQL persistence: collections contain at most 1000 scalar values; text scalars contain at most 4096 UTF-8 bytes; one canonical typed value contains at most 32768 bytes; and one observation\'s facts JSON contains at most 262144 bytes. A fact provenance receipt contains at most 4096 bytes. Each evidence document contains at most 8192 bytes, with at most 8 non-fact evidence documents and 524288 bytes of aggregate evidence JSON per observation. Capacity failures use fact_value_limit_exceeded, transaction_observation_capacity_exceeded, transaction_fact_evidence_capacity_exceeded, or transaction_evidence_capacity_exceeded. fact_evaluation_timeout and fact_evaluation_busy_or_limited return HTTP 409 with retryable=true and operationStatus=failed; reload the run if needed, then retry with its current ETag and a fresh Idempotency-Key to re-read trusted transaction evidence.
     * Attach or refresh a persisted transaction observation
     */
    async attachScenarioRunObservationRaw(requestParameters: AttachScenarioRunObservationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCommandResponse>> {
        const requestOptions = await this.attachScenarioRunObservationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScenarioRunCommandResponseFromJSON(jsonValue));
    }

    /**
     * Attaches one exact workspace-visible ModernEDI transaction to an attachable runtime-mapping or observation-only occurrence. The body identifies persisted transaction metadata; raw X12 is never accepted. The transaction must carry the exact partner-configuration fingerprint frozen into the applied binding; legacy or mismatched transactions are ineligible, while acknowledgments and receipts produced under a different configuration remain pending. Repeating the same slot and transaction with the current ETag and a new Idempotency-Key re-reads trusted transaction detail, refreshes pending mapping or acknowledgment evidence, and reevaluates the graph atomically. Reusing the original key is a pure replay and does not refresh evidence. Adapter-controlled steps reject client attachment. Mapper-derived facts use ordinary X12 Mapper semantics, with dynamic durability limits enforced before SQL persistence: collections contain at most 1000 scalar values; text scalars contain at most 4096 UTF-8 bytes; one canonical typed value contains at most 32768 bytes; and one observation\'s facts JSON contains at most 262144 bytes. A fact provenance receipt contains at most 4096 bytes. Each evidence document contains at most 8192 bytes, with at most 8 non-fact evidence documents and 524288 bytes of aggregate evidence JSON per observation. Capacity failures use fact_value_limit_exceeded, transaction_observation_capacity_exceeded, transaction_fact_evidence_capacity_exceeded, or transaction_evidence_capacity_exceeded. fact_evaluation_timeout and fact_evaluation_busy_or_limited return HTTP 409 with retryable=true and operationStatus=failed; reload the run if needed, then retry with its current ETag and a fresh Idempotency-Key to re-read trusted transaction evidence.
     * Attach or refresh a persisted transaction observation
     */
    async attachScenarioRunObservation(requestParameters: AttachScenarioRunObservationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCommandResponse> {
        const response = await this.attachScenarioRunObservationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for cancelScenarioRun without sending the request
     */
    async cancelScenarioRunRequestOpts(requestParameters: CancelScenarioRunRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling cancelScenarioRun().'
            );
        }

        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling cancelScenarioRun().'
            );
        }

        if (requestParameters['ifMatch'] == null) {
            throw new runtime.RequiredError(
                'ifMatch',
                'Required parameter "ifMatch" was null or undefined when calling cancelScenarioRun().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling cancelScenarioRun().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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


        let urlPath = `/v1/scenario-runs/{runId}/cancel`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        };
    }

    /**
     * Records an actor-attributed operator cancellation as an inconclusive terminal result while preserving all evidence already gathered. Cancellation is optimistic-concurrency controlled and idempotent, and it does not interrupt a command that still owns the run. If a command stops without saving a result and its temporary ownership period expires, ModernEDI records that attempt as failed and claims cancellation as one durable change. If the abandoned command may already have affected an external system, its failed timeline entry remains available for manual reconciliation. Each run can store at most 256 command records. The initial start and all later ordinary commands share 253 records; the remaining three are held for one retry record, cancellation, and a retry of cancellation. Result documents for ordinary commands share a 32 MiB budget, with additional space held for those same three reserved records.
     * Cancel an active scenario run
     */
    async cancelScenarioRunRaw(requestParameters: CancelScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCommandResponse>> {
        const requestOptions = await this.cancelScenarioRunRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScenarioRunCommandResponseFromJSON(jsonValue));
    }

    /**
     * Records an actor-attributed operator cancellation as an inconclusive terminal result while preserving all evidence already gathered. Cancellation is optimistic-concurrency controlled and idempotent, and it does not interrupt a command that still owns the run. If a command stops without saving a result and its temporary ownership period expires, ModernEDI records that attempt as failed and claims cancellation as one durable change. If the abandoned command may already have affected an external system, its failed timeline entry remains available for manual reconciliation. Each run can store at most 256 command records. The initial start and all later ordinary commands share 253 records; the remaining three are held for one retry record, cancellation, and a retry of cancellation. Result documents for ordinary commands share a 32 MiB budget, with additional space held for those same three reserved records.
     * Cancel an active scenario run
     */
    async cancelScenarioRun(requestParameters: CancelScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCommandResponse> {
        const response = await this.cancelScenarioRunRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for downloadScenarioEvidenceReport without sending the request
     */
    async downloadScenarioEvidenceReportRequestOpts(requestParameters: DownloadScenarioEvidenceReportRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling downloadScenarioEvidenceReport().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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


        let urlPath = `/v1/scenario-runs/{runId}/evidence-report`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Creates the report once from terminal durable state and thereafter returns the exact persisted canonical JSON. It records the frozen authority and redacted evidence needed to substantiate the bounded implementation-verification claim; it is not editable scenario source, raw X12, or a compliance certificate. Stable failure codes are included, while detailed failure messages remain in the run timeline so the credential-free proof stays within its fixed export bound. If a retry creates another audit record for the same successful state change, the report counts that change once and keeps its earliest record; the timeline still shows every attempt.
     * Download the immutable evidence report for a terminal run
     */
    async downloadScenarioEvidenceReportRaw(requestParameters: DownloadScenarioEvidenceReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioEvidenceReport>> {
        const requestOptions = await this.downloadScenarioEvidenceReportRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScenarioEvidenceReportFromJSON(jsonValue));
    }

    /**
     * Creates the report once from terminal durable state and thereafter returns the exact persisted canonical JSON. It records the frozen authority and redacted evidence needed to substantiate the bounded implementation-verification claim; it is not editable scenario source, raw X12, or a compliance certificate. Stable failure codes are included, while detailed failure messages remain in the run timeline so the credential-free proof stays within its fixed export bound. If a retry creates another audit record for the same successful state change, the report counts that change once and keeps its earliest record; the timeline still shows every attempt.
     * Download the immutable evidence report for a terminal run
     */
    async downloadScenarioEvidenceReport(requestParameters: DownloadScenarioEvidenceReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioEvidenceReport> {
        const response = await this.downloadScenarioEvidenceReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getScenarioRun without sending the request
     */
    async getScenarioRunRequestOpts(requestParameters: GetScenarioRunRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling getScenarioRun().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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


        let urlPath = `/v1/scenario-runs/{runId}`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns the current durable revision, evidence-bearing observations, checks, outcome, and strong ETag. Sensitive fact values are redacted from the public representation.
     * Read current scenario run state and evidence
     */
    async getScenarioRunRaw(requestParameters: GetScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunViewResponse>> {
        const requestOptions = await this.getScenarioRunRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScenarioRunViewResponseFromJSON(jsonValue));
    }

    /**
     * Returns the current durable revision, evidence-bearing observations, checks, outcome, and strong ETag. Sensitive fact values are redacted from the public representation.
     * Read current scenario run state and evidence
     */
    async getScenarioRun(requestParameters: GetScenarioRunRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunViewResponse> {
        const response = await this.getScenarioRunRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getScenarioRunTimeline without sending the request
     */
    async getScenarioRunTimelineRequestOpts(requestParameters: GetScenarioRunTimelineRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['runId'] == null) {
            throw new runtime.RequiredError(
                'runId',
                'Required parameter "runId" was null or undefined when calling getScenarioRunTimeline().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

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


        let urlPath = `/v1/scenario-runs/{runId}/timeline`;
        urlPath = urlPath.replace('{runId}', encodeURIComponent(String(requestParameters['runId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns a bounded, newest-first audit timeline without idempotency hashes, attempt tokens, transient credentials, or operation result payloads. The cursor is opaque and bound to both the workspace and run.
     * Read the actor-attributed operation timeline for a run
     */
    async getScenarioRunTimelineRaw(requestParameters: GetScenarioRunTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunTimelineResponse>> {
        const requestOptions = await this.getScenarioRunTimelineRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScenarioRunTimelineResponseFromJSON(jsonValue));
    }

    /**
     * Returns a bounded, newest-first audit timeline without idempotency hashes, attempt tokens, transient credentials, or operation result payloads. The cursor is opaque and bound to both the workspace and run.
     * Read the actor-attributed operation timeline for a run
     */
    async getScenarioRunTimeline(requestParameters: GetScenarioRunTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunTimelineResponse> {
        const response = await this.getScenarioRunTimelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for listScenarioRuns without sending the request
     */
    async listScenarioRunsRequestOpts(requestParameters: ListScenarioRunsRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

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


        let urlPath = `/v1/scenario-runs`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns a bounded workspace-scoped summary of recent runs for discovery and navigation without exposing fact values or evidence payloads.
     * List recent scenario conversations
     */
    async listScenarioRunsRaw(requestParameters: ListScenarioRunsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCollection>> {
        const requestOptions = await this.listScenarioRunsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScenarioRunCollectionFromJSON(jsonValue));
    }

    /**
     * Returns a bounded workspace-scoped summary of recent runs for discovery and navigation without exposing fact values or evidence payloads.
     * List recent scenario conversations
     */
    async listScenarioRuns(requestParameters: ListScenarioRunsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCollection> {
        const response = await this.listScenarioRunsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for startScenarioRun without sending the request
     */
    async startScenarioRunRequestOpts(requestParameters: StartScenarioRunOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling startScenarioRun().'
            );
        }

        if (requestParameters['startScenarioRunRequest'] == null) {
            throw new runtime.RequiredError(
                'startScenarioRunRequest',
                'Required parameter "startScenarioRunRequest" was null or undefined when calling startScenarioRun().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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


        let urlPath = `/v1/scenario-runs`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StartScenarioRunRequestToJSON(requestParameters['startScenarioRunRequest']),
        };
    }

    /**
     * Starts a durable run from exact definition and binding hashes in the binding\'s production or test traffic environment. Both environments share deployed mappings, but transactions, dispatch, acknowledgments, and evidence remain in the selected environment. Optional typed parameters are checked against the definition before any operation is accepted. Registered adapter targets prepare their selected-profile runtime dependencies before the run is inserted; temporary preparation failures are retryable and return Retry-After. Does not send EDI. It uses an already applied binding and never publishes authored definitions or applies desired configuration. The reserved browser-managed binding cannot be selected here; apply your own binding (including one using a managed example). The key is scoped to operations in this workspace, not restricted to Test traffic.
     * Start a run from an exact applied binding
     */
    async startScenarioRunRaw(requestParameters: StartScenarioRunOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScenarioRunCommandResponse>> {
        const requestOptions = await this.startScenarioRunRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScenarioRunCommandResponseFromJSON(jsonValue));
    }

    /**
     * Starts a durable run from exact definition and binding hashes in the binding\'s production or test traffic environment. Both environments share deployed mappings, but transactions, dispatch, acknowledgments, and evidence remain in the selected environment. Optional typed parameters are checked against the definition before any operation is accepted. Registered adapter targets prepare their selected-profile runtime dependencies before the run is inserted; temporary preparation failures are retryable and return Retry-After. Does not send EDI. It uses an already applied binding and never publishes authored definitions or applies desired configuration. The reserved browser-managed binding cannot be selected here; apply your own binding (including one using a managed example). The key is scoped to operations in this workspace, not restricted to Test traffic.
     * Start a run from an exact applied binding
     */
    async startScenarioRun(requestParameters: StartScenarioRunOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScenarioRunCommandResponse> {
        const response = await this.startScenarioRunRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
