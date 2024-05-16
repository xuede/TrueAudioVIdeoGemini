import { MediaWhereInput } from "./MediaWhereInput";

export type MediaListRelationFilter = {
  every?: MediaWhereInput;
  some?: MediaWhereInput;
  none?: MediaWhereInput;
};
