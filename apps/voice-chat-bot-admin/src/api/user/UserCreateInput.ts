import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
