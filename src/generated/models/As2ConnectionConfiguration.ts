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
import type { As2ResolvedOutboundSettings } from './As2ResolvedOutboundSettings.js';
import {
    As2ResolvedOutboundSettingsFromJSON,
    As2ResolvedOutboundSettingsFromJSONTyped,
    As2ResolvedOutboundSettingsToJSON,
    As2ResolvedOutboundSettingsToJSONTyped,
} from './As2ResolvedOutboundSettings.js';
import type { As2ResolvedMdnSettings } from './As2ResolvedMdnSettings.js';
import {
    As2ResolvedMdnSettingsFromJSON,
    As2ResolvedMdnSettingsFromJSONTyped,
    As2ResolvedMdnSettingsToJSON,
    As2ResolvedMdnSettingsToJSONTyped,
} from './As2ResolvedMdnSettings.js';
import type { As2ConnectionResolvedEnvironments } from './As2ConnectionResolvedEnvironments.js';
import {
    As2ConnectionResolvedEnvironmentsFromJSON,
    As2ConnectionResolvedEnvironmentsFromJSONTyped,
    As2ConnectionResolvedEnvironmentsToJSON,
    As2ConnectionResolvedEnvironmentsToJSONTyped,
} from './As2ConnectionResolvedEnvironments.js';
import type { As2ResolvedFunctionalAcknowledgmentSettings } from './As2ResolvedFunctionalAcknowledgmentSettings.js';
import {
    As2ResolvedFunctionalAcknowledgmentSettingsFromJSON,
    As2ResolvedFunctionalAcknowledgmentSettingsFromJSONTyped,
    As2ResolvedFunctionalAcknowledgmentSettingsToJSON,
    As2ResolvedFunctionalAcknowledgmentSettingsToJSONTyped,
} from './As2ResolvedFunctionalAcknowledgmentSettings.js';

/**
 * Complete persisted AS2 connection returned by configuration operations.
 * @export
 * @interface As2ConnectionConfiguration
 */
export interface As2ConnectionConfiguration {
    /**
     * Stable workspace-scoped identifier used when attaching partners or updating this connection.
     * @type {number}
     * @memberof As2ConnectionConfiguration
     */
    connectionId: number;
    /**
     *
     * @type {As2ConnectionResolvedEnvironments}
     * @memberof As2ConnectionConfiguration
     */
    environments: As2ConnectionResolvedEnvironments;
    /**
     *
     * @type {As2ResolvedOutboundSettings}
     * @memberof As2ConnectionConfiguration
     */
    outbound: As2ResolvedOutboundSettings;
    /**
     *
     * @type {As2ResolvedFunctionalAcknowledgmentSettings}
     * @memberof As2ConnectionConfiguration
     */
    functionalAcknowledgment: As2ResolvedFunctionalAcknowledgmentSettings;
    /**
     *
     * @type {As2ResolvedMdnSettings}
     * @memberof As2ConnectionConfiguration
     */
    mdn: As2ResolvedMdnSettings;
    /**
     * Effective RFC 6211 `cmsAlgorithmProtect` compatibility setting for signed outbound messages and MDNs.
     * @type {boolean}
     * @memberof As2ConnectionConfiguration
     */
    cmsAlgorithmProtection: boolean;
    /**
     * Effective inbound signature-verification treatment of MIME line endings.
     * @type {As2ConnectionConfigurationDigestCanonicalizationPolicyEnum}
     * @memberof As2ConnectionConfiguration
     */
    digestCanonicalizationPolicy: As2ConnectionConfigurationDigestCanonicalizationPolicyEnum;
    /**
     * Quoted SHA-256 identity of the observed AS2 connection configuration. Changes use the aggregate export–plan–apply workflow.
     * @type {string}
     * @memberof As2ConnectionConfiguration
     */
    etag: string;
}


/**
 * @export
 */
export const As2ConnectionConfigurationDigestCanonicalizationPolicyEnum = {
    Auto: 'AUTO',
    Canonicalize: 'CANONICALIZE',
    Preserve: 'PRESERVE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2ConnectionConfigurationDigestCanonicalizationPolicyEnum = typeof As2ConnectionConfigurationDigestCanonicalizationPolicyEnum[keyof typeof As2ConnectionConfigurationDigestCanonicalizationPolicyEnum];


/**
 * Check if a given object implements the As2ConnectionConfiguration interface.
 */
export function instanceOfAs2ConnectionConfiguration(value: object): value is As2ConnectionConfiguration {
    if (!('connectionId' in value) || value['connectionId'] === undefined) return false;
    if (!('environments' in value) || value['environments'] === undefined) return false;
    if (!('outbound' in value) || value['outbound'] === undefined) return false;
    if (!('functionalAcknowledgment' in value) || value['functionalAcknowledgment'] === undefined) return false;
    if (!('mdn' in value) || value['mdn'] === undefined) return false;
    if (!('cmsAlgorithmProtection' in value) || value['cmsAlgorithmProtection'] === undefined) return false;
    if (!('digestCanonicalizationPolicy' in value) || value['digestCanonicalizationPolicy'] === undefined) return false;
    if (!('etag' in value) || value['etag'] === undefined) return false;
    return true;
}

export function As2ConnectionConfigurationFromJSON(json: any): As2ConnectionConfiguration {
    return As2ConnectionConfigurationFromJSONTyped(json, false);
}

export function As2ConnectionConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ConnectionConfiguration {
    if (json == null) {
        return json;
    }
    return {

        'connectionId': json['connectionId'],
        'environments': As2ConnectionResolvedEnvironmentsFromJSON(json['environments']),
        'outbound': As2ResolvedOutboundSettingsFromJSON(json['outbound']),
        'functionalAcknowledgment': As2ResolvedFunctionalAcknowledgmentSettingsFromJSON(json['functionalAcknowledgment']),
        'mdn': As2ResolvedMdnSettingsFromJSON(json['mdn']),
        'cmsAlgorithmProtection': json['cmsAlgorithmProtection'],
        'digestCanonicalizationPolicy': json['digestCanonicalizationPolicy'],
        'etag': json['etag'],
    };
}

export function As2ConnectionConfigurationToJSON(json: any): As2ConnectionConfiguration {
    return As2ConnectionConfigurationToJSONTyped(json, false);
}

export function As2ConnectionConfigurationToJSONTyped(value?: As2ConnectionConfiguration | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'connectionId': value['connectionId'],
        'environments': As2ConnectionResolvedEnvironmentsToJSON(value['environments']),
        'outbound': As2ResolvedOutboundSettingsToJSON(value['outbound']),
        'functionalAcknowledgment': As2ResolvedFunctionalAcknowledgmentSettingsToJSON(value['functionalAcknowledgment']),
        'mdn': As2ResolvedMdnSettingsToJSON(value['mdn']),
        'cmsAlgorithmProtection': value['cmsAlgorithmProtection'],
        'digestCanonicalizationPolicy': value['digestCanonicalizationPolicy'],
        'etag': value['etag'],
    };
}
