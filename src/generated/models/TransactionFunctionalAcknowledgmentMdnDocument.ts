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
import type { TransactionFunctionalAcknowledgmentMdnMetadata } from './TransactionFunctionalAcknowledgmentMdnMetadata.js';
import {
    TransactionFunctionalAcknowledgmentMdnMetadataFromJSON,
    TransactionFunctionalAcknowledgmentMdnMetadataFromJSONTyped,
    TransactionFunctionalAcknowledgmentMdnMetadataToJSON,
    TransactionFunctionalAcknowledgmentMdnMetadataToJSONTyped,
} from './TransactionFunctionalAcknowledgmentMdnMetadata.js';

/**
 *
 * @export
 * @interface TransactionFunctionalAcknowledgmentMdnDocument
 */
export interface TransactionFunctionalAcknowledgmentMdnDocument {
    /**
     * Stable id of the MDN report attached to the X12 997.
     * @type {TransactionFunctionalAcknowledgmentMdnDocumentIdEnum}
     * @memberof TransactionFunctionalAcknowledgmentMdnDocument
     */
    id: TransactionFunctionalAcknowledgmentMdnDocumentIdEnum;
    /**
     * Selects an AS2 MDN report renderer; this id selects compact 997-MDN metadata.
     * @type {TransactionFunctionalAcknowledgmentMdnDocumentTypeEnum}
     * @memberof TransactionFunctionalAcknowledgmentMdnDocument
     */
    type: TransactionFunctionalAcknowledgmentMdnDocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentMdnDocument
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentMdnDocument
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionFunctionalAcknowledgmentMdnDocumentEncodingEnum}
     * @memberof TransactionFunctionalAcknowledgmentMdnDocument
     */
    encoding: TransactionFunctionalAcknowledgmentMdnDocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentMdnDocument
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionFunctionalAcknowledgmentMdnDocument
     */
    contentLength: number;
    /**
     *
     * @type {TransactionFunctionalAcknowledgmentMdnMetadata}
     * @memberof TransactionFunctionalAcknowledgmentMdnDocument
     */
    metadata: TransactionFunctionalAcknowledgmentMdnMetadata;
}


/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentMdnDocumentIdEnum = {
    FunctionalAckMdnReport: 'functional-ack-mdn-report',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentMdnDocumentIdEnum = typeof TransactionFunctionalAcknowledgmentMdnDocumentIdEnum[keyof typeof TransactionFunctionalAcknowledgmentMdnDocumentIdEnum];

/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentMdnDocumentTypeEnum = {
    Mdn: 'mdn',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentMdnDocumentTypeEnum = typeof TransactionFunctionalAcknowledgmentMdnDocumentTypeEnum[keyof typeof TransactionFunctionalAcknowledgmentMdnDocumentTypeEnum];

/**
 * @export
 */
export const TransactionFunctionalAcknowledgmentMdnDocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionFunctionalAcknowledgmentMdnDocumentEncodingEnum = typeof TransactionFunctionalAcknowledgmentMdnDocumentEncodingEnum[keyof typeof TransactionFunctionalAcknowledgmentMdnDocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionFunctionalAcknowledgmentMdnDocument interface.
 */
export function instanceOfTransactionFunctionalAcknowledgmentMdnDocument(value: object): value is TransactionFunctionalAcknowledgmentMdnDocument {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (value['id'] !== 'functional-ack-mdn-report') return false;

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

export function TransactionFunctionalAcknowledgmentMdnDocumentFromJSON(json: any): TransactionFunctionalAcknowledgmentMdnDocument {
    return TransactionFunctionalAcknowledgmentMdnDocumentFromJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentMdnDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFunctionalAcknowledgmentMdnDocument {
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
        'metadata': TransactionFunctionalAcknowledgmentMdnMetadataFromJSON(json['metadata']),
    };
}

export function TransactionFunctionalAcknowledgmentMdnDocumentToJSON(json: any): TransactionFunctionalAcknowledgmentMdnDocument {
    return TransactionFunctionalAcknowledgmentMdnDocumentToJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentMdnDocumentToJSONTyped(value?: TransactionFunctionalAcknowledgmentMdnDocument | null, ignoreDiscriminator: boolean = false): any {
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
        'metadata': TransactionFunctionalAcknowledgmentMdnMetadataToJSON(value['metadata']),
    };
}
