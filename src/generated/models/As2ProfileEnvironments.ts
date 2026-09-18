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
import type { As2EnvironmentProfile } from './As2EnvironmentProfile.js';
import {
    As2EnvironmentProfileFromJSON,
    As2EnvironmentProfileFromJSONTyped,
    As2EnvironmentProfileToJSON,
    As2EnvironmentProfileToJSONTyped,
} from './As2EnvironmentProfile.js';

/**
 * Environment-specific inbound endpoints and ModernEDI sender identities.
 * @export
 * @interface As2ProfileEnvironments
 */
export interface As2ProfileEnvironments {
    /**
     *
     * @type {As2EnvironmentProfile}
     * @memberof As2ProfileEnvironments
     */
    production: As2EnvironmentProfile;
    /**
     *
     * @type {As2EnvironmentProfile}
     * @memberof As2ProfileEnvironments
     */
    test: As2EnvironmentProfile;
}

/**
 * Check if a given object implements the As2ProfileEnvironments interface.
 */
export function instanceOfAs2ProfileEnvironments(value: object): value is As2ProfileEnvironments {
    if (!('production' in value) || value['production'] === undefined) return false;
    if (!('test' in value) || value['test'] === undefined) return false;
    return true;
}

export function As2ProfileEnvironmentsFromJSON(json: any): As2ProfileEnvironments {
    return As2ProfileEnvironmentsFromJSONTyped(json, false);
}

export function As2ProfileEnvironmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ProfileEnvironments {
    if (json == null) {
        return json;
    }
    return {

        'production': As2EnvironmentProfileFromJSON(json['production']),
        'test': As2EnvironmentProfileFromJSON(json['test']),
    };
}

export function As2ProfileEnvironmentsToJSON(json: any): As2ProfileEnvironments {
    return As2ProfileEnvironmentsToJSONTyped(json, false);
}

export function As2ProfileEnvironmentsToJSONTyped(value?: As2ProfileEnvironments | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'production': As2EnvironmentProfileToJSON(value['production']),
        'test': As2EnvironmentProfileToJSON(value['test']),
    };
}
