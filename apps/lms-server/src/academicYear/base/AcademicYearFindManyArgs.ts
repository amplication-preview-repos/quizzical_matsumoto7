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
import { AcademicYearWhereInput } from "./AcademicYearWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AcademicYearOrderByInput } from "./AcademicYearOrderByInput";

@ArgsType()
class AcademicYearFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AcademicYearWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AcademicYearWhereInput, { nullable: true })
  @Type(() => AcademicYearWhereInput)
  where?: AcademicYearWhereInput;

  @ApiProperty({
    required: false,
    type: [AcademicYearOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AcademicYearOrderByInput], { nullable: true })
  @Type(() => AcademicYearOrderByInput)
  orderBy?: Array<AcademicYearOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AcademicYearFindManyArgs as AcademicYearFindManyArgs };