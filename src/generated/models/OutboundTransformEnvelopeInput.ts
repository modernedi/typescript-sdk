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
 * @type OutboundTransformEnvelopeInput
 * Source document to transform. For XML or text content types this must be a string. For JSON content types this may be a JSON object, array, string, number, boolean, or null.
 *
 * @export
 */
export type OutboundTransformEnvelopeInput = Array<any> | boolean | number | string | { [key: string]: any | undefined; } | null;

export function OutboundTransformEnvelopeInputFromJSON(json: any): OutboundTransformEnvelopeInput {
    return OutboundTransformEnvelopeInputFromJSONTyped(json, false);
}

export function OutboundTransformEnvelopeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutboundTransformEnvelopeInput {
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
    return json;
}

export function OutboundTransformEnvelopeInputToJSON(json: any): any {
    return OutboundTransformEnvelopeInputToJSONTyped(json, false);
}

export function OutboundTransformEnvelopeInputToJSONTyped(value?: OutboundTransformEnvelopeInput | null, ignoreDiscriminator: boolean = false): any {
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
    return value;
}
