/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { ConfigurationDesiredFile } from './ConfigurationDesiredFile.js';
import {
    instanceOfConfigurationDesiredFile,
    ConfigurationDesiredFileFromJSON,
    ConfigurationDesiredFileFromJSONTyped,
    ConfigurationDesiredFileToJSON,
} from './ConfigurationDesiredFile.js';
import type { ConfigurationPlanAdvisoryStateFile } from './ConfigurationPlanAdvisoryStateFile.js';
import {
    instanceOfConfigurationPlanAdvisoryStateFile,
    ConfigurationPlanAdvisoryStateFileFromJSON,
    ConfigurationPlanAdvisoryStateFileFromJSONTyped,
    ConfigurationPlanAdvisoryStateFileToJSON,
} from './ConfigurationPlanAdvisoryStateFile.js';

/**
 * @type ConfigurationPlanFile
 * One portable desired file or the optional exported advisory snapshot. The role makes these alternatives unambiguous.
 * @export
 */
export type ConfigurationPlanFile = ConfigurationDesiredFile | ConfigurationPlanAdvisoryStateFile;

export function ConfigurationPlanFileFromJSON(json: any): ConfigurationPlanFile {
    return ConfigurationPlanFileFromJSONTyped(json, false);
}

export function ConfigurationPlanFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanFile {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfConfigurationDesiredFile(json)) {
        return ConfigurationDesiredFileFromJSONTyped(json, true);
    }
    if (instanceOfConfigurationPlanAdvisoryStateFile(json)) {
        return ConfigurationPlanAdvisoryStateFileFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationPlanFileToJSON(json: any): any {
    return ConfigurationPlanFileToJSONTyped(json, false);
}

export function ConfigurationPlanFileToJSONTyped(value?: ConfigurationPlanFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfConfigurationDesiredFile(value)) {
        return ConfigurationDesiredFileToJSON(value as ConfigurationDesiredFile);
    }
    if (instanceOfConfigurationPlanAdvisoryStateFile(value)) {
        return ConfigurationPlanAdvisoryStateFileToJSON(value as ConfigurationPlanAdvisoryStateFile);
    }
    return {};
}
