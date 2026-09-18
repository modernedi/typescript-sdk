/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */


/**
 * Closed set of normalized 997 statuses accepted by exact transaction-list filtering. Response models use a separate forward-compatible enum so a newer response status does not prevent an older SDK from reading the row.
 *
 * @export
 */
export const FilterableFunctionalAcknowledgmentStatus = {
    Accepted: 'accepted',
    AcceptedWithErrors: 'accepted_with_errors',
    PartiallyAccepted: 'partially_accepted',
    Rejected: 'rejected',
    Unknown: 'unknown',
} as const;
export type FilterableFunctionalAcknowledgmentStatus = typeof FilterableFunctionalAcknowledgmentStatus[keyof typeof FilterableFunctionalAcknowledgmentStatus];


export function instanceOfFilterableFunctionalAcknowledgmentStatus(value: any): boolean {
    for (const key in FilterableFunctionalAcknowledgmentStatus) {
        if (Object.prototype.hasOwnProperty.call(FilterableFunctionalAcknowledgmentStatus, key)) {
            if (FilterableFunctionalAcknowledgmentStatus[key as keyof typeof FilterableFunctionalAcknowledgmentStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function FilterableFunctionalAcknowledgmentStatusFromJSON(json: any): FilterableFunctionalAcknowledgmentStatus {
    return FilterableFunctionalAcknowledgmentStatusFromJSONTyped(json, false);
}

export function FilterableFunctionalAcknowledgmentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterableFunctionalAcknowledgmentStatus {
    return json as FilterableFunctionalAcknowledgmentStatus;
}

export function FilterableFunctionalAcknowledgmentStatusToJSON(value?: FilterableFunctionalAcknowledgmentStatus | null): any {
    return value as any;
}

export function FilterableFunctionalAcknowledgmentStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): FilterableFunctionalAcknowledgmentStatus {
    return value as FilterableFunctionalAcknowledgmentStatus;
}
