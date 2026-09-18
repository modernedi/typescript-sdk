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
 * Public half of a ModernEDI AS2 signing/encryption certificate; private keys are never exposed.
 * @export
 * @interface As2PublicCertificate
 */
export interface As2PublicCertificate {
    /**
     * Certificate lifecycle slot: `active` is in service and `next` is staged for partner-by-partner rollover.
     * @type {As2PublicCertificateSlotEnum}
     * @memberof As2PublicCertificate
     */
    slot: As2PublicCertificateSlotEnum;
    /**
     * X.509 subject distinguished name, or `null` when certificate parsing did not provide it.
     * @type {string}
     * @memberof As2PublicCertificate
     */
    subjectDn?: string | null;
    /**
     * X.509 issuer distinguished name, or `null` when certificate parsing did not provide it.
     * @type {string}
     * @memberof As2PublicCertificate
     */
    issuerDn?: string | null;
    /**
     * Certificate serial number rendered for partner correlation, or `null` when unavailable.
     * @type {string}
     * @memberof As2PublicCertificate
     */
    serialNumber?: string | null;
    /**
     * SHA-256 certificate fingerprint for out-of-band verification, or `null` when unavailable.
     * @type {string}
     * @memberof As2PublicCertificate
     */
    fingerprintSha256?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof As2PublicCertificate
     */
    notBefore?: string | null;
    /**
     * UTC RFC 3339 instant with exactly nine fractional digits and a trailing `Z`, or `null`.
     * @type {string}
     * @memberof As2PublicCertificate
     */
    notAfter?: string | null;
    /**
     * PEM-encoded public certificate safe to share with trading partners.
     * @type {string}
     * @memberof As2PublicCertificate
     */
    publicCertPem: string;
}


/**
 * @export
 */
export const As2PublicCertificateSlotEnum = {
    Active: 'active',
    Next: 'next',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2PublicCertificateSlotEnum = typeof As2PublicCertificateSlotEnum[keyof typeof As2PublicCertificateSlotEnum];


/**
 * Check if a given object implements the As2PublicCertificate interface.
 */
export function instanceOfAs2PublicCertificate(value: object): value is As2PublicCertificate {
    if (!('slot' in value) || value['slot'] === undefined) return false;
    if (!('publicCertPem' in value) || value['publicCertPem'] === undefined) return false;
    return true;
}

export function As2PublicCertificateFromJSON(json: any): As2PublicCertificate {
    return As2PublicCertificateFromJSONTyped(json, false);
}

export function As2PublicCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2PublicCertificate {
    if (json == null) {
        return json;
    }
    return {

        'slot': json['slot'],
        'subjectDn': json['subjectDn'] === undefined ? undefined : json['subjectDn'] === null ? null : json['subjectDn'],
        'issuerDn': json['issuerDn'] === undefined ? undefined : json['issuerDn'] === null ? null : json['issuerDn'],
        'serialNumber': json['serialNumber'] === undefined ? undefined : json['serialNumber'] === null ? null : json['serialNumber'],
        'fingerprintSha256': json['fingerprintSha256'] === undefined ? undefined : json['fingerprintSha256'] === null ? null : json['fingerprintSha256'],
        'notBefore': json['notBefore'] === undefined ? undefined : json['notBefore'] === null ? null : json['notBefore'],
        'notAfter': json['notAfter'] === undefined ? undefined : json['notAfter'] === null ? null : json['notAfter'],
        'publicCertPem': json['publicCertPem'],
    };
}

export function As2PublicCertificateToJSON(json: any): As2PublicCertificate {
    return As2PublicCertificateToJSONTyped(json, false);
}

export function As2PublicCertificateToJSONTyped(value?: As2PublicCertificate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'slot': value['slot'],
        'subjectDn': value['subjectDn'],
        'issuerDn': value['issuerDn'],
        'serialNumber': value['serialNumber'],
        'fingerprintSha256': value['fingerprintSha256'],
        'notBefore': value['notBefore'],
        'notAfter': value['notAfter'],
        'publicCertPem': value['publicCertPem'],
    };
}
