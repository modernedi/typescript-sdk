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
import type { TransactionEdiMetadata } from './TransactionEdiMetadata.js';
import {
    TransactionEdiMetadataFromJSON,
    TransactionEdiMetadataFromJSONTyped,
    TransactionEdiMetadataToJSON,
    TransactionEdiMetadataToJSONTyped,
} from './TransactionEdiMetadata.js';
import type { MappingPurpose } from './MappingPurpose.js';
import {
    MappingPurposeFromJSON,
    MappingPurposeFromJSONTyped,
    MappingPurposeToJSON,
    MappingPurposeToJSONTyped,
} from './MappingPurpose.js';
import type { TransactionSet } from './TransactionSet.js';
import {
    TransactionSetFromJSON,
    TransactionSetFromJSONTyped,
    TransactionSetToJSON,
    TransactionSetToJSONTyped,
} from './TransactionSet.js';
import type { TransactionControlNumbers } from './TransactionControlNumbers.js';
import {
    TransactionControlNumbersFromJSON,
    TransactionControlNumbersFromJSONTyped,
    TransactionControlNumbersToJSON,
    TransactionControlNumbersToJSONTyped,
} from './TransactionControlNumbers.js';
import type { MappedOutputMapping } from './MappedOutputMapping.js';
import {
    MappedOutputMappingFromJSON,
    MappedOutputMappingFromJSONTyped,
    MappedOutputMappingToJSON,
    MappedOutputMappingToJSONTyped,
} from './MappedOutputMapping.js';
import type { TransactionEnvironmentValue } from './TransactionEnvironmentValue.js';
import {
    TransactionEnvironmentValueFromJSON,
    TransactionEnvironmentValueFromJSONTyped,
    TransactionEnvironmentValueToJSON,
    TransactionEnvironmentValueToJSONTyped,
} from './TransactionEnvironmentValue.js';
import type { TransactionBusinessKey } from './TransactionBusinessKey.js';
import {
    TransactionBusinessKeyFromJSON,
    TransactionBusinessKeyFromJSONTyped,
    TransactionBusinessKeyToJSON,
    TransactionBusinessKeyToJSONTyped,
} from './TransactionBusinessKey.js';

/**
 * One mapped application document leased from ModernEDI's managed output queue.
 * @export
 * @interface MappedOutputMessage
 */
export interface MappedOutputMessage {
    /**
     * Stable id for this generated output version, used when marking the message received. A later durable regeneration can produce a new id for the same `messageId` and `mappedOutputKey`.
     *
     * @type {string}
     * @memberof MappedOutputMessage
     */
    id: string;
    /**
     * Token from the latest poll response, required when marking the message received.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    receiptHandle: string;
    /**
     * Number of pull or webhook delivery leases issued for this generated output version.
     * @type {number}
     * @memberof MappedOutputMessage
     */
    deliveryCount: number;
    /**
     * UTC instant when ModernEDI may return this message again if it has not been marked received.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    leasedUntil?: string | null;
    /**
     * Original inbound AS2 message id. Use this value as `originalMessageId` when sending a reply with `/v1/as2/reply`.
     *
     * @type {string}
     * @memberof MappedOutputMessage
     */
    messageId: string;
    /**
     * Transaction identifier within the AS2 message, usually `GS06#ST02`.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    transactionKey: string;
    /**
     * Partner name. Omitted when `deliveredMetadata.partner` is `false`.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    partnerName?: string;
    /**
     *
     * @type {TransactionEnvironmentValue}
     * @memberof MappedOutputMessage
     */
    environment: TransactionEnvironmentValue;
    /**
     * Persisted tenant-scoped partner id. Omitted when `deliveredMetadata.partner` is `false`.
     * @type {number}
     * @memberof MappedOutputMessage
     */
    partnerId?: number;
    /**
     * Source transaction timestamp. Omitted when `deliveredMetadata.transactionTimestamp` is `false`.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    transactionTimestamp?: string;
    /**
     * Transaction-set code and description. Omitted when `deliveredMetadata.transactionSet` is `false`.
     * @type {TransactionSet}
     * @memberof MappedOutputMessage
     */
    transactionSet?: TransactionSet;
    /**
     * X12 transaction and functional-group control numbers. Individual properties are omitted according to `deliveredMetadata.transactionControlNumber` and `deliveredMetadata.functionalGroupControlNumber`; the object is omitted when both are `false`.
     *
     * @type {TransactionControlNumbers}
     * @memberof MappedOutputMessage
     */
    controlNumbers?: TransactionControlNumbers;
    /**
     * Optional X12 context controlled by `deliveredMetadata.transactionSet`, `x12Version`, `functionalIdentifierCode`, and `segmentTerminator`. The object is omitted when all four are `false`.
     *
     * @type {TransactionEdiMetadata}
     * @memberof MappedOutputMessage
     */
    edi?: TransactionEdiMetadata;
    /**
     *
     * @type {MappedOutputMapping}
     * @memberof MappedOutputMessage
     */
    mapping?: MappedOutputMapping;
    /**
     * Unique mapped-output key inside the transaction.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    mappedOutputKey: string;
    /**
     * Zero-based output order when one source transaction produces multiple mapped documents.
     * @type {number}
     * @memberof MappedOutputMessage
     */
    sequenceNumber: number;
    /**
     *
     * @type {MappingPurpose}
     * @memberof MappedOutputMessage
     */
    purpose: MappingPurpose;
    /**
     * Media type for `payload`, such as `application/json` or `application/xml`.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    contentType?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    createdAt?: string | null;
    /**
     * Map-derived business identifier for customer reconciliation, or `null` when the map did not produce one.
     * @type {TransactionBusinessKey}
     * @memberof MappedOutputMessage
     */
    businessKey?: TransactionBusinessKey | null;
    /**
     * Runtime routing metadata recorded with the generated output, such as `{"destination":"managedQueue"}`. This is not the customer-selectable context; use the mapping's `deliveredMetadata` flags for that.
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof MappedOutputMessage
     */
    extraFields?: { [key: string]: string | undefined; };
    /**
     * Mapped document body. Parse according to `contentType`.
     * @type {string}
     * @memberof MappedOutputMessage
     */
    payload?: string | null;
}



/**
 * Check if a given object implements the MappedOutputMessage interface.
 */
export function instanceOfMappedOutputMessage(value: object): value is MappedOutputMessage {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('receiptHandle' in value) || value['receiptHandle'] === undefined) return false;
    if (!('deliveryCount' in value) || value['deliveryCount'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('mappedOutputKey' in value) || value['mappedOutputKey'] === undefined) return false;
    if (!('sequenceNumber' in value) || value['sequenceNumber'] === undefined) return false;
    if (!('purpose' in value) || value['purpose'] === undefined) return false;
    return true;
}

export function MappedOutputMessageFromJSON(json: any): MappedOutputMessage {
    return MappedOutputMessageFromJSONTyped(json, false);
}

export function MappedOutputMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputMessage {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'receiptHandle': json['receiptHandle'],
        'deliveryCount': json['deliveryCount'],
        'leasedUntil': json['leasedUntil'] === undefined ? undefined : json['leasedUntil'] === null ? null : json['leasedUntil'],
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'partnerName': json['partnerName'] == null ? undefined : json['partnerName'],
        'environment': TransactionEnvironmentValueFromJSON(json['environment']),
        'partnerId': json['partnerId'] == null ? undefined : json['partnerId'],
        'transactionTimestamp': json['transactionTimestamp'] == null ? undefined : json['transactionTimestamp'],
        'transactionSet': json['transactionSet'] == null ? undefined : TransactionSetFromJSON(json['transactionSet']),
        'controlNumbers': json['controlNumbers'] == null ? undefined : TransactionControlNumbersFromJSON(json['controlNumbers']),
        'edi': json['edi'] == null ? undefined : TransactionEdiMetadataFromJSON(json['edi']),
        'mapping': json['mapping'] == null ? undefined : MappedOutputMappingFromJSON(json['mapping']),
        'mappedOutputKey': json['mappedOutputKey'],
        'sequenceNumber': json['sequenceNumber'],
        'purpose': MappingPurposeFromJSON(json['purpose']),
        'contentType': json['contentType'] === undefined ? undefined : json['contentType'] === null ? null : json['contentType'],
        'createdAt': json['createdAt'] === undefined ? undefined : json['createdAt'] === null ? null : json['createdAt'],
        'businessKey': json['businessKey'] === undefined ? undefined : json['businessKey'] === null ? null : TransactionBusinessKeyFromJSON(json['businessKey']),
        'extraFields': json['extraFields'] == null ? undefined : json['extraFields'],
        'payload': json['payload'] === undefined ? undefined : json['payload'] === null ? null : json['payload'],
    };
}

export function MappedOutputMessageToJSON(json: any): MappedOutputMessage {
    return MappedOutputMessageToJSONTyped(json, false);
}

export function MappedOutputMessageToJSONTyped(value?: MappedOutputMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'receiptHandle': value['receiptHandle'],
        'deliveryCount': value['deliveryCount'],
        'leasedUntil': value['leasedUntil'],
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'partnerName': value['partnerName'],
        'environment': TransactionEnvironmentValueToJSON(value['environment']),
        'partnerId': value['partnerId'],
        'transactionTimestamp': value['transactionTimestamp'],
        'transactionSet': TransactionSetToJSON(value['transactionSet']),
        'controlNumbers': TransactionControlNumbersToJSON(value['controlNumbers']),
        'edi': TransactionEdiMetadataToJSON(value['edi']),
        'mapping': MappedOutputMappingToJSON(value['mapping']),
        'mappedOutputKey': value['mappedOutputKey'],
        'sequenceNumber': value['sequenceNumber'],
        'purpose': MappingPurposeToJSON(value['purpose']),
        'contentType': value['contentType'],
        'createdAt': value['createdAt'],
        'businessKey': TransactionBusinessKeyToJSON(value['businessKey']),
        'extraFields': value['extraFields'],
        'payload': value['payload'],
    };
}
