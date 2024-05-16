import { MediaWhereUniqueInput } from "../media/MediaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  endTime?: Date | null;
  media?: MediaWhereUniqueInput | null;
  mode?: "Option1" | null;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
