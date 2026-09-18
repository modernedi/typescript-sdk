/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { TransactionFunctionalAcknowledgmentDocument } from './TransactionFunctionalAcknowledgmentDocument.js';
import {
    instanceOfTransactionFunctionalAcknowledgmentDocument,
    TransactionFunctionalAcknowledgmentDocumentFromJSON,
    TransactionFunctionalAcknowledgmentDocumentFromJSONTyped,
    TransactionFunctionalAcknowledgmentDocumentToJSON,
} from './TransactionFunctionalAcknowledgmentDocument.js';
import type { TransactionHttpResponseDocument } from './TransactionHttpResponseDocument.js';
import {
    instanceOfTransactionHttpResponseDocument,
    TransactionHttpResponseDocumentFromJSON,
    TransactionHttpResponseDocumentFromJSONTyped,
    TransactionHttpResponseDocumentToJSON,
} from './TransactionHttpResponseDocument.js';
import type { TransactionImplementationAcknowledgmentDocument } from './TransactionImplementationAcknowledgmentDocument.js';
import {
    instanceOfTransactionImplementationAcknowledgmentDocument,
    TransactionImplementationAcknowledgmentDocumentFromJSON,
    TransactionImplementationAcknowledgmentDocumentFromJSONTyped,
    TransactionImplementationAcknowledgmentDocumentToJSON,
} from './TransactionImplementationAcknowledgmentDocument.js';
import type { TransactionMappedOutputDocument } from './TransactionMappedOutputDocument.js';
import {
    instanceOfTransactionMappedOutputDocument,
    TransactionMappedOutputDocumentFromJSON,
    TransactionMappedOutputDocumentFromJSONTyped,
    TransactionMappedOutputDocumentToJSON,
} from './TransactionMappedOutputDocument.js';
import type { TransactionMdnDocument } from './TransactionMdnDocument.js';
import {
    TransactionMdnDocumentFromJSON,
    TransactionMdnDocumentFromJSONTyped,
    TransactionMdnDocumentToJSON,
} from './TransactionMdnDocument.js';
import type { TransactionTechnicalAcknowledgmentDocument } from './TransactionTechnicalAcknowledgmentDocument.js';
import {
    instanceOfTransactionTechnicalAcknowledgmentDocument,
    TransactionTechnicalAcknowledgmentDocumentFromJSON,
    TransactionTechnicalAcknowledgmentDocumentFromJSONTyped,
    TransactionTechnicalAcknowledgmentDocumentToJSON,
} from './TransactionTechnicalAcknowledgmentDocument.js';
import type { TransactionX12Document } from './TransactionX12Document.js';
import {
    instanceOfTransactionX12Document,
    TransactionX12DocumentFromJSON,
    TransactionX12DocumentFromJSONTyped,
    TransactionX12DocumentToJSON,
} from './TransactionX12Document.js';

/**
 * @type TransactionDocumentMetadata
 * Metadata for one retained transaction artifact. `type` selects the renderer and concrete `metadata` schema. The MDN shapes are further distinguished by stable `id`: `mdn-report` contains receipt-assurance metadata, while `functional-ack-mdn-report` and `implementation-ack-mdn-report` contain the Message-Id and disposition of the 997's or 999's own MDN. Document indexes never include `content`.
 *
 * @export
 */
export type TransactionDocumentMetadata = { type: 'functional_ack' } & TransactionFunctionalAcknowledgmentDocument | { type: 'http_response' } & TransactionHttpResponseDocument | { type: 'implementation_ack' } & TransactionImplementationAcknowledgmentDocument | { type: 'mapped_output' } & TransactionMappedOutputDocument | { type: 'mdn' } & TransactionMdnDocument | { type: 'technical_ack' } & TransactionTechnicalAcknowledgmentDocument | { type: 'x12' } & TransactionX12Document;

export function TransactionDocumentMetadataFromJSON(json: any): TransactionDocumentMetadata {
    return TransactionDocumentMetadataFromJSONTyped(json, false);
}

export function TransactionDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDocumentMetadata {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'functional_ack':
            return Object.assign({}, TransactionFunctionalAcknowledgmentDocumentFromJSONTyped(json, true), { type: 'functional_ack' } as const);
        case 'http_response':
            return Object.assign({}, TransactionHttpResponseDocumentFromJSONTyped(json, true), { type: 'http_response' } as const);
        case 'implementation_ack':
            return Object.assign({}, TransactionImplementationAcknowledgmentDocumentFromJSONTyped(json, true), { type: 'implementation_ack' } as const);
        case 'mapped_output':
            return Object.assign({}, TransactionMappedOutputDocumentFromJSONTyped(json, true), { type: 'mapped_output' } as const);
        case 'mdn':
            return Object.assign({}, TransactionMdnDocumentFromJSONTyped(json, true), { type: 'mdn' } as const);
        case 'technical_ack':
            return Object.assign({}, TransactionTechnicalAcknowledgmentDocumentFromJSONTyped(json, true), { type: 'technical_ack' } as const);
        case 'x12':
            return Object.assign({}, TransactionX12DocumentFromJSONTyped(json, true), { type: 'x12' } as const);
        default:
            return json;
    }
}

export function TransactionDocumentMetadataToJSON(json: any): any {
    return TransactionDocumentMetadataToJSONTyped(json, false);
}

export function TransactionDocumentMetadataToJSONTyped(value?: TransactionDocumentMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'functional_ack':
            return Object.assign({}, TransactionFunctionalAcknowledgmentDocumentToJSON(value), { 'type': 'functional_ack' } as const);
        case 'http_response':
            return Object.assign({}, TransactionHttpResponseDocumentToJSON(value), { 'type': 'http_response' } as const);
        case 'implementation_ack':
            return Object.assign({}, TransactionImplementationAcknowledgmentDocumentToJSON(value), { 'type': 'implementation_ack' } as const);
        case 'mapped_output':
            return Object.assign({}, TransactionMappedOutputDocumentToJSON(value), { 'type': 'mapped_output' } as const);
        case 'mdn':
            return Object.assign({}, TransactionMdnDocumentToJSON(value), { 'type': 'mdn' } as const);
        case 'technical_ack':
            return Object.assign({}, TransactionTechnicalAcknowledgmentDocumentToJSON(value), { 'type': 'technical_ack' } as const);
        case 'x12':
            return Object.assign({}, TransactionX12DocumentToJSON(value), { 'type': 'x12' } as const);
        default:
            return value;
    }
}
