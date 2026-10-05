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
/**
 *
 * @export
 * @interface ConfigurationScenarioCaseCheck
 */
export interface ConfigurationScenarioCaseCheck {
    /**
     * Stable interpreter check ID, such as assertion:invoiceCurrencyMatches.
     * @type {string}
     * @memberof ConfigurationScenarioCaseCheck
     */
    id: string;
    /**
     * Actual outcome of the interpreter check, not the saved test's status.
     * @type {ConfigurationScenarioCaseCheckOutcomeEnum}
     * @memberof ConfigurationScenarioCaseCheck
     */
    outcome: ConfigurationScenarioCaseCheckOutcomeEnum;
    /**
     * Interpreter result code, without fact values or document contents.
     * @type {string}
     * @memberof ConfigurationScenarioCaseCheck
     */
    code: string;
}


/**
 * @export
 */
export const ConfigurationScenarioCaseCheckOutcomeEnum = {
    Passed: 'PASSED',
    Failed: 'FAILED',
    Pending: 'PENDING',
    Inconclusive: 'INCONCLUSIVE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioCaseCheckOutcomeEnum = typeof ConfigurationScenarioCaseCheckOutcomeEnum[keyof typeof ConfigurationScenarioCaseCheckOutcomeEnum];


/**
 * Check if a given object implements the ConfigurationScenarioCaseCheck interface.
 */
export function instanceOfConfigurationScenarioCaseCheck(value: object): value is ConfigurationScenarioCaseCheck {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioCaseCheckFromJSON(json: any): ConfigurationScenarioCaseCheck {
    return ConfigurationScenarioCaseCheckFromJSONTyped(json, false);
}

export function ConfigurationScenarioCaseCheckFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioCaseCheck {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'outcome': json['outcome'],
        'code': json['code'],
    };
}

export function ConfigurationScenarioCaseCheckToJSON(json: any): ConfigurationScenarioCaseCheck {
    return ConfigurationScenarioCaseCheckToJSONTyped(json, false);
}

export function ConfigurationScenarioCaseCheckToJSONTyped(value?: ConfigurationScenarioCaseCheck | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'outcome': value['outcome'],
        'code': value['code'],
    };
}
