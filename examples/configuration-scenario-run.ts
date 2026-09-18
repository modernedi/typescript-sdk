import { setTimeout as delay } from 'node:timers/promises';
import { ModernEdiApiError, ModernEdiClient, type StartScenarioRunRequest } from '../src/index.js';

/**
 * Call after applyIntegrationConfiguration, using that response's operation.operationId.
 * This function only reads: it never applies configuration, starts a run, or sends EDI.
 */
export async function prepareConversationAfterApply(
  client: ModernEdiClient,
  operationId: string,
  bindingId: string,
  parameters: StartScenarioRunRequest['parameters'] = {},
): Promise<StartScenarioRunRequest> {
  // Bound both polling and individual HTTP calls. A timeout does not undo the existing apply.
  const signal = AbortSignal.timeout(10 * 60 * 1_000);
  for (let attempt = 0; attempt < 40; attempt++) {
    try {
      const selected = await client.configurationAsCode.getConfigurationScenarioRunSelection(
        { operationId, bindingId }, { signal },
      );
      // Persist this exact body and a NEW run idempotency key before calling startConversation
      // from scenario-runs.ts. A lost-response retry must reuse both, with the same API key.
      return { ...selected.selection, parameters };
    } catch (error) {
      if (!(error instanceof ModernEdiApiError) || error.status !== 409
        || error.code !== 'configuration_apply_pending' || !error.retryable) throw error;
      // This endpoint's Retry-After contract is a number of seconds. Do not retry snapshot drift.
      const seconds = Number(error.retryAfter ?? '15');
      await delay(Number.isFinite(seconds) && seconds >= 0 ? seconds * 1_000 : 15_000,
        undefined, { signal });
    }
  }
  throw new Error(`Apply ${operationId} is still publishing. Resume checking this operation; do not submit another apply.`);
}
