import * as graphql from "@nestjs/graphql";
import { CreateDeviceInput } from "../deviceModule/CreateDeviceInput";
import { UpdateDeviceInput } from "../deviceModule/UpdateDeviceInput";
import { DeviceModuleService } from "./devicemodule.service";

export class DeviceModuleResolver {
  constructor(protected readonly service: DeviceModuleService) {}

  @graphql.Query(() => [CreateDeviceInput])
  async FetchDevices(
    @graphql.Args()
    args: string
  ): Promise<CreateDeviceInput[]> {
    return this.service.FetchDevices(args);
  }

  @graphql.Mutation(() => CreateDeviceInput)
  async RegisterDevice(
    @graphql.Args()
    args: CreateDeviceInput
  ): Promise<CreateDeviceInput> {
    return this.service.RegisterDevice(args);
  }

  @graphql.Mutation(() => UpdateDeviceInput)
  async UpdateDeviceStatus(
    @graphql.Args()
    args: UpdateDeviceInput
  ): Promise<UpdateDeviceInput> {
    return this.service.UpdateDeviceStatus(args);
  }
}
