import { Module } from "@nestjs/common";
import { MediaModuleBase } from "./base/media.module.base";
import { MediaService } from "./media.service";
import { MediaController } from "./media.controller";
import { MediaResolver } from "./media.resolver";

@Module({
  imports: [MediaModuleBase],
  controllers: [MediaController],
  providers: [MediaService, MediaResolver],
  exports: [MediaService],
})
export class MediaModule {}
