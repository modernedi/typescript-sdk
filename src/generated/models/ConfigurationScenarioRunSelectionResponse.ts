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
import type { StartScenarioRunRequest } from './StartScenarioRunRequest.js';
import {
    StartScenarioRunRequestFromJSON,
    StartScenarioRunRequestFromJSONTyped,
    StartScenarioRunRequestToJSON,
    StartScenarioRunRequestToJSONTyped,
} from './StartScenarioRunRequest.js';

/**
 * Exact run-start selectors for an active authored binding in the specified completed configuration snapshot. This does not attest runtime availability or run success.
 * @export
 * @interface ConfigurationScenarioRunSelectionResponse
 */
export interface ConfigurationScenarioRunSelectionResponse {
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationScenarioRunSelectionResponse
     */
    success: boolean;
    /**
     * The requested apply operation, not a substituted latest operation.
     * @type {string}
     * @memberof ConfigurationScenarioRunSelectionResponse
     */
    configurationApplyOperationId: string;
    /**
     * Matches the requested apply's appliedSnapshotEtag. Not a scenario-run revision ETag.
     * @type {string}
     * @memberof ConfigurationScenarioRunSelectionResponse
     */
    appliedSnapshotEtag: string;
    /**
     *
     * @type {StartScenarioRunRequest}
     * @memberof ConfigurationScenarioRunSelectionResponse
     */
    selection: StartScenarioRunRequest;
}

/**
 * Check if a given object implements the ConfigurationScenarioRunSelectionResponse interface.
 */
export function instanceOfConfigurationScenarioRunSelectionResponse(value: object): value is ConfigurationScenarioRunSelectionResponse {
    if (!('success' in value) || value['success'] === undefined) return false;
    if (!('configurationApplyOperationId' in value) || value['configurationApplyOperationId'] === undefined) return false;
    if (!('appliedSnapshotEtag' in value) || value['appliedSnapshotEtag'] === undefined) return false;
    if (!('selection' in value) || value['selection'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioRunSelectionResponseFromJSON(json: any): ConfigurationScenarioRunSelectionResponse {
    return ConfigurationScenarioRunSelectionResponseFromJSONTyped(json, false);
}

export function ConfigurationScenarioRunSelectionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioRunSelectionResponse {
    if (json == null) {
        return json;
    }
    return {

        'success': json['success'],
        'configurationApplyOperationId': json['configurationApplyOperationId'],
        'appliedSnapshotEtag': json['appliedSnapshotEtag'],
        'selection': StartScenarioRunRequestFromJSON(json['selection']),
    };
}

export function ConfigurationScenarioRunSelectionResponseToJSON(json: any): ConfigurationScenarioRunSelectionResponse {
    return ConfigurationScenarioRunSelectionResponseToJSONTyped(json, false);
}

export function ConfigurationScenarioRunSelectionResponseToJSONTyped(value?: ConfigurationScenarioRunSelectionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'success': value['success'],
        'configurationApplyOperationId': value['configurationApplyOperationId'],
        'appliedSnapshotEtag': value['appliedSnapshotEtag'],
        'selection': StartScenarioRunRequestToJSON(value['selection']),
    };
}
