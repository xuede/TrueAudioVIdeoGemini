import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeviceWhereInput = {
  deviceName?: StringNullableFilter;
  deviceType?: "Option1";
  id?: StringFilter;
  status?: "Option1";
};
