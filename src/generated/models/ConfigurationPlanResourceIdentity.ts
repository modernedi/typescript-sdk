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
import type { ConfigurationResourceKind } from './ConfigurationResourceKind.js';
import {
    ConfigurationResourceKindFromJSON,
    ConfigurationResourceKindFromJSONTyped,
    ConfigurationResourceKindToJSON,
    ConfigurationResourceKindToJSONTyped,
} from './ConfigurationResourceKind.js';

/**
 * Stable portable identity of a resource associated with a diagnostic.
 * @export
 * @interface ConfigurationPlanResourceIdentity
 */
export interface ConfigurationPlanResourceIdentity {
    /**
     *
     * @type {ConfigurationResourceKind}
     * @memberof ConfigurationPlanResourceIdentity
     */
    kind: ConfigurationResourceKind;
    /**
     *
     * @type {string}
     * @memberof ConfigurationPlanResourceIdentity
     */
    key: string;
}



/**
 * Check if a given object implements the ConfigurationPlanResourceIdentity interface.
 */
export function instanceOfConfigurationPlanResourceIdentity(value: object): value is ConfigurationPlanResourceIdentity {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    return true;
}

export function ConfigurationPlanResourceIdentityFromJSON(json: any): ConfigurationPlanResourceIdentity {
    return ConfigurationPlanResourceIdentityFromJSONTyped(json, false);
}

export function ConfigurationPlanResourceIdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanResourceIdentity {
    if (json == null) {
        return json;
    }
    return {

        'kind': ConfigurationResourceKindFromJSON(json['kind']),
        'key': json['key'],
    };
}

export function ConfigurationPlanResourceIdentityToJSON(json: any): ConfigurationPlanResourceIdentity {
    return ConfigurationPlanResourceIdentityToJSONTyped(json, false);
}

export function ConfigurationPlanResourceIdentityToJSONTyped(value?: ConfigurationPlanResourceIdentity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': ConfigurationResourceKindToJSON(value['kind']),
        'key': value['key'],
    };
}
