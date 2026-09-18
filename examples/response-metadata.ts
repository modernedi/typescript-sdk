import {
  ModernEdiClient,
  getModernEdiResponseMetadata,
} from "@modernedi/sdk";

const apiKey = process.env.MODERNEDI_API_KEY;
if (!apiKey) {
  throw new Error("Set MODERNEDI_API_KEY before running this example");
}

const modernEdi = new ModernEdiClient({ apiKey });

export async function getPartnerWithMetadata(partnerId: number) {
  const response = await modernEdi.partners.getIntegrationPartnerRaw({ partnerId });
  const partner = await response.value();
  const metadata = getModernEdiResponseMetadata(response.raw);

  return { partner, metadata };
}
