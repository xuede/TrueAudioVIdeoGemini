import { VideoStreamWhereInput } from "./VideoStreamWhereInput";
import { VideoStreamOrderByInput } from "./VideoStreamOrderByInput";

export type VideoStreamFindManyArgs = {
  where?: VideoStreamWhereInput;
  orderBy?: Array<VideoStreamOrderByInput>;
  skip?: number;
  take?: number;
};
