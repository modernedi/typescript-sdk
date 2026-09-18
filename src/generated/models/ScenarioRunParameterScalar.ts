/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

/**
 * @type ScenarioRunParameterScalar
 * One raw parameter value. The selected definition is authoritative for its declared type. Send decimal values as JSON strings when exact decimal precision matters.
 * @export
 */
export type ScenarioRunParameterScalar = boolean | number | string;

export function instanceOfScenarioRunParameterScalar(value: unknown): value is ScenarioRunParameterScalar {
    return typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string';
}

export function ScenarioRunParameterScalarFromJSON(json: any): ScenarioRunParameterScalar {
    return ScenarioRunParameterScalarFromJSONTyped(json, false);
}

export function ScenarioRunParameterScalarFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunParameterScalar {
    if (json == null) {
        return json;
    }
    if (typeof json === 'boolean') {
        return json;
    }
    if (typeof json === 'number') {
        return json;
    }
    if (typeof json === 'string') {
        return json;
    }
    return {} as any;
}

export function ScenarioRunParameterScalarToJSON(json: any): any {
    return ScenarioRunParameterScalarToJSONTyped(json, false);
}

export function ScenarioRunParameterScalarToJSONTyped(value?: ScenarioRunParameterScalar | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return value;
    }
    return {};
}
