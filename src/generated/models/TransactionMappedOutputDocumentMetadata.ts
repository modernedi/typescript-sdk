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
import type { TransactionMappedOutputMapping } from './TransactionMappedOutputMapping.js';
import {
    TransactionMappedOutputMappingFromJSON,
    TransactionMappedOutputMappingFromJSONTyped,
    TransactionMappedOutputMappingToJSON,
    TransactionMappedOutputMappingToJSONTyped,
} from './TransactionMappedOutputMapping.js';
import type { MappingPurpose } from './MappingPurpose.js';
import {
    MappingPurposeFromJSON,
    MappingPurposeFromJSONTyped,
    MappingPurposeToJSON,
    MappingPurposeToJSONTyped,
} from './MappingPurpose.js';
import type { TransactionBusinessKey } from './TransactionBusinessKey.js';
import {
    TransactionBusinessKeyFromJSON,
    TransactionBusinessKeyFromJSONTyped,
    TransactionBusinessKeyToJSON,
    TransactionBusinessKeyToJSONTyped,
} from './TransactionBusinessKey.js';

/**
 * The persisted mapped-output identity and map provenance. It omits both the body and managed-queue delivery state; fetch this document for its content and read `transaction.mappedOutputs[]` or mapped-output timeline events for current custody.
 *
 * @export
 * @interface TransactionMappedOutputDocumentMetadata
 */
export interface TransactionMappedOutputDocumentMetadata {
    /**
     * Artifact identifier within the transaction response, such as `mapped-output-1`. This is not the managed-queue id and cannot be used with `/v1/mapped-outputs/{id}/ack`. Stored transaction details expose the queue correlation id separately as `delivery.outputId`.
     *
     * @type {string}
     * @memberof TransactionMappedOutputDocumentMetadata
     */
    id: string;
    /**
     * One-based display order of this output within the transaction response.
     * @type {number}
     * @memberof TransactionMappedOutputDocumentMetadata
     */
    sequenceNumber: number;
    /**
     *
     * @type {MappingPurpose}
     * @memberof TransactionMappedOutputDocumentMetadata
     */
    purpose: MappingPurpose;
    /**
     * Media type of the corresponding mapped-output document body, or `null` for historical artifacts without recorded content type.
     * @type {string}
     * @memberof TransactionMappedOutputDocumentMetadata
     */
    contentType: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMappedOutputDocumentMetadata
     */
    createdAt: string | null;
    /**
     * Map-derived reconciliation identifier, or `null` when the map did not produce one.
     * @type {TransactionBusinessKey}
     * @memberof TransactionMappedOutputDocumentMetadata
     */
    businessKey: TransactionBusinessKey | null;
    /**
     *
     * @type {TransactionMappedOutputMapping}
     * @memberof TransactionMappedOutputDocumentMetadata
     */
    mapping: TransactionMappedOutputMapping;
    /**
     * Runtime routing metadata captured with the output; this is not the map's selectable delivered context.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof TransactionMappedOutputDocumentMetadata
     */
    extraFields: { [key: string]: string | undefined; };
}



/**
 * Check if a given object implements the TransactionMappedOutputDocumentMetadata interface.
 */
export function instanceOfTransactionMappedOutputDocumentMetadata(value: object): value is TransactionMappedOutputDocumentMetadata {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('sequenceNumber' in value) || value['sequenceNumber'] === undefined) return false;
    if (!('purpose' in value) || value['purpose'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('businessKey' in value) || value['businessKey'] === undefined) return false;
    if (!('mapping' in value) || value['mapping'] === undefined) return false;
    if (!('extraFields' in value) || value['extraFields'] === undefined) return false;
    return true;
}

export function TransactionMappedOutputDocumentMetadataFromJSON(json: any): TransactionMappedOutputDocumentMetadata {
    return TransactionMappedOutputDocumentMetadataFromJSONTyped(json, false);
}

export function TransactionMappedOutputDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappedOutputDocumentMetadata {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'sequenceNumber': json['sequenceNumber'],
        'purpose': MappingPurposeFromJSON(json['purpose']),
        'contentType': json['contentType'],
        'createdAt': json['createdAt'],
        'businessKey': TransactionBusinessKeyFromJSON(json['businessKey']),
        'mapping': TransactionMappedOutputMappingFromJSON(json['mapping']),
        'extraFields': json['extraFields'],
    };
}

export function TransactionMappedOutputDocumentMetadataToJSON(json: any): TransactionMappedOutputDocumentMetadata {
    return TransactionMappedOutputDocumentMetadataToJSONTyped(json, false);
}

export function TransactionMappedOutputDocumentMetadataToJSONTyped(value?: TransactionMappedOutputDocumentMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'sequenceNumber': value['sequenceNumber'],
        'purpose': MappingPurposeToJSON(value['purpose']),
        'contentType': value['contentType'],
        'createdAt': value['createdAt'],
        'businessKey': TransactionBusinessKeyToJSON(value['businessKey']),
        'mapping': TransactionMappedOutputMappingToJSON(value['mapping']),
        'extraFields': value['extraFields'],
    };
}
