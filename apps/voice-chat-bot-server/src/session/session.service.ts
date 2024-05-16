import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SessionServiceBase } from "./base/session.service.base";

@Injectable()
export class SessionService extends SessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
