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
 * Compact whole-997 aggregate included on transaction summaries for list-level monitoring. Full AK1/AK9 and AK2/AK5 trees are reserved for detail; use the row's separate `functionalAckGroupOutcome` and `functionalAckTransactionOutcome` projections for attribution. Only `accepted` is a clean automation completion. `accepted_with_errors` and `unknown` require review; `partially_accepted` and `rejected` are failure or rejection outcomes that require action.
 *
 * @export
 * @interface FunctionalAcknowledgmentSummary
 */
export interface FunctionalAcknowledgmentSummary {
    /**
     *
     * @type {FunctionalAcknowledgmentStatus}
     * @memberof FunctionalAcknowledgmentSummary
     */
    status: FunctionalAcknowledgmentStatus;
    /**
     * Original AK901 functional-group acknowledgment code, when available.
     * @type {string}
     * @memberof FunctionalAcknowledgmentSummary
     */
    acknowledgmentCode: string | null;
    /**
     * Human-readable whole-997 aggregate result.
     * @type {string}
     * @memberof FunctionalAcknowledgmentSummary
     */
    summary: string;
}



/**
 * Check if a given object implements the FunctionalAcknowledgmentSummary interface.
 */
export function instanceOfFunctionalAcknowledgmentSummary(value: object): value is FunctionalAcknowledgmentSummary {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('acknowledgmentCode' in value) || value['acknowledgmentCode'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    return true;
}

export function FunctionalAcknowledgmentSummaryFromJSON(json: any): FunctionalAcknowledgmentSummary {
    return FunctionalAcknowledgmentSummaryFromJSONTyped(json, false);
}

export function FunctionalAcknowledgmentSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionalAcknowledgmentSummary {
    if (json == null) {
        return json;
    }
    return {

        'status': FunctionalAcknowledgmentStatusFromJSON(json['status']),
        'acknowledgmentCode': json['acknowledgmentCode'],
        'summary': json['summary'],
    };
}

export function FunctionalAcknowledgmentSummaryToJSON(json: any): FunctionalAcknowledgmentSummary {
    return FunctionalAcknowledgmentSummaryToJSONTyped(json, false);
}

export function FunctionalAcknowledgmentSummaryToJSONTyped(value?: FunctionalAcknowledgmentSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': FunctionalAcknowledgmentStatusToJSON(value['status']),
        'acknowledgmentCode': value['acknowledgmentCode'],
        'summary': value['summary'],
    };
}
