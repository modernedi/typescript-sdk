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
import type { As2ProfileCertificates } from './As2ProfileCertificates.js';
import {
    As2ProfileCertificatesFromJSON,
    As2ProfileCertificatesFromJSONTyped,
    As2ProfileCertificatesToJSON,
    As2ProfileCertificatesToJSONTyped,
} from './As2ProfileCertificates.js';
import type { As2NetworkProfile } from './As2NetworkProfile.js';
import {
    As2NetworkProfileFromJSON,
    As2NetworkProfileFromJSONTyped,
    As2NetworkProfileToJSON,
    As2NetworkProfileToJSONTyped,
} from './As2NetworkProfile.js';
import type { As2ProfileEnvironments } from './As2ProfileEnvironments.js';
import {
    As2ProfileEnvironmentsFromJSON,
    As2ProfileEnvironmentsFromJSONTyped,
    As2ProfileEnvironmentsToJSON,
    As2ProfileEnvironmentsToJSONTyped,
} from './As2ProfileEnvironments.js';

/**
 * ModernEDI-hosted AS2 identity and network information for production and test traffic.
 * @export
 * @interface As2Profile
 */
export interface As2Profile {
    /**
     * Provisioned tenant AS2 hostname, or `null` while the tenant runtime has not published one.
     * @type {string}
     * @memberof As2Profile
     */
    domainName: string | null;
    /**
     *
     * @type {As2ProfileEnvironments}
     * @memberof As2Profile
     */
    environments: As2ProfileEnvironments;
    /**
     *
     * @type {As2NetworkProfile}
     * @memberof As2Profile
     */
    network: As2NetworkProfile;
    /**
     *
     * @type {As2ProfileCertificates}
     * @memberof As2Profile
     */
    certificates: As2ProfileCertificates;
}

/**
 * Check if a given object implements the As2Profile interface.
 */
export function instanceOfAs2Profile(value: object): value is As2Profile {
    if (!('domainName' in value) || value['domainName'] === undefined) return false;
    if (!('environments' in value) || value['environments'] === undefined) return false;
    if (!('network' in value) || value['network'] === undefined) return false;
    if (!('certificates' in value) || value['certificates'] === undefined) return false;
    return true;
}

export function As2ProfileFromJSON(json: any): As2Profile {
    return As2ProfileFromJSONTyped(json, false);
}

export function As2ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): As2Profile {
    if (json == null) {
        return json;
    }
    return {

        'domainName': json['domainName'],
        'environments': As2ProfileEnvironmentsFromJSON(json['environments']),
        'network': As2NetworkProfileFromJSON(json['network']),
        'certificates': As2ProfileCertificatesFromJSON(json['certificates']),
    };
}

export function As2ProfileToJSON(json: any): As2Profile {
    return As2ProfileToJSONTyped(json, false);
}

export function As2ProfileToJSONTyped(value?: As2Profile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'domainName': value['domainName'],
        'environments': As2ProfileEnvironmentsToJSON(value['environments']),
        'network': As2NetworkProfileToJSON(value['network']),
        'certificates': As2ProfileCertificatesToJSON(value['certificates']),
    };
}
