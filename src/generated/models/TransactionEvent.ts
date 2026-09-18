/* tslint:disable */
/* eslint-disable */
/**
 * ModernEDI TypeScript SDK, generated from the ModernEDI Integration API
 * specification version 1.35.0 with OpenAPI Generator 7.24.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 * Do not edit this generated file manually.
 */

import type { TransactionFunctionalAcknowledgmentEvent } from './TransactionFunctionalAcknowledgmentEvent.js';
import {
    instanceOfTransactionFunctionalAcknowledgmentEvent,
    TransactionFunctionalAcknowledgmentEventFromJSON,
    TransactionFunctionalAcknowledgmentEventFromJSONTyped,
    TransactionFunctionalAcknowledgmentEventToJSON,
} from './TransactionFunctionalAcknowledgmentEvent.js';
import type { TransactionFunctionalAcknowledgmentMdnEvent } from './TransactionFunctionalAcknowledgmentMdnEvent.js';
import {
    instanceOfTransactionFunctionalAcknowledgmentMdnEvent,
    TransactionFunctionalAcknowledgmentMdnEventFromJSON,
    TransactionFunctionalAcknowledgmentMdnEventFromJSONTyped,
    TransactionFunctionalAcknowledgmentMdnEventToJSON,
} from './TransactionFunctionalAcknowledgmentMdnEvent.js';
import type { TransactionImplementationAcknowledgmentEvent } from './TransactionImplementationAcknowledgmentEvent.js';
import {
    instanceOfTransactionImplementationAcknowledgmentEvent,
    TransactionImplementationAcknowledgmentEventFromJSON,
    TransactionImplementationAcknowledgmentEventFromJSONTyped,
    TransactionImplementationAcknowledgmentEventToJSON,
} from './TransactionImplementationAcknowledgmentEvent.js';
import type { TransactionImplementationAcknowledgmentMdnEvent } from './TransactionImplementationAcknowledgmentMdnEvent.js';
import {
    instanceOfTransactionImplementationAcknowledgmentMdnEvent,
    TransactionImplementationAcknowledgmentMdnEventFromJSON,
    TransactionImplementationAcknowledgmentMdnEventFromJSONTyped,
    TransactionImplementationAcknowledgmentMdnEventToJSON,
} from './TransactionImplementationAcknowledgmentMdnEvent.js';
import type { TransactionLifecycleEvent } from './TransactionLifecycleEvent.js';
import {
    instanceOfTransactionLifecycleEvent,
    TransactionLifecycleEventFromJSON,
    TransactionLifecycleEventFromJSONTyped,
    TransactionLifecycleEventToJSON,
} from './TransactionLifecycleEvent.js';
import type { TransactionMappedOutputEvent } from './TransactionMappedOutputEvent.js';
import {
    instanceOfTransactionMappedOutputEvent,
    TransactionMappedOutputEventFromJSON,
    TransactionMappedOutputEventFromJSONTyped,
    TransactionMappedOutputEventToJSON,
} from './TransactionMappedOutputEvent.js';
import type { TransactionMappingEvent } from './TransactionMappingEvent.js';
import {
    instanceOfTransactionMappingEvent,
    TransactionMappingEventFromJSON,
    TransactionMappingEventFromJSONTyped,
    TransactionMappingEventToJSON,
} from './TransactionMappingEvent.js';
import type { TransactionMdnEvent } from './TransactionMdnEvent.js';
import {
    instanceOfTransactionMdnEvent,
    TransactionMdnEventFromJSON,
    TransactionMdnEventFromJSONTyped,
    TransactionMdnEventToJSON,
} from './TransactionMdnEvent.js';
import type { TransactionTechnicalAcknowledgmentEvent } from './TransactionTechnicalAcknowledgmentEvent.js';
import {
    instanceOfTransactionTechnicalAcknowledgmentEvent,
    TransactionTechnicalAcknowledgmentEventFromJSON,
    TransactionTechnicalAcknowledgmentEventFromJSONTyped,
    TransactionTechnicalAcknowledgmentEventToJSON,
} from './TransactionTechnicalAcknowledgmentEvent.js';

/**
 * @type TransactionEvent
 * One derived operator-timeline entry. `type` is a discriminator for the stable `details` payload; clients do not need to infer fields from `label` or reverse-engineer examples.
 *
 * @export
 */
export type TransactionEvent = { type: 'functional_ack.mdn_received' } & TransactionFunctionalAcknowledgmentMdnEvent | { type: 'functional_ack.mdn_sent' } & TransactionFunctionalAcknowledgmentMdnEvent | { type: 'functional_ack.received' } & TransactionFunctionalAcknowledgmentEvent | { type: 'functional_ack.sent' } & TransactionFunctionalAcknowledgmentEvent | { type: 'implementation_ack.mdn_received' } & TransactionImplementationAcknowledgmentMdnEvent | { type: 'implementation_ack.mdn_sent' } & TransactionImplementationAcknowledgmentMdnEvent | { type: 'implementation_ack.received' } & TransactionImplementationAcknowledgmentEvent | { type: 'implementation_ack.sent' } & TransactionImplementationAcknowledgmentEvent | { type: 'mapped_output.acknowledged' } & TransactionMappedOutputEvent | { type: 'mapped_output.attention_required' } & TransactionMappedOutputEvent | { type: 'mapped_output.available' } & TransactionMappedOutputEvent | { type: 'mapped_output.created' } & TransactionMappedOutputEvent | { type: 'mapped_output.delivered' } & TransactionMappedOutputEvent | { type: 'mapped_output.redelivered' } & TransactionMappedOutputEvent | { type: 'mapping.failed' } & TransactionMappingEvent | { type: 'mapping.recovered' } & TransactionMappingEvent | { type: 'mapping.succeeded' } & TransactionMappingEvent | { type: 'mdn.overdue' } & TransactionMdnEvent | { type: 'mdn.pending' } & TransactionMdnEvent | { type: 'mdn.received' } & TransactionMdnEvent | { type: 'mdn.sent' } & TransactionMdnEvent | { type: 'reply.sent' } & TransactionLifecycleEvent | { type: 'technical_ack.received' } & TransactionTechnicalAcknowledgmentEvent | { type: 'technical_ack.sent' } & TransactionTechnicalAcknowledgmentEvent | { type: 'transaction.received' } & TransactionLifecycleEvent | { type: 'transaction.sent' } & TransactionLifecycleEvent;

export function TransactionEventFromJSON(json: any): TransactionEvent {
    return TransactionEventFromJSONTyped(json, false);
}

export function TransactionEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionEvent {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'functional_ack.mdn_received':
            return Object.assign({}, TransactionFunctionalAcknowledgmentMdnEventFromJSONTyped(json, true), { type: 'functional_ack.mdn_received' } as const);
        case 'functional_ack.mdn_sent':
            return Object.assign({}, TransactionFunctionalAcknowledgmentMdnEventFromJSONTyped(json, true), { type: 'functional_ack.mdn_sent' } as const);
        case 'functional_ack.received':
            return Object.assign({}, TransactionFunctionalAcknowledgmentEventFromJSONTyped(json, true), { type: 'functional_ack.received' } as const);
        case 'functional_ack.sent':
            return Object.assign({}, TransactionFunctionalAcknowledgmentEventFromJSONTyped(json, true), { type: 'functional_ack.sent' } as const);
        case 'implementation_ack.mdn_received':
            return Object.assign({}, TransactionImplementationAcknowledgmentMdnEventFromJSONTyped(json, true), { type: 'implementation_ack.mdn_received' } as const);
        case 'implementation_ack.mdn_sent':
            return Object.assign({}, TransactionImplementationAcknowledgmentMdnEventFromJSONTyped(json, true), { type: 'implementation_ack.mdn_sent' } as const);
        case 'implementation_ack.received':
            return Object.assign({}, TransactionImplementationAcknowledgmentEventFromJSONTyped(json, true), { type: 'implementation_ack.received' } as const);
        case 'implementation_ack.sent':
            return Object.assign({}, TransactionImplementationAcknowledgmentEventFromJSONTyped(json, true), { type: 'implementation_ack.sent' } as const);
        case 'mapped_output.acknowledged':
            return Object.assign({}, TransactionMappedOutputEventFromJSONTyped(json, true), { type: 'mapped_output.acknowledged' } as const);
        case 'mapped_output.attention_required':
            return Object.assign({}, TransactionMappedOutputEventFromJSONTyped(json, true), { type: 'mapped_output.attention_required' } as const);
        case 'mapped_output.available':
            return Object.assign({}, TransactionMappedOutputEventFromJSONTyped(json, true), { type: 'mapped_output.available' } as const);
        case 'mapped_output.created':
            return Object.assign({}, TransactionMappedOutputEventFromJSONTyped(json, true), { type: 'mapped_output.created' } as const);
        case 'mapped_output.delivered':
            return Object.assign({}, TransactionMappedOutputEventFromJSONTyped(json, true), { type: 'mapped_output.delivered' } as const);
        case 'mapped_output.redelivered':
            return Object.assign({}, TransactionMappedOutputEventFromJSONTyped(json, true), { type: 'mapped_output.redelivered' } as const);
        case 'mapping.failed':
            return Object.assign({}, TransactionMappingEventFromJSONTyped(json, true), { type: 'mapping.failed' } as const);
        case 'mapping.recovered':
            return Object.assign({}, TransactionMappingEventFromJSONTyped(json, true), { type: 'mapping.recovered' } as const);
        case 'mapping.succeeded':
            return Object.assign({}, TransactionMappingEventFromJSONTyped(json, true), { type: 'mapping.succeeded' } as const);
        case 'mdn.overdue':
            return Object.assign({}, TransactionMdnEventFromJSONTyped(json, true), { type: 'mdn.overdue' } as const);
        case 'mdn.pending':
            return Object.assign({}, TransactionMdnEventFromJSONTyped(json, true), { type: 'mdn.pending' } as const);
        case 'mdn.received':
            return Object.assign({}, TransactionMdnEventFromJSONTyped(json, true), { type: 'mdn.received' } as const);
        case 'mdn.sent':
            return Object.assign({}, TransactionMdnEventFromJSONTyped(json, true), { type: 'mdn.sent' } as const);
        case 'reply.sent':
            return Object.assign({}, TransactionLifecycleEventFromJSONTyped(json, true), { type: 'reply.sent' } as const);
        case 'technical_ack.received':
            return Object.assign({}, TransactionTechnicalAcknowledgmentEventFromJSONTyped(json, true), { type: 'technical_ack.received' } as const);
        case 'technical_ack.sent':
            return Object.assign({}, TransactionTechnicalAcknowledgmentEventFromJSONTyped(json, true), { type: 'technical_ack.sent' } as const);
        case 'transaction.received':
            return Object.assign({}, TransactionLifecycleEventFromJSONTyped(json, true), { type: 'transaction.received' } as const);
        case 'transaction.sent':
            return Object.assign({}, TransactionLifecycleEventFromJSONTyped(json, true), { type: 'transaction.sent' } as const);
        default:
            return json;
    }
}

export function TransactionEventToJSON(json: any): any {
    return TransactionEventToJSONTyped(json, false);
}

export function TransactionEventToJSONTyped(value?: TransactionEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'functional_ack.mdn_received':
            return Object.assign({}, TransactionFunctionalAcknowledgmentMdnEventToJSON(value), { 'type': 'functional_ack.mdn_received' } as const);
        case 'functional_ack.mdn_sent':
            return Object.assign({}, TransactionFunctionalAcknowledgmentMdnEventToJSON(value), { 'type': 'functional_ack.mdn_sent' } as const);
        case 'functional_ack.received':
            return Object.assign({}, TransactionFunctionalAcknowledgmentEventToJSON(value), { 'type': 'functional_ack.received' } as const);
        case 'functional_ack.sent':
            return Object.assign({}, TransactionFunctionalAcknowledgmentEventToJSON(value), { 'type': 'functional_ack.sent' } as const);
        case 'implementation_ack.mdn_received':
            return Object.assign({}, TransactionImplementationAcknowledgmentMdnEventToJSON(value), { 'type': 'implementation_ack.mdn_received' } as const);
        case 'implementation_ack.mdn_sent':
            return Object.assign({}, TransactionImplementationAcknowledgmentMdnEventToJSON(value), { 'type': 'implementation_ack.mdn_sent' } as const);
        case 'implementation_ack.received':
            return Object.assign({}, TransactionImplementationAcknowledgmentEventToJSON(value), { 'type': 'implementation_ack.received' } as const);
        case 'implementation_ack.sent':
            return Object.assign({}, TransactionImplementationAcknowledgmentEventToJSON(value), { 'type': 'implementation_ack.sent' } as const);
        case 'mapped_output.acknowledged':
            return Object.assign({}, TransactionMappedOutputEventToJSON(value), { 'type': 'mapped_output.acknowledged' } as const);
        case 'mapped_output.attention_required':
            return Object.assign({}, TransactionMappedOutputEventToJSON(value), { 'type': 'mapped_output.attention_required' } as const);
        case 'mapped_output.available':
            return Object.assign({}, TransactionMappedOutputEventToJSON(value), { 'type': 'mapped_output.available' } as const);
        case 'mapped_output.created':
            return Object.assign({}, TransactionMappedOutputEventToJSON(value), { 'type': 'mapped_output.created' } as const);
        case 'mapped_output.delivered':
            return Object.assign({}, TransactionMappedOutputEventToJSON(value), { 'type': 'mapped_output.delivered' } as const);
        case 'mapped_output.redelivered':
            return Object.assign({}, TransactionMappedOutputEventToJSON(value), { 'type': 'mapped_output.redelivered' } as const);
        case 'mapping.failed':
            return Object.assign({}, TransactionMappingEventToJSON(value), { 'type': 'mapping.failed' } as const);
        case 'mapping.recovered':
            return Object.assign({}, TransactionMappingEventToJSON(value), { 'type': 'mapping.recovered' } as const);
        case 'mapping.succeeded':
            return Object.assign({}, TransactionMappingEventToJSON(value), { 'type': 'mapping.succeeded' } as const);
        case 'mdn.overdue':
            return Object.assign({}, TransactionMdnEventToJSON(value), { 'type': 'mdn.overdue' } as const);
        case 'mdn.pending':
            return Object.assign({}, TransactionMdnEventToJSON(value), { 'type': 'mdn.pending' } as const);
        case 'mdn.received':
            return Object.assign({}, TransactionMdnEventToJSON(value), { 'type': 'mdn.received' } as const);
        case 'mdn.sent':
            return Object.assign({}, TransactionMdnEventToJSON(value), { 'type': 'mdn.sent' } as const);
        case 'reply.sent':
            return Object.assign({}, TransactionLifecycleEventToJSON(value), { 'type': 'reply.sent' } as const);
        case 'technical_ack.received':
            return Object.assign({}, TransactionTechnicalAcknowledgmentEventToJSON(value), { 'type': 'technical_ack.received' } as const);
        case 'technical_ack.sent':
            return Object.assign({}, TransactionTechnicalAcknowledgmentEventToJSON(value), { 'type': 'technical_ack.sent' } as const);
        case 'transaction.received':
            return Object.assign({}, TransactionLifecycleEventToJSON(value), { 'type': 'transaction.received' } as const);
        case 'transaction.sent':
            return Object.assign({}, TransactionLifecycleEventToJSON(value), { 'type': 'transaction.sent' } as const);
        default:
            return value;
    }
}
