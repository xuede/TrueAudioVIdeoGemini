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
import { DeviceWhereInput } from "./DeviceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DeviceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DeviceWhereInput,
  })
  @ValidateNested()
  @Type(() => DeviceWhereInput)
  @IsOptional()
  @Field(() => DeviceWhereInput, {
    nullable: true,
  })
  every?: DeviceWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeviceWhereInput,
  })
  @ValidateNested()
  @Type(() => DeviceWhereInput)
  @IsOptional()
  @Field(() => DeviceWhereInput, {
    nullable: true,
  })
  some?: DeviceWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeviceWhereInput,
  })
  @ValidateNested()
  @Type(() => DeviceWhereInput)
  @IsOptional()
  @Field(() => DeviceWhereInput, {
    nullable: true,
  })
  none?: DeviceWhereInput;
}
export { DeviceListRelationFilter as DeviceListRelationFilter };
