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
 * Publication state for a committed partner, AS2 connection, mapping, or aggregate configuration mutation. This field is not returned by ordinary reads or webhook configuration changes.
 * @export
 * @interface RuntimePublication
 */
export interface RuntimePublication {
    /**
     * - `published`: the tenant runtime configuration was published successfully, either inline during rollout or by updating its external configuration pointer.
     * - `pending`: the database mutation committed, but runtime publication failed. ModernEDI's reconciler retries automatically.
     * - `not_provisioned`: the tenant does not have runtime infrastructure yet, so there is no runtime context to publish.
     *
     * @type {RuntimePublicationStateEnum}
     * @memberof RuntimePublication
     */
    state: RuntimePublicationStateEnum;
    /**
     * True while the reconciler will continue retrying a pending publication.
     * @type {boolean}
     * @memberof RuntimePublication
     */
    retrying: boolean;
    /**
     * Optional safe operational context when publication is pending or not provisioned.
     * @type {string}
     * @memberof RuntimePublication
     */
    message?: string;
}


/**
 * @export
 */
export const RuntimePublicationStateEnum = {
    Published: 'published',
    Pending: 'pending',
    NotProvisioned: 'not_provisioned',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type RuntimePublicationStateEnum = typeof RuntimePublicationStateEnum[keyof typeof RuntimePublicationStateEnum];


/**
 * Check if a given object implements the RuntimePublication interface.
 */
export function instanceOfRuntimePublication(value: object): value is RuntimePublication {
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('retrying' in value) || value['retrying'] === undefined) return false;
    return true;
}

export function RuntimePublicationFromJSON(json: any): RuntimePublication {
    return RuntimePublicationFromJSONTyped(json, false);
}

export function RuntimePublicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimePublication {
    if (json == null) {
        return json;
    }
    return {

        'state': json['state'],
        'retrying': json['retrying'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function RuntimePublicationToJSON(json: any): RuntimePublication {
    return RuntimePublicationToJSONTyped(json, false);
}

export function RuntimePublicationToJSONTyped(value?: RuntimePublication | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'state': value['state'],
        'retrying': value['retrying'],
        'message': value['message'],
    };
}
