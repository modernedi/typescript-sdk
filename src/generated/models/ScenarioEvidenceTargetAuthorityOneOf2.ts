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
 * @interface ScenarioEvidenceTargetAuthorityOneOf2
 */
export interface ScenarioEvidenceTargetAuthorityOneOf2 {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf2
     */
    stepId: string;
    /**
     *
     * @type {ScenarioEvidenceTargetAuthorityOneOf2KindEnum}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf2
     */
    kind: ScenarioEvidenceTargetAuthorityOneOf2KindEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf2
     */
    adapterId: string | null;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf2
     */
    mappingId: string | null;
}


/**
 * @export
 */
export const ScenarioEvidenceTargetAuthorityOneOf2KindEnum = {
    ObservationOnly: 'observation_only',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceTargetAuthorityOneOf2KindEnum = typeof ScenarioEvidenceTargetAuthorityOneOf2KindEnum[keyof typeof ScenarioEvidenceTargetAuthorityOneOf2KindEnum];


/**
 * Check if a given object implements the ScenarioEvidenceTargetAuthorityOneOf2 interface.
 */
export function instanceOfScenarioEvidenceTargetAuthorityOneOf2(value: object): value is ScenarioEvidenceTargetAuthorityOneOf2 {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'observation_only') return false;

    if (!('adapterId' in value) || value['adapterId'] === undefined) return false;
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceTargetAuthorityOneOf2FromJSON(json: any): ScenarioEvidenceTargetAuthorityOneOf2 {
    return ScenarioEvidenceTargetAuthorityOneOf2FromJSONTyped(json, false);
}

export function ScenarioEvidenceTargetAuthorityOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceTargetAuthorityOneOf2 {
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

export function ScenarioEvidenceTargetAuthorityOneOf2ToJSON(json: any): ScenarioEvidenceTargetAuthorityOneOf2 {
    return ScenarioEvidenceTargetAuthorityOneOf2ToJSONTyped(json, false);
}

export function ScenarioEvidenceTargetAuthorityOneOf2ToJSONTyped(value?: ScenarioEvidenceTargetAuthorityOneOf2 | null, ignoreDiscriminator: boolean = false): any {
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
