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
 * Successful response containing one current trading-partner configuration.
 * @export
 * @interface PartnerResponse
 */
export interface PartnerResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof PartnerResponse
     */
    success: boolean;
    /**
     *
     * @type {PartnerConfiguration}
     * @memberof PartnerResponse
     */
    partner: PartnerConfiguration;
}

/**
 * Check if a given object implements the PartnerResponse interface.
 */
export function instanceOfPartnerResponse(value: object): value is PartnerResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('partner' in value) || value['partner'] === undefined) return false;
    return true;
}

export function PartnerResponseFromJSON(json: any): PartnerResponse {
    return PartnerResponseFromJSONTyped(json, false);
}

export function PartnerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'partner': PartnerConfigurationFromJSON(json['partner']),
    };
}

export function PartnerResponseToJSON(json: any): PartnerResponse {
    return PartnerResponseToJSONTyped(json, false);
}

export function PartnerResponseToJSONTyped(value?: PartnerResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'partner': PartnerConfigurationToJSON(value['partner']),
    };
}
