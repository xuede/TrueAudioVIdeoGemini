/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum } from "class-validator";
import { EnumDeviceDeviceType } from "./EnumDeviceDeviceType";
import { StringFilter } from "../../util/StringFilter";
import { EnumDeviceStatus } from "./EnumDeviceStatus";

@InputType()
class DeviceWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  deviceName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumDeviceDeviceType,
  })
  @IsEnum(EnumDeviceDeviceType)
  @IsOptional()
  @Field(() => EnumDeviceDeviceType, {
    nullable: true,
  })
  deviceType?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumDeviceStatus,
  })
  @IsEnum(EnumDeviceStatus)
  @IsOptional()
  @Field(() => EnumDeviceStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { DeviceWhereInput as DeviceWhereInput };
