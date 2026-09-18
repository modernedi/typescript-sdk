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
 * Stable requested-TA1 lifecycle and normalized TA104 outcome.
 * @export
 */
export const TechnicalAcknowledgmentStatus = {
    NotRequested: 'not_requested',
    Pending: 'pending',
    Received: 'received',
    ReceivedWithErrors: 'received_with_errors',
    Rejected: 'rejected',
    Unknown: 'unknown',
    Overdue: 'overdue',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TechnicalAcknowledgmentStatus = typeof TechnicalAcknowledgmentStatus[keyof typeof TechnicalAcknowledgmentStatus];


export function instanceOfTechnicalAcknowledgmentStatus(value: any): boolean {
    for (const key in TechnicalAcknowledgmentStatus) {
        if (Object.prototype.hasOwnProperty.call(TechnicalAcknowledgmentStatus, key)) {
            if (TechnicalAcknowledgmentStatus[key as keyof typeof TechnicalAcknowledgmentStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TechnicalAcknowledgmentStatusFromJSON(json: any): TechnicalAcknowledgmentStatus {
    return TechnicalAcknowledgmentStatusFromJSONTyped(json, false);
}

export function TechnicalAcknowledgmentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechnicalAcknowledgmentStatus {
    return json as TechnicalAcknowledgmentStatus;
}

export function TechnicalAcknowledgmentStatusToJSON(value?: TechnicalAcknowledgmentStatus | null): any {
    return value as any;
}

export function TechnicalAcknowledgmentStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): TechnicalAcknowledgmentStatus {
    return value as TechnicalAcknowledgmentStatus;
}
