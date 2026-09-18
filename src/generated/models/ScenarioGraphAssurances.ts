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
 * Only assurances declared by this step are present. Pending evidence can be refreshed by observing the same transaction again with a new command identity.
 * @export
 * @interface ScenarioGraphAssurances
 */
export interface ScenarioGraphAssurances {
    /**
     *
     * @type {ScenarioGraphAssurancesMappingSucceededEnum}
     * @memberof ScenarioGraphAssurances
     */
    mappingSucceeded?: ScenarioGraphAssurancesMappingSucceededEnum;
    /**
     *
     * @type {ScenarioGraphAssurancesTransportReceiptAcceptedEnum}
     * @memberof ScenarioGraphAssurances
     */
    transportReceiptAccepted?: ScenarioGraphAssurancesTransportReceiptAcceptedEnum;
    /**
     *
     * @type {ScenarioGraphAssurancesInterchangeAcknowledgmentAcceptedEnum}
     * @memberof ScenarioGraphAssurances
     */
    interchangeAcknowledgmentAccepted?: ScenarioGraphAssurancesInterchangeAcknowledgmentAcceptedEnum;
    /**
     *
     * @type {ScenarioGraphAssurancesFunctionalOrImplementationAcknowledgmentAcceptedEnum}
     * @memberof ScenarioGraphAssurances
     */
    functionalOrImplementationAcknowledgmentAccepted?: ScenarioGraphAssurancesFunctionalOrImplementationAcknowledgmentAcceptedEnum;
}


/**
 * @export
 */
export const ScenarioGraphAssurancesMappingSucceededEnum = {
    Pending: 'pending',
    Passed: 'passed',
    Failed: 'failed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphAssurancesMappingSucceededEnum = typeof ScenarioGraphAssurancesMappingSucceededEnum[keyof typeof ScenarioGraphAssurancesMappingSucceededEnum];

/**
 * @export
 */
export const ScenarioGraphAssurancesTransportReceiptAcceptedEnum = {
    Pending: 'pending',
    Passed: 'passed',
    Failed: 'failed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphAssurancesTransportReceiptAcceptedEnum = typeof ScenarioGraphAssurancesTransportReceiptAcceptedEnum[keyof typeof ScenarioGraphAssurancesTransportReceiptAcceptedEnum];

/**
 * @export
 */
export const ScenarioGraphAssurancesInterchangeAcknowledgmentAcceptedEnum = {
    Pending: 'pending',
    Passed: 'passed',
    Failed: 'failed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphAssurancesInterchangeAcknowledgmentAcceptedEnum = typeof ScenarioGraphAssurancesInterchangeAcknowledgmentAcceptedEnum[keyof typeof ScenarioGraphAssurancesInterchangeAcknowledgmentAcceptedEnum];

/**
 * @export
 */
export const ScenarioGraphAssurancesFunctionalOrImplementationAcknowledgmentAcceptedEnum = {
    Pending: 'pending',
    Passed: 'passed',
    Failed: 'failed',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioGraphAssurancesFunctionalOrImplementationAcknowledgmentAcceptedEnum = typeof ScenarioGraphAssurancesFunctionalOrImplementationAcknowledgmentAcceptedEnum[keyof typeof ScenarioGraphAssurancesFunctionalOrImplementationAcknowledgmentAcceptedEnum];


/**
 * Check if a given object implements the ScenarioGraphAssurances interface.
 */
export function instanceOfScenarioGraphAssurances(value: object): value is ScenarioGraphAssurances {
    return true;
}

export function ScenarioGraphAssurancesFromJSON(json: any): ScenarioGraphAssurances {
    return ScenarioGraphAssurancesFromJSONTyped(json, false);
}

export function ScenarioGraphAssurancesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioGraphAssurances {
    if (json == null) {
        return json;
    }
    return {

        'mappingSucceeded': json['mapping_succeeded'] == null ? undefined : json['mapping_succeeded'],
        'transportReceiptAccepted': json['transport_receipt_accepted'] == null ? undefined : json['transport_receipt_accepted'],
        'interchangeAcknowledgmentAccepted': json['interchange_acknowledgment_accepted'] == null ? undefined : json['interchange_acknowledgment_accepted'],
        'functionalOrImplementationAcknowledgmentAccepted': json['functional_or_implementation_acknowledgment_accepted'] == null ? undefined : json['functional_or_implementation_acknowledgment_accepted'],
    };
}

export function ScenarioGraphAssurancesToJSON(json: any): ScenarioGraphAssurances {
    return ScenarioGraphAssurancesToJSONTyped(json, false);
}

export function ScenarioGraphAssurancesToJSONTyped(value?: ScenarioGraphAssurances | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'mapping_succeeded': value['mappingSucceeded'],
        'transport_receipt_accepted': value['transportReceiptAccepted'],
        'interchange_acknowledgment_accepted': value['interchangeAcknowledgmentAccepted'],
        'functional_or_implementation_acknowledgment_accepted': value['functionalOrImplementationAcknowledgmentAccepted'],
    };
}
