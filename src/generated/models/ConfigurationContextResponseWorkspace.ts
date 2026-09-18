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
 *
 * @export
 * @interface ConfigurationContextResponseWorkspace
 */
export interface ConfigurationContextResponseWorkspace {
    /**
     * Workspace authenticated by the calling key; not a selectable target.
     * @type {number}
     * @memberof ConfigurationContextResponseWorkspace
     */
    id: number;
}

/**
 * Check if a given object implements the ConfigurationContextResponseWorkspace interface.
 */
export function instanceOfConfigurationContextResponseWorkspace(value: object): value is ConfigurationContextResponseWorkspace {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ConfigurationContextResponseWorkspaceFromJSON(json: any): ConfigurationContextResponseWorkspace {
    return ConfigurationContextResponseWorkspaceFromJSONTyped(json, false);
}

export function ConfigurationContextResponseWorkspaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationContextResponseWorkspace {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
    };
}

export function ConfigurationContextResponseWorkspaceToJSON(json: any): ConfigurationContextResponseWorkspace {
    return ConfigurationContextResponseWorkspaceToJSONTyped(json, false);
}

export function ConfigurationContextResponseWorkspaceToJSONTyped(value?: ConfigurationContextResponseWorkspace | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
    };
}
