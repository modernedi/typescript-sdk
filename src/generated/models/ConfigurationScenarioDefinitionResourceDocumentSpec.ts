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
import type { ModernEDIScenarioDefinitionV1 } from './ModernEDIScenarioDefinitionV1.js';
import {
    ModernEDIScenarioDefinitionV1FromJSON,
    ModernEDIScenarioDefinitionV1FromJSONTyped,
    ModernEDIScenarioDefinitionV1ToJSON,
    ModernEDIScenarioDefinitionV1ToJSONTyped,
} from './ModernEDIScenarioDefinitionV1.js';

/**
 *
 * @export
 * @interface ConfigurationScenarioDefinitionResourceDocumentSpec
 */
export interface ConfigurationScenarioDefinitionResourceDocumentSpec {
    /**
     *
     * @type {ModernEDIScenarioDefinitionV1}
     * @memberof ConfigurationScenarioDefinitionResourceDocumentSpec
     */
    source: ModernEDIScenarioDefinitionV1;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionResourceDocumentSpec interface.
 */
export function instanceOfConfigurationScenarioDefinitionResourceDocumentSpec(value: object): value is ConfigurationScenarioDefinitionResourceDocumentSpec {
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionResourceDocumentSpecFromJSON(json: any): ConfigurationScenarioDefinitionResourceDocumentSpec {
    return ConfigurationScenarioDefinitionResourceDocumentSpecFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionResourceDocumentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionResourceDocumentSpec {
    if (json == null) {
        return json;
    }
    return {

        'source': ModernEDIScenarioDefinitionV1FromJSON(json['source']),
    };
}

export function ConfigurationScenarioDefinitionResourceDocumentSpecToJSON(json: any): ConfigurationScenarioDefinitionResourceDocumentSpec {
    return ConfigurationScenarioDefinitionResourceDocumentSpecToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionResourceDocumentSpecToJSONTyped(value?: ConfigurationScenarioDefinitionResourceDocumentSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'source': ModernEDIScenarioDefinitionV1ToJSON(value['source']),
    };
}
