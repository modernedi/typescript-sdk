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
import type { PartnerConfiguration } from './PartnerConfiguration.js';
import {
    PartnerConfigurationFromJSON,
    PartnerConfigurationFromJSONTyped,
    PartnerConfigurationToJSON,
    PartnerConfigurationToJSONTyped,
} from './PartnerConfiguration.js';

/**
 * Successful response containing active trading-partner configurations in this workspace.
 * @export
 * @interface PartnerListResponse
 */
export interface PartnerListResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof PartnerListResponse
     */
    success: boolean;
    /**
     * Active configured trading partners for this tenant, ordered by partner id. Retired partners are excluded.
     * @type {Array<PartnerConfiguration>}
     * @memberof PartnerListResponse
     */
    partners: Array<PartnerConfiguration>;
}

/**
 * Check if a given object implements the PartnerListResponse interface.
 */
export function instanceOfPartnerListResponse(value: object): value is PartnerListResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('partners' in value) || value['partners'] === undefined) return false;
    return true;
}

export function PartnerListResponseFromJSON(json: any): PartnerListResponse {
    return PartnerListResponseFromJSONTyped(json, false);
}

export function PartnerListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerListResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'partners': ((json['partners'] as Array<any>).map(PartnerConfigurationFromJSON)),
    };
}

export function PartnerListResponseToJSON(json: any): PartnerListResponse {
    return PartnerListResponseToJSONTyped(json, false);
}

export function PartnerListResponseToJSONTyped(value?: PartnerListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'partners': ((value['partners'] as Array<any>).map(PartnerConfigurationToJSON)),
    };
}
