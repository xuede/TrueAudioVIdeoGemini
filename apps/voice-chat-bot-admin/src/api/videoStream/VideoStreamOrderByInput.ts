import { SortOrder } from "../../util/SortOrder";

export type VideoStreamOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sourceDevice?: SortOrder;
  status?: SortOrder;
  streamId?: SortOrder;
  targetDevice?: SortOrder;
  updatedAt?: SortOrder;
};
