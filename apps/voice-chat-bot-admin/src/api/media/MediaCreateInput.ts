import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutMediaItemsInput } from "./SessionCreateNestedManyWithoutMediaItemsInput";

export type MediaCreateInput = {
  duration?: number | null;
  filePath?: InputJsonValue;
  fileStoragePath?: InputJsonValue;
  linkedSession?: string | null;
  mediaDuration?: number | null;
  mediaType?: "Option1" | null;
  relatedSession?: string | null;
  sessions?: SessionCreateNestedManyWithoutMediaItemsInput;
  storagePath?: InputJsonValue;
  totalDuration?: number | null;
  typeOfMedia?: "Option1" | null;
};
