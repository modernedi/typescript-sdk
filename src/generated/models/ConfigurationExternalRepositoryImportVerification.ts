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
 * @interface ConfigurationExternalRepositoryImportVerification
 */
export interface ConfigurationExternalRepositoryImportVerification {
    /**
     *
     * @type {string}
     * @memberof ConfigurationExternalRepositoryImportVerification
     */
    runId: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationExternalRepositoryImportVerification
     */
    repositoryCommitSha: string;
}

/**
 * Check if a given object implements the ConfigurationExternalRepositoryImportVerification interface.
 */
export function instanceOfConfigurationExternalRepositoryImportVerification(value: object): value is ConfigurationExternalRepositoryImportVerification {
    if (!('runId' in value) || value['runId'] === undefined) return false;
    if (!('repositoryCommitSha' in value) || value['repositoryCommitSha'] === undefined) return false;
    return true;
}

export function ConfigurationExternalRepositoryImportVerificationFromJSON(json: any): ConfigurationExternalRepositoryImportVerification {
    return ConfigurationExternalRepositoryImportVerificationFromJSONTyped(json, false);
}

export function ConfigurationExternalRepositoryImportVerificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationExternalRepositoryImportVerification {
    if (json == null) {
        return json;
    }
    return {

        'runId': json['runId'],
        'repositoryCommitSha': json['repositoryCommitSha'],
    };
}

export function ConfigurationExternalRepositoryImportVerificationToJSON(json: any): ConfigurationExternalRepositoryImportVerification {
    return ConfigurationExternalRepositoryImportVerificationToJSONTyped(json, false);
}

export function ConfigurationExternalRepositoryImportVerificationToJSONTyped(value?: ConfigurationExternalRepositoryImportVerification | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'runId': value['runId'],
        'repositoryCommitSha': value['repositoryCommitSha'],
    };
}
