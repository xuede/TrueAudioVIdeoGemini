/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { VideoStream } from "./VideoStream";
import { VideoStreamCountArgs } from "./VideoStreamCountArgs";
import { VideoStreamFindManyArgs } from "./VideoStreamFindManyArgs";
import { VideoStreamFindUniqueArgs } from "./VideoStreamFindUniqueArgs";
import { CreateVideoStreamArgs } from "./CreateVideoStreamArgs";
import { UpdateVideoStreamArgs } from "./UpdateVideoStreamArgs";
import { DeleteVideoStreamArgs } from "./DeleteVideoStreamArgs";
import { VideoStreamService } from "../videoStream.service";
@graphql.Resolver(() => VideoStream)
export class VideoStreamResolverBase {
  constructor(protected readonly service: VideoStreamService) {}

  async _videoStreamsMeta(
    @graphql.Args() args: VideoStreamCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [VideoStream])
  async videoStreams(
    @graphql.Args() args: VideoStreamFindManyArgs
  ): Promise<VideoStream[]> {
    return this.service.videoStreams(args);
  }

  @graphql.Query(() => VideoStream, { nullable: true })
  async videoStream(
    @graphql.Args() args: VideoStreamFindUniqueArgs
  ): Promise<VideoStream | null> {
    const result = await this.service.videoStream(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VideoStream)
  async createVideoStream(
    @graphql.Args() args: CreateVideoStreamArgs
  ): Promise<VideoStream> {
    return await this.service.createVideoStream({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => VideoStream)
  async updateVideoStream(
    @graphql.Args() args: UpdateVideoStreamArgs
  ): Promise<VideoStream | null> {
    try {
      return await this.service.updateVideoStream({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => VideoStream)
  async deleteVideoStream(
    @graphql.Args() args: DeleteVideoStreamArgs
  ): Promise<VideoStream | null> {
    try {
      return await this.service.deleteVideoStream(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
