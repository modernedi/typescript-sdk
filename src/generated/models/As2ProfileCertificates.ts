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
import type { As2PublicCertificate } from './As2PublicCertificate.js';
import {
    As2PublicCertificateFromJSON,
    As2PublicCertificateFromJSONTyped,
    As2PublicCertificateToJSON,
    As2PublicCertificateToJSONTyped,
} from './As2PublicCertificate.js';

/**
 * Public signing/encryption certificates ModernEDI may present for this workspace.
 * @export
 * @interface As2ProfileCertificates
 */
export interface As2ProfileCertificates {
    /**
     * Current certificate to configure at partners, or `null` before certificate provisioning completes.
     * @type {As2PublicCertificate}
     * @memberof As2ProfileCertificates
     */
    active: As2PublicCertificate | null;
    /**
     * Staged rollover certificate, or `null` when no certificate rotation is in progress.
     * @type {As2PublicCertificate}
     * @memberof As2ProfileCertificates
     */
    next: As2PublicCertificate | null;
}

/**
 * Check if a given object implements the As2ProfileCertificates interface.
 */
export function instanceOfAs2ProfileCertificates(value: object): value is As2ProfileCertificates {
    if (!('active' in value) || value['active'] === undefined) return false;
    if (!('next' in value) || value['next'] === undefined) return false;
    return true;
}

export function As2ProfileCertificatesFromJSON(json: any): As2ProfileCertificates {
    return As2ProfileCertificatesFromJSONTyped(json, false);
}

export function As2ProfileCertificatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ProfileCertificates {
    if (json == null) {
        return json;
    }
    return {

        'active': As2PublicCertificateFromJSON(json['active']),
        'next': As2PublicCertificateFromJSON(json['next']),
    };
}

export function As2ProfileCertificatesToJSON(json: any): As2ProfileCertificates {
    return As2ProfileCertificatesToJSONTyped(json, false);
}

export function As2ProfileCertificatesToJSONTyped(value?: As2ProfileCertificates | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'active': As2PublicCertificateToJSON(value['active']),
        'next': As2PublicCertificateToJSON(value['next']),
    };
}
