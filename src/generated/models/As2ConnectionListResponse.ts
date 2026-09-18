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
import type { As2ConnectionConfiguration } from './As2ConnectionConfiguration.js';
import {
    As2ConnectionConfigurationFromJSON,
    As2ConnectionConfigurationFromJSONTyped,
    As2ConnectionConfigurationToJSON,
    As2ConnectionConfigurationToJSONTyped,
} from './As2ConnectionConfiguration.js';

/**
 * Successful response containing every AS2 connection configured in the authenticated workspace.
 * @export
 * @interface As2ConnectionListResponse
 */
export interface As2ConnectionListResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof As2ConnectionListResponse
     */
    success: boolean;
    /**
     * Complete AS2 connection configurations, including environment profiles, transport settings, and configuration ETags.
     * @type {Array<As2ConnectionConfiguration>}
     * @memberof As2ConnectionListResponse
     */
    connections: Array<As2ConnectionConfiguration>;
}

/**
 * Check if a given object implements the As2ConnectionListResponse interface.
 */
export function instanceOfAs2ConnectionListResponse(value: object): value is As2ConnectionListResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('connections' in value) || value['connections'] === undefined) return false;
    return true;
}

export function As2ConnectionListResponseFromJSON(json: any): As2ConnectionListResponse {
    return As2ConnectionListResponseFromJSONTyped(json, false);
}

export function As2ConnectionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ConnectionListResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'connections': ((json['connections'] as Array<any>).map(As2ConnectionConfigurationFromJSON)),
    };
}

export function As2ConnectionListResponseToJSON(json: any): As2ConnectionListResponse {
    return As2ConnectionListResponseToJSONTyped(json, false);
}

export function As2ConnectionListResponseToJSONTyped(value?: As2ConnectionListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'connections': ((value['connections'] as Array<any>).map(As2ConnectionConfigurationToJSON)),
    };
}
