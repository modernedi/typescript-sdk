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
 * Content-addressed identifiers for the exact X12 grammar used to validate and execute a mapping. These values support reproducibility and diagnostics and do not expose internal storage locations.
 *
 * @export
 * @interface SyntaxTreeCatalogBinding
 */
export interface SyntaxTreeCatalogBinding {
    /**
     * Version of this catalog-binding metadata contract, used by clients to interpret the immutable grammar identifiers safely.
     * @type {SyntaxTreeCatalogBindingSchemaVersionEnum}
     * @memberof SyntaxTreeCatalogBinding
     */
    schemaVersion: SyntaxTreeCatalogBindingSchemaVersionEnum;
    /**
     * SHA-256 identity of the complete immutable syntax-tree catalog at approval time. This approval revision can differ from a later active platform catalog when syntaxTreeSha256 proves that the exact grammar for this mapping's X12 version and transaction set is unchanged.
     *
     * @type {string}
     * @memberof SyntaxTreeCatalogBinding
     */
    catalogRevision: string;
    /**
     * SHA-256 of the canonical catalog manifest.
     * @type {string}
     * @memberof SyntaxTreeCatalogBinding
     */
    manifestSha256: string;
    /**
     * SHA-256 of the exact normalized grammar bytes for this X12 version and transaction set.
     * @type {string}
     * @memberof SyntaxTreeCatalogBinding
     */
    syntaxTreeSha256: string;
}


/**
 * @export
 */
export const SyntaxTreeCatalogBindingSchemaVersionEnum = {
    NUMBER_1: 1,
    NUMBER_unknown_default_open_api: 11184809
} as const;
export type SyntaxTreeCatalogBindingSchemaVersionEnum = typeof SyntaxTreeCatalogBindingSchemaVersionEnum[keyof typeof SyntaxTreeCatalogBindingSchemaVersionEnum];


/**
 * Check if a given object implements the SyntaxTreeCatalogBinding interface.
 */
export function instanceOfSyntaxTreeCatalogBinding(value: object): value is SyntaxTreeCatalogBinding {
    if (!('schemaVersion' in value) || value['schemaVersion'] === undefined) return false;

    if (value['schemaVersion'] !== 1) return false;
    if (!('catalogRevision' in value) || value['catalogRevision'] === undefined) return false;
    if (!('manifestSha256' in value) || value['manifestSha256'] === undefined) return false;
    if (!('syntaxTreeSha256' in value) || value['syntaxTreeSha256'] === undefined) return false;
    return true;
}

export function SyntaxTreeCatalogBindingFromJSON(json: any): SyntaxTreeCatalogBinding {
    return SyntaxTreeCatalogBindingFromJSONTyped(json, false);
}

export function SyntaxTreeCatalogBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyntaxTreeCatalogBinding {
    if (json == null) {
        return json;
    }
    return {

        'schemaVersion': json['schemaVersion'],
        'catalogRevision': json['catalogRevision'],
        'manifestSha256': json['manifestSha256'],
        'syntaxTreeSha256': json['syntaxTreeSha256'],
    };
}

export function SyntaxTreeCatalogBindingToJSON(json: any): SyntaxTreeCatalogBinding {
    return SyntaxTreeCatalogBindingToJSONTyped(json, false);
}

export function SyntaxTreeCatalogBindingToJSONTyped(value?: SyntaxTreeCatalogBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'schemaVersion': value['schemaVersion'],
        'catalogRevision': value['catalogRevision'],
        'manifestSha256': value['manifestSha256'],
        'syntaxTreeSha256': value['syntaxTreeSha256'],
    };
}
