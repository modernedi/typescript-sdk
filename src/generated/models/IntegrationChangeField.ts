/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */


/**
 * Stable public transaction component whose fingerprint changed.
 * @export
 */
export const IntegrationChangeField = {
    Transaction: 'transaction',
    MappingStatus: 'mappingStatus',
    FunctionalAcknowledgment: 'functionalAcknowledgment',
    ImplementationAcknowledgment: 'implementationAcknowledgment',
    TechnicalAcknowledgment: 'technicalAcknowledgment',
    Mdn: 'mdn',
    MappedOutputs: 'mappedOutputs',
    Attention: 'attention',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type IntegrationChangeField = typeof IntegrationChangeField[keyof typeof IntegrationChangeField];


export function instanceOfIntegrationChangeField(value: any): boolean {
    for (const key in IntegrationChangeField) {
        if (Object.prototype.hasOwnProperty.call(IntegrationChangeField, key)) {
            if (IntegrationChangeField[key as keyof typeof IntegrationChangeField] === value) {
                return true;
            }
        }
    }
    return false;
}

export function IntegrationChangeFieldFromJSON(json: any): IntegrationChangeField {
    return IntegrationChangeFieldFromJSONTyped(json, false);
}

export function IntegrationChangeFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationChangeField {
    return json as IntegrationChangeField;
}

export function IntegrationChangeFieldToJSON(value?: IntegrationChangeField | null): any {
    return value as any;
}

export function IntegrationChangeFieldToJSONTyped(value: any, ignoreDiscriminator: boolean): IntegrationChangeField {
    return value as IntegrationChangeField;
}
