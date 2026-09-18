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
import type { ImplementationAcknowledgmentGroupOutcome } from './ImplementationAcknowledgmentGroupOutcome.js';
import {
    ImplementationAcknowledgmentGroupOutcomeFromJSON,
    ImplementationAcknowledgmentGroupOutcomeFromJSONTyped,
    ImplementationAcknowledgmentGroupOutcomeToJSON,
    ImplementationAcknowledgmentGroupOutcomeToJSONTyped,
} from './ImplementationAcknowledgmentGroupOutcome.js';
import type { ImplementationAcknowledgmentTransactionSetOutcome } from './ImplementationAcknowledgmentTransactionSetOutcome.js';
import {
    ImplementationAcknowledgmentTransactionSetOutcomeFromJSON,
    ImplementationAcknowledgmentTransactionSetOutcomeFromJSONTyped,
    ImplementationAcknowledgmentTransactionSetOutcomeToJSON,
    ImplementationAcknowledgmentTransactionSetOutcomeToJSONTyped,
} from './ImplementationAcknowledgmentTransactionSetOutcome.js';

/**
 * Normalized X12 999 result. The aggregate status does not collapse the distinct AK1/AK9 group results or AK2/IK5 transaction-set results. `groups` preserves each AK101/AK102/AK103 identity and its AK9 rollup; `transactionSets` provides the same IK5 results as one attributable flat list. A 999 reports X12 syntax and relational validation. It does not indicate semantic or business acceptance, and it is not HIPAA implementation-guide certification. Only `accepted` is a clean automation completion.
 *
 * @export
 * @interface ImplementationAcknowledgmentOutcome
 */
export interface ImplementationAcknowledgmentOutcome {
    /**
     *
     * @type {ImplementationAcknowledgmentStatus}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    status: ImplementationAcknowledgmentStatus;
    /**
     * Aggregate acknowledgment code when one value represents the whole 999, or `null` for mixed or unavailable group results.
     * @type {string}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    acknowledgmentCode: string | null;
    /**
     * Human-readable aggregate result suitable for a transaction timeline or status panel.
     * @type {string}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    summary: string;
    /**
     * True when the 999 structure and required AK9 rollups were parsed successfully.
     * @type {boolean}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    parsed: boolean;
    /**
     * Machine-readable reason when `status` is `unknown`.
     * @type {ImplementationAcknowledgmentOutcomeUnknownReasonEnum}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    unknownReason: ImplementationAcknowledgmentOutcomeUnknownReasonEnum | null;
    /**
     * Aggregate count of transaction sets included across the acknowledged groups, when available.
     * @type {number}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    includedTransactionSets: number | null;
    /**
     * Aggregate count of transaction sets received across the acknowledged groups, when available.
     * @type {number}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    receivedTransactionSets: number | null;
    /**
     * Aggregate count of received transaction sets accepted across the acknowledged groups, when available.
     * @type {number}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    acceptedTransactionSets: number | null;
    /**
     * Distinct non-empty syntax error codes reported by the 999.
     * @type {Array<string>}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    errorCodes: Array<string>;
    /**
     * Distinct AK1/AK9 implementation-group outcomes in source order.
     * @type {Array<ImplementationAcknowledgmentGroupOutcome>}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    groups: Array<ImplementationAcknowledgmentGroupOutcome>;
    /**
     * Flattened AK2/IK5 transaction-set outcomes; each result repeats its parent AK101/AK102 identity for attribution.
     * @type {Array<ImplementationAcknowledgmentTransactionSetOutcome>}
     * @memberof ImplementationAcknowledgmentOutcome
     */
    transactionSets: Array<ImplementationAcknowledgmentTransactionSetOutcome>;
}


/**
 * @export
 */
export const ImplementationAcknowledgmentOutcomeUnknownReasonEnum = {
    MissingX12: 'missing_x12',
    Not999: 'not_999',
    InvalidStructure: 'invalid_structure',
    MissingAk9: 'missing_ak9',
    InvalidAk9: 'invalid_ak9',
    UnsupportedAcknowledgmentCode: 'unsupported_acknowledgment_code',
    InconsistentRollup: 'inconsistent_rollup',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ImplementationAcknowledgmentOutcomeUnknownReasonEnum = typeof ImplementationAcknowledgmentOutcomeUnknownReasonEnum[keyof typeof ImplementationAcknowledgmentOutcomeUnknownReasonEnum];


/**
 * Check if a given object implements the ImplementationAcknowledgmentOutcome interface.
 */
export function instanceOfImplementationAcknowledgmentOutcome(value: object): value is ImplementationAcknowledgmentOutcome {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('acknowledgmentCode' in value) || value['acknowledgmentCode'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('parsed' in value) || value['parsed'] === undefined) return false;
    if (!('unknownReason' in value) || value['unknownReason'] === undefined) return false;
    if (!('includedTransactionSets' in value) || value['includedTransactionSets'] === undefined) return false;
    if (!('receivedTransactionSets' in value) || value['receivedTransactionSets'] === undefined) return false;
    if (!('acceptedTransactionSets' in value) || value['acceptedTransactionSets'] === undefined) return false;
    if (!('errorCodes' in value) || value['errorCodes'] === undefined) return false;
    if (!('groups' in value) || value['groups'] === undefined) return false;
    if (!('transactionSets' in value) || value['transactionSets'] === undefined) return false;
    return true;
}

export function ImplementationAcknowledgmentOutcomeFromJSON(json: any): ImplementationAcknowledgmentOutcome {
    return ImplementationAcknowledgmentOutcomeFromJSONTyped(json, false);
}

export function ImplementationAcknowledgmentOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentOutcome {
    if (json == null) {
        return json;
    }
    return {

        'status': ImplementationAcknowledgmentStatusFromJSON(json['status']),
        'acknowledgmentCode': json['acknowledgmentCode'],
        'summary': json['summary'],
        'parsed': json['parsed'],
        'unknownReason': json['unknownReason'],
        'includedTransactionSets': json['includedTransactionSets'],
        'receivedTransactionSets': json['receivedTransactionSets'],
        'acceptedTransactionSets': json['acceptedTransactionSets'],
        'errorCodes': json['errorCodes'],
        'groups': ((json['groups'] as Array<any>).map(ImplementationAcknowledgmentGroupOutcomeFromJSON)),
        'transactionSets': ((json['transactionSets'] as Array<any>).map(ImplementationAcknowledgmentTransactionSetOutcomeFromJSON)),
    };
}

export function ImplementationAcknowledgmentOutcomeToJSON(json: any): ImplementationAcknowledgmentOutcome {
    return ImplementationAcknowledgmentOutcomeToJSONTyped(json, false);
}

export function ImplementationAcknowledgmentOutcomeToJSONTyped(value?: ImplementationAcknowledgmentOutcome | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': ImplementationAcknowledgmentStatusToJSON(value['status']),
        'acknowledgmentCode': value['acknowledgmentCode'],
        'summary': value['summary'],
        'parsed': value['parsed'],
        'unknownReason': value['unknownReason'],
        'includedTransactionSets': value['includedTransactionSets'],
        'receivedTransactionSets': value['receivedTransactionSets'],
        'acceptedTransactionSets': value['acceptedTransactionSets'],
        'errorCodes': value['errorCodes'],
        'groups': ((value['groups'] as Array<any>).map(ImplementationAcknowledgmentGroupOutcomeToJSON)),
        'transactionSets': ((value['transactionSets'] as Array<any>).map(ImplementationAcknowledgmentTransactionSetOutcomeToJSON)),
    };
}
