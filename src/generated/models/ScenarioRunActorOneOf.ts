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
 * @interface ScenarioRunActorOneOf
 */
export interface ScenarioRunActorOneOf {
    /**
     *
     * @type {number}
     * @memberof ScenarioRunActorOneOf
     */
    memberId: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunActorOneOf
     */
    email: string;
    /**
     *
     * @type {ScenarioRunActorOneOfRoleEnum}
     * @memberof ScenarioRunActorOneOf
     */
    role: ScenarioRunActorOneOfRoleEnum;
}


/**
 * @export
 */
export const ScenarioRunActorOneOfRoleEnum = {
    Owner: 'OWNER',
    Operator: 'OPERATOR',
    Viewer: 'VIEWER',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioRunActorOneOfRoleEnum = typeof ScenarioRunActorOneOfRoleEnum[keyof typeof ScenarioRunActorOneOfRoleEnum];


/**
 * Check if a given object implements the ScenarioRunActorOneOf interface.
 */
export function instanceOfScenarioRunActorOneOf(value: object): value is ScenarioRunActorOneOf {
    if (!('memberId' in value) || value['memberId'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function ScenarioRunActorOneOfFromJSON(json: any): ScenarioRunActorOneOf {
    return ScenarioRunActorOneOfFromJSONTyped(json, false);
}

export function ScenarioRunActorOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunActorOneOf {
    if (json == null) {
        return json;
    }
    return {

        'memberId': json['memberId'],
        'email': json['email'],
        'role': json['role'],
    };
}

export function ScenarioRunActorOneOfToJSON(json: any): ScenarioRunActorOneOf {
    return ScenarioRunActorOneOfToJSONTyped(json, false);
}

export function ScenarioRunActorOneOfToJSONTyped(value?: ScenarioRunActorOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'memberId': value['memberId'],
        'email': value['email'],
        'role': value['role'],
    };
}
