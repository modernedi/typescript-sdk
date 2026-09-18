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
import type { PartnerDraftX12Identities } from './PartnerDraftX12Identities.js';
import {
    PartnerDraftX12IdentitiesFromJSON,
    PartnerDraftX12IdentitiesFromJSONTyped,
    PartnerDraftX12IdentitiesToJSON,
    PartnerDraftX12IdentitiesToJSONTyped,
} from './PartnerDraftX12Identities.js';
import type { PartnerX12Identities } from './PartnerX12Identities.js';
import {
    PartnerX12IdentitiesFromJSON,
    PartnerX12IdentitiesFromJSONTyped,
    PartnerX12IdentitiesToJSON,
    PartnerX12IdentitiesToJSONTyped,
} from './PartnerX12Identities.js';
import type { PartnerDraftX12Identity } from './PartnerDraftX12Identity.js';
import {
    PartnerDraftX12IdentityFromJSON,
    PartnerDraftX12IdentityFromJSONTyped,
    PartnerDraftX12IdentityToJSON,
    PartnerDraftX12IdentityToJSONTyped,
} from './PartnerDraftX12Identity.js';

/**
 * Connected partners satisfy `PartnerX12Identities`; detached drafts may contain incomplete authoring values until an AS2 connection is attached.
 * @export
 * @interface IntegrationPartnerX12
 */
export interface IntegrationPartnerX12 {
    /**
     *
     * @type {PartnerDraftX12Identity}
     * @memberof IntegrationPartnerX12
     */
    production: PartnerDraftX12Identity;
    /**
     * Current test authoring values, or `null` when no test identity has been entered.
     * @type {PartnerDraftX12Identity}
     * @memberof IntegrationPartnerX12
     */
    test: PartnerDraftX12Identity | null;
}

/**
 * Check if a given object implements the IntegrationPartnerX12 interface.
 */
export function instanceOfIntegrationPartnerX12(value: object): value is IntegrationPartnerX12 {
    if (!('production' in value) || value['production'] === undefined) return false;
    if (!('test' in value) || value['test'] === undefined) return false;
    return true;
}

export function IntegrationPartnerX12FromJSON(json: any): IntegrationPartnerX12 {
    return IntegrationPartnerX12FromJSONTyped(json, false);
}

export function IntegrationPartnerX12FromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationPartnerX12 {
    if (json == null) {
        return json;
    }
    return {

        'production': PartnerDraftX12IdentityFromJSON(json['production']),
        'test': PartnerDraftX12IdentityFromJSON(json['test']),
    };
}

export function IntegrationPartnerX12ToJSON(json: any): IntegrationPartnerX12 {
    return IntegrationPartnerX12ToJSONTyped(json, false);
}

export function IntegrationPartnerX12ToJSONTyped(value?: IntegrationPartnerX12 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'production': PartnerDraftX12IdentityToJSON(value['production']),
        'test': PartnerDraftX12IdentityToJSON(value['test']),
    };
}
