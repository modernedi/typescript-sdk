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
 * Stable normalized acknowledgment status used for group and transaction-set results. This is not a direct alias for AK901 or AK501; in particular, an AK501 `A` with AK3/AK4 or AK502 and later error detail is `accepted_with_errors`, while the raw `acknowledgmentCode` remains `A`.
 *
 * @export
 */
export const FunctionalAcknowledgmentStatus = {
    Accepted: 'accepted',
    AcceptedWithErrors: 'accepted_with_errors',
    PartiallyAccepted: 'partially_accepted',
    Rejected: 'rejected',
    Unknown: 'unknown',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type FunctionalAcknowledgmentStatus = typeof FunctionalAcknowledgmentStatus[keyof typeof FunctionalAcknowledgmentStatus];


export function instanceOfFunctionalAcknowledgmentStatus(value: any): boolean {
    for (const key in FunctionalAcknowledgmentStatus) {
        if (Object.prototype.hasOwnProperty.call(FunctionalAcknowledgmentStatus, key)) {
            if (FunctionalAcknowledgmentStatus[key as keyof typeof FunctionalAcknowledgmentStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function FunctionalAcknowledgmentStatusFromJSON(json: any): FunctionalAcknowledgmentStatus {
    return FunctionalAcknowledgmentStatusFromJSONTyped(json, false);
}

export function FunctionalAcknowledgmentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionalAcknowledgmentStatus {
    return json as FunctionalAcknowledgmentStatus;
}

export function FunctionalAcknowledgmentStatusToJSON(value?: FunctionalAcknowledgmentStatus | null): any {
    return value as any;
}

export function FunctionalAcknowledgmentStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): FunctionalAcknowledgmentStatus {
    return value as FunctionalAcknowledgmentStatus;
}
