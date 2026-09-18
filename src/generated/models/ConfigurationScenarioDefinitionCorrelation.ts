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
import type { ConfigurationScenarioDefinitionFactOperand } from './ConfigurationScenarioDefinitionFactOperand.js';
import {
    ConfigurationScenarioDefinitionFactOperandFromJSON,
    ConfigurationScenarioDefinitionFactOperandFromJSONTyped,
    ConfigurationScenarioDefinitionFactOperandToJSON,
    ConfigurationScenarioDefinitionFactOperandToJSONTyped,
} from './ConfigurationScenarioDefinitionFactOperand.js';

/**
 * A condition that decides whether two actual documents belong to the same transition pair. equal can match the purchase-order number on an 850 and 810; same_set can compare their item sets; reply_link uses ModernEDI's stored reply relationship and accepts no fact operands.
 * @export
 * @interface ConfigurationScenarioDefinitionCorrelation
 */
export interface ConfigurationScenarioDefinitionCorrelation {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionCorrelation
     */
    id: string;
    /**
     *
     * @type {ConfigurationScenarioDefinitionCorrelationOperatorEnum}
     * @memberof ConfigurationScenarioDefinitionCorrelation
     */
    operator: ConfigurationScenarioDefinitionCorrelationOperatorEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionFactOperand}
     * @memberof ConfigurationScenarioDefinitionCorrelation
     */
    left?: ConfigurationScenarioDefinitionFactOperand;
    /**
     *
     * @type {ConfigurationScenarioDefinitionFactOperand}
     * @memberof ConfigurationScenarioDefinitionCorrelation
     */
    right?: ConfigurationScenarioDefinitionFactOperand;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionCorrelationOperatorEnum = {
    Equal: 'equal',
    SameSet: 'same_set',
    ReplyLink: 'reply_link',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionCorrelationOperatorEnum = typeof ConfigurationScenarioDefinitionCorrelationOperatorEnum[keyof typeof ConfigurationScenarioDefinitionCorrelationOperatorEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionCorrelation interface.
 */
export function instanceOfConfigurationScenarioDefinitionCorrelation(value: object): value is ConfigurationScenarioDefinitionCorrelation {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('operator' in value) || value['operator'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionCorrelationFromJSON(json: any): ConfigurationScenarioDefinitionCorrelation {
    return ConfigurationScenarioDefinitionCorrelationFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionCorrelationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionCorrelation {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'operator': json['operator'],
        'left': json['left'] == null ? undefined : ConfigurationScenarioDefinitionFactOperandFromJSON(json['left']),
        'right': json['right'] == null ? undefined : ConfigurationScenarioDefinitionFactOperandFromJSON(json['right']),
    };
}

export function ConfigurationScenarioDefinitionCorrelationToJSON(json: any): ConfigurationScenarioDefinitionCorrelation {
    return ConfigurationScenarioDefinitionCorrelationToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionCorrelationToJSONTyped(value?: ConfigurationScenarioDefinitionCorrelation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'operator': value['operator'],
        'left': ConfigurationScenarioDefinitionFactOperandToJSON(value['left']),
        'right': ConfigurationScenarioDefinitionFactOperandToJSON(value['right']),
    };
}
