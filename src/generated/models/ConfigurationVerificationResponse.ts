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
 * One server verification run.
 * @export
 * @interface ConfigurationVerificationResponse
 */
export interface ConfigurationVerificationResponse {
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationVerificationResponse
     */
    success: boolean;
    /**
     *
     * @type {ConfigurationVerificationRun}
     * @memberof ConfigurationVerificationResponse
     */
    run: ConfigurationVerificationRun;
}

/**
 * Check if a given object implements the ConfigurationVerificationResponse interface.
 */
export function instanceOfConfigurationVerificationResponse(value: object): value is ConfigurationVerificationResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('run' in value) || value['run'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationResponseFromJSON(json: any): ConfigurationVerificationResponse {
    return ConfigurationVerificationResponseFromJSONTyped(json, false);
}

export function ConfigurationVerificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'run': ConfigurationVerificationRunFromJSON(json['run']),
    };
}

export function ConfigurationVerificationResponseToJSON(json: any): ConfigurationVerificationResponse {
    return ConfigurationVerificationResponseToJSONTyped(json, false);
}

export function ConfigurationVerificationResponseToJSONTyped(value?: ConfigurationVerificationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'run': ConfigurationVerificationRunToJSON(value['run']),
    };
}
