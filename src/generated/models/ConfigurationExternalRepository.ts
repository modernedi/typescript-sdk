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
import type { ConfigurationExternalRepositoryLastError } from './ConfigurationExternalRepositoryLastError.js';
import {
    ConfigurationExternalRepositoryLastErrorFromJSON,
    ConfigurationExternalRepositoryLastErrorFromJSONTyped,
    ConfigurationExternalRepositoryLastErrorToJSON,
    ConfigurationExternalRepositoryLastErrorToJSONTyped,
} from './ConfigurationExternalRepositoryLastError.js';
import type { ConfigurationExternalRepositoryImportVerification } from './ConfigurationExternalRepositoryImportVerification.js';
import {
    ConfigurationExternalRepositoryImportVerificationFromJSON,
    ConfigurationExternalRepositoryImportVerificationFromJSONTyped,
    ConfigurationExternalRepositoryImportVerificationToJSON,
    ConfigurationExternalRepositoryImportVerificationToJSONTyped,
} from './ConfigurationExternalRepositoryImportVerification.js';

/**
 *
 * @export
 * @interface ConfigurationExternalRepository
 */
export interface ConfigurationExternalRepository {
    /**
     * Canonical HTTPS repository URL without credentials.
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    repositoryUrl: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    branch: string;
    /**
     * Bundle directory within the connected repository.
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    directory: string;
    /**
     * Current synchronization state. Held means import tests have not authorized an import; conflict means both sides changed and an owner must review.
     * @type {ConfigurationExternalRepositoryStatusEnum}
     * @memberof ConfigurationExternalRepository
     */
    status: ConfigurationExternalRepositoryStatusEnum;
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationExternalRepository
     */
    automatic: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ConfigurationExternalRepository
     */
    verifyBeforeImport: boolean;
    /**
     *
     * @type {ConfigurationExternalRepositoryImportVerification}
     * @memberof ConfigurationExternalRepository
     */
    importVerification: ConfigurationExternalRepositoryImportVerification | null;
    /**
     * Connection status revision; polling may advance it without a configuration change.
     * @type {number}
     * @memberof ConfigurationExternalRepository
     */
    revision: number;
    /**
     *
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    updatedAt: string;
    /**
     * Scheduled check or retry time; not a completion promise.
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    nextAttemptAt: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    lastSyncedAt: string | null;
    /**
     * Last synchronized internal workspace Git commit.
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    workspaceCommitSha: string | null;
    /**
     * Last synchronized external commit; may differ from the remote branch's current HEAD.
     * @type {string}
     * @memberof ConfigurationExternalRepository
     */
    repositoryCommitSha: string | null;
    /**
     *
     * @type {ConfigurationExternalRepositoryLastError}
     * @memberof ConfigurationExternalRepository
     */
    lastError: ConfigurationExternalRepositoryLastError | null;
}


/**
 * @export
 */
export const ConfigurationExternalRepositoryStatusEnum = {
    Pending: 'pending',
    Syncing: 'syncing',
    Synced: 'synced',
    Conflict: 'conflict',
    Held: 'held',
    Error: 'error',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationExternalRepositoryStatusEnum = typeof ConfigurationExternalRepositoryStatusEnum[keyof typeof ConfigurationExternalRepositoryStatusEnum];


/**
 * Check if a given object implements the ConfigurationExternalRepository interface.
 */
export function instanceOfConfigurationExternalRepository(value: object): value is ConfigurationExternalRepository {
    if (!('repositoryUrl' in value) || value['repositoryUrl'] === undefined) return false;
    if (!('branch' in value) || value['branch'] === undefined) return false;
    if (!('directory' in value) || value['directory'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('automatic' in value) || value['automatic'] === undefined) return false;
    if (!('verifyBeforeImport' in value) || value['verifyBeforeImport'] === undefined) return false;
    if (!('importVerification' in value) || value['importVerification'] === undefined) return false;
    if (!('revision' in value) || value['revision'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('nextAttemptAt' in value) || value['nextAttemptAt'] === undefined) return false;
    if (!('lastSyncedAt' in value) || value['lastSyncedAt'] === undefined) return false;
    if (!('workspaceCommitSha' in value) || value['workspaceCommitSha'] === undefined) return false;
    if (!('repositoryCommitSha' in value) || value['repositoryCommitSha'] === undefined) return false;
    if (!('lastError' in value) || value['lastError'] === undefined) return false;
    return true;
}

export function ConfigurationExternalRepositoryFromJSON(json: any): ConfigurationExternalRepository {
    return ConfigurationExternalRepositoryFromJSONTyped(json, false);
}

export function ConfigurationExternalRepositoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationExternalRepository {
    if (json == null) {
        return json;
    }
    return {

        'repositoryUrl': json['repositoryUrl'],
        'branch': json['branch'],
        'directory': json['directory'],
        'status': json['status'],
        'automatic': json['automatic'],
        'verifyBeforeImport': json['verifyBeforeImport'],
        'importVerification': ConfigurationExternalRepositoryImportVerificationFromJSON(json['importVerification']),
        'revision': json['revision'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'nextAttemptAt': json['nextAttemptAt'],
        'lastSyncedAt': json['lastSyncedAt'],
        'workspaceCommitSha': json['workspaceCommitSha'],
        'repositoryCommitSha': json['repositoryCommitSha'],
        'lastError': ConfigurationExternalRepositoryLastErrorFromJSON(json['lastError']),
    };
}

export function ConfigurationExternalRepositoryToJSON(json: any): ConfigurationExternalRepository {
    return ConfigurationExternalRepositoryToJSONTyped(json, false);
}

export function ConfigurationExternalRepositoryToJSONTyped(value?: ConfigurationExternalRepository | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'repositoryUrl': value['repositoryUrl'],
        'branch': value['branch'],
        'directory': value['directory'],
        'status': value['status'],
        'automatic': value['automatic'],
        'verifyBeforeImport': value['verifyBeforeImport'],
        'importVerification': ConfigurationExternalRepositoryImportVerificationToJSON(value['importVerification']),
        'revision': value['revision'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
        'nextAttemptAt': value['nextAttemptAt'],
        'lastSyncedAt': value['lastSyncedAt'],
        'workspaceCommitSha': value['workspaceCommitSha'],
        'repositoryCommitSha': value['repositoryCommitSha'],
        'lastError': ConfigurationExternalRepositoryLastErrorToJSON(value['lastError']),
    };
}
