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
 *
 * @export
 * @interface MappingRuntimeMappingHealth
 */
export interface MappingRuntimeMappingHealth {
    /**
     * Mapping id, or `null` for a request that failed before map selection.
     * @type {number}
     * @memberof MappingRuntimeMappingHealth
     */
    mappingId: number | null;
    /**
     * Transform filename, or `null` when no map was selected.
     * @type {string}
     * @memberof MappingRuntimeMappingHealth
     */
    mapFile: string | null;
    /**
     * Base64 SHA-256 hash of the attempted mapping source, when known.
     * @type {string}
     * @memberof MappingRuntimeMappingHealth
     */
    mapFileSha256Hash: string | null;
    /**
     * Whether the grouped attempt hash is still the currently published source.
     * @type {boolean}
     * @memberof MappingRuntimeMappingHealth
     */
    currentRevision: boolean;
    /**
     * Mapping direction, or `null` when it was not attributable.
     * @type {MappingRuntimeMappingHealthDirectionEnum}
     * @memberof MappingRuntimeMappingHealth
     */
    direction: MappingRuntimeMappingHealthDirectionEnum | null;
    /**
     * Tenant-scoped partner id, or `null` when no partner was resolved.
     * @type {number}
     * @memberof MappingRuntimeMappingHealth
     */
    partnerId: number | null;
    /**
     * Partner name captured for the attempt, when known.
     * @type {string}
     * @memberof MappingRuntimeMappingHealth
     */
    partnerName: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappingRuntimeMappingHealth
     */
    latestAt: string | null;
    /**
     * Unresolved failures in this group.
     * @type {number}
     * @memberof MappingRuntimeMappingHealth
     */
    failureCount: number;
    /**
     * Resolved failures in this group.
     * @type {number}
     * @memberof MappingRuntimeMappingHealth
     */
    recoveredCount: number;
}


/**
 * @export
 */
export const MappingRuntimeMappingHealthDirectionEnum = {
    Inbound: 'inbound',
    Outbound: 'outbound',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingRuntimeMappingHealthDirectionEnum = typeof MappingRuntimeMappingHealthDirectionEnum[keyof typeof MappingRuntimeMappingHealthDirectionEnum];


/**
 * Check if a given object implements the MappingRuntimeMappingHealth interface.
 */
export function instanceOfMappingRuntimeMappingHealth(value: object): value is MappingRuntimeMappingHealth {
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    if (!('mapFile' in value) || value['mapFile'] === undefined) return false;
    if (!('mapFileSha256Hash' in value) || value['mapFileSha256Hash'] === undefined) return false;
    if (!('currentRevision' in value) || value['currentRevision'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('partnerName' in value) || value['partnerName'] === undefined) return false;
    if (!('latestAt' in value) || value['latestAt'] === undefined) return false;
    if (!('failureCount' in value) || value['failureCount'] === undefined) return false;
    if (!('recoveredCount' in value) || value['recoveredCount'] === undefined) return false;
    return true;
}

export function MappingRuntimeMappingHealthFromJSON(json: any): MappingRuntimeMappingHealth {
    return MappingRuntimeMappingHealthFromJSONTyped(json, false);
}

export function MappingRuntimeMappingHealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingRuntimeMappingHealth {
    if (json == null) {
        return json;
    }
    return {

        'mappingId': json['mappingId'],
        'mapFile': json['mapFile'],
        'mapFileSha256Hash': json['mapFileSha256Hash'],
        'currentRevision': json['currentRevision'],
        'direction': json['direction'],
        'partnerId': json['partnerId'],
        'partnerName': json['partnerName'],
        'latestAt': json['latestAt'],
        'failureCount': json['failureCount'],
        'recoveredCount': json['recoveredCount'],
    };
}

export function MappingRuntimeMappingHealthToJSON(json: any): MappingRuntimeMappingHealth {
    return MappingRuntimeMappingHealthToJSONTyped(json, false);
}

export function MappingRuntimeMappingHealthToJSONTyped(value?: MappingRuntimeMappingHealth | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'mappingId': value['mappingId'],
        'mapFile': value['mapFile'],
        'mapFileSha256Hash': value['mapFileSha256Hash'],
        'currentRevision': value['currentRevision'],
        'direction': value['direction'],
        'partnerId': value['partnerId'],
        'partnerName': value['partnerName'],
        'latestAt': value['latestAt'],
        'failureCount': value['failureCount'],
        'recoveredCount': value['recoveredCount'],
    };
}
