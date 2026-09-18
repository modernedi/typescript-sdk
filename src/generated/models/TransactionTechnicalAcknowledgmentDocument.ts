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
 * Stored X12 technical acknowledgment.
 * @export
 * @interface TransactionTechnicalAcknowledgmentDocument
 */
export interface TransactionTechnicalAcknowledgmentDocument {
    /**
     * Stable id of the stored X12 technical-acknowledgment artifact.
     * @type {TransactionTechnicalAcknowledgmentDocumentIdEnum}
     * @memberof TransactionTechnicalAcknowledgmentDocument
     */
    id: TransactionTechnicalAcknowledgmentDocumentIdEnum;
    /**
     * Selects the X12 technical-acknowledgment renderer and transport metadata shape.
     * @type {TransactionTechnicalAcknowledgmentDocumentTypeEnum}
     * @memberof TransactionTechnicalAcknowledgmentDocument
     */
    type: TransactionTechnicalAcknowledgmentDocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionTechnicalAcknowledgmentDocument
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionTechnicalAcknowledgmentDocument
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionTechnicalAcknowledgmentDocumentEncodingEnum}
     * @memberof TransactionTechnicalAcknowledgmentDocument
     */
    encoding: TransactionTechnicalAcknowledgmentDocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionTechnicalAcknowledgmentDocument
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionTechnicalAcknowledgmentDocument
     */
    contentLength: number;
    /**
     *
     * @type {TransactionTechnicalAcknowledgmentDocumentMetadata}
     * @memberof TransactionTechnicalAcknowledgmentDocument
     */
    metadata: TransactionTechnicalAcknowledgmentDocumentMetadata;
}


/**
 * @export
 */
export const TransactionTechnicalAcknowledgmentDocumentIdEnum = {
    TechnicalAckX12: 'technical-ack-x12',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionTechnicalAcknowledgmentDocumentIdEnum = typeof TransactionTechnicalAcknowledgmentDocumentIdEnum[keyof typeof TransactionTechnicalAcknowledgmentDocumentIdEnum];

/**
 * @export
 */
export const TransactionTechnicalAcknowledgmentDocumentTypeEnum = {
    TechnicalAck: 'technical_ack',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionTechnicalAcknowledgmentDocumentTypeEnum = typeof TransactionTechnicalAcknowledgmentDocumentTypeEnum[keyof typeof TransactionTechnicalAcknowledgmentDocumentTypeEnum];

/**
 * @export
 */
export const TransactionTechnicalAcknowledgmentDocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionTechnicalAcknowledgmentDocumentEncodingEnum = typeof TransactionTechnicalAcknowledgmentDocumentEncodingEnum[keyof typeof TransactionTechnicalAcknowledgmentDocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionTechnicalAcknowledgmentDocument interface.
 */
export function instanceOfTransactionTechnicalAcknowledgmentDocument(value: object): value is TransactionTechnicalAcknowledgmentDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (value['id'] !== 'technical-ack-x12') return false;

    if (!('type' in value) || value['type'] === undefined) return false;
    if (value['type'] !== 'technical_ack') return false;

    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (value['encoding'] !== 'text') return false;

    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function TransactionTechnicalAcknowledgmentDocumentFromJSON(json: any): TransactionTechnicalAcknowledgmentDocument {
    return TransactionTechnicalAcknowledgmentDocumentFromJSONTyped(json, false);
}

export function TransactionTechnicalAcknowledgmentDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionTechnicalAcknowledgmentDocument {
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

export function TransactionTechnicalAcknowledgmentDocumentToJSON(json: any): TransactionTechnicalAcknowledgmentDocument {
    return TransactionTechnicalAcknowledgmentDocumentToJSONTyped(json, false);
}

export function TransactionTechnicalAcknowledgmentDocumentToJSONTyped(value?: TransactionTechnicalAcknowledgmentDocument | null, ignoreDiscriminator: boolean = false): any {
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
