import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutMediaItemsInput } from "./SessionUpdateManyWithoutMediaItemsInput";

export type MediaUpdateInput = {
  duration?: number | null;
  filePath?: InputJsonValue;
  fileStoragePath?: InputJsonValue;
  linkedSession?: string | null;
  mediaDuration?: number | null;
  mediaType?: "Option1" | null;
  relatedSession?: string | null;
  sessions?: SessionUpdateManyWithoutMediaItemsInput;
  storagePath?: InputJsonValue;
  totalDuration?: number | null;
  typeOfMedia?: "Option1" | null;
};
