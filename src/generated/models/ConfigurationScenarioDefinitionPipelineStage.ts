/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { AssureStage } from './AssureStage.js';
import {
    instanceOfAssureStage,
    AssureStageFromJSON,
    AssureStageFromJSONTyped,
    AssureStageToJSON,
} from './AssureStage.js';
import type { CheckpointStage } from './CheckpointStage.js';
import {
    instanceOfCheckpointStage,
    CheckpointStageFromJSON,
    CheckpointStageFromJSONTyped,
    CheckpointStageToJSON,
} from './CheckpointStage.js';
import type { ExchangeStage } from './ExchangeStage.js';
import {
    instanceOfExchangeStage,
    ExchangeStageFromJSON,
    ExchangeStageFromJSONTyped,
    ExchangeStageToJSON,
} from './ExchangeStage.js';
import type { ExtractStage } from './ExtractStage.js';
import {
    instanceOfExtractStage,
    ExtractStageFromJSON,
    ExtractStageFromJSONTyped,
    ExtractStageToJSON,
} from './ExtractStage.js';
import type { MapStage } from './MapStage.js';
import {
    instanceOfMapStage,
    MapStageFromJSON,
    MapStageFromJSONTyped,
    MapStageToJSON,
} from './MapStage.js';
import type { PrepareStage } from './PrepareStage.js';
import {
    instanceOfPrepareStage,
    PrepareStageFromJSON,
    PrepareStageFromJSONTyped,
    PrepareStageToJSON,
} from './PrepareStage.js';

/**
 * @type ConfigurationScenarioDefinitionPipelineStage
 * One named action in the ordered processing of an observed document. A definition says prepare, map, exchange, extract facts, check evidence, or emit a checkpoint; the binding later selects the concrete map, partner, or adapter. Keeping those artifact IDs out of the definition lets the same conversation recipe be reused by another tenant.
 * @export
 */
export type ConfigurationScenarioDefinitionPipelineStage = AssureStage | CheckpointStage | ExchangeStage | ExtractStage | MapStage | PrepareStage;

export function ConfigurationScenarioDefinitionPipelineStageFromJSON(json: any): ConfigurationScenarioDefinitionPipelineStage {
    return ConfigurationScenarioDefinitionPipelineStageFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionPipelineStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionPipelineStage {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfAssureStage(json)) {
        return AssureStageFromJSONTyped(json, true);
    }
    if (instanceOfCheckpointStage(json)) {
        return CheckpointStageFromJSONTyped(json, true);
    }
    if (instanceOfExchangeStage(json)) {
        return ExchangeStageFromJSONTyped(json, true);
    }
    if (instanceOfExtractStage(json)) {
        return ExtractStageFromJSONTyped(json, true);
    }
    if (instanceOfMapStage(json)) {
        return MapStageFromJSONTyped(json, true);
    }
    if (instanceOfPrepareStage(json)) {
        return PrepareStageFromJSONTyped(json, true);
    }
    return {} as any;
}

export function ConfigurationScenarioDefinitionPipelineStageToJSON(json: any): any {
    return ConfigurationScenarioDefinitionPipelineStageToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionPipelineStageToJSONTyped(value?: ConfigurationScenarioDefinitionPipelineStage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfAssureStage(value)) {
        return AssureStageToJSON(value as AssureStage);
    }
    if (instanceOfCheckpointStage(value)) {
        return CheckpointStageToJSON(value as CheckpointStage);
    }
    if (instanceOfExchangeStage(value)) {
        return ExchangeStageToJSON(value as ExchangeStage);
    }
    if (instanceOfExtractStage(value)) {
        return ExtractStageToJSON(value as ExtractStage);
    }
    if (instanceOfMapStage(value)) {
        return MapStageToJSON(value as MapStage);
    }
    if (instanceOfPrepareStage(value)) {
        return PrepareStageToJSON(value as PrepareStage);
    }
    return {};
}
