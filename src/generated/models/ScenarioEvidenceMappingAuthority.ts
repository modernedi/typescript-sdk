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
 * @interface ScenarioEvidenceMappingAuthority
 */
export interface ScenarioEvidenceMappingAuthority {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceMappingAuthority
     */
    stepId: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceMappingAuthority
     */
    id: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceMappingAuthority
     */
    partnerId: number;
    /**
     *
     * @type {ScenarioEvidenceMappingAuthorityDirectionEnum}
     * @memberof ScenarioEvidenceMappingAuthority
     */
    direction: ScenarioEvidenceMappingAuthorityDirectionEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceMappingAuthority
     */
    x12Version: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceMappingAuthority
     */
    transactionSet: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceMappingAuthority
     */
    configurationEtag: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceMappingAuthority
     */
    mapFileSha256Hash: string;
}


/**
 * @export
 */
export const ScenarioEvidenceMappingAuthorityDirectionEnum = {
    Incoming: 'incoming',
    Outgoing: 'outgoing',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceMappingAuthorityDirectionEnum = typeof ScenarioEvidenceMappingAuthorityDirectionEnum[keyof typeof ScenarioEvidenceMappingAuthorityDirectionEnum];


/**
 * Check if a given object implements the ScenarioEvidenceMappingAuthority interface.
 */
export function instanceOfScenarioEvidenceMappingAuthority(value: object): value is ScenarioEvidenceMappingAuthority {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('partnerId' in value) || value['partnerId'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('transactionSet' in value) || value['transactionSet'] === undefined) return false;
    if (!('configurationEtag' in value) || value['configurationEtag'] === undefined) return false;
    if (!('mapFileSha256Hash' in value) || value['mapFileSha256Hash'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceMappingAuthorityFromJSON(json: any): ScenarioEvidenceMappingAuthority {
    return ScenarioEvidenceMappingAuthorityFromJSONTyped(json, false);
}

export function ScenarioEvidenceMappingAuthorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceMappingAuthority {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'id': json['id'],
        'partnerId': json['partnerId'],
        'direction': json['direction'],
        'x12Version': json['x12Version'],
        'transactionSet': json['transactionSet'],
        'configurationEtag': json['configurationEtag'],
        'mapFileSha256Hash': json['mapFileSha256Hash'],
    };
}

export function ScenarioEvidenceMappingAuthorityToJSON(json: any): ScenarioEvidenceMappingAuthority {
    return ScenarioEvidenceMappingAuthorityToJSONTyped(json, false);
}

export function ScenarioEvidenceMappingAuthorityToJSONTyped(value?: ScenarioEvidenceMappingAuthority | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'id': value['id'],
        'partnerId': value['partnerId'],
        'direction': value['direction'],
        'x12Version': value['x12Version'],
        'transactionSet': value['transactionSet'],
        'configurationEtag': value['configurationEtag'],
        'mapFileSha256Hash': value['mapFileSha256Hash'],
    };
}
