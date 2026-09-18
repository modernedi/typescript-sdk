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
import type { TransactionTechnicalAcknowledgmentDocumentMetadata } from './TransactionTechnicalAcknowledgmentDocumentMetadata.js';
import {
    TransactionTechnicalAcknowledgmentDocumentMetadataFromJSON,
    TransactionTechnicalAcknowledgmentDocumentMetadataFromJSONTyped,
    TransactionTechnicalAcknowledgmentDocumentMetadataToJSON,
    TransactionTechnicalAcknowledgmentDocumentMetadataToJSONTyped,
} from './TransactionTechnicalAcknowledgmentDocumentMetadata.js';

/**
 * One complete retained transaction artifact returned only by the individual document endpoint. Its `content` body is required.
 *
 * @export
 */
export type TransactionDocument = TransactionDocumentMetadata & {
    /**
     * Untrusted document body. Parse according to `contentType` and escape or sandbox it when rendering.
     * @type {string}
     * @memberof TransactionDocument
     */
    content: string;
};



/**
 * Check if a given object implements the TransactionDocument interface.
 */
export function instanceOfTransactionDocument(value: object): value is TransactionDocument {
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function TransactionDocumentFromJSON(json: any): TransactionDocument {
    return TransactionDocumentFromJSONTyped(json, false);
}

export function TransactionDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDocument {
    if (json == null) {
        return json;
    }
    if (!ignoreDiscriminator) {

    }
    return {
        ...(TransactionDocumentMetadataFromJSONTyped(json, true) as object),
        'content': json['content'],
    } as TransactionDocument;
}

export function TransactionDocumentToJSON(json: any): TransactionDocument {
    return TransactionDocumentToJSONTyped(json, false);
}

export function TransactionDocumentToJSONTyped(value?: TransactionDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (!ignoreDiscriminator) {
        switch (value['type']) {
            default:
                return value;
        }
    }

    return {
        ...TransactionDocumentMetadataToJSONTyped(value, true),
        'content': value['content'],
    };
}
