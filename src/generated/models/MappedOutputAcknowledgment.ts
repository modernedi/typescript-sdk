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
 * Durable receipt record proving when your integration acknowledged one mapped output version.
 * @export
 * @interface MappedOutputAcknowledgment
 */
export interface MappedOutputAcknowledgment {
    /**
     * Stable generated-output version id that was acknowledged.
     * @type {string}
     * @memberof MappedOutputAcknowledgment
     */
    id: string;
    /**
     * Original inbound AS2 message id associated with the acknowledged output.
     * @type {string}
     * @memberof MappedOutputAcknowledgment
     */
    messageId: string;
    /**
     * Unique mapped-output key within the source transaction.
     * @type {string}
     * @memberof MappedOutputAcknowledgment
     */
    mappedOutputKey: string;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof MappedOutputAcknowledgment
     */
    ackedAt?: string | null;
}

/**
 * Check if a given object implements the MappedOutputAcknowledgment interface.
 */
export function instanceOfMappedOutputAcknowledgment(value: object): value is MappedOutputAcknowledgment {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('mappedOutputKey' in value) || value['mappedOutputKey'] === undefined) return false;
    return true;
}

export function MappedOutputAcknowledgmentFromJSON(json: any): MappedOutputAcknowledgment {
    return MappedOutputAcknowledgmentFromJSONTyped(json, false);
}

export function MappedOutputAcknowledgmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputAcknowledgment {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'messageId': json['messageId'],
        'mappedOutputKey': json['mappedOutputKey'],
        'ackedAt': json['ackedAt'] === undefined ? undefined : json['ackedAt'] === null ? null : json['ackedAt'],
    };
}

export function MappedOutputAcknowledgmentToJSON(json: any): MappedOutputAcknowledgment {
    return MappedOutputAcknowledgmentToJSONTyped(json, false);
}

export function MappedOutputAcknowledgmentToJSONTyped(value?: MappedOutputAcknowledgment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'messageId': value['messageId'],
        'mappedOutputKey': value['mappedOutputKey'],
        'ackedAt': value['ackedAt'],
    };
}
