import type { ConfigurationAsCodeApi, ConfigurationExportResponse, MappedOutputAckResponse } from "../src/index.js";

async function conditionalExport(api: ConfigurationAsCodeApi) {
  const value: ConfigurationExportResponse | undefined = await api.exportIntegrationConfiguration({ ifNoneMatch: '"snapshot"' });
  // @ts-expect-error A conditional export may have no body.
  const definitelyPresent: ConfigurationExportResponse = value;
  void definitelyPresent;
  const raw = await api.exportIntegrationConfigurationRaw({ ifNoneMatch: '"snapshot"' });
  const rawValue: ConfigurationExportResponse | undefined = await raw.value();
  return rawValue;
}

function acknowledgment(value: MappedOutputAckResponse) {
  // @ts-expect-error Identity belongs only to the nested acknowledgment.
  const oldId = value.id;
  void oldId;
  return value.acknowledgment.id;
}

void conditionalExport;
void acknowledgment;
