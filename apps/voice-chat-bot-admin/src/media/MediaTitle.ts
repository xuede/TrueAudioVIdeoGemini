import { Media as TMedia } from "../api/media/Media";

export const MEDIA_TITLE_FIELD = "linkedSession";

export const MediaTitle = (record: TMedia): string => {
  return record.linkedSession?.toString() || String(record.id);
};
