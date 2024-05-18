import { Injectable } from "@nestjs/common";
import { CreateDeviceInput } from "../deviceModule/CreateDeviceInput";
import { UpdateDeviceInput } from "../deviceModule/UpdateDeviceInput";

@Injectable()
export class DeviceModuleService {
  constructor() {}
  async FetchDevices(args: string): Promise<CreateDeviceInput[]> {
    throw new Error("Not implemented");
  }
  async RegisterDevice(args: CreateDeviceInput): Promise<CreateDeviceInput> {
    throw new Error("Not implemented");
  }
  async UpdateDeviceStatus(args: UpdateDeviceInput): Promise<UpdateDeviceInput> {
    throw new Error("Not implemented");
  }
}
