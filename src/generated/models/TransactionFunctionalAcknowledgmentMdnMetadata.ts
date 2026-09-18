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
 * Message identity and raw disposition of the AS2 MDN attached to a 997.
 * @export
 * @interface TransactionFunctionalAcknowledgmentMdnMetadata
 */
export interface TransactionFunctionalAcknowledgmentMdnMetadata {
    /**
     * Message-ID of the MDN attached to the 997.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentMdnMetadata
     */
    messageId: string | null;
    /**
     * Raw disposition of the MDN attached to the 997.
     * @type {string}
     * @memberof TransactionFunctionalAcknowledgmentMdnMetadata
     */
    disposition: string | null;
}

/**
 * Check if a given object implements the TransactionFunctionalAcknowledgmentMdnMetadata interface.
 */
export function instanceOfTransactionFunctionalAcknowledgmentMdnMetadata(value: object): value is TransactionFunctionalAcknowledgmentMdnMetadata {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('disposition' in value) || value['disposition'] === undefined) return false;
    return true;
}

export function TransactionFunctionalAcknowledgmentMdnMetadataFromJSON(json: any): TransactionFunctionalAcknowledgmentMdnMetadata {
    return TransactionFunctionalAcknowledgmentMdnMetadataFromJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentMdnMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFunctionalAcknowledgmentMdnMetadata {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'disposition': json['disposition'],
    };
}

export function TransactionFunctionalAcknowledgmentMdnMetadataToJSON(json: any): TransactionFunctionalAcknowledgmentMdnMetadata {
    return TransactionFunctionalAcknowledgmentMdnMetadataToJSONTyped(json, false);
}

export function TransactionFunctionalAcknowledgmentMdnMetadataToJSONTyped(value?: TransactionFunctionalAcknowledgmentMdnMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'disposition': value['disposition'],
    };
}
