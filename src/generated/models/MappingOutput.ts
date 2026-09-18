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
 * @interface MappingOutput
 */
export interface MappingOutput {
    /**
     * Mapped payload content type for incoming maps; source content type selected by outgoing maps.
     * @type {string}
     * @memberof MappingOutput
     */
    contentType: string;
    /**
     * Defaults to `PROCESSING` when omitted. Incoming mappings may also use `ACKNOWLEDGMENT`; outgoing mappings use `PROCESSING`.
     * @type {MappingPurpose}
     * @memberof MappingOutput
     */
    purpose?: MappingPurpose;
}



/**
 * Check if a given object implements the MappingOutput interface.
 */
export function instanceOfMappingOutput(value: object): value is MappingOutput {
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    return true;
}

export function MappingOutputFromJSON(json: any): MappingOutput {
    return MappingOutputFromJSONTyped(json, false);
}

export function MappingOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingOutput {
    if (json == null) {
        return json;
    }
    return {

        'contentType': json['contentType'],
        'purpose': json['purpose'] == null ? undefined : MappingPurposeFromJSON(json['purpose']),
    };
}

export function MappingOutputToJSON(json: any): MappingOutput {
    return MappingOutputToJSONTyped(json, false);
}

export function MappingOutputToJSONTyped(value?: MappingOutput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'contentType': value['contentType'],
        'purpose': MappingPurposeToJSON(value['purpose']),
    };
}
