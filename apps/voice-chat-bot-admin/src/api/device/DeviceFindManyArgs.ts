import { DeviceWhereInput } from "./DeviceWhereInput";
import { DeviceOrderByInput } from "./DeviceOrderByInput";

export type DeviceFindManyArgs = {
  where?: DeviceWhereInput;
  orderBy?: Array<DeviceOrderByInput>;
  skip?: number;
  take?: number;
};
