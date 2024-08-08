/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SectionService } from "../section.service";
import { SectionCreateInput } from "./SectionCreateInput";
import { Section } from "./Section";
import { SectionFindManyArgs } from "./SectionFindManyArgs";
import { SectionWhereUniqueInput } from "./SectionWhereUniqueInput";
import { SectionUpdateInput } from "./SectionUpdateInput";
import { StudentFindManyArgs } from "../../student/base/StudentFindManyArgs";
import { Student } from "../../student/base/Student";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

export class SectionControllerBase {
  constructor(protected readonly service: SectionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Section })
  async createSection(
    @common.Body() data: SectionCreateInput
  ): Promise<Section> {
    return await this.service.createSection({
      data: {
        ...data,

        grade: data.grade
          ? {
              connect: data.grade,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        grade: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Section] })
  @ApiNestedQuery(SectionFindManyArgs)
  async sections(@common.Req() request: Request): Promise<Section[]> {
    const args = plainToClass(SectionFindManyArgs, request.query);
    return this.service.sections({
      ...args,
      select: {
        createdAt: true,

        grade: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Section })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async section(
    @common.Param() params: SectionWhereUniqueInput
  ): Promise<Section | null> {
    const result = await this.service.section({
      where: params,
      select: {
        createdAt: true,

        grade: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Section })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSection(
    @common.Param() params: SectionWhereUniqueInput,
    @common.Body() data: SectionUpdateInput
  ): Promise<Section | null> {
    try {
      return await this.service.updateSection({
        where: params,
        data: {
          ...data,

          grade: data.grade
            ? {
                connect: data.grade,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          grade: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Section })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSection(
    @common.Param() params: SectionWhereUniqueInput
  ): Promise<Section | null> {
    try {
      return await this.service.deleteSection({
        where: params,
        select: {
          createdAt: true,

          grade: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/students")
  @ApiNestedQuery(StudentFindManyArgs)
  async findStudents(
    @common.Req() request: Request,
    @common.Param() params: SectionWhereUniqueInput
  ): Promise<Student[]> {
    const query = plainToClass(StudentFindManyArgs, request.query);
    const results = await this.service.findStudents(params.id, {
      ...query,
      select: {
        age: true,
        createdAt: true,

        gender: {
          select: {
            id: true,
          },
        },

        grade: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,

        section: {
          select: {
            id: true,
          },
        },

        subjects: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/students")
  async connectStudents(
    @common.Param() params: SectionWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      students: {
        connect: body,
      },
    };
    await this.service.updateSection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/students")
  async updateStudents(
    @common.Param() params: SectionWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      students: {
        set: body,
      },
    };
    await this.service.updateSection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/students")
  async disconnectStudents(
    @common.Param() params: SectionWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      students: {
        disconnect: body,
      },
    };
    await this.service.updateSection({
      where: params,
      data,
      select: { id: true },
    });
  }
}