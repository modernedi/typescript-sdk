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
import type { TransactionMappedOutputDelivery } from './TransactionMappedOutputDelivery.js';
import {
    TransactionMappedOutputDeliveryFromJSON,
    TransactionMappedOutputDeliveryFromJSONTyped,
    TransactionMappedOutputDeliveryToJSON,
    TransactionMappedOutputDeliveryToJSONTyped,
} from './TransactionMappedOutputDelivery.js';
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
 * Metadata for a mapped output persisted on a transaction detail. Unlike a response-only replay output, it omits the body and always includes delivery applicability and current handoff state. Fetch its indexed document to obtain the payload.
 *
 * @export
 * @interface StoredTransactionMappedOutput
 */
export interface StoredTransactionMappedOutput {
    /**
     * Artifact identifier within the transaction response, such as `mapped-output-1`. This is not the managed-queue id and cannot be used with `/v1/mapped-outputs/{id}/ack`. Stored transaction details expose the queue correlation id separately as `delivery.outputId`.
     *
     * @type {string}
     * @memberof StoredTransactionMappedOutput
     */
    id: string;
    /**
     * One-based display order of this output within the transaction response.
     * @type {number}
     * @memberof StoredTransactionMappedOutput
     */
    sequenceNumber: number;
    /**
     *
     * @type {MappingPurpose}
     * @memberof StoredTransactionMappedOutput
     */
    purpose: MappingPurpose;
    /**
     * Media type of the corresponding mapped-output document body, or `null` for historical artifacts without recorded content type.
     * @type {string}
     * @memberof StoredTransactionMappedOutput
     */
    contentType?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof StoredTransactionMappedOutput
     */
    createdAt?: string | null;
    /**
     * Map-derived reconciliation identifier, or `null` when the map did not produce one.
     * @type {TransactionBusinessKey}
     * @memberof StoredTransactionMappedOutput
     */
    businessKey?: TransactionBusinessKey | null;
    /**
     *
     * @type {TransactionMappedOutputMapping}
     * @memberof StoredTransactionMappedOutput
     */
    mapping?: TransactionMappedOutputMapping;
    /**
     * Runtime routing metadata captured with the output; this is not the map's selectable delivered context.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof StoredTransactionMappedOutput
     */
    extraFields?: { [key: string]: string | undefined; };
    /**
     *
     * @type {TransactionMappedOutputDelivery}
     * @memberof StoredTransactionMappedOutput
     */
    delivery: TransactionMappedOutputDelivery;
}



/**
 * Check if a given object implements the StoredTransactionMappedOutput interface.
 */
export function instanceOfStoredTransactionMappedOutput(value: object): value is StoredTransactionMappedOutput {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('sequenceNumber' in value) || value['sequenceNumber'] === undefined) return false;
    if (!('purpose' in value) || value['purpose'] === undefined) return false;
    if (!('delivery' in value) || value['delivery'] === undefined) return false;
    return true;
}

export function StoredTransactionMappedOutputFromJSON(json: any): StoredTransactionMappedOutput {
    return StoredTransactionMappedOutputFromJSONTyped(json, false);
}

export function StoredTransactionMappedOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoredTransactionMappedOutput {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'sequenceNumber': json['sequenceNumber'],
        'purpose': MappingPurposeFromJSON(json['purpose']),
        'contentType': json['contentType'] === undefined ? undefined : json['contentType'] === null ? null : json['contentType'],
        'createdAt': json['createdAt'] === undefined ? undefined : json['createdAt'] === null ? null : json['createdAt'],
        'businessKey': json['businessKey'] === undefined ? undefined : json['businessKey'] === null ? null : TransactionBusinessKeyFromJSON(json['businessKey']),
        'mapping': json['mapping'] == null ? undefined : TransactionMappedOutputMappingFromJSON(json['mapping']),
        'extraFields': json['extraFields'] == null ? undefined : json['extraFields'],
        'delivery': TransactionMappedOutputDeliveryFromJSON(json['delivery']),
    };
}

export function StoredTransactionMappedOutputToJSON(json: any): StoredTransactionMappedOutput {
    return StoredTransactionMappedOutputToJSONTyped(json, false);
}

export function StoredTransactionMappedOutputToJSONTyped(value?: StoredTransactionMappedOutput | null, ignoreDiscriminator: boolean = false): any {
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
        'delivery': TransactionMappedOutputDeliveryToJSON(value['delivery']),
    };
}
