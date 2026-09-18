/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */


/**
 * Desired change to one stable portable resource identity.
 * @export
 */
export const ConfigurationPlanAction = {
    Create: 'CREATE',
    Update: 'UPDATE',
    Delete: 'DELETE',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type ConfigurationPlanAction = typeof ConfigurationPlanAction[keyof typeof ConfigurationPlanAction];


export function instanceOfConfigurationPlanAction(value: any): boolean {
    for (const key in ConfigurationPlanAction) {
        if (Object.prototype.hasOwnProperty.call(ConfigurationPlanAction, key)) {
            if (ConfigurationPlanAction[key as keyof typeof ConfigurationPlanAction] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ConfigurationPlanActionFromJSON(json: any): ConfigurationPlanAction {
    return ConfigurationPlanActionFromJSONTyped(json, false);
}

export function ConfigurationPlanActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPlanAction {
    return json as ConfigurationPlanAction;
}

export function ConfigurationPlanActionToJSON(value?: ConfigurationPlanAction | null): any {
    return value as any;
}

export function ConfigurationPlanActionToJSONTyped(value: any, ignoreDiscriminator: boolean): ConfigurationPlanAction {
    return value as ConfigurationPlanAction;
}
