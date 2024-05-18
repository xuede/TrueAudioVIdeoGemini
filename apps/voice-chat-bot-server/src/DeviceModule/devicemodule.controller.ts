import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DeviceModuleService } from "./devicemodule.service";
import { UpdateDeviceInput } from "../deviceModule/UpdateDeviceInput";
import { CreateDeviceInput } from "../deviceModule/CreateDeviceInput";

@swagger.ApiTags("deviceModules")
@common.Controller("deviceModules")
export class DeviceModuleController {
  constructor(protected readonly service: DeviceModuleService) {}

  @common.Get("/devices")
  @swagger.ApiOkResponse({
    type: CreateDeviceInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchDevices(
    @common.Body()
    body: UpdateDeviceInput
  ): Promise<CreateDeviceInput[]> {
        return this.service.FetchDevices(body);
      }

  @common.Post("/register")
  @swagger.ApiOkResponse({
    type: CreateDeviceInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterDevice(
    @common.Body()
    body: UpdateDeviceInput
  ): Promise<CreateDeviceInput> {
        return this.service.RegisterDevice(body);
      }

  @common.Post("/update-status")
  @swagger.ApiOkResponse({
    type: UpdateDeviceInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateDeviceStatus(
    @common.Body()
    body: UpdateDeviceInput
  ): Promise<UpdateDeviceInput> {
        return this.service.UpdateDeviceStatus(body);
      }
}
