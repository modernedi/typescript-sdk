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
 * Closed set of normalized 999 statuses accepted by exact transaction-list filtering. Response models use a separate forward-compatible enum so a newer response status does not prevent an older SDK from reading the row.
 *
 * @export
 */
export const FilterableImplementationAcknowledgmentStatus = {
    Accepted: 'accepted',
    AcceptedWithErrors: 'accepted_with_errors',
    PartiallyAccepted: 'partially_accepted',
    Rejected: 'rejected',
    Unknown: 'unknown',
} as const;
export type FilterableImplementationAcknowledgmentStatus = typeof FilterableImplementationAcknowledgmentStatus[keyof typeof FilterableImplementationAcknowledgmentStatus];


export function instanceOfFilterableImplementationAcknowledgmentStatus(value: any): boolean {
    for (const key in FilterableImplementationAcknowledgmentStatus) {
        if (Object.prototype.hasOwnProperty.call(FilterableImplementationAcknowledgmentStatus, key)) {
            if (FilterableImplementationAcknowledgmentStatus[key as keyof typeof FilterableImplementationAcknowledgmentStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function FilterableImplementationAcknowledgmentStatusFromJSON(json: any): FilterableImplementationAcknowledgmentStatus {
    return FilterableImplementationAcknowledgmentStatusFromJSONTyped(json, false);
}

export function FilterableImplementationAcknowledgmentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterableImplementationAcknowledgmentStatus {
    return json as FilterableImplementationAcknowledgmentStatus;
}

export function FilterableImplementationAcknowledgmentStatusToJSON(value?: FilterableImplementationAcknowledgmentStatus | null): any {
    return value as any;
}

export function FilterableImplementationAcknowledgmentStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): FilterableImplementationAcknowledgmentStatus {
    return value as FilterableImplementationAcknowledgmentStatus;
}
