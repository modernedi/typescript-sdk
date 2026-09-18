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
 * Persisted AS2 partner environment with all secure inbound-protection defaults resolved.
 * @export
 * @interface As2PartnerEnvironmentResolved
 */
export interface As2PartnerEnvironmentResolved {
    /**
     * Partner's environment-specific AS2 identifier. ModernEDI matches it as inbound `AS2-From` and sends it as outbound `AS2-To`.
     * @type {string}
     * @memberof As2PartnerEnvironmentResolved
     */
    as2Identifier: string;
    /**
     * Optional outbound destination. Omit it or use `null` for an inbound-only profile. When present, it must be an absolute HTTP or HTTPS partner destination URL without user information or a fragment. Endpoint workspaces must use HTTPS; plain HTTP requires Endpoint Plus, Static Outbound, Static Network, or Enterprise. The host must be publicly routable; local, private, link-local, multicast, carrier-grade NAT, documentation, benchmark, and other reserved address targets are rejected.
     * @type {string}
     * @memberof As2PartnerEnvironmentResolved
     */
    endpointUrl?: string | null;
    /**
     * Exactly one PEM-encoded partner X.509 public certificate. ModernEDI canonicalizes it before storage.
     * @type {string}
     * @memberof As2PartnerEnvironmentResolved
     */
    publicCertificatePem: string;
    /**
     * When `true` (the secure default), ModernEDI rejects non-MDN inbound messages for this environment unless the sender signature is present and successfully verified with the configured certificate. This policy belongs to the AS2 connection/environment and therefore applies to every attached partner on a shared or VAN connection. Set `false` only for a documented connection-wide exception. Omission on create resolves to `true`; resolved connection responses always include the field.
     * @type {boolean}
     * @memberof As2PartnerEnvironmentResolved
     */
    requireSignature: boolean;
    /**
     * When `true` (the secure default), ModernEDI rejects non-MDN inbound messages for this environment unless their encrypted content was successfully decrypted. This policy belongs to the AS2 connection/environment and therefore applies to every attached partner on a shared or VAN connection. Set `false` only for a documented connection-wide exception. Omission on create resolves to `true`; resolved connection responses always include the field.
     * @type {boolean}
     * @memberof As2PartnerEnvironmentResolved
     */
    requireEncryption: boolean;
}

/**
 * Check if a given object implements the As2PartnerEnvironmentResolved interface.
 */
export function instanceOfAs2PartnerEnvironmentResolved(value: object): value is As2PartnerEnvironmentResolved {
    if (!('as2Identifier' in value) || value['as2Identifier'] === undefined) return false;
    if (!('publicCertificatePem' in value) || value['publicCertificatePem'] === undefined) return false;
    if (!('requireSignature' in value) || value['requireSignature'] === undefined) return false;
    if (!('requireEncryption' in value) || value['requireEncryption'] === undefined) return false;
    return true;
}

export function As2PartnerEnvironmentResolvedFromJSON(json: any): As2PartnerEnvironmentResolved {
    return As2PartnerEnvironmentResolvedFromJSONTyped(json, false);
}

export function As2PartnerEnvironmentResolvedFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2PartnerEnvironmentResolved {
    if (json == null) {
        return json;
    }
    return {

        'as2Identifier': json['as2Identifier'],
        'endpointUrl': json['endpointUrl'] === undefined ? undefined : json['endpointUrl'] === null ? null : json['endpointUrl'],
        'publicCertificatePem': json['publicCertificatePem'],
        'requireSignature': json['requireSignature'],
        'requireEncryption': json['requireEncryption'],
    };
}

export function As2PartnerEnvironmentResolvedToJSON(json: any): As2PartnerEnvironmentResolved {
    return As2PartnerEnvironmentResolvedToJSONTyped(json, false);
}

export function As2PartnerEnvironmentResolvedToJSONTyped(value?: As2PartnerEnvironmentResolved | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'as2Identifier': value['as2Identifier'],
        'endpointUrl': value['endpointUrl'],
        'publicCertificatePem': value['publicCertificatePem'],
        'requireSignature': value['requireSignature'],
        'requireEncryption': value['requireEncryption'],
    };
}
