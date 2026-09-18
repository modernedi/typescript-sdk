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
 * Selects optional source and mapping context included in `GET /v1/mapped-outputs` message objects and the webhook's nested `message` object. Every field defaults to `true`. Setting a field to `false` omits its corresponding message property; queue identifiers, receipt handles, payload, content type, purpose, and business key remain present. Webhook-envelope routing fields such as `tenantId` and `partnerId` also remain present.
 *
 * @export
 * @interface MappingDeliveredMetadata
 */
export interface MappingDeliveredMetadata {
    /**
     * Include `partnerName` and tenant-scoped `partnerId` in the mapped-output message.
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    partner?: boolean;
    /**
     * Include the source transaction's persisted `transactionTimestamp`.
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    transactionTimestamp?: boolean;
    /**
     * Include `transactionSet` and the equivalent `edi.transactionGroupType` value.
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    transactionSet?: boolean;
    /**
     * Include `controlNumbers.transaction` (X12 ST02).
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    transactionControlNumber?: boolean;
    /**
     * Include `controlNumbers.functionalGroup` (X12 GS06).
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    functionalGroupControlNumber?: boolean;
    /**
     * Include `edi.x12Version`, derived from the parsed interchange version.
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    x12Version?: boolean;
    /**
     * Include `edi.functionalIdentifierCode` (X12 GS01).
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    functionalIdentifierCode?: boolean;
    /**
     * Include `edi.segmentTerminator`.
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    segmentTerminator?: boolean;
    /**
     * Include `mapping.fileSha256Hash`, the Base64-encoded SHA-256 hash of the map source that generated this output.
     * @type {boolean}
     * @memberof MappingDeliveredMetadata
     */
    mappingSourceHash?: boolean;
}

/**
 * Check if a given object implements the MappingDeliveredMetadata interface.
 */
export function instanceOfMappingDeliveredMetadata(value: object): value is MappingDeliveredMetadata {
    return true;
}

export function MappingDeliveredMetadataFromJSON(json: any): MappingDeliveredMetadata {
    return MappingDeliveredMetadataFromJSONTyped(json, false);
}

export function MappingDeliveredMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingDeliveredMetadata {
    if (json == null) {
        return json;
    }
    return {

        'partner': json['partner'] == null ? undefined : json['partner'],
        'transactionTimestamp': json['transactionTimestamp'] == null ? undefined : json['transactionTimestamp'],
        'transactionSet': json['transactionSet'] == null ? undefined : json['transactionSet'],
        'transactionControlNumber': json['transactionControlNumber'] == null ? undefined : json['transactionControlNumber'],
        'functionalGroupControlNumber': json['functionalGroupControlNumber'] == null ? undefined : json['functionalGroupControlNumber'],
        'x12Version': json['x12Version'] == null ? undefined : json['x12Version'],
        'functionalIdentifierCode': json['functionalIdentifierCode'] == null ? undefined : json['functionalIdentifierCode'],
        'segmentTerminator': json['segmentTerminator'] == null ? undefined : json['segmentTerminator'],
        'mappingSourceHash': json['mappingSourceHash'] == null ? undefined : json['mappingSourceHash'],
    };
}

export function MappingDeliveredMetadataToJSON(json: any): MappingDeliveredMetadata {
    return MappingDeliveredMetadataToJSONTyped(json, false);
}

export function MappingDeliveredMetadataToJSONTyped(value?: MappingDeliveredMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'partner': value['partner'],
        'transactionTimestamp': value['transactionTimestamp'],
        'transactionSet': value['transactionSet'],
        'transactionControlNumber': value['transactionControlNumber'],
        'functionalGroupControlNumber': value['functionalGroupControlNumber'],
        'x12Version': value['x12Version'],
        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'segmentTerminator': value['segmentTerminator'],
        'mappingSourceHash': value['mappingSourceHash'],
    };
}
