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
 * @interface ScenarioEvidenceSyntaxTreeAuthority
 */
export interface ScenarioEvidenceSyntaxTreeAuthority {
    /**
     * A stable identifier beginning with a letter and containing at most 128 letters, digits, underscores, or hyphens.
     * @type {string}
     * @memberof ScenarioEvidenceSyntaxTreeAuthority
     */
    stepId: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSyntaxTreeAuthority
     */
    x12Version: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSyntaxTreeAuthority
     */
    transactionSet: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSyntaxTreeAuthority
     */
    catalogRevision: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSyntaxTreeAuthority
     */
    catalogManifestSha256: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceSyntaxTreeAuthority
     */
    syntaxTreeSha256: string;
}

/**
 * Check if a given object implements the ScenarioEvidenceSyntaxTreeAuthority interface.
 */
export function instanceOfScenarioEvidenceSyntaxTreeAuthority(value: object): value is ScenarioEvidenceSyntaxTreeAuthority {
    if (!('stepId' in value) || value['stepId'] === undefined) return false;
    if (!('x12Version' in value) || value['x12Version'] === undefined) return false;
    if (!('transactionSet' in value) || value['transactionSet'] === undefined) return false;
    if (!('catalogRevision' in value) || value['catalogRevision'] === undefined) return false;
    if (!('catalogManifestSha256' in value) || value['catalogManifestSha256'] === undefined) return false;
    if (!('syntaxTreeSha256' in value) || value['syntaxTreeSha256'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceSyntaxTreeAuthorityFromJSON(json: any): ScenarioEvidenceSyntaxTreeAuthority {
    return ScenarioEvidenceSyntaxTreeAuthorityFromJSONTyped(json, false);
}

export function ScenarioEvidenceSyntaxTreeAuthorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceSyntaxTreeAuthority {
    if (json == null) {
        return json;
    }
    return {

        'stepId': json['stepId'],
        'x12Version': json['x12Version'],
        'transactionSet': json['transactionSet'],
        'catalogRevision': json['catalogRevision'],
        'catalogManifestSha256': json['catalogManifestSha256'],
        'syntaxTreeSha256': json['syntaxTreeSha256'],
    };
}

export function ScenarioEvidenceSyntaxTreeAuthorityToJSON(json: any): ScenarioEvidenceSyntaxTreeAuthority {
    return ScenarioEvidenceSyntaxTreeAuthorityToJSONTyped(json, false);
}

export function ScenarioEvidenceSyntaxTreeAuthorityToJSONTyped(value?: ScenarioEvidenceSyntaxTreeAuthority | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'stepId': value['stepId'],
        'x12Version': value['x12Version'],
        'transactionSet': value['transactionSet'],
        'catalogRevision': value['catalogRevision'],
        'catalogManifestSha256': value['catalogManifestSha256'],
        'syntaxTreeSha256': value['syntaxTreeSha256'],
    };
}
