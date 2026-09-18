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
 * Optional MDN interoperability controls. Omitted values default to unencrypted MDNs and synchronous error dispositions.
 * @export
 * @interface As2MdnSettings
 */
export interface As2MdnSettings {
    /**
     * When true, ModernEDI attempts to encrypt MDNs returned for inbound messages with the partner certificate and configured outbound encryption algorithm. If MDN encryption itself fails, ModernEDI returns an unencrypted error MDN so the partner still receives a disposition.
     * @type {boolean}
     * @memberof As2MdnSettings
     */
    encrypt?: boolean;
    /**
     * When true, an inbound processing failure or error is returned as a synchronous MDN even when the normal receipt flow is asynchronous.
     * @type {boolean}
     * @memberof As2MdnSettings
     */
    forceSynchronousForErrors?: boolean;
}

/**
 * Check if a given object implements the As2MdnSettings interface.
 */
export function instanceOfAs2MdnSettings(value: object): value is As2MdnSettings {
    return true;
}

export function As2MdnSettingsFromJSON(json: any): As2MdnSettings {
    return As2MdnSettingsFromJSONTyped(json, false);
}

export function As2MdnSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2MdnSettings {
    if (json == null) {
        return json;
    }
    return {

        'encrypt': json['encrypt'] == null ? undefined : json['encrypt'],
        'forceSynchronousForErrors': json['forceSynchronousForErrors'] == null ? undefined : json['forceSynchronousForErrors'],
    };
}

export function As2MdnSettingsToJSON(json: any): As2MdnSettings {
    return As2MdnSettingsToJSONTyped(json, false);
}

export function As2MdnSettingsToJSONTyped(value?: As2MdnSettings | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'encrypt': value['encrypt'],
        'forceSynchronousForErrors': value['forceSynchronousForErrors'],
    };
}
