/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.36.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import { mapValues } from '../runtime.js';
import type { ConfigurationScenarioCaseCheck } from './ConfigurationScenarioCaseCheck.js';
import {
    ConfigurationScenarioCaseCheckFromJSON,
    ConfigurationScenarioCaseCheckFromJSONTyped,
    ConfigurationScenarioCaseCheckToJSON,
    ConfigurationScenarioCaseCheckToJSONTyped,
} from './ConfigurationScenarioCaseCheck.js';

/**
 *
 * @export
 * @interface ConfigurationScenarioCaseResult
 */
export interface ConfigurationScenarioCaseResult {
    /**
     * Binding owning this saved conversation test.
     * @type {string}
     * @memberof ConfigurationScenarioCaseResult
     */
    scenarioBindingResourceKey: string;
    /**
     * Portable case ID.
     * @type {string}
     * @memberof ConfigurationScenarioCaseResult
     */
    id: string;
    /**
     * Portable case display name.
     * @type {string}
     * @memberof ConfigurationScenarioCaseResult
     */
    name: string;
    /**
     * No live run, EDI send, transport receipt, or partner acknowledgement is created.
     * @type {ConfigurationScenarioCaseResultModeEnum}
     * @memberof ConfigurationScenarioCaseResult
     */
    mode: ConfigurationScenarioCaseResultModeEnum;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationScenarioCaseResult
     */
    caseSha256: string;
    /**
     * Expected interpreter outcome. A negative test can pass by reproducing its named failing checks.
     * @type {ConfigurationScenarioCaseResultExpectedOutcomeEnum}
     * @memberof ConfigurationScenarioCaseResult
     */
    expectedOutcome: ConfigurationScenarioCaseResultExpectedOutcomeEnum;
    /**
     * Whether actual interpreter results match all saved expectations. Mapping or document evaluation errors never satisfy negative expectations.
     * @type {ConfigurationScenarioCaseResultStatusEnum}
     * @memberof ConfigurationScenarioCaseResult
     */
    status: ConfigurationScenarioCaseResultStatusEnum;
    /**
     * Actual offline interpreter outcome; null when evaluation could not run.
     * @type {ConfigurationScenarioCaseResultActualOutcomeEnum}
     * @memberof ConfigurationScenarioCaseResult
     */
    actualOutcome: ConfigurationScenarioCaseResultActualOutcomeEnum | null;
    /**
     * Hash of all actual check IDs, outcomes, and codes; null on evaluation errors.
     * @type {string}
     * @memberof ConfigurationScenarioCaseResult
     */
    actualChecksSha256: string | null;
    /**
     * Safe diagnostic category, or null when the saved test passed. Fact timeouts and busy/limit errors leave the conversation unevaluated and never satisfy negative expectations. Retry verification; repeated failures may require simplifying the fact expression or contacting support. Raw documents, fact values, and Mapper errors are not included.
     * @type {ConfigurationScenarioCaseResultDiagnosticCodeEnum}
     * @memberof ConfigurationScenarioCaseResult
     */
    diagnosticCode: ConfigurationScenarioCaseResultDiagnosticCodeEnum | null;
    /**
     * Total evaluated interpreter checks, including checks omitted from the bounded preview.
     * @type {number}
     * @memberof ConfigurationScenarioCaseResult
     */
    checkCount: number;
    /**
     * Bounded preview, non-passing checks first. Contains no raw inputs, outputs, fact values, or engine error text.
     * @type {Array<ConfigurationScenarioCaseCheck>}
     * @memberof ConfigurationScenarioCaseResult
     */
    checks: Array<ConfigurationScenarioCaseCheck>;
}


/**
 * @export
 */
export const ConfigurationScenarioCaseResultModeEnum = {
    Offline: 'OFFLINE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioCaseResultModeEnum = typeof ConfigurationScenarioCaseResultModeEnum[keyof typeof ConfigurationScenarioCaseResultModeEnum];

/**
 * @export
 */
export const ConfigurationScenarioCaseResultExpectedOutcomeEnum = {
    Passed: 'PASSED',
    Failed: 'FAILED',
    Pending: 'PENDING',
    Inconclusive: 'INCONCLUSIVE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioCaseResultExpectedOutcomeEnum = typeof ConfigurationScenarioCaseResultExpectedOutcomeEnum[keyof typeof ConfigurationScenarioCaseResultExpectedOutcomeEnum];

/**
 * @export
 */
export const ConfigurationScenarioCaseResultStatusEnum = {
    Passed: 'PASSED',
    Failed: 'FAILED',
    Error: 'ERROR',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioCaseResultStatusEnum = typeof ConfigurationScenarioCaseResultStatusEnum[keyof typeof ConfigurationScenarioCaseResultStatusEnum];

/**
 * @export
 */
export const ConfigurationScenarioCaseResultActualOutcomeEnum = {
    Passed: 'PASSED',
    Failed: 'FAILED',
    Pending: 'PENDING',
    Inconclusive: 'INCONCLUSIVE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioCaseResultActualOutcomeEnum = typeof ConfigurationScenarioCaseResultActualOutcomeEnum[keyof typeof ConfigurationScenarioCaseResultActualOutcomeEnum];

/**
 * @export
 */
export const ConfigurationScenarioCaseResultDiagnosticCodeEnum = {
    ExpectedResultMismatch: 'EXPECTED_RESULT_MISMATCH',
    MappingCaseFailed: 'MAPPING_CASE_FAILED',
    DocumentEvaluationFailed: 'DOCUMENT_EVALUATION_FAILED',
    FactEvaluationTimeout: 'FACT_EVALUATION_TIMEOUT',
    FactEvaluationBusyOrLimit: 'FACT_EVALUATION_BUSY_OR_LIMIT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioCaseResultDiagnosticCodeEnum = typeof ConfigurationScenarioCaseResultDiagnosticCodeEnum[keyof typeof ConfigurationScenarioCaseResultDiagnosticCodeEnum];


/**
 * Check if a given object implements the ConfigurationScenarioCaseResult interface.
 */
export function instanceOfConfigurationScenarioCaseResult(value: object): value is ConfigurationScenarioCaseResult {
    if (!('scenarioBindingResourceKey' in value) || value['scenarioBindingResourceKey'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('mode' in value) || value['mode'] === undefined) return false;
    if (value['mode'] !== 'OFFLINE') return false;

    if (!('caseSha256' in value) || value['caseSha256'] === undefined) return false;
    if (!('expectedOutcome' in value) || value['expectedOutcome'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('actualOutcome' in value) || value['actualOutcome'] === undefined) return false;
    if (!('actualChecksSha256' in value) || value['actualChecksSha256'] === undefined) return false;
    if (!('diagnosticCode' in value) || value['diagnosticCode'] === undefined) return false;
    if (!('checkCount' in value) || value['checkCount'] === undefined) return false;
    if (!('checks' in value) || value['checks'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioCaseResultFromJSON(json: any): ConfigurationScenarioCaseResult {
    return ConfigurationScenarioCaseResultFromJSONTyped(json, false);
}

export function ConfigurationScenarioCaseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioCaseResult {
    if (json == null) {
        return json;
    }
    return {

        'scenarioBindingResourceKey': json['scenarioBindingResourceKey'],
        'id': json['id'],
        'name': json['name'],
        'mode': json['mode'],
        'caseSha256': json['caseSha256'],
        'expectedOutcome': json['expectedOutcome'],
        'status': json['status'],
        'actualOutcome': json['actualOutcome'],
        'actualChecksSha256': json['actualChecksSha256'],
        'diagnosticCode': json['diagnosticCode'],
        'checkCount': json['checkCount'],
        'checks': ((json['checks'] as Array<any>).map(ConfigurationScenarioCaseCheckFromJSON)),
    };
}

export function ConfigurationScenarioCaseResultToJSON(json: any): ConfigurationScenarioCaseResult {
    return ConfigurationScenarioCaseResultToJSONTyped(json, false);
}

export function ConfigurationScenarioCaseResultToJSONTyped(value?: ConfigurationScenarioCaseResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'scenarioBindingResourceKey': value['scenarioBindingResourceKey'],
        'id': value['id'],
        'name': value['name'],
        'mode': value['mode'],
        'caseSha256': value['caseSha256'],
        'expectedOutcome': value['expectedOutcome'],
        'status': value['status'],
        'actualOutcome': value['actualOutcome'],
        'actualChecksSha256': value['actualChecksSha256'],
        'diagnosticCode': value['diagnosticCode'],
        'checkCount': value['checkCount'],
        'checks': ((value['checks'] as Array<any>).map(ConfigurationScenarioCaseCheckToJSON)),
    };
}
