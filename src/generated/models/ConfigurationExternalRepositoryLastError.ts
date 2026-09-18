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
 * @interface ConfigurationExternalRepositoryLastError
 */
export interface ConfigurationExternalRepositoryLastError {
    /**
     * Diagnostic code; new codes may be added.
     * @type {string}
     * @memberof ConfigurationExternalRepositoryLastError
     */
    code: string;
    /**
     * Safe operator-facing explanation; not raw provider output.
     * @type {string}
     * @memberof ConfigurationExternalRepositoryLastError
     */
    message: string;
}

/**
 * Check if a given object implements the ConfigurationExternalRepositoryLastError interface.
 */
export function instanceOfConfigurationExternalRepositoryLastError(value: object): value is ConfigurationExternalRepositoryLastError {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function ConfigurationExternalRepositoryLastErrorFromJSON(json: any): ConfigurationExternalRepositoryLastError {
    return ConfigurationExternalRepositoryLastErrorFromJSONTyped(json, false);
}

export function ConfigurationExternalRepositoryLastErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationExternalRepositoryLastError {
    if (json == null) {
        return json;
    }
    return {

        'code': json['code'],
        'message': json['message'],
    };
}

export function ConfigurationExternalRepositoryLastErrorToJSON(json: any): ConfigurationExternalRepositoryLastError {
    return ConfigurationExternalRepositoryLastErrorToJSONTyped(json, false);
}

export function ConfigurationExternalRepositoryLastErrorToJSONTyped(value?: ConfigurationExternalRepositoryLastError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'code': value['code'],
        'message': value['message'],
    };
}
