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
import type { ConfigurationApplyOperation } from './ConfigurationApplyOperation.js';
import {
    ConfigurationApplyOperationFromJSON,
    ConfigurationApplyOperationFromJSONTyped,
    ConfigurationApplyOperationToJSON,
    ConfigurationApplyOperationToJSONTyped,
} from './ConfigurationApplyOperation.js';

/**
 * Stored tenant-scoped result of one idempotent aggregate apply request.
 * @export
 * @interface ConfigurationApplyOperationResponse
 */
export interface ConfigurationApplyOperationResponse {
    /**
     * Always `true`; rejected requests use the standard error envelope.
     * @type {boolean}
     * @memberof ConfigurationApplyOperationResponse
     */
    success: boolean;
    /**
     *
     * @type {ConfigurationApplyOperation}
     * @memberof ConfigurationApplyOperationResponse
     */
    operation: ConfigurationApplyOperation;
}

/**
 * Check if a given object implements the ConfigurationApplyOperationResponse interface.
 */
export function instanceOfConfigurationApplyOperationResponse(value: object): value is ConfigurationApplyOperationResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('operation' in value) || value['operation'] === undefined) return false;
    return true;
}

export function ConfigurationApplyOperationResponseFromJSON(json: any): ConfigurationApplyOperationResponse {
    return ConfigurationApplyOperationResponseFromJSONTyped(json, false);
}

export function ConfigurationApplyOperationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationApplyOperationResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'operation': ConfigurationApplyOperationFromJSON(json['operation']),
    };
}

export function ConfigurationApplyOperationResponseToJSON(json: any): ConfigurationApplyOperationResponse {
    return ConfigurationApplyOperationResponseToJSONTyped(json, false);
}

export function ConfigurationApplyOperationResponseToJSONTyped(value?: ConfigurationApplyOperationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'operation': ConfigurationApplyOperationToJSON(value['operation']),
    };
}
