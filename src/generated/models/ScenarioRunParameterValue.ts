/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ScenarioRunParameterScalar } from './ScenarioRunParameterScalar.js';
import {
    instanceOfScenarioRunParameterScalar,
    ScenarioRunParameterScalarFromJSON,
    ScenarioRunParameterScalarFromJSONTyped,
    ScenarioRunParameterScalarToJSON,
} from './ScenarioRunParameterScalar.js';

/**
 * @type ScenarioRunParameterValue
 *
 * @export
 */
export type ScenarioRunParameterValue = Array<ScenarioRunParameterScalar> | ScenarioRunParameterScalar;

export function ScenarioRunParameterValueFromJSON(json: any): ScenarioRunParameterValue {
    return ScenarioRunParameterValueFromJSONTyped(json, false);
}

export function ScenarioRunParameterValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunParameterValue {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfScenarioRunParameterScalar(json)) {
        return ScenarioRunParameterScalarFromJSONTyped(json, true);
    }
    if (Array.isArray(json)) {
        if (json.every(item => typeof item === 'object')) {
            if (json.every(item => instanceOfScenarioRunParameterScalar(item))) {
                return json.map(value => ScenarioRunParameterScalarFromJSONTyped(value, true));
            }
        }
    }
    if (Array.isArray(json)) {
        return json;
    }
    return {} as any;
}

export function ScenarioRunParameterValueToJSON(json: any): any {
    return ScenarioRunParameterValueToJSONTyped(json, false);
}

export function ScenarioRunParameterValueToJSONTyped(value?: ScenarioRunParameterValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfScenarioRunParameterScalar(value)) {
        return ScenarioRunParameterScalarToJSON(value as ScenarioRunParameterScalar);
    }
    if (Array.isArray(value)) {
        if (value.every(item => typeof item === 'object')) {
            if (value.every(item => instanceOfScenarioRunParameterScalar(item))) {
                return value.map(value => ScenarioRunParameterScalarToJSON(value as ScenarioRunParameterScalar));
            }
        }
    }
    if (Array.isArray(value)) {
        return value;
    }
    return {};
}
