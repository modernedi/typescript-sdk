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
 *
 * @export
 * @interface ScenarioRunObservationRequest
 */
export interface ScenarioRunObservationRequest {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioRunObservationRequest
     */
    stepId: string;
    /**
     *
     * @type {number}
     * @memberof ScenarioRunObservationRequest
     */
    occurrence: number;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunObservationRequest
     */
    messageId: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioRunObservationRequest
     */
    transactionKey: string;
}

/**
 * Check if a given object implements the ScenarioRunObservationRequest interface.
 */
export function instanceOfScenarioRunObservationRequest(value: object): value is ScenarioRunObservationRequest {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('occurrence' in value) || value['occurrence'] === undefined) return false;
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('transactionKey' in value) || value['transactionKey'] === undefined) return false;
    return true;
}

export function ScenarioRunObservationRequestFromJSON(json: any): ScenarioRunObservationRequest {
    return ScenarioRunObservationRequestFromJSONTyped(json, false);
}

export function ScenarioRunObservationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioRunObservationRequest {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'occurrence': json['occurrence'],
        'messageId': json['messageId'],
        'transactionKey': json['transactionKey'],
    };
}

export function ScenarioRunObservationRequestToJSON(json: any): ScenarioRunObservationRequest {
    return ScenarioRunObservationRequestToJSONTyped(json, false);
}

export function ScenarioRunObservationRequestToJSONTyped(value?: ScenarioRunObservationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'occurrence': value['occurrence'],
        'messageId': value['messageId'],
        'transactionKey': value['transactionKey'],
    };
}
