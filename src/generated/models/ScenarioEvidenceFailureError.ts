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
 * @interface ScenarioEvidenceFailureError
 */
export interface ScenarioEvidenceFailureError {
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceFailureError
     */
    code: string;
    /**
     *
     * @type {ScenarioEvidenceFailureErrorMessageEnum}
     * @memberof ScenarioEvidenceFailureError
     */
    message: ScenarioEvidenceFailureErrorMessageEnum;
}


/**
 * @export
 */
export const ScenarioEvidenceFailureErrorMessageEnum = {
    SeeTheRunTimelineForTheFailureDetail: 'See the run timeline for the failure detail.',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceFailureErrorMessageEnum = typeof ScenarioEvidenceFailureErrorMessageEnum[keyof typeof ScenarioEvidenceFailureErrorMessageEnum];


/**
 * Check if a given object implements the ScenarioEvidenceFailureError interface.
 */
export function instanceOfScenarioEvidenceFailureError(value: object): value is ScenarioEvidenceFailureError {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (value['message'] !== 'See the run timeline for the failure detail.') return false;

    return true;
}

export function ScenarioEvidenceFailureErrorFromJSON(json: any): ScenarioEvidenceFailureError {
    return ScenarioEvidenceFailureErrorFromJSONTyped(json, false);
}

export function ScenarioEvidenceFailureErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceFailureError {
    if (json == null) {
        return json;
    }
    return {

        'code': json['code'],
        'message': json['message'],
    };
}

export function ScenarioEvidenceFailureErrorToJSON(json: any): ScenarioEvidenceFailureError {
    return ScenarioEvidenceFailureErrorToJSONTyped(json, false);
}

export function ScenarioEvidenceFailureErrorToJSONTyped(value?: ScenarioEvidenceFailureError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'code': value['code'],
        'message': value['message'],
    };
}
