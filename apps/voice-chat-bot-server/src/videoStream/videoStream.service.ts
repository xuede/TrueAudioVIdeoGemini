import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoStreamServiceBase } from "./base/videoStream.service.base";

@Injectable()
export class VideoStreamService extends VideoStreamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
