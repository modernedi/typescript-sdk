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
 * Normalized AS2 receipt-assurance status. Only `processed` is a clean completed receipt; `pending` is still within the response window and every other state requires operator review.
 *
 * @export
 */
export const TransactionMdnStatus = {
    Pending: 'pending',
    Processed: 'processed',
    Warning: 'warning',
    Rejected: 'rejected',
    Invalid: 'invalid',
    MicMismatch: 'mic_mismatch',
    Overdue: 'overdue',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMdnStatus = typeof TransactionMdnStatus[keyof typeof TransactionMdnStatus];


export function instanceOfTransactionMdnStatus(value: any): boolean {
    for (const key in TransactionMdnStatus) {
        if (Object.prototype.hasOwnProperty.call(TransactionMdnStatus, key)) {
            if (TransactionMdnStatus[key as keyof typeof TransactionMdnStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionMdnStatusFromJSON(json: any): TransactionMdnStatus {
    return TransactionMdnStatusFromJSONTyped(json, false);
}

export function TransactionMdnStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMdnStatus {
    return json as TransactionMdnStatus;
}

export function TransactionMdnStatusToJSON(value?: TransactionMdnStatus | null): any {
    return value as any;
}

export function TransactionMdnStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionMdnStatus {
    return value as TransactionMdnStatus;
}
