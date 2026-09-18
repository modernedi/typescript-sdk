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
import type { IntegrationPartner } from './IntegrationPartner.js';
import {
    IntegrationPartnerFromJSON,
    IntegrationPartnerFromJSONTyped,
    IntegrationPartnerToJSON,
    IntegrationPartnerToJSONTyped,
} from './IntegrationPartner.js';
import type { PartnerCapabilitiesResponseCapabilities } from './PartnerCapabilitiesResponseCapabilities.js';
import {
    PartnerCapabilitiesResponseCapabilitiesFromJSON,
    PartnerCapabilitiesResponseCapabilitiesFromJSONTyped,
    PartnerCapabilitiesResponseCapabilitiesToJSON,
    PartnerCapabilitiesResponseCapabilitiesToJSONTyped,
} from './PartnerCapabilitiesResponseCapabilities.js';

/**
 * Published incoming and outgoing mapping capabilities available for one partner.
 * @export
 * @interface PartnerCapabilitiesResponse
 */
export interface PartnerCapabilitiesResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof PartnerCapabilitiesResponse
     */
    success: boolean;
    /**
     *
     * @type {IntegrationPartner}
     * @memberof PartnerCapabilitiesResponse
     */
    partner: IntegrationPartner;
    /**
     *
     * @type {PartnerCapabilitiesResponseCapabilities}
     * @memberof PartnerCapabilitiesResponse
     */
    capabilities: PartnerCapabilitiesResponseCapabilities;
}

/**
 * Check if a given object implements the PartnerCapabilitiesResponse interface.
 */
export function instanceOfPartnerCapabilitiesResponse(value: object): value is PartnerCapabilitiesResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('partner' in value) || value['partner'] === undefined) return false;
    if (!('capabilities' in value) || value['capabilities'] === undefined) return false;
    return true;
}

export function PartnerCapabilitiesResponseFromJSON(json: any): PartnerCapabilitiesResponse {
    return PartnerCapabilitiesResponseFromJSONTyped(json, false);
}

export function PartnerCapabilitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCapabilitiesResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'partner': IntegrationPartnerFromJSON(json['partner']),
        'capabilities': PartnerCapabilitiesResponseCapabilitiesFromJSON(json['capabilities']),
    };
}

export function PartnerCapabilitiesResponseToJSON(json: any): PartnerCapabilitiesResponse {
    return PartnerCapabilitiesResponseToJSONTyped(json, false);
}

export function PartnerCapabilitiesResponseToJSONTyped(value?: PartnerCapabilitiesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'partner': IntegrationPartnerToJSON(value['partner']),
        'capabilities': PartnerCapabilitiesResponseCapabilitiesToJSON(value['capabilities']),
    };
}
