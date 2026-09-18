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
import type { MappingRuntimeTransactionReference } from './MappingRuntimeTransactionReference.js';
import {
    MappingRuntimeTransactionReferenceFromJSON,
    MappingRuntimeTransactionReferenceFromJSONTyped,
    MappingRuntimeTransactionReferenceToJSON,
    MappingRuntimeTransactionReferenceToJSONTyped,
} from './MappingRuntimeTransactionReference.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * One persisted mapping execution result with source revision, diagnostic location, replay linkage, and resolution state.
 * @export
 * @interface TransactionMappingAttempt
 */
export interface TransactionMappingAttempt {
    /**
     * ModernEDI correlation id for the mapping operation. For a normal transaction-backed attempt this is the AS2 Message-Id. For a pre-transaction outbound failure it is an opaque request correlation id and must not be presented as an AS2 Message-Id.
     *
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    correlationId: string;
    /**
     * Transaction that owns this attempt, or `null` when mapping failed before ModernEDI could create a transaction.
     *
     * @type {MappingRuntimeTransactionReference}
     * @memberof TransactionMappingAttempt
     */
    transactionReference: MappingRuntimeTransactionReference | null;
    /**
     * Opaque identifier for correlating and retrieving a failed attempt. This is `null` for successful attempts because the failure-detail endpoint intentionally exposes only retained failures.
     *
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    failureId: string | null;
    /**
     * Opaque identifier for this individual mapping execution attempt.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    attemptId: string;
    /**
     * Source transaction key shown in the transaction viewer. Pre-transaction outbound failures use the sentinel `outbound-request`; internal mapping-attempt persistence keys are never exposed.
     *
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    transactionKey: string;
    /**
     * Whether this attempt processed inbound X12 or generated outbound X12.
     * @type {TransactionMappingAttemptDirectionEnum}
     * @memberof TransactionMappingAttempt
     */
    direction: TransactionMappingAttemptDirectionEnum;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionMappingAttempt
     */
    environment: TransactionEnvironmentValue;
    /**
     * Partner name captured at execution time, or `null` when attribution was unavailable.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    partnerName?: string | null;
    /**
     * Stable workspace-scoped partner id, or `null` when the attempt could not be attributed.
     * @type {number}
     * @memberof TransactionMappingAttempt
     */
    partnerId?: number | null;
    /**
     * Workspace-scoped mapping id, or `null` when no published map was resolved.
     * @type {number}
     * @memberof TransactionMappingAttempt
     */
    mappingId?: number | null;
    /**
     * Transform filename attempted, or `null` when selection failed before a file was resolved.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    mapFile?: string | null;
    /**
     * Base64 SHA-256 hash of the transform source actually attempted, or `null` when unavailable.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    mapFileSha256Hash?: string | null;
    /**
     * Base64 SHA-256 hash of the currently published source, or `null` when it cannot be resolved.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    currentMapFileSha256Hash?: string | null;
    /**
     * Whether the attempted map hash is still the currently published revision.
     * @type {boolean}
     * @memberof TransactionMappingAttempt
     */
    currentRevision: boolean;
    /**
     * ST01 transaction-set identifier associated with the attempt, or `null` when unknown.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    transactionSetIdentifierCode?: string | null;
    /**
     * ST02 transaction control number associated with the attempt, or `null` when unknown.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    transactionControlNumber?: string | null;
    /**
     * GS01 functional identifier associated with the attempt, or `null` when unknown.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    functionalIdentifierCode?: string | null;
    /**
     * GS06 functional-group control number associated with the attempt, or `null` when unknown.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    functionalGroupControlNumber?: string | null;
    /**
     * X12 implementation version used by the attempt, or `null` when unresolved.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    x12Version?: string | null;
    /**
     * Mapping pipeline stage that produced the result.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    stage: string;
    /**
     * Whether this individual mapping attempt succeeded or failed.
     * @type {TransactionMappingAttemptStatusEnum}
     * @memberof TransactionMappingAttempt
     */
    status: TransactionMappingAttemptStatusEnum;
    /**
     * Stable machine-readable mapping result code.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    code: string;
    /**
     * Sanitized diagnostic message safe to display to workspace operators.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    safeMessage?: string | null;
    /**
     * One-based source line for a transform diagnostic, or `null` when no precise location exists.
     * @type {number}
     * @memberof TransactionMappingAttempt
     */
    line?: number | null;
    /**
     * One-based source column for a transform diagnostic, or `null` when no precise location exists.
     * @type {number}
     * @memberof TransactionMappingAttempt
     */
    column?: number | null;
    /**
     * Fallback behavior used after this attempt, or `NONE`.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    fallback: string;
    /**
     * UTC instant when this mapping attempt was recorded.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    timestamp: string;
    /**
     * Replay operation id that created this attempt, or `null` for ordinary processing.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    replayId?: string | null;
    /**
     * Original failed attempt targeted by this replay, or `null` when the attempt was not a replay.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    replayOfAttemptId?: string | null;
    /**
     * Whether a later successful attempt has resolved this failure for operator-attention purposes.
     * @type {boolean}
     * @memberof TransactionMappingAttempt
     */
    resolved: boolean;
    /**
     * UTC instant when the failure was resolved, or `null` while unresolved or not applicable.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    resolvedAt?: string | null;
    /**
     * Successful attempt id that resolved this failure, or `null` while unresolved or not applicable.
     * @type {string}
     * @memberof TransactionMappingAttempt
     */
    resolvedByAttemptId?: string | null;
}


/**
 * @export
 */
export const TransactionMappingAttemptDirectionEnum = {
    Inbound: 'inbound',
    Outbound: 'outbound',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappingAttemptDirectionEnum = typeof TransactionMappingAttemptDirectionEnum[keyof typeof TransactionMappingAttemptDirectionEnum];

/**
 * @export
 */
export const TransactionMappingAttemptStatusEnum = {
    Failed: 'FAILED',
    Succeeded: 'SUCCEEDED',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappingAttemptStatusEnum = typeof TransactionMappingAttemptStatusEnum[keyof typeof TransactionMappingAttemptStatusEnum];


/**
 * Check if a given object implements the TransactionMappingAttempt interface.
 */
export function instanceOfTransactionMappingAttempt(value: object): value is TransactionMappingAttempt {
    if (!('correlationId' in value) || value['correlationId'] === undefined) return false;
    if (!('transactionReference' in value) || value['transactionReference'] === undefined) return false;
    if (!('failureId' in value) || value['failureId'] === undefined) return false;
    if (!('attemptId' in value) || value['attemptId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('currentRevision' in value) || value['currentRevision'] === undefined) return false;
    if (!('stage' in value) || value['stage'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('fallback' in value) || value['fallback'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('resolved' in value) || value['resolved'] === undefined) return false;
    return true;
}

export function TransactionMappingAttemptFromJSON(json: any): TransactionMappingAttempt {
    return TransactionMappingAttemptFromJSONTyped(json, false);
}

export function TransactionMappingAttemptFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappingAttempt {
    if (json == null) {
        return json;
    }
    return {

        'correlationId': json['correlationId'],
        'transactionReference': MappingRuntimeTransactionReferenceFromJSON(json['transactionReference']),
        'failureId': json['failureId'],
        'attemptId': json['attemptId'],
        'transactionKey': json['transactionKey'],
        'direction': json['direction'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'partnerName': json['partnerName'] === undefined ? undefined : json['partnerName'] === null ? null : json['partnerName'],
        'partnerId': json['partnerId'] === undefined ? undefined : json['partnerId'] === null ? null : json['partnerId'],
        'mappingId': json['mappingId'] === undefined ? undefined : json['mappingId'] === null ? null : json['mappingId'],
        'mapFile': json['mapFile'] === undefined ? undefined : json['mapFile'] === null ? null : json['mapFile'],
        'mapFileSha256Hash': json['mapFileSha256Hash'] === undefined ? undefined : json['mapFileSha256Hash'] === null ? null : json['mapFileSha256Hash'],
        'currentMapFileSha256Hash': json['currentMapFileSha256Hash'] === undefined ? undefined : json['currentMapFileSha256Hash'] === null ? null : json['currentMapFileSha256Hash'],
        'currentRevision': json['currentRevision'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'] === undefined ? undefined : json['transactionSetIdentifierCode'] === null ? null : json['transactionSetIdentifierCode'],
        'transactionControlNumber': json['transactionControlNumber'] === undefined ? undefined : json['transactionControlNumber'] === null ? null : json['transactionControlNumber'],
        'functionalIdentifierCode': json['functionalIdentifierCode'] === undefined ? undefined : json['functionalIdentifierCode'] === null ? null : json['functionalIdentifierCode'],
        'functionalGroupControlNumber': json['functionalGroupControlNumber'] === undefined ? undefined : json['functionalGroupControlNumber'] === null ? null : json['functionalGroupControlNumber'],
        'x12Version': json['x12Version'] === undefined ? undefined : json['x12Version'] === null ? null : json['x12Version'],
        'stage': json['stage'],
        'status': json['status'],
        'code': json['code'],
        'safeMessage': json['safeMessage'] === undefined ? undefined : json['safeMessage'] === null ? null : json['safeMessage'],
        'line': json['line'] === undefined ? undefined : json['line'] === null ? null : json['line'],
        'column': json['column'] === undefined ? undefined : json['column'] === null ? null : json['column'],
        'fallback': json['fallback'],
        'timestamp': json['timestamp'],
        'replayId': json['replayId'] === undefined ? undefined : json['replayId'] === null ? null : json['replayId'],
        'replayOfAttemptId': json['replayOfAttemptId'] === undefined ? undefined : json['replayOfAttemptId'] === null ? null : json['replayOfAttemptId'],
        'resolved': json['resolved'],
        'resolvedAt': json['resolvedAt'] === undefined ? undefined : json['resolvedAt'] === null ? null : json['resolvedAt'],
        'resolvedByAttemptId': json['resolvedByAttemptId'] === undefined ? undefined : json['resolvedByAttemptId'] === null ? null : json['resolvedByAttemptId'],
    };
}

export function TransactionMappingAttemptToJSON(json: any): TransactionMappingAttempt {
    return TransactionMappingAttemptToJSONTyped(json, false);
}

export function TransactionMappingAttemptToJSONTyped(value?: TransactionMappingAttempt | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'correlationId': value['correlationId'],
        'transactionReference': MappingRuntimeTransactionReferenceToJSON(value['transactionReference']),
        'failureId': value['failureId'],
        'attemptId': value['attemptId'],
        'transactionKey': value['transactionKey'],
        'direction': value['direction'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'partnerName': value['partnerName'],
        'partnerId': value['partnerId'],
        'mappingId': value['mappingId'],
        'mapFile': value['mapFile'],
        'mapFileSha256Hash': value['mapFileSha256Hash'],
        'currentMapFileSha256Hash': value['currentMapFileSha256Hash'],
        'currentRevision': value['currentRevision'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'transactionControlNumber': value['transactionControlNumber'],
        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'functionalGroupControlNumber': value['functionalGroupControlNumber'],
        'x12Version': value['x12Version'],
        'stage': value['stage'],
        'status': value['status'],
        'code': value['code'],
        'safeMessage': value['safeMessage'],
        'line': value['line'],
        'column': value['column'],
        'fallback': value['fallback'],
        'timestamp': value['timestamp'],
        'replayId': value['replayId'],
        'replayOfAttemptId': value['replayOfAttemptId'],
        'resolved': value['resolved'],
        'resolvedAt': value['resolvedAt'],
        'resolvedByAttemptId': value['resolvedByAttemptId'],
    };
}
