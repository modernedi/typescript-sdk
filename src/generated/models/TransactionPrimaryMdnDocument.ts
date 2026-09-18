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
import type { TransactionMdnDocumentMetadata } from './TransactionMdnDocumentMetadata.js';
import {
    TransactionMdnDocumentMetadataFromJSON,
    TransactionMdnDocumentMetadataFromJSONTyped,
    TransactionMdnDocumentMetadataToJSON,
    TransactionMdnDocumentMetadataToJSONTyped,
} from './TransactionMdnDocumentMetadata.js';

/**
 *
 * @export
 * @interface TransactionPrimaryMdnDocument
 */
export interface TransactionPrimaryMdnDocument {
    /**
     * Stable id of the original transaction's full MDN report.
     * @type {TransactionPrimaryMdnDocumentIdEnum}
     * @memberof TransactionPrimaryMdnDocument
     */
    id: TransactionPrimaryMdnDocumentIdEnum;
    /**
     * Selects an AS2 MDN report renderer; this id selects full receipt-assurance metadata.
     * @type {TransactionPrimaryMdnDocumentTypeEnum}
     * @memberof TransactionPrimaryMdnDocument
     */
    type: TransactionPrimaryMdnDocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionPrimaryMdnDocument
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionPrimaryMdnDocument
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionPrimaryMdnDocumentEncodingEnum}
     * @memberof TransactionPrimaryMdnDocument
     */
    encoding: TransactionPrimaryMdnDocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionPrimaryMdnDocument
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionPrimaryMdnDocument
     */
    contentLength: number;
    /**
     *
     * @type {TransactionMdnDocumentMetadata}
     * @memberof TransactionPrimaryMdnDocument
     */
    metadata: TransactionMdnDocumentMetadata;
}


/**
 * @export
 */
export const TransactionPrimaryMdnDocumentIdEnum = {
    MdnReport: 'mdn-report',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionPrimaryMdnDocumentIdEnum = typeof TransactionPrimaryMdnDocumentIdEnum[keyof typeof TransactionPrimaryMdnDocumentIdEnum];

/**
 * @export
 */
export const TransactionPrimaryMdnDocumentTypeEnum = {
    Mdn: 'mdn',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionPrimaryMdnDocumentTypeEnum = typeof TransactionPrimaryMdnDocumentTypeEnum[keyof typeof TransactionPrimaryMdnDocumentTypeEnum];

/**
 * @export
 */
export const TransactionPrimaryMdnDocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionPrimaryMdnDocumentEncodingEnum = typeof TransactionPrimaryMdnDocumentEncodingEnum[keyof typeof TransactionPrimaryMdnDocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionPrimaryMdnDocument interface.
 */
export function instanceOfTransactionPrimaryMdnDocument(value: object): value is TransactionPrimaryMdnDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (value['id'] !== 'mdn-report') return false;

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

export function TransactionPrimaryMdnDocumentFromJSON(json: any): TransactionPrimaryMdnDocument {
    return TransactionPrimaryMdnDocumentFromJSONTyped(json, false);
}

export function TransactionPrimaryMdnDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPrimaryMdnDocument {
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
        'metadata': TransactionMdnDocumentMetadataFromJSON(json['metadata']),
    };
}

export function TransactionPrimaryMdnDocumentToJSON(json: any): TransactionPrimaryMdnDocument {
    return TransactionPrimaryMdnDocumentToJSONTyped(json, false);
}

export function TransactionPrimaryMdnDocumentToJSONTyped(value?: TransactionPrimaryMdnDocument | null, ignoreDiscriminator: boolean = false): any {
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
        'metadata': TransactionMdnDocumentMetadataToJSON(value['metadata']),
    };
}
