import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VideoStreamWhereInput = {
  id?: StringFilter;
  sourceDevice?: StringNullableFilter;
  status?: "Option1";
  streamId?: StringNullableFilter;
  targetDevice?: StringNullableFilter;
};
