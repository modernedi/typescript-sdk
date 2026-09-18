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
 * @interface WorkspaceEndpoint
 */
export interface WorkspaceEndpoint {
    /**
     * The current tenant workspace.
     * @type {WorkspaceEndpointKindEnum}
     * @memberof WorkspaceEndpoint
     */
    kind: WorkspaceEndpointKindEnum;
}


/**
 * @export
 */
export const WorkspaceEndpointKindEnum = {
    Workspace: 'workspace',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type WorkspaceEndpointKindEnum = typeof WorkspaceEndpointKindEnum[keyof typeof WorkspaceEndpointKindEnum];


/**
 * Check if a given object implements the WorkspaceEndpoint interface.
 */
export function instanceOfWorkspaceEndpoint(value: object): value is WorkspaceEndpoint {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (value['kind'] !== 'workspace') return false;

    return true;
}

export function WorkspaceEndpointFromJSON(json: any): WorkspaceEndpoint {
    return WorkspaceEndpointFromJSONTyped(json, false);
}

export function WorkspaceEndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceEndpoint {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
    };
}

export function WorkspaceEndpointToJSON(json: any): WorkspaceEndpoint {
    return WorkspaceEndpointToJSONTyped(json, false);
}

export function WorkspaceEndpointToJSONTyped(value?: WorkspaceEndpoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
    };
}
