/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VideoStreamService } from "../videoStream.service";
import { VideoStreamCreateInput } from "./VideoStreamCreateInput";
import { VideoStream } from "./VideoStream";
import { VideoStreamFindManyArgs } from "./VideoStreamFindManyArgs";
import { VideoStreamWhereUniqueInput } from "./VideoStreamWhereUniqueInput";
import { VideoStreamUpdateInput } from "./VideoStreamUpdateInput";

export class VideoStreamControllerBase {
  constructor(protected readonly service: VideoStreamService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VideoStream })
  async createVideoStream(
    @common.Body() data: VideoStreamCreateInput
  ): Promise<VideoStream> {
    return await this.service.createVideoStream({
      data: data,
      select: {
        createdAt: true,
        id: true,
        sourceDevice: true,
        status: true,
        streamId: true,
        targetDevice: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VideoStream] })
  @ApiNestedQuery(VideoStreamFindManyArgs)
  async videoStreams(@common.Req() request: Request): Promise<VideoStream[]> {
    const args = plainToClass(VideoStreamFindManyArgs, request.query);
    return this.service.videoStreams({
      ...args,
      select: {
        createdAt: true,
        id: true,
        sourceDevice: true,
        status: true,
        streamId: true,
        targetDevice: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VideoStream })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async videoStream(
    @common.Param() params: VideoStreamWhereUniqueInput
  ): Promise<VideoStream | null> {
    const result = await this.service.videoStream({
      where: params,
      select: {
        createdAt: true,
        id: true,
        sourceDevice: true,
        status: true,
        streamId: true,
        targetDevice: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VideoStream })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVideoStream(
    @common.Param() params: VideoStreamWhereUniqueInput,
    @common.Body() data: VideoStreamUpdateInput
  ): Promise<VideoStream | null> {
    try {
      return await this.service.updateVideoStream({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          sourceDevice: true,
          status: true,
          streamId: true,
          targetDevice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: VideoStream })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVideoStream(
    @common.Param() params: VideoStreamWhereUniqueInput
  ): Promise<VideoStream | null> {
    try {
      return await this.service.deleteVideoStream({
        where: params,
        select: {
          createdAt: true,
          id: true,
          sourceDevice: true,
          status: true,
          streamId: true,
          targetDevice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
