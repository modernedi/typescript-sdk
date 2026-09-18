/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
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
 * @type ConfigurationScenarioDefinitionValueOperand
 * Closed discriminated union used by assertions, branch predicates, and effective-time expressions.
 * @export
 */
export type ConfigurationScenarioDefinitionValueOperand = ConfigurationScenarioDefinitionFactOperand | ConfigurationScenarioDefinitionLiteralOperand | ConfigurationScenarioDefinitionParameterOperand;

export function ConfigurationScenarioDefinitionValueOperandFromJSON(json: any): ConfigurationScenarioDefinitionValueOperand {
    return ConfigurationScenarioDefinitionValueOperandFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionValueOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionValueOperand {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfConfigurationScenarioDefinitionFactOperand(json)) {
        return ConfigurationScenarioDefinitionFactOperandFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationScenarioDefinitionLiteralOperand(json)) {
        return ConfigurationScenarioDefinitionLiteralOperandFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationScenarioDefinitionParameterOperand(json)) {
        return ConfigurationScenarioDefinitionParameterOperandFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioDefinitionValueOperandToJSON(json: any): any {
    return ConfigurationScenarioDefinitionValueOperandToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionValueOperandToJSONTyped(value?: ConfigurationScenarioDefinitionValueOperand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfConfigurationScenarioDefinitionFactOperand(value)) {
        return ConfigurationScenarioDefinitionFactOperandToJSON(value as ConfigurationScenarioDefinitionFactOperand);
    }
    if (instanceOfConfigurationScenarioDefinitionLiteralOperand(value)) {
        return ConfigurationScenarioDefinitionLiteralOperandToJSON(value as ConfigurationScenarioDefinitionLiteralOperand);
    }
    if (instanceOfConfigurationScenarioDefinitionParameterOperand(value)) {
        return ConfigurationScenarioDefinitionParameterOperandToJSON(value as ConfigurationScenarioDefinitionParameterOperand);
    }
    return {};
}
