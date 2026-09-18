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
 * `PENDING` means the aggregate database change committed and runtime publication is retrying. `SUCCEEDED` means the stored apply operation is terminal.
 *
 * @export
 */
export const ConfigurationApplyOperationStatus = {
    Pending: 'PENDING',
    Succeeded: 'SUCCEEDED',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationApplyOperationStatus = typeof ConfigurationApplyOperationStatus[keyof typeof ConfigurationApplyOperationStatus];


export function instanceOfConfigurationApplyOperationStatus(value: any): boolean {
    for (const key in ConfigurationApplyOperationStatus) {
        if (Object.prototype.hasOwnProperty.call(ConfigurationApplyOperationStatus, key)) {
            if (ConfigurationApplyOperationStatus[key as keyof typeof ConfigurationApplyOperationStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConfigurationApplyOperationStatusFromJSON(json: any): ConfigurationApplyOperationStatus {
    return ConfigurationApplyOperationStatusFromJSONTyped(json, false);
}

export function ConfigurationApplyOperationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationApplyOperationStatus {
    return json as ConfigurationApplyOperationStatus;
}

export function ConfigurationApplyOperationStatusToJSON(value?: ConfigurationApplyOperationStatus | null): any {
    return value as any;
}

export function ConfigurationApplyOperationStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): ConfigurationApplyOperationStatus {
    return value as ConfigurationApplyOperationStatus;
}
