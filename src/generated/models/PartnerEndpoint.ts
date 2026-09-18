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
 * @interface PartnerEndpoint
 */
export interface PartnerEndpoint {
    /**
     *
     * @type {PartnerEndpointKindEnum}
     * @memberof PartnerEndpoint
     */
    kind: PartnerEndpointKindEnum;
    /**
     * Stable Partner resource key in this configuration bundle; resolved to a workspace ID during apply.
     * @type {string}
     * @memberof PartnerEndpoint
     */
    partnerKey: string;
}


/**
 * @export
 */
export const PartnerEndpointKindEnum = {
    Partner: 'partner',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type PartnerEndpointKindEnum = typeof PartnerEndpointKindEnum[keyof typeof PartnerEndpointKindEnum];


/**
 * Check if a given object implements the PartnerEndpoint interface.
 */
export function instanceOfPartnerEndpoint(value: object): value is PartnerEndpoint {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'partner') return false;

    if (!('partnerKey' in value) || value['partnerKey'] === undefined) return false;
    return true;
}

export function PartnerEndpointFromJSON(json: any): PartnerEndpoint {
    return PartnerEndpointFromJSONTyped(json, false);
}

export function PartnerEndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerEndpoint {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'partnerKey': json['partnerKey'],
    };
}

export function PartnerEndpointToJSON(json: any): PartnerEndpoint {
    return PartnerEndpointToJSONTyped(json, false);
}

export function PartnerEndpointToJSONTyped(value?: PartnerEndpoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'partnerKey': value['partnerKey'],
    };
}
