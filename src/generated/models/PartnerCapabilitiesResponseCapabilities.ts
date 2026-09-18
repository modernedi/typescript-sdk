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
import type { PartnerMappingCapability } from './PartnerMappingCapability.js';
import {
    PartnerMappingCapabilityFromJSON,
    PartnerMappingCapabilityFromJSONTyped,
    PartnerMappingCapabilityToJSON,
    PartnerMappingCapabilityToJSONTyped,
} from './PartnerMappingCapability.js';

/**
 * Published maps grouped by the direction in which data crosses the partner boundary.
 * @export
 * @interface PartnerCapabilitiesResponseCapabilities
 */
export interface PartnerCapabilitiesResponseCapabilities {
    /**
     * Maps that transform inbound partner X12 into application-facing mapped outputs.
     * @type {Array<PartnerMappingCapability>}
     * @memberof PartnerCapabilitiesResponseCapabilities
     */
    incoming: Array<PartnerMappingCapability>;
    /**
     * Maps that transform application payloads into outbound partner X12.
     * @type {Array<PartnerMappingCapability>}
     * @memberof PartnerCapabilitiesResponseCapabilities
     */
    outgoing: Array<PartnerMappingCapability>;
}

/**
 * Check if a given object implements the PartnerCapabilitiesResponseCapabilities interface.
 */
export function instanceOfPartnerCapabilitiesResponseCapabilities(value: object): value is PartnerCapabilitiesResponseCapabilities {
    if (!('incoming' in value) || value['incoming'] === undefined) return false;
    if (!('outgoing' in value) || value['outgoing'] === undefined) return false;
    return true;
}

export function PartnerCapabilitiesResponseCapabilitiesFromJSON(json: any): PartnerCapabilitiesResponseCapabilities {
    return PartnerCapabilitiesResponseCapabilitiesFromJSONTyped(json, false);
}

export function PartnerCapabilitiesResponseCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCapabilitiesResponseCapabilities {
    if (json == null) {
        return json;
    }
    return {

        'incoming': ((json['incoming'] as Array<any>).map(PartnerMappingCapabilityFromJSON)),
        'outgoing': ((json['outgoing'] as Array<any>).map(PartnerMappingCapabilityFromJSON)),
    };
}

export function PartnerCapabilitiesResponseCapabilitiesToJSON(json: any): PartnerCapabilitiesResponseCapabilities {
    return PartnerCapabilitiesResponseCapabilitiesToJSONTyped(json, false);
}

export function PartnerCapabilitiesResponseCapabilitiesToJSONTyped(value?: PartnerCapabilitiesResponseCapabilities | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'incoming': ((value['incoming'] as Array<any>).map(PartnerMappingCapabilityToJSON)),
        'outgoing': ((value['outgoing'] as Array<any>).map(PartnerMappingCapabilityToJSON)),
    };
}
