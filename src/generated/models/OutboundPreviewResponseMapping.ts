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
/**
 * Published outgoing map selected from the partner, content type, X12 version, and request route.
 * @export
 * @interface OutboundPreviewResponseMapping
 */
export interface OutboundPreviewResponseMapping {
    /**
     * Stable workspace-scoped identifier of the selected outgoing map.
     * @type {number}
     * @memberof OutboundPreviewResponseMapping
     */
    id: number;
    /**
     * Transform engine used by the published map, such as `xslt` or `jslt`.
     * @type {string}
     * @memberof OutboundPreviewResponseMapping
     */
    transformType: string;
    /**
     * Customer-visible transform filename recorded for the selected map.
     * @type {string}
     * @memberof OutboundPreviewResponseMapping
     */
    file: string;
    /**
     * Base64-encoded SHA-256 hash of the published map contents.
     * @type {string}
     * @memberof OutboundPreviewResponseMapping
     */
    fileSha256Hash: string;
    /**
     * Source media type expected by the selected outgoing map.
     * @type {string}
     * @memberof OutboundPreviewResponseMapping
     */
    contentType: string;
    /**
     * X12 version the selected map generates.
     * @type {string}
     * @memberof OutboundPreviewResponseMapping
     */
    x12Version: string;
}

/**
 * Check if a given object implements the OutboundPreviewResponseMapping interface.
 */
export function instanceOfOutboundPreviewResponseMapping(value: object): value is OutboundPreviewResponseMapping {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('transformType' in value) || value['transformType'] === undefined) return false;
    if (!('file' in value) || value['file'] === undefined) return false;
    if (!('fileSha256Hash' in value) || value['fileSha256Hash'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    return true;
}

export function OutboundPreviewResponseMappingFromJSON(json: any): OutboundPreviewResponseMapping {
    return OutboundPreviewResponseMappingFromJSONTyped(json, false);
}

export function OutboundPreviewResponseMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutboundPreviewResponseMapping {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'transformType': json['transformType'],
        'file': json['file'],
        'fileSha256Hash': json['fileSha256Hash'],
        'contentType': json['contentType'],
        'x12Version': json['x12Version'],
    };
}

export function OutboundPreviewResponseMappingToJSON(json: any): OutboundPreviewResponseMapping {
    return OutboundPreviewResponseMappingToJSONTyped(json, false);
}

export function OutboundPreviewResponseMappingToJSONTyped(value?: OutboundPreviewResponseMapping | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'transformType': value['transformType'],
        'file': value['file'],
        'fileSha256Hash': value['fileSha256Hash'],
        'contentType': value['contentType'],
        'x12Version': value['x12Version'],
    };
}
