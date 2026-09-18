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
import type { MappingConfigurationRevisionDetail } from './MappingConfigurationRevisionDetail.js';
import {
    MappingConfigurationRevisionDetailFromJSON,
    MappingConfigurationRevisionDetailFromJSONTyped,
    MappingConfigurationRevisionDetailToJSON,
    MappingConfigurationRevisionDetailToJSONTyped,
} from './MappingConfigurationRevisionDetail.js';
import type { MappingConfigurationRevisionSummary } from './MappingConfigurationRevisionSummary.js';
import {
    MappingConfigurationRevisionSummaryFromJSON,
    MappingConfigurationRevisionSummaryFromJSONTyped,
    MappingConfigurationRevisionSummaryToJSON,
    MappingConfigurationRevisionSummaryToJSONTyped,
} from './MappingConfigurationRevisionSummary.js';

/**
 * Newest-first immutable mapping-configuration history plus the complete currently published transform source and configuration identity.
 * @export
 * @interface MappingConfigurationRevisionListResponse
 */
export interface MappingConfigurationRevisionListResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof MappingConfigurationRevisionListResponse
     */
    success: boolean;
    /**
     * Stable workspace-scoped mapping id whose configuration history was requested.
     * @type {number}
     * @memberof MappingConfigurationRevisionListResponse
     */
    mappingId: number;
    /**
     * Quoted ETag for the complete currently published mapping.
     * @type {string}
     * @memberof MappingConfigurationRevisionListResponse
     */
    currentEtag: string;
    /**
     * Complete currently published transform source and exact configuration identity from the same locked snapshot as `currentEtag`. This is present even when its chronological revision entry is outside the current page.
     * @type {MappingConfigurationRevisionDetail}
     * @memberof MappingConfigurationRevisionListResponse
     */
    currentRevision: MappingConfigurationRevisionDetail;
    /**
     * Opaque cursor for the next chronological page, or `null` when no older configuration revisions remain.
     * @type {string}
     * @memberof MappingConfigurationRevisionListResponse
     */
    nextCursor: string | null;
    /**
     * Whether another page is available through `nextCursor`.
     * @type {boolean}
     * @memberof MappingConfigurationRevisionListResponse
     */
    hasMore: boolean;
    /**
     * One newest-first page of unique immutable mapping-configuration summaries. Identical source text can appear in multiple entries when another configuration value differs.
     * @type {Array<MappingConfigurationRevisionSummary>}
     * @memberof MappingConfigurationRevisionListResponse
     */
    revisions: Array<MappingConfigurationRevisionSummary>;
}

/**
 * Check if a given object implements the MappingConfigurationRevisionListResponse interface.
 */
export function instanceOfMappingConfigurationRevisionListResponse(value: object): value is MappingConfigurationRevisionListResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    if (!('currentEtag' in value) || value['currentEtag'] === undefined) return false;
    if (!('currentRevision' in value) || value['currentRevision'] === undefined) return false;
    if (!('nextCursor' in value) || value['nextCursor'] === undefined) return false;
    if (!('hasMore' in value) || value['hasMore'] === undefined) return false;
    if (!('revisions' in value) || value['revisions'] === undefined) return false;
    return true;
}

export function MappingConfigurationRevisionListResponseFromJSON(json: any): MappingConfigurationRevisionListResponse {
    return MappingConfigurationRevisionListResponseFromJSONTyped(json, false);
}

export function MappingConfigurationRevisionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingConfigurationRevisionListResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'mappingId': json['mappingId'],
        'currentEtag': json['currentEtag'],
        'currentRevision': MappingConfigurationRevisionDetailFromJSON(json['currentRevision']),
        'nextCursor': json['nextCursor'],
        'hasMore': json['hasMore'],
        'revisions': ((json['revisions'] as Array<any>).map(MappingConfigurationRevisionSummaryFromJSON)),
    };
}

export function MappingConfigurationRevisionListResponseToJSON(json: any): MappingConfigurationRevisionListResponse {
    return MappingConfigurationRevisionListResponseToJSONTyped(json, false);
}

export function MappingConfigurationRevisionListResponseToJSONTyped(value?: MappingConfigurationRevisionListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'mappingId': value['mappingId'],
        'currentEtag': value['currentEtag'],
        'currentRevision': MappingConfigurationRevisionDetailToJSON(value['currentRevision']),
        'nextCursor': value['nextCursor'],
        'hasMore': value['hasMore'],
        'revisions': ((value['revisions'] as Array<any>).map(MappingConfigurationRevisionSummaryToJSON)),
    };
}
