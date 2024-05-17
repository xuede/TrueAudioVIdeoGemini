import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VideoModuleService } from "./videomodule.service";

@swagger.ApiTags("videoModules")
@common.Controller("videoModules")
export class VideoModuleController {
  constructor(protected readonly service: VideoModuleService) {}

  @common.Get("/:id/start-video-stream")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartVideoStream(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.StartVideoStream(body);
      }

  @common.Get("/:id/stop-video-stream")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StopVideoStream(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.StopVideoStream(body);
      }

  @common.Get("/:id/switch-camera")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SwitchCamera(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SwitchCamera(body);
      }
}
