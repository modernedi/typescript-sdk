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
 * The business document carried by a step. The server verifies the transaction-set code against ModernEDI's X12 catalog.
 * @export
 * @interface ConfigurationScenarioDefinitionTransaction
 */
export interface ConfigurationScenarioDefinitionTransaction {
    /**
     * Transaction standard. v1 supports X12.
     * @type {ConfigurationScenarioDefinitionTransactionStandardEnum}
     * @memberof ConfigurationScenarioDefinitionTransaction
     */
    standard: ConfigurationScenarioDefinitionTransactionStandardEnum;
    /**
     * Known three-digit X12 business transaction set, such as 850, 855, 856, 810, 875, 880, 940, 945, 204, 214, 300, 301, or 315. Use assurance for 997/999 acknowledgments.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionTransaction
     */
    transactionSet: string;
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionTransaction
     */
    businessUsage: string;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionTransactionStandardEnum = {
    X12: 'X12',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionTransactionStandardEnum = typeof ConfigurationScenarioDefinitionTransactionStandardEnum[keyof typeof ConfigurationScenarioDefinitionTransactionStandardEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionTransaction interface.
 */
export function instanceOfConfigurationScenarioDefinitionTransaction(value: object): value is ConfigurationScenarioDefinitionTransaction {
    if (!('standard' in value) || value['standard'] === undefined) return false;
    if (value['standard'] !== 'X12') return false;

    if (!('transactionSet' in value) || value['transactionSet'] === undefined) return false;
    if (!('businessUsage' in value) || value['businessUsage'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionTransactionFromJSON(json: any): ConfigurationScenarioDefinitionTransaction {
    return ConfigurationScenarioDefinitionTransactionFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionTransaction {
    if (json == null) {
        return json;
    }
    return {

        'standard': json['standard'],
        'transactionSet': json['transactionSet'],
        'businessUsage': json['businessUsage'],
    };
}

export function ConfigurationScenarioDefinitionTransactionToJSON(json: any): ConfigurationScenarioDefinitionTransaction {
    return ConfigurationScenarioDefinitionTransactionToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionTransactionToJSONTyped(value?: ConfigurationScenarioDefinitionTransaction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'standard': value['standard'],
        'transactionSet': value['transactionSet'],
        'businessUsage': value['businessUsage'],
    };
}
