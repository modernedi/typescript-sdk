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
/**
 * Handoff state for a mapped output stored on a transaction. This object is present on stored transaction-detail mapped outputs and omitted from response-only replay results, which do not enter the managed queue. `acknowledged` means acknowledged by your integration through the queue acknowledgment API or a successful mapped-output webhook; it does not prove how another application handled the document afterward.
 *
 * @export
 * @interface TransactionMappedOutputDelivery
 */
export interface TransactionMappedOutputDelivery {
    /**
     * `managed_queue` exposes a current polling/webhook state; `not_applicable` is a transaction-record-only artifact.
     *
     * @type {TransactionMappedOutputDeliveryApplicabilityEnum}
     * @memberof TransactionMappedOutputDelivery
     */
    applicability: TransactionMappedOutputDeliveryApplicabilityEnum;
    /**
     * Current managed-queue state, or null when applicability is not `managed_queue`. `ready` includes a never-leased output and an output whose prior lease expired. `leased` means the visibility timeout is still active. `acknowledged` means acknowledged by your integration.
     *
     * @type {TransactionMappedOutputDeliveryStatusEnum}
     * @memberof TransactionMappedOutputDelivery
     */
    status: TransactionMappedOutputDeliveryStatusEnum | null;
    /**
     * UTC instant when this generated output version became available for polling or webhook delivery. A durable replay creates a new output version with a new availability instant.
     *
     * @type {string}
     * @memberof TransactionMappedOutputDelivery
     */
    availableAt: string | null;
    /**
     * Current actionable managed-output handoff issue, or null while the output is progressing normally, acknowledged, or not managed by the queue. `not_collected` means no first delivery lease was issued before the 15-minute pickup grace period expired. `acknowledgment_overdue` means the first lease expired without acknowledgment. `redelivered` means more than one delivery lease was issued without a later acknowledgment.
     *
     * @type {TransactionMappedOutputDeliveryHandoffIssueEnum}
     * @memberof TransactionMappedOutputDelivery
     */
    handoffIssue: TransactionMappedOutputDeliveryHandoffIssueEnum | null;
    /**
     * UTC instant when the current `handoffIssue` became actionable, or null when no handoff issue is active. For `not_collected`, this is 15 minutes after `availableAt`; for an overdue acknowledgment it is the first lease expiry; for a redelivery it is the most recent transition into the redelivered state.
     *
     * @type {string}
     * @memberof TransactionMappedOutputDelivery
     */
    attentionSince: string | null;
    /**
     * Managed-queue correlation id for this generated output, or null when queue tracking does not apply. It is distinct from the mapped output's top-level transaction artifact `id`. It stays stable across ordinary processing retries that reproduce the same logical output. A successful durable replay creates a new id even when the regenerated content is identical. Acknowledgment still requires the latest `receiptHandle` returned by `GET /v1/mapped-outputs`; transaction detail does not provide that receipt handle.
     *
     * @type {string}
     * @memberof TransactionMappedOutputDelivery
     */
    outputId: string | null;
    /**
     * Number of times the output has been leased for pull or webhook delivery attempts, or null when queue tracking does not apply. This count does not imply successful downstream processing.
     *
     * @type {number}
     * @memberof TransactionMappedOutputDelivery
     */
    deliveryCount: number | null;
    /**
     * True after more than one lease or delivery attempt; independent of the current status.
     * @type {boolean}
     * @memberof TransactionMappedOutputDelivery
     */
    redelivered: boolean | null;
    /**
     * UTC instant when the output was first leased for a pull or webhook delivery attempt.
     * @type {string}
     * @memberof TransactionMappedOutputDelivery
     */
    firstDeliveredAt: string | null;
    /**
     * UTC instant when the output was most recently leased for a pull or webhook delivery attempt.
     * @type {string}
     * @memberof TransactionMappedOutputDelivery
     */
    lastDeliveredAt: string | null;
    /**
     * UTC instant when the current visibility lease expires, or null when no lease has been issued.
     * @type {string}
     * @memberof TransactionMappedOutputDelivery
     */
    leasedUntil: string | null;
    /**
     * UTC instant when ModernEDI recorded acknowledgment by the customer's integration or a successful webhook response. This does not prove later ERP or business processing.
     *
     * @type {string}
     * @memberof TransactionMappedOutputDelivery
     */
    ackedAt: string | null;
}


/**
 * @export
 */
export const TransactionMappedOutputDeliveryApplicabilityEnum = {
    ManagedQueue: 'managed_queue',
    NotApplicable: 'not_applicable',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappedOutputDeliveryApplicabilityEnum = typeof TransactionMappedOutputDeliveryApplicabilityEnum[keyof typeof TransactionMappedOutputDeliveryApplicabilityEnum];

/**
 * @export
 */
export const TransactionMappedOutputDeliveryStatusEnum = {
    Ready: 'ready',
    Leased: 'leased',
    Acknowledged: 'acknowledged',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappedOutputDeliveryStatusEnum = typeof TransactionMappedOutputDeliveryStatusEnum[keyof typeof TransactionMappedOutputDeliveryStatusEnum];

/**
 * @export
 */
export const TransactionMappedOutputDeliveryHandoffIssueEnum = {
    NotCollected: 'not_collected',
    AcknowledgmentOverdue: 'acknowledgment_overdue',
    Redelivered: 'redelivered',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionMappedOutputDeliveryHandoffIssueEnum = typeof TransactionMappedOutputDeliveryHandoffIssueEnum[keyof typeof TransactionMappedOutputDeliveryHandoffIssueEnum];


/**
 * Check if a given object implements the TransactionMappedOutputDelivery interface.
 */
export function instanceOfTransactionMappedOutputDelivery(value: object): value is TransactionMappedOutputDelivery {
    if (!('applicability' in value) || value['applicability'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('availableAt' in value) || value['availableAt'] === undefined) return false;
    if (!('handoffIssue' in value) || value['handoffIssue'] === undefined) return false;
    if (!('attentionSince' in value) || value['attentionSince'] === undefined) return false;
    if (!('outputId' in value) || value['outputId'] === undefined) return false;
    if (!('deliveryCount' in value) || value['deliveryCount'] === undefined) return false;
    if (!('redelivered' in value) || value['redelivered'] === undefined) return false;
    if (!('firstDeliveredAt' in value) || value['firstDeliveredAt'] === undefined) return false;
    if (!('lastDeliveredAt' in value) || value['lastDeliveredAt'] === undefined) return false;
    if (!('leasedUntil' in value) || value['leasedUntil'] === undefined) return false;
    if (!('ackedAt' in value) || value['ackedAt'] === undefined) return false;
    return true;
}

export function TransactionMappedOutputDeliveryFromJSON(json: any): TransactionMappedOutputDelivery {
    return TransactionMappedOutputDeliveryFromJSONTyped(json, false);
}

export function TransactionMappedOutputDeliveryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMappedOutputDelivery {
    if (json == null) {
        return json;
    }
    return {

        'applicability': json['applicability'],
        'status': json['status'],
        'availableAt': json['availableAt'],
        'handoffIssue': json['handoffIssue'],
        'attentionSince': json['attentionSince'],
        'outputId': json['outputId'],
        'deliveryCount': json['deliveryCount'],
        'redelivered': json['redelivered'],
        'firstDeliveredAt': json['firstDeliveredAt'],
        'lastDeliveredAt': json['lastDeliveredAt'],
        'leasedUntil': json['leasedUntil'],
        'ackedAt': json['ackedAt'],
    };
}

export function TransactionMappedOutputDeliveryToJSON(json: any): TransactionMappedOutputDelivery {
    return TransactionMappedOutputDeliveryToJSONTyped(json, false);
}

export function TransactionMappedOutputDeliveryToJSONTyped(value?: TransactionMappedOutputDelivery | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'applicability': value['applicability'],
        'status': value['status'],
        'availableAt': value['availableAt'],
        'handoffIssue': value['handoffIssue'],
        'attentionSince': value['attentionSince'],
        'outputId': value['outputId'],
        'deliveryCount': value['deliveryCount'],
        'redelivered': value['redelivered'],
        'firstDeliveredAt': value['firstDeliveredAt'],
        'lastDeliveredAt': value['lastDeliveredAt'],
        'leasedUntil': value['leasedUntil'],
        'ackedAt': value['ackedAt'],
    };
}
