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
 * @interface ScenarioEvidencePartnerAuthority
 */
export interface ScenarioEvidencePartnerAuthority {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidencePartnerAuthority
     */
    actorId: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidencePartnerAuthority
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidencePartnerAuthority
     */
    configurationSha256: string;
}

/**
 * Check if a given object implements the ScenarioEvidencePartnerAuthority interface.
 */
export function instanceOfScenarioEvidencePartnerAuthority(value: object): value is ScenarioEvidencePartnerAuthority {
    if (!('actorId' in value) || value['actorId'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('configurationSha256' in value) || value['configurationSha256'] === undefined) return false;
    return true;
}

export function ScenarioEvidencePartnerAuthorityFromJSON(json: any): ScenarioEvidencePartnerAuthority {
    return ScenarioEvidencePartnerAuthorityFromJSONTyped(json, false);
}

export function ScenarioEvidencePartnerAuthorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidencePartnerAuthority {
    if (json == null) {
        return json;
    }
    return {

        'actorId': json['actorId'],
        'id': json['id'],
        'configurationSha256': json['configurationSha256'],
    };
}

export function ScenarioEvidencePartnerAuthorityToJSON(json: any): ScenarioEvidencePartnerAuthority {
    return ScenarioEvidencePartnerAuthorityToJSONTyped(json, false);
}

export function ScenarioEvidencePartnerAuthorityToJSONTyped(value?: ScenarioEvidencePartnerAuthority | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'actorId': value['actorId'],
        'id': value['id'],
        'configurationSha256': value['configurationSha256'],
    };
}
