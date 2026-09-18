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
import type { ScenarioEvidenceAuthority } from './ScenarioEvidenceAuthority.js';
import {
    ScenarioEvidenceAuthorityFromJSON,
    ScenarioEvidenceAuthorityFromJSONTyped,
    ScenarioEvidenceAuthorityToJSON,
    ScenarioEvidenceAuthorityToJSONTyped,
} from './ScenarioEvidenceAuthority.js';

/**
 *
 * @export
 * @interface ScenarioEvidenceBinding
 */
export interface ScenarioEvidenceBinding {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceBinding
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioEvidenceBinding
     */
    revision: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceBinding
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceBinding
     */
    snapshotContentSha256: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceBinding
     */
    definitionContentSha256: string;
    /**
     *
     * @type {ScenarioEvidenceBindingAdapterIdEnum}
     * @memberof ScenarioEvidenceBinding
     */
    adapterId: ScenarioEvidenceBindingAdapterIdEnum;
    /**
     *
     * @type {ScenarioEvidenceBindingEnvironmentEnum}
     * @memberof ScenarioEvidenceBinding
     */
    environment: ScenarioEvidenceBindingEnvironmentEnum;
    /**
     *
     * @type {ScenarioEvidenceAuthority}
     * @memberof ScenarioEvidenceBinding
     */
    authority: ScenarioEvidenceAuthority;
}


/**
 * @export
 */
export const ScenarioEvidenceBindingAdapterIdEnum = {
    ScenarioGraphInterpreterV1: 'scenario-graph-interpreter-v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceBindingAdapterIdEnum = typeof ScenarioEvidenceBindingAdapterIdEnum[keyof typeof ScenarioEvidenceBindingAdapterIdEnum];

/**
 * @export
 */
export const ScenarioEvidenceBindingEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioEvidenceBindingEnvironmentEnum = typeof ScenarioEvidenceBindingEnvironmentEnum[keyof typeof ScenarioEvidenceBindingEnvironmentEnum];


/**
 * Check if a given object implements the ScenarioEvidenceBinding interface.
 */
export function instanceOfScenarioEvidenceBinding(value: object): value is ScenarioEvidenceBinding {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('snapshotContentSha256' in value) || value['snapshotContentSha256'] === undefined) return false;
    if (!('definitionContentSha256' in value) || value['definitionContentSha256'] === undefined) return false;
    if (!('adapterId' in value) || value['adapterId'] === undefined) return false;
    if (value['adapterId'] !== 'scenario-graph-interpreter-v1') return false;

    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('authority' in value) || value['authority'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceBindingFromJSON(json: any): ScenarioEvidenceBinding {
    return ScenarioEvidenceBindingFromJSONTyped(json, false);
}

export function ScenarioEvidenceBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceBinding {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'revision': json['revision'],
        'name': json['name'],
        'snapshotContentSha256': json['snapshotContentSha256'],
        'definitionContentSha256': json['definitionContentSha256'],
        'adapterId': json['adapterId'],
        'environment': json['environment'],
        'authority': ScenarioEvidenceAuthorityFromJSON(json['authority']),
    };
}

export function ScenarioEvidenceBindingToJSON(json: any): ScenarioEvidenceBinding {
    return ScenarioEvidenceBindingToJSONTyped(json, false);
}

export function ScenarioEvidenceBindingToJSONTyped(value?: ScenarioEvidenceBinding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'revision': value['revision'],
        'name': value['name'],
        'snapshotContentSha256': value['snapshotContentSha256'],
        'definitionContentSha256': value['definitionContentSha256'],
        'adapterId': value['adapterId'],
        'environment': value['environment'],
        'authority': ScenarioEvidenceAuthorityToJSON(value['authority']),
    };
}
