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
 * Resource counts across the complete desired/current comparison.
 * @export
 * @interface ConfigurationPlanSummary
 */
export interface ConfigurationPlanSummary {
    /**
     *
     * @type {number}
     * @memberof ConfigurationPlanSummary
     */
    create: number;
    /**
     *
     * @type {number}
     * @memberof ConfigurationPlanSummary
     */
    update: number;
    /**
     *
     * @type {number}
     * @memberof ConfigurationPlanSummary
     */
    _delete: number;
    /**
     *
     * @type {number}
     * @memberof ConfigurationPlanSummary
     */
    unchanged: number;
}

/**
 * Check if a given object implements the ConfigurationPlanSummary interface.
 */
export function instanceOfConfigurationPlanSummary(value: object): value is ConfigurationPlanSummary {
    if (!('create' in value) || value['create'] === undefined) return false;
    if (!('update' in value) || value['update'] === undefined) return false;
    if ((!('_delete' in (value as Record<string, any>)) && !('delete' in (value as Record<string, any>))) || ((value as Record<string, any>)['_delete'] === undefined && (value as Record<string, any>)['delete'] === undefined)) return false;
    if (!('unchanged' in value) || value['unchanged'] === undefined) return false;
    return true;
}

export function ConfigurationPlanSummaryFromJSON(json: any): ConfigurationPlanSummary {
    return ConfigurationPlanSummaryFromJSONTyped(json, false);
}

export function ConfigurationPlanSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanSummary {
    if (json == null) {
        return json;
    }
    return {

        'create': json['create'],
        'update': json['update'],
        '_delete': json['delete'],
        'unchanged': json['unchanged'],
    };
}

export function ConfigurationPlanSummaryToJSON(json: any): ConfigurationPlanSummary {
    return ConfigurationPlanSummaryToJSONTyped(json, false);
}

export function ConfigurationPlanSummaryToJSONTyped(value?: ConfigurationPlanSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'create': value['create'],
        'update': value['update'],
        'delete': value['_delete'],
        'unchanged': value['unchanged'],
    };
}
