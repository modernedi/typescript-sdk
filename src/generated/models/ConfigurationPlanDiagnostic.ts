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
import type { ConfigurationPlanResourceIdentity } from './ConfigurationPlanResourceIdentity.js';
import {
    ConfigurationPlanResourceIdentityFromJSON,
    ConfigurationPlanResourceIdentityFromJSONTyped,
    ConfigurationPlanResourceIdentityToJSON,
    ConfigurationPlanResourceIdentityToJSONTyped,
} from './ConfigurationPlanResourceIdentity.js';

/**
 * One machine-readable planning error or warning. `pointer` is an RFC 6901 JSON Pointer into the submitted request body; source diagnostics may also identify an exact file, line, and column.
 * @export
 * @interface ConfigurationPlanDiagnostic
 */
export interface ConfigurationPlanDiagnostic {
    /**
     *
     * @type {ConfigurationPlanDiagnosticSeverityEnum}
     * @memberof ConfigurationPlanDiagnostic
     */
    severity: ConfigurationPlanDiagnosticSeverityEnum;
    /**
     * Stable machine-readable diagnostic code.
     * @type {string}
     * @memberof ConfigurationPlanDiagnostic
     */
    code: string;
    /**
     * Plain-language explanation suitable for an operator or authoring tool.
     * @type {string}
     * @memberof ConfigurationPlanDiagnostic
     */
    message: string;
    /**
     * RFC 6901 JSON Pointer into the submitted `ConfigurationPlanRequest`; the empty string identifies the request root.
     * @type {string}
     * @memberof ConfigurationPlanDiagnostic
     */
    pointer: string;
    /**
     * Logical bundle path associated with this diagnostic when one file can be identified.
     * @type {string}
     * @memberof ConfigurationPlanDiagnostic
     */
    filePath?: string;
    /**
     *
     * @type {ConfigurationPlanResourceIdentity}
     * @memberof ConfigurationPlanDiagnostic
     */
    resource?: ConfigurationPlanResourceIdentity;
    /**
     * One-based source line when a mapping compiler supplies a location.
     * @type {number}
     * @memberof ConfigurationPlanDiagnostic
     */
    line?: number;
    /**
     * One-based source column when a mapping compiler supplies a location.
     * @type {number}
     * @memberof ConfigurationPlanDiagnostic
     */
    column?: number;
}


/**
 * @export
 */
export const ConfigurationPlanDiagnosticSeverityEnum = {
    Error: 'ERROR',
    Warning: 'WARNING',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanDiagnosticSeverityEnum = typeof ConfigurationPlanDiagnosticSeverityEnum[keyof typeof ConfigurationPlanDiagnosticSeverityEnum];


/**
 * Check if a given object implements the ConfigurationPlanDiagnostic interface.
 */
export function instanceOfConfigurationPlanDiagnostic(value: object): value is ConfigurationPlanDiagnostic {
    if (!('severity' in value) || value['severity'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('pointer' in value) || value['pointer'] === undefined) return false;
    return true;
}

export function ConfigurationPlanDiagnosticFromJSON(json: any): ConfigurationPlanDiagnostic {
    return ConfigurationPlanDiagnosticFromJSONTyped(json, false);
}

export function ConfigurationPlanDiagnosticFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanDiagnostic {
    if (json == null) {
        return json;
    }
    return {

        'severity': json['severity'],
        'code': json['code'],
        'message': json['message'],
        'pointer': json['pointer'],
        'filePath': json['filePath'] == null ? undefined : json['filePath'],
        'resource': json['resource'] == null ? undefined : ConfigurationPlanResourceIdentityFromJSON(json['resource']),
        'line': json['line'] == null ? undefined : json['line'],
        'column': json['column'] == null ? undefined : json['column'],
    };
}

export function ConfigurationPlanDiagnosticToJSON(json: any): ConfigurationPlanDiagnostic {
    return ConfigurationPlanDiagnosticToJSONTyped(json, false);
}

export function ConfigurationPlanDiagnosticToJSONTyped(value?: ConfigurationPlanDiagnostic | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'severity': value['severity'],
        'code': value['code'],
        'message': value['message'],
        'pointer': value['pointer'],
        'filePath': value['filePath'],
        'resource': ConfigurationPlanResourceIdentityToJSON(value['resource']),
        'line': value['line'],
        'column': value['column'],
    };
}
