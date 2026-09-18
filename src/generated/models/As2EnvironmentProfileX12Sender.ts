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
 * ModernEDI X12 envelope identity for documents sent from this environment.
 * @export
 * @interface As2EnvironmentProfileX12Sender
 */
export interface As2EnvironmentProfileX12Sender {
    /**
     * ISA05/ISA07 qualifier for ModernEDI's environment identity, or `null` while unprovisioned.
     * @type {string}
     * @memberof As2EnvironmentProfileX12Sender
     */
    isaQualifier: string | null;
    /**
     * ISA06/ISA08 identifier for ModernEDI's environment identity, or `null` while unprovisioned.
     * @type {string}
     * @memberof As2EnvironmentProfileX12Sender
     */
    isaId: string | null;
    /**
     * GS02/GS03 identifier for ModernEDI's environment identity, or `null` while unprovisioned.
     * @type {string}
     * @memberof As2EnvironmentProfileX12Sender
     */
    gsId: string | null;
}

/**
 * Check if a given object implements the As2EnvironmentProfileX12Sender interface.
 */
export function instanceOfAs2EnvironmentProfileX12Sender(value: object): value is As2EnvironmentProfileX12Sender {
    if (!('isaQualifier' in value) || value['isaQualifier'] === undefined) return false;
    if (!('isaId' in value) || value['isaId'] === undefined) return false;
    if (!('gsId' in value) || value['gsId'] === undefined) return false;
    return true;
}

export function As2EnvironmentProfileX12SenderFromJSON(json: any): As2EnvironmentProfileX12Sender {
    return As2EnvironmentProfileX12SenderFromJSONTyped(json, false);
}

export function As2EnvironmentProfileX12SenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2EnvironmentProfileX12Sender {
    if (json == null) {
        return json;
    }
    return {

        'isaQualifier': json['isaQualifier'],
        'isaId': json['isaId'],
        'gsId': json['gsId'],
    };
}

export function As2EnvironmentProfileX12SenderToJSON(json: any): As2EnvironmentProfileX12Sender {
    return As2EnvironmentProfileX12SenderToJSONTyped(json, false);
}

export function As2EnvironmentProfileX12SenderToJSONTyped(value?: As2EnvironmentProfileX12Sender | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'isaQualifier': value['isaQualifier'],
        'isaId': value['isaId'],
        'gsId': value['gsId'],
    };
}
