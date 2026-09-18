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
import type { TransactionMdnStatus } from './TransactionMdnStatus.js';
import {
    TransactionMdnStatusFromJSON,
    TransactionMdnStatusFromJSONTyped,
    TransactionMdnStatusToJSON,
    TransactionMdnStatusToJSONTyped,
} from './TransactionMdnStatus.js';

/**
 * AS2 message disposition notification (MDN) metadata without its report body. For an outbound document ModernEDI normally requests an asynchronous signed receipt. While that receipt is outstanding this object has `status: pending`; it becomes `overdue` after the platform response deadline, which defaults to one hour after send. A received receipt is accepted as `processed` only after its Original-Message-ID, requested MIC algorithm, returned MIC, and disposition are validated. Review `as2_mdn_attention` before resending; ModernEDI does not resend automatically because an invalid or missing receipt does not prove the partner failed to process the document.
 *
 * @export
 * @interface TransactionMdn
 */
export interface TransactionMdn {
    /**
     * Message-ID of the MDN itself. Null while an asynchronous receipt is still pending or overdue.
     * @type {string}
     * @memberof TransactionMdn
     */
    messageId: string | null;
    /**
     * Raw AS2 Disposition field returned by the partner. Use normalized `status` for automation and retain this value for partner troubleshooting.
     * @type {string}
     * @memberof TransactionMdn
     */
    disposition: string | null;
    /**
     * True when ModernEDI sent this MDN for an inbound document; false when it received or is awaiting the partner's MDN for an outbound document.
     * @type {boolean}
     * @memberof TransactionMdn
     */
    sent: boolean | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMdn
     */
    timestamp: string | null;
    /**
     *
     * @type {TransactionMdnStatus}
     * @memberof TransactionMdn
     */
    status: TransactionMdnStatus;
    /**
     * True when the receipt was requested or delivered through the asynchronous Receipt-Delivery-Option callback rather than the original HTTP response.
     * @type {boolean}
     * @memberof TransactionMdn
     */
    asynchronous: boolean | null;
    /**
     * Whether the partner's Received-content-MIC digest and algorithm matched the canonical content ModernEDI sent. Null while pending or when comparison was not possible.
     * @type {boolean}
     * @memberof TransactionMdn
     */
    micMatched: boolean | null;
    /**
     * Partner-supplied Received-content-MIC value, including its algorithm token when present.
     * @type {string}
     * @memberof TransactionMdn
     */
    receivedContentMic: string | null;
    /**
     * Base64 digest ModernEDI calculated over the exact canonical MIME content sent to the partner.
     * @type {string}
     * @memberof TransactionMdn
     */
    expectedContentMic: string | null;
    /**
     * Receipt MIC algorithm ModernEDI requested from the partner; currently `sha1` for compatibility with legacy partner connections.
     * @type {string}
     * @memberof TransactionMdn
     */
    expectedMicAlgorithm: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof TransactionMdn
     */
    expectedBy: string | null;
    /**
     * Specific validation or partner-disposition problem that caused `warning`, `rejected`, `invalid`, or `mic_mismatch`.
     * @type {string}
     * @memberof TransactionMdn
     */
    validationError: string | null;
    /**
     * Lowercase SHA-256 of the exact partner runtime configuration recorded for this transaction, receipt, or acknowledgment. It is `null` for legacy rows written before configuration stamping. Scenario verification accepts persisted evidence only when this value exactly matches the partner configuration frozen into the applied binding.
     *
     * @type {string}
     * @memberof TransactionMdn
     */
    partnerConfigurationSha256: string | null;
}



/**
 * Check if a given object implements the TransactionMdn interface.
 */
export function instanceOfTransactionMdn(value: object): value is TransactionMdn {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('disposition' in value) || value['disposition'] === undefined) return false;
    if (!('sent' in value) || value['sent'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('asynchronous' in value) || value['asynchronous'] === undefined) return false;
    if (!('micMatched' in value) || value['micMatched'] === undefined) return false;
    if (!('receivedContentMic' in value) || value['receivedContentMic'] === undefined) return false;
    if (!('expectedContentMic' in value) || value['expectedContentMic'] === undefined) return false;
    if (!('expectedMicAlgorithm' in value) || value['expectedMicAlgorithm'] === undefined) return false;
    if (!('expectedBy' in value) || value['expectedBy'] === undefined) return false;
    if (!('validationError' in value) || value['validationError'] === undefined) return false;
    if (!('partnerConfigurationSha256' in value) || value['partnerConfigurationSha256'] === undefined) return false;
    return true;
}

export function TransactionMdnFromJSON(json: any): TransactionMdn {
    return TransactionMdnFromJSONTyped(json, false);
}

export function TransactionMdnFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionMdn {
    if (json == null) {
        return json;
    }
    return {

        'messageId': json['messageId'],
        'disposition': json['disposition'],
        'sent': json['sent'],
        'timestamp': json['timestamp'],
        'status': TransactionMdnStatusFromJSON(json['status']),
        'asynchronous': json['asynchronous'],
        'micMatched': json['micMatched'],
        'receivedContentMic': json['receivedContentMic'],
        'expectedContentMic': json['expectedContentMic'],
        'expectedMicAlgorithm': json['expectedMicAlgorithm'],
        'expectedBy': json['expectedBy'],
        'validationError': json['validationError'],
        'partnerConfigurationSha256': json['partnerConfigurationSha256'],
    };
}

export function TransactionMdnToJSON(json: any): TransactionMdn {
    return TransactionMdnToJSONTyped(json, false);
}

export function TransactionMdnToJSONTyped(value?: TransactionMdn | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageId': value['messageId'],
        'disposition': value['disposition'],
        'sent': value['sent'],
        'timestamp': value['timestamp'],
        'status': TransactionMdnStatusToJSON(value['status']),
        'asynchronous': value['asynchronous'],
        'micMatched': value['micMatched'],
        'receivedContentMic': value['receivedContentMic'],
        'expectedContentMic': value['expectedContentMic'],
        'expectedMicAlgorithm': value['expectedMicAlgorithm'],
        'expectedBy': value['expectedBy'],
        'validationError': value['validationError'],
        'partnerConfigurationSha256': value['partnerConfigurationSha256'],
    };
}
