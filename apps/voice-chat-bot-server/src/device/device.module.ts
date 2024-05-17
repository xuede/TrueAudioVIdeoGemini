import { Module } from "@nestjs/common";
import { DeviceModuleBase } from "./base/device.module.base";
import { DeviceService } from "./device.service";
import { DeviceController } from "./device.controller";
import { DeviceResolver } from "./device.resolver";

@Module({
  imports: [DeviceModuleBase],
  controllers: [DeviceController],
  providers: [DeviceService, DeviceResolver],
  exports: [DeviceService],
})
export class DeviceModule {}
