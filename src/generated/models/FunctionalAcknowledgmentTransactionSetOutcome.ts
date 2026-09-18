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
 * @interface FunctionalAcknowledgmentTransactionSetOutcome
 */
export interface FunctionalAcknowledgmentTransactionSetOutcome {
    /**
     * AK101 functional identifier code for the acknowledged group, such as `PO` or `IN`.
     * @type {string}
     * @memberof FunctionalAcknowledgmentTransactionSetOutcome
     */
    functionalIdentifierCode: string | null;
    /**
     * AK102 control number for the acknowledged functional group.
     * @type {string}
     * @memberof FunctionalAcknowledgmentTransactionSetOutcome
     */
    functionalGroupControlNumber: string | null;
    /**
     * AK201 transaction set identifier code, such as `850` or `810`.
     * @type {string}
     * @memberof FunctionalAcknowledgmentTransactionSetOutcome
     */
    transactionSetIdentifierCode: string | null;
    /**
     * AK202 transaction set control number.
     * @type {string}
     * @memberof FunctionalAcknowledgmentTransactionSetOutcome
     */
    transactionSetControlNumber: string | null;
    /**
     * Raw AK203 implementation convention reference, or `null` when the sender omitted it; it is retained without claiming implementation-guide certification.
     * @type {string}
     * @memberof FunctionalAcknowledgmentTransactionSetOutcome
     */
    implementationConventionReference: string | null;
    /**
     *
     * @type {FunctionalAcknowledgmentStatus}
     * @memberof FunctionalAcknowledgmentTransactionSetOutcome
     */
    status: FunctionalAcknowledgmentStatus;
    /**
     * Original AK501 transaction-set acknowledgment code, when available. This raw code is preserved independently from `status`: AK501 `A` normalizes to `accepted_with_errors` when its AK2 loop reports AK3/AK4 detail or non-empty AK502 and later syntax-error codes. Only a normalized `accepted` status is clean.
     *
     * @type {string}
     * @memberof FunctionalAcknowledgmentTransactionSetOutcome
     */
    acknowledgmentCode: string | null;
    /**
     * Non-empty AK502 and later transaction-set syntax error codes.
     * @type {Array<string>}
     * @memberof FunctionalAcknowledgmentTransactionSetOutcome
     */
    errorCodes: Array<string>;
}



/**
 * Check if a given object implements the FunctionalAcknowledgmentTransactionSetOutcome interface.
 */
export function instanceOfFunctionalAcknowledgmentTransactionSetOutcome(value: object): value is FunctionalAcknowledgmentTransactionSetOutcome {
    if (!('functionalIdentifierCode' in value) || value['functionalIdentifierCode'] === undefined) return false;
    if (!('functionalGroupControlNumber' in value) || value['functionalGroupControlNumber'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('transactionSetControlNumber' in value) || value['transactionSetControlNumber'] === undefined) return false;
    if (!('implementationConventionReference' in value) || value['implementationConventionReference'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('acknowledgmentCode' in value) || value['acknowledgmentCode'] === undefined) return false;
    if (!('errorCodes' in value) || value['errorCodes'] === undefined) return false;
    return true;
}

export function FunctionalAcknowledgmentTransactionSetOutcomeFromJSON(json: any): FunctionalAcknowledgmentTransactionSetOutcome {
    return FunctionalAcknowledgmentTransactionSetOutcomeFromJSONTyped(json, false);
}

export function FunctionalAcknowledgmentTransactionSetOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionalAcknowledgmentTransactionSetOutcome {
    if (json == null) {
        return json;
    }
    return {

        'functionalIdentifierCode': json['functionalIdentifierCode'],
        'functionalGroupControlNumber': json['functionalGroupControlNumber'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'transactionSetControlNumber': json['transactionSetControlNumber'],
        'implementationConventionReference': json['implementationConventionReference'],
        'status': FunctionalAcknowledgmentStatusFromJSON(json['status']),
        'acknowledgmentCode': json['acknowledgmentCode'],
        'errorCodes': json['errorCodes'],
    };
}

export function FunctionalAcknowledgmentTransactionSetOutcomeToJSON(json: any): FunctionalAcknowledgmentTransactionSetOutcome {
    return FunctionalAcknowledgmentTransactionSetOutcomeToJSONTyped(json, false);
}

export function FunctionalAcknowledgmentTransactionSetOutcomeToJSONTyped(value?: FunctionalAcknowledgmentTransactionSetOutcome | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'functionalGroupControlNumber': value['functionalGroupControlNumber'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'transactionSetControlNumber': value['transactionSetControlNumber'],
        'implementationConventionReference': value['implementationConventionReference'],
        'status': FunctionalAcknowledgmentStatusToJSON(value['status']),
        'acknowledgmentCode': value['acknowledgmentCode'],
        'errorCodes': value['errorCodes'],
    };
}
