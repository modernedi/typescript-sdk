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
import type { ConfigurationExternalRepository } from './ConfigurationExternalRepository.js';
import {
    ConfigurationExternalRepositoryFromJSON,
    ConfigurationExternalRepositoryFromJSONTyped,
    ConfigurationExternalRepositoryToJSON,
    ConfigurationExternalRepositoryToJSONTyped,
} from './ConfigurationExternalRepository.js';

/**
 *
 * @export
 * @interface ConfigurationExternalRepositoryResponse
 */
export interface ConfigurationExternalRepositoryResponse {
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationExternalRepositoryResponse
     */
    success: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationExternalRepositoryResponse
     */
    connected: boolean;
    /**
     * Present only when connected is true.
     * @type {ConfigurationExternalRepository}
     * @memberof ConfigurationExternalRepositoryResponse
     */
    connection?: ConfigurationExternalRepository;
}

/**
 * Check if a given object implements the ConfigurationExternalRepositoryResponse interface.
 */
export function instanceOfConfigurationExternalRepositoryResponse(value: object): value is ConfigurationExternalRepositoryResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('connected' in value) || value['connected'] === undefined) return false;
    return true;
}

export function ConfigurationExternalRepositoryResponseFromJSON(json: any): ConfigurationExternalRepositoryResponse {
    return ConfigurationExternalRepositoryResponseFromJSONTyped(json, false);
}

export function ConfigurationExternalRepositoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationExternalRepositoryResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'connected': json['connected'],
        'connection': json['connection'] == null ? undefined : ConfigurationExternalRepositoryFromJSON(json['connection']),
    };
}

export function ConfigurationExternalRepositoryResponseToJSON(json: any): ConfigurationExternalRepositoryResponse {
    return ConfigurationExternalRepositoryResponseToJSONTyped(json, false);
}

export function ConfigurationExternalRepositoryResponseToJSONTyped(value?: ConfigurationExternalRepositoryResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'connected': value['connected'],
        'connection': ConfigurationExternalRepositoryToJSON(value['connection']),
    };
}
