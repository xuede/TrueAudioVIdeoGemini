import { Module } from "@nestjs/common";
import { DeviceModuleService } from "./devicemodule.service";
import { DeviceModuleController } from "./devicemodule.controller";
import { DeviceModuleResolver } from "./devicemodule.resolver";

@Module({
  controllers: [DeviceModuleController],
  providers: [DeviceModuleService, DeviceModuleResolver],
  exports: [DeviceModuleService],
})
export class DeviceModuleModule {}
