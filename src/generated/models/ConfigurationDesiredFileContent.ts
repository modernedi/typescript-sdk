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

/**
 * @type ConfigurationDesiredFileContent
 * Parsed manifest or resource object, or exact mapping-source text.
 * @export
 */
export type ConfigurationDesiredFileContent = ConfigurationBundleManifest | ConfigurationResourceDocument | string;

export function ConfigurationDesiredFileContentFromJSON(json: any): ConfigurationDesiredFileContent {
    return ConfigurationDesiredFileContentFromJSONTyped(json, false);
}

export function ConfigurationDesiredFileContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationDesiredFileContent {
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
    if (typeof json === 'string') {
        return json;
    }
    return {} as any;
}

export function ConfigurationDesiredFileContentToJSON(json: any): any {
    return ConfigurationDesiredFileContentToJSONTyped(json, false);
}

export function ConfigurationDesiredFileContentToJSONTyped(value?: ConfigurationDesiredFileContent | null, ignoreDiscriminator: boolean = false): any {
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
    if (typeof value === 'string') {
        return value;
    }
    return {};
}
