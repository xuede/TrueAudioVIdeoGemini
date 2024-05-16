import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type MediaWhereInput = {
  duration?: IntNullableFilter;
  filePath?: JsonFilter;
  fileStoragePath?: JsonFilter;
  id?: StringFilter;
  linkedSession?: StringNullableFilter;
  mediaDuration?: IntNullableFilter;
  mediaType?: "Option1";
  relatedSession?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  storagePath?: JsonFilter;
  totalDuration?: IntNullableFilter;
  typeOfMedia?: "Option1";
};
