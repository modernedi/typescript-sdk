/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ConfigurationBundleManifest } from './ConfigurationBundleManifest.js';
import {
    instanceOfConfigurationBundleManifest,
    ConfigurationBundleManifestFromJSON,
    ConfigurationBundleManifestFromJSONTyped,
    ConfigurationBundleManifestToJSON,
} from './ConfigurationBundleManifest.js';
import type { ConfigurationResourceDocument } from './ConfigurationResourceDocument.js';
import {
    instanceOfConfigurationResourceDocument,
    ConfigurationResourceDocumentFromJSON,
    ConfigurationResourceDocumentFromJSONTyped,
    ConfigurationResourceDocumentToJSON,
} from './ConfigurationResourceDocument.js';
import type { ConfigurationSnapshotState } from './ConfigurationSnapshotState.js';
import {
    instanceOfConfigurationSnapshotState,
    ConfigurationSnapshotStateFromJSON,
    ConfigurationSnapshotStateFromJSONTyped,
    ConfigurationSnapshotStateToJSON,
} from './ConfigurationSnapshotState.js';

/**
 * @type ConfigurationExportFileContent
 * Parsed JSON object for JSON files or exact mapping source for text files.
 * @export
 */
export type ConfigurationExportFileContent = ConfigurationBundleManifest | ConfigurationResourceDocument | ConfigurationSnapshotState | string;

export function ConfigurationExportFileContentFromJSON(json: any): ConfigurationExportFileContent {
    return ConfigurationExportFileContentFromJSONTyped(json, false);
}

export function ConfigurationExportFileContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationExportFileContent {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfConfigurationBundleManifest(json)) {
        return ConfigurationBundleManifestFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationResourceDocument(json)) {
        return ConfigurationResourceDocumentFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationSnapshotState(json)) {
        return ConfigurationSnapshotStateFromJSONTyped(json, true);
    }
    if (typeof json === 'string') {
        return json;
    }
    return {} as any;
}

export function ConfigurationExportFileContentToJSON(json: any): any {
    return ConfigurationExportFileContentToJSONTyped(json, false);
}

export function ConfigurationExportFileContentToJSONTyped(value?: ConfigurationExportFileContent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfConfigurationBundleManifest(value)) {
        return ConfigurationBundleManifestToJSON(value as ConfigurationBundleManifest);
    }
    if (instanceOfConfigurationResourceDocument(value)) {
        return ConfigurationResourceDocumentToJSON(value as ConfigurationResourceDocument);
    }
    if (instanceOfConfigurationSnapshotState(value)) {
        return ConfigurationSnapshotStateToJSON(value as ConfigurationSnapshotState);
    }
    if (typeof value === 'string') {
        return value;
    }
    return {};
}
