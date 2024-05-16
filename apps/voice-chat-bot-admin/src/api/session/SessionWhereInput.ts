import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MediaWhereUniqueInput } from "../media/MediaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  media?: MediaWhereUniqueInput;
  mode?: "Option1";
  startTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
