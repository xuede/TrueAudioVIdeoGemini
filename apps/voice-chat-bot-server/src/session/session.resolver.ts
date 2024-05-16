import * as graphql from "@nestjs/graphql";
import { SessionResolverBase } from "./base/session.resolver.base";
import { Session } from "./base/Session";
import { SessionService } from "./session.service";

@graphql.Resolver(() => Session)
export class SessionResolver extends SessionResolverBase {
  constructor(protected readonly service: SessionService) {
    super(service);
  }
}
