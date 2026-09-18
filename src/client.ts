import {
  AccountApi,
  AS2ConnectionsApi,
  ConfigurationAsCodeApi,
  IntegrationEventsApi,
  MappedOutputQueueApi,
  MappingRuntimeApi,
  MappingsApi,
  OutboundAS2Api,
  PartnersApi,
  ScenarioRunsApi,
  TransactionViewerApi,
  X12ToolsApi,
} from "./generated/apis/index.js";
import {
  Configuration,
  type ConfigurationParameters,
  type FetchAPI,
  type Middleware,
} from "./generated/runtime.js";
import { createModernEdiErrorMiddleware } from "./errors.js";
import { createRetryingFetch, type ModernEdiRetryOptions } from "./retry.js";

export const MODERNEDI_API_BASE_URL = "https://api.modernedi.com";

type ApiKeyValue = NonNullable<ConfigurationParameters["apiKey"]>;
type AccessTokenValue = NonNullable<ConfigurationParameters["accessToken"]>;

type ModernEdiAuthentication =
  | {
      apiKey: ApiKeyValue;
      bearerToken?: never;
    }
  | {
      apiKey?: never;
      bearerToken: AccessTokenValue;
    };

export type ModernEdiClientOptions = ModernEdiAuthentication & {
  baseUrl?: string;
  fetch?: FetchAPI;
  headers?: Record<string, string>;
  middleware?: Middleware[];
  /**
   * Opt-in retries. Safe reads, read-only configuration plans, and idempotent transaction
   * watch/unwatch operations may be retried; other mutations require an `Idempotency-Key`.
   */
  retry?: ModernEdiRetryOptions;
};

function defaultFetch(): FetchAPI {
  if (typeof globalThis.fetch !== "function") {
    throw new Error("ModernEDI SDK requires a Fetch API implementation");
  }
  return globalThis.fetch.bind(globalThis);
}

export function createModernEdiConfiguration(options: ModernEdiClientOptions): Configuration {
  const hasApiKey = options.apiKey !== undefined;
  const hasBearerToken = options.bearerToken !== undefined;
  if (hasApiKey === hasBearerToken) {
    throw new TypeError("ModernEDI client requires exactly one of apiKey or bearerToken");
  }

  const fetchApi = options.fetch ?? defaultFetch();
  const configuredFetch =
    options.retry === undefined ? fetchApi : createRetryingFetch(fetchApi, options.retry);

  return new Configuration({
    basePath: (options.baseUrl ?? MODERNEDI_API_BASE_URL).replace(/\/+$/, ""),
    fetchApi: configuredFetch,
    ...(options.apiKey === undefined ? {} : { apiKey: options.apiKey }),
    ...(options.bearerToken === undefined ? {} : { accessToken: options.bearerToken }),
    ...(options.headers === undefined ? {} : { headers: { ...options.headers } }),
    middleware: [...(options.middleware ?? []), createModernEdiErrorMiddleware()],
  });
}

/**
 * Entry point for every generated ModernEDI Integration API group.
 *
 * Keep Integration API credentials on a trusted server or BFF; do not embed them in browser,
 * desktop, or mobile distributions.
 */
export class ModernEdiClient {
  readonly configuration: Configuration;
  readonly account: AccountApi;
  readonly as2Connections: AS2ConnectionsApi;
  readonly configurationAsCode: ConfigurationAsCodeApi;
  readonly integrationEvents: IntegrationEventsApi;
  readonly mappedOutputs: MappedOutputQueueApi;
  readonly mappingRuntime: MappingRuntimeApi;
  readonly mappings: MappingsApi;
  readonly outboundAs2: OutboundAS2Api;
  readonly partners: PartnersApi;
  readonly scenarioRuns: ScenarioRunsApi;
  readonly transactions: TransactionViewerApi;
  readonly x12: X12ToolsApi;

  constructor(options: ModernEdiClientOptions) {
    this.configuration = createModernEdiConfiguration(options);
    this.account = new AccountApi(this.configuration);
    this.as2Connections = new AS2ConnectionsApi(this.configuration);
    this.configurationAsCode = new ConfigurationAsCodeApi(this.configuration);
    this.integrationEvents = new IntegrationEventsApi(this.configuration);
    this.mappedOutputs = new MappedOutputQueueApi(this.configuration);
    this.mappingRuntime = new MappingRuntimeApi(this.configuration);
    this.mappings = new MappingsApi(this.configuration);
    this.outboundAs2 = new OutboundAS2Api(this.configuration);
    this.partners = new PartnersApi(this.configuration);
    this.scenarioRuns = new ScenarioRunsApi(this.configuration);
    this.transactions = new TransactionViewerApi(this.configuration);
    this.x12 = new X12ToolsApi(this.configuration);
  }
}
