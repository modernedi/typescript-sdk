import {
  FilterableFunctionalAcknowledgmentStatus,
  FilterableImplementationAcknowledgmentStatus,
  FilterableTransactionMappingStatus,
  FilterableTransactionMdnStatus,
  FunctionalAcknowledgmentStatus,
  ImplementationAcknowledgmentStatus,
  TransactionMappingStatusSummaryStatusEnum,
  TransactionMdnStatus,
  type ListIntegrationTransactionsRequest,
} from "../src/index.js";

type ListFilters = Pick<
  ListIntegrationTransactionsRequest,
  "mappingStatus" | "functionalAckStatus" | "implementationAckStatus" | "mdnStatus"
>;

const validFilters: ListFilters = {
  mappingStatus: [FilterableTransactionMappingStatus.Failed],
  functionalAckStatus: [FilterableFunctionalAcknowledgmentStatus.Rejected],
  implementationAckStatus: [FilterableImplementationAcknowledgmentStatus.AcceptedWithErrors],
  mdnStatus: [FilterableTransactionMdnStatus.Overdue],
};
void validFilters;

const forwardCompatibleResponseValues = [
  TransactionMappingStatusSummaryStatusEnum.UnknownDefaultOpenApi,
  FunctionalAcknowledgmentStatus.UnknownDefaultOpenApi,
  ImplementationAcknowledgmentStatus.UnknownDefaultOpenApi,
  TransactionMdnStatus.UnknownDefaultOpenApi,
];
void forwardCompatibleResponseValues;

const invalidMappingFilter: ListFilters = {
  // @ts-expect-error Response fallback values are not valid request filters.
  mappingStatus: [TransactionMappingStatusSummaryStatusEnum.UnknownDefaultOpenApi],
};
const invalidFunctionalAckFilter: ListFilters = {
  // @ts-expect-error Response fallback values are not valid request filters.
  functionalAckStatus: [FunctionalAcknowledgmentStatus.UnknownDefaultOpenApi],
};
const invalidImplementationAckFilter: ListFilters = {
  // @ts-expect-error Response fallback values are not valid request filters.
  implementationAckStatus: [ImplementationAcknowledgmentStatus.UnknownDefaultOpenApi],
};
const invalidMdnFilter: ListFilters = {
  // @ts-expect-error Response fallback values are not valid request filters.
  mdnStatus: [TransactionMdnStatus.UnknownDefaultOpenApi],
};
void invalidMappingFilter;
void invalidFunctionalAckFilter;
void invalidImplementationAckFilter;
void invalidMdnFilter;
