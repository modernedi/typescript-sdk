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
import type { ConfigurationApplyOperationHistoryEntry } from './ConfigurationApplyOperationHistoryEntry.js';
import {
    ConfigurationApplyOperationHistoryEntryFromJSON,
    ConfigurationApplyOperationHistoryEntryFromJSONTyped,
    ConfigurationApplyOperationHistoryEntryToJSON,
    ConfigurationApplyOperationHistoryEntryToJSONTyped,
} from './ConfigurationApplyOperationHistoryEntry.js';

/**
 *
 * @export
 * @interface ConfigurationApplyOperationHistoryResponse
 */
export interface ConfigurationApplyOperationHistoryResponse {
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationApplyOperationHistoryResponse
     */
    success: boolean;
    /**
     *
     * @type {Array<ConfigurationApplyOperationHistoryEntry>}
     * @memberof ConfigurationApplyOperationHistoryResponse
     */
    operations: Array<ConfigurationApplyOperationHistoryEntry>;
    /**
     * Opaque cursor for the next page, or null at the end.
     * @type {string}
     * @memberof ConfigurationApplyOperationHistoryResponse
     */
    nextCursor: string | null;
}

/**
 * Check if a given object implements the ConfigurationApplyOperationHistoryResponse interface.
 */
export function instanceOfConfigurationApplyOperationHistoryResponse(value: object): value is ConfigurationApplyOperationHistoryResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('operations' in value) || value['operations'] === undefined) return false;
    if (!('nextCursor' in value) || value['nextCursor'] === undefined) return false;
    return true;
}

export function ConfigurationApplyOperationHistoryResponseFromJSON(json: any): ConfigurationApplyOperationHistoryResponse {
    return ConfigurationApplyOperationHistoryResponseFromJSONTyped(json, false);
}

export function ConfigurationApplyOperationHistoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationApplyOperationHistoryResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'operations': ((json['operations'] as Array<any>).map(ConfigurationApplyOperationHistoryEntryFromJSON)),
        'nextCursor': json['nextCursor'],
    };
}

export function ConfigurationApplyOperationHistoryResponseToJSON(json: any): ConfigurationApplyOperationHistoryResponse {
    return ConfigurationApplyOperationHistoryResponseToJSONTyped(json, false);
}

export function ConfigurationApplyOperationHistoryResponseToJSONTyped(value?: ConfigurationApplyOperationHistoryResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'operations': ((value['operations'] as Array<any>).map(ConfigurationApplyOperationHistoryEntryToJSON)),
        'nextCursor': value['nextCursor'],
    };
}
