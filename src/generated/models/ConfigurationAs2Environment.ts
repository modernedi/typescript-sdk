/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { As2PartnerEnvironmentResolved } from './As2PartnerEnvironmentResolved.js';
import {
    instanceOfAs2PartnerEnvironmentResolved,
    As2PartnerEnvironmentResolvedFromJSON,
    As2PartnerEnvironmentResolvedFromJSONTyped,
    As2PartnerEnvironmentResolvedToJSON,
} from './As2PartnerEnvironmentResolved.js';
import type { ConfigurationAs2FileEnvironment } from './ConfigurationAs2FileEnvironment.js';
import {
    instanceOfConfigurationAs2FileEnvironment,
    ConfigurationAs2FileEnvironmentFromJSON,
    ConfigurationAs2FileEnvironmentFromJSONTyped,
    ConfigurationAs2FileEnvironmentToJSON,
} from './ConfigurationAs2FileEnvironment.js';

/**
 * @type ConfigurationAs2Environment
 * An environment has either one inline public certificate or a file reference, never both. File references are confined to this connection. Production and Test may share one file; replacing it changes both environments' certificates.
 * @export
 */
export type ConfigurationAs2Environment = As2PartnerEnvironmentResolved | ConfigurationAs2FileEnvironment;

export function ConfigurationAs2EnvironmentFromJSON(json: any): ConfigurationAs2Environment {
    return ConfigurationAs2EnvironmentFromJSONTyped(json, false);
}

export function ConfigurationAs2EnvironmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationAs2Environment {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfAs2PartnerEnvironmentResolved(json)) {
        return As2PartnerEnvironmentResolvedFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationAs2FileEnvironment(json)) {
        return ConfigurationAs2FileEnvironmentFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationAs2EnvironmentToJSON(json: any): any {
    return ConfigurationAs2EnvironmentToJSONTyped(json, false);
}

export function ConfigurationAs2EnvironmentToJSONTyped(value?: ConfigurationAs2Environment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfAs2PartnerEnvironmentResolved(value)) {
        return As2PartnerEnvironmentResolvedToJSON(value as As2PartnerEnvironmentResolved);
    }
    if (instanceOfConfigurationAs2FileEnvironment(value)) {
        return ConfigurationAs2FileEnvironmentToJSON(value as ConfigurationAs2FileEnvironment);
    }
    return {};
}
