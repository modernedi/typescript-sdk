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
import type { As2NetworkCapability } from './As2NetworkCapability.js';
import {
    As2NetworkCapabilityFromJSON,
    As2NetworkCapabilityFromJSONTyped,
    As2NetworkCapabilityToJSON,
    As2NetworkCapabilityToJSONTyped,
} from './As2NetworkCapability.js';

/**
 * Current tenant-runtime network and certificate provisioning state.
 * @export
 * @interface As2NetworkProfile
 */
export interface As2NetworkProfile {
    /**
     * Latest tenant-runtime provisioning state, or `null` before a status has been recorded.
     * @type {string}
     * @memberof As2NetworkProfile
     */
    provisioningStatus: string | null;
    /**
     * Latest TLS certificate deployment state for the AS2 hostname, or `null` when unavailable.
     * @type {string}
     * @memberof As2NetworkProfile
     */
    tlsCertificateStatus: string | null;
    /**
     *
     * @type {As2NetworkCapability}
     * @memberof As2NetworkProfile
     */
    staticInbound: As2NetworkCapability;
    /**
     *
     * @type {As2NetworkCapability}
     * @memberof As2NetworkProfile
     */
    staticOutbound: As2NetworkCapability;
}

/**
 * Check if a given object implements the As2NetworkProfile interface.
 */
export function instanceOfAs2NetworkProfile(value: object): value is As2NetworkProfile {
    if (!('provisioningStatus' in value) || value['provisioningStatus'] === undefined) return false;
    if (!('tlsCertificateStatus' in value) || value['tlsCertificateStatus'] === undefined) return false;
    if (!('staticInbound' in value) || value['staticInbound'] === undefined) return false;
    if (!('staticOutbound' in value) || value['staticOutbound'] === undefined) return false;
    return true;
}

export function As2NetworkProfileFromJSON(json: any): As2NetworkProfile {
    return As2NetworkProfileFromJSONTyped(json, false);
}

export function As2NetworkProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2NetworkProfile {
    if (json == null) {
        return json;
    }
    return {

        'provisioningStatus': json['provisioningStatus'],
        'tlsCertificateStatus': json['tlsCertificateStatus'],
        'staticInbound': As2NetworkCapabilityFromJSON(json['staticInbound']),
        'staticOutbound': As2NetworkCapabilityFromJSON(json['staticOutbound']),
    };
}

export function As2NetworkProfileToJSON(json: any): As2NetworkProfile {
    return As2NetworkProfileToJSONTyped(json, false);
}

export function As2NetworkProfileToJSONTyped(value?: As2NetworkProfile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'provisioningStatus': value['provisioningStatus'],
        'tlsCertificateStatus': value['tlsCertificateStatus'],
        'staticInbound': As2NetworkCapabilityToJSON(value['staticInbound']),
        'staticOutbound': As2NetworkCapabilityToJSON(value['staticOutbound']),
    };
}
