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
 * Raw inbound or outbound X12 transaction document.
 * @export
 * @interface TransactionX12Document
 */
export interface TransactionX12Document {
    /**
     * Stable id of the retained raw X12 artifact.
     * @type {TransactionX12DocumentIdEnum}
     * @memberof TransactionX12Document
     */
    id: TransactionX12DocumentIdEnum;
    /**
     * Selects the raw-X12 document renderer and empty metadata shape.
     * @type {TransactionX12DocumentTypeEnum}
     * @memberof TransactionX12Document
     */
    type: TransactionX12DocumentTypeEnum;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionX12Document
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionX12Document
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionX12DocumentEncodingEnum}
     * @memberof TransactionX12Document
     */
    encoding: TransactionX12DocumentEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionX12Document
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionX12Document
     */
    contentLength: number;
    /**
     * Raw X12 has no additional document metadata; transaction identity is available on the enclosing detail.
     * @type {object}
     * @memberof TransactionX12Document
     */
    metadata: object;
}


/**
 * @export
 */
export const TransactionX12DocumentIdEnum = {
    RawX12: 'raw-x12',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionX12DocumentIdEnum = typeof TransactionX12DocumentIdEnum[keyof typeof TransactionX12DocumentIdEnum];

/**
 * @export
 */
export const TransactionX12DocumentTypeEnum = {
    X12: 'x12',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionX12DocumentTypeEnum = typeof TransactionX12DocumentTypeEnum[keyof typeof TransactionX12DocumentTypeEnum];

/**
 * @export
 */
export const TransactionX12DocumentEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionX12DocumentEncodingEnum = typeof TransactionX12DocumentEncodingEnum[keyof typeof TransactionX12DocumentEncodingEnum];


/**
 * Check if a given object implements the TransactionX12Document interface.
 */
export function instanceOfTransactionX12Document(value: object): value is TransactionX12Document {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (value['id'] !== 'raw-x12') return false;

    if (!('type' in value) || value['type'] === undefined) return false;
    if (value['type'] !== 'x12') return false;

    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (value['encoding'] !== 'text') return false;

    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function TransactionX12DocumentFromJSON(json: any): TransactionX12Document {
    return TransactionX12DocumentFromJSONTyped(json, false);
}

export function TransactionX12DocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionX12Document {
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
        'metadata': json['metadata'],
    };
}

export function TransactionX12DocumentToJSON(json: any): TransactionX12Document {
    return TransactionX12DocumentToJSONTyped(json, false);
}

export function TransactionX12DocumentToJSONTyped(value?: TransactionX12Document | null, ignoreDiscriminator: boolean = false): any {
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
        'metadata': value['metadata'],
    };
}
