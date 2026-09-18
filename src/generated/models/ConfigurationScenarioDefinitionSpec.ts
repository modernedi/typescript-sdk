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
import type { ConfigurationScenarioDefinitionCheckpoint } from './ConfigurationScenarioDefinitionCheckpoint.js';
import {
    ConfigurationScenarioDefinitionCheckpointFromJSON,
    ConfigurationScenarioDefinitionCheckpointFromJSONTyped,
    ConfigurationScenarioDefinitionCheckpointToJSON,
    ConfigurationScenarioDefinitionCheckpointToJSONTyped,
} from './ConfigurationScenarioDefinitionCheckpoint.js';
import type { ConfigurationScenarioDefinitionActor } from './ConfigurationScenarioDefinitionActor.js';
import {
    ConfigurationScenarioDefinitionActorFromJSON,
    ConfigurationScenarioDefinitionActorFromJSONTyped,
    ConfigurationScenarioDefinitionActorToJSON,
    ConfigurationScenarioDefinitionActorToJSONTyped,
} from './ConfigurationScenarioDefinitionActor.js';
import type { ConfigurationScenarioDefinitionStep } from './ConfigurationScenarioDefinitionStep.js';
import {
    ConfigurationScenarioDefinitionStepFromJSON,
    ConfigurationScenarioDefinitionStepFromJSONTyped,
    ConfigurationScenarioDefinitionStepToJSON,
    ConfigurationScenarioDefinitionStepToJSONTyped,
} from './ConfigurationScenarioDefinitionStep.js';
import type { ConfigurationScenarioDefinitionTransition } from './ConfigurationScenarioDefinitionTransition.js';
import {
    ConfigurationScenarioDefinitionTransitionFromJSON,
    ConfigurationScenarioDefinitionTransitionFromJSONTyped,
    ConfigurationScenarioDefinitionTransitionToJSON,
    ConfigurationScenarioDefinitionTransitionToJSONTyped,
} from './ConfigurationScenarioDefinitionTransition.js';
import type { ConfigurationScenarioDefinitionBranch } from './ConfigurationScenarioDefinitionBranch.js';
import {
    ConfigurationScenarioDefinitionBranchFromJSON,
    ConfigurationScenarioDefinitionBranchFromJSONTyped,
    ConfigurationScenarioDefinitionBranchToJSON,
    ConfigurationScenarioDefinitionBranchToJSONTyped,
} from './ConfigurationScenarioDefinitionBranch.js';
import type { ConfigurationScenarioDefinitionParameter } from './ConfigurationScenarioDefinitionParameter.js';
import {
    ConfigurationScenarioDefinitionParameterFromJSON,
    ConfigurationScenarioDefinitionParameterFromJSONTyped,
    ConfigurationScenarioDefinitionParameterToJSON,
    ConfigurationScenarioDefinitionParameterToJSONTyped,
} from './ConfigurationScenarioDefinitionParameter.js';
import type { ConfigurationScenarioDefinitionAssertion } from './ConfigurationScenarioDefinitionAssertion.js';
import {
    ConfigurationScenarioDefinitionAssertionFromJSON,
    ConfigurationScenarioDefinitionAssertionFromJSONTyped,
    ConfigurationScenarioDefinitionAssertionToJSON,
    ConfigurationScenarioDefinitionAssertionToJSONTyped,
} from './ConfigurationScenarioDefinitionAssertion.js';

/**
 * The business-conversation recipe. Actors name the business roles, steps name their X12 document exchanges, and transitions state how those exchanges relate. ModernEDI also verifies unique IDs, references, a connected conversation, and the absence of ordinary transition cycles during Validate and Publish. Omitted transitions, assertions, parameters, checkpoints, or branches mean empty arrays; published JSON materializes every collection.
 * @export
 * @interface ConfigurationScenarioDefinitionSpec
 */
export interface ConfigurationScenarioDefinitionSpec {
    /**
     * Business roles participating in the conversation. Every actor ID must be unique.
     * @type {Array<ConfigurationScenarioDefinitionActor>}
     * @memberof ConfigurationScenarioDefinitionSpec
     */
    actors: Array<ConfigurationScenarioDefinitionActor>;
    /**
     * Business-document exchanges. Every step ID must be unique and must reference two different declared actors.
     * @type {Array<ConfigurationScenarioDefinitionStep>}
     * @memberof ConfigurationScenarioDefinitionSpec
     */
    steps: Array<ConfigurationScenarioDefinitionStep>;
    /**
     * Rules connecting document steps. For example, an 810 invoice can follow its matching 850 purchase order, a later 860 can supersede an earlier order change, and an ocean 303 can cancel a matching 301 booking confirmation. Transition IDs must be unique. Except for a same-step supersedes revision chain, ordinary next-document paths cannot loop and every step must belong to one connected conversation.
     * @type {Array<ConfigurationScenarioDefinitionTransition>}
     * @memberof ConfigurationScenarioDefinitionSpec
     */
    transitions?: Array<ConfigurationScenarioDefinitionTransition>;
    /**
     * Run-level facts that must hold across one or more observed step occurrences. Assertion IDs must be unique.
     * @type {Array<ConfigurationScenarioDefinitionAssertion>}
     * @memberof ConfigurationScenarioDefinitionSpec
     */
    assertions?: Array<ConfigurationScenarioDefinitionAssertion>;
    /**
     * Prepared values supplied when a run starts. Parameters declare only their semantic type, required flag, and optional default; bindings and runtime APIs supply values.
     * @type {Array<ConfigurationScenarioDefinitionParameter>}
     * @memberof ConfigurationScenarioDefinitionSpec
     */
    parameters?: Array<ConfigurationScenarioDefinitionParameter>;
    /**
     * Named completion events emitted after a step finishes a declared processing stage. A checkpoint can trigger a choice between allowed next steps. For example, a bookingDisposition checkpoint emitted after an X12 301 booking confirmation can choose between an X12 303 cancellation and X12 304 shipping instructions.
     * @type {Array<ConfigurationScenarioDefinitionCheckpoint>}
     * @memberof ConfigurationScenarioDefinitionSpec
     */
    checkpoints?: Array<ConfigurationScenarioDefinitionCheckpoint>;
    /**
     * Explicit choices between allowed next-document transitions, evaluated only after a named checkpoint is emitted. For example, after an X12 301 booking confirmation emits bookingDisposition, cancelRequested=true can select the X12 303 cancellation path and otherwise can select X12 304 shipping instructions. Choices are evaluated in deterministic rounds from the steps already available at the start of that round; a destination document cannot provide the fact that selects its own path.
     * @type {Array<ConfigurationScenarioDefinitionBranch>}
     * @memberof ConfigurationScenarioDefinitionSpec
     */
    branches?: Array<ConfigurationScenarioDefinitionBranch>;
}

/**
 * Check if a given object implements the ConfigurationScenarioDefinitionSpec interface.
 */
export function instanceOfConfigurationScenarioDefinitionSpec(value: object): value is ConfigurationScenarioDefinitionSpec {
    if (!('actors' in value) || value['actors'] === undefined) return false;
    if (!('steps' in value) || value['steps'] === undefined) return false;
    return true;
}

export function ConfigurationScenarioDefinitionSpecFromJSON(json: any): ConfigurationScenarioDefinitionSpec {
    return ConfigurationScenarioDefinitionSpecFromJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationScenarioDefinitionSpec {
    if (json == null) {
        return json;
    }
    return {

        'actors': ((json['actors'] as Array<any>).map(ConfigurationScenarioDefinitionActorFromJSON)),
        'steps': ((json['steps'] as Array<any>).map(ConfigurationScenarioDefinitionStepFromJSON)),
        'transitions': json['transitions'] == null ? undefined : ((json['transitions'] as Array<any>).map(ConfigurationScenarioDefinitionTransitionFromJSON)),
        'assertions': json['assertions'] == null ? undefined : ((json['assertions'] as Array<any>).map(ConfigurationScenarioDefinitionAssertionFromJSON)),
        'parameters': json['parameters'] == null ? undefined : ((json['parameters'] as Array<any>).map(ConfigurationScenarioDefinitionParameterFromJSON)),
        'checkpoints': json['checkpoints'] == null ? undefined : ((json['checkpoints'] as Array<any>).map(ConfigurationScenarioDefinitionCheckpointFromJSON)),
        'branches': json['branches'] == null ? undefined : ((json['branches'] as Array<any>).map(ConfigurationScenarioDefinitionBranchFromJSON)),
    };
}

export function ConfigurationScenarioDefinitionSpecToJSON(json: any): ConfigurationScenarioDefinitionSpec {
    return ConfigurationScenarioDefinitionSpecToJSONTyped(json, false);
}

export function ConfigurationScenarioDefinitionSpecToJSONTyped(value?: ConfigurationScenarioDefinitionSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'actors': ((value['actors'] as Array<any>).map(ConfigurationScenarioDefinitionActorToJSON)),
        'steps': ((value['steps'] as Array<any>).map(ConfigurationScenarioDefinitionStepToJSON)),
        'transitions': value['transitions'] == null ? undefined : ((value['transitions'] as Array<any>).map(ConfigurationScenarioDefinitionTransitionToJSON)),
        'assertions': value['assertions'] == null ? undefined : ((value['assertions'] as Array<any>).map(ConfigurationScenarioDefinitionAssertionToJSON)),
        'parameters': value['parameters'] == null ? undefined : ((value['parameters'] as Array<any>).map(ConfigurationScenarioDefinitionParameterToJSON)),
        'checkpoints': value['checkpoints'] == null ? undefined : ((value['checkpoints'] as Array<any>).map(ConfigurationScenarioDefinitionCheckpointToJSON)),
        'branches': value['branches'] == null ? undefined : ((value['branches'] as Array<any>).map(ConfigurationScenarioDefinitionBranchToJSON)),
    };
}
