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
 * Machine-readable reason that a transaction needs operator attention. `functional_ack_issue` means a 997 was received but was not cleanly accepted. `implementation_ack_issue` means a 999 was received but the transaction-specific IK5 result or conservative AK9 group result was not cleanly accepted. `x12_ack_overdue` means neither a 997 nor a 999 was received for an eligible outbound business transaction by `x12AcknowledgmentExpectedBy`; outbound 997 and 999 acknowledgment documents are excluded. The overdue signal does not automatically resend the original X12. `technical_ack_issue` means a requested TA1 was received but rejected the interchange, reported errors, or could not be classified. `technical_ack_overdue` means ISA14 requested a TA1 but none was received by `technicalAckExpectedBy`. Neither technical-acknowledgment reason automatically resends the original X12. `as2_mdn_attention` means the partner's AS2 receipt is overdue, rejected, invalid, contains a warning, or its returned content MIC does not match the content ModernEDI sent. ModernEDI never automatically resends a document in response to an MDN issue because the partner may already have processed it. `mapped_output_not_collected` means a managed output remained available beyond the 15-minute pickup grace period without a first delivery lease. `mapped_output_ack_overdue` means a delivered output was not acknowledged before its lease expired or was delivered more than once. One transaction can have more than one active reason.
 *
 * @export
 */
export const TransactionAttentionReason = {
    MappingFailure: 'mapping_failure',
    FunctionalAckIssue: 'functional_ack_issue',
    ImplementationAckIssue: 'implementation_ack_issue',
    X12AckOverdue: 'x12_ack_overdue',
    TechnicalAckIssue: 'technical_ack_issue',
    TechnicalAckOverdue: 'technical_ack_overdue',
    As2MdnAttention: 'as2_mdn_attention',
    MappedOutputNotCollected: 'mapped_output_not_collected',
    MappedOutputAckOverdue: 'mapped_output_ack_overdue',
    Watchlist: 'watchlist',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionAttentionReason = typeof TransactionAttentionReason[keyof typeof TransactionAttentionReason];


export function instanceOfTransactionAttentionReason(value: any): boolean {
    for (const key in TransactionAttentionReason) {
        if (Object.prototype.hasOwnProperty.call(TransactionAttentionReason, key)) {
            if (TransactionAttentionReason[key as keyof typeof TransactionAttentionReason] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionAttentionReasonFromJSON(json: any): TransactionAttentionReason {
    return TransactionAttentionReasonFromJSONTyped(json, false);
}

export function TransactionAttentionReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAttentionReason {
    return json as TransactionAttentionReason;
}

export function TransactionAttentionReasonToJSON(value?: TransactionAttentionReason | null): any {
    return value as any;
}

export function TransactionAttentionReasonToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionAttentionReason {
    return value as TransactionAttentionReason;
}
