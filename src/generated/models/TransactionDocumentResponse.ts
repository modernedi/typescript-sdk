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
import type { TransactionDocument } from './TransactionDocument.js';
import {
    TransactionDocumentFromJSON,
    TransactionDocumentFromJSONTyped,
    TransactionDocumentToJSON,
    TransactionDocumentToJSONTyped,
} from './TransactionDocument.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';

/**
 * One complete retained transaction artifact selected from the document index.
 * @export
 * @interface TransactionDocumentResponse
 */
export interface TransactionDocumentResponse {
    /**
     * Always `true`; missing transactions or documents use an error response.
     * @type {boolean}
     * @memberof TransactionDocumentResponse
     */
    success: boolean;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof TransactionDocumentResponse
     */
    environment: TransactionEnvironmentValue;
    /**
     *
     * @type {TransactionDocument}
     * @memberof TransactionDocumentResponse
     */
    document: TransactionDocument;
}



/**
 * Check if a given object implements the TransactionDocumentResponse interface.
 */
export function instanceOfTransactionDocumentResponse(value: object): value is TransactionDocumentResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('document' in value) || value['document'] === undefined) return false;
    return true;
}

export function TransactionDocumentResponseFromJSON(json: any): TransactionDocumentResponse {
    return TransactionDocumentResponseFromJSONTyped(json, false);
}

export function TransactionDocumentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDocumentResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'document': TransactionDocumentFromJSON(json['document']),
    };
}

export function TransactionDocumentResponseToJSON(json: any): TransactionDocumentResponse {
    return TransactionDocumentResponseToJSONTyped(json, false);
}

export function TransactionDocumentResponseToJSONTyped(value?: TransactionDocumentResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'document': TransactionDocumentToJSON(value['document']),
    };
}
