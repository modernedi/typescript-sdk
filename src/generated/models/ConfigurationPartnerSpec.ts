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
import type { ConfigurationPartnerSeparatorSet } from './ConfigurationPartnerSeparatorSet.js';
import {
    ConfigurationPartnerSeparatorSetFromJSON,
    ConfigurationPartnerSeparatorSetFromJSONTyped,
    ConfigurationPartnerSeparatorSetToJSON,
    ConfigurationPartnerSeparatorSetToJSONTyped,
} from './ConfigurationPartnerSeparatorSet.js';
import type { ConfigurationPartnerSpecX12 } from './ConfigurationPartnerSpecX12.js';
import {
    ConfigurationPartnerSpecX12FromJSON,
    ConfigurationPartnerSpecX12FromJSONTyped,
    ConfigurationPartnerSpecX12ToJSON,
    ConfigurationPartnerSpecX12ToJSONTyped,
} from './ConfigurationPartnerSpecX12.js';

/**
 * Complete persisted partner configuration. It replaces `as2ConnectionId` with a portable `as2ConnectionKey` and includes advanced runtime compatibility settings that participate in workspace configuration.
 * @export
 * @interface ConfigurationPartnerSpec
 */
export interface ConfigurationPartnerSpec {
    /**
     * Unique partner display name in this workspace.
     * @type {string}
     * @memberof ConfigurationPartnerSpec
     */
    name: string;
    /**
     * Portable key of the referenced AS2 connection, or `null` for a detached map-authoring draft.
     * @type {string}
     * @memberof ConfigurationPartnerSpec
     */
    as2ConnectionKey: string | null;
    /**
     *
     * @type {ConfigurationPartnerSpecX12}
     * @memberof ConfigurationPartnerSpec
     */
    x12: ConfigurationPartnerSpecX12;
    /**
     * Partner EDI support address, or an empty string when unavailable.
     * @type {string}
     * @memberof ConfigurationPartnerSpec
     */
    ediSupportEmail: string;
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationPartnerSpec
     */
    carbonCopyOnly: boolean;
    /**
     * Whether eligible inbound documents receive a 999 instead of a 997.
     * @type {boolean}
     * @memberof ConfigurationPartnerSpec
     */
    implementationAcknowledgmentEnabled: boolean;
    /**
     *
     * @type {ConfigurationPartnerSpecUnmappedInboundPolicyEnum}
     * @memberof ConfigurationPartnerSpec
     */
    unmappedInboundPolicy: ConfigurationPartnerSpecUnmappedInboundPolicyEnum;
    /**
     *
     * @type {ConfigurationPartnerSpecSigningCertificateSlotEnum}
     * @memberof ConfigurationPartnerSpec
     */
    signingCertificateSlot: ConfigurationPartnerSpecSigningCertificateSlotEnum;
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationPartnerSpec
     */
    supportsNewlineAfterSegmentTerminator: boolean;
    /**
     * Optional AS2 HTTP User-Agent compatibility override.
     * @type {string}
     * @memberof ConfigurationPartnerSpec
     */
    overrideUserAgentString: string | null;
    /**
     * Optional X12 separator override, or `null` to use runtime defaults.
     * @type {ConfigurationPartnerSeparatorSet}
     * @memberof ConfigurationPartnerSpec
     */
    overrideSeparatorSet: ConfigurationPartnerSeparatorSet | null;
    /**
     * Closed runtime compatibility map from supported X12 message-type names to GS08 version overrides. An empty object means no overrides.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof ConfigurationPartnerSpec
     */
    messageTypeGsVersionOverrides: { [key: string]: string | undefined; };
}


/**
 * @export
 */
export const ConfigurationPartnerSpecUnmappedInboundPolicyEnum = {
    MappedOnly: 'MAPPED_ONLY',
    PassthroughRawX12: 'PASSTHROUGH_RAW_X12',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPartnerSpecUnmappedInboundPolicyEnum = typeof ConfigurationPartnerSpecUnmappedInboundPolicyEnum[keyof typeof ConfigurationPartnerSpecUnmappedInboundPolicyEnum];

/**
 * @export
 */
export const ConfigurationPartnerSpecSigningCertificateSlotEnum = {
    Active: 'active',
    Next: 'next',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPartnerSpecSigningCertificateSlotEnum = typeof ConfigurationPartnerSpecSigningCertificateSlotEnum[keyof typeof ConfigurationPartnerSpecSigningCertificateSlotEnum];


/**
 * Check if a given object implements the ConfigurationPartnerSpec interface.
 */
export function instanceOfConfigurationPartnerSpec(value: object): value is ConfigurationPartnerSpec {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('as2ConnectionKey' in value) || value['as2ConnectionKey'] === undefined) return false;
    if (!('x12' in value) || value['x12'] === undefined) return false;
    if (!('ediSupportEmail' in value) || value['ediSupportEmail'] === undefined) return false;
    if (!('carbonCopyOnly' in value) || value['carbonCopyOnly'] === undefined) return false;
    if (!('implementationAcknowledgmentEnabled' in value) || value['implementationAcknowledgmentEnabled'] === undefined) return false;
    if (!('unmappedInboundPolicy' in value) || value['unmappedInboundPolicy'] === undefined) return false;
    if (!('signingCertificateSlot' in value) || value['signingCertificateSlot'] === undefined) return false;
    if (!('supportsNewlineAfterSegmentTerminator' in value) || value['supportsNewlineAfterSegmentTerminator'] === undefined) return false;
    if (!('overrideUserAgentString' in value) || value['overrideUserAgentString'] === undefined) return false;
    if (!('overrideSeparatorSet' in value) || value['overrideSeparatorSet'] === undefined) return false;
    if (!('messageTypeGsVersionOverrides' in value) || value['messageTypeGsVersionOverrides'] === undefined) return false;
    return true;
}

export function ConfigurationPartnerSpecFromJSON(json: any): ConfigurationPartnerSpec {
    return ConfigurationPartnerSpecFromJSONTyped(json, false);
}

export function ConfigurationPartnerSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPartnerSpec {
    if (json == null) {
        return json;
    }
    return {

        'name': json['name'],
        'as2ConnectionKey': json['as2ConnectionKey'],
        'x12': ConfigurationPartnerSpecX12FromJSON(json['x12']),
        'ediSupportEmail': json['ediSupportEmail'],
        'carbonCopyOnly': json['carbonCopyOnly'],
        'implementationAcknowledgmentEnabled': json['implementationAcknowledgmentEnabled'],
        'unmappedInboundPolicy': json['unmappedInboundPolicy'],
        'signingCertificateSlot': json['signingCertificateSlot'],
        'supportsNewlineAfterSegmentTerminator': json['supportsNewlineAfterSegmentTerminator'],
        'overrideUserAgentString': json['overrideUserAgentString'],
        'overrideSeparatorSet': ConfigurationPartnerSeparatorSetFromJSON(json['overrideSeparatorSet']),
        'messageTypeGsVersionOverrides': json['messageTypeGsVersionOverrides'],
    };
}

export function ConfigurationPartnerSpecToJSON(json: any): ConfigurationPartnerSpec {
    return ConfigurationPartnerSpecToJSONTyped(json, false);
}

export function ConfigurationPartnerSpecToJSONTyped(value?: ConfigurationPartnerSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'name': value['name'],
        'as2ConnectionKey': value['as2ConnectionKey'],
        'x12': ConfigurationPartnerSpecX12ToJSON(value['x12']),
        'ediSupportEmail': value['ediSupportEmail'],
        'carbonCopyOnly': value['carbonCopyOnly'],
        'implementationAcknowledgmentEnabled': value['implementationAcknowledgmentEnabled'],
        'unmappedInboundPolicy': value['unmappedInboundPolicy'],
        'signingCertificateSlot': value['signingCertificateSlot'],
        'supportsNewlineAfterSegmentTerminator': value['supportsNewlineAfterSegmentTerminator'],
        'overrideUserAgentString': value['overrideUserAgentString'],
        'overrideSeparatorSet': ConfigurationPartnerSeparatorSetToJSON(value['overrideSeparatorSet']),
        'messageTypeGsVersionOverrides': value['messageTypeGsVersionOverrides'],
    };
}
