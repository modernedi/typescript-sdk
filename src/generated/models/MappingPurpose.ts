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
 * Purpose of the runtime map that produced this output. `PROCESSING` means the output is for the normal application workflow. `ACKNOWLEDGMENT` means the output is an automatically generated response document.
 *
 * @export
 */
export const MappingPurpose = {
    Processing: 'PROCESSING',
    Acknowledgment: 'ACKNOWLEDGMENT',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type MappingPurpose = typeof MappingPurpose[keyof typeof MappingPurpose];


export function instanceOfMappingPurpose(value: any): boolean {
    for (const key in MappingPurpose) {
        if (Object.prototype.hasOwnProperty.call(MappingPurpose, key)) {
            if (MappingPurpose[key as keyof typeof MappingPurpose] === value) {
                return true;
            }
        }
    }
    return false;
}

export function MappingPurposeFromJSON(json: any): MappingPurpose {
    return MappingPurposeFromJSONTyped(json, false);
}

export function MappingPurposeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingPurpose {
    return json as MappingPurpose;
}

export function MappingPurposeToJSON(value?: MappingPurpose | null): any {
    return value as any;
}

export function MappingPurposeToJSONTyped(value: any, ignoreDiscriminator: boolean): MappingPurpose {
    return value as MappingPurpose;
}
