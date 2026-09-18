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
 * Desired delivery behavior preserved in portable mapping configuration. Unlike the read-only delivery field on mapping responses, this field is part of the hashed configuration submitted for plan and apply. Incoming maps use MAPPED_OUTPUTS or TRANSACTION_RECORD; outgoing maps use OUTBOUND_AS2.
 *
 * @export
 * @interface ConfigurationMappingOutput
 */
export interface ConfigurationMappingOutput {
    /**
     * Mapped payload content type for incoming maps; source content type selected by outgoing maps.
     * @type {string}
     * @memberof ConfigurationMappingOutput
     */
    contentType: string;
    /**
     * Defaults to `PROCESSING` when omitted. Incoming mappings may also use `ACKNOWLEDGMENT`; outgoing mappings use `PROCESSING`.
     * @type {MappingPurpose}
     * @memberof ConfigurationMappingOutput
     */
    purpose?: MappingPurpose;
    /**
     *
     * @type {MappingOutputDelivery}
     * @memberof ConfigurationMappingOutput
     */
    delivery: MappingOutputDelivery;
}



/**
 * Check if a given object implements the ConfigurationMappingOutput interface.
 */
export function instanceOfConfigurationMappingOutput(value: object): value is ConfigurationMappingOutput {
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('delivery' in value) || value['delivery'] === undefined) return false;
    return true;
}

export function ConfigurationMappingOutputFromJSON(json: any): ConfigurationMappingOutput {
    return ConfigurationMappingOutputFromJSONTyped(json, false);
}

export function ConfigurationMappingOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationMappingOutput {
    if (json == null) {
        return json;
    }
    return {

        'contentType': json['contentType'],
        'purpose': json['purpose'] == null ? undefined : MappingPurposeFromJSON(json['purpose']),
        'delivery': MappingOutputDeliveryFromJSON(json['delivery']),
    };
}

export function ConfigurationMappingOutputToJSON(json: any): ConfigurationMappingOutput {
    return ConfigurationMappingOutputToJSONTyped(json, false);
}

export function ConfigurationMappingOutputToJSONTyped(value?: ConfigurationMappingOutput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'contentType': value['contentType'],
        'purpose': MappingPurposeToJSON(value['purpose']),
        'delivery': MappingOutputDeliveryToJSON(value['delivery']),
    };
}
