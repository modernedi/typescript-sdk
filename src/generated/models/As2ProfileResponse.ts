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
import type { As2Profile } from './As2Profile.js';
import {
    As2ProfileFromJSON,
    As2ProfileFromJSONTyped,
    As2ProfileToJSON,
    As2ProfileToJSONTyped,
} from './As2Profile.js';

/**
 * Successful response containing the workspace AS2 identity, endpoints, network addresses, and certificates.
 * @export
 * @interface As2ProfileResponse
 */
export interface As2ProfileResponse {
    /**
     * Always `true`; failures use the documented error response instead.
     * @type {boolean}
     * @memberof As2ProfileResponse
     */
    success: boolean;
    /**
     *
     * @type {As2Profile}
     * @memberof As2ProfileResponse
     */
    profile: As2Profile;
}

/**
 * Check if a given object implements the As2ProfileResponse interface.
 */
export function instanceOfAs2ProfileResponse(value: object): value is As2ProfileResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('profile' in value) || value['profile'] === undefined) return false;
    return true;
}

export function As2ProfileResponseFromJSON(json: any): As2ProfileResponse {
    return As2ProfileResponseFromJSONTyped(json, false);
}

export function As2ProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ProfileResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'profile': As2ProfileFromJSON(json['profile']),
    };
}

export function As2ProfileResponseToJSON(json: any): As2ProfileResponse {
    return As2ProfileResponseToJSONTyped(json, false);
}

export function As2ProfileResponseToJSONTyped(value?: As2ProfileResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'profile': As2ProfileToJSON(value['profile']),
    };
}
