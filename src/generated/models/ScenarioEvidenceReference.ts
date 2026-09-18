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
 * @interface ScenarioEvidenceReference
 */
export interface ScenarioEvidenceReference {
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceReference
     */
    reference: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceReference
     */
    kind: string;
}

/**
 * Check if a given object implements the ScenarioEvidenceReference interface.
 */
export function instanceOfScenarioEvidenceReference(value: object): value is ScenarioEvidenceReference {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceReferenceFromJSON(json: any): ScenarioEvidenceReference {
    return ScenarioEvidenceReferenceFromJSONTyped(json, false);
}

export function ScenarioEvidenceReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceReference {
    if (json == null) {
        return json;
    }
    return {

        'reference': json['reference'],
        'kind': json['kind'],
    };
}

export function ScenarioEvidenceReferenceToJSON(json: any): ScenarioEvidenceReference {
    return ScenarioEvidenceReferenceToJSONTyped(json, false);
}

export function ScenarioEvidenceReferenceToJSONTyped(value?: ScenarioEvidenceReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'reference': value['reference'],
        'kind': value['kind'],
    };
}
