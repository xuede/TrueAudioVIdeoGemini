import { VideoStream as TVideoStream } from "../api/videoStream/VideoStream";

export const VIDEOSTREAM_TITLE_FIELD = "sourceDevice";

export const VideoStreamTitle = (record: TVideoStream): string => {
  return record.sourceDevice?.toString() || String(record.id);
};
