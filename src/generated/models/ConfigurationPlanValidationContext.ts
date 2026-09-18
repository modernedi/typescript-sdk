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
 * Immutable syntax-tree catalog identity used while validating desired mappings. Both fields are null when no active catalog identity is available.
 * @export
 * @interface ConfigurationPlanValidationContext
 */
export interface ConfigurationPlanValidationContext {
    /**
     * Active immutable syntax-tree catalog revision used by mapping validation.
     * @type {string}
     * @memberof ConfigurationPlanValidationContext
     */
    syntaxTreeCatalogRevision: string | null;
    /**
     * Lowercase SHA-256 of the active syntax-tree catalog manifest.
     * @type {string}
     * @memberof ConfigurationPlanValidationContext
     */
    syntaxTreeCatalogManifestSha256: string | null;
    /**
     * Present when scenario bindings are planned. Fences the current definitions, adapters, syntax trees, partners and mappings used for validation; apply rechecks this authority.
     * @type {string}
     * @memberof ConfigurationPlanValidationContext
     */
    scenarioAuthorityEtag?: string;
}

/**
 * Check if a given object implements the ConfigurationPlanValidationContext interface.
 */
export function instanceOfConfigurationPlanValidationContext(value: object): value is ConfigurationPlanValidationContext {
    if (!('syntaxTreeCatalogRevision' in value) || value['syntaxTreeCatalogRevision'] === undefined) return false;
    if (!('syntaxTreeCatalogManifestSha256' in value) || value['syntaxTreeCatalogManifestSha256'] === undefined) return false;
    return true;
}

export function ConfigurationPlanValidationContextFromJSON(json: any): ConfigurationPlanValidationContext {
    return ConfigurationPlanValidationContextFromJSONTyped(json, false);
}

export function ConfigurationPlanValidationContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanValidationContext {
    if (json == null) {
        return json;
    }
    return {

        'syntaxTreeCatalogRevision': json['syntaxTreeCatalogRevision'],
        'syntaxTreeCatalogManifestSha256': json['syntaxTreeCatalogManifestSha256'],
        'scenarioAuthorityEtag': json['scenarioAuthorityEtag'] == null ? undefined : json['scenarioAuthorityEtag'],
    };
}

export function ConfigurationPlanValidationContextToJSON(json: any): ConfigurationPlanValidationContext {
    return ConfigurationPlanValidationContextToJSONTyped(json, false);
}

export function ConfigurationPlanValidationContextToJSONTyped(value?: ConfigurationPlanValidationContext | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'syntaxTreeCatalogRevision': value['syntaxTreeCatalogRevision'],
        'syntaxTreeCatalogManifestSha256': value['syntaxTreeCatalogManifestSha256'],
        'scenarioAuthorityEtag': value['scenarioAuthorityEtag'],
    };
}
