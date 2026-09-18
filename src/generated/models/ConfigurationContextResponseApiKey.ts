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
 * @interface ConfigurationContextResponseApiKey
 */
export interface ConfigurationContextResponseApiKey {
    /**
     *
     * @type {number}
     * @memberof ConfigurationContextResponseApiKey
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof ConfigurationContextResponseApiKey
     */
    label: string;
    /**
     * Current grants, sorted lexicographically. No write grant is implied by a read grant.
     * @type {Set<ConfigurationContextResponseApiKeyScopesEnum>}
     * @memberof ConfigurationContextResponseApiKey
     */
    scopes: Set<ConfigurationContextResponseApiKeyScopesEnum>;
}


/**
 * @export
 */
export const ConfigurationContextResponseApiKeyScopesEnum = {
    TransactionsRead: 'transactions:read',
    TransactionsWrite: 'transactions:write',
    TransactionsReplay: 'transactions:replay',
    MessagesWrite: 'messages:write',
    ConfigurationRead: 'configuration:read',
    ConfigurationWrite: 'configuration:write',
    ScenarioRunsRead: 'scenario-runs:read',
    ScenarioRunsWrite: 'scenario-runs:write',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationContextResponseApiKeyScopesEnum = typeof ConfigurationContextResponseApiKeyScopesEnum[keyof typeof ConfigurationContextResponseApiKeyScopesEnum];


/**
 * Check if a given object implements the ConfigurationContextResponseApiKey interface.
 */
export function instanceOfConfigurationContextResponseApiKey(value: object): value is ConfigurationContextResponseApiKey {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('scopes' in value) || value['scopes'] === undefined) return false;
    return true;
}

export function ConfigurationContextResponseApiKeyFromJSON(json: any): ConfigurationContextResponseApiKey {
    return ConfigurationContextResponseApiKeyFromJSONTyped(json, false);
}

export function ConfigurationContextResponseApiKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationContextResponseApiKey {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'label': json['label'],
        'scopes': new Set(json['scopes']),
    };
}

export function ConfigurationContextResponseApiKeyToJSON(json: any): ConfigurationContextResponseApiKey {
    return ConfigurationContextResponseApiKeyToJSONTyped(json, false);
}

export function ConfigurationContextResponseApiKeyToJSONTyped(value?: ConfigurationContextResponseApiKey | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'label': value['label'],
        'scopes': Array.from(value['scopes'] as Set<any>),
    };
}
