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
 * @interface ScenarioOperation
 */
export interface ScenarioOperation {
    /**
     *
     * @type {string}
     * @memberof ScenarioOperation
     */
    id: string;
    /**
     * Opaque operation telemetry. Clients transition from the returned run, ETag, and guidance rather than parsing this value.
     * @type {string}
     * @memberof ScenarioOperation
     */
    action: string;
    /**
     *
     * @type {ScenarioOperationDispositionEnum}
     * @memberof ScenarioOperation
     */
    disposition: ScenarioOperationDispositionEnum;
    /**
     *
     * @type {number}
     * @memberof ScenarioOperation
     */
    fromRevision: number;
    /**
     *
     * @type {number}
     * @memberof ScenarioOperation
     */
    toRevision: number;
}


/**
 * @export
 */
export const ScenarioOperationDispositionEnum = {
    Started: 'started',
    Advanced: 'advanced',
    Reconciled: 'reconciled',
    ReconciliationPending: 'reconciliation_pending',
    BindingDrifted: 'binding_drifted',
    Cancelled: 'cancelled',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ScenarioOperationDispositionEnum = typeof ScenarioOperationDispositionEnum[keyof typeof ScenarioOperationDispositionEnum];


/**
 * Check if a given object implements the ScenarioOperation interface.
 */
export function instanceOfScenarioOperation(value: object): value is ScenarioOperation {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('disposition' in value) || value['disposition'] === undefined) return false;
    if (!('fromRevision' in value) || value['fromRevision'] === undefined) return false;
    if (!('toRevision' in value) || value['toRevision'] === undefined) return false;
    return true;
}

export function ScenarioOperationFromJSON(json: any): ScenarioOperation {
    return ScenarioOperationFromJSONTyped(json, false);
}

export function ScenarioOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioOperation {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'],
        'action': json['action'],
        'disposition': json['disposition'],
        'fromRevision': json['fromRevision'],
        'toRevision': json['toRevision'],
    };
}

export function ScenarioOperationToJSON(json: any): ScenarioOperation {
    return ScenarioOperationToJSONTyped(json, false);
}

export function ScenarioOperationToJSONTyped(value?: ScenarioOperation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'action': value['action'],
        'disposition': value['disposition'],
        'fromRevision': value['fromRevision'],
        'toRevision': value['toRevision'],
    };
}
