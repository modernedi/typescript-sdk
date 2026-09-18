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
import type { TransactionImplementationAcknowledgmentDocumentMetadata } from './TransactionImplementationAcknowledgmentDocumentMetadata.js';
import {
    TransactionImplementationAcknowledgmentDocumentMetadataFromJSON,
    TransactionImplementationAcknowledgmentDocumentMetadataFromJSONTyped,
    TransactionImplementationAcknowledgmentDocumentMetadataToJSON,
    TransactionImplementationAcknowledgmentDocumentMetadataToJSONTyped,
} from './TransactionImplementationAcknowledgmentDocumentMetadata.js';

/**
 * Stored X12 999 and its normalized acknowledgment, group, and transaction-set evaluation.
 * @export
 * @interface TransactionImplementationAcknowledgmentDocument
 */
export interface TransactionImplementationAcknowledgmentDocument {
    /**
     * Stable id of the stored X12 999 artifact.
     * @type {TransactionImplementationAcknowledgmentDocumentIdEnum}
     * @memberof TransactionImplementationAcknowledgmentDocument
     */
    id: TransactionImplementationAcknowledgmentDocumentIdEnum;
    /**
     * Selects the X12 999 renderer and normalized acknowledgment metadata shape.
     * @type {TransactionImplementationAcknowledgmentDocumentTypeEnum}
     * @memberof TransactionImplementationAcknowledgmentDocument
     */
    type: TransactionImplementationAcknowledgmentDocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentDocument
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentDocument
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionImplementationAcknowledgmentDocumentEncodingEnum}
     * @memberof TransactionImplementationAcknowledgmentDocument
     */
    encoding: TransactionImplementationAcknowledgmentDocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentDocument
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionImplementationAcknowledgmentDocument
     */
    contentLength: number;
    /**
     *
     * @type {TransactionImplementationAcknowledgmentDocumentMetadata}
     * @memberof TransactionImplementationAcknowledgmentDocument
     */
    metadata: TransactionImplementationAcknowledgmentDocumentMetadata;
}


/**
 * @export
 */
export const TransactionImplementationAcknowledgmentDocumentIdEnum = {
    ImplementationAckX12: 'implementation-ack-x12',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentDocumentIdEnum = typeof TransactionImplementationAcknowledgmentDocumentIdEnum[keyof typeof TransactionImplementationAcknowledgmentDocumentIdEnum];

/**
 * @export
 */
export const TransactionImplementationAcknowledgmentDocumentTypeEnum = {
    ImplementationAck: 'implementation_ack',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentDocumentTypeEnum = typeof TransactionImplementationAcknowledgmentDocumentTypeEnum[keyof typeof TransactionImplementationAcknowledgmentDocumentTypeEnum];

/**
 * @export
 */
export const TransactionImplementationAcknowledgmentDocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentDocumentEncodingEnum = typeof TransactionImplementationAcknowledgmentDocumentEncodingEnum[keyof typeof TransactionImplementationAcknowledgmentDocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionImplementationAcknowledgmentDocument interface.
 */
export function instanceOfTransactionImplementationAcknowledgmentDocument(value: object): value is TransactionImplementationAcknowledgmentDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (value['id'] !== 'implementation-ack-x12') return false;

    if (!('type' in value) || value['type'] === undefined) return false;
    if (value['type'] !== 'implementation_ack') return false;

    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (value['encoding'] !== 'text') return false;

    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function TransactionImplementationAcknowledgmentDocumentFromJSON(json: any): TransactionImplementationAcknowledgmentDocument {
    return TransactionImplementationAcknowledgmentDocumentFromJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionImplementationAcknowledgmentDocument {
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
        'metadata': TransactionImplementationAcknowledgmentDocumentMetadataFromJSON(json['metadata']),
    };
}

export function TransactionImplementationAcknowledgmentDocumentToJSON(json: any): TransactionImplementationAcknowledgmentDocument {
    return TransactionImplementationAcknowledgmentDocumentToJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentDocumentToJSONTyped(value?: TransactionImplementationAcknowledgmentDocument | null, ignoreDiscriminator: boolean = false): any {
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
        'metadata': TransactionImplementationAcknowledgmentDocumentMetadataToJSON(value['metadata']),
    };
}
