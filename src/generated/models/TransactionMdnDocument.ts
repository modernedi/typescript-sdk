/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { TransactionFunctionalAcknowledgmentMdnDocument } from './TransactionFunctionalAcknowledgmentMdnDocument.js';
import {
    instanceOfTransactionFunctionalAcknowledgmentMdnDocument,
    TransactionFunctionalAcknowledgmentMdnDocumentFromJSON,
    TransactionFunctionalAcknowledgmentMdnDocumentFromJSONTyped,
    TransactionFunctionalAcknowledgmentMdnDocumentToJSON,
} from './TransactionFunctionalAcknowledgmentMdnDocument.js';
import type { TransactionImplementationAcknowledgmentMdnDocument } from './TransactionImplementationAcknowledgmentMdnDocument.js';
import {
    instanceOfTransactionImplementationAcknowledgmentMdnDocument,
    TransactionImplementationAcknowledgmentMdnDocumentFromJSON,
    TransactionImplementationAcknowledgmentMdnDocumentFromJSONTyped,
    TransactionImplementationAcknowledgmentMdnDocumentToJSON,
} from './TransactionImplementationAcknowledgmentMdnDocument.js';
import type { TransactionPrimaryMdnDocument } from './TransactionPrimaryMdnDocument.js';
import {
    instanceOfTransactionPrimaryMdnDocument,
    TransactionPrimaryMdnDocumentFromJSON,
    TransactionPrimaryMdnDocumentFromJSONTyped,
    TransactionPrimaryMdnDocumentToJSON,
} from './TransactionPrimaryMdnDocument.js';

/**
 * @type TransactionMdnDocument
 * AS2 MDN report. Inspect `id` to distinguish the original transaction's full MDN metadata from compact MDN metadata attached to a 997 or 999.
 *
 * @export
 */
export type TransactionMdnDocument = TransactionFunctionalAcknowledgmentMdnDocument | TransactionImplementationAcknowledgmentMdnDocument | TransactionPrimaryMdnDocument;

export function TransactionMdnDocumentFromJSON(json: any): TransactionMdnDocument {
    return TransactionMdnDocumentFromJSONTyped(json, false);
}

export function TransactionMdnDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMdnDocument {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfTransactionFunctionalAcknowledgmentMdnDocument(json)) {
        return TransactionFunctionalAcknowledgmentMdnDocumentFromJSONTyped(json, true);
    }
    if (instanceOfTransactionImplementationAcknowledgmentMdnDocument(json)) {
        return TransactionImplementationAcknowledgmentMdnDocumentFromJSONTyped(json, true);
    }
    if (instanceOfTransactionPrimaryMdnDocument(json)) {
        return TransactionPrimaryMdnDocumentFromJSONTyped(json, true);
    }
    return {} as any;
}

export function TransactionMdnDocumentToJSON(json: any): any {
    return TransactionMdnDocumentToJSONTyped(json, false);
}

export function TransactionMdnDocumentToJSONTyped(value?: TransactionMdnDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfTransactionFunctionalAcknowledgmentMdnDocument(value)) {
        return TransactionFunctionalAcknowledgmentMdnDocumentToJSON(value as TransactionFunctionalAcknowledgmentMdnDocument);
    }
    if (instanceOfTransactionImplementationAcknowledgmentMdnDocument(value)) {
        return TransactionImplementationAcknowledgmentMdnDocumentToJSON(value as TransactionImplementationAcknowledgmentMdnDocument);
    }
    if (instanceOfTransactionPrimaryMdnDocument(value)) {
        return TransactionPrimaryMdnDocumentToJSON(value as TransactionPrimaryMdnDocument);
    }
    return {};
}
