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
import type { PartnerDraftX12Identity } from './PartnerDraftX12Identity.js';
import {
    PartnerDraftX12IdentityFromJSON,
    PartnerDraftX12IdentityFromJSONTyped,
    PartnerDraftX12IdentityToJSON,
    PartnerDraftX12IdentityToJSONTyped,
} from './PartnerDraftX12Identity.js';

/**
 * Resolved authoring values returned for a detached partner draft. Production fields may remain incomplete until an AS2 connection is attached. Test is `null` when no test identity has been entered.
 * @export
 * @interface PartnerDraftX12Identities
 */
export interface PartnerDraftX12Identities {
    /**
     *
     * @type {PartnerDraftX12Identity}
     * @memberof PartnerDraftX12Identities
     */
    production: PartnerDraftX12Identity;
    /**
     * Current test authoring values, or `null` when no test identity has been entered.
     * @type {PartnerDraftX12Identity}
     * @memberof PartnerDraftX12Identities
     */
    test: PartnerDraftX12Identity | null;
}

/**
 * Check if a given object implements the PartnerDraftX12Identities interface.
 */
export function instanceOfPartnerDraftX12Identities(value: object): value is PartnerDraftX12Identities {
    if (!('production' in value) || value['production'] === undefined) return false;
    if (!('test' in value) || value['test'] === undefined) return false;
    return true;
}

export function PartnerDraftX12IdentitiesFromJSON(json: any): PartnerDraftX12Identities {
    return PartnerDraftX12IdentitiesFromJSONTyped(json, false);
}

export function PartnerDraftX12IdentitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerDraftX12Identities {
    if (json == null) {
        return json;
    }
    return {

        'production': PartnerDraftX12IdentityFromJSON(json['production']),
        'test': PartnerDraftX12IdentityFromJSON(json['test']),
    };
}

export function PartnerDraftX12IdentitiesToJSON(json: any): PartnerDraftX12Identities {
    return PartnerDraftX12IdentitiesToJSONTyped(json, false);
}

export function PartnerDraftX12IdentitiesToJSONTyped(value?: PartnerDraftX12Identities | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'production': PartnerDraftX12IdentityToJSON(value['production']),
        'test': PartnerDraftX12IdentityToJSON(value['test']),
    };
}
