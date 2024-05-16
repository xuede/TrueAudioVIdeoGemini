import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "id";

export const SessionTitle = (record: TSession): string => {
  return record.id?.toString() || String(record.id);
};
