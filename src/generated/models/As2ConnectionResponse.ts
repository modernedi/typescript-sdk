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
import type { As2ConnectionConfiguration } from './As2ConnectionConfiguration.js';
import {
    As2ConnectionConfigurationFromJSON,
    As2ConnectionConfigurationFromJSONTyped,
    As2ConnectionConfigurationToJSON,
    As2ConnectionConfigurationToJSONTyped,
} from './As2ConnectionConfiguration.js';

/**
 * Successful response containing one complete AS2 connection configuration.
 * @export
 * @interface As2ConnectionResponse
 */
export interface As2ConnectionResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof As2ConnectionResponse
     */
    success: boolean;
    /**
     *
     * @type {As2ConnectionConfiguration}
     * @memberof As2ConnectionResponse
     */
    connection: As2ConnectionConfiguration;
}

/**
 * Check if a given object implements the As2ConnectionResponse interface.
 */
export function instanceOfAs2ConnectionResponse(value: object): value is As2ConnectionResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('connection' in value) || value['connection'] === undefined) return false;
    return true;
}

export function As2ConnectionResponseFromJSON(json: any): As2ConnectionResponse {
    return As2ConnectionResponseFromJSONTyped(json, false);
}

export function As2ConnectionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ConnectionResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'connection': As2ConnectionConfigurationFromJSON(json['connection']),
    };
}

export function As2ConnectionResponseToJSON(json: any): As2ConnectionResponse {
    return As2ConnectionResponseToJSONTyped(json, false);
}

export function As2ConnectionResponseToJSONTyped(value?: As2ConnectionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'connection': As2ConnectionConfigurationToJSON(value['connection']),
    };
}
