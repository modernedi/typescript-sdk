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
 * Fully resolved Message Disposition Notification compatibility settings.
 * @export
 * @interface As2ResolvedMdnSettings
 */
export interface As2ResolvedMdnSettings {
    /**
     * When true, ModernEDI attempts to encrypt MDNs returned for inbound messages with the partner certificate and configured outbound encryption algorithm. If MDN encryption itself fails, ModernEDI returns an unencrypted error MDN so the partner still receives a disposition.
     * @type {boolean}
     * @memberof As2ResolvedMdnSettings
     */
    encrypt: boolean;
    /**
     * When true, an inbound processing failure or error is returned as a synchronous MDN even when the normal receipt flow is asynchronous.
     * @type {boolean}
     * @memberof As2ResolvedMdnSettings
     */
    forceSynchronousForErrors: boolean;
}

/**
 * Check if a given object implements the As2ResolvedMdnSettings interface.
 */
export function instanceOfAs2ResolvedMdnSettings(value: object): value is As2ResolvedMdnSettings {
    if (!('encrypt' in value) || value['encrypt'] === undefined) return false;
    if (!('forceSynchronousForErrors' in value) || value['forceSynchronousForErrors'] === undefined) return false;
    return true;
}

export function As2ResolvedMdnSettingsFromJSON(json: any): As2ResolvedMdnSettings {
    return As2ResolvedMdnSettingsFromJSONTyped(json, false);
}

export function As2ResolvedMdnSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ResolvedMdnSettings {
    if (json == null) {
        return json;
    }
    return {

        'encrypt': json['encrypt'],
        'forceSynchronousForErrors': json['forceSynchronousForErrors'],
    };
}

export function As2ResolvedMdnSettingsToJSON(json: any): As2ResolvedMdnSettings {
    return As2ResolvedMdnSettingsToJSONTyped(json, false);
}

export function As2ResolvedMdnSettingsToJSONTyped(value?: As2ResolvedMdnSettings | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'encrypt': value['encrypt'],
        'forceSynchronousForErrors': value['forceSynchronousForErrors'],
    };
}
