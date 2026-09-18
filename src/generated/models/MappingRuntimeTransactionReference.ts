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
 *
 * @export
 * @interface MappingRuntimeTransactionReference
 */
export interface MappingRuntimeTransactionReference {
    /**
     * AS2 Message-Id of the retained transaction.
     * @type {string}
     * @memberof MappingRuntimeTransactionReference
     */
    messageId: string;
    /**
     * Transaction key, normally `GS06#ST02`.
     * @type {string}
     * @memberof MappingRuntimeTransactionReference
     */
    transactionKey: string;
}

/**
 * Check if a given object implements the MappingRuntimeTransactionReference interface.
 */
export function instanceOfMappingRuntimeTransactionReference(value: object): value is MappingRuntimeTransactionReference {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    return true;
}

export function MappingRuntimeTransactionReferenceFromJSON(json: any): MappingRuntimeTransactionReference {
    return MappingRuntimeTransactionReferenceFromJSONTyped(json, false);
}

export function MappingRuntimeTransactionReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingRuntimeTransactionReference {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
    };
}

export function MappingRuntimeTransactionReferenceToJSON(json: any): MappingRuntimeTransactionReference {
    return MappingRuntimeTransactionReferenceToJSONTyped(json, false);
}

export function MappingRuntimeTransactionReferenceToJSONTyped(value?: MappingRuntimeTransactionReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
    };
}
