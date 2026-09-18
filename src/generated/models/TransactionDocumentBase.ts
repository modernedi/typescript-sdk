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
 *
 * @export
 * @interface TransactionDocumentBase
 */
export interface TransactionDocumentBase {
    /**
     * Stable artifact identifier within this transaction response, not a queue acknowledgment id.
     * @type {string}
     * @memberof TransactionDocumentBase
     */
    id: string;
    /**
     * Machine-readable artifact category used to choose rendering and operator controls.
     * @type {string}
     * @memberof TransactionDocumentBase
     */
    type: string;
    /**
     * Customer-readable artifact name suitable for a transaction document list.
     * @type {string}
     * @memberof TransactionDocumentBase
     */
    label: string;
    /**
     * Media type describing how to parse or display `content`.
     * @type {string}
     * @memberof TransactionDocumentBase
     */
    contentType: string;
    /**
     * Representation of `content`; currently all public transaction documents are returned as text.
     * @type {TransactionDocumentBaseEncodingEnum}
     * @memberof TransactionDocumentBase
     */
    encoding: TransactionDocumentBaseEncodingEnum;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionDocumentBase
     */
    timestamp: string | null;
    /**
     * Length of the retained text artifact; use it as display context and to decide whether to fetch, not as a checksum.
     * @type {number}
     * @memberof TransactionDocumentBase
     */
    contentLength: number;
    /**
     * Structured metadata whose concrete schema is selected by `type` and, for MDNs, `id`.
     * @type {object}
     * @memberof TransactionDocumentBase
     */
    metadata: object;
}


/**
 * @export
 */
export const TransactionDocumentBaseEncodingEnum = {
    Text: 'text',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionDocumentBaseEncodingEnum = typeof TransactionDocumentBaseEncodingEnum[keyof typeof TransactionDocumentBaseEncodingEnum];


/**
 * Check if a given object implements the TransactionDocumentBase interface.
 */
export function instanceOfTransactionDocumentBase(value: object): value is TransactionDocumentBase {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (value['encoding'] !== 'text') return false;

    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('contentLength' in value) || value['contentLength'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function TransactionDocumentBaseFromJSON(json: any): TransactionDocumentBase {
    return TransactionDocumentBaseFromJSONTyped(json, false);
}

export function TransactionDocumentBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDocumentBase {
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

export function TransactionDocumentBaseToJSON(json: any): TransactionDocumentBase {
    return TransactionDocumentBaseToJSONTyped(json, false);
}

export function TransactionDocumentBaseToJSONTyped(value?: TransactionDocumentBase | null, ignoreDiscriminator: boolean = false): any {
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
