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
import type { MappingOutputDelivery } from './MappingOutputDelivery.js';
import {
    MappingOutputDeliveryFromJSON,
    MappingOutputDeliveryFromJSONTyped,
    MappingOutputDeliveryToJSON,
    MappingOutputDeliveryToJSONTyped,
} from './MappingOutputDelivery.js';
import type { MappingPurpose } from './MappingPurpose.js';
import {
    MappingPurposeFromJSON,
    MappingPurposeFromJSONTyped,
    MappingPurposeToJSON,
    MappingPurposeToJSONTyped,
} from './MappingPurpose.js';

/**
 *
 * @export
 * @interface MappingOutputConfiguration
 */
export interface MappingOutputConfiguration {
    /**
     * Mapped payload content type for incoming maps; source content type selected by outgoing maps.
     * @type {string}
     * @memberof MappingOutputConfiguration
     */
    contentType: string;
    /**
     * Defaults to `PROCESSING` when omitted. Incoming mappings may also use `ACKNOWLEDGMENT`; outgoing mappings use `PROCESSING`.
     * @type {MappingPurpose}
     * @memberof MappingOutputConfiguration
     */
    purpose?: MappingPurpose;
    /**
     * Server-selected delivery behavior. New incoming public mappings use `MAPPED_OUTPUTS`; outgoing maps use `OUTBOUND_AS2`.
     * @type {MappingOutputDelivery}
     * @memberof MappingOutputConfiguration
     */
    readonly delivery: MappingOutputDelivery;
}



/**
 * Check if a given object implements the MappingOutputConfiguration interface.
 */
export function instanceOfMappingOutputConfiguration(value: object): value is MappingOutputConfiguration {
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('delivery' in value) || value['delivery'] === undefined) return false;
    return true;
}

export function MappingOutputConfigurationFromJSON(json: any): MappingOutputConfiguration {
    return MappingOutputConfigurationFromJSONTyped(json, false);
}

export function MappingOutputConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingOutputConfiguration {
    if (json == null) {
        return json;
    }
    return {

        'contentType': json['contentType'],
        'purpose': json['purpose'] == null ? undefined : MappingPurposeFromJSON(json['purpose']),
        'delivery': MappingOutputDeliveryFromJSON(json['delivery']),
    };
}

export function MappingOutputConfigurationToJSON(json: any): MappingOutputConfiguration {
    return MappingOutputConfigurationToJSONTyped(json, false);
}

export function MappingOutputConfigurationToJSONTyped(value?: Omit<MappingOutputConfiguration, 'delivery'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'contentType': value['contentType'],
        'purpose': MappingPurposeToJSON(value['purpose']),
    };
}
