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
 * Durable consolidated mapping states available to exact list filtering. `UNAVAILABLE` is intentionally excluded because it describes a request-local telemetry read failure rather than an indexed transaction state.
 *
 * @export
 */
export const FilterableTransactionMappingStatus = {
    NotRecorded: 'NOT_RECORDED',
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    CompletedWithErrors: 'COMPLETED_WITH_ERRORS',
    Recovered: 'RECOVERED',
} as const;
export type FilterableTransactionMappingStatus = typeof FilterableTransactionMappingStatus[keyof typeof FilterableTransactionMappingStatus];


export function instanceOfFilterableTransactionMappingStatus(value: any): boolean {
    for (const key in FilterableTransactionMappingStatus) {
        if (Object.prototype.hasOwnProperty.call(FilterableTransactionMappingStatus, key)) {
            if (FilterableTransactionMappingStatus[key as keyof typeof FilterableTransactionMappingStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function FilterableTransactionMappingStatusFromJSON(json: any): FilterableTransactionMappingStatus {
    return FilterableTransactionMappingStatusFromJSONTyped(json, false);
}

export function FilterableTransactionMappingStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterableTransactionMappingStatus {
    return json as FilterableTransactionMappingStatus;
}

export function FilterableTransactionMappingStatusToJSON(value?: FilterableTransactionMappingStatus | null): any {
    return value as any;
}

export function FilterableTransactionMappingStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): FilterableTransactionMappingStatus {
    return value as FilterableTransactionMappingStatus;
}
