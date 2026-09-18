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
import type { As2PartnerEnvironmentResolved } from './As2PartnerEnvironmentResolved.js';
import {
    As2PartnerEnvironmentResolvedFromJSON,
    As2PartnerEnvironmentResolvedFromJSONTyped,
    As2PartnerEnvironmentResolvedToJSON,
    As2PartnerEnvironmentResolvedToJSONTyped,
} from './As2PartnerEnvironmentResolved.js';

/**
 * Fully resolved partner environments. Every non-null environment includes its effective inbound signature and encryption requirements.
 * @export
 * @interface As2ConnectionResolvedEnvironments
 */
export interface As2ConnectionResolvedEnvironments {
    /**
     *
     * @type {As2PartnerEnvironmentResolved}
     * @memberof As2ConnectionResolvedEnvironments
     */
    production: As2PartnerEnvironmentResolved;
    /**
     * Fully resolved test environment, or `null` when no test profile is configured.
     * @type {As2PartnerEnvironmentResolved}
     * @memberof As2ConnectionResolvedEnvironments
     */
    test: As2PartnerEnvironmentResolved | null;
}

/**
 * Check if a given object implements the As2ConnectionResolvedEnvironments interface.
 */
export function instanceOfAs2ConnectionResolvedEnvironments(value: object): value is As2ConnectionResolvedEnvironments {
    if (!('production' in value) || value['production'] === undefined) return false;
    if (!('test' in value) || value['test'] === undefined) return false;
    return true;
}

export function As2ConnectionResolvedEnvironmentsFromJSON(json: any): As2ConnectionResolvedEnvironments {
    return As2ConnectionResolvedEnvironmentsFromJSONTyped(json, false);
}

export function As2ConnectionResolvedEnvironmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2ConnectionResolvedEnvironments {
    if (json == null) {
        return json;
    }
    return {

        'production': As2PartnerEnvironmentResolvedFromJSON(json['production']),
        'test': As2PartnerEnvironmentResolvedFromJSON(json['test']),
    };
}

export function As2ConnectionResolvedEnvironmentsToJSON(json: any): As2ConnectionResolvedEnvironments {
    return As2ConnectionResolvedEnvironmentsToJSONTyped(json, false);
}

export function As2ConnectionResolvedEnvironmentsToJSONTyped(value?: As2ConnectionResolvedEnvironments | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'production': As2PartnerEnvironmentResolvedToJSON(value['production']),
        'test': As2PartnerEnvironmentResolvedToJSON(value['test']),
    };
}
