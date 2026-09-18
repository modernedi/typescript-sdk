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
 * Immutable attribution captured when the configuration version was committed.
 * @export
 * @interface ConfigurationChangedBy
 */
export interface ConfigurationChangedBy {
    /**
     * Kind of workspace actor that committed the version.
     * @type {ConfigurationChangedByTypeEnum}
     * @memberof ConfigurationChangedBy
     */
    type: ConfigurationChangedByTypeEnum;
    /**
     * Human-readable actor label captured immutably at apply time.
     * @type {string}
     * @memberof ConfigurationChangedBy
     */
    label: string;
}


/**
 * @export
 */
export const ConfigurationChangedByTypeEnum = {
    ApiKey: 'API_KEY',
    WorkspaceMember: 'WORKSPACE_MEMBER',
    System: 'SYSTEM',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationChangedByTypeEnum = typeof ConfigurationChangedByTypeEnum[keyof typeof ConfigurationChangedByTypeEnum];


/**
 * Check if a given object implements the ConfigurationChangedBy interface.
 */
export function instanceOfConfigurationChangedBy(value: object): value is ConfigurationChangedBy {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    return true;
}

export function ConfigurationChangedByFromJSON(json: any): ConfigurationChangedBy {
    return ConfigurationChangedByFromJSONTyped(json, false);
}

export function ConfigurationChangedByFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationChangedBy {
    if (json == null) {
        return json;
    }
    return {

        'type': json['type'],
        'label': json['label'],
    };
}

export function ConfigurationChangedByToJSON(json: any): ConfigurationChangedBy {
    return ConfigurationChangedByToJSONTyped(json, false);
}

export function ConfigurationChangedByToJSONTyped(value?: ConfigurationChangedBy | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'type': value['type'],
        'label': value['label'],
    };
}
