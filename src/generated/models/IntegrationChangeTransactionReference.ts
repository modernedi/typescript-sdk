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
 * @interface IntegrationChangeTransactionReference
 */
export interface IntegrationChangeTransactionReference {
    /**
     * AS2 Message-Id of the transaction whose public state changed.
     * @type {string}
     * @memberof IntegrationChangeTransactionReference
     */
    messageId: string;
    /**
     * Transaction-local `GS06#ST02` key identifying the changed row.
     * @type {string}
     * @memberof IntegrationChangeTransactionReference
     */
    transactionKey: string;
    /**
     * Source inbound message for an outbound reply, or `null`.
     * @type {string}
     * @memberof IntegrationChangeTransactionReference
     */
    replyToMessageId: string | null;
}

/**
 * Check if a given object implements the IntegrationChangeTransactionReference interface.
 */
export function instanceOfIntegrationChangeTransactionReference(value: object): value is IntegrationChangeTransactionReference {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    if (!('replyToMessageId' in value) || value['replyToMessageId'] === undefined) return false;
    return true;
}

export function IntegrationChangeTransactionReferenceFromJSON(json: any): IntegrationChangeTransactionReference {
    return IntegrationChangeTransactionReferenceFromJSONTyped(json, false);
}

export function IntegrationChangeTransactionReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationChangeTransactionReference {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
        'replyToMessageId': json['replyToMessageId'],
    };
}

export function IntegrationChangeTransactionReferenceToJSON(json: any): IntegrationChangeTransactionReference {
    return IntegrationChangeTransactionReferenceToJSONTyped(json, false);
}

export function IntegrationChangeTransactionReferenceToJSONTyped(value?: IntegrationChangeTransactionReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
        'replyToMessageId': value['replyToMessageId'],
    };
}
