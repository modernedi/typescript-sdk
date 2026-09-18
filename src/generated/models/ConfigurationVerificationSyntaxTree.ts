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
 * Exact stored X12 grammar and catalog frozen for this mapping.
 * @export
 * @interface ConfigurationVerificationSyntaxTree
 */
export interface ConfigurationVerificationSyntaxTree {
    /**
     * Syntax-tree catalog identity format.
     * @type {ConfigurationVerificationSyntaxTreeSchemaVersionEnum}
     * @memberof ConfigurationVerificationSyntaxTree
     */
    schemaVersion: ConfigurationVerificationSyntaxTreeSchemaVersionEnum;
    /**
     * X12 release of the stored grammar.
     * @type {string}
     * @memberof ConfigurationVerificationSyntaxTree
     */
    x12Version: string;
    /**
     * X12 transaction set of the stored grammar.
     * @type {string}
     * @memberof ConfigurationVerificationSyntaxTree
     */
    transactionSetIdentifierCode: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationSyntaxTree
     */
    catalogRevision: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationSyntaxTree
     */
    manifestSha256: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationSyntaxTree
     */
    syntaxTreeSha256: string;
}


/**
 * @export
 */
export const ConfigurationVerificationSyntaxTreeSchemaVersionEnum = {
    NUMBER_1: 1,
    NUMBER_unknown_default_open_api: 11184809
} as const;
export type ConfigurationVerificationSyntaxTreeSchemaVersionEnum = typeof ConfigurationVerificationSyntaxTreeSchemaVersionEnum[keyof typeof ConfigurationVerificationSyntaxTreeSchemaVersionEnum];


/**
 * Check if a given object implements the ConfigurationVerificationSyntaxTree interface.
 */
export function instanceOfConfigurationVerificationSyntaxTree(value: object): value is ConfigurationVerificationSyntaxTree {
    if (!('schemaVersion' in value) || value['schemaVersion'] === undefined) return false;

    if (value['schemaVersion'] !== 1) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('transactionSetIdentifierCode' in value) || value['transactionSetIdentifierCode'] === undefined) return false;
    if (!('catalogRevision' in value) || value['catalogRevision'] === undefined) return false;
    if (!('manifestSha256' in value) || value['manifestSha256'] === undefined) return false;
    if (!('syntaxTreeSha256' in value) || value['syntaxTreeSha256'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationSyntaxTreeFromJSON(json: any): ConfigurationVerificationSyntaxTree {
    return ConfigurationVerificationSyntaxTreeFromJSONTyped(json, false);
}

export function ConfigurationVerificationSyntaxTreeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationSyntaxTree {
    if (json == null) {
        return json;
    }
    return {

        'schemaVersion': json['schemaVersion'],
        'x12Version': json['x12Version'],
        'transactionSetIdentifierCode': json['transactionSetIdentifierCode'],
        'catalogRevision': json['catalogRevision'],
        'manifestSha256': json['manifestSha256'],
        'syntaxTreeSha256': json['syntaxTreeSha256'],
    };
}

export function ConfigurationVerificationSyntaxTreeToJSON(json: any): ConfigurationVerificationSyntaxTree {
    return ConfigurationVerificationSyntaxTreeToJSONTyped(json, false);
}

export function ConfigurationVerificationSyntaxTreeToJSONTyped(value?: ConfigurationVerificationSyntaxTree | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'schemaVersion': value['schemaVersion'],
        'x12Version': value['x12Version'],
        'transactionSetIdentifierCode': value['transactionSetIdentifierCode'],
        'catalogRevision': value['catalogRevision'],
        'manifestSha256': value['manifestSha256'],
        'syntaxTreeSha256': value['syntaxTreeSha256'],
    };
}
