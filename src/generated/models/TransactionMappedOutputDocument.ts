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
import type { TransactionMappedOutputDocumentMetadata } from './TransactionMappedOutputDocumentMetadata.js';
import {
    TransactionMappedOutputDocumentMetadataFromJSON,
    TransactionMappedOutputDocumentMetadataFromJSONTyped,
    TransactionMappedOutputDocumentMetadataToJSON,
    TransactionMappedOutputDocumentMetadataToJSONTyped,
} from './TransactionMappedOutputDocumentMetadata.js';

/**
 * Application-facing output produced by an inbound mapping.
 * @export
 * @interface TransactionMappedOutputDocument
 */
export interface TransactionMappedOutputDocument {
    /**
     * Stable transaction-local artifact id derived from the mapped-output sequence number.
     * @type {string}
     * @memberof TransactionMappedOutputDocument
     */
    id: string;
    /**
     * Selects the mapped-output renderer and map-provenance metadata shape.
     * @type {TransactionMappedOutputDocumentTypeEnum}
     * @memberof TransactionMappedOutputDocument
     */
    type: TransactionMappedOutputDocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionMappedOutputDocument
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionMappedOutputDocument
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionMappedOutputDocumentEncodingEnum}
     * @memberof TransactionMappedOutputDocument
     */
    encoding: TransactionMappedOutputDocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMappedOutputDocument
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionMappedOutputDocument
     */
    contentLength: number;
    /**
     *
     * @type {TransactionMappedOutputDocumentMetadata}
     * @memberof TransactionMappedOutputDocument
     */
    metadata: TransactionMappedOutputDocumentMetadata;
}


/**
 * @export
 */
export const TransactionMappedOutputDocumentTypeEnum = {
    MappedOutput: 'mapped_output',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappedOutputDocumentTypeEnum = typeof TransactionMappedOutputDocumentTypeEnum[keyof typeof TransactionMappedOutputDocumentTypeEnum];

/**
 * @export
 */
export const TransactionMappedOutputDocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappedOutputDocumentEncodingEnum = typeof TransactionMappedOutputDocumentEncodingEnum[keyof typeof TransactionMappedOutputDocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionMappedOutputDocument interface.
 */
export function instanceOfTransactionMappedOutputDocument(value: object): value is TransactionMappedOutputDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (value['type'] !== 'mapped_output') return false;

    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (value['encoding'] !== 'text') return false;

    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function TransactionMappedOutputDocumentFromJSON(json: any): TransactionMappedOutputDocument {
    return TransactionMappedOutputDocumentFromJSONTyped(json, false);
}

export function TransactionMappedOutputDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappedOutputDocument {
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
        'metadata': TransactionMappedOutputDocumentMetadataFromJSON(json['metadata']),
    };
}

export function TransactionMappedOutputDocumentToJSON(json: any): TransactionMappedOutputDocument {
    return TransactionMappedOutputDocumentToJSONTyped(json, false);
}

export function TransactionMappedOutputDocumentToJSONTyped(value?: TransactionMappedOutputDocument | null, ignoreDiscriminator: boolean = false): any {
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
        'metadata': TransactionMappedOutputDocumentMetadataToJSON(value['metadata']),
    };
}
