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
 * X12 envelope and delimiter context captured for a transaction.
 * @export
 * @interface TransactionEdiMetadata
 */
export interface TransactionEdiMetadata {
    /**
     * Numeric X12 implementation version, or `null` when it was not recorded.
     * @type {string}
     * @memberof TransactionEdiMetadata
     */
    x12Version?: string | null;
    /**
     * GS01 functional identifier code, or `null` when it was not recorded.
     * @type {string}
     * @memberof TransactionEdiMetadata
     */
    functionalIdentifierCode?: string | null;
    /**
     * ST01 transaction set identifier code recorded by the runtime.
     * @type {string}
     * @memberof TransactionEdiMetadata
     */
    transactionGroupType?: string | null;
    /**
     * Single-character segment terminator detected from the interchange, or `null` when unavailable.
     * @type {string}
     * @memberof TransactionEdiMetadata
     */
    segmentTerminator?: string | null;
}

/**
 * Check if a given object implements the TransactionEdiMetadata interface.
 */
export function instanceOfTransactionEdiMetadata(value: object): value is TransactionEdiMetadata {
    return true;
}

export function TransactionEdiMetadataFromJSON(json: any): TransactionEdiMetadata {
    return TransactionEdiMetadataFromJSONTyped(json, false);
}

export function TransactionEdiMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionEdiMetadata {
    if (json == null) {
        return json;
    }
    return {

        'x12Version': json['x12Version'] === undefined ? undefined : json['x12Version'] === null ? null : json['x12Version'],
        'functionalIdentifierCode': json['functionalIdentifierCode'] === undefined ? undefined : json['functionalIdentifierCode'] === null ? null : json['functionalIdentifierCode'],
        'transactionGroupType': json['transactionGroupType'] === undefined ? undefined : json['transactionGroupType'] === null ? null : json['transactionGroupType'],
        'segmentTerminator': json['segmentTerminator'] === undefined ? undefined : json['segmentTerminator'] === null ? null : json['segmentTerminator'],
    };
}

export function TransactionEdiMetadataToJSON(json: any): TransactionEdiMetadata {
    return TransactionEdiMetadataToJSONTyped(json, false);
}

export function TransactionEdiMetadataToJSONTyped(value?: TransactionEdiMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'x12Version': value['x12Version'],
        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'transactionGroupType': value['transactionGroupType'],
        'segmentTerminator': value['segmentTerminator'],
    };
}
