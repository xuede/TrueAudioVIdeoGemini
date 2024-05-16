import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type Media = {
  createdAt: Date;
  duration: number | null;
  filePath: JsonValue;
  fileStoragePath: JsonValue;
  id: string;
  linkedSession: string | null;
  mediaDuration: number | null;
  mediaType?: "Option1" | null;
  relatedSession: string | null;
  sessions?: Array<Session>;
  storagePath: JsonValue;
  totalDuration: number | null;
  typeOfMedia?: "Option1" | null;
  updatedAt: Date;
};
