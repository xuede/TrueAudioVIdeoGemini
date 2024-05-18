import { Module } from "@nestjs/common";
import { VideoStreamModuleBase } from "./base/videoStream.module.base";
import { VideoStreamService } from "./videoStream.service";
import { VideoStreamController } from "./videoStream.controller";
import { VideoStreamResolver } from "./videoStream.resolver";

@Module({
  imports: [VideoStreamModuleBase],
  controllers: [VideoStreamController],
  providers: [VideoStreamService, VideoStreamResolver],
  exports: [VideoStreamService],
})
export class VideoStreamModule {}
