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
import type { ScenarioEvidenceTargetAuthority } from './ScenarioEvidenceTargetAuthority.js';
import {
    ScenarioEvidenceTargetAuthorityFromJSON,
    ScenarioEvidenceTargetAuthorityFromJSONTyped,
    ScenarioEvidenceTargetAuthorityToJSON,
    ScenarioEvidenceTargetAuthorityToJSONTyped,
} from './ScenarioEvidenceTargetAuthority.js';
import type { ScenarioEvidencePartnerAuthority } from './ScenarioEvidencePartnerAuthority.js';
import {
    ScenarioEvidencePartnerAuthorityFromJSON,
    ScenarioEvidencePartnerAuthorityFromJSONTyped,
    ScenarioEvidencePartnerAuthorityToJSON,
    ScenarioEvidencePartnerAuthorityToJSONTyped,
} from './ScenarioEvidencePartnerAuthority.js';
import type { ScenarioEvidenceMappingAuthority } from './ScenarioEvidenceMappingAuthority.js';
import {
    ScenarioEvidenceMappingAuthorityFromJSON,
    ScenarioEvidenceMappingAuthorityFromJSONTyped,
    ScenarioEvidenceMappingAuthorityToJSON,
    ScenarioEvidenceMappingAuthorityToJSONTyped,
} from './ScenarioEvidenceMappingAuthority.js';
import type { ScenarioEvidenceSyntaxTreeAuthority } from './ScenarioEvidenceSyntaxTreeAuthority.js';
import {
    ScenarioEvidenceSyntaxTreeAuthorityFromJSON,
    ScenarioEvidenceSyntaxTreeAuthorityFromJSONTyped,
    ScenarioEvidenceSyntaxTreeAuthorityToJSON,
    ScenarioEvidenceSyntaxTreeAuthorityToJSONTyped,
} from './ScenarioEvidenceSyntaxTreeAuthority.js';

/**
 *
 * @export
 * @interface ScenarioEvidenceAuthority
 */
export interface ScenarioEvidenceAuthority {
    /**
     *
     * @type {Array<ScenarioEvidencePartnerAuthority>}
     * @memberof ScenarioEvidenceAuthority
     */
    partners: Array<ScenarioEvidencePartnerAuthority>;
    /**
     *
     * @type {Array<ScenarioEvidenceMappingAuthority>}
     * @memberof ScenarioEvidenceAuthority
     */
    mappings: Array<ScenarioEvidenceMappingAuthority>;
    /**
     *
     * @type {Array<ScenarioEvidenceSyntaxTreeAuthority>}
     * @memberof ScenarioEvidenceAuthority
     */
    syntaxTrees: Array<ScenarioEvidenceSyntaxTreeAuthority>;
    /**
     *
     * @type {Array<ScenarioEvidenceTargetAuthority>}
     * @memberof ScenarioEvidenceAuthority
     */
    targets: Array<ScenarioEvidenceTargetAuthority>;
}

/**
 * Check if a given object implements the ScenarioEvidenceAuthority interface.
 */
export function instanceOfScenarioEvidenceAuthority(value: object): value is ScenarioEvidenceAuthority {
    if (!('partners' in value) || value['partners'] === undefined) return false;
    if (!('mappings' in value) || value['mappings'] === undefined) return false;
    if (!('syntaxTrees' in value) || value['syntaxTrees'] === undefined) return false;
    if (!('targets' in value) || value['targets'] === undefined) return false;
    return true;
}

export function ScenarioEvidenceAuthorityFromJSON(json: any): ScenarioEvidenceAuthority {
    return ScenarioEvidenceAuthorityFromJSONTyped(json, false);
}

export function ScenarioEvidenceAuthorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioEvidenceAuthority {
    if (json == null) {
        return json;
    }
    return {

        'partners': ((json['partners'] as Array<any>).map(ScenarioEvidencePartnerAuthorityFromJSON)),
        'mappings': ((json['mappings'] as Array<any>).map(ScenarioEvidenceMappingAuthorityFromJSON)),
        'syntaxTrees': ((json['syntaxTrees'] as Array<any>).map(ScenarioEvidenceSyntaxTreeAuthorityFromJSON)),
        'targets': ((json['targets'] as Array<any>).map(ScenarioEvidenceTargetAuthorityFromJSON)),
    };
}

export function ScenarioEvidenceAuthorityToJSON(json: any): ScenarioEvidenceAuthority {
    return ScenarioEvidenceAuthorityToJSONTyped(json, false);
}

export function ScenarioEvidenceAuthorityToJSONTyped(value?: ScenarioEvidenceAuthority | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'partners': ((value['partners'] as Array<any>).map(ScenarioEvidencePartnerAuthorityToJSON)),
        'mappings': ((value['mappings'] as Array<any>).map(ScenarioEvidenceMappingAuthorityToJSON)),
        'syntaxTrees': ((value['syntaxTrees'] as Array<any>).map(ScenarioEvidenceSyntaxTreeAuthorityToJSON)),
        'targets': ((value['targets'] as Array<any>).map(ScenarioEvidenceTargetAuthorityToJSON)),
    };
}
