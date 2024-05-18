import { DeviceWhereUniqueInput } from "./DeviceWhereUniqueInput";
import { DeviceUpdateInput } from "./DeviceUpdateInput";

export type UpdateDeviceArgs = {
  where: DeviceWhereUniqueInput;
  data: DeviceUpdateInput;
};
