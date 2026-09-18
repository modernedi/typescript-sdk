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
 * @interface ScenarioEvidenceTargetAuthorityOneOf
 */
export interface ScenarioEvidenceTargetAuthorityOneOf {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf
     */
    stepId: string;
    /**
     *
     * @type {ScenarioEvidenceTargetAuthorityOneOfKindEnum}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf
     */
    kind: ScenarioEvidenceTargetAuthorityOneOfKindEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf
     */
    adapterId: string | null;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceTargetAuthorityOneOf
     */
    mappingId: number;
}


/**
 * @export
 */
export const ScenarioEvidenceTargetAuthorityOneOfKindEnum = {
    RuntimeMapping: 'runtime_mapping',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceTargetAuthorityOneOfKindEnum = typeof ScenarioEvidenceTargetAuthorityOneOfKindEnum[keyof typeof ScenarioEvidenceTargetAuthorityOneOfKindEnum];


/**
 * Check if a given object implements the ScenarioEvidenceTargetAuthorityOneOf interface.
 */
export function instanceOfScenarioEvidenceTargetAuthorityOneOf(value: object): value is ScenarioEvidenceTargetAuthorityOneOf {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'runtime_mapping') return false;

    if (!('adapterId' in value) || value['adapterId'] === undefined) return false;
    if (!('mappingId' in value) || value['mappingId'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceTargetAuthorityOneOfFromJSON(json: any): ScenarioEvidenceTargetAuthorityOneOf {
    return ScenarioEvidenceTargetAuthorityOneOfFromJSONTyped(json, false);
}

export function ScenarioEvidenceTargetAuthorityOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceTargetAuthorityOneOf {
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

export function ScenarioEvidenceTargetAuthorityOneOfToJSON(json: any): ScenarioEvidenceTargetAuthorityOneOf {
    return ScenarioEvidenceTargetAuthorityOneOfToJSONTyped(json, false);
}

export function ScenarioEvidenceTargetAuthorityOneOfToJSONTyped(value?: ScenarioEvidenceTargetAuthorityOneOf | null, ignoreDiscriminator: boolean = false): any {
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
