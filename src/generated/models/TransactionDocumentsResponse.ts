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
import type { TransactionDocumentMetadata } from './TransactionDocumentMetadata.js';
import {
    TransactionDocumentMetadataFromJSON,
    TransactionDocumentMetadataFromJSONTyped,
    TransactionDocumentMetadataToJSON,
    TransactionDocumentMetadataToJSONTyped,
} from './TransactionDocumentMetadata.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * Metadata index of documents retained for one transaction, including X12, mapped outputs, acknowledgments, and HTTP response artifacts.
 * @export
 * @interface TransactionDocumentsResponse
 */
export interface TransactionDocumentsResponse {
    /**
     * Always `true`; unknown transactions or authorization failures use an error response.
     * @type {boolean}
     * @memberof TransactionDocumentsResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionDocumentsResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     * Retained document metadata in display order. Fetch an individual document to obtain its body.
     * @type {Array<TransactionDocumentMetadata>}
     * @memberof TransactionDocumentsResponse
     */
    documents: Array<TransactionDocumentMetadata>;
}



/**
 * Check if a given object implements the TransactionDocumentsResponse interface.
 */
export function instanceOfTransactionDocumentsResponse(value: object): value is TransactionDocumentsResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('documents' in value) || value['documents'] === undefined) return false;
    return true;
}

export function TransactionDocumentsResponseFromJSON(json: any): TransactionDocumentsResponse {
    return TransactionDocumentsResponseFromJSONTyped(json, false);
}

export function TransactionDocumentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDocumentsResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'documents': ((json['documents'] as Array<any>).map(TransactionDocumentMetadataFromJSON)),
    };
}

export function TransactionDocumentsResponseToJSON(json: any): TransactionDocumentsResponse {
    return TransactionDocumentsResponseToJSONTyped(json, false);
}

export function TransactionDocumentsResponseToJSONTyped(value?: TransactionDocumentsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'documents': ((value['documents'] as Array<any>).map(TransactionDocumentMetadataToJSON)),
    };
}
