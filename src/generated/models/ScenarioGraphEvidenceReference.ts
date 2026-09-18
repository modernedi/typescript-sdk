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
 * @interface ScenarioGraphEvidenceReference
 */
export interface ScenarioGraphEvidenceReference {
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphEvidenceReference
     */
    reference: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphEvidenceReference
     */
    kind: string;
}

/**
 * Check if a given object implements the ScenarioGraphEvidenceReference interface.
 */
export function instanceOfScenarioGraphEvidenceReference(value: object): value is ScenarioGraphEvidenceReference {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    return true;
}

export function ScenarioGraphEvidenceReferenceFromJSON(json: any): ScenarioGraphEvidenceReference {
    return ScenarioGraphEvidenceReferenceFromJSONTyped(json, false);
}

export function ScenarioGraphEvidenceReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphEvidenceReference {
    if (json == null) {
        return json;
    }
    return {

        'reference': json['reference'],
        'kind': json['kind'],
    };
}

export function ScenarioGraphEvidenceReferenceToJSON(json: any): ScenarioGraphEvidenceReference {
    return ScenarioGraphEvidenceReferenceToJSONTyped(json, false);
}

export function ScenarioGraphEvidenceReferenceToJSONTyped(value?: ScenarioGraphEvidenceReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'reference': value['reference'],
        'kind': value['kind'],
    };
}
