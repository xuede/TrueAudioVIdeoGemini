/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, VideoStream as PrismaVideoStream } from "@prisma/client";

export class VideoStreamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VideoStreamCountArgs, "select">
  ): Promise<number> {
    return this.prisma.videoStream.count(args);
  }

  async videoStreams<T extends Prisma.VideoStreamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoStreamFindManyArgs>
  ): Promise<PrismaVideoStream[]> {
    return this.prisma.videoStream.findMany<Prisma.VideoStreamFindManyArgs>(
      args
    );
  }
  async videoStream<T extends Prisma.VideoStreamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoStreamFindUniqueArgs>
  ): Promise<PrismaVideoStream | null> {
    return this.prisma.videoStream.findUnique(args);
  }
  async createVideoStream<T extends Prisma.VideoStreamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoStreamCreateArgs>
  ): Promise<PrismaVideoStream> {
    return this.prisma.videoStream.create<T>(args);
  }
  async updateVideoStream<T extends Prisma.VideoStreamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoStreamUpdateArgs>
  ): Promise<PrismaVideoStream> {
    return this.prisma.videoStream.update<T>(args);
  }
  async deleteVideoStream<T extends Prisma.VideoStreamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoStreamDeleteArgs>
  ): Promise<PrismaVideoStream> {
    return this.prisma.videoStream.delete(args);
  }
}
