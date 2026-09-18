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
 * @type OutboundBusinessKeyValue
 * Scalar business-key value. Numbers and booleans in the JSON envelope are accepted and stored as strings.
 * @export
 */
export type OutboundBusinessKeyValue = boolean | number | string;

export function OutboundBusinessKeyValueFromJSON(json: any): OutboundBusinessKeyValue {
    return OutboundBusinessKeyValueFromJSONTyped(json, false);
}

export function OutboundBusinessKeyValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutboundBusinessKeyValue {
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

export function OutboundBusinessKeyValueToJSON(json: any): any {
    return OutboundBusinessKeyValueToJSONTyped(json, false);
}

export function OutboundBusinessKeyValueToJSONTyped(value?: OutboundBusinessKeyValue | null, ignoreDiscriminator: boolean = false): any {
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
