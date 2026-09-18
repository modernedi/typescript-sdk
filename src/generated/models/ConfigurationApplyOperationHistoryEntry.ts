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
import type { ConfigurationChangedBy } from './ConfigurationChangedBy.js';
import {
    ConfigurationChangedByFromJSON,
    ConfigurationChangedByFromJSONTyped,
    ConfigurationChangedByToJSON,
    ConfigurationChangedByToJSONTyped,
} from './ConfigurationChangedBy.js';

/**
 * Compact workspace change-history entry; use the operation endpoint for its full change list.
 * @export
 * @interface ConfigurationApplyOperationHistoryEntry
 */
export interface ConfigurationApplyOperationHistoryEntry {
    /**
     * Immutable public id formed as `apply-` followed by a canonical lowercase UUID.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    operationId: string;
    /**
     *
     * @type {ConfigurationChangedBy}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    changedBy: ConfigurationChangedBy;
    /**
     *
     * @type {ConfigurationApplyOperationStatus}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    status: ConfigurationApplyOperationStatus;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    desiredBundleSha256: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    planSha256: string;
    /**
     * Exact successful-plan snapshot ETag supplied in `If-Match`.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    baseSnapshotEtag: string;
    /**
     * Strong quoted SHA-256 identity of the committed post-apply configuration snapshot. It is available in both PENDING and SUCCEEDED operations because PENDING publication occurs only after database commit.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    appliedSnapshotEtag: string;
    /**
     * Tenant-wide runtime configuration revision committed by the aggregate database transaction.
     * @type {number}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    runtimeConfigurationRevision: number;
    /**
     *
     * @type {ConfigurationPlanSummary}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    summary: ConfigurationPlanSummary;
    /**
     *
     * @type {RuntimePublication}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    runtimePublication: RuntimePublication;
    /**
     * UTC instant when ModernEDI first accepted this idempotency key and semantic apply request.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    requestedAt: string;
    /**
     * UTC instant when the aggregate database transaction committed.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    committedAt: string;
    /**
     * UTC instant when runtime publication reached its terminal state, or null while `status` is `PENDING`.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryEntry
     */
    completedAt: string | null;
}



/**
 * Check if a given object implements the ConfigurationApplyOperationHistoryEntry interface.
 */
export function instanceOfConfigurationApplyOperationHistoryEntry(value: object): value is ConfigurationApplyOperationHistoryEntry {
    if (!('operationId' in value) || value['operationId'] === undefined) return false;
    if (!('changedBy' in value) || value['changedBy'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('desiredBundleSha256' in value) || value['desiredBundleSha256'] === undefined) return false;
    if (!('planSha256' in value) || value['planSha256'] === undefined) return false;
    if (!('baseSnapshotEtag' in value) || value['baseSnapshotEtag'] === undefined) return false;
    if (!('appliedSnapshotEtag' in value) || value['appliedSnapshotEtag'] === undefined) return false;
    if (!('runtimeConfigurationRevision' in value) || value['runtimeConfigurationRevision'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('runtimePublication' in value) || value['runtimePublication'] === undefined) return false;
    if (!('requestedAt' in value) || value['requestedAt'] === undefined) return false;
    if (!('committedAt' in value) || value['committedAt'] === undefined) return false;
    if (!('completedAt' in value) || value['completedAt'] === undefined) return false;
    return true;
}

export function ConfigurationApplyOperationHistoryEntryFromJSON(json: any): ConfigurationApplyOperationHistoryEntry {
    return ConfigurationApplyOperationHistoryEntryFromJSONTyped(json, false);
}

export function ConfigurationApplyOperationHistoryEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationApplyOperationHistoryEntry {
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
        'runtimePublication': RuntimePublicationFromJSON(json['runtimePublication']),
        'requestedAt': json['requestedAt'],
        'committedAt': json['committedAt'],
        'completedAt': json['completedAt'],
    };
}

export function ConfigurationApplyOperationHistoryEntryToJSON(json: any): ConfigurationApplyOperationHistoryEntry {
    return ConfigurationApplyOperationHistoryEntryToJSONTyped(json, false);
}

export function ConfigurationApplyOperationHistoryEntryToJSONTyped(value?: ConfigurationApplyOperationHistoryEntry | null, ignoreDiscriminator: boolean = false): any {
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
        'runtimePublication': RuntimePublicationToJSON(value['runtimePublication']),
        'requestedAt': value['requestedAt'],
        'committedAt': value['committedAt'],
        'completedAt': value['completedAt'],
    };
}
