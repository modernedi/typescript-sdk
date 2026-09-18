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
import type { OutboundTransformEnvelopeInput } from './OutboundTransformEnvelopeInput.js';
import {
    OutboundTransformEnvelopeInputFromJSON,
    OutboundTransformEnvelopeInputFromJSONTyped,
    OutboundTransformEnvelopeInputToJSON,
    OutboundTransformEnvelopeInputToJSONTyped,
} from './OutboundTransformEnvelopeInput.js';
import type { OutboundBusinessKey } from './OutboundBusinessKey.js';
import {
    OutboundBusinessKeyFromJSON,
    OutboundBusinessKeyFromJSONTyped,
    OutboundBusinessKeyToJSON,
    OutboundBusinessKeyToJSONTyped,
} from './OutboundBusinessKey.js';

/**
 *
 * @export
 * @interface OutboundTransformEnvelope
 */
export interface OutboundTransformEnvelope {
    /**
     * Content type of `input` and the outgoing map to select. Use this envelope with HTTP `Content-Type: application/vnd.modernedi.outbound+json` when the source input is XML, text, or JSON with extra transform params. Ordinary `application/json` is always treated as the source document itself.
     *
     * @type {string}
     * @memberof OutboundTransformEnvelope
     */
    contentType: string;
    /**
     *
     * @type {OutboundTransformEnvelopeInput}
     * @memberof OutboundTransformEnvelope
     */
    input: OutboundTransformEnvelopeInput;
    /**
     * Optional business identifier to store on the outbound transaction record, such as an invoice number, ASN number, BOL number, shipment id, or other value your system uses for reconciliation. This is recorded for transaction search and display only; it does not affect outgoing-map selection or transform execution.
     *
     * @type {OutboundBusinessKey}
     * @memberof OutboundTransformEnvelope
     */
    businessKey?: OutboundBusinessKey;
    /**
     * Optional transform parameters. For XSLT maps, each key is bound as an external stylesheet parameter with the same simple, unqualified name. `json` and `text` are reserved by ModernEDI. JSON strings map to `xs:string`, integers to integer numbers, decimals to decimal numbers, booleans to `xs:boolean`, null to an empty sequence, objects to `map(xs:string, item()*)`, and arrays to XDM sequences. Arrays of objects therefore work with declarations such as `<xsl:param name="pallets" as="map(xs:string, xs:anyAtomicType)*" required="yes"/>`. JSLT still uses `.` as its current input, but for JSLT maps ModernEDI evaluates the map with a root wrapper object shaped as `{ "input": <source>, "params": <params> }`. Source fields are therefore read as `.input.invoice.number` instead of directly from the root, and params are read as `.params.bolNumber`, `.params.pallets[0]`, and so on. When JSLT repeated output needs params inside a `for` loop, bind `.params` before the loop, such as `let params = .params`, and read `$params.bolNumber` inside the loop because `.` is the current source item there. Use `required="yes"` for XSLT params that every live request must supply. Params JSON files in the mapper editor are used only for test-running a map; they are not live defaults for this API. In the mapper editor, params are standalone JSON fixture files that can be edited like other workspace files and selected when test-running the map. While authoring JSLT, the editor uses the selected source and params fixture files for completions, diagnostics, and quick fixes for wrapper root mistakes, missing sample paths, and `get-key` object-key typos.
     *
     * @type {{ [key: string]: any | undefined; }}
     * @memberof OutboundTransformEnvelope
     */
    params?: { [key: string]: any | undefined; };
}

/**
 * Check if a given object implements the OutboundTransformEnvelope interface.
 */
export function instanceOfOutboundTransformEnvelope(value: object): value is OutboundTransformEnvelope {
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('input' in value) || value['input'] === undefined) return false;
    return true;
}

export function OutboundTransformEnvelopeFromJSON(json: any): OutboundTransformEnvelope {
    return OutboundTransformEnvelopeFromJSONTyped(json, false);
}

export function OutboundTransformEnvelopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutboundTransformEnvelope {
    if (json == null) {
        return json;
    }
    return {

        'contentType': json['contentType'],
        'input': OutboundTransformEnvelopeInputFromJSON(json['input']),
        'businessKey': json['businessKey'] == null ? undefined : OutboundBusinessKeyFromJSON(json['businessKey']),
        'params': json['params'] == null ? undefined : json['params'],
    };
}

export function OutboundTransformEnvelopeToJSON(json: any): OutboundTransformEnvelope {
    return OutboundTransformEnvelopeToJSONTyped(json, false);
}

export function OutboundTransformEnvelopeToJSONTyped(value?: OutboundTransformEnvelope | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'contentType': value['contentType'],
        'input': OutboundTransformEnvelopeInputToJSON(value['input']),
        'businessKey': OutboundBusinessKeyToJSON(value['businessKey']),
        'params': value['params'],
    };
}
