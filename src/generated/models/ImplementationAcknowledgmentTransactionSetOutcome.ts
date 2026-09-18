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

/**
 *
 * @export
 * @interface ImplementationAcknowledgmentTransactionSetOutcome
 */
export interface ImplementationAcknowledgmentTransactionSetOutcome {
    /**
     * AK101 functional identifier code for the acknowledged group, such as `PO` or `IN`.
     * @type {string}
     * @memberof ImplementationAcknowledgmentTransactionSetOutcome
     */
    functionalIdentifierCode: string | null;
    /**
     * AK102 control number for the acknowledged functional group.
     * @type {string}
     * @memberof ImplementationAcknowledgmentTransactionSetOutcome
     */
    functionalGroupControlNumber: string | null;
    /**
     * AK201 transaction-set identifier code, such as `850` or `810`.
     * @type {string}
     * @memberof ImplementationAcknowledgmentTransactionSetOutcome
     */
    transactionSetIdentifierCode: string | null;
    /**
     * AK202 transaction-set control number.
     * @type {string}
     * @memberof ImplementationAcknowledgmentTransactionSetOutcome
     */
    transactionSetControlNumber: string | null;
    /**
     * Raw AK203 implementation-convention reference echoed from the acknowledged ST03, or `null` when absent.
     * @type {string}
     * @memberof ImplementationAcknowledgmentTransactionSetOutcome
     */
    implementationConventionReference: string | null;
    /**
     *
     * @type {ImplementationAcknowledgmentStatus}
     * @memberof ImplementationAcknowledgmentTransactionSetOutcome
     */
    status: ImplementationAcknowledgmentStatus;
    /**
     * Original IK501 transaction-set acknowledgment code, when available. This raw code is preserved separately from normalized `status`; bare IK501 `A` is inconsistent and normalizes to `unknown` when its AK2 loop also reports IK3/IK4 error detail.
     *
     * @type {string}
     * @memberof ImplementationAcknowledgmentTransactionSetOutcome
     */
    acknowledgmentCode: string | null;
    /**
     * Non-empty IK502 and later transaction-set syntax error codes.
     * @type {Array<string>}
     * @memberof ImplementationAcknowledgmentTransactionSetOutcome
     */
    errorCodes: Array<string>;
}



/**
 * Check if a given object implements the ImplementationAcknowledgmentTransactionSetOutcome interface.
 */
export function instanceOfImplementationAcknowledgmentTransactionSetOutcome(value: object): value is ImplementationAcknowledgmentTransactionSetOutcome {
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

export function ImplementationAcknowledgmentTransactionSetOutcomeFromJSON(json: any): ImplementationAcknowledgmentTransactionSetOutcome {
    return ImplementationAcknowledgmentTransactionSetOutcomeFromJSONTyped(json, false);
}

export function ImplementationAcknowledgmentTransactionSetOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentTransactionSetOutcome {
    if (json == null) {
        return json;
    }
    return {

        'functionalIdentifierCode': json['functionalIdentifierCode'],
        'functionalGroupControlNumber': json['functionalGroupControlNumber'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'transactionSetControlNumber': json['transactionSetControlNumber'],
        'implementationConventionReference': json['implementationConventionReference'],
        'status': ImplementationAcknowledgmentStatusFromJSON(json['status']),
        'acknowledgmentCode': json['acknowledgmentCode'],
        'errorCodes': json['errorCodes'],
    };
}

export function ImplementationAcknowledgmentTransactionSetOutcomeToJSON(json: any): ImplementationAcknowledgmentTransactionSetOutcome {
    return ImplementationAcknowledgmentTransactionSetOutcomeToJSONTyped(json, false);
}

export function ImplementationAcknowledgmentTransactionSetOutcomeToJSONTyped(value?: ImplementationAcknowledgmentTransactionSetOutcome | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'functionalIdentifierCode': value['functionalIdentifierCode'],
        'functionalGroupControlNumber': value['functionalGroupControlNumber'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'transactionSetControlNumber': value['transactionSetControlNumber'],
        'implementationConventionReference': value['implementationConventionReference'],
        'status': ImplementationAcknowledgmentStatusToJSON(value['status']),
        'acknowledgmentCode': value['acknowledgmentCode'],
        'errorCodes': value['errorCodes'],
    };
}
