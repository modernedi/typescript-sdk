/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import { mapValues } from '../runtime.js';
import type { ConfigurationApplyOperationStatus } from './ConfigurationApplyOperationStatus.js';
import {
    ConfigurationApplyOperationStatusFromJSON,
    ConfigurationApplyOperationStatusFromJSONTyped,
    ConfigurationApplyOperationStatusToJSON,
    ConfigurationApplyOperationStatusToJSONTyped,
} from './ConfigurationApplyOperationStatus.js';
import type { ConfigurationPlanSummary } from './ConfigurationPlanSummary.js';
import {
    ConfigurationPlanSummaryFromJSON,
    ConfigurationPlanSummaryFromJSONTyped,
    ConfigurationPlanSummaryToJSON,
    ConfigurationPlanSummaryToJSONTyped,
} from './ConfigurationPlanSummary.js';
import type { RuntimePublication } from './RuntimePublication.js';
import {
    RuntimePublicationFromJSON,
    RuntimePublicationFromJSONTyped,
    RuntimePublicationToJSON,
    RuntimePublicationToJSONTyped,
} from './RuntimePublication.js';
import type { ConfigurationPlanOperation } from './ConfigurationPlanOperation.js';
import {
    ConfigurationPlanOperationFromJSON,
    ConfigurationPlanOperationFromJSONTyped,
    ConfigurationPlanOperationToJSON,
    ConfigurationPlanOperationToJSONTyped,
} from './ConfigurationPlanOperation.js';
import type { ConfigurationChangedBy } from './ConfigurationChangedBy.js';
import {
    ConfigurationChangedByFromJSON,
    ConfigurationChangedByFromJSONTyped,
    ConfigurationChangedByToJSON,
    ConfigurationChangedByToJSONTyped,
} from './ConfigurationChangedBy.js';

/**
 * Immutable public journal entry for one aggregate configuration apply. Internal leases, attempts, lock state, API-key database ids, and retry scheduling are never exposed; the immutable human-readable actor label is included.
 * @export
 * @interface ConfigurationApplyOperation
 */
export interface ConfigurationApplyOperation {
    /**
     * Immutable public id formed as `apply-` followed by a canonical lowercase UUID.
     * @type {string}
     * @memberof ConfigurationApplyOperation
     */
    operationId: string;
    /**
     *
     * @type {ConfigurationChangedBy}
     * @memberof ConfigurationApplyOperation
     */
    changedBy: ConfigurationChangedBy;
    /**
     *
     * @type {ConfigurationApplyOperationStatus}
     * @memberof ConfigurationApplyOperation
     */
    status: ConfigurationApplyOperationStatus;
    /**
     * Applied canonical `modernedi.json` manifest digest.
     * @type {string}
     * @memberof ConfigurationApplyOperation
     */
    desiredBundleSha256: string;
    /**
     * Deterministic plan identity accepted by this operation.
     * @type {string}
     * @memberof ConfigurationApplyOperation
     */
    planSha256: string;
    /**
     * Exact successful-plan snapshot ETag supplied in `If-Match`.
     * @type {string}
     * @memberof ConfigurationApplyOperation
     */
    baseSnapshotEtag: string;
    /**
     * Strong quoted SHA-256 identity of the committed post-apply configuration snapshot. It is available in both PENDING and SUCCEEDED operations because PENDING publication occurs only after database commit.
     * @type {string}
     * @memberof ConfigurationApplyOperation
     */
    appliedSnapshotEtag: string;
    /**
     * Tenant-wide runtime configuration revision committed by the aggregate database transaction.
     * @type {number}
     * @memberof ConfigurationApplyOperation
     */
    runtimeConfigurationRevision: number;
    /**
     *
     * @type {ConfigurationPlanSummary}
     * @memberof ConfigurationApplyOperation
     */
    summary: ConfigurationPlanSummary;
    /**
     * Exact deterministic `CREATE`, `UPDATE`, and `DELETE` operations committed from the accepted plan.
     * @type {Array<ConfigurationPlanOperation>}
     * @memberof ConfigurationApplyOperation
     */
    operations: Array<ConfigurationPlanOperation>;
    /**
     * State of the single post-commit workspace runtime publication for this aggregate operation.
     * @type {RuntimePublication}
     * @memberof ConfigurationApplyOperation
     */
    runtimePublication: RuntimePublication;
    /**
     * UTC instant when ModernEDI first accepted this idempotency key and semantic apply request.
     * @type {string}
     * @memberof ConfigurationApplyOperation
     */
    requestedAt: string;
    /**
     * UTC instant when the aggregate database transaction committed.
     * @type {string}
     * @memberof ConfigurationApplyOperation
     */
    committedAt: string;
    /**
     * UTC instant when runtime publication reached its terminal state, or null while `status` is `PENDING`.
     * @type {string}
     * @memberof ConfigurationApplyOperation
     */
    completedAt: string | null;
}



/**
 * Check if a given object implements the ConfigurationApplyOperation interface.
 */
export function instanceOfConfigurationApplyOperation(value: object): value is ConfigurationApplyOperation {
    if (!('operationId' in value) || value['operationId'] === undefined) return false;
    if (!('changedBy' in value) || value['changedBy'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('desiredBundleSha256' in value) || value['desiredBundleSha256'] === undefined) return false;
    if (!('planSha256' in value) || value['planSha256'] === undefined) return false;
    if (!('baseSnapshotEtag' in value) || value['baseSnapshotEtag'] === undefined) return false;
    if (!('appliedSnapshotEtag' in value) || value['appliedSnapshotEtag'] === undefined) return false;
    if (!('runtimeConfigurationRevision' in value) || value['runtimeConfigurationRevision'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('operations' in value) || value['operations'] === undefined) return false;
    if (!('runtimePublication' in value) || value['runtimePublication'] === undefined) return false;
    if (!('requestedAt' in value) || value['requestedAt'] === undefined) return false;
    if (!('committedAt' in value) || value['committedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    return true;
}

export function ConfigurationApplyOperationFromJSON(json: any): ConfigurationApplyOperation {
    return ConfigurationApplyOperationFromJSONTyped(json, false);
}

export function ConfigurationApplyOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationApplyOperation {
    if (json == null) {
        return json;
    }
    return {

        'operationId': json['operationId'],
        'changedBy': ConfigurationChangedByFromJSON(json['changedBy']),
        'status': ConfigurationApplyOperationStatusFromJSON(json['status']),
        'desiredBundleSha256': json['desiredBundleSha256'],
        'planSha256': json['planSha256'],
        'baseSnapshotEtag': json['baseSnapshotEtag'],
        'appliedSnapshotEtag': json['appliedSnapshotEtag'],
        'runtimeConfigurationRevision': json['runtimeConfigurationRevision'],
        'summary': ConfigurationPlanSummaryFromJSON(json['summary']),
        'operations': ((json['operations'] as Array<any>).map(ConfigurationPlanOperationFromJSON)),
        'runtimePublication': RuntimePublicationFromJSON(json['runtimePublication']),
        'requestedAt': json['requestedAt'],
        'committedAt': json['committedAt'],
        'completedAt': json['completedAt'],
    };
}

export function ConfigurationApplyOperationToJSON(json: any): ConfigurationApplyOperation {
    return ConfigurationApplyOperationToJSONTyped(json, false);
}

export function ConfigurationApplyOperationToJSONTyped(value?: ConfigurationApplyOperation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'operationId': value['operationId'],
        'changedBy': ConfigurationChangedByToJSON(value['changedBy']),
        'status': ConfigurationApplyOperationStatusToJSON(value['status']),
        'desiredBundleSha256': value['desiredBundleSha256'],
        'planSha256': value['planSha256'],
        'baseSnapshotEtag': value['baseSnapshotEtag'],
        'appliedSnapshotEtag': value['appliedSnapshotEtag'],
        'runtimeConfigurationRevision': value['runtimeConfigurationRevision'],
        'summary': ConfigurationPlanSummaryToJSON(value['summary']),
        'operations': ((value['operations'] as Array<any>).map(ConfigurationPlanOperationToJSON)),
        'runtimePublication': RuntimePublicationToJSON(value['runtimePublication']),
        'requestedAt': value['requestedAt'],
        'committedAt': value['committedAt'],
        'completedAt': value['completedAt'],
    };
}
