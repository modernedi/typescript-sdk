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
 * @interface PartnerDraftX12Identity
 */
export interface PartnerDraftX12Identity {
    /**
     * Draft ISA qualifier. Attaching an AS2 connection requires exactly 2 characters.
     * @type {string}
     * @memberof PartnerDraftX12Identity
     */
    isaQualifier: string;
    /**
     * Draft ISA id. Attaching an AS2 connection requires between 1 and 15 characters inclusive.
     * @type {string}
     * @memberof PartnerDraftX12Identity
     */
    isaId: string;
    /**
     * Draft GS id. Attaching an AS2 connection requires between 1 and 15 characters inclusive.
     * @type {string}
     * @memberof PartnerDraftX12Identity
     */
    gsId: string;
}

/**
 * Check if a given object implements the PartnerDraftX12Identity interface.
 */
export function instanceOfPartnerDraftX12Identity(value: object): value is PartnerDraftX12Identity {
    if (!('isaQualifier' in value) || value['isaQualifier'] === undefined) return false;
    if (!('isaId' in value) || value['isaId'] === undefined) return false;
    if (!('gsId' in value) || value['gsId'] === undefined) return false;
    return true;
}

export function PartnerDraftX12IdentityFromJSON(json: any): PartnerDraftX12Identity {
    return PartnerDraftX12IdentityFromJSONTyped(json, false);
}

export function PartnerDraftX12IdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerDraftX12Identity {
    if (json == null) {
        return json;
    }
    return {

        'isaQualifier': json['isaQualifier'],
        'isaId': json['isaId'],
        'gsId': json['gsId'],
    };
}

export function PartnerDraftX12IdentityToJSON(json: any): PartnerDraftX12Identity {
    return PartnerDraftX12IdentityToJSONTyped(json, false);
}

export function PartnerDraftX12IdentityToJSONTyped(value?: PartnerDraftX12Identity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'isaQualifier': value['isaQualifier'],
        'isaId': value['isaId'],
        'gsId': value['gsId'],
    };
}
