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
import type { As2EnvironmentProfileX12Sender } from './As2EnvironmentProfileX12Sender.js';
import {
    As2EnvironmentProfileX12SenderFromJSON,
    As2EnvironmentProfileX12SenderFromJSONTyped,
    As2EnvironmentProfileX12SenderToJSON,
    As2EnvironmentProfileX12SenderToJSONTyped,
} from './As2EnvironmentProfileX12Sender.js';

/**
 * ModernEDI endpoint and X12 sender identity for one workspace environment.
 * @export
 * @interface As2EnvironmentProfile
 */
export interface As2EnvironmentProfile {
    /**
     * HTTPS AS2 receive URL to configure at the partner, or `null` while the endpoint is unavailable.
     * @type {string}
     * @memberof As2EnvironmentProfile
     */
    as2Url: string | null;
    /**
     * Plain-HTTP endpoint when included in the tenant's plan and provisioned.
     * @type {string}
     * @memberof As2EnvironmentProfile
     */
    httpAs2Url?: string;
    /**
     * ModernEDI AS2 identifier sent as `AS2-From` and expected as inbound `AS2-To`, or `null` while unprovisioned.
     * @type {string}
     * @memberof As2EnvironmentProfile
     */
    as2Identifier: string | null;
    /**
     *
     * @type {As2EnvironmentProfileX12Sender}
     * @memberof As2EnvironmentProfile
     */
    x12Sender: As2EnvironmentProfileX12Sender;
}

/**
 * Check if a given object implements the As2EnvironmentProfile interface.
 */
export function instanceOfAs2EnvironmentProfile(value: object): value is As2EnvironmentProfile {
    if (!('as2Url' in value) || value['as2Url'] === undefined) return false;
    if (!('as2Identifier' in value) || value['as2Identifier'] === undefined) return false;
    if (!('x12Sender' in value) || value['x12Sender'] === undefined) return false;
    return true;
}

export function As2EnvironmentProfileFromJSON(json: any): As2EnvironmentProfile {
    return As2EnvironmentProfileFromJSONTyped(json, false);
}

export function As2EnvironmentProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2EnvironmentProfile {
    if (json == null) {
        return json;
    }
    return {

        'as2Url': json['as2Url'],
        'httpAs2Url': json['httpAs2Url'] == null ? undefined : json['httpAs2Url'],
        'as2Identifier': json['as2Identifier'],
        'x12Sender': As2EnvironmentProfileX12SenderFromJSON(json['x12Sender']),
    };
}

export function As2EnvironmentProfileToJSON(json: any): As2EnvironmentProfile {
    return As2EnvironmentProfileToJSONTyped(json, false);
}

export function As2EnvironmentProfileToJSONTyped(value?: As2EnvironmentProfile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'as2Url': value['as2Url'],
        'httpAs2Url': value['httpAs2Url'],
        'as2Identifier': value['as2Identifier'],
        'x12Sender': As2EnvironmentProfileX12SenderToJSON(value['x12Sender']),
    };
}
