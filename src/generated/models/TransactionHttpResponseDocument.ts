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
import type { TransactionTechnicalAcknowledgmentDocumentMetadata } from './TransactionTechnicalAcknowledgmentDocumentMetadata.js';
import {
    TransactionTechnicalAcknowledgmentDocumentMetadataFromJSON,
    TransactionTechnicalAcknowledgmentDocumentMetadataFromJSONTyped,
    TransactionTechnicalAcknowledgmentDocumentMetadataToJSON,
    TransactionTechnicalAcknowledgmentDocumentMetadataToJSONTyped,
} from './TransactionTechnicalAcknowledgmentDocumentMetadata.js';

/**
 * Raw HTTP response retained with a technical acknowledgment.
 * @export
 * @interface TransactionHttpResponseDocument
 */
export interface TransactionHttpResponseDocument {
    /**
     * Stable id of the raw HTTP response retained with a technical acknowledgment.
     * @type {TransactionHttpResponseDocumentIdEnum}
     * @memberof TransactionHttpResponseDocument
     */
    id: TransactionHttpResponseDocumentIdEnum;
    /**
     * Selects the plain-text HTTP-response renderer and transport metadata shape.
     * @type {TransactionHttpResponseDocumentTypeEnum}
     * @memberof TransactionHttpResponseDocument
     */
    type: TransactionHttpResponseDocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionHttpResponseDocument
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionHttpResponseDocument
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionHttpResponseDocumentEncodingEnum}
     * @memberof TransactionHttpResponseDocument
     */
    encoding: TransactionHttpResponseDocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionHttpResponseDocument
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionHttpResponseDocument
     */
    contentLength: number;
    /**
     *
     * @type {TransactionTechnicalAcknowledgmentDocumentMetadata}
     * @memberof TransactionHttpResponseDocument
     */
    metadata: TransactionTechnicalAcknowledgmentDocumentMetadata;
}


/**
 * @export
 */
export const TransactionHttpResponseDocumentIdEnum = {
    TechnicalAckResponse: 'technical-ack-response',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionHttpResponseDocumentIdEnum = typeof TransactionHttpResponseDocumentIdEnum[keyof typeof TransactionHttpResponseDocumentIdEnum];

/**
 * @export
 */
export const TransactionHttpResponseDocumentTypeEnum = {
    HttpResponse: 'http_response',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionHttpResponseDocumentTypeEnum = typeof TransactionHttpResponseDocumentTypeEnum[keyof typeof TransactionHttpResponseDocumentTypeEnum];

/**
 * @export
 */
export const TransactionHttpResponseDocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionHttpResponseDocumentEncodingEnum = typeof TransactionHttpResponseDocumentEncodingEnum[keyof typeof TransactionHttpResponseDocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionHttpResponseDocument interface.
 */
export function instanceOfTransactionHttpResponseDocument(value: object): value is TransactionHttpResponseDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (value['id'] !== 'technical-ack-response') return false;

    if (!('type' in value) || value['type'] === undefined) return false;
    if (value['type'] !== 'http_response') return false;

    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (value['encoding'] !== 'text') return false;

    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function TransactionHttpResponseDocumentFromJSON(json: any): TransactionHttpResponseDocument {
    return TransactionHttpResponseDocumentFromJSONTyped(json, false);
}

export function TransactionHttpResponseDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionHttpResponseDocument {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'type': json['type'],
        'label': json['label'],
        'contentType': json['contentType'],
        'encoding': json['encoding'],
        'timestamp': json['timestamp'],
        'contentLength': json['contentLength'],
        'metadata': TransactionTechnicalAcknowledgmentDocumentMetadataFromJSON(json['metadata']),
    };
}

export function TransactionHttpResponseDocumentToJSON(json: any): TransactionHttpResponseDocument {
    return TransactionHttpResponseDocumentToJSONTyped(json, false);
}

export function TransactionHttpResponseDocumentToJSONTyped(value?: TransactionHttpResponseDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'type': value['type'],
        'label': value['label'],
        'contentType': value['contentType'],
        'encoding': value['encoding'],
        'timestamp': value['timestamp'],
        'contentLength': value['contentLength'],
        'metadata': TransactionTechnicalAcknowledgmentDocumentMetadataToJSON(value['metadata']),
    };
}
