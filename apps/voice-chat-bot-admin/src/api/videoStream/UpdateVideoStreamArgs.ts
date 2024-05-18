import { VideoStreamWhereUniqueInput } from "./VideoStreamWhereUniqueInput";
import { VideoStreamUpdateInput } from "./VideoStreamUpdateInput";

export type UpdateVideoStreamArgs = {
  where: VideoStreamWhereUniqueInput;
  data: VideoStreamUpdateInput;
};
