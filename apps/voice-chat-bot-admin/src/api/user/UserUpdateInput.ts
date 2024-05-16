import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  sessions?: SessionUpdateManyWithoutUsersInput;
  username?: string | null;
};
