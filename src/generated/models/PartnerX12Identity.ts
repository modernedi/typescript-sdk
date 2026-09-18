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
/**
 *
 * @export
 * @interface PartnerX12Identity
 */
export interface PartnerX12Identity {
    /**
     * ISA qualifier ModernEDI expects for this partner in the selected environment. Connected partners always use exactly 2 characters; detached draft values may be incomplete.
     * @type {string}
     * @memberof PartnerX12Identity
     */
    isaQualifier: string;
    /**
     * ISA id ModernEDI expects for this partner in the selected environment. Connected partners always use between 1 and 15 characters inclusive; detached draft values may be incomplete.
     * @type {string}
     * @memberof PartnerX12Identity
     */
    isaId: string;
    /**
     * GS sender or receiver id configured for this partner in the selected environment. Connected partners always use between 1 and 15 characters inclusive; detached draft values may be incomplete.
     * @type {string}
     * @memberof PartnerX12Identity
     */
    gsId: string;
}

/**
 * Check if a given object implements the PartnerX12Identity interface.
 */
export function instanceOfPartnerX12Identity(value: object): value is PartnerX12Identity {
    if (!('isaQualifier' in value) || value['isaQualifier'] === undefined) return false;
    if (!('isaId' in value) || value['isaId'] === undefined) return false;
    if (!('gsId' in value) || value['gsId'] === undefined) return false;
    return true;
}

export function PartnerX12IdentityFromJSON(json: any): PartnerX12Identity {
    return PartnerX12IdentityFromJSONTyped(json, false);
}

export function PartnerX12IdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerX12Identity {
    if (json == null) {
        return json;
    }
    return {

        'isaQualifier': json['isaQualifier'],
        'isaId': json['isaId'],
        'gsId': json['gsId'],
    };
}

export function PartnerX12IdentityToJSON(json: any): PartnerX12Identity {
    return PartnerX12IdentityToJSONTyped(json, false);
}

export function PartnerX12IdentityToJSONTyped(value?: PartnerX12Identity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'isaQualifier': value['isaQualifier'],
        'isaId': value['isaId'],
        'gsId': value['gsId'],
    };
}
