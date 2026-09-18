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
 * @interface MappedOutputBulkAckRequestAcksInner
 */
export interface MappedOutputBulkAckRequestAcksInner {
    /**
     * Mapped-output id returned by the poll response.
     * @type {string}
     * @memberof MappedOutputBulkAckRequestAcksInner
     */
    id: string;
    /**
     * Receipt handle from the same poll response.
     * @type {string}
     * @memberof MappedOutputBulkAckRequestAcksInner
     */
    receiptHandle: string;
}

/**
 * Check if a given object implements the MappedOutputBulkAckRequestAcksInner interface.
 */
export function instanceOfMappedOutputBulkAckRequestAcksInner(value: object): value is MappedOutputBulkAckRequestAcksInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('receiptHandle' in value) || value['receiptHandle'] === undefined) return false;
    return true;
}

export function MappedOutputBulkAckRequestAcksInnerFromJSON(json: any): MappedOutputBulkAckRequestAcksInner {
    return MappedOutputBulkAckRequestAcksInnerFromJSONTyped(json, false);
}

export function MappedOutputBulkAckRequestAcksInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedOutputBulkAckRequestAcksInner {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'receiptHandle': json['receiptHandle'],
    };
}

export function MappedOutputBulkAckRequestAcksInnerToJSON(json: any): MappedOutputBulkAckRequestAcksInner {
    return MappedOutputBulkAckRequestAcksInnerToJSONTyped(json, false);
}

export function MappedOutputBulkAckRequestAcksInnerToJSONTyped(value?: MappedOutputBulkAckRequestAcksInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'receiptHandle': value['receiptHandle'],
    };
}
