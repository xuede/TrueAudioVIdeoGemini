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
import { IsDate, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { MediaWhereUniqueInput } from "../../media/base/MediaWhereUniqueInput";
import { EnumSessionMode } from "./EnumSessionMode";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class SessionCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => MediaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MediaWhereUniqueInput)
  @IsOptional()
  @Field(() => MediaWhereUniqueInput, {
    nullable: true,
  })
  media?: MediaWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumSessionMode,
  })
  @IsEnum(EnumSessionMode)
  @IsOptional()
  @Field(() => EnumSessionMode, {
    nullable: true,
  })
  mode?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { SessionCreateInput as SessionCreateInput };