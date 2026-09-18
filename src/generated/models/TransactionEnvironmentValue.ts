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
 * Isolated transaction and queue environment used for this response object.
 * @export
 */
export const TransactionEnvironmentValue = {
    Production: 'production',
    Test: 'test',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type TransactionEnvironmentValue = typeof TransactionEnvironmentValue[keyof typeof TransactionEnvironmentValue];


export function instanceOfTransactionEnvironmentValue(value: any): boolean {
    for (const key in TransactionEnvironmentValue) {
        if (Object.prototype.hasOwnProperty.call(TransactionEnvironmentValue, key)) {
            if (TransactionEnvironmentValue[key as keyof typeof TransactionEnvironmentValue] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionEnvironmentValueFromJSON(json: any): TransactionEnvironmentValue {
    return TransactionEnvironmentValueFromJSONTyped(json, false);
}

export function TransactionEnvironmentValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionEnvironmentValue {
    return json as TransactionEnvironmentValue;
}

export function TransactionEnvironmentValueToJSON(value?: TransactionEnvironmentValue | null): any {
    return value as any;
}

export function TransactionEnvironmentValueToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionEnvironmentValue {
    return value as TransactionEnvironmentValue;
}
