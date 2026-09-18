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
import type { IntegrationPartnerX12 } from './IntegrationPartnerX12.js';
import {
    IntegrationPartnerX12FromJSON,
    IntegrationPartnerX12FromJSONTyped,
    IntegrationPartnerX12ToJSON,
    IntegrationPartnerX12ToJSONTyped,
} from './IntegrationPartnerX12.js';
import type { ConfigurationPartnerSeparatorSet } from './ConfigurationPartnerSeparatorSet.js';
import {
    ConfigurationPartnerSeparatorSetFromJSON,
    ConfigurationPartnerSeparatorSetFromJSONTyped,
    ConfigurationPartnerSeparatorSetToJSON,
    ConfigurationPartnerSeparatorSetToJSONTyped,
} from './ConfigurationPartnerSeparatorSet.js';

/**
 *
 * @export
 * @interface PartnerConfiguration
 */
export interface PartnerConfiguration {
    /**
     * Stable tenant-scoped partner id. Use this value as the `partnerId` query parameter for exact outbound map selection.
     * @type {number}
     * @memberof PartnerConfiguration
     */
    partnerId: number;
    /**
     * Configured partner display name. Use `partnerId` for outbound selection.
     * @type {string}
     * @memberof PartnerConfiguration
     */
    name: string;
    /**
     * Tenant-scoped partner AS2 connection id, or `null` while connection details are not yet available.
     * @type {number}
     * @memberof PartnerConfiguration
     */
    as2ConnectionId: number | null;
    /**
     * True when this partner is attached to an AS2 connection profile. The profile may be inbound-only and therefore is not necessarily ready for outbound delivery.
     * @type {boolean}
     * @memberof PartnerConfiguration
     */
    as2ConnectionConfigured: boolean;
    /**
     * True when the partner has a complete production AS2 identifier and certificate, destination URL, and X12 identity, so outbound production delivery can be attempted.
     * @type {boolean}
     * @memberof PartnerConfiguration
     */
    productionReady: boolean;
    /**
     * True when the partner has a complete test AS2 identifier and certificate, destination URL, and X12 identity, so outbound test delivery can be attempted. False is valid for a production-only or inbound-only partner.
     * @type {boolean}
     * @memberof PartnerConfiguration
     */
    testReady: boolean;
    /**
     * True when the partner is intended only as a carbon-copy recipient in the workspace.
     * @type {boolean}
     * @memberof PartnerConfiguration
     */
    carbonCopyOnly: boolean;
    /**
     * Whether ModernEDI sends X12 999 implementation acknowledgments for this partner's 005010-and-later documents instead of automatic 997s. Earlier X12 versions continue to receive 997s. Enable this only when the partner requests 999s. A 999 reports X12 syntax and relational validation. It does not indicate semantic or business acceptance, and it is not HIPAA implementation-guide certification.
     *
     * @type {boolean}
     * @memberof PartnerConfiguration
     */
    implementationAcknowledgmentEnabled: boolean;
    /**
     * Partner EDI support address, or an empty string when one has not been recorded.
     * @type {string}
     * @memberof PartnerConfiguration
     */
    ediSupportEmail: string;
    /**
     * Whether inbound transactions without a matching map are rejected from mapped-output delivery or persisted as raw X12.
     * @type {PartnerConfigurationUnmappedInboundPolicyEnum}
     * @memberof PartnerConfiguration
     */
    unmappedInboundPolicy: PartnerConfigurationUnmappedInboundPolicyEnum;
    /**
     * Tenant certificate slot ModernEDI uses to sign AS2 traffic for this partner.
     * @type {PartnerConfigurationSigningCertificateSlotEnum}
     * @memberof PartnerConfiguration
     */
    signingCertificateSlot: PartnerConfigurationSigningCertificateSlotEnum;
    /**
     * Whether ModernEDI may emit a newline after each X12 segment terminator for this partner.
     * @type {boolean}
     * @memberof PartnerConfiguration
     */
    supportsNewlineAfterSegmentTerminator: boolean;
    /**
     * Optional AS2 HTTP User-Agent compatibility override, or `null` to use the ModernEDI default.
     * @type {string}
     * @memberof PartnerConfiguration
     */
    overrideUserAgentString: string | null;
    /**
     * Optional X12 separator override, or `null` to use the separators selected by the mapping runtime.
     * @type {ConfigurationPartnerSeparatorSet}
     * @memberof PartnerConfiguration
     */
    overrideSeparatorSet: ConfigurationPartnerSeparatorSet | null;
    /**
     * Map from functional-group type to the exact GS08 version string required by this partner. An empty object uses each map's normal X12 version.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof PartnerConfiguration
     */
    messageTypeGsVersionOverrides: { [key: string]: string | undefined; };
    /**
     *
     * @type {IntegrationPartnerX12}
     * @memberof PartnerConfiguration
     */
    x12: IntegrationPartnerX12;
    /**
     * Quoted SHA-256 ETag over mutable partner configuration, present on list and configuration detail responses. Derived `as2ConnectionConfigured`, `productionReady`, and `testReady` values are excluded; changes to the referenced AS2 connection are guarded by that connection's own ETag.
     * @type {string}
     * @memberof PartnerConfiguration
     */
    etag: string;
}


/**
 * @export
 */
export const PartnerConfigurationUnmappedInboundPolicyEnum = {
    MappedOnly: 'MAPPED_ONLY',
    PassthroughRawX12: 'PASSTHROUGH_RAW_X12',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PartnerConfigurationUnmappedInboundPolicyEnum = typeof PartnerConfigurationUnmappedInboundPolicyEnum[keyof typeof PartnerConfigurationUnmappedInboundPolicyEnum];

/**
 * @export
 */
export const PartnerConfigurationSigningCertificateSlotEnum = {
    Active: 'active',
    Next: 'next',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PartnerConfigurationSigningCertificateSlotEnum = typeof PartnerConfigurationSigningCertificateSlotEnum[keyof typeof PartnerConfigurationSigningCertificateSlotEnum];


/**
 * Check if a given object implements the PartnerConfiguration interface.
 */
export function instanceOfPartnerConfiguration(value: object): value is PartnerConfiguration {
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('as2ConnectionId' in value) || value['as2ConnectionId'] === undefined) return false;
    if (!('as2ConnectionConfigured' in value) || value['as2ConnectionConfigured'] === undefined) return false;
    if (!('productionReady' in value) || value['productionReady'] === undefined) return false;
    if (!('testReady' in value) || value['testReady'] === undefined) return false;
    if (!('carbonCopyOnly' in value) || value['carbonCopyOnly'] === undefined) return false;
    if (!('implementationAcknowledgmentEnabled' in value) || value['implementationAcknowledgmentEnabled'] === undefined) return false;
    if (!('ediSupportEmail' in value) || value['ediSupportEmail'] === undefined) return false;
    if (!('unmappedInboundPolicy' in value) || value['unmappedInboundPolicy'] === undefined) return false;
    if (!('signingCertificateSlot' in value) || value['signingCertificateSlot'] === undefined) return false;
    if (!('supportsNewlineAfterSegmentTerminator' in value) || value['supportsNewlineAfterSegmentTerminator'] === undefined) return false;
    if (!('overrideUserAgentString' in value) || value['overrideUserAgentString'] === undefined) return false;
    if (!('overrideSeparatorSet' in value) || value['overrideSeparatorSet'] === undefined) return false;
    if (!('messageTypeGsVersionOverrides' in value) || value['messageTypeGsVersionOverrides'] === undefined) return false;
    if (!('x12' in value) || value['x12'] === undefined) return false;
    if (!('etag' in value) || value['etag'] === undefined) return false;
    return true;
}

export function PartnerConfigurationFromJSON(json: any): PartnerConfiguration {
    return PartnerConfigurationFromJSONTyped(json, false);
}

export function PartnerConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerConfiguration {
    if (json == null) {
        return json;
    }
    return {

        'partnerId': json['partnerId'],
        'name': json['name'],
        'as2ConnectionId': json['as2ConnectionId'],
        'as2ConnectionConfigured': json['as2ConnectionConfigured'],
        'productionReady': json['productionReady'],
        'testReady': json['testReady'],
        'carbonCopyOnly': json['carbonCopyOnly'],
        'implementationAcknowledgmentEnabled': json['implementationAcknowledgmentEnabled'],
        'ediSupportEmail': json['ediSupportEmail'],
        'unmappedInboundPolicy': json['unmappedInboundPolicy'],
        'signingCertificateSlot': json['signingCertificateSlot'],
        'supportsNewlineAfterSegmentTerminator': json['supportsNewlineAfterSegmentTerminator'],
        'overrideUserAgentString': json['overrideUserAgentString'],
        'overrideSeparatorSet': ConfigurationPartnerSeparatorSetFromJSON(json['overrideSeparatorSet']),
        'messageTypeGsVersionOverrides': json['messageTypeGsVersionOverrides'],
        'x12': IntegrationPartnerX12FromJSON(json['x12']),
        'etag': json['etag'],
    };
}

export function PartnerConfigurationToJSON(json: any): PartnerConfiguration {
    return PartnerConfigurationToJSONTyped(json, false);
}

export function PartnerConfigurationToJSONTyped(value?: PartnerConfiguration | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'partnerId': value['partnerId'],
        'name': value['name'],
        'as2ConnectionId': value['as2ConnectionId'],
        'as2ConnectionConfigured': value['as2ConnectionConfigured'],
        'productionReady': value['productionReady'],
        'testReady': value['testReady'],
        'carbonCopyOnly': value['carbonCopyOnly'],
        'implementationAcknowledgmentEnabled': value['implementationAcknowledgmentEnabled'],
        'ediSupportEmail': value['ediSupportEmail'],
        'unmappedInboundPolicy': value['unmappedInboundPolicy'],
        'signingCertificateSlot': value['signingCertificateSlot'],
        'supportsNewlineAfterSegmentTerminator': value['supportsNewlineAfterSegmentTerminator'],
        'overrideUserAgentString': value['overrideUserAgentString'],
        'overrideSeparatorSet': ConfigurationPartnerSeparatorSetToJSON(value['overrideSeparatorSet']),
        'messageTypeGsVersionOverrides': value['messageTypeGsVersionOverrides'],
        'x12': IntegrationPartnerX12ToJSON(value['x12']),
        'etag': value['etag'],
    };
}
