import { MediaWhereUniqueInput } from "../media/MediaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  endTime?: Date | null;
  media?: MediaWhereUniqueInput | null;
  mode?: "Option1" | null;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
