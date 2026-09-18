/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ConfigurationAs2ConnectionResourceDocument } from './ConfigurationAs2ConnectionResourceDocument.js';
import {
    instanceOfConfigurationAs2ConnectionResourceDocument,
    ConfigurationAs2ConnectionResourceDocumentFromJSON,
    ConfigurationAs2ConnectionResourceDocumentFromJSONTyped,
    ConfigurationAs2ConnectionResourceDocumentToJSON,
} from './ConfigurationAs2ConnectionResourceDocument.js';
import type { ConfigurationMappingResourceDocument } from './ConfigurationMappingResourceDocument.js';
import {
    instanceOfConfigurationMappingResourceDocument,
    ConfigurationMappingResourceDocumentFromJSON,
    ConfigurationMappingResourceDocumentFromJSONTyped,
    ConfigurationMappingResourceDocumentToJSON,
} from './ConfigurationMappingResourceDocument.js';
import type { ConfigurationPartnerResourceDocument } from './ConfigurationPartnerResourceDocument.js';
import {
    instanceOfConfigurationPartnerResourceDocument,
    ConfigurationPartnerResourceDocumentFromJSON,
    ConfigurationPartnerResourceDocumentFromJSONTyped,
    ConfigurationPartnerResourceDocumentToJSON,
} from './ConfigurationPartnerResourceDocument.js';
import type { ConfigurationScenarioBindingResourceDocument } from './ConfigurationScenarioBindingResourceDocument.js';
import {
    instanceOfConfigurationScenarioBindingResourceDocument,
    ConfigurationScenarioBindingResourceDocumentFromJSON,
    ConfigurationScenarioBindingResourceDocumentFromJSONTyped,
    ConfigurationScenarioBindingResourceDocumentToJSON,
} from './ConfigurationScenarioBindingResourceDocument.js';
import type { ConfigurationScenarioDefinitionResourceDocument } from './ConfigurationScenarioDefinitionResourceDocument.js';
import {
    instanceOfConfigurationScenarioDefinitionResourceDocument,
    ConfigurationScenarioDefinitionResourceDocumentFromJSON,
    ConfigurationScenarioDefinitionResourceDocumentFromJSONTyped,
    ConfigurationScenarioDefinitionResourceDocumentToJSON,
} from './ConfigurationScenarioDefinitionResourceDocument.js';

/**
 * @type ConfigurationResourceDocument
 * Portable connection, partner, mapping, or optional scenario desired-state document. References use stable UUID keys rather than workspace database ids. Scenario resources contain the complete authored document under spec.source; runtime snapshots and evidence are not source configuration.
 * @export
 */
export type ConfigurationResourceDocument = { kind: 'As2Connection' } & ConfigurationAs2ConnectionResourceDocument | { kind: 'Mapping' } & ConfigurationMappingResourceDocument | { kind: 'Partner' } & ConfigurationPartnerResourceDocument | { kind: 'ScenarioBinding' } & ConfigurationScenarioBindingResourceDocument | { kind: 'ScenarioDefinition' } & ConfigurationScenarioDefinitionResourceDocument;

export function instanceOfConfigurationResourceDocument(value: object): value is ConfigurationResourceDocument {
    if (!('apiVersion' in value) || !('kind' in value) || !('metadata' in value) || !('spec' in value)) return false;
    return value.kind === 'As2Connection' || value.kind === 'Mapping' || value.kind === 'Partner' || value.kind === 'ScenarioDefinition' || value.kind === 'ScenarioBinding';
}

export function ConfigurationResourceDocumentFromJSON(json: any): ConfigurationResourceDocument {
    return ConfigurationResourceDocumentFromJSONTyped(json, false);
}

export function ConfigurationResourceDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationResourceDocument {
    if (json == null) {
        return json;
    }
    switch (json['kind']) {
        case 'As2Connection':
            return Object.assign({}, ConfigurationAs2ConnectionResourceDocumentFromJSONTyped(json, true), { kind: 'As2Connection' } as const);
        case 'Mapping':
            return Object.assign({}, ConfigurationMappingResourceDocumentFromJSONTyped(json, true), { kind: 'Mapping' } as const);
        case 'Partner':
            return Object.assign({}, ConfigurationPartnerResourceDocumentFromJSONTyped(json, true), { kind: 'Partner' } as const);
        case 'ScenarioBinding':
            return Object.assign({}, ConfigurationScenarioBindingResourceDocumentFromJSONTyped(json, true), { kind: 'ScenarioBinding' } as const);
        case 'ScenarioDefinition':
            return Object.assign({}, ConfigurationScenarioDefinitionResourceDocumentFromJSONTyped(json, true), { kind: 'ScenarioDefinition' } as const);
        default:
            return json;
    }
}

export function ConfigurationResourceDocumentToJSON(json: any): any {
    return ConfigurationResourceDocumentToJSONTyped(json, false);
}

export function ConfigurationResourceDocumentToJSONTyped(value?: ConfigurationResourceDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['kind']) {
        case 'As2Connection':
            return Object.assign({}, ConfigurationAs2ConnectionResourceDocumentToJSON(value), { 'kind': 'As2Connection' } as const);
        case 'Mapping':
            return Object.assign({}, ConfigurationMappingResourceDocumentToJSON(value), { 'kind': 'Mapping' } as const);
        case 'Partner':
            return Object.assign({}, ConfigurationPartnerResourceDocumentToJSON(value), { 'kind': 'Partner' } as const);
        case 'ScenarioBinding':
            return Object.assign({}, ConfigurationScenarioBindingResourceDocumentToJSON(value), { 'kind': 'ScenarioBinding' } as const);
        case 'ScenarioDefinition':
            return Object.assign({}, ConfigurationScenarioDefinitionResourceDocumentToJSON(value), { 'kind': 'ScenarioDefinition' } as const);
        default:
            return value;
    }
}
