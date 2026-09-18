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
import type { ConfigurationVerificationSyntaxTree } from './ConfigurationVerificationSyntaxTree.js';
import {
    ConfigurationVerificationSyntaxTreeFromJSON,
    ConfigurationVerificationSyntaxTreeFromJSONTyped,
    ConfigurationVerificationSyntaxTreeToJSON,
    ConfigurationVerificationSyntaxTreeToJSONTyped,
} from './ConfigurationVerificationSyntaxTree.js';

/**
 * Identity and coverage of one tested mapping.
 * @export
 * @interface ConfigurationVerificationMapping
 */
export interface ConfigurationVerificationMapping {
    /**
     * Stable portable Mapping resource key.
     * @type {string}
     * @memberof ConfigurationVerificationMapping
     */
    mappingResourceKey: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationMapping
     */
    candidateSha256: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationVerificationMapping
     */
    casesSha256: string;
    /**
     * Number of saved cases selected for this mapping.
     * @type {number}
     * @memberof ConfigurationVerificationMapping
     */
    caseCount: number;
    /**
     *
     * @type {ConfigurationVerificationSyntaxTree}
     * @memberof ConfigurationVerificationMapping
     */
    syntaxTree: ConfigurationVerificationSyntaxTree;
}

/**
 * Check if a given object implements the ConfigurationVerificationMapping interface.
 */
export function instanceOfConfigurationVerificationMapping(value: object): value is ConfigurationVerificationMapping {
    if (!('mappingResourceKey' in value) || value['mappingResourceKey'] === undefined) return false;
    if (!('candidateSha256' in value) || value['candidateSha256'] === undefined) return false;
    if (!('casesSha256' in value) || value['casesSha256'] === undefined) return false;
    if (!('caseCount' in value) || value['caseCount'] === undefined) return false;
    if (!('syntaxTree' in value) || value['syntaxTree'] === undefined) return false;
    return true;
}

export function ConfigurationVerificationMappingFromJSON(json: any): ConfigurationVerificationMapping {
    return ConfigurationVerificationMappingFromJSONTyped(json, false);
}

export function ConfigurationVerificationMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVerificationMapping {
    if (json == null) {
        return json;
    }
    return {

        'mappingResourceKey': json['mappingResourceKey'],
        'candidateSha256': json['candidateSha256'],
        'casesSha256': json['casesSha256'],
        'caseCount': json['caseCount'],
        'syntaxTree': ConfigurationVerificationSyntaxTreeFromJSON(json['syntaxTree']),
    };
}

export function ConfigurationVerificationMappingToJSON(json: any): ConfigurationVerificationMapping {
    return ConfigurationVerificationMappingToJSONTyped(json, false);
}

export function ConfigurationVerificationMappingToJSONTyped(value?: ConfigurationVerificationMapping | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'mappingResourceKey': value['mappingResourceKey'],
        'candidateSha256': value['candidateSha256'],
        'casesSha256': value['casesSha256'],
        'caseCount': value['caseCount'],
        'syntaxTree': ConfigurationVerificationSyntaxTreeToJSON(value['syntaxTree']),
    };
}
