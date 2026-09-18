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
import type { ConfigurationVerificationRun } from './ConfigurationVerificationRun.js';
import {
    ConfigurationVerificationRunFromJSON,
    ConfigurationVerificationRunFromJSONTyped,
    ConfigurationVerificationRunToJSON,
    ConfigurationVerificationRunToJSONTyped,
} from './ConfigurationVerificationRun.js';

/**
 *
 * @export
 * @interface ConfigurationImportVerificationResponse
 */
export interface ConfigurationImportVerificationResponse {
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationImportVerificationResponse
     */
    success: boolean;
    /**
     * Existing evidence for the current import, or null when no retained result is available. Null is not a pass.
     * @type {ConfigurationVerificationRun}
     * @memberof ConfigurationImportVerificationResponse
     */
    run: ConfigurationVerificationRun | null;
}

/**
 * Check if a given object implements the ConfigurationImportVerificationResponse interface.
 */
export function instanceOfConfigurationImportVerificationResponse(value: object): value is ConfigurationImportVerificationResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('run' in value) || value['run'] === undefined) return false;
    return true;
}

export function ConfigurationImportVerificationResponseFromJSON(json: any): ConfigurationImportVerificationResponse {
    return ConfigurationImportVerificationResponseFromJSONTyped(json, false);
}

export function ConfigurationImportVerificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationImportVerificationResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'run': ConfigurationVerificationRunFromJSON(json['run']),
    };
}

export function ConfigurationImportVerificationResponseToJSON(json: any): ConfigurationImportVerificationResponse {
    return ConfigurationImportVerificationResponseToJSONTyped(json, false);
}

export function ConfigurationImportVerificationResponseToJSONTyped(value?: ConfigurationImportVerificationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'run': ConfigurationVerificationRunToJSON(value['run']),
    };
}
