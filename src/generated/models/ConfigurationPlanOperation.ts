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
import type { ConfigurationResourceKind } from './ConfigurationResourceKind.js';
import {
    ConfigurationResourceKindFromJSON,
    ConfigurationResourceKindFromJSONTyped,
    ConfigurationResourceKindToJSON,
    ConfigurationResourceKindToJSONTyped,
} from './ConfigurationResourceKind.js';
import type { ConfigurationPlanAction } from './ConfigurationPlanAction.js';
import {
    ConfigurationPlanActionFromJSON,
    ConfigurationPlanActionFromJSONTyped,
    ConfigurationPlanActionToJSON,
    ConfigurationPlanActionToJSONTyped,
} from './ConfigurationPlanAction.js';
import type { ConfigurationPlanCurrentValue } from './ConfigurationPlanCurrentValue.js';
import {
    ConfigurationPlanCurrentValueFromJSON,
    ConfigurationPlanCurrentValueFromJSONTyped,
    ConfigurationPlanCurrentValueToJSON,
    ConfigurationPlanCurrentValueToJSONTyped,
} from './ConfigurationPlanCurrentValue.js';
import type { ConfigurationPlanDesiredValue } from './ConfigurationPlanDesiredValue.js';
import {
    ConfigurationPlanDesiredValueFromJSON,
    ConfigurationPlanDesiredValueFromJSONTyped,
    ConfigurationPlanDesiredValueToJSON,
    ConfigurationPlanDesiredValueToJSONTyped,
} from './ConfigurationPlanDesiredValue.js';

/**
 * One changed resource. CREATE has only `desired`, UPDATE has `current` and `desired`, and DELETE has only `current`.
 * @export
 * @interface ConfigurationPlanOperation
 */
export interface ConfigurationPlanOperation {
    /**
     *
     * @type {ConfigurationPlanAction}
     * @memberof ConfigurationPlanOperation
     */
    action: ConfigurationPlanAction;
    /**
     *
     * @type {ConfigurationResourceKind}
     * @memberof ConfigurationPlanOperation
     */
    kind: ConfigurationResourceKind;
    /**
     * Stable portable resource key.
     * @type {string}
     * @memberof ConfigurationPlanOperation
     */
    key: string;
    /**
     * Desired resource path for CREATE/UPDATE or current exported path for DELETE.
     * @type {string}
     * @memberof ConfigurationPlanOperation
     */
    path: string;
    /**
     *
     * @type {ConfigurationPlanCurrentValue}
     * @memberof ConfigurationPlanOperation
     */
    current?: ConfigurationPlanCurrentValue;
    /**
     *
     * @type {ConfigurationPlanDesiredValue}
     * @memberof ConfigurationPlanOperation
     */
    desired?: ConfigurationPlanDesiredValue;
}



/**
 * Check if a given object implements the ConfigurationPlanOperation interface.
 */
export function instanceOfConfigurationPlanOperation(value: object): value is ConfigurationPlanOperation {
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    return true;
}

export function ConfigurationPlanOperationFromJSON(json: any): ConfigurationPlanOperation {
    return ConfigurationPlanOperationFromJSONTyped(json, false);
}

export function ConfigurationPlanOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanOperation {
    if (json == null) {
        return json;
    }
    return {

        'action': ConfigurationPlanActionFromJSON(json['action']),
        'kind': ConfigurationResourceKindFromJSON(json['kind']),
        'key': json['key'],
        'path': json['path'],
        'current': json['current'] == null ? undefined : ConfigurationPlanCurrentValueFromJSON(json['current']),
        'desired': json['desired'] == null ? undefined : ConfigurationPlanDesiredValueFromJSON(json['desired']),
    };
}

export function ConfigurationPlanOperationToJSON(json: any): ConfigurationPlanOperation {
    return ConfigurationPlanOperationToJSONTyped(json, false);
}

export function ConfigurationPlanOperationToJSONTyped(value?: ConfigurationPlanOperation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'action': ConfigurationPlanActionToJSON(value['action']),
        'kind': ConfigurationResourceKindToJSON(value['kind']),
        'key': value['key'],
        'path': value['path'],
        'current': ConfigurationPlanCurrentValueToJSON(value['current']),
        'desired': ConfigurationPlanDesiredValueToJSON(value['desired']),
    };
}
