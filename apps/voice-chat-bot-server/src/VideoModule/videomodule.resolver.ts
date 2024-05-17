import * as graphql from "@nestjs/graphql";
import { VideoModuleService } from "./videomodule.service";

export class VideoModuleResolver {
  constructor(protected readonly service: VideoModuleService) {}

  @graphql.Query(() => String)
  async StartVideoStream(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.StartVideoStream(args);
  }

  @graphql.Query(() => String)
  async StopVideoStream(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.StopVideoStream(args);
  }

  @graphql.Query(() => String)
  async SwitchCamera(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SwitchCamera(args);
  }
}
