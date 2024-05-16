import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  filePath?: SortOrder;
  fileStoragePath?: SortOrder;
  id?: SortOrder;
  linkedSession?: SortOrder;
  mediaDuration?: SortOrder;
  mediaType?: SortOrder;
  relatedSession?: SortOrder;
  storagePath?: SortOrder;
  totalDuration?: SortOrder;
  typeOfMedia?: SortOrder;
  updatedAt?: SortOrder;
};
