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
import type { X12InterchangeSummary } from './X12InterchangeSummary.js';
import {
    X12InterchangeSummaryFromJSON,
    X12InterchangeSummaryFromJSONTyped,
    X12InterchangeSummaryToJSON,
    X12InterchangeSummaryToJSONTyped,
} from './X12InterchangeSummary.js';
import type { X12FunctionalGroupValidationError } from './X12FunctionalGroupValidationError.js';
import {
    X12FunctionalGroupValidationErrorFromJSON,
    X12FunctionalGroupValidationErrorFromJSONTyped,
    X12FunctionalGroupValidationErrorToJSON,
    X12FunctionalGroupValidationErrorToJSONTyped,
} from './X12FunctionalGroupValidationError.js';
import type { X12SegmentValidationError } from './X12SegmentValidationError.js';
import {
    X12SegmentValidationErrorFromJSON,
    X12SegmentValidationErrorFromJSONTyped,
    X12SegmentValidationErrorToJSON,
    X12SegmentValidationErrorToJSONTyped,
} from './X12SegmentValidationError.js';
import type { X12ElementValidationError } from './X12ElementValidationError.js';
import {
    X12ElementValidationErrorFromJSON,
    X12ElementValidationErrorFromJSONTyped,
    X12ElementValidationErrorToJSON,
    X12ElementValidationErrorToJSONTyped,
} from './X12ElementValidationError.js';
import type { X12TransactionValidationError } from './X12TransactionValidationError.js';
import {
    X12TransactionValidationErrorFromJSON,
    X12TransactionValidationErrorFromJSONTyped,
    X12TransactionValidationErrorToJSON,
    X12TransactionValidationErrorToJSONTyped,
} from './X12TransactionValidationError.js';

/**
 * X12 well-formedness and validation diagnostics produced from the submitted interchange.
 * @export
 * @interface X12ValidationResult
 */
export interface X12ValidationResult {
    /**
     * True only when parsing succeeded and no error- or failure-level X12 diagnostics were found.
     * @type {boolean}
     * @memberof X12ValidationResult
     */
    valid: boolean;
    /**
     * True when ModernEDI could parse an interchange envelope; a well-formed document may still be invalid.
     * @type {boolean}
     * @memberof X12ValidationResult
     */
    wellFormed: boolean;
    /**
     * Human-readable parser or validation errors that prevent the submitted interchange from being considered valid.
     * @type {Array<string>}
     * @memberof X12ValidationResult
     */
    errors: Array<string>;
    /**
     * Human-readable non-fatal findings that merit review but do not by themselves make `valid` false.
     * @type {Array<string>}
     * @memberof X12ValidationResult
     */
    warnings: Array<string>;
    /**
     * Human-readable severe validation failures reported separately by the X12 validator.
     * @type {Array<string>}
     * @memberof X12ValidationResult
     */
    failures: Array<string>;
    /**
     * Interchange-level error disposition text, or `null` when the validator did not report one.
     * @type {string}
     * @memberof X12ValidationResult
     */
    dispositionError: string | null;
    /**
     * Interchange-level warning disposition text, or `null` when the validator did not report one.
     * @type {string}
     * @memberof X12ValidationResult
     */
    dispositionWarning: string | null;
    /**
     * Interchange-level failure disposition text, or `null` when the validator did not report one.
     * @type {string}
     * @memberof X12ValidationResult
     */
    dispositionFailure: string | null;
    /**
     * Structured findings attached to a GS/GE functional group, with zero-based group indexes for correlation.
     * @type {Array<X12FunctionalGroupValidationError>}
     * @memberof X12ValidationResult
     */
    functionalGroupErrors: Array<X12FunctionalGroupValidationError>;
    /**
     * Structured findings attached to an ST/SE transaction set, with zero-based group and transaction indexes.
     * @type {Array<X12TransactionValidationError>}
     * @memberof X12ValidationResult
     */
    transactionErrors: Array<X12TransactionValidationError>;
    /**
     * Structured segment-level X12 syntax findings, including the one-based position within the transaction.
     * @type {Array<X12SegmentValidationError>}
     * @memberof X12ValidationResult
     */
    segmentErrors: Array<X12SegmentValidationError>;
    /**
     * Structured data-element findings identifying the segment, element, optional composite component, and rejected value.
     * @type {Array<X12ElementValidationError>}
     * @memberof X12ValidationResult
     */
    elementErrors: Array<X12ElementValidationError>;
    /**
     * Parsed interchange summary with separators, groups, transactions, and segment previews; `null` when parsing did not produce an interchange.
     * @type {X12InterchangeSummary}
     * @memberof X12ValidationResult
     */
    interchange: X12InterchangeSummary | null;
}

/**
 * Check if a given object implements the X12ValidationResult interface.
 */
export function instanceOfX12ValidationResult(value: object): value is X12ValidationResult {
    if (!('valid' in value) || value['valid'] === undefined) return false;
    if (!('wellFormed' in value) || value['wellFormed'] === undefined) return false;
    if (!('errors' in value) || value['errors'] === undefined) return false;
    if (!('warnings' in value) || value['warnings'] === undefined) return false;
    if (!('failures' in value) || value['failures'] === undefined) return false;
    if (!('dispositionError' in value) || value['dispositionError'] === undefined) return false;
    if (!('dispositionWarning' in value) || value['dispositionWarning'] === undefined) return false;
    if (!('dispositionFailure' in value) || value['dispositionFailure'] === undefined) return false;
    if (!('functionalGroupErrors' in value) || value['functionalGroupErrors'] === undefined) return false;
    if (!('transactionErrors' in value) || value['transactionErrors'] === undefined) return false;
    if (!('segmentErrors' in value) || value['segmentErrors'] === undefined) return false;
    if (!('elementErrors' in value) || value['elementErrors'] === undefined) return false;
    if (!('interchange' in value) || value['interchange'] === undefined) return false;
    return true;
}

export function X12ValidationResultFromJSON(json: any): X12ValidationResult {
    return X12ValidationResultFromJSONTyped(json, false);
}

export function X12ValidationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): X12ValidationResult {
    if (json == null) {
        return json;
    }
    return {

        'valid': json['valid'],
        'wellFormed': json['wellFormed'],
        'errors': json['errors'],
        'warnings': json['warnings'],
        'failures': json['failures'],
        'dispositionError': json['dispositionError'],
        'dispositionWarning': json['dispositionWarning'],
        'dispositionFailure': json['dispositionFailure'],
        'functionalGroupErrors': ((json['functionalGroupErrors'] as Array<any>).map(X12FunctionalGroupValidationErrorFromJSON)),
        'transactionErrors': ((json['transactionErrors'] as Array<any>).map(X12TransactionValidationErrorFromJSON)),
        'segmentErrors': ((json['segmentErrors'] as Array<any>).map(X12SegmentValidationErrorFromJSON)),
        'elementErrors': ((json['elementErrors'] as Array<any>).map(X12ElementValidationErrorFromJSON)),
        'interchange': X12InterchangeSummaryFromJSON(json['interchange']),
    };
}

export function X12ValidationResultToJSON(json: any): X12ValidationResult {
    return X12ValidationResultToJSONTyped(json, false);
}

export function X12ValidationResultToJSONTyped(value?: X12ValidationResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'valid': value['valid'],
        'wellFormed': value['wellFormed'],
        'errors': value['errors'],
        'warnings': value['warnings'],
        'failures': value['failures'],
        'dispositionError': value['dispositionError'],
        'dispositionWarning': value['dispositionWarning'],
        'dispositionFailure': value['dispositionFailure'],
        'functionalGroupErrors': ((value['functionalGroupErrors'] as Array<any>).map(X12FunctionalGroupValidationErrorToJSON)),
        'transactionErrors': ((value['transactionErrors'] as Array<any>).map(X12TransactionValidationErrorToJSON)),
        'segmentErrors': ((value['segmentErrors'] as Array<any>).map(X12SegmentValidationErrorToJSON)),
        'elementErrors': ((value['elementErrors'] as Array<any>).map(X12ElementValidationErrorToJSON)),
        'interchange': X12InterchangeSummaryToJSON(value['interchange']),
    };
}
