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
import type { ModernEDIScenarioBindingV1 } from './ModernEDIScenarioBindingV1.js';
import {
    ModernEDIScenarioBindingV1FromJSON,
    ModernEDIScenarioBindingV1FromJSONTyped,
    ModernEDIScenarioBindingV1ToJSON,
    ModernEDIScenarioBindingV1ToJSONTyped,
} from './ModernEDIScenarioBindingV1.js';

/**
 *
 * @export
 * @interface ConfigurationScenarioBindingResourceDocumentSpec
 */
export interface ConfigurationScenarioBindingResourceDocumentSpec {
    /**
     *
     * @type {ModernEDIScenarioBindingV1}
     * @memberof ConfigurationScenarioBindingResourceDocumentSpec
     */
    source: ModernEDIScenarioBindingV1;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingResourceDocumentSpec interface.
 */
export function instanceOfConfigurationScenarioBindingResourceDocumentSpec(value: object): value is ConfigurationScenarioBindingResourceDocumentSpec {
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingResourceDocumentSpecFromJSON(json: any): ConfigurationScenarioBindingResourceDocumentSpec {
    return ConfigurationScenarioBindingResourceDocumentSpecFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingResourceDocumentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingResourceDocumentSpec {
    if (json == null) {
        return json;
    }
    return {

        'source': ModernEDIScenarioBindingV1FromJSON(json['source']),
    };
}

export function ConfigurationScenarioBindingResourceDocumentSpecToJSON(json: any): ConfigurationScenarioBindingResourceDocumentSpec {
    return ConfigurationScenarioBindingResourceDocumentSpecToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingResourceDocumentSpecToJSONTyped(value?: ConfigurationScenarioBindingResourceDocumentSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'source': ModernEDIScenarioBindingV1ToJSON(value['source']),
    };
}
