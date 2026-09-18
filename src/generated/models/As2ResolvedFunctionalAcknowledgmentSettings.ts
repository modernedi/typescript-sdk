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
 * Fully resolved MIME packaging for automatic X12 acknowledgments (997 or partner-enabled 999).
 * @export
 * @interface As2ResolvedFunctionalAcknowledgmentSettings
 */
export interface As2ResolvedFunctionalAcknowledgmentSettings {
    /**
     * MIME signing, encryption, and compression structure used when ModernEDI automatically sends an X12 acknowledgment (997 or partner-enabled 999) to this partner.
     * @type {As2ResolvedFunctionalAcknowledgmentSettingsMessageStructureEnum}
     * @memberof As2ResolvedFunctionalAcknowledgmentSettings
     */
    messageStructure: As2ResolvedFunctionalAcknowledgmentSettingsMessageStructureEnum;
}


/**
 * @export
 */
export const As2ResolvedFunctionalAcknowledgmentSettingsMessageStructureEnum = {
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
export type As2ResolvedFunctionalAcknowledgmentSettingsMessageStructureEnum = typeof As2ResolvedFunctionalAcknowledgmentSettingsMessageStructureEnum[keyof typeof As2ResolvedFunctionalAcknowledgmentSettingsMessageStructureEnum];


/**
 * Check if a given object implements the As2ResolvedFunctionalAcknowledgmentSettings interface.
 */
export function instanceOfAs2ResolvedFunctionalAcknowledgmentSettings(value: object): value is As2ResolvedFunctionalAcknowledgmentSettings {
    if (!('messageStructure' in value) || value['messageStructure'] === undefined) return false;
    return true;
}

export function As2ResolvedFunctionalAcknowledgmentSettingsFromJSON(json: any): As2ResolvedFunctionalAcknowledgmentSettings {
    return As2ResolvedFunctionalAcknowledgmentSettingsFromJSONTyped(json, false);
}

export function As2ResolvedFunctionalAcknowledgmentSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ResolvedFunctionalAcknowledgmentSettings {
    if (json == null) {
        return json;
    }
    return {

        'messageStructure': json['messageStructure'],
    };
}

export function As2ResolvedFunctionalAcknowledgmentSettingsToJSON(json: any): As2ResolvedFunctionalAcknowledgmentSettings {
    return As2ResolvedFunctionalAcknowledgmentSettingsToJSONTyped(json, false);
}

export function As2ResolvedFunctionalAcknowledgmentSettingsToJSONTyped(value?: As2ResolvedFunctionalAcknowledgmentSettings | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'messageStructure': value['messageStructure'],
    };
}
