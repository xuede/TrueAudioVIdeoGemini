import { Module } from "@nestjs/common";
import { VideoModuleService } from "./videomodule.service";
import { VideoModuleController } from "./videomodule.controller";
import { VideoModuleResolver } from "./videomodule.resolver";

@Module({
  controllers: [VideoModuleController],
  providers: [VideoModuleService, VideoModuleResolver],
  exports: [VideoModuleService],
})
export class VideoModuleModule {}
