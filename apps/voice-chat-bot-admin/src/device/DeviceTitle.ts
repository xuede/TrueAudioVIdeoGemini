import { Device as TDevice } from "../api/device/Device";

export const DEVICE_TITLE_FIELD = "deviceName";

export const DeviceTitle = (record: TDevice): string => {
  return record.deviceName?.toString() || String(record.id);
};
