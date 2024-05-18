import * as graphql from "@nestjs/graphql";
import { DeviceResolverBase } from "./base/device.resolver.base";
import { Device } from "./base/Device";
import { DeviceService } from "./device.service";

@graphql.Resolver(() => Device)
export class DeviceResolver extends DeviceResolverBase {
  constructor(protected readonly service: DeviceService) {
    super(service);
  }
}
