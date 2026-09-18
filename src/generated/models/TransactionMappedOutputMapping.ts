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
/**
 * Mapping identity and revision comparison recorded with a transaction's persisted output.
 * @export
 * @interface TransactionMappedOutputMapping
 */
export interface TransactionMappedOutputMapping {
    /**
     * Workspace-scoped mapping id, or `null` when historical provenance is incomplete.
     * @type {number}
     * @memberof TransactionMappedOutputMapping
     */
    id?: number | null;
    /**
     * Runtime mapping implementation name, or `null` when historical provenance is incomplete.
     * @type {string}
     * @memberof TransactionMappedOutputMapping
     */
    type?: string | null;
    /**
     * Transform filename used to create the output, or `null` when not recorded.
     * @type {string}
     * @memberof TransactionMappedOutputMapping
     */
    file?: string | null;
    /**
     * Base64-encoded SHA-256 hash of the map file used when the inbound output was produced.
     * @type {string}
     * @memberof TransactionMappedOutputMapping
     */
    fileSha256Hash?: string | null;
    /**
     * Base64-encoded SHA-256 hash of the currently published map file, when it can be resolved.
     * @type {string}
     * @memberof TransactionMappedOutputMapping
     */
    currentFileSha256Hash?: string | null;
    /**
     * Whether the producing source is current, changed, missing, or cannot be compared.
     * @type {TransactionMappedOutputMappingVersionStatusEnum}
     * @memberof TransactionMappedOutputMapping
     */
    versionStatus: TransactionMappedOutputMappingVersionStatusEnum;
    /**
     * Immutable grammar-catalog revision declared by the producing mapping execution; `null` for legacy records.
     * @type {string}
     * @memberof TransactionMappedOutputMapping
     */
    syntaxTreeCatalogRevision?: string | null;
    /**
     * SHA-256 of the exact transaction-set grammar bytes used by the producing mapping execution; `null` for legacy records.
     * @type {string}
     * @memberof TransactionMappedOutputMapping
     */
    syntaxTreeSha256?: string | null;
}


/**
 * @export
 */
export const TransactionMappedOutputMappingVersionStatusEnum = {
    Current: 'current',
    Changed: 'changed',
    Missing: 'missing',
    Unknown: 'unknown',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappedOutputMappingVersionStatusEnum = typeof TransactionMappedOutputMappingVersionStatusEnum[keyof typeof TransactionMappedOutputMappingVersionStatusEnum];


/**
 * Check if a given object implements the TransactionMappedOutputMapping interface.
 */
export function instanceOfTransactionMappedOutputMapping(value: object): value is TransactionMappedOutputMapping {
    if (!('versionStatus' in value) || value['versionStatus'] === undefined) return false;
    return true;
}

export function TransactionMappedOutputMappingFromJSON(json: any): TransactionMappedOutputMapping {
    return TransactionMappedOutputMappingFromJSONTyped(json, false);
}

export function TransactionMappedOutputMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappedOutputMapping {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'] === undefined ? undefined : json['id'] === null ? null : json['id'],
        'type': json['type'] === undefined ? undefined : json['type'] === null ? null : json['type'],
        'file': json['file'] === undefined ? undefined : json['file'] === null ? null : json['file'],
        'fileSha256Hash': json['fileSha256Hash'] === undefined ? undefined : json['fileSha256Hash'] === null ? null : json['fileSha256Hash'],
        'currentFileSha256Hash': json['currentFileSha256Hash'] === undefined ? undefined : json['currentFileSha256Hash'] === null ? null : json['currentFileSha256Hash'],
        'versionStatus': json['versionStatus'],
        'syntaxTreeCatalogRevision': json['syntaxTreeCatalogRevision'] === undefined ? undefined : json['syntaxTreeCatalogRevision'] === null ? null : json['syntaxTreeCatalogRevision'],
        'syntaxTreeSha256': json['syntaxTreeSha256'] === undefined ? undefined : json['syntaxTreeSha256'] === null ? null : json['syntaxTreeSha256'],
    };
}

export function TransactionMappedOutputMappingToJSON(json: any): TransactionMappedOutputMapping {
    return TransactionMappedOutputMappingToJSONTyped(json, false);
}

export function TransactionMappedOutputMappingToJSONTyped(value?: TransactionMappedOutputMapping | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'file': value['file'],
        'fileSha256Hash': value['fileSha256Hash'],
        'currentFileSha256Hash': value['currentFileSha256Hash'],
        'versionStatus': value['versionStatus'],
        'syntaxTreeCatalogRevision': value['syntaxTreeCatalogRevision'],
        'syntaxTreeSha256': value['syntaxTreeSha256'],
    };
}
