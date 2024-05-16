import * as graphql from "@nestjs/graphql";
import { MediaResolverBase } from "./base/media.resolver.base";
import { Media } from "./base/Media";
import { MediaService } from "./media.service";

@graphql.Resolver(() => Media)
export class MediaResolver extends MediaResolverBase {
  constructor(protected readonly service: MediaService) {
    super(service);
  }
}
