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
 * @interface ScenarioContextBinding
 */
export interface ScenarioContextBinding {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioContextBinding
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioContextBinding
     */
    revision: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioContextBinding
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioContextBinding
     */
    contentSha256: string;
}

/**
 * Check if a given object implements the ScenarioContextBinding interface.
 */
export function instanceOfScenarioContextBinding(value: object): value is ScenarioContextBinding {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    return true;
}

export function ScenarioContextBindingFromJSON(json: any): ScenarioContextBinding {
    return ScenarioContextBindingFromJSONTyped(json, false);
}

export function ScenarioContextBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioContextBinding {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'revision': json['revision'],
        'name': json['name'],
        'contentSha256': json['contentSha256'],
    };
}

export function ScenarioContextBindingToJSON(json: any): ScenarioContextBinding {
    return ScenarioContextBindingToJSONTyped(json, false);
}

export function ScenarioContextBindingToJSONTyped(value?: ScenarioContextBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'revision': value['revision'],
        'name': value['name'],
        'contentSha256': value['contentSha256'],
    };
}
