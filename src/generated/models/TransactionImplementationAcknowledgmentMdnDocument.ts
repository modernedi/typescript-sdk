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
import type { TransactionImplementationAcknowledgmentMdnMetadata } from './TransactionImplementationAcknowledgmentMdnMetadata.js';
import {
    TransactionImplementationAcknowledgmentMdnMetadataFromJSON,
    TransactionImplementationAcknowledgmentMdnMetadataFromJSONTyped,
    TransactionImplementationAcknowledgmentMdnMetadataToJSON,
    TransactionImplementationAcknowledgmentMdnMetadataToJSONTyped,
} from './TransactionImplementationAcknowledgmentMdnMetadata.js';

/**
 *
 * @export
 * @interface TransactionImplementationAcknowledgmentMdnDocument
 */
export interface TransactionImplementationAcknowledgmentMdnDocument {
    /**
     * Stable id of the MDN report attached to the X12 999.
     * @type {TransactionImplementationAcknowledgmentMdnDocumentIdEnum}
     * @memberof TransactionImplementationAcknowledgmentMdnDocument
     */
    id: TransactionImplementationAcknowledgmentMdnDocumentIdEnum;
    /**
     * Selects an AS2 MDN report renderer; this id selects compact 999-MDN metadata.
     * @type {TransactionImplementationAcknowledgmentMdnDocumentTypeEnum}
     * @memberof TransactionImplementationAcknowledgmentMdnDocument
     */
    type: TransactionImplementationAcknowledgmentMdnDocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentMdnDocument
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentMdnDocument
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionImplementationAcknowledgmentMdnDocumentEncodingEnum}
     * @memberof TransactionImplementationAcknowledgmentMdnDocument
     */
    encoding: TransactionImplementationAcknowledgmentMdnDocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentMdnDocument
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionImplementationAcknowledgmentMdnDocument
     */
    contentLength: number;
    /**
     *
     * @type {TransactionImplementationAcknowledgmentMdnMetadata}
     * @memberof TransactionImplementationAcknowledgmentMdnDocument
     */
    metadata: TransactionImplementationAcknowledgmentMdnMetadata;
}


/**
 * @export
 */
export const TransactionImplementationAcknowledgmentMdnDocumentIdEnum = {
    ImplementationAckMdnReport: 'implementation-ack-mdn-report',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentMdnDocumentIdEnum = typeof TransactionImplementationAcknowledgmentMdnDocumentIdEnum[keyof typeof TransactionImplementationAcknowledgmentMdnDocumentIdEnum];

/**
 * @export
 */
export const TransactionImplementationAcknowledgmentMdnDocumentTypeEnum = {
    Mdn: 'mdn',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentMdnDocumentTypeEnum = typeof TransactionImplementationAcknowledgmentMdnDocumentTypeEnum[keyof typeof TransactionImplementationAcknowledgmentMdnDocumentTypeEnum];

/**
 * @export
 */
export const TransactionImplementationAcknowledgmentMdnDocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionImplementationAcknowledgmentMdnDocumentEncodingEnum = typeof TransactionImplementationAcknowledgmentMdnDocumentEncodingEnum[keyof typeof TransactionImplementationAcknowledgmentMdnDocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionImplementationAcknowledgmentMdnDocument interface.
 */
export function instanceOfTransactionImplementationAcknowledgmentMdnDocument(value: object): value is TransactionImplementationAcknowledgmentMdnDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (value['id'] !== 'implementation-ack-mdn-report') return false;

    if (!('type' in value) || value['type'] === undefined) return false;
    if (value['type'] !== 'mdn') return false;

    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (value['encoding'] !== 'text') return false;

    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function TransactionImplementationAcknowledgmentMdnDocumentFromJSON(json: any): TransactionImplementationAcknowledgmentMdnDocument {
    return TransactionImplementationAcknowledgmentMdnDocumentFromJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentMdnDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionImplementationAcknowledgmentMdnDocument {
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
        'metadata': TransactionImplementationAcknowledgmentMdnMetadataFromJSON(json['metadata']),
    };
}

export function TransactionImplementationAcknowledgmentMdnDocumentToJSON(json: any): TransactionImplementationAcknowledgmentMdnDocument {
    return TransactionImplementationAcknowledgmentMdnDocumentToJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentMdnDocumentToJSONTyped(value?: TransactionImplementationAcknowledgmentMdnDocument | null, ignoreDiscriminator: boolean = false): any {
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
        'metadata': TransactionImplementationAcknowledgmentMdnMetadataToJSON(value['metadata']),
    };
}
