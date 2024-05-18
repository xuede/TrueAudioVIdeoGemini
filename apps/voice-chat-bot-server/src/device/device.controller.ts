import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeviceService } from "./device.service";
import { DeviceControllerBase } from "./base/device.controller.base";

@swagger.ApiTags("devices")
@common.Controller("devices")
export class DeviceController extends DeviceControllerBase {
  constructor(protected readonly service: DeviceService) {
    super(service);
  }
}
