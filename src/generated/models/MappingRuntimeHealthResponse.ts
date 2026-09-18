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
import type { MappingRuntimeMappingHealth } from './MappingRuntimeMappingHealth.js';
import {
    MappingRuntimeMappingHealthFromJSON,
    MappingRuntimeMappingHealthFromJSONTyped,
    MappingRuntimeMappingHealthToJSON,
    MappingRuntimeMappingHealthToJSONTyped,
} from './MappingRuntimeMappingHealth.js';
import type { MappingRuntimeHealthTotals } from './MappingRuntimeHealthTotals.js';
import {
    MappingRuntimeHealthTotalsFromJSON,
    MappingRuntimeHealthTotalsFromJSONTyped,
    MappingRuntimeHealthTotalsToJSON,
    MappingRuntimeHealthTotalsToJSONTyped,
} from './MappingRuntimeHealthTotals.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Environment-wide summary of retained mapping failures and recoveries.
 * @export
 * @interface MappingRuntimeHealthResponse
 */
export interface MappingRuntimeHealthResponse {
    /**
     * Always `true`; authorization, billing, or runtime-read failures use an error response.
     * @type {boolean}
     * @memberof MappingRuntimeHealthResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof MappingRuntimeHealthResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`.
     * @type {string}
     * @memberof MappingRuntimeHealthResponse
     */
    generatedAt: string;
    /**
     * True when the bounded health scan could not summarize every retained attempt.
     * @type {boolean}
     * @memberof MappingRuntimeHealthResponse
     */
    truncated: boolean;
    /**
     *
     * @type {MappingRuntimeHealthTotals}
     * @memberof MappingRuntimeHealthResponse
     */
    totals: MappingRuntimeHealthTotals;
    /**
     * Mapping- or unmatched-request-level groups with failure or recovery activity.
     * @type {Array<MappingRuntimeMappingHealth>}
     * @memberof MappingRuntimeHealthResponse
     */
    mappings: Array<MappingRuntimeMappingHealth>;
}



/**
 * Check if a given object implements the MappingRuntimeHealthResponse interface.
 */
export function instanceOfMappingRuntimeHealthResponse(value: object): value is MappingRuntimeHealthResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('generatedAt' in value) || value['generatedAt'] === undefined) return false;
    if (!('truncated' in value) || value['truncated'] === undefined) return false;
    if (!('totals' in value) || value['totals'] === undefined) return false;
    if (!('mappings' in value) || value['mappings'] === undefined) return false;
    return true;
}

export function MappingRuntimeHealthResponseFromJSON(json: any): MappingRuntimeHealthResponse {
    return MappingRuntimeHealthResponseFromJSONTyped(json, false);
}

export function MappingRuntimeHealthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingRuntimeHealthResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'generatedAt': json['generatedAt'],
        'truncated': json['truncated'],
        'totals': MappingRuntimeHealthTotalsFromJSON(json['totals']),
        'mappings': ((json['mappings'] as Array<any>).map(MappingRuntimeMappingHealthFromJSON)),
    };
}

export function MappingRuntimeHealthResponseToJSON(json: any): MappingRuntimeHealthResponse {
    return MappingRuntimeHealthResponseToJSONTyped(json, false);
}

export function MappingRuntimeHealthResponseToJSONTyped(value?: MappingRuntimeHealthResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'generatedAt': value['generatedAt'],
        'truncated': value['truncated'],
        'totals': MappingRuntimeHealthTotalsToJSON(value['totals']),
        'mappings': ((value['mappings'] as Array<any>).map(MappingRuntimeMappingHealthToJSON)),
    };
}
