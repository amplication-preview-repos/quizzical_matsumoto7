/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Grade } from "./Grade";
import { GradeCountArgs } from "./GradeCountArgs";
import { GradeFindManyArgs } from "./GradeFindManyArgs";
import { GradeFindUniqueArgs } from "./GradeFindUniqueArgs";
import { CreateGradeArgs } from "./CreateGradeArgs";
import { UpdateGradeArgs } from "./UpdateGradeArgs";
import { DeleteGradeArgs } from "./DeleteGradeArgs";
import { SectionFindManyArgs } from "../../section/base/SectionFindManyArgs";
import { Section } from "../../section/base/Section";
import { StudentFindManyArgs } from "../../student/base/StudentFindManyArgs";
import { Student } from "../../student/base/Student";
import { GradeService } from "../grade.service";
@graphql.Resolver(() => Grade)
export class GradeResolverBase {
  constructor(protected readonly service: GradeService) {}

  async _gradesMeta(
    @graphql.Args() args: GradeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Grade])
  async grades(@graphql.Args() args: GradeFindManyArgs): Promise<Grade[]> {
    return this.service.grades(args);
  }

  @graphql.Query(() => Grade, { nullable: true })
  async grade(
    @graphql.Args() args: GradeFindUniqueArgs
  ): Promise<Grade | null> {
    const result = await this.service.grade(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Grade)
  async createGrade(@graphql.Args() args: CreateGradeArgs): Promise<Grade> {
    return await this.service.createGrade({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Grade)
  async updateGrade(
    @graphql.Args() args: UpdateGradeArgs
  ): Promise<Grade | null> {
    try {
      return await this.service.updateGrade({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Grade)
  async deleteGrade(
    @graphql.Args() args: DeleteGradeArgs
  ): Promise<Grade | null> {
    try {
      return await this.service.deleteGrade(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Section], { name: "sections" })
  async findSections(
    @graphql.Parent() parent: Grade,
    @graphql.Args() args: SectionFindManyArgs
  ): Promise<Section[]> {
    const results = await this.service.findSections(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Student], { name: "students" })
  async findStudents(
    @graphql.Parent() parent: Grade,
    @graphql.Args() args: StudentFindManyArgs
  ): Promise<Student[]> {
    const results = await this.service.findStudents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
