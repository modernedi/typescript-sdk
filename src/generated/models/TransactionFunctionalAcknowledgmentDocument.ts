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
import type { TransactionFunctionalAcknowledgmentDocumentMetadata } from './TransactionFunctionalAcknowledgmentDocumentMetadata.js';
import {
    TransactionFunctionalAcknowledgmentDocumentMetadataFromJSON,
    TransactionFunctionalAcknowledgmentDocumentMetadataFromJSONTyped,
    TransactionFunctionalAcknowledgmentDocumentMetadataToJSON,
    TransactionFunctionalAcknowledgmentDocumentMetadataToJSONTyped,
} from './TransactionFunctionalAcknowledgmentDocumentMetadata.js';

/**
 * Stored X12 997 and its normalized group and transaction-set evaluation.
 * @export
 * @interface TransactionFunctionalAcknowledgmentDocument
 */
export interface TransactionFunctionalAcknowledgmentDocument {
    /**
     * Stable id of the stored X12 997 artifact.
     * @type {TransactionFunctionalAcknowledgmentDocumentIdEnum}
     * @memberof TransactionFunctionalAcknowledgmentDocument
     */
    id: TransactionFunctionalAcknowledgmentDocumentIdEnum;
    /**
     * Selects the X12 997 renderer and normalized acknowledgment metadata shape.
     * @type {TransactionFunctionalAcknowledgmentDocumentTypeEnum}
     * @memberof TransactionFunctionalAcknowledgmentDocument
     */
    type: TransactionFunctionalAcknowledgmentDocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentDocument
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentDocument
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionFunctionalAcknowledgmentDocumentEncodingEnum}
     * @memberof TransactionFunctionalAcknowledgmentDocument
     */
    encoding: TransactionFunctionalAcknowledgmentDocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentDocument
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionFunctionalAcknowledgmentDocument
     */
    contentLength: number;
    /**
     *
     * @type {TransactionFunctionalAcknowledgmentDocumentMetadata}
     * @memberof TransactionFunctionalAcknowledgmentDocument
     */
    metadata: TransactionFunctionalAcknowledgmentDocumentMetadata;
}


/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentDocumentIdEnum = {
    FunctionalAckX12: 'functional-ack-x12',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentDocumentIdEnum = typeof TransactionFunctionalAcknowledgmentDocumentIdEnum[keyof typeof TransactionFunctionalAcknowledgmentDocumentIdEnum];

/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentDocumentTypeEnum = {
    FunctionalAck: 'functional_ack',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentDocumentTypeEnum = typeof TransactionFunctionalAcknowledgmentDocumentTypeEnum[keyof typeof TransactionFunctionalAcknowledgmentDocumentTypeEnum];

/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentDocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentDocumentEncodingEnum = typeof TransactionFunctionalAcknowledgmentDocumentEncodingEnum[keyof typeof TransactionFunctionalAcknowledgmentDocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionFunctionalAcknowledgmentDocument interface.
 */
export function instanceOfTransactionFunctionalAcknowledgmentDocument(value: object): value is TransactionFunctionalAcknowledgmentDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (value['id'] !== 'functional-ack-x12') return false;

    if (!('type' in value) || value['type'] === undefined) return false;
    if (value['type'] !== 'functional_ack') return false;

    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (value['encoding'] !== 'text') return false;

    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function TransactionFunctionalAcknowledgmentDocumentFromJSON(json: any): TransactionFunctionalAcknowledgmentDocument {
    return TransactionFunctionalAcknowledgmentDocumentFromJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFunctionalAcknowledgmentDocument {
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
        'metadata': TransactionFunctionalAcknowledgmentDocumentMetadataFromJSON(json['metadata']),
    };
}

export function TransactionFunctionalAcknowledgmentDocumentToJSON(json: any): TransactionFunctionalAcknowledgmentDocument {
    return TransactionFunctionalAcknowledgmentDocumentToJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentDocumentToJSONTyped(value?: TransactionFunctionalAcknowledgmentDocument | null, ignoreDiscriminator: boolean = false): any {
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
        'metadata': TransactionFunctionalAcknowledgmentDocumentMetadataToJSON(value['metadata']),
    };
}
