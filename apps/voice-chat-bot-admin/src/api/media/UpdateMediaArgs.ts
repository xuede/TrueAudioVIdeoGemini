import { MediaWhereUniqueInput } from "./MediaWhereUniqueInput";
import { MediaUpdateInput } from "./MediaUpdateInput";

export type UpdateMediaArgs = {
  where: MediaWhereUniqueInput;
  data: MediaUpdateInput;
};
