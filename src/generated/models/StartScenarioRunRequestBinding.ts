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
 * @interface StartScenarioRunRequestBinding
 */
export interface StartScenarioRunRequestBinding {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof StartScenarioRunRequestBinding
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof StartScenarioRunRequestBinding
     */
    revision: number;
    /**
     *
     * @type {string}
     * @memberof StartScenarioRunRequestBinding
     */
    contentSha256: string;
}

/**
 * Check if a given object implements the StartScenarioRunRequestBinding interface.
 */
export function instanceOfStartScenarioRunRequestBinding(value: object): value is StartScenarioRunRequestBinding {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    return true;
}

export function StartScenarioRunRequestBindingFromJSON(json: any): StartScenarioRunRequestBinding {
    return StartScenarioRunRequestBindingFromJSONTyped(json, false);
}

export function StartScenarioRunRequestBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartScenarioRunRequestBinding {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'revision': json['revision'],
        'contentSha256': json['contentSha256'],
    };
}

export function StartScenarioRunRequestBindingToJSON(json: any): StartScenarioRunRequestBinding {
    return StartScenarioRunRequestBindingToJSONTyped(json, false);
}

export function StartScenarioRunRequestBindingToJSONTyped(value?: StartScenarioRunRequestBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'revision': value['revision'],
        'contentSha256': value['contentSha256'],
    };
}
