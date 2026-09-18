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
 * @interface ConfigurationAs2FileEnvironment
 */
export interface ConfigurationAs2FileEnvironment {
    /**
     *
     * @type {string}
     * @memberof ConfigurationAs2FileEnvironment
     */
    as2Identifier: string;
    /**
     * The same publicly routable destination and workspace plan restrictions as the partner form apply.
     * @type {string}
     * @memberof ConfigurationAs2FileEnvironment
     */
    endpointUrl: string | null;
    /**
     * Relative to connection.json. Production and Test may reference the same file. The file name uses 1-64 lowercase letters, digits, hyphens or underscores and starts with a letter or digit. No absolute paths, URLs, traversal, subdirectories, or other connections. Exports use shared.pem when both environments have the same certificate; otherwise production.pem and test.pem.
     * @type {string}
     * @memberof ConfigurationAs2FileEnvironment
     */
    publicCertificatePath: string;
    /**
     * Lowercase hexadecimal SHA-256 digest.
     * @type {string}
     * @memberof ConfigurationAs2FileEnvironment
     */
    publicCertificateSha256: string;
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationAs2FileEnvironment
     */
    requireSignature: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationAs2FileEnvironment
     */
    requireEncryption: boolean;
}

/**
 * Check if a given object implements the ConfigurationAs2FileEnvironment interface.
 */
export function instanceOfConfigurationAs2FileEnvironment(value: object): value is ConfigurationAs2FileEnvironment {
    if (!('as2Identifier' in value) || value['as2Identifier'] === undefined) return false;
    if (!('endpointUrl' in value) || value['endpointUrl'] === undefined) return false;
    if (!('publicCertificatePath' in value) || value['publicCertificatePath'] === undefined) return false;
    if (!('publicCertificateSha256' in value) || value['publicCertificateSha256'] === undefined) return false;
    if (!('requireSignature' in value) || value['requireSignature'] === undefined) return false;
    if (!('requireEncryption' in value) || value['requireEncryption'] === undefined) return false;
    return true;
}

export function ConfigurationAs2FileEnvironmentFromJSON(json: any): ConfigurationAs2FileEnvironment {
    return ConfigurationAs2FileEnvironmentFromJSONTyped(json, false);
}

export function ConfigurationAs2FileEnvironmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationAs2FileEnvironment {
    if (json == null) {
        return json;
    }
    return {

        'as2Identifier': json['as2Identifier'],
        'endpointUrl': json['endpointUrl'],
        'publicCertificatePath': json['publicCertificatePath'],
        'publicCertificateSha256': json['publicCertificateSha256'],
        'requireSignature': json['requireSignature'],
        'requireEncryption': json['requireEncryption'],
    };
}

export function ConfigurationAs2FileEnvironmentToJSON(json: any): ConfigurationAs2FileEnvironment {
    return ConfigurationAs2FileEnvironmentToJSONTyped(json, false);
}

export function ConfigurationAs2FileEnvironmentToJSONTyped(value?: ConfigurationAs2FileEnvironment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'as2Identifier': value['as2Identifier'],
        'endpointUrl': value['endpointUrl'],
        'publicCertificatePath': value['publicCertificatePath'],
        'publicCertificateSha256': value['publicCertificateSha256'],
        'requireSignature': value['requireSignature'],
        'requireEncryption': value['requireEncryption'],
    };
}
