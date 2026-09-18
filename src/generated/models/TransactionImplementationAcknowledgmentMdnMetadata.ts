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
 * Message identity and raw disposition of the AS2 MDN attached to a 999.
 * @export
 * @interface TransactionImplementationAcknowledgmentMdnMetadata
 */
export interface TransactionImplementationAcknowledgmentMdnMetadata {
    /**
     * Message-ID of the MDN attached to the 999.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentMdnMetadata
     */
    messageId: string | null;
    /**
     * Raw disposition of the MDN attached to the 999.
     * @type {string}
     * @memberof TransactionImplementationAcknowledgmentMdnMetadata
     */
    disposition: string | null;
}

/**
 * Check if a given object implements the TransactionImplementationAcknowledgmentMdnMetadata interface.
 */
export function instanceOfTransactionImplementationAcknowledgmentMdnMetadata(value: object): value is TransactionImplementationAcknowledgmentMdnMetadata {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('disposition' in value) || value['disposition'] === undefined) return false;
    return true;
}

export function TransactionImplementationAcknowledgmentMdnMetadataFromJSON(json: any): TransactionImplementationAcknowledgmentMdnMetadata {
    return TransactionImplementationAcknowledgmentMdnMetadataFromJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentMdnMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionImplementationAcknowledgmentMdnMetadata {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'disposition': json['disposition'],
    };
}

export function TransactionImplementationAcknowledgmentMdnMetadataToJSON(json: any): TransactionImplementationAcknowledgmentMdnMetadata {
    return TransactionImplementationAcknowledgmentMdnMetadataToJSONTyped(json, false);
}

export function TransactionImplementationAcknowledgmentMdnMetadataToJSONTyped(value?: TransactionImplementationAcknowledgmentMdnMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'disposition': value['disposition'],
    };
}
