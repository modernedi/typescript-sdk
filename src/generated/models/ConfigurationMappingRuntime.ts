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
 * Exact advanced runtime values preserved by workspace authoring and deterministic export. Incoming mappings contain `activeAttributes`; outgoing mappings contain `extraFields`. Most integrations should use the stable `deliveredMetadata` and `output.delivery` fields instead. These maps exist so source-control exports do not discard established runtime behavior that is outside the closed customer-facing selectors.
 *
 * @export
 * @interface ConfigurationMappingRuntime
 */
export interface ConfigurationMappingRuntime {
    /**
     * Complete incoming runtime attribute selection, keyed by the established mapping-runtime attribute name.
     * @type {{ [key: string]: boolean | undefined; }}
     * @memberof ConfigurationMappingRuntime
     */
    activeAttributes?: { [key: string]: boolean | undefined; };
    /**
     * Complete outgoing runtime metadata preserved with the transform.
     * @type {{ [key: string]: string | undefined; }}
     * @memberof ConfigurationMappingRuntime
     */
    extraFields?: { [key: string]: string | undefined; };
}

/**
 * Check if a given object implements the ConfigurationMappingRuntime interface.
 */
export function instanceOfConfigurationMappingRuntime(value: object): value is ConfigurationMappingRuntime {
    return true;
}

export function ConfigurationMappingRuntimeFromJSON(json: any): ConfigurationMappingRuntime {
    return ConfigurationMappingRuntimeFromJSONTyped(json, false);
}

export function ConfigurationMappingRuntimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationMappingRuntime {
    if (json == null) {
        return json;
    }
    return {

        'activeAttributes': json['activeAttributes'] == null ? undefined : json['activeAttributes'],
        'extraFields': json['extraFields'] == null ? undefined : json['extraFields'],
    };
}

export function ConfigurationMappingRuntimeToJSON(json: any): ConfigurationMappingRuntime {
    return ConfigurationMappingRuntimeToJSONTyped(json, false);
}

export function ConfigurationMappingRuntimeToJSONTyped(value?: ConfigurationMappingRuntime | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'activeAttributes': value['activeAttributes'],
        'extraFields': value['extraFields'],
    };
}
