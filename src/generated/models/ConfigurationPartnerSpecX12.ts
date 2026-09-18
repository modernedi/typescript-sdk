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
 * Current production and optional test X12 identities. Detached drafts may contain incomplete authoring values.
 * @export
 * @interface ConfigurationPartnerSpecX12
 */
export interface ConfigurationPartnerSpecX12 {
    /**
     *
     * @type {PartnerDraftX12Identity}
     * @memberof ConfigurationPartnerSpecX12
     */
    production: PartnerDraftX12Identity;
    /**
     * Current test authoring values, or `null` when no test identity has been entered.
     * @type {PartnerDraftX12Identity}
     * @memberof ConfigurationPartnerSpecX12
     */
    test: PartnerDraftX12Identity | null;
}

/**
 * Check if a given object implements the ConfigurationPartnerSpecX12 interface.
 */
export function instanceOfConfigurationPartnerSpecX12(value: object): value is ConfigurationPartnerSpecX12 {
    if (!('production' in value) || value['production'] === undefined) return false;
    if (!('test' in value) || value['test'] === undefined) return false;
    return true;
}

export function ConfigurationPartnerSpecX12FromJSON(json: any): ConfigurationPartnerSpecX12 {
    return ConfigurationPartnerSpecX12FromJSONTyped(json, false);
}

export function ConfigurationPartnerSpecX12FromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPartnerSpecX12 {
    if (json == null) {
        return json;
    }
    return {

        'production': PartnerDraftX12IdentityFromJSON(json['production']),
        'test': PartnerDraftX12IdentityFromJSON(json['test']),
    };
}

export function ConfigurationPartnerSpecX12ToJSON(json: any): ConfigurationPartnerSpecX12 {
    return ConfigurationPartnerSpecX12ToJSONTyped(json, false);
}

export function ConfigurationPartnerSpecX12ToJSONTyped(value?: ConfigurationPartnerSpecX12 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'production': PartnerDraftX12IdentityToJSON(value['production']),
        'test': PartnerDraftX12IdentityToJSON(value['test']),
    };
}
