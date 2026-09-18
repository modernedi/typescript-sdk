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

/**
 * Compact 999 aggregate and group results included on transaction summaries for list-level monitoring.
 * @export
 * @interface ImplementationAcknowledgmentSummary
 */
export interface ImplementationAcknowledgmentSummary {
    /**
     *
     * @type {ImplementationAcknowledgmentStatus}
     * @memberof ImplementationAcknowledgmentSummary
     */
    status: ImplementationAcknowledgmentStatus;
    /**
     * Aggregate acknowledgment code when one value represents the whole 999, or `null` for mixed or unavailable group results.
     * @type {string}
     * @memberof ImplementationAcknowledgmentSummary
     */
    acknowledgmentCode: string | null;
    /**
     * Human-readable aggregate 999 result.
     * @type {string}
     * @memberof ImplementationAcknowledgmentSummary
     */
    summary: string;
    /**
     * Compact response retains each AK1/AK9 group so transactions can be evaluated without collapsing sibling groups.
     * @type {Array<ImplementationAcknowledgmentGroupOutcome>}
     * @memberof ImplementationAcknowledgmentSummary
     */
    groups: Array<ImplementationAcknowledgmentGroupOutcome>;
}



/**
 * Check if a given object implements the ImplementationAcknowledgmentSummary interface.
 */
export function instanceOfImplementationAcknowledgmentSummary(value: object): value is ImplementationAcknowledgmentSummary {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('acknowledgmentCode' in value) || value['acknowledgmentCode'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('groups' in value) || value['groups'] === undefined) return false;
    return true;
}

export function ImplementationAcknowledgmentSummaryFromJSON(json: any): ImplementationAcknowledgmentSummary {
    return ImplementationAcknowledgmentSummaryFromJSONTyped(json, false);
}

export function ImplementationAcknowledgmentSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentSummary {
    if (json == null) {
        return json;
    }
    return {

        'status': ImplementationAcknowledgmentStatusFromJSON(json['status']),
        'acknowledgmentCode': json['acknowledgmentCode'],
        'summary': json['summary'],
        'groups': ((json['groups'] as Array<any>).map(ImplementationAcknowledgmentGroupOutcomeFromJSON)),
    };
}

export function ImplementationAcknowledgmentSummaryToJSON(json: any): ImplementationAcknowledgmentSummary {
    return ImplementationAcknowledgmentSummaryToJSONTyped(json, false);
}

export function ImplementationAcknowledgmentSummaryToJSONTyped(value?: ImplementationAcknowledgmentSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': ImplementationAcknowledgmentStatusToJSON(value['status']),
        'acknowledgmentCode': value['acknowledgmentCode'],
        'summary': value['summary'],
        'groups': ((value['groups'] as Array<any>).map(ImplementationAcknowledgmentGroupOutcomeToJSON)),
    };
}
