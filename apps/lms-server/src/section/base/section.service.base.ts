/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Section as PrismaSection,
  Student as PrismaStudent,
  Grade as PrismaGrade,
} from "@prisma/client";

export class SectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SectionCountArgs, "select">): Promise<number> {
    return this.prisma.section.count(args);
  }

  async sections(args: Prisma.SectionFindManyArgs): Promise<PrismaSection[]> {
    return this.prisma.section.findMany(args);
  }
  async section(
    args: Prisma.SectionFindUniqueArgs
  ): Promise<PrismaSection | null> {
    return this.prisma.section.findUnique(args);
  }
  async createSection(args: Prisma.SectionCreateArgs): Promise<PrismaSection> {
    return this.prisma.section.create(args);
  }
  async updateSection(args: Prisma.SectionUpdateArgs): Promise<PrismaSection> {
    return this.prisma.section.update(args);
  }
  async deleteSection(args: Prisma.SectionDeleteArgs): Promise<PrismaSection> {
    return this.prisma.section.delete(args);
  }

  async findStudents(
    parentId: string,
    args: Prisma.StudentFindManyArgs
  ): Promise<PrismaStudent[]> {
    return this.prisma.section
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .students(args);
  }

  async getGrade(parentId: string): Promise<PrismaGrade | null> {
    return this.prisma.section
      .findUnique({
        where: { id: parentId },
      })
      .grade();
  }
}
