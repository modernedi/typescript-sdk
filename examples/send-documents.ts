import { ModernEdiClient } from "@modernedi/sdk";

const apiKey = process.env.MODERNEDI_API_KEY;
if (!apiKey) {
  throw new Error("Set MODERNEDI_API_KEY before running this example");
}

const modernEdi = new ModernEdiClient({ apiKey });

export async function sendMappedInvoice(): Promise<void> {
  await modernEdi.outboundAs2.sendAs2Message({
    partnerId: 17,
    x12Version: "005010",
    functionalGroupType: "IN",
    transactionGroupType: 810,
    idempotencyKey: crypto.randomUUID(),
    contentType: "application/json",
    body: {
      invoiceNumber: "INV-1001",
      total: 240.0,
    },
  });
}

export async function sendGeneratedInvoiceX12(x12: string): Promise<void> {
  await modernEdi.outboundAs2.sendGeneratedX12Message({
    partnerId: 17,
    x12Version: "005010",
    functionalGroupType: "IN",
    transactionGroupType: 810,
    idempotencyKey: crypto.randomUUID(),
    contentType: "application/edi-x12",
    body: x12,
  });
}
