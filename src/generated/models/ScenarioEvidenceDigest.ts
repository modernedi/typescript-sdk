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
 * @interface ScenarioEvidenceDigest
 */
export interface ScenarioEvidenceDigest {
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceDigest
     */
    kind: string;
    /**
     *
     * @type {string}
     * @memberof ScenarioEvidenceDigest
     */
    sha256: string;
}

/**
 * Check if a given object implements the ScenarioEvidenceDigest interface.
 */
export function instanceOfScenarioEvidenceDigest(value: object): value is ScenarioEvidenceDigest {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('sha256' in value) || value['sha256'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceDigestFromJSON(json: any): ScenarioEvidenceDigest {
    return ScenarioEvidenceDigestFromJSONTyped(json, false);
}

export function ScenarioEvidenceDigestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceDigest {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'sha256': json['sha256'],
    };
}

export function ScenarioEvidenceDigestToJSON(json: any): ScenarioEvidenceDigest {
    return ScenarioEvidenceDigestToJSONTyped(json, false);
}

export function ScenarioEvidenceDigestToJSONTyped(value?: ScenarioEvidenceDigest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'sha256': value['sha256'],
    };
}
