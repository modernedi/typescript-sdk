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
import type { ConfigurationScenarioDefinitionValueOperand } from './ConfigurationScenarioDefinitionValueOperand.js';
import {
    ConfigurationScenarioDefinitionValueOperandFromJSON,
    ConfigurationScenarioDefinitionValueOperandFromJSONTyped,
    ConfigurationScenarioDefinitionValueOperandToJSON,
    ConfigurationScenarioDefinitionValueOperandToJSONTyped,
} from './ConfigurationScenarioDefinitionValueOperand.js';

/**
 *
 * @export
 * @interface BusinessEffectiveTimestamp
 */
export interface BusinessEffectiveTimestamp {
    /**
     *
     * @type {BusinessEffectiveTimestampKindEnum}
     * @memberof BusinessEffectiveTimestamp
     */
    kind: BusinessEffectiveTimestampKindEnum;
    /**
     *
     * @type {ConfigurationScenarioDefinitionValueOperand}
     * @memberof BusinessEffectiveTimestamp
     */
    value: ConfigurationScenarioDefinitionValueOperand;
}


/**
 * @export
 */
export const BusinessEffectiveTimestampKindEnum = {
    Value: 'value',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type BusinessEffectiveTimestampKindEnum = typeof BusinessEffectiveTimestampKindEnum[keyof typeof BusinessEffectiveTimestampKindEnum];


/**
 * Check if a given object implements the BusinessEffectiveTimestamp interface.
 */
export function instanceOfBusinessEffectiveTimestamp(value: object): value is BusinessEffectiveTimestamp {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'value') return false;

    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function BusinessEffectiveTimestampFromJSON(json: any): BusinessEffectiveTimestamp {
    return BusinessEffectiveTimestampFromJSONTyped(json, false);
}

export function BusinessEffectiveTimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessEffectiveTimestamp {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'value': ConfigurationScenarioDefinitionValueOperandFromJSON(json['value']),
    };
}

export function BusinessEffectiveTimestampToJSON(json: any): BusinessEffectiveTimestamp {
    return BusinessEffectiveTimestampToJSONTyped(json, false);
}

export function BusinessEffectiveTimestampToJSONTyped(value?: BusinessEffectiveTimestamp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'value': ConfigurationScenarioDefinitionValueOperandToJSON(value['value']),
    };
}
