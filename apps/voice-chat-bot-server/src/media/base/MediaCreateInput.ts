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
import {
  IsInt,
  IsOptional,
  IsString,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumMediaMediaType } from "./EnumMediaMediaType";
import { SessionCreateNestedManyWithoutMediaItemsInput } from "./SessionCreateNestedManyWithoutMediaItemsInput";
import { Type } from "class-transformer";
import { EnumMediaTypeOfMedia } from "./EnumMediaTypeOfMedia";

@InputType()
class MediaCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duration?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  filePath?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  fileStoragePath?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  linkedSession?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  mediaDuration?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumMediaMediaType,
  })
  @IsEnum(EnumMediaMediaType)
  @IsOptional()
  @Field(() => EnumMediaMediaType, {
    nullable: true,
  })
  mediaType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  relatedSession?: string | null;

  @ApiProperty({
    required: false,
    type: () => SessionCreateNestedManyWithoutMediaItemsInput,
  })
  @ValidateNested()
  @Type(() => SessionCreateNestedManyWithoutMediaItemsInput)
  @IsOptional()
  @Field(() => SessionCreateNestedManyWithoutMediaItemsInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutMediaItemsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  storagePath?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalDuration?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumMediaTypeOfMedia,
  })
  @IsEnum(EnumMediaTypeOfMedia)
  @IsOptional()
  @Field(() => EnumMediaTypeOfMedia, {
    nullable: true,
  })
  typeOfMedia?: "Option1" | null;
}

export { MediaCreateInput as MediaCreateInput };
