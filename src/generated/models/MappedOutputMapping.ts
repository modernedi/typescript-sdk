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
 * Identity and immutable execution provenance of the published incoming map that generated a queued output.
 * @export
 * @interface MappedOutputMapping
 */
export interface MappedOutputMapping {
    /**
     * Workspace-scoped mapping id, or `null` for historical outputs that predate persisted map identity.
     * @type {number}
     * @memberof MappedOutputMapping
     */
    id?: number | null;
    /**
     * Runtime mapping implementation name, or `null` when it was not recorded with an older output.
     * @type {string}
     * @memberof MappedOutputMapping
     */
    type?: string | null;
    /**
     * Customer-visible source filename, or `null` when unavailable on an older output.
     * @type {string}
     * @memberof MappedOutputMapping
     */
    file?: string | null;
    /**
     * Base64-encoded SHA-256 hash of the published map contents. Omitted when `deliveredMetadata.mappingSourceHash` is `false`.
     *
     * @type {string}
     * @memberof MappedOutputMapping
     */
    fileSha256Hash?: string;
    /**
     * Immutable grammar-catalog revision declared by the mapping execution; omitted for legacy outputs.
     * @type {string}
     * @memberof MappedOutputMapping
     */
    syntaxTreeCatalogRevision?: string;
    /**
     * SHA-256 of the exact transaction-set grammar bytes used by the mapping execution; omitted for legacy outputs.
     * @type {string}
     * @memberof MappedOutputMapping
     */
    syntaxTreeSha256?: string;
}

/**
 * Check if a given object implements the MappedOutputMapping interface.
 */
export function instanceOfMappedOutputMapping(value: object): value is MappedOutputMapping {
    return true;
}

export function MappedOutputMappingFromJSON(json: any): MappedOutputMapping {
    return MappedOutputMappingFromJSONTyped(json, false);
}

export function MappedOutputMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputMapping {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'] === undefined ? undefined : json['id'] === null ? null : json['id'],
        'type': json['type'] === undefined ? undefined : json['type'] === null ? null : json['type'],
        'file': json['file'] === undefined ? undefined : json['file'] === null ? null : json['file'],
        'fileSha256Hash': json['fileSha256Hash'] == null ? undefined : json['fileSha256Hash'],
        'syntaxTreeCatalogRevision': json['syntaxTreeCatalogRevision'] == null ? undefined : json['syntaxTreeCatalogRevision'],
        'syntaxTreeSha256': json['syntaxTreeSha256'] == null ? undefined : json['syntaxTreeSha256'],
    };
}

export function MappedOutputMappingToJSON(json: any): MappedOutputMapping {
    return MappedOutputMappingToJSONTyped(json, false);
}

export function MappedOutputMappingToJSONTyped(value?: MappedOutputMapping | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'file': value['file'],
        'fileSha256Hash': value['fileSha256Hash'],
        'syntaxTreeCatalogRevision': value['syntaxTreeCatalogRevision'],
        'syntaxTreeSha256': value['syntaxTreeSha256'],
    };
}
