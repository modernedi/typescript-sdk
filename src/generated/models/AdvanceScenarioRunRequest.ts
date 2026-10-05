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
 * @interface AdvanceScenarioRunRequest
 */
export interface AdvanceScenarioRunRequest {
    /**
     * Optional explicit no-more-documents decision. Only reachable open steps declared with closure.kind=explicit are eligible. Their exact attached counts and server time are recorded atomically with the result and actor-attributed operation. All business and evidence checks still apply; incomplete fulfillment can fail. New documents cannot be attached after closure, but existing observations can refresh pending evidence while the run remains active. This action never dispatches EDI and needs no messages:write scope or supplemental x-api-key. It cannot bypass an expired deadline. For an ambiguous response retry the same list, If-Match and Idempotency-Key.
     * @type {Set<string>}
     * @memberof AdvanceScenarioRunRequest
     */
    closeSteps?: Set<string>;
}

/**
 * Check if a given object implements the AdvanceScenarioRunRequest interface.
 */
export function instanceOfAdvanceScenarioRunRequest(value: object): value is AdvanceScenarioRunRequest {
    return true;
}

export function AdvanceScenarioRunRequestFromJSON(json: any): AdvanceScenarioRunRequest {
    return AdvanceScenarioRunRequestFromJSONTyped(json, false);
}

export function AdvanceScenarioRunRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvanceScenarioRunRequest {
    if (json == null) {
        return json;
    }
    return {

        'closeSteps': json['closeSteps'] == null ? undefined : new Set(json['closeSteps']),
    };
}

export function AdvanceScenarioRunRequestToJSON(json: any): AdvanceScenarioRunRequest {
    return AdvanceScenarioRunRequestToJSONTyped(json, false);
}

export function AdvanceScenarioRunRequestToJSONTyped(value?: AdvanceScenarioRunRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'closeSteps': value['closeSteps'] == null ? undefined : Array.from(value['closeSteps'] as Set<any>),
    };
}
