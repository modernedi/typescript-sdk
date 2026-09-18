/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { PartnerEndpoint } from './PartnerEndpoint.js';
import {
    instanceOfPartnerEndpoint,
    PartnerEndpointFromJSON,
    PartnerEndpointFromJSONTyped,
    PartnerEndpointToJSON,
} from './PartnerEndpoint.js';
import type { WorkspaceEndpoint } from './WorkspaceEndpoint.js';
import {
    instanceOfWorkspaceEndpoint,
    WorkspaceEndpointFromJSON,
    WorkspaceEndpointFromJSONTyped,
    WorkspaceEndpointToJSON,
} from './WorkspaceEndpoint.js';

/**
 * @type ConfigurationScenarioBindingEndpoint
 * OneOf discriminator: workspace accepts only kind; partner also requires a positive tenant partner ID.
 * @export
 */
export type ConfigurationScenarioBindingEndpoint = PartnerEndpoint | WorkspaceEndpoint;

export function ConfigurationScenarioBindingEndpointFromJSON(json: any): ConfigurationScenarioBindingEndpoint {
    return ConfigurationScenarioBindingEndpointFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingEndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingEndpoint {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfPartnerEndpoint(json)) {
        return PartnerEndpointFromJSONTyped(json, true);
    }
    if (instanceOfWorkspaceEndpoint(json)) {
        return WorkspaceEndpointFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioBindingEndpointToJSON(json: any): any {
    return ConfigurationScenarioBindingEndpointToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingEndpointToJSONTyped(value?: ConfigurationScenarioBindingEndpoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfPartnerEndpoint(value)) {
        return PartnerEndpointToJSON(value as PartnerEndpoint);
    }
    if (instanceOfWorkspaceEndpoint(value)) {
        return WorkspaceEndpointToJSON(value as WorkspaceEndpoint);
    }
    return {};
}
