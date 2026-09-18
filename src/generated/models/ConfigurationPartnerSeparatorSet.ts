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
 * @interface ConfigurationPartnerSeparatorSet
 */
export interface ConfigurationPartnerSeparatorSet {
    /**
     *
     * @type {string}
     * @memberof ConfigurationPartnerSeparatorSet
     */
    elementSeparator: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationPartnerSeparatorSet
     */
    subElementSeparator: string;
    /**
     *
     * @type {string}
     * @memberof ConfigurationPartnerSeparatorSet
     */
    segmentTerminator: string;
    /**
     * Repetition separator, or `null` when the selected X12 version does not use one.
     * @type {string}
     * @memberof ConfigurationPartnerSeparatorSet
     */
    repetitionSeparator: string | null;
}

/**
 * Check if a given object implements the ConfigurationPartnerSeparatorSet interface.
 */
export function instanceOfConfigurationPartnerSeparatorSet(value: object): value is ConfigurationPartnerSeparatorSet {
    if (!('elementSeparator' in value) || value['elementSeparator'] === undefined) return false;
    if (!('subElementSeparator' in value) || value['subElementSeparator'] === undefined) return false;
    if (!('segmentTerminator' in value) || value['segmentTerminator'] === undefined) return false;
    if (!('repetitionSeparator' in value) || value['repetitionSeparator'] === undefined) return false;
    return true;
}

export function ConfigurationPartnerSeparatorSetFromJSON(json: any): ConfigurationPartnerSeparatorSet {
    return ConfigurationPartnerSeparatorSetFromJSONTyped(json, false);
}

export function ConfigurationPartnerSeparatorSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationPartnerSeparatorSet {
    if (json == null) {
        return json;
    }
    return {

        'elementSeparator': json['elementSeparator'],
        'subElementSeparator': json['subElementSeparator'],
        'segmentTerminator': json['segmentTerminator'],
        'repetitionSeparator': json['repetitionSeparator'],
    };
}

export function ConfigurationPartnerSeparatorSetToJSON(json: any): ConfigurationPartnerSeparatorSet {
    return ConfigurationPartnerSeparatorSetToJSONTyped(json, false);
}

export function ConfigurationPartnerSeparatorSetToJSONTyped(value?: ConfigurationPartnerSeparatorSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'elementSeparator': value['elementSeparator'],
        'subElementSeparator': value['subElementSeparator'],
        'segmentTerminator': value['segmentTerminator'],
        'repetitionSeparator': value['repetitionSeparator'],
    };
}
