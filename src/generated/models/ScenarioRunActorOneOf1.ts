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
 * @interface ScenarioRunActorOneOf1
 */
export interface ScenarioRunActorOneOf1 {
    /**
     *
     * @type {number}
     * @memberof ScenarioRunActorOneOf1
     */
    apiKeyId: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunActorOneOf1
     */
    label: string;
}

/**
 * Check if a given object implements the ScenarioRunActorOneOf1 interface.
 */
export function instanceOfScenarioRunActorOneOf1(value: object): value is ScenarioRunActorOneOf1 {
    if (!('apiKeyId' in value) || value['apiKeyId'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    return true;
}

export function ScenarioRunActorOneOf1FromJSON(json: any): ScenarioRunActorOneOf1 {
    return ScenarioRunActorOneOf1FromJSONTyped(json, false);
}

export function ScenarioRunActorOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunActorOneOf1 {
    if (json == null) {
        return json;
    }
    return {

        'apiKeyId': json['apiKeyId'],
        'label': json['label'],
    };
}

export function ScenarioRunActorOneOf1ToJSON(json: any): ScenarioRunActorOneOf1 {
    return ScenarioRunActorOneOf1ToJSONTyped(json, false);
}

export function ScenarioRunActorOneOf1ToJSONTyped(value?: ScenarioRunActorOneOf1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'apiKeyId': value['apiKeyId'],
        'label': value['label'],
    };
}
