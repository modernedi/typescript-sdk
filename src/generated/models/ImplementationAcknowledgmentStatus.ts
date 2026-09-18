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
 * Stable normalized 999 acknowledgment status used for aggregate, group, and transaction-set results. Raw IK501 `A` is not clean when its AK2 loop contains IK3/IK4 error detail; that contradictory result is `unknown`.
 *
 * @export
 */
export const ImplementationAcknowledgmentStatus = {
    Accepted: 'accepted',
    AcceptedWithErrors: 'accepted_with_errors',
    PartiallyAccepted: 'partially_accepted',
    Rejected: 'rejected',
    Unknown: 'unknown',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ImplementationAcknowledgmentStatus = typeof ImplementationAcknowledgmentStatus[keyof typeof ImplementationAcknowledgmentStatus];


export function instanceOfImplementationAcknowledgmentStatus(value: any): boolean {
    for (const key in ImplementationAcknowledgmentStatus) {
        if (Object.prototype.hasOwnProperty.call(ImplementationAcknowledgmentStatus, key)) {
            if (ImplementationAcknowledgmentStatus[key as keyof typeof ImplementationAcknowledgmentStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ImplementationAcknowledgmentStatusFromJSON(json: any): ImplementationAcknowledgmentStatus {
    return ImplementationAcknowledgmentStatusFromJSONTyped(json, false);
}

export function ImplementationAcknowledgmentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentStatus {
    return json as ImplementationAcknowledgmentStatus;
}

export function ImplementationAcknowledgmentStatusToJSON(value?: ImplementationAcknowledgmentStatus | null): any {
    return value as any;
}

export function ImplementationAcknowledgmentStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentStatus {
    return value as ImplementationAcknowledgmentStatus;
}
