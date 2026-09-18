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
import type { ConfigurationVerificationMapping } from './ConfigurationVerificationMapping.js';
import {
    ConfigurationVerificationMappingFromJSON,
    ConfigurationVerificationMappingFromJSONTyped,
    ConfigurationVerificationMappingToJSON,
    ConfigurationVerificationMappingToJSONTyped,
} from './ConfigurationVerificationMapping.js';

/**
 * Server-derived identity of the reviewed configuration and evaluator, not tenant-runtime execution evidence.
 * @export
 * @interface ConfigurationVerificationIdentity
 */
export interface ConfigurationVerificationIdentity {
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationIdentity
     */
    planSha256: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationIdentity
     */
    desiredBundleSha256: string;
    /**
     * Exact workspace snapshot used to plan.
     * @type {string}
     * @memberof ConfigurationVerificationIdentity
     */
    baseSnapshotEtag: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationIdentity
     */
    evaluatorSha256: string;
    /**
     * All desired mappings containing saved cases, sorted by resource key.
     * @type {Array<ConfigurationVerificationMapping>}
     * @memberof ConfigurationVerificationIdentity
     */
    mappings: Array<ConfigurationVerificationMapping>;
    /**
     * Desired mappings without saved cases. A passing suite does not cover these mappings.
     * @type {number}
     * @memberof ConfigurationVerificationIdentity
     */
    untestedMappingCount: number;
    /**
     * Total selected saved cases, including cases not reached before cancellation or timeout.
     * @type {number}
     * @memberof ConfigurationVerificationIdentity
     */
    caseCount: number;
}

/**
 * Check if a given object implements the ConfigurationVerificationIdentity interface.
 */
export function instanceOfConfigurationVerificationIdentity(value: object): value is ConfigurationVerificationIdentity {
    if (!('planSha256' in value) || value['planSha256'] === undefined) return false;
    if (!('desiredBundleSha256' in value) || value['desiredBundleSha256'] === undefined) return false;
    if (!('baseSnapshotEtag' in value) || value['baseSnapshotEtag'] === undefined) return false;
    if (!('evaluatorSha256' in value) || value['evaluatorSha256'] === undefined) return false;
    if (!('mappings' in value) || value['mappings'] === undefined) return false;
    if (!('untestedMappingCount' in value) || value['untestedMappingCount'] === undefined) return false;
    if (!('caseCount' in value) || value['caseCount'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationIdentityFromJSON(json: any): ConfigurationVerificationIdentity {
    return ConfigurationVerificationIdentityFromJSONTyped(json, false);
}

export function ConfigurationVerificationIdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationIdentity {
    if (json == null) {
        return json;
    }
    return {

        'planSha256': json['planSha256'],
        'desiredBundleSha256': json['desiredBundleSha256'],
        'baseSnapshotEtag': json['baseSnapshotEtag'],
        'evaluatorSha256': json['evaluatorSha256'],
        'mappings': ((json['mappings'] as Array<any>).map(ConfigurationVerificationMappingFromJSON)),
        'untestedMappingCount': json['untestedMappingCount'],
        'caseCount': json['caseCount'],
    };
}

export function ConfigurationVerificationIdentityToJSON(json: any): ConfigurationVerificationIdentity {
    return ConfigurationVerificationIdentityToJSONTyped(json, false);
}

export function ConfigurationVerificationIdentityToJSONTyped(value?: ConfigurationVerificationIdentity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'planSha256': value['planSha256'],
        'desiredBundleSha256': value['desiredBundleSha256'],
        'baseSnapshotEtag': value['baseSnapshotEtag'],
        'evaluatorSha256': value['evaluatorSha256'],
        'mappings': ((value['mappings'] as Array<any>).map(ConfigurationVerificationMappingToJSON)),
        'untestedMappingCount': value['untestedMappingCount'],
        'caseCount': value['caseCount'],
    };
}
