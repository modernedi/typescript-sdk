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
import type { FunctionalAcknowledgmentTransactionSetOutcome } from './FunctionalAcknowledgmentTransactionSetOutcome.js';
import {
    FunctionalAcknowledgmentTransactionSetOutcomeFromJSON,
    FunctionalAcknowledgmentTransactionSetOutcomeFromJSONTyped,
    FunctionalAcknowledgmentTransactionSetOutcomeToJSON,
    FunctionalAcknowledgmentTransactionSetOutcomeToJSONTyped,
} from './FunctionalAcknowledgmentTransactionSetOutcome.js';
import type { FunctionalAcknowledgmentStatus } from './FunctionalAcknowledgmentStatus.js';
import {
    FunctionalAcknowledgmentStatusFromJSON,
    FunctionalAcknowledgmentStatusFromJSONTyped,
    FunctionalAcknowledgmentStatusToJSON,
    FunctionalAcknowledgmentStatusToJSONTyped,
} from './FunctionalAcknowledgmentStatus.js';

/**
 *
 * @export
 * @interface FunctionalAcknowledgmentGroupOutcome
 */
export interface FunctionalAcknowledgmentGroupOutcome {
    /**
     * AK101 functional identifier code for the acknowledged group, such as `PO` or `IN`.
     * @type {string}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    functionalIdentifierCode: string | null;
    /**
     * AK102 control number for the acknowledged functional group.
     * @type {string}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    functionalGroupControlNumber: string | null;
    /**
     * Raw AK103 functional-group version, or `null` when the sender omitted it; ModernEDI does not infer an implementation guide.
     * @type {string}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    functionalGroupVersion: string | null;
    /**
     *
     * @type {FunctionalAcknowledgmentStatus}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    status: FunctionalAcknowledgmentStatus;
    /**
     * Original AK901 acknowledgment code for this functional group, when available.
     * @type {string}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    acknowledgmentCode: string | null;
    /**
     * AK902, the number of transaction sets included in this functional group.
     * @type {number}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    includedTransactionSets: number | null;
    /**
     * AK903, the number of transaction sets received in this functional group.
     * @type {number}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    receivedTransactionSets: number | null;
    /**
     * AK904, the number of received transaction sets accepted in this functional group. This count is not an AK5 transaction disposition.
     * @type {number}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    acceptedTransactionSets: number | null;
    /**
     * Non-empty AK905 and later functional-group syntax error codes.
     * @type {Array<string>}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    errorCodes: Array<string>;
    /**
     * AK2/AK5 outcomes belonging to this exact AK1/AK9 group. Empty when AK2 was omitted.
     * @type {Array<FunctionalAcknowledgmentTransactionSetOutcome>}
     * @memberof FunctionalAcknowledgmentGroupOutcome
     */
    transactionSets: Array<FunctionalAcknowledgmentTransactionSetOutcome>;
}



/**
 * Check if a given object implements the FunctionalAcknowledgmentGroupOutcome interface.
 */
export function instanceOfFunctionalAcknowledgmentGroupOutcome(value: object): value is FunctionalAcknowledgmentGroupOutcome {
    if (!('functionalIdentifierCode' in value) || value['functionalIdentifierCode'] === undefined) return false;
    if (!('functionalGroupControlNumber' in value) || value['functionalGroupControlNumber'] === undefined) return false;
    if (!('functionalGroupVersion' in value) || value['functionalGroupVersion'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('acknowledgmentCode' in value) || value['acknowledgmentCode'] === undefined) return false;
    if (!('includedTransactionSets' in value) || value['includedTransactionSets'] === undefined) return false;
    if (!('receivedTransactionSets' in value) || value['receivedTransactionSets'] === undefined) return false;
    if (!('acceptedTransactionSets' in value) || value['acceptedTransactionSets'] === undefined) return false;
    if (!('errorCodes' in value) || value['errorCodes'] === undefined) return false;
    if (!('transactionSets' in value) || value['transactionSets'] === undefined) return false;
    return true;
}

export function FunctionalAcknowledgmentGroupOutcomeFromJSON(json: any): FunctionalAcknowledgmentGroupOutcome {
    return FunctionalAcknowledgmentGroupOutcomeFromJSONTyped(json, false);
}

export function FunctionalAcknowledgmentGroupOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionalAcknowledgmentGroupOutcome {
    if (json == null) {
        return json;
    }
    return {

        'functionalIdentifierCode': json['functionalIdentifierCode'],
        'functionalGroupControlNumber': json['functionalGroupControlNumber'],
        'functionalGroupVersion': json['functionalGroupVersion'],
        'status': FunctionalAcknowledgmentStatusFromJSON(json['status']),
        'acknowledgmentCode': json['acknowledgmentCode'],
        'includedTransactionSets': json['includedTransactionSets'],
        'receivedTransactionSets': json['receivedTransactionSets'],
        'acceptedTransactionSets': json['acceptedTransactionSets'],
        'errorCodes': json['errorCodes'],
        'transactionSets': ((json['transactionSets'] as Array<any>).map(FunctionalAcknowledgmentTransactionSetOutcomeFromJSON)),
    };
}

export function FunctionalAcknowledgmentGroupOutcomeToJSON(json: any): FunctionalAcknowledgmentGroupOutcome {
    return FunctionalAcknowledgmentGroupOutcomeToJSONTyped(json, false);
}

export function FunctionalAcknowledgmentGroupOutcomeToJSONTyped(value?: FunctionalAcknowledgmentGroupOutcome | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'functionalGroupControlNumber': value['functionalGroupControlNumber'],
        'functionalGroupVersion': value['functionalGroupVersion'],
        'status': FunctionalAcknowledgmentStatusToJSON(value['status']),
        'acknowledgmentCode': value['acknowledgmentCode'],
        'includedTransactionSets': value['includedTransactionSets'],
        'receivedTransactionSets': value['receivedTransactionSets'],
        'acceptedTransactionSets': value['acceptedTransactionSets'],
        'errorCodes': value['errorCodes'],
        'transactionSets': ((value['transactionSets'] as Array<any>).map(FunctionalAcknowledgmentTransactionSetOutcomeToJSON)),
    };
}
