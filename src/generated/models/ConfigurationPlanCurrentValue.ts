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
 * Observed current identity for an UPDATE or DELETE operation.
 * @export
 * @interface ConfigurationPlanCurrentValue
 */
export interface ConfigurationPlanCurrentValue {
    /**
     * Current tenant-scoped API resource id. Portable references continue to use `key`.
     * @type {number}
     * @memberof ConfigurationPlanCurrentValue
     */
    resourceId: number;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationPlanCurrentValue
     */
    contentSha256: string;
    /**
     * Current public configuration ETag observed in the same snapshot.
     * @type {string}
     * @memberof ConfigurationPlanCurrentValue
     */
    apiEtag: string;
}

/**
 * Check if a given object implements the ConfigurationPlanCurrentValue interface.
 */
export function instanceOfConfigurationPlanCurrentValue(value: object): value is ConfigurationPlanCurrentValue {
    if (!('resourceId' in value) || value['resourceId'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    if (!('apiEtag' in value) || value['apiEtag'] === undefined) return false;
    return true;
}

export function ConfigurationPlanCurrentValueFromJSON(json: any): ConfigurationPlanCurrentValue {
    return ConfigurationPlanCurrentValueFromJSONTyped(json, false);
}

export function ConfigurationPlanCurrentValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanCurrentValue {
    if (json == null) {
        return json;
    }
    return {

        'resourceId': json['resourceId'],
        'contentSha256': json['contentSha256'],
        'apiEtag': json['apiEtag'],
    };
}

export function ConfigurationPlanCurrentValueToJSON(json: any): ConfigurationPlanCurrentValue {
    return ConfigurationPlanCurrentValueToJSONTyped(json, false);
}

export function ConfigurationPlanCurrentValueToJSONTyped(value?: ConfigurationPlanCurrentValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'resourceId': value['resourceId'],
        'contentSha256': value['contentSha256'],
        'apiEtag': value['apiEtag'],
    };
}
