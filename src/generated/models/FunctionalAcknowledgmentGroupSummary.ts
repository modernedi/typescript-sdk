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
 * Compact AK1/AK9 group selected for one transaction row; nested AK2 results are intentionally omitted.
 * @export
 * @interface FunctionalAcknowledgmentGroupSummary
 */
export interface FunctionalAcknowledgmentGroupSummary {
    /**
     * AK101 functional identifier code for the acknowledged group.
     * @type {string}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    functionalIdentifierCode: string | null;
    /**
     * AK102 control number for the acknowledged functional group.
     * @type {string}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    functionalGroupControlNumber: string | null;
    /**
     * Raw AK103 functional-group version, or `null` when omitted.
     * @type {string}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    functionalGroupVersion: string | null;
    /**
     *
     * @type {FunctionalAcknowledgmentStatus}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    status: FunctionalAcknowledgmentStatus;
    /**
     * Original AK901 acknowledgment code for this functional group.
     * @type {string}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    acknowledgmentCode: string | null;
    /**
     * AK902 for this functional group.
     * @type {number}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    includedTransactionSets: number | null;
    /**
     * AK903 for this functional group.
     * @type {number}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    receivedTransactionSets: number | null;
    /**
     * AK904 for this functional group; this count is distinct from an AK5 disposition.
     * @type {number}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    acceptedTransactionSets: number | null;
    /**
     * Non-empty AK905 and later functional-group syntax error codes.
     * @type {Array<string>}
     * @memberof FunctionalAcknowledgmentGroupSummary
     */
    errorCodes: Array<string>;
}



/**
 * Check if a given object implements the FunctionalAcknowledgmentGroupSummary interface.
 */
export function instanceOfFunctionalAcknowledgmentGroupSummary(value: object): value is FunctionalAcknowledgmentGroupSummary {
    if (!('functionalIdentifierCode' in value) || value['functionalIdentifierCode'] === undefined) return false;
    if (!('functionalGroupControlNumber' in value) || value['functionalGroupControlNumber'] === undefined) return false;
    if (!('functionalGroupVersion' in value) || value['functionalGroupVersion'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('acknowledgmentCode' in value) || value['acknowledgmentCode'] === undefined) return false;
    if (!('includedTransactionSets' in value) || value['includedTransactionSets'] === undefined) return false;
    if (!('receivedTransactionSets' in value) || value['receivedTransactionSets'] === undefined) return false;
    if (!('acceptedTransactionSets' in value) || value['acceptedTransactionSets'] === undefined) return false;
    if (!('errorCodes' in value) || value['errorCodes'] === undefined) return false;
    return true;
}

export function FunctionalAcknowledgmentGroupSummaryFromJSON(json: any): FunctionalAcknowledgmentGroupSummary {
    return FunctionalAcknowledgmentGroupSummaryFromJSONTyped(json, false);
}

export function FunctionalAcknowledgmentGroupSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionalAcknowledgmentGroupSummary {
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
    };
}

export function FunctionalAcknowledgmentGroupSummaryToJSON(json: any): FunctionalAcknowledgmentGroupSummary {
    return FunctionalAcknowledgmentGroupSummaryToJSONTyped(json, false);
}

export function FunctionalAcknowledgmentGroupSummaryToJSONTyped(value?: FunctionalAcknowledgmentGroupSummary | null, ignoreDiscriminator: boolean = false): any {
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
    };
}
