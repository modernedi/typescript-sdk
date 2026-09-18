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
import type { ScenarioDefinitionIdentity } from './ScenarioDefinitionIdentity.js';
import {
    ScenarioDefinitionIdentityFromJSON,
    ScenarioDefinitionIdentityFromJSONTyped,
    ScenarioDefinitionIdentityToJSON,
    ScenarioDefinitionIdentityToJSONTyped,
} from './ScenarioDefinitionIdentity.js';
import type { StartScenarioRunRequestBinding } from './StartScenarioRunRequestBinding.js';
import {
    StartScenarioRunRequestBindingFromJSON,
    StartScenarioRunRequestBindingFromJSONTyped,
    StartScenarioRunRequestBindingToJSON,
    StartScenarioRunRequestBindingToJSONTyped,
} from './StartScenarioRunRequestBinding.js';
import type { ScenarioRunParameterValue } from './ScenarioRunParameterValue.js';
import {
    ScenarioRunParameterValueFromJSON,
    ScenarioRunParameterValueFromJSONTyped,
    ScenarioRunParameterValueToJSON,
    ScenarioRunParameterValueToJSONTyped,
} from './ScenarioRunParameterValue.js';

/**
 *
 * @export
 * @interface StartScenarioRunRequest
 */
export interface StartScenarioRunRequest {
    /**
     *
     * @type {ScenarioDefinitionIdentity}
     * @memberof StartScenarioRunRequest
     */
    definition: ScenarioDefinitionIdentity;
    /**
     *
     * @type {StartScenarioRunRequestEnvironmentEnum}
     * @memberof StartScenarioRunRequest
     */
    environment: StartScenarioRunRequestEnvironmentEnum;
    /**
     *
     * @type {StartScenarioRunRequestBinding}
     * @memberof StartScenarioRunRequest
     */
    binding: StartScenarioRunRequestBinding;
    /**
     * Values keyed by declared definition parameter ID. The server rejects unknown, missing-required, or type-invalid values and materializes declared defaults before hashing the run input. Raw parameter values are never returned by the run API.
     * @type {{ [key: string]: ScenarioRunParameterValue | undefined; }}
     * @memberof StartScenarioRunRequest
     */
    parameters?: { [key: string]: ScenarioRunParameterValue | undefined; };
}


/**
 * @export
 */
export const StartScenarioRunRequestEnvironmentEnum = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type StartScenarioRunRequestEnvironmentEnum = typeof StartScenarioRunRequestEnvironmentEnum[keyof typeof StartScenarioRunRequestEnvironmentEnum];


/**
 * Check if a given object implements the StartScenarioRunRequest interface.
 */
export function instanceOfStartScenarioRunRequest(value: object): value is StartScenarioRunRequest {
    if (!('definition' in value) || value['definition'] === undefined) return false;
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('binding' in value) || value['binding'] === undefined) return false;
    return true;
}

export function StartScenarioRunRequestFromJSON(json: any): StartScenarioRunRequest {
    return StartScenarioRunRequestFromJSONTyped(json, false);
}

export function StartScenarioRunRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartScenarioRunRequest {
    if (json == null) {
        return json;
    }
    return {

        'definition': ScenarioDefinitionIdentityFromJSON(json['definition']),
        'environment': json['environment'],
        'binding': StartScenarioRunRequestBindingFromJSON(json['binding']),
        'parameters': json['parameters'] == null ? undefined : (mapValues(json['parameters'], ScenarioRunParameterValueFromJSON)),
    };
}

export function StartScenarioRunRequestToJSON(json: any): StartScenarioRunRequest {
    return StartScenarioRunRequestToJSONTyped(json, false);
}

export function StartScenarioRunRequestToJSONTyped(value?: StartScenarioRunRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'definition': ScenarioDefinitionIdentityToJSON(value['definition']),
        'environment': value['environment'],
        'binding': StartScenarioRunRequestBindingToJSON(value['binding']),
        'parameters': value['parameters'] == null ? undefined : (mapValues(value['parameters'], ScenarioRunParameterValueToJSON)),
    };
}
