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
import type { ConfigurationContextResponseWorkspace } from './ConfigurationContextResponseWorkspace.js';
import {
    ConfigurationContextResponseWorkspaceFromJSON,
    ConfigurationContextResponseWorkspaceFromJSONTyped,
    ConfigurationContextResponseWorkspaceToJSON,
    ConfigurationContextResponseWorkspaceToJSONTyped,
} from './ConfigurationContextResponseWorkspace.js';
import type { ConfigurationContextResponseApiKey } from './ConfigurationContextResponseApiKey.js';
import {
    ConfigurationContextResponseApiKeyFromJSON,
    ConfigurationContextResponseApiKeyFromJSONTyped,
    ConfigurationContextResponseApiKeyToJSON,
    ConfigurationContextResponseApiKeyToJSONTyped,
} from './ConfigurationContextResponseApiKey.js';

/**
 *
 * @export
 * @interface ConfigurationContextResponse
 */
export interface ConfigurationContextResponse {
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationContextResponse
     */
    success: boolean;
    /**
     *
     * @type {ConfigurationContextResponseWorkspace}
     * @memberof ConfigurationContextResponse
     */
    workspace: ConfigurationContextResponseWorkspace;
    /**
     *
     * @type {ConfigurationContextResponseApiKey}
     * @memberof ConfigurationContextResponse
     */
    apiKey: ConfigurationContextResponseApiKey;
}

/**
 * Check if a given object implements the ConfigurationContextResponse interface.
 */
export function instanceOfConfigurationContextResponse(value: object): value is ConfigurationContextResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('workspace' in value) || value['workspace'] === undefined) return false;
    if (!('apiKey' in value) || value['apiKey'] === undefined) return false;
    return true;
}

export function ConfigurationContextResponseFromJSON(json: any): ConfigurationContextResponse {
    return ConfigurationContextResponseFromJSONTyped(json, false);
}

export function ConfigurationContextResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationContextResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'workspace': ConfigurationContextResponseWorkspaceFromJSON(json['workspace']),
        'apiKey': ConfigurationContextResponseApiKeyFromJSON(json['apiKey']),
    };
}

export function ConfigurationContextResponseToJSON(json: any): ConfigurationContextResponse {
    return ConfigurationContextResponseToJSONTyped(json, false);
}

export function ConfigurationContextResponseToJSONTyped(value?: ConfigurationContextResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'workspace': ConfigurationContextResponseWorkspaceToJSON(value['workspace']),
        'apiKey': ConfigurationContextResponseApiKeyToJSON(value['apiKey']),
    };
}
