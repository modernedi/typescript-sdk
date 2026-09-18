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
 * Fully resolved outbound algorithms and compatibility settings; all fields are present in responses.
 * @export
 * @interface As2ResolvedOutboundSettings
 */
export interface As2ResolvedOutboundSettings {
    /**
     * CMS/S/MIME signature algorithm ModernEDI uses for signed outbound payloads, signed automatic X12 acknowledgments, and signed MDNs. Prefer `SHA256WITHRSA`; use `SHA1WITHRSA` only for a legacy partner that cannot verify SHA-2 signatures.
     * @type {As2ResolvedOutboundSettingsSigningAlgorithmEnum}
     * @memberof As2ResolvedOutboundSettings
     */
    signingAlgorithm: As2ResolvedOutboundSettingsSigningAlgorithmEnum;
    /**
     * CMS content-encryption algorithm for outbound AS2 payloads and any encrypted acknowledgments. Prefer `AES256_CBC`; `DES_EDE3_CBC` exists only for legacy partner interoperability.
     * @type {As2ResolvedOutboundSettingsEncryptionAlgorithmEnum}
     * @memberof As2ResolvedOutboundSettings
     */
    encryptionAlgorithm: As2ResolvedOutboundSettingsEncryptionAlgorithmEnum;
    /**
     * Compression algorithm used when an outbound AS2 message structure includes compression. `ZLIB` is the only supported customer-selectable value.
     * @type {As2ResolvedOutboundSettingsCompressionAlgorithmEnum}
     * @memberof As2ResolvedOutboundSettings
     */
    compressionAlgorithm: As2ResolvedOutboundSettingsCompressionAlgorithmEnum;
    /**
     * Digest algorithm used to calculate and store ModernEDI's local content MIC for outbound X12 payloads and automatic X12 acknowledgments. This does not choose the CMS signature digest (`signingAlgorithm` does), the signed MIME `micalg` token format (`micAlgorithmFormat` does), or the `Received-content-MIC` algorithm used when ModernEDI returns an MDN for an inbound message; that comes from the sender's receipt request.
     * @type {As2ResolvedOutboundSettingsMicAlgorithmEnum}
     * @memberof As2ResolvedOutboundSettings
     */
    micAlgorithm: As2ResolvedOutboundSettingsMicAlgorithmEnum;
    /**
     * Advanced partner-compatibility override for the S/MIME `Content-Type` `micalg` parameter on every signed MIME entity ModernEDI generates for this partner, including outbound X12 messages, automatic signed X12 acknowledgments, and the outer wrapper of signed MDNs. `RFC_5751` uses the newer hyphenated token format—for example, `sha-256`—while `RFC_3851` uses the older token `sha256`. Omit this field to use the compatibility-first `RFC_3851` default. This setting changes only the serialized notation of the signature digest selected by `signingAlgorithm` in that MIME parameter; it does not change the digest itself or the algorithm named inside `Received-content-MIC`. Change it only when the partner's AS2 profile or interoperability testing requires a particular token format.
     * @type {As2ResolvedOutboundSettingsMicAlgorithmFormatEnum}
     * @memberof As2ResolvedOutboundSettings
     */
    micAlgorithmFormat: As2ResolvedOutboundSettingsMicAlgorithmFormatEnum;
}


/**
 * @export
 */
export const As2ResolvedOutboundSettingsSigningAlgorithmEnum = {
    Sha256Withrsa: 'SHA256WITHRSA',
    Sha384Withrsa: 'SHA384WITHRSA',
    Sha512Withrsa: 'SHA512WITHRSA',
    Sha1Withrsa: 'SHA1WITHRSA',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2ResolvedOutboundSettingsSigningAlgorithmEnum = typeof As2ResolvedOutboundSettingsSigningAlgorithmEnum[keyof typeof As2ResolvedOutboundSettingsSigningAlgorithmEnum];

/**
 * @export
 */
export const As2ResolvedOutboundSettingsEncryptionAlgorithmEnum = {
    Aes256Cbc: 'AES256_CBC',
    Aes128Cbc: 'AES128_CBC',
    DesEde3Cbc: 'DES_EDE3_CBC',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2ResolvedOutboundSettingsEncryptionAlgorithmEnum = typeof As2ResolvedOutboundSettingsEncryptionAlgorithmEnum[keyof typeof As2ResolvedOutboundSettingsEncryptionAlgorithmEnum];

/**
 * @export
 */
export const As2ResolvedOutboundSettingsCompressionAlgorithmEnum = {
    Zlib: 'ZLIB',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2ResolvedOutboundSettingsCompressionAlgorithmEnum = typeof As2ResolvedOutboundSettingsCompressionAlgorithmEnum[keyof typeof As2ResolvedOutboundSettingsCompressionAlgorithmEnum];

/**
 * @export
 */
export const As2ResolvedOutboundSettingsMicAlgorithmEnum = {
    Sha1: 'SHA_1',
    Sha256: 'SHA_256',
    Sha512: 'SHA_512',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2ResolvedOutboundSettingsMicAlgorithmEnum = typeof As2ResolvedOutboundSettingsMicAlgorithmEnum[keyof typeof As2ResolvedOutboundSettingsMicAlgorithmEnum];

/**
 * @export
 */
export const As2ResolvedOutboundSettingsMicAlgorithmFormatEnum = {
    Rfc5751: 'RFC_5751',
    Rfc3851: 'RFC_3851',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2ResolvedOutboundSettingsMicAlgorithmFormatEnum = typeof As2ResolvedOutboundSettingsMicAlgorithmFormatEnum[keyof typeof As2ResolvedOutboundSettingsMicAlgorithmFormatEnum];


/**
 * Check if a given object implements the As2ResolvedOutboundSettings interface.
 */
export function instanceOfAs2ResolvedOutboundSettings(value: object): value is As2ResolvedOutboundSettings {
    if (!('signingAlgorithm' in value) || value['signingAlgorithm'] === undefined) return false;
    if (!('encryptionAlgorithm' in value) || value['encryptionAlgorithm'] === undefined) return false;
    if (!('compressionAlgorithm' in value) || value['compressionAlgorithm'] === undefined) return false;
    if (value['compressionAlgorithm'] !== 'ZLIB') return false;

    if (!('micAlgorithm' in value) || value['micAlgorithm'] === undefined) return false;
    if (!('micAlgorithmFormat' in value) || value['micAlgorithmFormat'] === undefined) return false;
    return true;
}

export function As2ResolvedOutboundSettingsFromJSON(json: any): As2ResolvedOutboundSettings {
    return As2ResolvedOutboundSettingsFromJSONTyped(json, false);
}

export function As2ResolvedOutboundSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ResolvedOutboundSettings {
    if (json == null) {
        return json;
    }
    return {

        'signingAlgorithm': json['signingAlgorithm'],
        'encryptionAlgorithm': json['encryptionAlgorithm'],
        'compressionAlgorithm': json['compressionAlgorithm'],
        'micAlgorithm': json['micAlgorithm'],
        'micAlgorithmFormat': json['micAlgorithmFormat'],
    };
}

export function As2ResolvedOutboundSettingsToJSON(json: any): As2ResolvedOutboundSettings {
    return As2ResolvedOutboundSettingsToJSONTyped(json, false);
}

export function As2ResolvedOutboundSettingsToJSONTyped(value?: As2ResolvedOutboundSettings | null, ignoreDiscriminator: boolean = false): any {
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
