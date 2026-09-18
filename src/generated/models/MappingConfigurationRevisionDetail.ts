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
import type { MappingConfigurationRevisionTransformDetail } from './MappingConfigurationRevisionTransformDetail.js';
import {
    MappingConfigurationRevisionTransformDetailFromJSON,
    MappingConfigurationRevisionTransformDetailFromJSONTyped,
    MappingConfigurationRevisionTransformDetailToJSON,
    MappingConfigurationRevisionTransformDetailToJSONTyped,
} from './MappingConfigurationRevisionTransformDetail.js';
import type { SyntaxTreeCatalogBinding } from './SyntaxTreeCatalogBinding.js';
import {
    SyntaxTreeCatalogBindingFromJSON,
    SyntaxTreeCatalogBindingFromJSONTyped,
    SyntaxTreeCatalogBindingToJSON,
    SyntaxTreeCatalogBindingToJSONTyped,
} from './SyntaxTreeCatalogBinding.js';

/**
 *
 * @export
 * @interface MappingConfigurationRevisionDetail
 */
export interface MappingConfigurationRevisionDetail {
    /**
     * Immutable id for this stored mapping-configuration revision.
     * @type {number}
     * @memberof MappingConfigurationRevisionDetail
     */
    revisionId: number;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof MappingConfigurationRevisionDetail
     */
    createdAt: string;
    /**
     * Base64-encoded SHA-256 hash of the transform source text. This identifies source content; it is not a concurrency-control ETag.
     * @type {string}
     * @memberof MappingConfigurationRevisionDetail
     */
    sourceHash: string;
    /**
     * Lowercase hexadecimal SHA-256 identity of the complete immutable mapping configuration, or `null` for a legacy revision written before exact configuration identities were recorded.
     * @type {string}
     * @memberof MappingConfigurationRevisionDetail
     */
    configurationSha256: string | null;
    /**
     * Whether this exact mapping configuration is currently published. Source text alone is insufficient to make a revision current.
     * @type {boolean}
     * @memberof MappingConfigurationRevisionDetail
     */
    current: boolean;
    /**
     *
     * @type {SyntaxTreeCatalogBinding}
     * @memberof MappingConfigurationRevisionDetail
     */
    syntaxTreeCatalog?: SyntaxTreeCatalogBinding;
    /**
     *
     * @type {MappingConfigurationRevisionTransformDetail}
     * @memberof MappingConfigurationRevisionDetail
     */
    transform: MappingConfigurationRevisionTransformDetail;
}

/**
 * Check if a given object implements the MappingConfigurationRevisionDetail interface.
 */
export function instanceOfMappingConfigurationRevisionDetail(value: object): value is MappingConfigurationRevisionDetail {
    if (!('revisionId' in value) || value['revisionId'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('sourceHash' in value) || value['sourceHash'] === undefined) return false;
    if (!('configurationSha256' in value) || value['configurationSha256'] === undefined) return false;
    if (!('current' in value) || value['current'] === undefined) return false;
    if (!('transform' in value) || value['transform'] === undefined) return false;
    return true;
}

export function MappingConfigurationRevisionDetailFromJSON(json: any): MappingConfigurationRevisionDetail {
    return MappingConfigurationRevisionDetailFromJSONTyped(json, false);
}

export function MappingConfigurationRevisionDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingConfigurationRevisionDetail {
    if (json == null) {
        return json;
    }
    return {

        'revisionId': json['revisionId'],
        'createdAt': json['createdAt'],
        'sourceHash': json['sourceHash'],
        'configurationSha256': json['configurationSha256'],
        'current': json['current'],
        'syntaxTreeCatalog': json['syntaxTreeCatalog'] == null ? undefined : SyntaxTreeCatalogBindingFromJSON(json['syntaxTreeCatalog']),
        'transform': MappingConfigurationRevisionTransformDetailFromJSON(json['transform']),
    };
}

export function MappingConfigurationRevisionDetailToJSON(json: any): MappingConfigurationRevisionDetail {
    return MappingConfigurationRevisionDetailToJSONTyped(json, false);
}

export function MappingConfigurationRevisionDetailToJSONTyped(value?: MappingConfigurationRevisionDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'revisionId': value['revisionId'],
        'createdAt': value['createdAt'],
        'sourceHash': value['sourceHash'],
        'configurationSha256': value['configurationSha256'],
        'current': value['current'],
        'syntaxTreeCatalog': SyntaxTreeCatalogBindingToJSON(value['syntaxTreeCatalog']),
        'transform': MappingConfigurationRevisionTransformDetailToJSON(value['transform']),
    };
}
