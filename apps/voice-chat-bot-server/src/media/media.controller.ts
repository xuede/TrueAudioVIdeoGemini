import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MediaService } from "./media.service";
import { MediaControllerBase } from "./base/media.controller.base";

@swagger.ApiTags("media")
@common.Controller("media")
export class MediaController extends MediaControllerBase {
  constructor(protected readonly service: MediaService) {
    super(service);
  }
}
