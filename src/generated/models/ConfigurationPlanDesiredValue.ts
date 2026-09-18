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
 * Desired portable content identity for a CREATE or UPDATE operation.
 * @export
 * @interface ConfigurationPlanDesiredValue
 */
export interface ConfigurationPlanDesiredValue {
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationPlanDesiredValue
     */
    contentSha256: string;
}

/**
 * Check if a given object implements the ConfigurationPlanDesiredValue interface.
 */
export function instanceOfConfigurationPlanDesiredValue(value: object): value is ConfigurationPlanDesiredValue {
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    return true;
}

export function ConfigurationPlanDesiredValueFromJSON(json: any): ConfigurationPlanDesiredValue {
    return ConfigurationPlanDesiredValueFromJSONTyped(json, false);
}

export function ConfigurationPlanDesiredValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanDesiredValue {
    if (json == null) {
        return json;
    }
    return {

        'contentSha256': json['contentSha256'],
    };
}

export function ConfigurationPlanDesiredValueToJSON(json: any): ConfigurationPlanDesiredValue {
    return ConfigurationPlanDesiredValueToJSONTyped(json, false);
}

export function ConfigurationPlanDesiredValueToJSONTyped(value?: ConfigurationPlanDesiredValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'contentSha256': value['contentSha256'],
    };
}
