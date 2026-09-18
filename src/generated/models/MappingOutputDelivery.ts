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
 * Safe delivery category without infrastructure identifiers:
 *
 * - `MAPPED_OUTPUTS`: managed polling and per-partner webhook delivery
 * - `TRANSACTION_RECORD`: incoming result retained on the transaction record
 * - `OUTBOUND_AS2`: outbound source-to-X12 transform used by AS2 send APIs
 *
 * @export
 */
export const MappingOutputDelivery = {
    MappedOutputs: 'MAPPED_OUTPUTS',
    TransactionRecord: 'TRANSACTION_RECORD',
    OutboundAs2: 'OUTBOUND_AS2',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingOutputDelivery = typeof MappingOutputDelivery[keyof typeof MappingOutputDelivery];


export function instanceOfMappingOutputDelivery(value: any): boolean {
    for (const key in MappingOutputDelivery) {
        if (Object.prototype.hasOwnProperty.call(MappingOutputDelivery, key)) {
            if (MappingOutputDelivery[key as keyof typeof MappingOutputDelivery] === value) {
                return true;
            }
        }
    }
    return false;
}

export function MappingOutputDeliveryFromJSON(json: any): MappingOutputDelivery {
    return MappingOutputDeliveryFromJSONTyped(json, false);
}

export function MappingOutputDeliveryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingOutputDelivery {
    return json as MappingOutputDelivery;
}

export function MappingOutputDeliveryToJSON(value?: MappingOutputDelivery | null): any {
    return value as any;
}

export function MappingOutputDeliveryToJSONTyped(value: any, ignoreDiscriminator: boolean): MappingOutputDelivery {
    return value as MappingOutputDelivery;
}
