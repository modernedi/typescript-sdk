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
 * Optional outbound AS2 algorithms and MIME-compatibility controls. Each omitted field receives its documented default.
 * @export
 * @interface As2OutboundTransportSettings
 */
export interface As2OutboundTransportSettings {
    /**
     * CMS/S/MIME signature algorithm ModernEDI uses for signed outbound payloads, signed automatic X12 acknowledgments, and signed MDNs. Prefer `SHA256WITHRSA`; use `SHA1WITHRSA` only for a legacy partner that cannot verify SHA-2 signatures.
     * @type {As2OutboundTransportSettingsSigningAlgorithmEnum}
     * @memberof As2OutboundTransportSettings
     */
    signingAlgorithm?: As2OutboundTransportSettingsSigningAlgorithmEnum;
    /**
     * CMS content-encryption algorithm for outbound AS2 payloads and any encrypted acknowledgments. Prefer `AES256_CBC`; `DES_EDE3_CBC` exists only for legacy partner interoperability.
     * @type {As2OutboundTransportSettingsEncryptionAlgorithmEnum}
     * @memberof As2OutboundTransportSettings
     */
    encryptionAlgorithm?: As2OutboundTransportSettingsEncryptionAlgorithmEnum;
    /**
     * Compression algorithm used when an outbound AS2 message structure includes compression. `ZLIB` is the only supported customer-selectable value.
     * @type {As2OutboundTransportSettingsCompressionAlgorithmEnum}
     * @memberof As2OutboundTransportSettings
     */
    compressionAlgorithm?: As2OutboundTransportSettingsCompressionAlgorithmEnum;
    /**
     * Digest algorithm used to calculate and store ModernEDI's local content MIC for outbound X12 payloads and automatic X12 acknowledgments. This does not choose the CMS signature digest (`signingAlgorithm` does), the signed MIME `micalg` token format (`micAlgorithmFormat` does), or the `Received-content-MIC` algorithm used when ModernEDI returns an MDN for an inbound message; that comes from the sender's receipt request.
     * @type {As2OutboundTransportSettingsMicAlgorithmEnum}
     * @memberof As2OutboundTransportSettings
     */
    micAlgorithm?: As2OutboundTransportSettingsMicAlgorithmEnum;
    /**
     * Advanced partner-compatibility override for the S/MIME `Content-Type` `micalg` parameter on every signed MIME entity ModernEDI generates for this partner, including outbound X12 messages, automatic signed X12 acknowledgments, and the outer wrapper of signed MDNs. `RFC_5751` uses the newer hyphenated token format—for example, `sha-256`—while `RFC_3851` uses the older token `sha256`. Omit this field to use the compatibility-first `RFC_3851` default. This setting changes only the serialized notation of the signature digest selected by `signingAlgorithm` in that MIME parameter; it does not change the digest itself or the algorithm named inside `Received-content-MIC`. Change it only when the partner's AS2 profile or interoperability testing requires a particular token format.
     * @type {As2OutboundTransportSettingsMicAlgorithmFormatEnum}
     * @memberof As2OutboundTransportSettings
     */
    micAlgorithmFormat?: As2OutboundTransportSettingsMicAlgorithmFormatEnum;
}


/**
 * @export
 */
export const As2OutboundTransportSettingsSigningAlgorithmEnum = {
    Sha256Withrsa: 'SHA256WITHRSA',
    Sha384Withrsa: 'SHA384WITHRSA',
    Sha512Withrsa: 'SHA512WITHRSA',
    Sha1Withrsa: 'SHA1WITHRSA',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2OutboundTransportSettingsSigningAlgorithmEnum = typeof As2OutboundTransportSettingsSigningAlgorithmEnum[keyof typeof As2OutboundTransportSettingsSigningAlgorithmEnum];

/**
 * @export
 */
export const As2OutboundTransportSettingsEncryptionAlgorithmEnum = {
    Aes256Cbc: 'AES256_CBC',
    Aes128Cbc: 'AES128_CBC',
    DesEde3Cbc: 'DES_EDE3_CBC',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2OutboundTransportSettingsEncryptionAlgorithmEnum = typeof As2OutboundTransportSettingsEncryptionAlgorithmEnum[keyof typeof As2OutboundTransportSettingsEncryptionAlgorithmEnum];

/**
 * @export
 */
export const As2OutboundTransportSettingsCompressionAlgorithmEnum = {
    Zlib: 'ZLIB',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2OutboundTransportSettingsCompressionAlgorithmEnum = typeof As2OutboundTransportSettingsCompressionAlgorithmEnum[keyof typeof As2OutboundTransportSettingsCompressionAlgorithmEnum];

/**
 * @export
 */
export const As2OutboundTransportSettingsMicAlgorithmEnum = {
    Sha1: 'SHA_1',
    Sha256: 'SHA_256',
    Sha512: 'SHA_512',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2OutboundTransportSettingsMicAlgorithmEnum = typeof As2OutboundTransportSettingsMicAlgorithmEnum[keyof typeof As2OutboundTransportSettingsMicAlgorithmEnum];

/**
 * @export
 */
export const As2OutboundTransportSettingsMicAlgorithmFormatEnum = {
    Rfc5751: 'RFC_5751',
    Rfc3851: 'RFC_3851',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2OutboundTransportSettingsMicAlgorithmFormatEnum = typeof As2OutboundTransportSettingsMicAlgorithmFormatEnum[keyof typeof As2OutboundTransportSettingsMicAlgorithmFormatEnum];


/**
 * Check if a given object implements the As2OutboundTransportSettings interface.
 */
export function instanceOfAs2OutboundTransportSettings(value: object): value is As2OutboundTransportSettings {
    return true;
}

export function As2OutboundTransportSettingsFromJSON(json: any): As2OutboundTransportSettings {
    return As2OutboundTransportSettingsFromJSONTyped(json, false);
}

export function As2OutboundTransportSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2OutboundTransportSettings {
    if (json == null) {
        return json;
    }
    return {

        'signingAlgorithm': json['signingAlgorithm'] == null ? undefined : json['signingAlgorithm'],
        'encryptionAlgorithm': json['encryptionAlgorithm'] == null ? undefined : json['encryptionAlgorithm'],
        'compressionAlgorithm': json['compressionAlgorithm'] == null ? undefined : json['compressionAlgorithm'],
        'micAlgorithm': json['micAlgorithm'] == null ? undefined : json['micAlgorithm'],
        'micAlgorithmFormat': json['micAlgorithmFormat'] == null ? undefined : json['micAlgorithmFormat'],
    };
}

export function As2OutboundTransportSettingsToJSON(json: any): As2OutboundTransportSettings {
    return As2OutboundTransportSettingsToJSONTyped(json, false);
}

export function As2OutboundTransportSettingsToJSONTyped(value?: As2OutboundTransportSettings | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'signingAlgorithm': value['signingAlgorithm'],
        'encryptionAlgorithm': value['encryptionAlgorithm'],
        'compressionAlgorithm': value['compressionAlgorithm'],
        'micAlgorithm': value['micAlgorithm'],
        'micAlgorithmFormat': value['micAlgorithmFormat'],
    };
}
