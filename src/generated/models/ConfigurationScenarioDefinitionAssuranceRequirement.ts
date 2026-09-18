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
 * One observable proof required for a step. For example, mapping_succeeded proves that the selected map ran, while functional_or_implementation_acknowledgment_accepted proves accepted 997 or 999 evidence. Outgoing mapping proof may predate the document occurrence because mapping runs immediately before exchange; receipts and acknowledgments may not. A deadline is measured from the document occurrence to the terminal evidence time, and requires that evidence's own timestamp. Terminal evidence timestamped after the run's evaluation time is invalid.
 * @export
 * @interface ConfigurationScenarioDefinitionAssuranceRequirement
 */
export interface ConfigurationScenarioDefinitionAssuranceRequirement {
    /**
     * mapping_succeeded proves mapper execution; transport_receipt_accepted proves the AS2 receipt; interchange_acknowledgment_accepted proves TA1 acceptance; functional_or_implementation_acknowledgment_accepted proves accepted 997 or 999 evidence.
     * @type {ConfigurationScenarioDefinitionAssuranceRequirementTypeEnum}
     * @memberof ConfigurationScenarioDefinitionAssuranceRequirement
     */
    type: ConfigurationScenarioDefinitionAssuranceRequirementTypeEnum;
    /**
     * A positive ISO 8601 duration accepted by java.time.Duration, no longer than P365D. Examples: PT30M, PT4H, P2D. The server enforces the upper bound.
     * @type {string}
     * @memberof ConfigurationScenarioDefinitionAssuranceRequirement
     */
    within?: string;
}


/**
 * @export
 */
export const ConfigurationScenarioDefinitionAssuranceRequirementTypeEnum = {
    MappingSucceeded: 'mapping_succeeded',
    TransportReceiptAccepted: 'transport_receipt_accepted',
    InterchangeAcknowledgmentAccepted: 'interchange_acknowledgment_accepted',
    FunctionalOrImplementationAcknowledgmentAccepted: 'functional_or_implementation_acknowledgment_accepted',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationScenarioDefinitionAssuranceRequirementTypeEnum = typeof ConfigurationScenarioDefinitionAssuranceRequirementTypeEnum[keyof typeof ConfigurationScenarioDefinitionAssuranceRequirementTypeEnum];


/**
 * Check if a given object implements the ConfigurationScenarioDefinitionAssuranceRequirement interface.
 */
export function instanceOfConfigurationScenarioDefinitionAssuranceRequirement(value: object): value is ConfigurationScenarioDefinitionAssuranceRequirement {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionAssuranceRequirementFromJSON(json: any): ConfigurationScenarioDefinitionAssuranceRequirement {
    return ConfigurationScenarioDefinitionAssuranceRequirementFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionAssuranceRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionAssuranceRequirement {
    if (json == null) {
        return json;
    }
    return {

        'type': json['type'],
        'within': json['within'] == null ? undefined : json['within'],
    };
}

export function ConfigurationScenarioDefinitionAssuranceRequirementToJSON(json: any): ConfigurationScenarioDefinitionAssuranceRequirement {
    return ConfigurationScenarioDefinitionAssuranceRequirementToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionAssuranceRequirementToJSONTyped(value?: ConfigurationScenarioDefinitionAssuranceRequirement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'type': value['type'],
        'within': value['within'],
    };
}
