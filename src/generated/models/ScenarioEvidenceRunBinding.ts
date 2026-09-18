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
 * @interface ScenarioEvidenceRunBinding
 */
export interface ScenarioEvidenceRunBinding {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceRunBinding
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceRunBinding
     */
    revision: number;
}

/**
 * Check if a given object implements the ScenarioEvidenceRunBinding interface.
 */
export function instanceOfScenarioEvidenceRunBinding(value: object): value is ScenarioEvidenceRunBinding {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceRunBindingFromJSON(json: any): ScenarioEvidenceRunBinding {
    return ScenarioEvidenceRunBindingFromJSONTyped(json, false);
}

export function ScenarioEvidenceRunBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceRunBinding {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'revision': json['revision'],
    };
}

export function ScenarioEvidenceRunBindingToJSON(json: any): ScenarioEvidenceRunBinding {
    return ScenarioEvidenceRunBindingToJSONTyped(json, false);
}

export function ScenarioEvidenceRunBindingToJSONTyped(value?: ScenarioEvidenceRunBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'revision': value['revision'],
    };
}
