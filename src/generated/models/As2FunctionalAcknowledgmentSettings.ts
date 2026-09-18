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
 * Optional automatic X12 acknowledgment MIME packaging for 997s and partner-enabled 999s. Omit the object or `messageStructure` to use `SIGNED_ENCRYPTED`.
 * @export
 * @interface As2FunctionalAcknowledgmentSettings
 */
export interface As2FunctionalAcknowledgmentSettings {
    /**
     * MIME signing, encryption, and compression structure used when ModernEDI automatically sends an X12 acknowledgment (997 or partner-enabled 999) to this partner.
     * @type {As2FunctionalAcknowledgmentSettingsMessageStructureEnum}
     * @memberof As2FunctionalAcknowledgmentSettings
     */
    messageStructure?: As2FunctionalAcknowledgmentSettingsMessageStructureEnum;
}


/**
 * @export
 */
export const As2FunctionalAcknowledgmentSettingsMessageStructureEnum = {
    Plain: 'PLAIN',
    Signed: 'SIGNED',
    Encrypted: 'ENCRYPTED',
    SignedEncrypted: 'SIGNED_ENCRYPTED',
    PlainCompressed: 'PLAIN_COMPRESSED',
    SignedCompressed: 'SIGNED_COMPRESSED',
    EncryptedCompressed: 'ENCRYPTED_COMPRESSED',
    EncryptedCompressedSigned: 'ENCRYPTED_COMPRESSED_SIGNED',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2FunctionalAcknowledgmentSettingsMessageStructureEnum = typeof As2FunctionalAcknowledgmentSettingsMessageStructureEnum[keyof typeof As2FunctionalAcknowledgmentSettingsMessageStructureEnum];


/**
 * Check if a given object implements the As2FunctionalAcknowledgmentSettings interface.
 */
export function instanceOfAs2FunctionalAcknowledgmentSettings(value: object): value is As2FunctionalAcknowledgmentSettings {
    return true;
}

export function As2FunctionalAcknowledgmentSettingsFromJSON(json: any): As2FunctionalAcknowledgmentSettings {
    return As2FunctionalAcknowledgmentSettingsFromJSONTyped(json, false);
}

export function As2FunctionalAcknowledgmentSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2FunctionalAcknowledgmentSettings {
    if (json == null) {
        return json;
    }
    return {

        'messageStructure': json['messageStructure'] == null ? undefined : json['messageStructure'],
    };
}

export function As2FunctionalAcknowledgmentSettingsToJSON(json: any): As2FunctionalAcknowledgmentSettings {
    return As2FunctionalAcknowledgmentSettingsToJSONTyped(json, false);
}

export function As2FunctionalAcknowledgmentSettingsToJSONTyped(value?: As2FunctionalAcknowledgmentSettings | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageStructure': value['messageStructure'],
    };
}
