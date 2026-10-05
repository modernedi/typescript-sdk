/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.36.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ConfigurationScenarioDefinitionFactOperand } from './ConfigurationScenarioDefinitionFactOperand.js';
import {
    instanceOfConfigurationScenarioDefinitionFactOperand,
    ConfigurationScenarioDefinitionFactOperandFromJSON,
    ConfigurationScenarioDefinitionFactOperandFromJSONTyped,
    ConfigurationScenarioDefinitionFactOperandToJSON,
} from './ConfigurationScenarioDefinitionFactOperand.js';
import type { ConfigurationScenarioDefinitionKeyedFactOperand } from './ConfigurationScenarioDefinitionKeyedFactOperand.js';
import {
    instanceOfConfigurationScenarioDefinitionKeyedFactOperand,
    ConfigurationScenarioDefinitionKeyedFactOperandFromJSON,
    ConfigurationScenarioDefinitionKeyedFactOperandFromJSONTyped,
    ConfigurationScenarioDefinitionKeyedFactOperandToJSON,
} from './ConfigurationScenarioDefinitionKeyedFactOperand.js';
import type { ConfigurationScenarioDefinitionLiteralOperand } from './ConfigurationScenarioDefinitionLiteralOperand.js';
import {
    instanceOfConfigurationScenarioDefinitionLiteralOperand,
    ConfigurationScenarioDefinitionLiteralOperandFromJSON,
    ConfigurationScenarioDefinitionLiteralOperandFromJSONTyped,
    ConfigurationScenarioDefinitionLiteralOperandToJSON,
} from './ConfigurationScenarioDefinitionLiteralOperand.js';
import type { ConfigurationScenarioDefinitionParameterOperand } from './ConfigurationScenarioDefinitionParameterOperand.js';
import {
    instanceOfConfigurationScenarioDefinitionParameterOperand,
    ConfigurationScenarioDefinitionParameterOperandFromJSON,
    ConfigurationScenarioDefinitionParameterOperandFromJSONTyped,
    ConfigurationScenarioDefinitionParameterOperandToJSON,
} from './ConfigurationScenarioDefinitionParameterOperand.js';

/**
 * @type ConfigurationScenarioDefinitionAssertionOperand
 *
 * @export
 */
export type ConfigurationScenarioDefinitionAssertionOperand = ConfigurationScenarioDefinitionFactOperand | ConfigurationScenarioDefinitionKeyedFactOperand | ConfigurationScenarioDefinitionLiteralOperand | ConfigurationScenarioDefinitionParameterOperand;

export function ConfigurationScenarioDefinitionAssertionOperandFromJSON(json: any): ConfigurationScenarioDefinitionAssertionOperand {
    return ConfigurationScenarioDefinitionAssertionOperandFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionAssertionOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionAssertionOperand {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfConfigurationScenarioDefinitionFactOperand(json)) {
        return ConfigurationScenarioDefinitionFactOperandFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationScenarioDefinitionKeyedFactOperand(json)) {
        return ConfigurationScenarioDefinitionKeyedFactOperandFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationScenarioDefinitionLiteralOperand(json)) {
        return ConfigurationScenarioDefinitionLiteralOperandFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationScenarioDefinitionParameterOperand(json)) {
        return ConfigurationScenarioDefinitionParameterOperandFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioDefinitionAssertionOperandToJSON(json: any): any {
    return ConfigurationScenarioDefinitionAssertionOperandToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionAssertionOperandToJSONTyped(value?: ConfigurationScenarioDefinitionAssertionOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfConfigurationScenarioDefinitionFactOperand(value)) {
        return ConfigurationScenarioDefinitionFactOperandToJSON(value as ConfigurationScenarioDefinitionFactOperand);
    }
    if (instanceOfConfigurationScenarioDefinitionKeyedFactOperand(value)) {
        return ConfigurationScenarioDefinitionKeyedFactOperandToJSON(value as ConfigurationScenarioDefinitionKeyedFactOperand);
    }
    if (instanceOfConfigurationScenarioDefinitionLiteralOperand(value)) {
        return ConfigurationScenarioDefinitionLiteralOperandToJSON(value as ConfigurationScenarioDefinitionLiteralOperand);
    }
    if (instanceOfConfigurationScenarioDefinitionParameterOperand(value)) {
        return ConfigurationScenarioDefinitionParameterOperandToJSON(value as ConfigurationScenarioDefinitionParameterOperand);
    }
    return {};
}
