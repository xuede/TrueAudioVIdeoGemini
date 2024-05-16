import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MediaServiceBase } from "./base/media.service.base";

@Injectable()
export class MediaService extends MediaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
