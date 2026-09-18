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
import type { ImplementationAcknowledgmentStatus } from './ImplementationAcknowledgmentStatus.js';
import {
    ImplementationAcknowledgmentStatusFromJSON,
    ImplementationAcknowledgmentStatusFromJSONTyped,
    ImplementationAcknowledgmentStatusToJSON,
    ImplementationAcknowledgmentStatusToJSONTyped,
} from './ImplementationAcknowledgmentStatus.js';
import type { ImplementationAcknowledgmentTransactionSetOutcome } from './ImplementationAcknowledgmentTransactionSetOutcome.js';
import {
    ImplementationAcknowledgmentTransactionSetOutcomeFromJSON,
    ImplementationAcknowledgmentTransactionSetOutcomeFromJSONTyped,
    ImplementationAcknowledgmentTransactionSetOutcomeToJSON,
    ImplementationAcknowledgmentTransactionSetOutcomeToJSONTyped,
} from './ImplementationAcknowledgmentTransactionSetOutcome.js';

/**
 *
 * @export
 * @interface ImplementationAcknowledgmentGroupOutcome
 */
export interface ImplementationAcknowledgmentGroupOutcome {
    /**
     * AK101 functional identifier code for the acknowledged group, such as `PO` or `IN`.
     * @type {string}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    functionalIdentifierCode: string | null;
    /**
     * AK102 control number for the acknowledged functional group.
     * @type {string}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    functionalGroupControlNumber: string | null;
    /**
     * AK103 version or implementation-convention reference echoed from the acknowledged group.
     * @type {string}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    functionalGroupVersion: string | null;
    /**
     *
     * @type {ImplementationAcknowledgmentStatus}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    status: ImplementationAcknowledgmentStatus;
    /**
     * Original AK901 acknowledgment code for this implementation group, when available.
     * @type {string}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    acknowledgmentCode: string | null;
    /**
     * AK902, the number of transaction sets included in this functional group.
     * @type {number}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    includedTransactionSets: number | null;
    /**
     * AK903, the number of transaction sets received in this functional group.
     * @type {number}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    receivedTransactionSets: number | null;
    /**
     * AK904, the number of received transaction sets accepted in this functional group.
     * @type {number}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    acceptedTransactionSets: number | null;
    /**
     * Non-empty AK905 and later implementation-group syntax error codes.
     * @type {Array<string>}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    errorCodes: Array<string>;
    /**
     * AK2/IK5 results belonging to this AK1/AK9 group.
     * @type {Array<ImplementationAcknowledgmentTransactionSetOutcome>}
     * @memberof ImplementationAcknowledgmentGroupOutcome
     */
    transactionSets: Array<ImplementationAcknowledgmentTransactionSetOutcome>;
}



/**
 * Check if a given object implements the ImplementationAcknowledgmentGroupOutcome interface.
 */
export function instanceOfImplementationAcknowledgmentGroupOutcome(value: object): value is ImplementationAcknowledgmentGroupOutcome {
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

export function ImplementationAcknowledgmentGroupOutcomeFromJSON(json: any): ImplementationAcknowledgmentGroupOutcome {
    return ImplementationAcknowledgmentGroupOutcomeFromJSONTyped(json, false);
}

export function ImplementationAcknowledgmentGroupOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentGroupOutcome {
    if (json == null) {
        return json;
    }
    return {

        'functionalIdentifierCode': json['functionalIdentifierCode'],
        'functionalGroupControlNumber': json['functionalGroupControlNumber'],
        'functionalGroupVersion': json['functionalGroupVersion'],
        'status': ImplementationAcknowledgmentStatusFromJSON(json['status']),
        'acknowledgmentCode': json['acknowledgmentCode'],
        'includedTransactionSets': json['includedTransactionSets'],
        'receivedTransactionSets': json['receivedTransactionSets'],
        'acceptedTransactionSets': json['acceptedTransactionSets'],
        'errorCodes': json['errorCodes'],
        'transactionSets': ((json['transactionSets'] as Array<any>).map(ImplementationAcknowledgmentTransactionSetOutcomeFromJSON)),
    };
}

export function ImplementationAcknowledgmentGroupOutcomeToJSON(json: any): ImplementationAcknowledgmentGroupOutcome {
    return ImplementationAcknowledgmentGroupOutcomeToJSONTyped(json, false);
}

export function ImplementationAcknowledgmentGroupOutcomeToJSONTyped(value?: ImplementationAcknowledgmentGroupOutcome | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'functionalGroupControlNumber': value['functionalGroupControlNumber'],
        'functionalGroupVersion': value['functionalGroupVersion'],
        'status': ImplementationAcknowledgmentStatusToJSON(value['status']),
        'acknowledgmentCode': value['acknowledgmentCode'],
        'includedTransactionSets': value['includedTransactionSets'],
        'receivedTransactionSets': value['receivedTransactionSets'],
        'acceptedTransactionSets': value['acceptedTransactionSets'],
        'errorCodes': value['errorCodes'],
        'transactionSets': ((value['transactionSets'] as Array<any>).map(ImplementationAcknowledgmentTransactionSetOutcomeToJSON)),
    };
}
