import { Media } from "../media/Media";
import { User } from "../user/User";

export type Session = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  media?: Media | null;
  mode?: "Option1" | null;
  startTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
