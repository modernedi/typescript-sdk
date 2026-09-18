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
import type { ConfigurationAs2Environments } from './ConfigurationAs2Environments.js';
import {
    ConfigurationAs2EnvironmentsFromJSON,
    ConfigurationAs2EnvironmentsFromJSONTyped,
    ConfigurationAs2EnvironmentsToJSON,
    ConfigurationAs2EnvironmentsToJSONTyped,
} from './ConfigurationAs2Environments.js';
import type { As2ResolvedFunctionalAcknowledgmentSettings } from './As2ResolvedFunctionalAcknowledgmentSettings.js';
import {
    As2ResolvedFunctionalAcknowledgmentSettingsFromJSON,
    As2ResolvedFunctionalAcknowledgmentSettingsFromJSONTyped,
    As2ResolvedFunctionalAcknowledgmentSettingsToJSON,
    As2ResolvedFunctionalAcknowledgmentSettingsToJSONTyped,
} from './As2ResolvedFunctionalAcknowledgmentSettings.js';

/**
 * Complete resolved AS2 configuration without its server database id or API ETag. Exports reference public partner certificates beside connection.json. Inline public certificates are also accepted for API-authored and retained historical bundles. Private keys and secret locations are never included.
 * @export
 * @interface ConfigurationAs2ConnectionSpec
 */
export interface ConfigurationAs2ConnectionSpec {
    /**
     *
     * @type {ConfigurationAs2Environments}
     * @memberof ConfigurationAs2ConnectionSpec
     */
    environments: ConfigurationAs2Environments;
    /**
     *
     * @type {As2ResolvedOutboundSettings}
     * @memberof ConfigurationAs2ConnectionSpec
     */
    outbound: As2ResolvedOutboundSettings;
    /**
     *
     * @type {As2ResolvedFunctionalAcknowledgmentSettings}
     * @memberof ConfigurationAs2ConnectionSpec
     */
    functionalAcknowledgment: As2ResolvedFunctionalAcknowledgmentSettings;
    /**
     *
     * @type {As2ResolvedMdnSettings}
     * @memberof ConfigurationAs2ConnectionSpec
     */
    mdn: As2ResolvedMdnSettings;
    /**
     * Effective RFC 6211 `cmsAlgorithmProtect` compatibility setting.
     * @type {boolean}
     * @memberof ConfigurationAs2ConnectionSpec
     */
    cmsAlgorithmProtection: boolean;
    /**
     * Effective inbound signature-verification treatment of MIME line endings.
     * @type {ConfigurationAs2ConnectionSpecDigestCanonicalizationPolicyEnum}
     * @memberof ConfigurationAs2ConnectionSpec
     */
    digestCanonicalizationPolicy: ConfigurationAs2ConnectionSpecDigestCanonicalizationPolicyEnum;
}


/**
 * @export
 */
export const ConfigurationAs2ConnectionSpecDigestCanonicalizationPolicyEnum = {
    Auto: 'AUTO',
    Canonicalize: 'CANONICALIZE',
    Preserve: 'PRESERVE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationAs2ConnectionSpecDigestCanonicalizationPolicyEnum = typeof ConfigurationAs2ConnectionSpecDigestCanonicalizationPolicyEnum[keyof typeof ConfigurationAs2ConnectionSpecDigestCanonicalizationPolicyEnum];


/**
 * Check if a given object implements the ConfigurationAs2ConnectionSpec interface.
 */
export function instanceOfConfigurationAs2ConnectionSpec(value: object): value is ConfigurationAs2ConnectionSpec {
    if (!('environments' in value) || value['environments'] === undefined) return false;
    if (!('outbound' in value) || value['outbound'] === undefined) return false;
    if (!('functionalAcknowledgment' in value) || value['functionalAcknowledgment'] === undefined) return false;
    if (!('mdn' in value) || value['mdn'] === undefined) return false;
    if (!('cmsAlgorithmProtection' in value) || value['cmsAlgorithmProtection'] === undefined) return false;
    if (!('digestCanonicalizationPolicy' in value) || value['digestCanonicalizationPolicy'] === undefined) return false;
    return true;
}

export function ConfigurationAs2ConnectionSpecFromJSON(json: any): ConfigurationAs2ConnectionSpec {
    return ConfigurationAs2ConnectionSpecFromJSONTyped(json, false);
}

export function ConfigurationAs2ConnectionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationAs2ConnectionSpec {
    if (json == null) {
        return json;
    }
    return {

        'environments': ConfigurationAs2EnvironmentsFromJSON(json['environments']),
        'outbound': As2ResolvedOutboundSettingsFromJSON(json['outbound']),
        'functionalAcknowledgment': As2ResolvedFunctionalAcknowledgmentSettingsFromJSON(json['functionalAcknowledgment']),
        'mdn': As2ResolvedMdnSettingsFromJSON(json['mdn']),
        'cmsAlgorithmProtection': json['cmsAlgorithmProtection'],
        'digestCanonicalizationPolicy': json['digestCanonicalizationPolicy'],
    };
}

export function ConfigurationAs2ConnectionSpecToJSON(json: any): ConfigurationAs2ConnectionSpec {
    return ConfigurationAs2ConnectionSpecToJSONTyped(json, false);
}

export function ConfigurationAs2ConnectionSpecToJSONTyped(value?: ConfigurationAs2ConnectionSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'environments': ConfigurationAs2EnvironmentsToJSON(value['environments']),
        'outbound': As2ResolvedOutboundSettingsToJSON(value['outbound']),
        'functionalAcknowledgment': As2ResolvedFunctionalAcknowledgmentSettingsToJSON(value['functionalAcknowledgment']),
        'mdn': As2ResolvedMdnSettingsToJSON(value['mdn']),
        'cmsAlgorithmProtection': value['cmsAlgorithmProtection'],
        'digestCanonicalizationPolicy': value['digestCanonicalizationPolicy'],
    };
}
