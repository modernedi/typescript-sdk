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
import type { FunctionalAcknowledgmentGroupOutcome } from './FunctionalAcknowledgmentGroupOutcome.js';
import {
    FunctionalAcknowledgmentGroupOutcomeFromJSON,
    FunctionalAcknowledgmentGroupOutcomeFromJSONTyped,
    FunctionalAcknowledgmentGroupOutcomeToJSON,
    FunctionalAcknowledgmentGroupOutcomeToJSONTyped,
} from './FunctionalAcknowledgmentGroupOutcome.js';
import type { FunctionalAcknowledgmentStatus } from './FunctionalAcknowledgmentStatus.js';
import {
    FunctionalAcknowledgmentStatusFromJSON,
    FunctionalAcknowledgmentStatusFromJSONTyped,
    FunctionalAcknowledgmentStatusToJSON,
    FunctionalAcknowledgmentStatusToJSONTyped,
} from './FunctionalAcknowledgmentStatus.js';

/**
 * Normalized whole-997 aggregate. The aggregate does not collapse the distinct AK1/AK9 group results or AK2/AK5 transaction-set results. `groups` preserves every AK101/AK102 identity, its AK901 disposition, its AK902-AK904 counts, and nested AK5 outcomes. A contradictory AK5/count rollup is reported as unknown rather than trusting an internally inconsistent 997. Whenever `status` is `unknown`, inspect `unknownReason` and fetch the `functional-ack-x12` document when the original body is needed. A false `parsed` value indicates a structural failure; an unsupported AK901, AK501, or syntax-error code can be structurally parsed while its status remains unknown. The `unsupported_acknowledgment_code` reason does not by itself prove that AK901 was unsupported. Only `accepted` is a clean automation completion. `accepted_with_errors` and `unknown` require review; `partially_accepted` and `rejected` are failure or rejection outcomes that require action.
 *
 * @export
 * @interface FunctionalAcknowledgmentOutcome
 */
export interface FunctionalAcknowledgmentOutcome {
    /**
     *
     * @type {FunctionalAcknowledgmentStatus}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    status: FunctionalAcknowledgmentStatus;
    /**
     * Common original AK901 code when every parsed group has the same code; otherwise `null`.
     * @type {string}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    acknowledgmentCode: string | null;
    /**
     * Human-readable whole-997 aggregate result; transaction-scoped displays should use `evaluatedStatus` and the selected group or transaction outcome.
     * @type {string}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    summary: string;
    /**
     * True when AK9 and all three AK902-AK904 counts were structurally valid.
     * @type {boolean}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    parsed: boolean;
    /**
     * Machine-readable reason when `status` is `unknown`.
     * @type {FunctionalAcknowledgmentOutcomeUnknownReasonEnum}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    unknownReason: FunctionalAcknowledgmentOutcomeUnknownReasonEnum | null;
    /**
     * Sum of AK902 across every parsed group, or `null` when any group count is unavailable or the sum overflows.
     * @type {number}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    includedTransactionSets: number | null;
    /**
     * Sum of AK903 across every parsed group, or `null` when any group count is unavailable or the sum overflows.
     * @type {number}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    receivedTransactionSets: number | null;
    /**
     * Sum of AK904 across every parsed group, or `null` when any group count is unavailable or the sum overflows.
     * @type {number}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    acceptedTransactionSets: number | null;
    /**
     * De-duplicated union of non-empty AK905 and later functional-group syntax error codes across every parsed group.
     * @type {Array<string>}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    errorCodes: Array<string>;
    /**
     * Distinct AK1/AK9 functional-group outcomes in source order; no sibling group is collapsed into another.
     * @type {Array<FunctionalAcknowledgmentGroupOutcome>}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    groups: Array<FunctionalAcknowledgmentGroupOutcome>;
    /**
     * Transaction-set results from paired AK2 and AK5 segments. Each result repeats its parent AK101/AK102 identity so flattened results remain attributable when an interchange contains multiple 997 groups.
     *
     * @type {Array<FunctionalAcknowledgmentTransactionSetOutcome>}
     * @memberof FunctionalAcknowledgmentOutcome
     */
    transactionSets: Array<FunctionalAcknowledgmentTransactionSetOutcome>;
}


/**
 * @export
 */
export const FunctionalAcknowledgmentOutcomeUnknownReasonEnum = {
    MissingX12: 'missing_x12',
    Not997: 'not_997',
    InvalidStructure: 'invalid_structure',
    MissingAk9: 'missing_ak9',
    InvalidAk9: 'invalid_ak9',
    UnsupportedAcknowledgmentCode: 'unsupported_acknowledgment_code',
    InconsistentRollup: 'inconsistent_rollup',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type FunctionalAcknowledgmentOutcomeUnknownReasonEnum = typeof FunctionalAcknowledgmentOutcomeUnknownReasonEnum[keyof typeof FunctionalAcknowledgmentOutcomeUnknownReasonEnum];


/**
 * Check if a given object implements the FunctionalAcknowledgmentOutcome interface.
 */
export function instanceOfFunctionalAcknowledgmentOutcome(value: object): value is FunctionalAcknowledgmentOutcome {
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

export function FunctionalAcknowledgmentOutcomeFromJSON(json: any): FunctionalAcknowledgmentOutcome {
    return FunctionalAcknowledgmentOutcomeFromJSONTyped(json, false);
}

export function FunctionalAcknowledgmentOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionalAcknowledgmentOutcome {
    if (json == null) {
        return json;
    }
    return {

        'status': FunctionalAcknowledgmentStatusFromJSON(json['status']),
        'acknowledgmentCode': json['acknowledgmentCode'],
        'summary': json['summary'],
        'parsed': json['parsed'],
        'unknownReason': json['unknownReason'],
        'includedTransactionSets': json['includedTransactionSets'],
        'receivedTransactionSets': json['receivedTransactionSets'],
        'acceptedTransactionSets': json['acceptedTransactionSets'],
        'errorCodes': json['errorCodes'],
        'groups': ((json['groups'] as Array<any>).map(FunctionalAcknowledgmentGroupOutcomeFromJSON)),
        'transactionSets': ((json['transactionSets'] as Array<any>).map(FunctionalAcknowledgmentTransactionSetOutcomeFromJSON)),
    };
}

export function FunctionalAcknowledgmentOutcomeToJSON(json: any): FunctionalAcknowledgmentOutcome {
    return FunctionalAcknowledgmentOutcomeToJSONTyped(json, false);
}

export function FunctionalAcknowledgmentOutcomeToJSONTyped(value?: FunctionalAcknowledgmentOutcome | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': FunctionalAcknowledgmentStatusToJSON(value['status']),
        'acknowledgmentCode': value['acknowledgmentCode'],
        'summary': value['summary'],
        'parsed': value['parsed'],
        'unknownReason': value['unknownReason'],
        'includedTransactionSets': value['includedTransactionSets'],
        'receivedTransactionSets': value['receivedTransactionSets'],
        'acceptedTransactionSets': value['acceptedTransactionSets'],
        'errorCodes': value['errorCodes'],
        'groups': ((value['groups'] as Array<any>).map(FunctionalAcknowledgmentGroupOutcomeToJSON)),
        'transactionSets': ((value['transactionSets'] as Array<any>).map(FunctionalAcknowledgmentTransactionSetOutcomeToJSON)),
    };
}
