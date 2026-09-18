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
 * Optional verification linked during apply. No linked result is normal when testing was not requested or evidence expired.
 * @export
 * @interface ConfigurationAppliedVerificationResponse
 */
export interface ConfigurationAppliedVerificationResponse {
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationAppliedVerificationResponse
     */
    success: boolean;
    /**
     *
     * @type {ConfigurationVerificationRun}
     * @memberof ConfigurationAppliedVerificationResponse
     */
    run: ConfigurationVerificationRun | null;
}

/**
 * Check if a given object implements the ConfigurationAppliedVerificationResponse interface.
 */
export function instanceOfConfigurationAppliedVerificationResponse(value: object): value is ConfigurationAppliedVerificationResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('run' in value) || value['run'] === undefined) return false;
    return true;
}

export function ConfigurationAppliedVerificationResponseFromJSON(json: any): ConfigurationAppliedVerificationResponse {
    return ConfigurationAppliedVerificationResponseFromJSONTyped(json, false);
}

export function ConfigurationAppliedVerificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationAppliedVerificationResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'run': ConfigurationVerificationRunFromJSON(json['run']),
    };
}

export function ConfigurationAppliedVerificationResponseToJSON(json: any): ConfigurationAppliedVerificationResponse {
    return ConfigurationAppliedVerificationResponseToJSONTyped(json, false);
}

export function ConfigurationAppliedVerificationResponseToJSONTyped(value?: ConfigurationAppliedVerificationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'run': ConfigurationVerificationRunToJSON(value['run']),
    };
}
