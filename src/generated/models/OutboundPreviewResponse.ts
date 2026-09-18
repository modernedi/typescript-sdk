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
import type { OutboundPreviewResponseMapping } from './OutboundPreviewResponseMapping.js';
import {
    OutboundPreviewResponseMappingFromJSON,
    OutboundPreviewResponseMappingFromJSONTyped,
    OutboundPreviewResponseMappingToJSON,
    OutboundPreviewResponseMappingToJSONTyped,
} from './OutboundPreviewResponseMapping.js';
import type { OutboundPreviewResponsePartner } from './OutboundPreviewResponsePartner.js';
import {
    OutboundPreviewResponsePartnerFromJSON,
    OutboundPreviewResponsePartnerFromJSONTyped,
    OutboundPreviewResponsePartnerToJSON,
    OutboundPreviewResponsePartnerToJSONTyped,
} from './OutboundPreviewResponsePartner.js';
import type { X12ValidationResult } from './X12ValidationResult.js';
import {
    X12ValidationResultFromJSON,
    X12ValidationResultFromJSONTyped,
    X12ValidationResultToJSON,
    X12ValidationResultToJSONTyped,
} from './X12ValidationResult.js';
import type { OutboundBusinessKey } from './OutboundBusinessKey.js';
import {
    OutboundBusinessKeyFromJSON,
    OutboundBusinessKeyFromJSONTyped,
    OutboundBusinessKeyToJSON,
    OutboundBusinessKeyToJSONTyped,
} from './OutboundBusinessKey.js';

/**
 * Dry-run result showing map selection, generated X12, validation diagnostics, and partner context without sending AS2.
 * @export
 * @interface OutboundPreviewResponse
 */
export interface OutboundPreviewResponse {
    /**
     * Always `true`; map-selection or transform failures use the documented error response instead.
     * @type {boolean}
     * @memberof OutboundPreviewResponse
     */
    success: boolean;
    /**
     * Complete generated X12 that would be sent by `/v1/as2/send`.
     * @type {string}
     * @memberof OutboundPreviewResponse
     */
    generatedX12: string;
    /**
     *
     * @type {X12ValidationResult}
     * @memberof OutboundPreviewResponse
     */
    validation: X12ValidationResult;
    /**
     *
     * @type {OutboundPreviewResponseMapping}
     * @memberof OutboundPreviewResponse
     */
    mapping: OutboundPreviewResponseMapping;
    /**
     *
     * @type {OutboundPreviewResponsePartner}
     * @memberof OutboundPreviewResponse
     */
    partner: OutboundPreviewResponsePartner;
    /**
     * Business identifier that would be recorded with a real send, or `null` when none was supplied.
     * @type {OutboundBusinessKey}
     * @memberof OutboundPreviewResponse
     */
    businessKey: OutboundBusinessKey | null;
}

/**
 * Check if a given object implements the OutboundPreviewResponse interface.
 */
export function instanceOfOutboundPreviewResponse(value: object): value is OutboundPreviewResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('generatedX12' in value) || value['generatedX12'] === undefined) return false;
    if (!('validation' in value) || value['validation'] === undefined) return false;
    if (!('mapping' in value) || value['mapping'] === undefined) return false;
    if (!('partner' in value) || value['partner'] === undefined) return false;
    if (!('businessKey' in value) || value['businessKey'] === undefined) return false;
    return true;
}

export function OutboundPreviewResponseFromJSON(json: any): OutboundPreviewResponse {
    return OutboundPreviewResponseFromJSONTyped(json, false);
}

export function OutboundPreviewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutboundPreviewResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'generatedX12': json['generatedX12'],
        'validation': X12ValidationResultFromJSON(json['validation']),
        'mapping': OutboundPreviewResponseMappingFromJSON(json['mapping']),
        'partner': OutboundPreviewResponsePartnerFromJSON(json['partner']),
        'businessKey': OutboundBusinessKeyFromJSON(json['businessKey']),
    };
}

export function OutboundPreviewResponseToJSON(json: any): OutboundPreviewResponse {
    return OutboundPreviewResponseToJSONTyped(json, false);
}

export function OutboundPreviewResponseToJSONTyped(value?: OutboundPreviewResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'generatedX12': value['generatedX12'],
        'validation': X12ValidationResultToJSON(value['validation']),
        'mapping': OutboundPreviewResponseMappingToJSON(value['mapping']),
        'partner': OutboundPreviewResponsePartnerToJSON(value['partner']),
        'businessKey': OutboundBusinessKeyToJSON(value['businessKey']),
    };
}
