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
 * @interface ScenarioGraphExecution
 */
export interface ScenarioGraphExecution {
    /**
     *
     * @type {ScenarioGraphExecutionKindEnum}
     * @memberof ScenarioGraphExecution
     */
    kind: ScenarioGraphExecutionKindEnum;
    /**
     *
     * @type {ScenarioGraphExecutionRuntimeVersionEnum}
     * @memberof ScenarioGraphExecution
     */
    runtimeVersion: ScenarioGraphExecutionRuntimeVersionEnum;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphExecution
     */
    authorityContentSha256: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioGraphExecution
     */
    parametersContentSha256: string;
}


/**
 * @export
 */
export const ScenarioGraphExecutionKindEnum = {
    ScenarioGraphV1: 'scenario_graph_v1',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphExecutionKindEnum = typeof ScenarioGraphExecutionKindEnum[keyof typeof ScenarioGraphExecutionKindEnum];

/**
 * @export
 */
export const ScenarioGraphExecutionRuntimeVersionEnum = {
    _100: '1.0.0',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphExecutionRuntimeVersionEnum = typeof ScenarioGraphExecutionRuntimeVersionEnum[keyof typeof ScenarioGraphExecutionRuntimeVersionEnum];


/**
 * Check if a given object implements the ScenarioGraphExecution interface.
 */
export function instanceOfScenarioGraphExecution(value: object): value is ScenarioGraphExecution {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'scenario_graph_v1') return false;

    if (!('runtimeVersion' in value) || value['runtimeVersion'] === undefined) return false;
    if (value['runtimeVersion'] !== '1.0.0') return false;

    if (!('authorityContentSha256' in value) || value['authorityContentSha256'] === undefined) return false;
    if (!('parametersContentSha256' in value) || value['parametersContentSha256'] === undefined) return false;
    return true;
}

export function ScenarioGraphExecutionFromJSON(json: any): ScenarioGraphExecution {
    return ScenarioGraphExecutionFromJSONTyped(json, false);
}

export function ScenarioGraphExecutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphExecution {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'runtimeVersion': json['runtimeVersion'],
        'authorityContentSha256': json['authorityContentSha256'],
        'parametersContentSha256': json['parametersContentSha256'],
    };
}

export function ScenarioGraphExecutionToJSON(json: any): ScenarioGraphExecution {
    return ScenarioGraphExecutionToJSONTyped(json, false);
}

export function ScenarioGraphExecutionToJSONTyped(value?: ScenarioGraphExecution | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'runtimeVersion': value['runtimeVersion'],
        'authorityContentSha256': value['authorityContentSha256'],
        'parametersContentSha256': value['parametersContentSha256'],
    };
}
