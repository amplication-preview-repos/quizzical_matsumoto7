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
import { GradeWhereUniqueInput } from "../../grade/base/GradeWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { StudentUpdateManyWithoutSectionsInput } from "./StudentUpdateManyWithoutSectionsInput";

@InputType()
class SectionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => GradeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GradeWhereUniqueInput)
  @IsOptional()
  @Field(() => GradeWhereUniqueInput, {
    nullable: true,
  })
  grade?: GradeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => StudentUpdateManyWithoutSectionsInput,
  })
  @ValidateNested()
  @Type(() => StudentUpdateManyWithoutSectionsInput)
  @IsOptional()
  @Field(() => StudentUpdateManyWithoutSectionsInput, {
    nullable: true,
  })
  students?: StudentUpdateManyWithoutSectionsInput;
}

export { SectionUpdateInput as SectionUpdateInput };