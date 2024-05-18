import * as graphql from "@nestjs/graphql";
import { VideoStreamResolverBase } from "./base/videoStream.resolver.base";
import { VideoStream } from "./base/VideoStream";
import { VideoStreamService } from "./videoStream.service";

@graphql.Resolver(() => VideoStream)
export class VideoStreamResolver extends VideoStreamResolverBase {
  constructor(protected readonly service: VideoStreamService) {
    super(service);
  }
}
