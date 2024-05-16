import { Session } from "../session/Session";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  sessions?: Array<Session>;
  updatedAt: Date;
  username: string | null;
};
