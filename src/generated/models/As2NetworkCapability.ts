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
 * Availability and advertised addresses for one static-network capability.
 * @export
 * @interface As2NetworkCapability
 */
export interface As2NetworkCapability {
    /**
     * `ready` means addresses may be allowlisted, `pending` means provisioning is incomplete, and `not_included` means the plan does not include the capability.
     * @type {As2NetworkCapabilityStatusEnum}
     * @memberof As2NetworkCapability
     */
    status: As2NetworkCapabilityStatusEnum;
    /**
     * Public IP addresses to give the partner; empty until ready or when the capability is not included.
     * @type {Array<string>}
     * @memberof As2NetworkCapability
     */
    addresses: Array<string>;
}


/**
 * @export
 */
export const As2NetworkCapabilityStatusEnum = {
    Ready: 'ready',
    Pending: 'pending',
    NotIncluded: 'not_included',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type As2NetworkCapabilityStatusEnum = typeof As2NetworkCapabilityStatusEnum[keyof typeof As2NetworkCapabilityStatusEnum];


/**
 * Check if a given object implements the As2NetworkCapability interface.
 */
export function instanceOfAs2NetworkCapability(value: object): value is As2NetworkCapability {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('addresses' in value) || value['addresses'] === undefined) return false;
    return true;
}

export function As2NetworkCapabilityFromJSON(json: any): As2NetworkCapability {
    return As2NetworkCapabilityFromJSONTyped(json, false);
}

export function As2NetworkCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2NetworkCapability {
    if (json == null) {
        return json;
    }
    return {

        'status': json['status'],
        'addresses': json['addresses'],
    };
}

export function As2NetworkCapabilityToJSON(json: any): As2NetworkCapability {
    return As2NetworkCapabilityToJSONTyped(json, false);
}

export function As2NetworkCapabilityToJSONTyped(value?: As2NetworkCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'status': value['status'],
        'addresses': value['addresses'],
    };
}
