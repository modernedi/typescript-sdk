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
 * Optional authoring-time pin to an exact X12 release and transaction set. Both fields are required when this object is present.
 * @export
 * @interface ConfigurationScenarioBindingSyntaxTreeReference
 */
export interface ConfigurationScenarioBindingSyntaxTreeReference {
    /**
     * X12 release token. Apply canonicalizes accepted forms to a six-digit release such as 004010.
     * @type {string}
     * @memberof ConfigurationScenarioBindingSyntaxTreeReference
     */
    x12Version: string;
    /**
     * Known three-digit X12 transaction set. The code must match the referenced definition step.
     * @type {string}
     * @memberof ConfigurationScenarioBindingSyntaxTreeReference
     */
    transactionSet: string;
}

/**
 * Check if a given object implements the ConfigurationScenarioBindingSyntaxTreeReference interface.
 */
export function instanceOfConfigurationScenarioBindingSyntaxTreeReference(value: object): value is ConfigurationScenarioBindingSyntaxTreeReference {
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('transactionSet' in value) || value['transactionSet'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioBindingSyntaxTreeReferenceFromJSON(json: any): ConfigurationScenarioBindingSyntaxTreeReference {
    return ConfigurationScenarioBindingSyntaxTreeReferenceFromJSONTyped(json, false);
}

export function ConfigurationScenarioBindingSyntaxTreeReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioBindingSyntaxTreeReference {
    if (json == null) {
        return json;
    }
    return {

        'x12Version': json['x12Version'],
        'transactionSet': json['transactionSet'],
    };
}

export function ConfigurationScenarioBindingSyntaxTreeReferenceToJSON(json: any): ConfigurationScenarioBindingSyntaxTreeReference {
    return ConfigurationScenarioBindingSyntaxTreeReferenceToJSONTyped(json, false);
}

export function ConfigurationScenarioBindingSyntaxTreeReferenceToJSONTyped(value?: ConfigurationScenarioBindingSyntaxTreeReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'x12Version': value['x12Version'],
        'transactionSet': value['transactionSet'],
    };
}
