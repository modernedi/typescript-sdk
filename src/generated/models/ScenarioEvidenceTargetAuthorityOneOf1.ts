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
 * @interface ScenarioEvidenceTargetAuthorityOneOf1
 */
export interface ScenarioEvidenceTargetAuthorityOneOf1 {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf1
     */
    stepId: string;
    /**
     *
     * @type {ScenarioEvidenceTargetAuthorityOneOf1KindEnum}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf1
     */
    kind: ScenarioEvidenceTargetAuthorityOneOf1KindEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf1
     */
    adapterId: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf1
     */
    mappingId: number | null;
}


/**
 * @export
 */
export const ScenarioEvidenceTargetAuthorityOneOf1KindEnum = {
    Adapter: 'adapter',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceTargetAuthorityOneOf1KindEnum = typeof ScenarioEvidenceTargetAuthorityOneOf1KindEnum[keyof typeof ScenarioEvidenceTargetAuthorityOneOf1KindEnum];


/**
 * Check if a given object implements the ScenarioEvidenceTargetAuthorityOneOf1 interface.
 */
export function instanceOfScenarioEvidenceTargetAuthorityOneOf1(value: object): value is ScenarioEvidenceTargetAuthorityOneOf1 {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'adapter') return false;

    if (!('adapterId' in value) || value['adapterId'] === undefined) return false;
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceTargetAuthorityOneOf1FromJSON(json: any): ScenarioEvidenceTargetAuthorityOneOf1 {
    return ScenarioEvidenceTargetAuthorityOneOf1FromJSONTyped(json, false);
}

export function ScenarioEvidenceTargetAuthorityOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceTargetAuthorityOneOf1 {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'kind': json['kind'],
        'adapterId': json['adapterId'],
        'mappingId': json['mappingId'],
    };
}

export function ScenarioEvidenceTargetAuthorityOneOf1ToJSON(json: any): ScenarioEvidenceTargetAuthorityOneOf1 {
    return ScenarioEvidenceTargetAuthorityOneOf1ToJSONTyped(json, false);
}

export function ScenarioEvidenceTargetAuthorityOneOf1ToJSONTyped(value?: ScenarioEvidenceTargetAuthorityOneOf1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'kind': value['kind'],
        'adapterId': value['adapterId'],
        'mappingId': value['mappingId'],
    };
}
