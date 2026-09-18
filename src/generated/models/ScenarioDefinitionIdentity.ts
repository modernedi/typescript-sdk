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
 * @interface ScenarioDefinitionIdentity
 */
export interface ScenarioDefinitionIdentity {
    /**
     * A lowercase, DNS-like ownership namespace.
     * @type {string}
     * @memberof ScenarioDefinitionIdentity
     */
    namespace: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioDefinitionIdentity
     */
    key: string;
    /**
     * A trim-exact artifact version with no control characters. This versions a published definition; it is separate from apiVersion.
     * @type {string}
     * @memberof ScenarioDefinitionIdentity
     */
    version: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioDefinitionIdentity
     */
    contentSha256: string;
}

/**
 * Check if a given object implements the ScenarioDefinitionIdentity interface.
 */
export function instanceOfScenarioDefinitionIdentity(value: object): value is ScenarioDefinitionIdentity {
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('contentSha256' in value) || value['contentSha256'] === undefined) return false;
    return true;
}

export function ScenarioDefinitionIdentityFromJSON(json: any): ScenarioDefinitionIdentity {
    return ScenarioDefinitionIdentityFromJSONTyped(json, false);
}

export function ScenarioDefinitionIdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioDefinitionIdentity {
    if (json == null) {
        return json;
    }
    return {

        'namespace': json['namespace'],
        'key': json['key'],
        'version': json['version'],
        'contentSha256': json['contentSha256'],
    };
}

export function ScenarioDefinitionIdentityToJSON(json: any): ScenarioDefinitionIdentity {
    return ScenarioDefinitionIdentityToJSONTyped(json, false);
}

export function ScenarioDefinitionIdentityToJSONTyped(value?: ScenarioDefinitionIdentity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'namespace': value['namespace'],
        'key': value['key'],
        'version': value['version'],
        'contentSha256': value['contentSha256'],
    };
}
