/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AcademicYearWhereUniqueInput } from "./AcademicYearWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AcademicYearUpdateInput } from "./AcademicYearUpdateInput";

@ArgsType()
class UpdateAcademicYearArgs {
  @ApiProperty({
    required: true,
    type: () => AcademicYearWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AcademicYearWhereUniqueInput)
  @Field(() => AcademicYearWhereUniqueInput, { nullable: false })
  where!: AcademicYearWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AcademicYearUpdateInput,
  })
  @ValidateNested()
  @Type(() => AcademicYearUpdateInput)
  @Field(() => AcademicYearUpdateInput, { nullable: false })
  data!: AcademicYearUpdateInput;
}

export { UpdateAcademicYearArgs as UpdateAcademicYearArgs };