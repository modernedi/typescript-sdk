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
 * Exact text comparison and optional generated-X12 validation outcome. A case fails if either requested check fails. Raw inputs, outputs and engine diagnostic text are never retained.
 * @export
 * @interface ConfigurationVerificationCaseResult
 */
export interface ConfigurationVerificationCaseResult {
    /**
     * Mapping owning this case.
     * @type {string}
     * @memberof ConfigurationVerificationCaseResult
     */
    mappingResourceKey: string;
    /**
     * Portable case ID.
     * @type {string}
     * @memberof ConfigurationVerificationCaseResult
     */
    id: string;
    /**
     * Portable case display name.
     * @type {string}
     * @memberof ConfigurationVerificationCaseResult
     */
    name: string;
    /**
     * Outcome of this executed case.
     * @type {ConfigurationVerificationCaseResultStatusEnum}
     * @memberof ConfigurationVerificationCaseResult
     */
    status: ConfigurationVerificationCaseResultStatusEnum;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationCaseResult
     */
    caseSha256: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationCaseResult
     */
    expectedOutputSha256: string;
    /**
     * Actual output hash, or null when execution produced no output.
     * @type {string}
     * @memberof ConfigurationVerificationCaseResult
     */
    actualOutputSha256: string | null;
    /**
     * Present only when the saved outgoing case requested validateX12. Uses the frozen mapping syntax tree and the same document preparation and validation as outgoing preview/send. A FAILED case may have matching expected/actual hashes when X12 validation failed.
     * @type {ConfigurationVerificationCaseResultX12ValidationStatusEnum}
     * @memberof ConfigurationVerificationCaseResult
     */
    x12ValidationStatus?: ConfigurationVerificationCaseResultX12ValidationStatusEnum;
}


/**
 * @export
 */
export const ConfigurationVerificationCaseResultStatusEnum = {
    Passed: 'PASSED',
    Failed: 'FAILED',
    Error: 'ERROR',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationVerificationCaseResultStatusEnum = typeof ConfigurationVerificationCaseResultStatusEnum[keyof typeof ConfigurationVerificationCaseResultStatusEnum];

/**
 * @export
 */
export const ConfigurationVerificationCaseResultX12ValidationStatusEnum = {
    Passed: 'PASSED',
    Failed: 'FAILED',
    Error: 'ERROR',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationVerificationCaseResultX12ValidationStatusEnum = typeof ConfigurationVerificationCaseResultX12ValidationStatusEnum[keyof typeof ConfigurationVerificationCaseResultX12ValidationStatusEnum];


/**
 * Check if a given object implements the ConfigurationVerificationCaseResult interface.
 */
export function instanceOfConfigurationVerificationCaseResult(value: object): value is ConfigurationVerificationCaseResult {
    if (!('mappingResourceKey' in value) || value['mappingResourceKey'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('caseSha256' in value) || value['caseSha256'] === undefined) return false;
    if (!('expectedOutputSha256' in value) || value['expectedOutputSha256'] === undefined) return false;
    if (!('actualOutputSha256' in value) || value['actualOutputSha256'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationCaseResultFromJSON(json: any): ConfigurationVerificationCaseResult {
    return ConfigurationVerificationCaseResultFromJSONTyped(json, false);
}

export function ConfigurationVerificationCaseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationCaseResult {
    if (json == null) {
        return json;
    }
    return {

        'mappingResourceKey': json['mappingResourceKey'],
        'id': json['id'],
        'name': json['name'],
        'status': json['status'],
        'caseSha256': json['caseSha256'],
        'expectedOutputSha256': json['expectedOutputSha256'],
        'actualOutputSha256': json['actualOutputSha256'],
        'x12ValidationStatus': json['x12ValidationStatus'] == null ? undefined : json['x12ValidationStatus'],
    };
}

export function ConfigurationVerificationCaseResultToJSON(json: any): ConfigurationVerificationCaseResult {
    return ConfigurationVerificationCaseResultToJSONTyped(json, false);
}

export function ConfigurationVerificationCaseResultToJSONTyped(value?: ConfigurationVerificationCaseResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'mappingResourceKey': value['mappingResourceKey'],
        'id': value['id'],
        'name': value['name'],
        'status': value['status'],
        'caseSha256': value['caseSha256'],
        'expectedOutputSha256': value['expectedOutputSha256'],
        'actualOutputSha256': value['actualOutputSha256'],
        'x12ValidationStatus': value['x12ValidationStatus'],
    };
}
