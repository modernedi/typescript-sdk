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
 * Outcome level selected for one transaction from a correlated 999. Group and acknowledgment fallbacks use the documented primary-aware conservative reduction with nested IK5 statuses; raw AK9 and IK5 objects are unchanged.
 *
 * @export
 */
export const ImplementationAcknowledgmentEvaluationScope = {
    TransactionSet: 'transaction_set',
    ImplementationGroup: 'implementation_group',
    ImplementationAcknowledgment: 'implementation_acknowledgment',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ImplementationAcknowledgmentEvaluationScope = typeof ImplementationAcknowledgmentEvaluationScope[keyof typeof ImplementationAcknowledgmentEvaluationScope];


export function instanceOfImplementationAcknowledgmentEvaluationScope(value: any): boolean {
    for (const key in ImplementationAcknowledgmentEvaluationScope) {
        if (Object.prototype.hasOwnProperty.call(ImplementationAcknowledgmentEvaluationScope, key)) {
            if (ImplementationAcknowledgmentEvaluationScope[key as keyof typeof ImplementationAcknowledgmentEvaluationScope] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ImplementationAcknowledgmentEvaluationScopeFromJSON(json: any): ImplementationAcknowledgmentEvaluationScope {
    return ImplementationAcknowledgmentEvaluationScopeFromJSONTyped(json, false);
}

export function ImplementationAcknowledgmentEvaluationScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentEvaluationScope {
    return json as ImplementationAcknowledgmentEvaluationScope;
}

export function ImplementationAcknowledgmentEvaluationScopeToJSON(value?: ImplementationAcknowledgmentEvaluationScope | null): any {
    return value as any;
}

export function ImplementationAcknowledgmentEvaluationScopeToJSONTyped(value: any, ignoreDiscriminator: boolean): ImplementationAcknowledgmentEvaluationScope {
    return value as ImplementationAcknowledgmentEvaluationScope;
}
