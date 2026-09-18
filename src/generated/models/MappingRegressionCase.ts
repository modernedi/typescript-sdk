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
 * An exact-output test for the existing Mapper engines. Whitespace, line endings, ordering, and delimiters are significant. Incoming X12 Mapper requires application/edi-x12 and null params; its zero-based group and transaction selectors may be null. Outgoing JSLT/XSLT requires JSON/XML input and null selectors; params is an object or null. Outgoing cases may additionally select validateX12 to check the generated document against the mapping's X12 specification using the normal preview/send envelope preparation. No execution results or timestamps belong in this source document.
 *
 * @export
 * @interface MappingRegressionCase
 */
export interface MappingRegressionCase {
    /**
     *
     * @type {string}
     * @memberof MappingRegressionCase
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof MappingRegressionCase
     */
    name: string;
    /**
     *
     * @type {MappingRegressionCaseComparisonEnum}
     * @memberof MappingRegressionCase
     */
    comparison: MappingRegressionCaseComparisonEnum;
    /**
     * Optional outgoing-only document validation in addition to exact-text comparison. Defaults to false when omitted. Complete document bodies are wrapped for validation; partial fragments need not opt in. Does not send EDI or prove business correctness or partner acceptance.
     * @type {boolean}
     * @memberof MappingRegressionCase
     */
    validateX12?: boolean;
    /**
     *
     * @type {string}
     * @memberof MappingRegressionCase
     */
    input: string;
    /**
     *
     * @type {MappingRegressionCaseContentTypeEnum}
     * @memberof MappingRegressionCase
     */
    contentType: MappingRegressionCaseContentTypeEnum;
    /**
     *
     * @type {{ [key: string]: any | undefined; }}
     * @memberof MappingRegressionCase
     */
    params: { [key: string]: any | undefined; } | null;
    /**
     *
     * @type {number}
     * @memberof MappingRegressionCase
     */
    functionalGroupIndex: number | null;
    /**
     *
     * @type {number}
     * @memberof MappingRegressionCase
     */
    transactionIndex: number | null;
    /**
     *
     * @type {string}
     * @memberof MappingRegressionCase
     */
    expectedOutput: string;
}


/**
 * @export
 */
export const MappingRegressionCaseComparisonEnum = {
    ExactText: 'EXACT_TEXT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingRegressionCaseComparisonEnum = typeof MappingRegressionCaseComparisonEnum[keyof typeof MappingRegressionCaseComparisonEnum];

/**
 * @export
 */
export const MappingRegressionCaseContentTypeEnum = {
    ApplicationEdiX12: 'application/edi-x12',
    ApplicationJson: 'application/json',
    ApplicationXml: 'application/xml',
    TextXml: 'text/xml',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingRegressionCaseContentTypeEnum = typeof MappingRegressionCaseContentTypeEnum[keyof typeof MappingRegressionCaseContentTypeEnum];


/**
 * Check if a given object implements the MappingRegressionCase interface.
 */
export function instanceOfMappingRegressionCase(value: object): value is MappingRegressionCase {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('comparison' in value) || value['comparison'] === undefined) return false;
    if (value['comparison'] !== 'EXACT_TEXT') return false;

    if (!('input' in value) || value['input'] === undefined) return false;
    if (!('contentType' in value) || value['contentType'] === undefined) return false;
    if (!('params' in value) || value['params'] === undefined) return false;
    if (!('functionalGroupIndex' in value) || value['functionalGroupIndex'] === undefined) return false;
    if (!('transactionIndex' in value) || value['transactionIndex'] === undefined) return false;
    if (!('expectedOutput' in value) || value['expectedOutput'] === undefined) return false;
    return true;
}

export function MappingRegressionCaseFromJSON(json: any): MappingRegressionCase {
    return MappingRegressionCaseFromJSONTyped(json, false);
}

export function MappingRegressionCaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingRegressionCase {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'name': json['name'],
        'comparison': json['comparison'],
        'validateX12': json['validateX12'] == null ? undefined : json['validateX12'],
        'input': json['input'],
        'contentType': json['contentType'],
        'params': json['params'],
        'functionalGroupIndex': json['functionalGroupIndex'],
        'transactionIndex': json['transactionIndex'],
        'expectedOutput': json['expectedOutput'],
    };
}

export function MappingRegressionCaseToJSON(json: any): MappingRegressionCase {
    return MappingRegressionCaseToJSONTyped(json, false);
}

export function MappingRegressionCaseToJSONTyped(value?: MappingRegressionCase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'name': value['name'],
        'comparison': value['comparison'],
        'validateX12': value['validateX12'],
        'input': value['input'],
        'contentType': value['contentType'],
        'params': value['params'],
        'functionalGroupIndex': value['functionalGroupIndex'],
        'transactionIndex': value['transactionIndex'],
        'expectedOutput': value['expectedOutput'],
    };
}
