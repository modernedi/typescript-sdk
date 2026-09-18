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
 * Closed set of normalized AS2 receipt-assurance statuses accepted by exact transaction-list filtering. Response models use a separate forward-compatible enum so a newer response status does not prevent an older SDK from reading the row.
 *
 * @export
 */
export const FilterableTransactionMdnStatus = {
    Pending: 'pending',
    Processed: 'processed',
    Warning: 'warning',
    Rejected: 'rejected',
    Invalid: 'invalid',
    MicMismatch: 'mic_mismatch',
    Overdue: 'overdue',
} as const;
export type FilterableTransactionMdnStatus = typeof FilterableTransactionMdnStatus[keyof typeof FilterableTransactionMdnStatus];


export function instanceOfFilterableTransactionMdnStatus(value: any): boolean {
    for (const key in FilterableTransactionMdnStatus) {
        if (Object.prototype.hasOwnProperty.call(FilterableTransactionMdnStatus, key)) {
            if (FilterableTransactionMdnStatus[key as keyof typeof FilterableTransactionMdnStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function FilterableTransactionMdnStatusFromJSON(json: any): FilterableTransactionMdnStatus {
    return FilterableTransactionMdnStatusFromJSONTyped(json, false);
}

export function FilterableTransactionMdnStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterableTransactionMdnStatus {
    return json as FilterableTransactionMdnStatus;
}

export function FilterableTransactionMdnStatusToJSON(value?: FilterableTransactionMdnStatus | null): any {
    return value as any;
}

export function FilterableTransactionMdnStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): FilterableTransactionMdnStatus {
    return value as FilterableTransactionMdnStatus;
}
