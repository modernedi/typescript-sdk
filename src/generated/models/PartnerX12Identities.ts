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
import type { PartnerX12Identity } from './PartnerX12Identity.js';
import {
    PartnerX12IdentityFromJSON,
    PartnerX12IdentityFromJSONTyped,
    PartnerX12IdentityToJSON,
    PartnerX12IdentityToJSONTyped,
} from './PartnerX12Identity.js';

/**
 * Production is always configured. Test is `null` for a production-only partner.
 * @export
 * @interface PartnerX12Identities
 */
export interface PartnerX12Identities {
    /**
     *
     * @type {PartnerX12Identity}
     * @memberof PartnerX12Identities
     */
    production: PartnerX12Identity;
    /**
     * Complete test X12 sender identity, or `null` when this partner has no separate test identity.
     * @type {PartnerX12Identity}
     * @memberof PartnerX12Identities
     */
    test: PartnerX12Identity | null;
}

/**
 * Check if a given object implements the PartnerX12Identities interface.
 */
export function instanceOfPartnerX12Identities(value: object): value is PartnerX12Identities {
    if (!('production' in value) || value['production'] === undefined) return false;
    if (!('test' in value) || value['test'] === undefined) return false;
    return true;
}

export function PartnerX12IdentitiesFromJSON(json: any): PartnerX12Identities {
    return PartnerX12IdentitiesFromJSONTyped(json, false);
}

export function PartnerX12IdentitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerX12Identities {
    if (json == null) {
        return json;
    }
    return {

        'production': PartnerX12IdentityFromJSON(json['production']),
        'test': PartnerX12IdentityFromJSON(json['test']),
    };
}

export function PartnerX12IdentitiesToJSON(json: any): PartnerX12Identities {
    return PartnerX12IdentitiesToJSONTyped(json, false);
}

export function PartnerX12IdentitiesToJSONTyped(value?: PartnerX12Identities | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'production': PartnerX12IdentityToJSON(value['production']),
        'test': PartnerX12IdentityToJSON(value['test']),
    };
}
